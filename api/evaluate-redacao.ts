import { MINIMUM_LINES, estimatedLineCount, evaluateWithGemini, evaluateAlgorithmically } from '../server/redacaoService';
import { getUserFromAuthHeader } from '../server/supabaseServer';
import { hasAiQuotaRemaining, recordAiEvaluationUsed } from '../server/redacaoRateLimit';

// Vercel Serverless Function: POST /api/evaluate-redacao
// Mirrors the logic used for local dev via `npm run dev` (server.ts) — both
// call into ../server/redacaoService and ../server/redacaoRateLimit so the
// grading prompt and quota rules never drift between the two runtimes.

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { theme, text } = req.body || {};

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Texto da redação é obrigatório' });
  }

  if (estimatedLineCount(text) < MINIMUM_LINES) {
    return res.status(422).json({
      error: `A redação precisa ter pelo menos ${MINIMUM_LINES} linhas estimadas para ser avaliada.`,
      minimumLines: MINIMUM_LINES,
      currentLines: estimatedLineCount(text),
    });
  }

  const authUser = await getUserFromAuthHeader(req.headers.authorization);
  if (!authUser) {
    return res.status(401).json({ error: 'É necessário estar autenticado para avaliar a redação.' });
  }

  const quotaAvailable = await hasAiQuotaRemaining(authUser.id, authUser.token);

  if (quotaAvailable) {
    const aiResult = await evaluateWithGemini(theme, text);
    if (aiResult) {
      await recordAiEvaluationUsed(authUser.id, authUser.token);
      return res.status(200).json({ ...aiResult, aiEvaluated: true });
    }
  }

  const fallback = evaluateAlgorithmically(theme, text);
  return res.status(200).json({
    ...fallback,
    aiEvaluated: false,
    ...(quotaAvailable ? {} : { limitReached: true }),
  });
}
