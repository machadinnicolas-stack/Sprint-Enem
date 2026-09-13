import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

// Fall back to well-formed placeholders (mirrors src/services/supabase.ts) so a
// misconfigured environment fails each request with a normal 401 instead of
// crashing the whole server process at startup.
const FALLBACK_URL = 'https://placeholder.supabase.co';
const FALLBACK_ANON_KEY = 'placeholder-anon-key';

// Used only to validate a user's access token via supabase.auth.getUser(jwt).
const supabaseAuthClient = createClient(supabaseUrl || FALLBACK_URL, supabaseAnonKey || FALLBACK_ANON_KEY);

// Service-role client, server-side only — never import this from src/.
// The AI usage counter is deliberately not writable by the browser: with the
// public anon key and their own JWT, a user could reset their own counter and
// spend unbounded Gemini budget. RLS denies user writes on that table and only
// this key can move it (see supabase/schema.sql).
export const supabaseAdmin: SupabaseClient | null =
  supabaseUrl && supabaseSecretKey
    ? createClient(supabaseUrl, supabaseSecretKey, { auth: { persistSession: false } })
    : null;

export interface AuthenticatedUser {
  id: string;
  email: string | undefined;
}

// Verifies the bearer token from an incoming request's Authorization header
// and returns the authenticated user, or null if missing/invalid.
export async function getUserFromAuthHeader(
  authHeader: string | string[] | undefined
): Promise<AuthenticatedUser | null> {
  const header = Array.isArray(authHeader) ? authHeader[0] : authHeader;
  if (!header?.startsWith('Bearer ')) return null;

  const token = header.slice('Bearer '.length).trim();
  if (!token) return null;

  const { data, error } = await supabaseAuthClient.auth.getUser(token);
  if (error || !data.user) return null;

  return { id: data.user.id, email: data.user.email };
}
