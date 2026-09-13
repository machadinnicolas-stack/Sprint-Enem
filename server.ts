// Must run before any local import that reads process.env at module load time
// (server/supabaseServer.ts does) — ESM evaluates imports in order, and a
// `dotenv.config()` call placed after the imports runs too late for those.
import 'dotenv/config';

import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  MINIMUM_LINES,
  AI_UNAVAILABLE_MESSAGE,
  estimatedLineCount,
  evaluateWithGemini,
  buildWritingChecklist,
} from './server/redacaoService';
import { getUserFromAuthHeader } from './server/supabaseServer';
import { getAiQuotaStatus, recordAiEvaluationUsed } from './server/redacaoRateLimit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// AI Evaluate Redação Endpoint — mirrors api/evaluate-redacao.ts (the Vercel
// serverless function used in production). Both share ./server/redacaoService
// and ./server/redacaoRateLimit so the grading prompt and quota rules never
// drift between the two runtimes.
//
// A score is only ever returned when it came from the grader. If grading fails
// this responds 503 rather than substituting a heuristic number: telling a
// student they scored 760 when the real grade is 200 is worse than no answer.
app.post('/api/evaluate-redacao', async (req: Request, res: Response) => {
  const { theme, text } = req.body;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: 'Texto da redação é obrigatório' });
  }

  if (estimatedLineCount(text) < MINIMUM_LINES) {
    return res.status(422).json({
      error: `A redação precisa ter pelo menos ${MINIMUM_LINES} linhas estimadas para ser avaliada.`,
      minimumLines: MINIMUM_LINES,
      currentLines: estimatedLineCount(text)
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
      checklist: buildWritingChecklist(text)
    });
  }

  const aiResult = await evaluateWithGemini(theme, text);
  if (!aiResult) {
    return res.status(503).json({ error: AI_UNAVAILABLE_MESSAGE });
  }

  await recordAiEvaluationUsed(authUser.id);
  return res.status(200).json({ ...aiResult, aiEvaluated: true });
});

// Start Server with Vite Middleware in Development
async function start() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sprint ENEM server running on http://localhost:${PORT}`);
  });
}

start();
