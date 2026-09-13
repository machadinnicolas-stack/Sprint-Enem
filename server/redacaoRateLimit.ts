import { supabaseAdmin } from './supabaseServer';

// Daily cap on Gemini-backed evaluations per user. Sprint ENEM is sold as a
// one-time purchase (no recurring revenue), so there's nothing to offset
// unbounded AI spend — this keeps per-user cost predictable.
export const DAILY_AI_EVALUATION_LIMIT = 5;

// 'unavailable' is distinct from 'exhausted' on purpose: if the counter can't be
// read we must not tell the student they hit a daily limit they never reached.
export type QuotaStatus = 'available' | 'exhausted' | 'unavailable';

// Read-only check. Deliberately does NOT record usage — only a successful Gemini
// call (see recordAiEvaluationUsed) should spend quota, so a failed request
// never burns the user's daily allowance for nothing.
export async function getAiQuotaStatus(userId: string): Promise<QuotaStatus> {
  if (!supabaseAdmin) {
    console.error('SUPABASE_SECRET_KEY is not set — cannot meter AI usage, refusing AI evaluation.');
    return 'unavailable';
  }

  const { data, error } = await supabaseAdmin.rpc('redacao_ai_usage_today', { p_user_id: userId });

  if (error) {
    console.error('Failed to read AI usage counter:', error);
    return 'unavailable';
  }

  return (data ?? 0) < DAILY_AI_EVALUATION_LIMIT ? 'available' : 'exhausted';
}

// Call only after a Gemini evaluation actually succeeded, to record the spend.
// A failure here is logged but not surfaced: the student already has a valid
// grading, and losing one tick of accounting is better than erroring on them.
export async function recordAiEvaluationUsed(userId: string): Promise<void> {
  if (!supabaseAdmin) return;

  const { error } = await supabaseAdmin.rpc('redacao_ai_usage_increment', { p_user_id: userId });
  if (error) console.error('Failed to record AI usage:', error);
}
