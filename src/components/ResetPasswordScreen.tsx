import React, { useState } from 'react';
import { motion } from 'motion/react';
import { translateAuthError } from '../hooks/useAuth';

interface ResetPasswordScreenProps {
  onUpdatePassword: (newPassword: string) => Promise<void>;
}

export const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ onUpdatePassword }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onUpdatePassword(password);
    } catch (err) {
      setError(translateAuthError(err));
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]/70 text-[#191c1d] flex flex-col items-center justify-center px-5 py-10">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="w-full max-w-sm"
      >
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#ede0ff] text-[#630ed4] flex items-center justify-center">
            <span className="material-symbols-outlined text-[28px] fill-1">lock_reset</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Defina sua nova senha</h1>
          <p className="text-sm text-[#7b7487] text-center">
            Escolha uma nova senha para acessar sua conta.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="surface-lift bg-white rounded-2xl p-5 md:p-6 shadow-xs border border-[#e1e3e4] flex flex-col gap-4"
        >
          <div>
            <label htmlFor="new-password" className="block text-sm font-semibold text-[#191c1d] mb-1.5">
              Nova senha
            </label>
            <input
              id="new-password"
              name="new-password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo de 6 caracteres"
              className="w-full bg-[#f9fafb] border border-[#ccc3d8] rounded-xl px-4 py-3 text-base text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="confirm-password" className="block text-sm font-semibold text-[#191c1d] mb-1.5">
              Confirme a nova senha
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              required
              minLength={6}
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repita a senha"
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
            {isSubmitting ? 'Aguarde...' : 'Salvar nova senha'}
          </button>
        </form>
      </motion.div>
    </div>
  );
};
