import {
  MINIMUM_LINES,
  AI_UNAVAILABLE_MESSAGE,
  estimatedLineCount,
  evaluateWithGemini,
  buildWritingChecklist,
} from '../server/redacaoService';
import { getUserFromAuthHeader } from '../server/supabaseServer';
import { getAiQuotaStatus, recordAiEvaluationUsed } from '../server/redacaoRateLimit';

// Vercel Serverless Function: POST /api/evaluate-redacao
// Mirrors the logic used for local dev via `npm run dev` (server.ts) — both
// call into ../server/redacaoService and ../server/redacaoRateLimit so the
// grading prompt and quota rules never drift between the two runtimes.
//
// A score is only ever returned when it came from the grader. If grading fails
// this responds 503 rather than substituting a heuristic number: telling a
// student they scored 760 when the real grade is 200 is worse than no answer.

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

  const quota = await getAiQuotaStatus(authUser.id);

  if (quota === 'unavailable') {
    return res.status(503).json({ error: AI_UNAVAILABLE_MESSAGE });
  }

  if (quota === 'exhausted') {
    return res.status(200).json({
      aiEvaluated: false,
      limitReached: true,
      checklist: buildWritingChecklist(text),
    });
  }

  const aiResult = await evaluateWithGemini(theme, text);
  if (!aiResult) {
    return res.status(503).json({ error: AI_UNAVAILABLE_MESSAGE });
  }

  await recordAiEvaluationUsed(authUser.id);
  return res.status(200).json({ ...aiResult, aiEvaluated: true });
}
