import { supabaseForToken } from './supabaseServer';

// Daily cap on Gemini-backed evaluations per user. Sprint ENEM is sold as a
// one-time purchase (no recurring revenue), so there's nothing to offset
// unbounded AI spend — this keeps per-user cost predictable. The algorithmic
// fallback in redacaoService stays unlimited once this quota is hit.
export const DAILY_AI_EVALUATION_LIMIT = 5;

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

// Read-only check: does this user still have AI evaluations left today?
// Deliberately does NOT record usage — only a successful Gemini call (see
// recordAiEvaluationUsed) should spend quota, so a missing API key or a
// failed Gemini request never burns the user's daily allowance for nothing.
export async function hasAiQuotaRemaining(userId: string, accessToken: string): Promise<boolean> {
  const client = supabaseForToken(accessToken);

  const { data: existing } = await client
    .from('redacao_ai_usage')
    .select('usage_date, count')
    .eq('user_id', userId)
    .maybeSingle();

  if (!existing || existing.usage_date !== today()) return true;
  return existing.count < DAILY_AI_EVALUATION_LIMIT;
}

// Call only after a Gemini evaluation actually succeeded, to record the spend.
export async function recordAiEvaluationUsed(userId: string, accessToken: string): Promise<void> {
  const client = supabaseForToken(accessToken);

  const { data: existing } = await client
    .from('redacao_ai_usage')
    .select('usage_date, count')
    .eq('user_id', userId)
    .maybeSingle();

  if (!existing || existing.usage_date !== today()) {
    await client.from('redacao_ai_usage').upsert({ user_id: userId, usage_date: today(), count: 1 });
    return;
  }

  await client
    .from('redacao_ai_usage')
    .update({ count: existing.count + 1 })
    .eq('user_id', userId);
}
