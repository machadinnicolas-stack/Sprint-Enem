import React, { useEffect, useState } from 'react';
import { GeneratedPlan, StudyBlock, SubjectType, UserGamificationState } from '../types';
import { SUBJECT_INFO } from '../data/enemData';
import { getLevelInfo, LEVEL_TIERS } from '../data/gamificationData';
import { motion, AnimatePresence } from 'motion/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import confetti from 'canvas-confetti';

interface CronogramaViewProps {
  plan: GeneratedPlan;
  gamification: UserGamificationState;
  onToggleBlock: (blockId: string) => void;
  onOpenTimer: (block: StudyBlock) => void;
  onEditPreferences: () => void;
  onOpenBadgesModal: () => void;
  onChangeDaySubject: (dayIndex: number, newSubject: SubjectType) => void;
  onAddDay: () => void;
  onRemoveDay: (dayIndex: number) => void;
}

const EDITABLE_SUBJECTS: { id: SubjectType; label: string }[] = [
  { id: 'matematica', label: 'Matemática' },
  { id: 'natureza', label: 'Natureza' },
  { id: 'humanas', label: 'Humanas' },
  { id: 'linguagens', label: 'Linguagens' },
  { id: 'redacao', label: 'Redação' }
];

function renderRecommendationHtml(text: string): string {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  return escaped.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export const CronogramaView: React.FC<CronogramaViewProps> = ({
  plan,
  gamification,
  onToggleBlock,
  onOpenTimer,
  onEditPreferences,
  onOpenBadgesModal,
  onChangeDaySubject,
  onAddDay,
  onRemoveDay
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [showTriModal, setShowTriModal] = useState(false);
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [showEditDaysModal, setShowEditDaysModal] = useState(false);
  const [chartMode, setChartMode] = useState<'status' | 'areas'>('status');

  useEffect(() => {
    if (!showEditDaysModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowEditDaysModal(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showEditDaysModal]);

  const levelInfo = getLevelInfo(gamification.xp);
  const unlockedBadges = gamification.badges.filter((b) => b.unlocked);
  const nextTier = LEVEL_TIERS.find((t) => t.level === levelInfo.level + 1);

  const activeDay = plan.weeklySchedule[selectedDayIndex] || plan.weeklySchedule[0];

  // Calculate total and completed blocks
  const allBlocks = plan.weeklySchedule.flatMap(d => d.blocks);
  const totalBlocks = allBlocks.length;
  const completedBlocks = allBlocks.filter(b => b.completed).length;
  const pendingBlocks = Math.max(0, totalBlocks - completedBlocks);
  const progressPercent = totalBlocks > 0 ? Math.round((completedBlocks / totalBlocks) * 100) : 0;

  // Total study minutes calculated
  const totalMinutes = allBlocks.reduce((acc, b) => acc + b.durationMinutes, 0);
  const completedMinutes = allBlocks
    .filter(b => b.completed)
    .reduce((acc, b) => acc + b.durationMinutes, 0);

  // Status chart data
  const statusChartData = [
    { name: 'Concluído', value: completedBlocks, color: '#10b981' },
    { name: 'Pendente', value: pendingBlocks, color: '#e2e8f0' }
  ];

  // If nothing completed, give 0 vs total
  const effectiveStatusData = totalBlocks === 0 ? [{ name: 'Sem blocos', value: 1, color: '#e2e8f0' }] : statusChartData;

  // Area distribution data
  const areaCounts: Record<string, { name: string; count: number; completed: number; color: string }> = {};
  allBlocks.forEach(b => {
    const subjKey = b.subject;
    const subjInfo = subjKey !== 'geral' ? SUBJECT_INFO[subjKey as SubjectType] : null;
    const areaName = subjInfo ? subjInfo.name : 'Geral / Redação';
    const color = subjInfo ? subjInfo.textColor : '#7c3aed';

    if (!areaCounts[areaName]) {
      areaCounts[areaName] = { name: areaName, count: 0, completed: 0, color };
    }
    areaCounts[areaName].count += 1;
    if (b.completed) {
      areaCounts[areaName].completed += 1;
    }
  });

  const areaChartData = Object.values(areaCounts).map(a => ({
    name: a.name,
    value: a.count,
    completed: a.completed,
    color: a.color
  }));

  const handlePrint = () => {
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // safe fallback
    }
    window.print();
  };

  const handleBlockCheck = (blockId: string, currentStatus: boolean) => {
    onToggleBlock(blockId);
    if (!currentStatus) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // safe fallback
      }
    }
  };

  return (
    <>
      {/* Printable Sheet (Visible only when printing) */}
      <div className="print-only hidden p-8 text-black bg-white">
        <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-tight">
              Sprint ENEM • Plano de Estudos Semanal
            </h1>
            <p className="text-sm font-bold text-gray-700 mt-1">
              Curso Alvo: <span className="underline">{plan.preferences.curso || 'Geral ENEM'}</span> | Carga: {plan.preferences.tempoDia}/dia ({plan.preferences.diasSemana} dias/semana) | Nível: {plan.preferences.nivel.toUpperCase()}
            </p>
          </div>
          <div className="text-right text-xs text-gray-600">
            <p>Gerado em: {new Date().toLocaleDateString('pt-BR')}</p>
            <p className="font-semibold text-black mt-1">Metodologia TRI Pro</p>
          </div>
        </div>

        {/* AI Recommendations Summary */}
        <div className="mb-6 border border-gray-300 rounded-lg p-3 bg-gray-50 text-xs">
          <h2 className="font-bold text-black uppercase mb-1">Diretrizes e Estratégia de Prova:</h2>
          <ul className="list-disc pl-4 space-y-1 text-gray-800">
            {plan.aiRecommendations.map((rec, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: renderRecommendationHtml(rec) }} />
            ))}
          </ul>
        </div>

        {/* Weekly Days Schedule Grid */}
        <div className="space-y-4">
          <h2 className="text-base font-black uppercase tracking-wider border-b border-gray-400 pb-1">
            Grade Semanal de Estudos
          </h2>

          <div className="grid grid-cols-1 gap-4">
            {plan.weeklySchedule.map((day) => (
              <div key={day.dayNumber} className="border border-gray-400 rounded-lg p-3 page-break-inside-avoid">
                <div className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2 border-b border-gray-300">
                  <span className="font-black text-sm uppercase">{day.dayName}</span>
                  <span className="text-xs font-semibold text-gray-700">{day.focusArea} ({day.totalTimeMinutes} min)</span>
                </div>

                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-300 text-gray-600">
                      <th className="py-1 w-8 text-center">[✓]</th>
                      <th className="py-1 w-24">Área</th>
                      <th className="py-1">Atividade / Conteúdo</th>
                      <th className="py-1 w-16 text-center">Tempo</th>
                      <th className="py-1 w-20 text-center">Peso TRI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.blocks.map((block) => {
                      const subj = block.subject !== 'geral' ? SUBJECT_INFO[block.subject as SubjectType] : null;
                      return (
                        <tr key={block.id} className="border-b border-gray-200">
                          <td className="py-1.5 text-center font-mono text-sm">
                            {block.completed ? '[X]' : '[  ]'}
                          </td>
                          <td className="py-1.5 font-bold">
                            {subj ? subj.name : 'Geral'}
                          </td>
                          <td className="py-1.5">
                            <span className="font-semibold">{block.title}:</span> {block.topic}
                          </td>
                          <td className="py-1.5 text-center font-mono">
                            {block.durationMinutes} min
                          </td>
                          <td className="py-1.5 text-center font-semibold">
                            {block.triWeight}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        {/* Space for notes and signature */}
        <div className="mt-6 pt-4 border-t border-gray-300 grid grid-cols-2 gap-6 page-break-inside-avoid text-xs">
          <div className="border border-gray-300 rounded p-3 h-28">
            <span className="font-bold text-gray-700 block mb-1">Anotações / Dúvidas da Semana:</span>
            <div className="border-b border-dotted border-gray-400 mt-4"></div>
            <div className="border-b border-dotted border-gray-400 mt-4"></div>
            <div className="border-b border-dotted border-gray-400 mt-4"></div>
          </div>
          <div className="border border-gray-300 rounded p-3 h-28 flex flex-col justify-between">
            <span className="font-bold text-gray-700">Controle de Simulados & Redação:</span>
            <div className="text-[11px] text-gray-600 space-y-1">
              <p>Redação Tema Semanal: [  ] Escrita  [  ] Corrigida</p>
              <p>Simulado 1º Dia: ___ / 90 questões</p>
              <p>Simulado 2º Dia: ___ / 90 questões</p>
            </div>
          </div>
        </div>
      </div>

      {/* Screen Interactive View (Hidden on print) */}
      <div className="no-print max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Header Summary Banner */}
        <div className="bg-gradient-to-br from-[#7c3aed] via-[#c026d3] to-[#f59e0b] rounded-3xl p-6 md:p-8 text-white shadow-lg shadow-[#c026d3]/20 relative overflow-hidden mb-6">
          {/* Decorative background glow */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -left-16 -top-16 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                <span className="material-symbols-outlined text-[14px]">bolt</span>
                Cronograma Inteligente
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Meta: {plan.preferences.curso || 'ENEM 2026'}
              </h1>
              <p className="text-sm md:text-base text-white/80 mt-1 max-w-xl">
                Plano de {plan.preferences.diasSemana} dias/semana ({plan.preferences.tempoDia}/dia) calibrado para o nível {plan.preferences.nivel}.
              </p>

              {/* PDF / Print Action Buttons in Header */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <button
                  id="btn-imprimir-topo"
                  onClick={handlePrint}
                  className="bg-white text-[#630ed4] hover:bg-[#ede0ff] font-bold text-xs md:text-sm px-4 py-2 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Imprimir ou salvar plano semanal em PDF"
                >
                  <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                  <span>Baixar PDF / Imprimir</span>
                </button>

                <button
                  onClick={() => setShowPrintModal(true)}
                  className="bg-white/15 hover:bg-white/25 text-white font-semibold text-xs md:text-sm px-3.5 py-2 rounded-xl border border-white/30 backdrop-blur-xs transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Visualizar modelo impresso"
                >
                  <span className="material-symbols-outlined text-[18px]">preview</span>
                  <span>Pré-visualizar Folha</span>
                </button>
              </div>
            </div>

            {/* Progress Mini Card in Banner */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[210px] flex flex-col justify-center">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-xs font-medium text-white/90">Progresso Semanal</span>
                <span className="text-lg font-black">{progressPercent}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-amber-300 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
              <span className="text-[11px] text-white/70 mt-2 text-right">
                {completedBlocks} de {totalBlocks} blocos concluídos
              </span>
            </div>
          </div>
        </div>

        {/* Week Day Switcher Tabs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2 gap-2">
            <h2 className="text-lg font-bold text-[#191c1d] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7c3aed]">calendar_month</span>
              Roteiro da Semana
            </h2>
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-medium text-[#7b7487] hidden sm:inline">
                Dia {selectedDayIndex + 1} de {plan.weeklySchedule.length}
              </span>
              <button
                type="button"
                onClick={() => setShowEditDaysModal(true)}
                className="text-xs font-bold text-[#7c3aed] hover:text-[#5a00c6] flex items-center gap-1 cursor-pointer bg-[#ede0ff] hover:bg-[#d8b4fe] px-3 py-1.5 rounded-lg transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">edit_calendar</span>
                <span>Editar dias e matérias</span>
              </button>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {plan.weeklySchedule.map((day, index) => {
              const isSelected = selectedDayIndex === index;
              const dayCompleted = day.blocks.every(b => b.completed) && day.blocks.length > 0;
              const completedCount = day.blocks.filter(b => b.completed).length;

              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayIndex(index)}
                  className={`min-w-[105px] md:min-w-[125px] p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-md scale-[1.02]'
                      : 'bg-white text-[#4a4455] border-[#e1e3e4] hover:border-[#7c3aed]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider opacity-80">
                      {day.dayName}
                    </span>
                    {dayCompleted ? (
                      <span className="material-symbols-outlined text-[16px] text-green-400 fill-1">check_circle</span>
                    ) : (
                      <span className="text-[10px] font-semibold opacity-70">
                        {completedCount}/{day.blocks.length}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-bold truncate">
                    {day.focusArea.split('&')[0]}
                  </div>
                  <div className="text-[10px] opacity-75 mt-0.5">
                    {day.totalTimeMinutes} min de estudo
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Day Study Blocks */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#e1e3e4] shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[#e1e3e4]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#7c3aed]">
                {activeDay.dayName} • Foco do Dia
              </span>
              <h3 className="text-xl font-extrabold text-[#191c1d]">
                {activeDay.focusArea}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold bg-[#f3f4f5] text-[#4a4455] px-3 py-1.5 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">schedule</span>
                {activeDay.totalTimeMinutes} minutos programados
              </span>
            </div>
          </div>

          {/* List of Blocks */}
          <div className="space-y-4">
            {activeDay.blocks.map((block) => {
              const subj = block.subject !== 'geral' ? SUBJECT_INFO[block.subject as SubjectType] : null;

              return (
                <div
                  key={block.id}
                  className={`p-4 md:p-5 rounded-2xl border transition-all ${
                    block.completed
                      ? 'bg-[#f8f9fa] border-[#e1e3e4] opacity-75'
                      : 'bg-white border-[#e1e3e4] shadow-xs hover:border-[#7c3aed]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Checkbox button */}
                      <button
                        type="button"
                        onClick={() => handleBlockCheck(block.id, block.completed)}
                        className={`w-6 h-6 rounded-lg border flex items-center justify-center mt-1 transition-all cursor-pointer ${
                          block.completed
                            ? 'bg-[#7c3aed] border-[#7c3aed] text-white'
                            : 'border-[#ccc3d8] bg-white hover:border-[#7c3aed]'
                        }`}
                      >
                        {block.completed && (
                          <span className="material-symbols-outlined text-[18px]">check</span>
                        )}
                      </button>

                      {/* Block Info */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          {subj && (
                            <span
                              className="text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1"
                              style={{
                                backgroundColor: subj.bgColor,
                                color: subj.textColor
                              }}
                            >
                              <span className="material-symbols-outlined text-[14px]">{subj.icon}</span>
                              {subj.name}
                            </span>
                          )}

                          <span className="text-[11px] font-semibold text-[#7b7487] bg-[#f3f4f5] px-2 py-0.5 rounded-md">
                            {block.durationMinutes} min
                          </span>

                          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[13px]">trending_up</span>
                            TRI {block.triWeight}
                          </span>

                          <span className="text-[10px] font-extrabold text-[#630ed4] bg-[#ede0ff] px-1.5 py-0.5 rounded flex items-center gap-0.5">
                            <span className="material-symbols-outlined text-[12px]">stars</span>
                            +50 XP
                          </span>
                        </div>

                        <h4 className={`text-base font-bold ${block.completed ? 'line-through text-[#7b7487]' : 'text-[#191c1d]'}`}>
                          {block.title}
                        </h4>
                        <p className="text-xs md:text-sm text-[#4a4455] mt-0.5">
                          {block.topic}
                        </p>

                        {block.tip && (
                          <div className="mt-2.5 p-2.5 bg-[#f9fafb] border border-[#e1e3e4] rounded-xl text-xs text-[#4a4455] flex items-start gap-1.5">
                            <span className="material-symbols-outlined text-amber-500 text-[16px] shrink-0 mt-0.5">tips_and_updates</span>
                            <span>{block.tip}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Focus timer trigger */}
                    <button
                      type="button"
                      onClick={() => onOpenTimer(block)}
                      className="p-2.5 rounded-xl border border-[#e1e3e4] hover:border-[#7c3aed] text-[#630ed4] hover:bg-[#ede0ff] transition-all cursor-pointer shrink-0 flex items-center gap-1 text-xs font-semibold"
                      title="Iniciar cronômetro de foco para este bloco"
                    >
                      <span className="material-symbols-outlined text-[18px]">timer</span>
                      <span className="hidden sm:inline">Modo Foco</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gamification & Level Progress Card */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#e1e3e4] shadow-xs mb-6 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Level info & XP Bar */}
            <div className="flex items-start sm:items-center gap-4 flex-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#7c3aed] to-[#5a00c6] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#7c3aed]/20 border border-[#7c3aed]/30">
                <span className="material-symbols-outlined text-[30px]">{levelInfo.icon}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="bg-[#ede0ff] text-[#630ed4] text-xs font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Nível {levelInfo.level}
                  </span>
                  <h3 className="text-base md:text-lg font-black text-[#191c1d] truncate">
                    {levelInfo.title}
                  </h3>
                </div>

                <div className="flex justify-between items-center text-xs text-[#7b7487] mb-1 font-semibold">
                  <span>
                    {levelInfo.currentXp} XP <span className="text-[10px]">({levelInfo.progressPercent}% para {nextTier ? `Nv. ${nextTier.level}` : 'Max'})</span>
                  </span>
                  <span className="text-[#630ed4] font-bold">
                    {nextTier ? `${nextTier.minXp - levelInfo.currentXp} XP restantes` : 'Nível Máximo'}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#f1f5f9] rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#7c3aed] to-amber-400 h-full rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${levelInfo.progressPercent}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Streak & Badges shelf trigger */}
            <div className="flex flex-wrap items-center gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#e1e3e4]">
              {/* Streak info box */}
              <div className="flex items-center gap-2.5 bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-2xl">
                <span className="material-symbols-outlined text-amber-500 text-[24px] fill-1 animate-pulse">
                  local_fire_department
                </span>
                <div>
                  <div className="text-xs font-extrabold text-amber-900 leading-tight">
                    {gamification.streakDays} Dias Seguidos
                  </div>
                  <span className="text-[10px] text-amber-700 font-semibold">
                    +50 XP por bloco
                  </span>
                </div>
              </div>

              {/* View badges button */}
              <button
                type="button"
                onClick={onOpenBadgesModal}
                className="px-4 py-2.5 rounded-2xl bg-[#ede0ff] hover:bg-[#d8b4fe] text-[#630ed4] font-extrabold text-xs md:text-sm transition-all flex items-center gap-2 cursor-pointer shadow-xs active:scale-95 group"
              >
                <span className="material-symbols-outlined text-[20px] text-[#7c3aed] group-hover:scale-110 transition-transform">
                  workspace_premium
                </span>
                <span>Emblemas ({unlockedBadges.length}/{gamification.badges.length})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Donut Chart & Weekly Metrics Dashboard Card */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-[#e1e3e4] shadow-xs mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#e1e3e4]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#ede0ff] text-[#630ed4] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">donut_large</span>
              </div>
              <div>
                <h2 className="text-base md:text-lg font-bold text-[#191c1d]">
                  Conclusão das Metas da Semana
                </h2>
                <p className="text-xs text-[#7b7487]">
                  Acompanhamento visual em tempo real dos blocos e tempo investido
                </p>
              </div>
            </div>

            {/* Toggle Mode Buttons */}
            <div className="flex items-center bg-[#f3f4f5] p-1 rounded-xl self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setChartMode('status')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  chartMode === 'status'
                    ? 'bg-white text-[#630ed4] shadow-xs'
                    : 'text-[#7b7487] hover:text-[#191c1d]'
                }`}
              >
                Geral (% Meta)
              </button>
              <button
                type="button"
                onClick={() => setChartMode('areas')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  chartMode === 'areas'
                    ? 'bg-white text-[#630ed4] shadow-xs'
                    : 'text-[#7b7487] hover:text-[#191c1d]'
                }`}
              >
                Por Matéria
              </button>
            </div>
          </div>

          {/* Donut Chart & Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-5">
            {/* Donut Chart with Centered Metric */}
            <div className="md:col-span-5 flex flex-col items-center justify-center relative min-h-[220px]">
              <div className="w-full h-52 relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0];
                          return (
                            <div className="bg-[#191c1d] text-white px-3 py-2 rounded-xl text-xs shadow-xl border border-white/10">
                              <p className="font-bold flex items-center gap-1.5">
                                <span
                                  className="w-2.5 h-2.5 rounded-full inline-block"
                                  style={{ backgroundColor: data.payload.color }}
                                ></span>
                                {data.name}
                              </p>
                              <p className="text-white/80 mt-0.5">
                                {data.value} {data.value === 1 ? 'bloco' : 'blocos'} (
                                {totalBlocks > 0 ? Math.round(((data.value as number) / totalBlocks) * 100) : 0}%)
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Pie
                      data={chartMode === 'status' ? effectiveStatusData : areaChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={62}
                      outerRadius={88}
                      paddingAngle={chartMode === 'status' ? 3 : 2}
                      dataKey="value"
                      animationDuration={800}
                      animationEasing="ease-out"
                    >
                      {(chartMode === 'status' ? effectiveStatusData : areaChartData).map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="#ffffff" strokeWidth={2} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                {/* Donut Center Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-black text-[#191c1d] tracking-tight">
                    {progressPercent}%
                  </span>
                  <span className="text-[11px] font-bold text-[#7b7487] uppercase tracking-wider">
                    {completedBlocks}/{totalBlocks} Blocos
                  </span>
                </div>
              </div>
            </div>

            {/* Metrics and Legend breakdown */}
            <div className="md:col-span-7 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#f9fafb] p-3.5 rounded-2xl border border-[#e1e3e4]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
                    <span className="text-xs font-semibold text-[#7b7487]">Blocos Concluídos</span>
                  </div>
                  <span className="text-xl font-black text-[#191c1d]">
                    {completedBlocks} <span className="text-xs font-normal text-[#7b7487]">/ {totalBlocks}</span>
                  </span>
                  <div className="text-[11px] text-[#047857] font-semibold mt-0.5">
                    {progressPercent}% da semana completa
                  </div>
                </div>

                <div className="bg-[#f9fafb] p-3.5 rounded-2xl border border-[#e1e3e4]">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-[16px] text-[#630ed4]">timer</span>
                    <span className="text-xs font-semibold text-[#7b7487]">Tempo Estudado</span>
                  </div>
                  <span className="text-xl font-black text-[#191c1d]">
                    {completedMinutes} <span className="text-xs font-normal text-[#7b7487]">/ {totalMinutes} min</span>
                  </span>
                  <div className="text-[11px] text-[#630ed4] font-semibold mt-0.5">
                    ~{(completedMinutes / 60).toFixed(1)}h dedicadas
                  </div>
                </div>
              </div>

              {/* Dynamic Legend / Area Progress */}
              <div className="bg-[#f8f9fa] p-3.5 rounded-2xl border border-[#e1e3e4]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7b7487] block mb-2">
                  {chartMode === 'status' ? 'Status Geral' : 'Distribuição por Área & Progresso:'}
                </span>

                {chartMode === 'status' ? (
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#10b981]"></span>
                        <span className="font-semibold text-[#191c1d]">Blocos Concluídos</span>
                      </div>
                      <span className="font-bold text-[#047857]">{completedBlocks} blocos ({progressPercent}%)</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#e2e8f0]"></span>
                        <span className="font-semibold text-[#4a4455]">Blocos Restantes</span>
                      </div>
                      <span className="font-bold text-[#7b7487]">{pendingBlocks} blocos ({100 - progressPercent}%)</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {areaChartData.map((area, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white p-2 rounded-xl border border-[#e1e3e4]">
                        <div className="flex items-center gap-1.5 truncate mr-2">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: area.color }}></span>
                          <span className="font-semibold text-[#191c1d] truncate">{area.name}</span>
                        </div>
                        <span className="text-[11px] font-bold text-[#7b7487] shrink-0">
                          {area.completed}/{area.value} ({Math.round((area.completed / area.value) * 100)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* AI Strategy Insights Card */}
        <div className="bg-white rounded-2xl p-5 border border-[#e1e3e4] shadow-xs mb-6">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#ede0ff] text-[#630ed4] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">psychology</span>
              </div>
              <h2 className="text-base font-bold text-[#191c1d]">Estratégia TRI Recomendada</h2>
            </div>
            <button
              onClick={() => setShowTriModal(!showTriModal)}
              className="text-xs font-semibold text-[#7c3aed] hover:text-[#5a00c6] flex items-center gap-1 cursor-pointer"
            >
              <span>{showTriModal ? 'Recolher detalhes' : 'Ver pesos SISU'}</span>
              <span className="material-symbols-outlined text-[16px]">
                {showTriModal ? 'expand_less' : 'expand_more'}
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-[#4a4455]">
            {plan.aiRecommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-2 bg-[#f9fafb] p-3 rounded-xl border border-[#e1e3e4]/70">
                <span className="material-symbols-outlined text-[#7c3aed] text-[18px] shrink-0 mt-0.5">check</span>
                <span dangerouslySetInnerHTML={{ __html: renderRecommendationHtml(rec) }} />
              </div>
            ))}
          </div>

          {/* Collapsible TRI details */}
          <AnimatePresence>
            {showTriModal && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 pt-4 border-t border-[#e1e3e4] overflow-hidden"
              >
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7b7487] mb-2">
                  Diretrizes por Área de Conhecimento
                </h4>
                <div className="space-y-3">
                  {plan.triStrategy.map((strat, idx) => (
                    <div key={idx} className="bg-[#f9fafb] p-3.5 rounded-xl border border-[#e1e3e4]">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-[#191c1d]">{strat.subject}</span>
                        <span className="text-[11px] font-semibold text-[#630ed4] bg-[#ede0ff] px-2 py-0.5 rounded-full">
                          {strat.weight}
                        </span>
                      </div>
                      <p className="text-xs text-[#4a4455] mb-2">{strat.strategy}</p>
                      <div className="flex flex-wrap gap-1">
                        {strat.highYieldTopics.map((top, tIdx) => (
                          <span key={tIdx} className="text-[11px] bg-white border border-[#ccc3d8] text-[#191c1d] px-2 py-0.5 rounded-md">
                            {top}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-[#e1e3e4]">
          <button
            onClick={onEditPreferences}
            className="px-4 py-2.5 rounded-xl border border-[#ccc3d8] text-[#4a4455] text-xs md:text-sm font-semibold hover:border-[#7c3aed] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Alterar Meta e Horários</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPrintModal(true)}
              className="px-3.5 py-2.5 rounded-xl border border-[#ccc3d8] text-[#4a4455] hover:border-[#7c3aed] text-xs md:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">visibility</span>
              <span>Pré-visualizar</span>
            </button>

            <button
              id="btn-imprimir-rodape"
              onClick={handlePrint}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white text-xs md:text-sm font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
              <span>Baixar PDF / Imprimir</span>
            </button>
          </div>
        </div>
      </div>

      {/* Print Preview Modal */}
      {showPrintModal && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e1e3e4] relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e1e3e4]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#ede0ff] text-[#630ed4] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#191c1d]">Folha de Estudos Semanal (PDF / Impressão)</h3>
                  <p className="text-xs text-[#7b7487]">Formatada especificamente para impressão A4 ou download em PDF</p>
                </div>
              </div>

              <button
                onClick={() => setShowPrintModal(false)}
                className="text-[#7b7487] hover:text-[#191c1d] p-1.5 rounded-full hover:bg-[#f3f4f5] transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            {/* Preview Sheet Card */}
            <div className="bg-[#f9fafb] p-4 rounded-2xl border border-[#e1e3e4] text-xs text-[#191c1d] mb-6 space-y-3">
              <div className="flex justify-between items-center border-b border-[#e1e3e4] pb-2">
                <div>
                  <span className="font-extrabold text-sm text-[#7c3aed]">SPRINT ENEM</span>
                  <p className="text-xs font-semibold">Plano: {plan.preferences.curso} ({plan.preferences.diasSemana} dias • {plan.preferences.tempoDia}/dia)</p>
                </div>
                <span className="text-[11px] text-[#7b7487]">Nível {plan.preferences.nivel.toUpperCase()}</span>
              </div>

              <div>
                <p className="font-bold text-[#4a4455] mb-1">Visão Geral dos Dias Programados:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {plan.weeklySchedule.map((d) => (
                    <div key={d.dayNumber} className="bg-white p-2 rounded-xl border border-[#e1e3e4]">
                      <span className="font-bold text-[#7c3aed] block">{d.dayName}</span>
                      <span className="text-[11px] text-[#4a4455] line-clamp-1">{d.focusArea}</span>
                      <span className="text-[10px] text-[#7b7487]">{d.blocks.length} blocos • {d.totalTimeMinutes} min</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                <span className="material-symbols-outlined text-amber-600 text-base mt-0.5 shrink-0">info</span>
                <span>
                  <strong>Dica de Impressão:</strong> Na janela que se abrirá, no campo <em>Destino</em>, selecione <strong>"Salvar como PDF"</strong> para baixar o arquivo no seu celular ou computador, ou selecione sua impressora física para ter a folha em mãos.
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowPrintModal(false)}
                className="px-4 py-2.5 rounded-xl border border-[#ccc3d8] text-[#4a4455] text-xs md:text-sm font-semibold hover:bg-[#f3f4f5] transition-all cursor-pointer"
              >
                Fechar
              </button>

              <button
                onClick={() => {
                  setShowPrintModal(false);
                  setTimeout(() => handlePrint(), 200);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white text-xs md:text-sm font-bold shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>Imprimir / Salvar em PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Days & Subjects Modal */}
      {showEditDaysModal && (
        <div className="no-print fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-days-modal-title"
            className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-[#e1e3e4] relative animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#e1e3e4]">
              <div>
                <h3 id="edit-days-modal-title" className="text-lg font-bold text-[#191c1d]">
                  Editar dias e matérias
                </h3>
                <p className="text-xs text-[#7b7487] mt-0.5">
                  Escolha a matéria principal de cada dia ou ajuste quantos dias você quer estudar por semana.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowEditDaysModal(false)}
                aria-label="Fechar"
                className="text-[#7b7487] hover:text-[#191c1d] p-1.5 rounded-full hover:bg-[#f3f4f5] transition-colors cursor-pointer shrink-0"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>

            <div className="space-y-2.5 mb-5">
              {plan.weeklySchedule.map((day, index) => {
                const currentSubject = (day.blocks[0]?.subject as SubjectType) || 'matematica';
                return (
                  <div
                    key={day.dayNumber}
                    className="flex items-center gap-2.5 bg-[#f9fafb] border border-[#e1e3e4] rounded-xl px-3.5 py-2.5"
                  >
                    <span className="text-xs font-bold text-[#191c1d] w-16 shrink-0">{day.dayName}</span>
                    <select
                      value={currentSubject}
                      onChange={(e) => onChangeDaySubject(index, e.target.value as SubjectType)}
                      aria-label={`Matéria principal de ${day.dayName}`}
                      className="flex-1 bg-white border border-[#ccc3d8] rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[#191c1d] focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none cursor-pointer"
                    >
                      {EDITABLE_SUBJECTS.map((s) => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => onRemoveDay(index)}
                      disabled={plan.weeklySchedule.length <= 1}
                      aria-label={`Remover ${day.dayName} do cronograma`}
                      title="Remover este dia"
                      className="p-1.5 rounded-lg text-[#b91c1c] hover:bg-[#fee2e2] transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                    >
                      <span className="material-symbols-outlined text-[18px]">delete</span>
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={onAddDay}
              disabled={plan.weeklySchedule.length >= 7}
              className="w-full py-2.5 rounded-xl border border-dashed border-[#ccc3d8] text-[#7c3aed] hover:bg-[#f9fafb] font-semibold text-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed mb-5"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Adicionar dia de estudo</span>
            </button>

            <button
              type="button"
              onClick={() => setShowEditDaysModal(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Concluído
            </button>
          </div>
        </div>
      )}
    </>
  );
};
