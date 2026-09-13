import React from 'react';
import { UserPreferences, UserGamificationState } from '../types';
import { getLevelInfo } from '../data/gamificationData';

interface HeaderProps {
  activeTab: 'personalizar' | 'cronograma' | 'incidencia' | 'simulado' | 'redacao';
  setActiveTab: (tab: 'personalizar' | 'cronograma' | 'incidencia' | 'simulado' | 'redacao') => void;
  preferences: UserPreferences;
  gamification: UserGamificationState;
  onOpenBadgesModal: () => void;
  userEmail?: string | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  preferences,
  gamification,
  onOpenBadgesModal,
  userEmail,
  onLogout
}) => {
  const levelInfo = getLevelInfo(gamification.xp);
  const unlockedBadgesCount = gamification.badges.filter((b) => b.unlocked).length;

  return (
    <header className="app-header sticky top-0 z-30 bg-gradient-to-r from-[#630ed4] to-[#7c3aed] px-3 sm:px-4 pt-[max(0.625rem,env(safe-area-inset-top))] pb-2.5 transition-all overflow-hidden">
      <div className="max-w-4xl mx-auto w-full min-w-0 flex items-center justify-between gap-2 md:gap-3">
        {/* Brand */}
        <button
          onClick={() => setActiveTab('cronograma')}
          className="flex items-center gap-2 text-left cursor-pointer group min-w-0 shrink"
        >
          <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center transition-transform group-hover:scale-105">
            <span className="material-symbols-outlined text-[20px] fill-1">bolt</span>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm tracking-tight text-white truncate max-[380px]:hidden">Sprint ENEM</span>
              <span className="bg-[#eaddff] text-[#630ed4] text-[10px] font-bold px-1.5 py-0.2 rounded-sm uppercase max-[380px]:hidden">
                TRI Pro
              </span>
            </div>
            <p className="text-[11px] text-[#e3d7fa] font-medium hidden sm:block truncate">
              {preferences.curso || 'Plano de Estudos'} • {preferences.tempoDia}/dia
            </p>
          </div>
        </button>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setActiveTab('cronograma')}
            className={`px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'cronograma'
                ? 'bg-white/20 text-white'
                : 'text-[#e3d7fa] hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>Cronograma</span>
          </button>

          <button
            onClick={() => setActiveTab('incidencia')}
            className={`px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'incidencia'
                ? 'bg-white/20 text-white'
                : 'text-[#e3d7fa] hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">fact_check</span>
            <span>Raio-X TRI</span>
          </button>

          <button
            onClick={() => setActiveTab('simulado')}
            className={`px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'simulado'
                ? 'bg-white/20 text-white'
                : 'text-[#e3d7fa] hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">quiz</span>
            <span>Simulado</span>
          </button>

          <button
            onClick={() => setActiveTab('redacao')}
            className={`px-2.5 md:px-3 py-1.5 rounded-lg text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
              activeTab === 'redacao'
                ? 'bg-white/20 text-white'
                : 'text-[#e3d7fa] hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">edit_note</span>
            <span>Redação 1000</span>
          </button>

          <button
            onClick={() => setActiveTab('personalizar')}
            className={`px-2 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer shrink-0 ${
              activeTab === 'personalizar'
                ? 'bg-[#ede0ff] text-[#630ed4] font-bold border border-white/50'
                : 'text-[#e3d7fa] hover:bg-white/10'
            }`}
            title="Ajustar preferências de estudo"
          >
            <span className="material-symbols-outlined text-[16px]">tune</span>
            <span className="hidden lg:inline">Editar</span>
          </button>
        </nav>

        {/* Gamification Level & Streak Button Trigger */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onOpenBadgesModal}
            className="flex items-center gap-1.5 bg-[#fdf8f6] hover:bg-[#faebd7] border border-[#fed7aa] p-1.5 sm:p-1 md:px-2.5 md:py-1 rounded-2xl transition-all cursor-pointer shadow-xs active:scale-95 group"
            title="Ver Nível, Sequência e Emblemas"
          >
            {/* Streak flame */}
            <div className="flex items-center gap-1 text-amber-600 font-extrabold text-xs">
              <span className="material-symbols-outlined text-[18px] text-amber-500 fill-1 animate-pulse">
                local_fire_department
              </span>
              <span>{gamification.streakDays}d</span>
            </div>

            <div className="w-px h-3.5 bg-amber-200 hidden sm:block"></div>

            {/* Level pill */}
            <div className="hidden sm:flex items-center gap-1 text-[#630ed4] font-bold text-xs">
              <span className="material-symbols-outlined text-[16px] text-[#7c3aed]">
                workspace_premium
              </span>
              <span>Nv. {levelInfo.level}</span>
            </div>

            {/* Badges count badge */}
            <span className="bg-amber-200 text-amber-900 text-[10px] font-black px-1.5 py-0.2 rounded-full hidden md:inline-block">
              {unlockedBadgesCount} 🏆
            </span>
          </button>

          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              title={userEmail ? `Sair (${userEmail})` : 'Sair'}
              className="w-8 h-8 flex items-center justify-center rounded-full text-[#e3d7fa] hover:bg-white/15 hover:text-white transition-all cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[19px]">logout</span>
            </button>
          )}
        </div>
      </div>

      <nav className="mobile-bottom-nav md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-[#4c0b9f] bg-gradient-to-r from-[#630ed4] to-[#7c3aed] px-1.5 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(71,42,112,0.28)]">
        <div className="grid grid-cols-5 gap-1 max-w-lg mx-auto">
          {[
            { id: 'cronograma' as const, label: 'Plano', icon: 'calendar_today' },
            { id: 'incidencia' as const, label: 'Raio-X', icon: 'fact_check' },
            { id: 'simulado' as const, label: 'Simulado', icon: 'quiz' },
            { id: 'redacao' as const, label: 'Redação', icon: 'edit_note' },
            { id: 'personalizar' as const, label: 'Ajustar', icon: 'tune' }
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`min-w-0 min-h-14 rounded-xl flex flex-col items-center justify-center gap-0.5 text-[10px] font-bold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-[#e3d7fa] active:bg-white/10'
                }`}
              >
                <span className="material-symbols-outlined text-[21px]">{item.icon}</span>
                <span className="truncate max-w-full px-0.5">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
