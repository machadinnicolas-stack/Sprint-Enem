import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useAuth, translateAuthError } from '../hooks/useAuth';
import { LegalModal } from './LegalModal';
import { LegalDocument, TERMOS_DE_USO, POLITICA_DE_PRIVACIDADE } from '../data/legalContent';

export const AuthScreen: React.FC = () => {
  const { signIn, signUp, resetPassword } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [openDoc, setOpenDoc] = useState<LegalDocument | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      if (mode === 'login') {
        await signIn(email, password);
      } else {
        await signUp(email, password);
      }
    } catch (err) {
      setError(translateAuthError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (err) {
      setError(translateAuthError(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (next: 'login' | 'signup' | 'forgot') => {
    setError(null);
    setResetSent(false);
    setMode(next);
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]/70 text-[#191c1d] flex flex-col items-center justify-center px-5 py-10">
      <motion.div
        key={mode}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full max-w-sm"
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#ede0ff] text-[#630ed4] flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px] fill-1">bolt</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Sprint ENEM</h1>
          <p className="text-sm text-[#7b7487] text-center">
            {mode === 'login' && 'Entre para acessar seu plano de estudos'}
            {mode === 'signup' && 'Crie sua conta para começar'}
            {mode === 'forgot' && 'Recupere o acesso à sua conta'}
          </p>
        </div>

        {mode === 'forgot' ? (
          resetSent ? (
            <div className="surface-lift bg-white rounded-2xl p-5 md:p-6 shadow-xs border border-[#e1e3e4] flex flex-col gap-3 text-center">
              <p className="text-sm text-[#191c1d]">
                Se houver uma conta com o e-mail <strong>{email}</strong>, enviamos um link para redefinir sua senha.
              </p>
              <button
                type="button"
                onClick={() => switchMode('login')}
                className="text-[#630ed4] font-semibold hover:underline cursor-pointer text-sm"
              >
                Voltar para o login
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleResetPassword}
              className="surface-lift bg-white rounded-2xl p-5 md:p-6 shadow-xs border border-[#e1e3e4] flex flex-col gap-4"
            >
              <div>
                <label htmlFor="reset-email" className="block text-sm font-semibold text-[#191c1d] mb-1.5">
                  E-mail
                </label>
                <input
                  id="reset-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  className="w-full bg-[#f9fafb] border border-[#ccc3d8] rounded-xl px-4 py-3 text-base text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7c3aed] hover:bg-[#630ed4] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl px-4 py-3 text-base transition-all cursor-pointer shadow-xs active:scale-[0.99]"
              >
                {isSubmitting ? 'Aguarde...' : 'Enviar link de redefinição'}
              </button>

              <button
                type="button"
                onClick={() => switchMode('login')}
                className="text-[#630ed4] font-semibold hover:underline cursor-pointer text-sm text-center"
              >
                Voltar para o login
              </button>
            </form>
          )
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="surface-lift bg-white rounded-2xl p-5 md:p-6 shadow-xs border border-[#e1e3e4] flex flex-col gap-4"
            >
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#191c1d] mb-1.5">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="voce@exemplo.com"
                  className="w-full bg-[#f9fafb] border border-[#ccc3d8] rounded-xl px-4 py-3 text-base text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="password" className="block text-sm font-semibold text-[#191c1d]">
                    Senha
                  </label>
                  {mode === 'login' && (
                    <button
                      type="button"
                      onClick={() => switchMode('forgot')}
                      className="text-xs font-semibold text-[#630ed4] hover:underline cursor-pointer"
                    >
                      Esqueceu sua senha?
                    </button>
                  )}
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mínimo de 6 caracteres"
                  className="w-full bg-[#f9fafb] border border-[#ccc3d8] rounded-xl px-4 py-3 text-base text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
                />
              </div>

              {mode === 'signup' && (
                <label className="flex items-start gap-2.5 text-xs text-[#4a4455] leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 w-4 h-4 shrink-0 accent-[#7c3aed] cursor-pointer"
                  />
                  <span>
                    Li e aceito os{' '}
                    <button
                      type="button"
                      onClick={() => setOpenDoc(TERMOS_DE_USO)}
                      className="text-[#630ed4] font-semibold hover:underline cursor-pointer"
                    >
                      Termos de Uso
                    </button>{' '}
                    e a{' '}
                    <button
                      type="button"
                      onClick={() => setOpenDoc(POLITICA_DE_PRIVACIDADE)}
                      className="text-[#630ed4] font-semibold hover:underline cursor-pointer"
                    >
                      Política de Privacidade
                    </button>
                    . Se sou menor de 18 anos, tenho autorização do meu responsável.
                  </span>
                </label>
              )}

              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7c3aed] hover:bg-[#630ed4] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl px-4 py-3 text-base transition-all cursor-pointer shadow-xs active:scale-[0.99]"
              >
                {isSubmitting ? 'Aguarde...' : mode === 'login' ? 'Entrar' : 'Criar conta'}
              </button>
            </form>

            <p className="text-center text-sm text-[#7b7487] mt-5">
              {mode === 'login' ? 'Ainda não tem conta?' : 'Já tem uma conta?'}{' '}
              <button
                type="button"
                onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                className="text-[#630ed4] font-semibold hover:underline cursor-pointer"
              >
                {mode === 'login' ? 'Criar conta' : 'Entrar'}
              </button>
            </p>
          </>
        )}

        <div className="flex items-center justify-center gap-3 mt-8 text-xs text-[#7b7487]">
          <button
            type="button"
            onClick={() => setOpenDoc(TERMOS_DE_USO)}
            className="hover:text-[#630ed4] hover:underline cursor-pointer"
          >
            Termos de Uso
          </button>
          <span aria-hidden="true">·</span>
          <button
            type="button"
            onClick={() => setOpenDoc(POLITICA_DE_PRIVACIDADE)}
            className="hover:text-[#630ed4] hover:underline cursor-pointer"
          >
            Política de Privacidade
          </button>
        </div>
      </motion.div>

      {openDoc && <LegalModal document={openDoc} onClose={() => setOpenDoc(null)} />}
    </div>
  );
};
