import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../services/supabase';

// Keyed by Supabase Auth's stable `error_code` (see supabase.com/docs/guides/auth/debugging/error-codes),
// not the free-form `message`, which often has user input interpolated into it and won't string-match reliably.
const AUTH_ERROR_MESSAGES: Record<string, string> = {
  user_already_exists: 'Esse e-mail já está cadastrado. Tente fazer login.',
  invalid_credentials: 'E-mail ou senha incorretos.',
  weak_password: 'A senha precisa ter pelo menos 6 caracteres.',
  email_address_invalid: 'E-mail inválido.',
  email_not_confirmed: 'Confirme seu e-mail antes de entrar. Verifique sua caixa de entrada.',
  over_email_send_rate_limit: 'Muitas tentativas. Aguarde um momento e tente de novo.',
  over_request_rate_limit: 'Muitas tentativas. Aguarde um momento e tente de novo.',
  same_password: 'A nova senha precisa ser diferente da senha atual.',
};

export function translateAuthError(err: unknown): string {
  const code = (err as { code?: string })?.code;
  if (code && AUTH_ERROR_MESSAGES[code]) return AUTH_ERROR_MESSAGES[code];
  return 'Não foi possível completar a operação. Tente novamente.';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  // Set when the user arrived via a password-reset email link, so the app can
  // show a "set new password" screen instead of dropping them straight in —
  // Supabase's recovery link signs them in with a temporary session.
  const [passwordRecovery, setPasswordRecovery] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
      if (event === 'PASSWORD_RECOVERY') setPasswordRecovery(true);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin,
    });
    if (error) throw error;
  };

  const updatePassword = async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw error;
    setPasswordRecovery(false);
  };

  return { user, authLoading, passwordRecovery, signUp, signIn, logout, resetPassword, updatePassword };
}
