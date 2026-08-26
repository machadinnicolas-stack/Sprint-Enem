import React, { useState } from 'react';
import { UserGamificationState, Badge } from '../types';
import { getLevelInfo, LEVEL_TIERS } from '../data/gamificationData';

interface BadgesModalProps {
  gamification: UserGamificationState;
  onClose: () => void;
}

export const BadgesModal: React.FC<BadgesModalProps> = ({
  gamification,
  onClose
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unlocked' | 'locked'>('all');

  const levelInfo = getLevelInfo(gamification.xp);
  const unlockedCount = gamification.badges.filter((b) => b.unlocked).length;
  const totalCount = gamification.badges.length;

  const nextTier = LEVEL_TIERS.find((t) => t.level === levelInfo.level + 1);

  const filteredBadges = gamification.badges.filter((badge) => {
    if (filterCategory !== 'all' && badge.category !== filterCategory) return false;
    if (filterStatus === 'unlocked' && !badge.unlocked) return false;
    if (filterStatus === 'locked' && badge.unlocked) return false;
    return true;
  });

  const getRarityBadgeStyle = (rarity: Badge['rarity'], unlocked: boolean) => {
    if (!unlocked) {
      return {
        cardBorder: 'border-[#e1e3e4] bg-[#f9fafb] opacity-80',
        iconBg: 'bg-[#e2e8f0] text-[#7b7487]',
        tagBg: 'bg-[#f1f5f9] text-[#64748b]',
        label: 'Bloqueado'
      };
    }

    switch (rarity) {
      case 'lendario':
        return {
          cardBorder: 'border-amber-400/80 bg-gradient-to-br from-amber-50/80 to-amber-100/40 shadow-sm',
          iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-600 text-white shadow-md shadow-amber-500/20',
          tagBg: 'bg-amber-100 text-amber-900 border border-amber-300',
          label: 'Lendário'
        };
      case 'epico':
        return {
          cardBorder: 'border-[#7c3aed]/40 bg-gradient-to-br from-[#ede0ff]/50 to-white shadow-sm',
          iconBg: 'bg-gradient-to-br from-[#7c3aed] to-[#5a00c6] text-white shadow-md shadow-[#7c3aed]/20',
          tagBg: 'bg-[#ede0ff] text-[#630ed4] border border-[#7c3aed]/30',
          label: 'Épico'
        };
      case 'raro':
        return {
          cardBorder: 'border-blue-300 bg-gradient-to-br from-blue-50/60 to-white shadow-sm',
          iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md shadow-blue-500/20',
          tagBg: 'bg-blue-100 text-blue-800 border border-blue-200',
          label: 'Raro'
        };
      default:
        return {
          cardBorder: 'border-emerald-300 bg-gradient-to-br from-emerald-50/50 to-white shadow-sm',
          iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20',
          tagBg: 'bg-emerald-100 text-emerald-800 border border-emerald-200',
          label: 'Comum'
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl p-5 md:p-7 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e1e3e4] relative animate-in fade-in zoom-in-95 duration-200 no-scrollbar">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#e1e3e4]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#5a00c6] text-white flex items-center justify-center shadow-md shadow-[#7c3aed]/20">
              <span className="material-symbols-outlined text-[24px]">workspace_premium</span>
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-[#191c1d] tracking-tight">
                Emblemas & Conquistas
              </h2>
              <p className="text-xs text-[#7b7487]">
                Seu progresso, sequência e recompensas no Sprint ENEM
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#7b7487] hover:text-[#191c1d] p-1.5 rounded-full hover:bg-[#f3f4f5] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Level & Rank Hero Card */}
        <div className="bg-gradient-to-br from-[#1e1b4b] via-[#2e1065] to-[#4c1d95] rounded-3xl p-5 md:p-6 text-white mb-6 relative overflow-hidden shadow-lg">
          <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 text-amber-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/20 font-black text-2xl border-2 border-white/20">
                <span className="material-symbols-outlined text-[36px]">{levelInfo.icon}</span>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 bg-white/15 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 text-amber-200">
                  <span>Nível {levelInfo.level}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-black">{levelInfo.title}</h3>
                <p className="text-xs text-white/70">
                  {gamification.xp} XP total acumulado
                </p>
              </div>
            </div>

            {/* Streak & Stats Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 text-center flex-1 sm:flex-none">
                <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-sm">
                  <span className="material-symbols-outlined text-[18px] fill-1">local_fire_department</span>
                  <span>{gamification.streakDays} dias</span>
                </div>
                <span className="text-[10px] text-white/70 block uppercase font-bold">Streak Ativo</span>
              </div>

              <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 text-center flex-1 sm:flex-none">
                <div className="text-emerald-400 font-black text-sm">
                  {unlockedCount} / {totalCount}
                </div>
                <span className="text-[10px] text-white/70 block uppercase font-bold">Emblemas</span>
              </div>
            </div>
          </div>

          {/* XP Progress to next level */}
          <div className="mt-5 pt-4 border-t border-white/10">
            <div className="flex justify-between items-center text-xs mb-1.5 font-semibold">
              <span className="text-white/80">
                Progresso para {nextTier ? `Nível ${nextTier.level} (${nextTier.title})` : 'Nível Máximo'}
              </span>
              <span className="text-amber-300 font-bold">
                {levelInfo.currentXp} / {levelInfo.maxXp} XP ({levelInfo.progressPercent}%)
              </span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden p-0.5">
              <div
                className="bg-gradient-to-r from-amber-400 to-yellow-300 h-full rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${levelInfo.progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          {/* Status filter */}
          <div className="flex items-center bg-[#f3f4f5] p-1 rounded-xl">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterStatus === 'all' ? 'bg-white text-[#630ed4] shadow-xs' : 'text-[#7b7487]'
              }`}
            >
              Todos ({totalCount})
            </button>
            <button
              onClick={() => setFilterStatus('unlocked')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterStatus === 'unlocked' ? 'bg-white text-[#630ed4] shadow-xs' : 'text-[#7b7487]'
              }`}
            >
              Desbloqueados ({unlockedCount})
            </button>
            <button
              onClick={() => setFilterStatus('locked')}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterStatus === 'locked' ? 'bg-white text-[#630ed4] shadow-xs' : 'text-[#7b7487]'
              }`}
            >
              Bloqueados ({totalCount - unlockedCount})
            </button>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: 'all', label: 'Todas Categorias' },
              { id: 'streak', label: 'Sequência 🔥' },
              { id: 'blocks', label: 'Cronograma 📚' },
              { id: 'mastery', label: 'Foco & Hábitos ⏱️' },
              { id: 'simulado', label: 'Simulado 🎯' },
              { id: 'redacao', label: 'Redação ✍️' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  filterCategory === cat.id
                    ? 'bg-[#ede0ff] text-[#630ed4] border border-[#7c3aed]'
                    : 'text-[#7b7487] hover:bg-[#f3f4f5]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {filteredBadges.map((badge) => {
            const style = getRarityBadgeStyle(badge.rarity, badge.unlocked);
            const pct = Math.min(100, Math.round((badge.progress / badge.maxProgress) * 100));

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${style.cardBorder}`}
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${style.iconBg}`}
                    >
                      <span className="material-symbols-outlined text-[24px]">
                        {badge.unlocked ? badge.icon : 'lock'}
                      </span>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${style.tagBg}`}>
                        {style.label}
                      </span>
                      <span className="text-[10px] font-bold text-[#630ed4] bg-[#ede0ff] px-1.5 py-0.2 rounded">
                        +{badge.xpReward} XP
                      </span>
                    </div>
                  </div>

                  <h4 className="font-extrabold text-sm text-[#191c1d] mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-[#4a4455] leading-relaxed mb-3">
                    {badge.description}
                  </p>
                </div>

                {/* Progress bar or Unlock status */}
                <div className="pt-2 border-t border-[#e1e3e4]/60">
                  {badge.unlocked ? (
                    <div className="flex items-center justify-between text-[11px] font-bold text-emerald-700">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">verified</span>
                        Desbloqueado
                      </span>
                      {badge.unlockedAt && (
                        <span className="text-[#7b7487] font-medium">{badge.unlockedAt}</span>
                      )}
                    </div>
                  ) : (
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-bold text-[#7b7487] mb-1">
                        <span>Progresso</span>
                        <span>
                          {badge.progress} / {badge.maxProgress}
                        </span>
                      </div>
                      <div className="w-full bg-[#e2e8f0] rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-[#7c3aed] h-full rounded-full transition-all"
                          style={{ width: `${pct}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer info & close */}
        <div className="pt-4 border-t border-[#e1e3e4] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs text-[#7b7487] flex items-center gap-1.5">
            <span className="material-symbols-outlined text-amber-500 text-[18px]">bolt</span>
            <span>Complete blocos no cronograma e mantenha seu streak para subir de nível!</span>
          </div>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-bold text-xs md:text-sm shadow-md transition-all cursor-pointer self-end sm:self-auto"
          >
            Continuar Estudando
          </button>
        </div>
      </div>
    </div>
  );
};
