import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

// Fall back to well-formed placeholders (mirrors src/services/supabase.ts) so a
// misconfigured environment fails each request with a normal 401 instead of
// crashing the whole server process at startup.
const FALLBACK_URL = 'https://placeholder.supabase.co';
const FALLBACK_ANON_KEY = 'placeholder-anon-key';

// Used only to validate a user's access token via supabase.auth.getUser(jwt) —
// never for RLS-scoped table reads/writes (see supabaseForToken below).
const supabaseAuthClient = createClient(supabaseUrl || FALLBACK_URL, supabaseAnonKey || FALLBACK_ANON_KEY);

// Returns a client that sends the user's own JWT on every request, so table
// queries run under that user's Row Level Security policies instead of an
// unscoped service role.
export function supabaseForToken(accessToken: string) {
  return createClient(supabaseUrl || FALLBACK_URL, supabaseAnonKey || FALLBACK_ANON_KEY, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  });
}

export interface AuthenticatedUser {
  id: string;
  token: string;
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

  return { id: data.user.id, token };
}
