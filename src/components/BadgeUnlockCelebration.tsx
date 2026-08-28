import React, { useEffect } from 'react';
import { Badge } from '../types';
import confetti from 'canvas-confetti';

interface BadgeUnlockCelebrationProps {
  badge?: Badge | null;
  isLevelUp?: boolean;
  newLevelTitle?: string;
  newLevelNumber?: number;
  onClose: () => void;
}

export const BadgeUnlockCelebration: React.FC<BadgeUnlockCelebrationProps> = ({
  badge,
  isLevelUp,
  newLevelTitle,
  newLevelNumber,
  onClose
}) => {
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.5 }
      });
    } catch {
      // safe fallback
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="celebration-modal-title"
        className="bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full text-center shadow-2xl border border-[#e1e3e4] relative animate-in zoom-in-95 duration-300"
      >
        {/* Glow backdrop */}
        <div className="w-24 h-24 mx-auto mb-4 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-300 rounded-full blur-xl opacity-70 animate-pulse"></div>

          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center shadow-xl relative z-10 border-2 border-amber-300">
            <span className="material-symbols-outlined text-[40px]">
              {isLevelUp ? 'military_tech' : badge?.icon || 'workspace_premium'}
            </span>
          </div>
        </div>

        {/* Title */}
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-block mb-2">
          {isLevelUp ? '🎉 NOVO NÍVEL ALCANÇADO!' : '🏆 NOVO EMBLEMA DESBLOQUEADO!'}
        </span>

        <h3 id="celebration-modal-title" className="text-xl md:text-2xl font-black text-[#191c1d] mb-1">
          {isLevelUp ? `Nível ${newLevelNumber}: ${newLevelTitle}` : badge?.title}
        </h3>

        <p className="text-xs md:text-sm text-[#4a4455] leading-relaxed mb-4">
          {isLevelUp
            ? 'Sua dedicação e disciplina estão dando resultados no caminho para a aprovação!'
            : badge?.description}
        </p>

        {/* Reward tag */}
        <div className="inline-flex items-center gap-1.5 bg-[#ede0ff] text-[#630ed4] font-black text-xs px-3.5 py-1.5 rounded-xl mb-6 shadow-xs border border-[#7c3aed]/20">
          <span className="material-symbols-outlined text-[16px]">stars</span>
          <span>+{badge?.xpReward || (isLevelUp ? 200 : 100)} XP Bônus</span>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm shadow-md transition-all cursor-pointer active:scale-95"
        >
          Excelente! Continuar Estudando
        </button>
      </div>
    </div>
  );
};
