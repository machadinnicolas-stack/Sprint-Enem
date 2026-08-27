import React, { useState } from 'react';
import { UserPreferences, LevelType, TimeType, SubjectType } from '../types';
import { POPULAR_COURSES, SUBJECT_INFO } from '../data/enemData';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

interface OnboardingFormProps {
  initialValues: UserPreferences;
  onGeneratePlan: (preferences: UserPreferences) => void;
}

export const OnboardingForm: React.FC<OnboardingFormProps> = ({ initialValues, onGeneratePlan }) => {
  const [curso, setCurso] = useState(initialValues.curso || 'Medicina');
  const [tempoDia, setTempoDia] = useState<TimeType>(initialValues.tempoDia || '2h');
  const [diasSemana, setDiasSemana] = useState<number>(initialValues.diasSemana || 5);
  const [nivel, setNivel] = useState<LevelType>(initialValues.nivel || 'intermediario');
  const [dificuldades, setDificuldades] = useState<SubjectType[]>(
    initialValues.dificuldades.length > 0 ? initialValues.dificuldades : ['matematica', 'linguagens']
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleDificuldade = (subj: SubjectType) => {
    if (dificuldades.includes(subj)) {
      setDificuldades(dificuldades.filter(d => d !== subj));
    } else {
      setDificuldades([...dificuldades, subj]);
    }
  };

  const handleOpenConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirmGenerate = () => {
    setIsGenerating(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#7c3aed', '#630ed4', '#a855f7', '#38bdf8']
      });
    } catch {
      // safe fallback
    }

    setTimeout(() => {
      onGeneratePlan({
        curso: curso.trim() || 'Geral ENEM',
        tempoDia,
        diasSemana,
        nivel,
        dificuldades
      });
      setIsGenerating(false);
      setShowConfirm(false);
    }, 450);
  };

  return (
    <div id="onboarding-container" className="min-h-screen bg-[#f9fafb] text-[#191c1d] pb-[130px]">
      {/* Header Context */}
      <header className="flex items-center justify-between gap-2 px-5 py-4 max-w-2xl mx-auto mt-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#7c3aed] text-2xl fill-1">bolt</span>
          <span className="font-bold text-xs tracking-wider text-[#7c3aed] uppercase">Sprint ENEM</span>
        </div>
        <span className="text-xs font-semibold text-[#7b7487] bg-white border border-[#e1e3e4] px-2.5 py-1 rounded-full shadow-xs">
          Passo 1 de 2 • Personalização
        </span>
      </header>

      {/* Main Form Content */}
      <main className="px-5 max-w-2xl mx-auto mt-2">
        <div className="mb-6">
          <h1 className="text-2xl md:text-[28px] font-bold text-[#191c1d] tracking-tight mb-2">
            Vamos personalizar seu plano
          </h1>
          <p className="text-sm md:text-base text-[#4a4455] leading-relaxed">
            Responda algumas perguntas rápidas para criarmos o cronograma perfeito para você.
          </p>
        </div>

        <form onSubmit={handleOpenConfirm} className="flex flex-col gap-5">
          {/* Question 1: Course */}
          <div
            id="card-curso"
            className="bg-white rounded-2xl p-4 md:p-6 shadow-xs border border-[#e1e3e4] transition-all hover:border-[#ccc3d8]"
          >
            <label htmlFor="curso" className="block text-base md:text-lg font-semibold text-[#191c1d] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7b7487]">school</span>
              Qual curso você deseja?
            </label>
            <input
              id="curso"
              name="curso"
              type="text"
              value={curso}
              onChange={(e) => setCurso(e.target.value)}
              placeholder="Ex: Medicina, Direito, Engenharia..."
              className="w-full bg-[#f9fafb] border border-[#ccc3d8] rounded-xl px-4 py-3 text-base text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
            />
            {/* Quick suggestions */}
            <div className="mt-3 flex flex-wrap gap-1.5 items-center">
              <span className="text-xs text-[#7b7487] mr-1">Sugestões:</span>
              {POPULAR_COURSES.slice(0, 5).map((pop) => (
                <button
                  key={pop}
                  type="button"
                  onClick={() => setCurso(pop)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-all ${
                    curso.toLowerCase() === pop.toLowerCase()
                      ? 'bg-[#ede0ff] text-[#630ed4] border-[#7c3aed] font-medium'
                      : 'bg-white text-[#4a4455] border-[#e1e3e4] hover:border-[#7c3aed]'
                  }`}
                >
                  {pop}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: Time Available per day */}
          <div
            id="card-tempo"
            className="bg-white rounded-2xl p-4 md:p-6 shadow-xs border border-[#e1e3e4] transition-all hover:border-[#ccc3d8]"
          >
            <p className="text-base md:text-lg font-semibold text-[#191c1d] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7b7487]">schedule</span>
              Tempo disponível por dia?
            </p>
            <div className="flex flex-wrap gap-2.5">
              {(['1h', '2h', '4h', '6h+'] as TimeType[]).map((time) => {
                const isSelected = tempoDia === time;
                return (
                  <label key={time} className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="tempo_dia"
                      value={time}
                      checked={isSelected}
                      onChange={() => setTempoDia(time)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-xs'
                          : 'bg-[#f9fafb] text-[#4a4455] border-[#ccc3d8] hover:border-[#7c3aed]'
                      }`}
                    >
                      {time}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Question 3: Days per week */}
          <div
            id="card-dias"
            className="bg-white rounded-2xl p-4 md:p-6 shadow-xs border border-[#e1e3e4] transition-all hover:border-[#ccc3d8]"
          >
            <p className="text-base md:text-lg font-semibold text-[#191c1d] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7b7487]">calendar_month</span>
              Dias por semana?
            </p>
            <div className="flex overflow-x-auto gap-2.5 pb-1 no-scrollbar">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                const isSelected = diasSemana === num;
                return (
                  <label key={num} className="cursor-pointer relative shrink-0">
                    <input
                      type="radio"
                      name="dias_semana"
                      value={num}
                      checked={isSelected}
                      onChange={() => setDiasSemana(num)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`w-12 h-12 flex items-center justify-center rounded-xl border text-base font-semibold transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-xs scale-105'
                          : 'bg-[#f9fafb] text-[#4a4455] border-[#ccc3d8] hover:border-[#7c3aed]'
                      }`}
                    >
                      {num}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Question 4: Current Level */}
          <div
            id="card-nivel"
            className="bg-white rounded-2xl p-4 md:p-6 shadow-xs border border-[#e1e3e4] transition-all hover:border-[#ccc3d8]"
          >
            <p className="text-base md:text-lg font-semibold text-[#191c1d] mb-3 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7b7487]">trending_up</span>
              Nível atual?
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                {
                  id: 'iniciante' as LevelType,
                  label: 'Iniciante',
                  icon: 'battery_1_bar',
                  desc: 'Começando agora ou revisando fundamentos'
                },
                {
                  id: 'intermediario' as LevelType,
                  label: 'Intermediário',
                  icon: 'battery_4_bar',
                  desc: 'Já possui base e quer aumentar a média TRI'
                },
                {
                  id: 'avancado' as LevelType,
                  label: 'Avançado',
                  icon: 'battery_full',
                  desc: 'Foco em lapidação, questões difíceis e nota de corte alta'
                }
              ].map((lvl) => {
                const isSelected = nivel === lvl.id;
                return (
                  <label key={lvl.id} className="cursor-pointer relative">
                    <input
                      type="radio"
                      name="nivel"
                      value={lvl.id}
                      checked={isSelected}
                      onChange={() => setNivel(lvl.id)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`flex items-center justify-between p-3.5 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#7c3aed] text-white border-[#7c3aed] shadow-xs'
                          : 'bg-[#f9fafb] text-[#4a4455] border-[#ccc3d8] hover:border-[#7c3aed]'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-base font-semibold">{lvl.label}</span>
                        <span
                          className={`text-xs ${
                            isSelected ? 'text-[#ede0ff]' : 'text-[#7b7487]'
                          }`}
                        >
                          {lvl.desc}
                        </span>
                      </div>
                      <span
                        className={`material-symbols-outlined text-2xl ${
                          isSelected ? 'text-white' : 'text-[#7b7487] opacity-60'
                        }`}
                      >
                        {lvl.icon}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Question 5: Difficulties (Multi-select) */}
          <div
            id="card-dificuldades"
            className="bg-white rounded-2xl p-4 md:p-6 shadow-xs border border-[#e1e3e4] transition-all hover:border-[#ccc3d8]"
          >
            <p className="text-base md:text-lg font-semibold text-[#191c1d] mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7b7487]">psychology_alt</span>
              Maiores dificuldades?
            </p>
            <p className="text-xs md:text-sm text-[#4a4455] mb-3">
              Selecione uma ou mais áreas para reforçarmos a repetição espaçada.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {[
                { id: 'matematica' as SubjectType, label: 'Matemática', icon: 'calculate' },
                { id: 'natureza' as SubjectType, label: 'Natureza', icon: 'science' },
                { id: 'linguagens' as SubjectType, label: 'Linguagens', icon: 'menu_book' },
                { id: 'humanas' as SubjectType, label: 'Humanas', icon: 'public' },
                { id: 'redacao' as SubjectType, label: 'Redação', icon: 'edit_document' }
              ].map((item) => {
                const isSelected = dificuldades.includes(item.id);
                return (
                  <label key={item.id} className="cursor-pointer relative">
                    <input
                      type="checkbox"
                      name="dificuldades"
                      value={item.id}
                      checked={isSelected}
                      onChange={() => toggleDificuldade(item.id)}
                      className="absolute opacity-0 w-0 h-0"
                    />
                    <div
                      className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#eaddff] text-[#630ed4] border-[#7c3aed] font-semibold shadow-xs'
                          : 'bg-[#f9fafb] text-[#4a4455] border-[#ccc3d8] hover:border-[#7c3aed]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        </form>
      </main>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#e1e3e4] p-4 z-40 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <button
            id="btn-gerar-plano"
            type="button"
            onClick={handleOpenConfirm}
            disabled={isGenerating}
            className="w-full bg-[#7c3aed] hover:bg-[#630ed4] text-white font-semibold text-base md:text-lg py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-md cursor-pointer disabled:opacity-75"
          >
            {isGenerating ? (
              <span className="flex items-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Construindo seu cronograma inteligente...
              </span>
            ) : (
              <>
                <span>Gerar meu plano</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-[#e1e3e4] relative animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#630ed4] bg-[#ede0ff] px-3 py-1 rounded-full mb-3">
                <span className="material-symbols-outlined text-[14px]">fact_check</span>
                Confirme seus dados
              </span>
              <h3 className="text-lg md:text-xl font-bold text-[#191c1d]">
                Vamos gerar seu plano com base nisso:
              </h3>
            </div>

            <div className="space-y-2.5 mb-6 text-sm">
              <div className="flex justify-between items-center bg-[#f9fafb] border border-[#e1e3e4] rounded-xl px-4 py-2.5">
                <span className="text-[#7b7487] font-medium">Curso</span>
                <span className="font-bold text-[#191c1d]">{curso.trim() || 'Geral ENEM'}</span>
              </div>
              <div className="flex justify-between items-center bg-[#f9fafb] border border-[#e1e3e4] rounded-xl px-4 py-2.5">
                <span className="text-[#7b7487] font-medium">Tempo por dia</span>
                <span className="font-bold text-[#191c1d]">{tempoDia}</span>
              </div>
              <div className="flex justify-between items-center bg-[#f9fafb] border border-[#e1e3e4] rounded-xl px-4 py-2.5">
                <span className="text-[#7b7487] font-medium">Dias por semana</span>
                <span className="font-bold text-[#191c1d]">{diasSemana}</span>
              </div>
              <div className="flex justify-between items-center bg-[#f9fafb] border border-[#e1e3e4] rounded-xl px-4 py-2.5">
                <span className="text-[#7b7487] font-medium">Nível</span>
                <span className="font-bold text-[#191c1d] capitalize">{nivel}</span>
              </div>
              <div className="flex justify-between items-center bg-[#f9fafb] border border-[#e1e3e4] rounded-xl px-4 py-2.5 gap-3">
                <span className="text-[#7b7487] font-medium shrink-0">Dificuldades</span>
                <span className="font-bold text-[#191c1d] text-right">
                  {dificuldades.length > 0
                    ? dificuldades.map(d => SUBJECT_INFO[d].name).join(', ')
                    : 'Nenhuma selecionada'}
                </span>
              </div>
            </div>

            <p className="text-xs text-[#7b7487] text-center mb-5">
              Ao confirmar, seu plano é gerado e você já começa direto no Simulado TRI.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                disabled={isGenerating}
                className="flex-1 py-3 px-4 rounded-xl font-semibold text-sm border border-[#ccc3d8] text-[#4a4455] hover:bg-[#f3f4f5] transition-all cursor-pointer disabled:opacity-60"
              >
                Voltar e editar
              </button>
              <button
                type="button"
                onClick={handleConfirmGenerate}
                disabled={isGenerating}
                className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-[#7c3aed] hover:bg-[#630ed4] text-white shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isGenerating ? (
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>
                    <span>Confirmar</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
