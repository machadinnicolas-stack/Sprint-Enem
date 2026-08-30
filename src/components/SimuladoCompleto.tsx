import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { MOCK_QUESTIONS, SUBJECT_INFO, estimateEnemScore } from '../data/enemData';
import { ExamQuestion, SimuladoCompletoDia, SimuladoCompletoResultado, SubjectType } from '../types';
import confetti from 'canvas-confetti';

interface SimuladoCompletoProps {
  onFinishedDia?: (correctCount: number, totalCount: number) => void;
}

type Screen = 'landing' | 'intro' | 'exam' | 'resultado';

function interleave<T>(a: T[], b: T[]): T[] {
  const result: T[] = [];
  const max = Math.max(a.length, b.length);
  for (let i = 0; i < max; i++) {
    if (a[i]) result.push(a[i]);
    if (b[i]) result.push(b[i]);
  }
  return result;
}

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

export const SimuladoCompleto: React.FC<SimuladoCompletoProps> = ({ onFinishedDia }) => {
  const questionsById = useMemo(() => {
    const map = new Map<string, ExamQuestion>();
    MOCK_QUESTIONS.forEach((q) => map.set(q.id, q));
    return map;
  }, []);

  const dias = useMemo<SimuladoCompletoDia[]>(() => {
    const bySubject = (s: SubjectType) => MOCK_QUESTIONS.filter((q) => q.subject === s);
    const linguagens = bySubject('linguagens');
    const humanas = bySubject('humanas');
    const natureza = bySubject('natureza');
    const matematica = bySubject('matematica');
    return [
      {
        id: 'dia1',
        label: 'Dia 1 — Linguagens e Humanas',
        subjects: ['linguagens', 'humanas'],
        questionIds: interleave(linguagens, humanas).map((q) => q.id),
        durationMinutes: 70
      },
      {
        id: 'dia2',
        label: 'Dia 2 — Natureza e Matemática',
        subjects: ['natureza', 'matematica'],
        questionIds: interleave(natureza, matematica).map((q) => q.id),
        durationMinutes: 70
      }
    ];
  }, []);

  const [screen, setScreen] = useState<Screen>('landing');
  const [activeDia, setActiveDia] = useState<SimuladoCompletoDia | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [deadlineAt, setDeadlineAt] = useState<number | null>(null);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [completedDias, setCompletedDias] = useState<Partial<Record<'dia1' | 'dia2', SimuladoCompletoResultado>>>({});
  const [activeResultado, setActiveResultado] = useState<SimuladoCompletoResultado | null>(null);
  const finishedRef = useRef(false);

  const activeQuestions = useMemo(
    () => (activeDia ? activeDia.questionIds.map((id) => questionsById.get(id)!).filter(Boolean) : []),
    [activeDia, questionsById]
  );

  const handleFinishExam = React.useCallback(() => {
    if (!activeDia || finishedRef.current) return;
    finishedRef.current = true;

    const tempoGastoSegundos = activeDia.durationMinutes * 60 - remainingSeconds;
    let acertos = 0;
    const bySubject: Record<string, { acertos: number; total: number }> = {};
    activeDia.subjects.forEach((s) => {
      bySubject[s] = { acertos: 0, total: 0 };
    });

    activeQuestions.forEach((q) => {
      bySubject[q.subject].total += 1;
      if (answers[q.id] === q.correctLetter) {
        acertos += 1;
        bySubject[q.subject].acertos += 1;
      }
    });

    const notaEstimadaPorArea: Record<string, number> = {};
    Object.entries(bySubject).forEach(([subject, { acertos: a, total: t }]) => {
      notaEstimadaPorArea[subject] = estimateEnemScore(a, t);
    });

    const resultado: SimuladoCompletoResultado = {
      dia: activeDia.id,
      acertos,
      total: activeQuestions.length,
      tempoGastoSegundos: Math.max(0, tempoGastoSegundos),
      notaEstimadaPorArea
    };

    setCompletedDias((prev) => ({ ...prev, [activeDia.id]: resultado }));
    setActiveResultado(resultado);
    setScreen('resultado');

    if (acertos > 0) {
      try {
        confetti({ particleCount: 90, spread: 75, origin: { y: 0.6 } });
      } catch {
        // safe fallback
      }
    }

    onFinishedDia?.(acertos, activeQuestions.length);
  }, [activeDia, activeQuestions, answers, remainingSeconds, onFinishedDia]);

  // Countdown ticks every second while an exam is in progress; auto-submits at zero.
  useEffect(() => {
    if (screen !== 'exam' || !deadlineAt) return;

    const tick = () => {
      const secondsLeft = Math.max(0, Math.round((deadlineAt - Date.now()) / 1000));
      setRemainingSeconds(secondsLeft);
      if (secondsLeft <= 0) {
        handleFinishExam();
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [screen, deadlineAt, handleFinishExam]);

  const handleStartDia = (dia: SimuladoCompletoDia) => {
    setActiveDia(dia);
    setScreen('intro');
  };

  const handleConfirmStart = () => {
    if (!activeDia) return;
    finishedRef.current = false;
    setAnswers({});
    setCurrentIndex(0);
    setDeadlineAt(Date.now() + activeDia.durationMinutes * 60 * 1000);
    setRemainingSeconds(activeDia.durationMinutes * 60);
    setScreen('exam');
  };

  const handleSelectOption = (questionId: string, letter: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: letter }));
  };

  const handleRequestFinish = () => {
    const unanswered = activeQuestions.length - Object.keys(answers).length;
    if (unanswered > 0) {
      const ok = window.confirm(
        `Ainda faltam ${unanswered} questão(ões) sem resposta. Deseja finalizar a prova mesmo assim?`
      );
      if (!ok) return;
    }
    handleFinishExam();
  };

  const handleBackToLanding = () => {
    setScreen('landing');
    setActiveDia(null);
    setActiveResultado(null);
  };

  const currentQuestion = activeQuestions[currentIndex];
  const isLowTime = remainingSeconds > 0 && remainingSeconds <= 300;

  // ---------- Landing ----------
  if (screen === 'landing') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6 pb-24">
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 bg-[#ede0ff] text-[#630ed4] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[14px]">timer</span>
            Simulado Completo
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#191c1d] tracking-tight">
            Encare a prova nas condições reais
          </h1>
          <p className="text-xs md:text-sm text-[#4a4455] mt-0.5">
            Cronometrado, sem revelar resposta até o fim. Faça o Dia 1 e o Dia 2 na ordem que preferir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {dias.map((dia) => {
            const resultado = completedDias[dia.id];
            const totalQuestions = dia.questionIds.length;
            return (
              <div key={dia.id} className="bg-white rounded-3xl p-5 border border-[#e1e3e4] shadow-sm flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  {dia.subjects.map((s) => (
                    <span
                      key={s}
                      className="text-xs font-bold px-2.5 py-1 rounded-md"
                      style={{ backgroundColor: SUBJECT_INFO[s].bgColor, color: SUBJECT_INFO[s].textColor }}
                    >
                      {SUBJECT_INFO[s].name}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-bold text-[#191c1d]">{dia.label}</h2>
                <p className="text-xs text-[#7b7487] mt-1 mb-4">
                  {totalQuestions} questões • {dia.durationMinutes} minutos
                </p>

                {resultado ? (
                  <div className="mt-auto">
                    <div className="bg-[#f9fafb] border border-[#e1e3e4] rounded-2xl px-4 py-3 mb-3">
                      <p className="text-xs text-[#7b7487] font-semibold uppercase tracking-wider mb-1">Concluído</p>
                      <p className="text-sm text-[#191c1d]">
                        <span className="font-black text-[#630ed4]">{resultado.acertos}</span> de {resultado.total} acertos
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleStartDia(dia)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ccc3d8] text-[#4a4455] hover:border-[#7c3aed] font-semibold text-sm transition-all cursor-pointer"
                    >
                      Refazer
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleStartDia(dia)}
                    className="mt-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Começar</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ---------- Intro ----------
  if (screen === 'intro' && activeDia) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-10 pb-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#c026d3]/30">
          <span className="material-symbols-outlined text-[32px]">timer</span>
        </div>
        <h1 className="text-xl md:text-2xl font-black text-[#191c1d] mb-2">{activeDia.label}</h1>
        <p className="text-sm text-[#4a4455] mb-6">
          Você terá <strong>{activeDia.durationMinutes} minutos</strong> para responder{' '}
          <strong>{activeDia.questionIds.length} questões</strong>. As respostas corretas só aparecem no final —
          assim como na prova real, não há feedback imediato. O cronômetro não pausa depois de iniciado.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setScreen('landing')}
            className="px-5 py-3 rounded-xl border border-[#ccc3d8] text-[#4a4455] hover:border-[#7c3aed] font-semibold text-sm transition-all cursor-pointer"
          >
            Voltar
          </button>
          <button
            type="button"
            onClick={handleConfirmStart}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
          >
            Iniciar Prova
          </button>
        </div>
      </div>
    );
  }

  // ---------- Exam ----------
  if (screen === 'exam' && activeDia && currentQuestion) {
    const subj = SUBJECT_INFO[currentQuestion.subject];
    const selected = answers[currentQuestion.id];

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 pb-24">
        {/* Timer + progress */}
        <div className="sticky top-0 z-10 bg-[#f9fafb]/95 backdrop-blur-sm pt-2 pb-3 mb-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <span className="text-sm font-bold text-[#191c1d]">{activeDia.label}</span>
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-black tabular-nums ${
                isLowTime ? 'bg-red-100 text-red-700' : 'bg-[#ede0ff] text-[#630ed4]'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">timer</span>
              {formatTime(remainingSeconds)}
            </span>
          </div>

          {/* Question grid navigator */}
          <div className="flex flex-wrap gap-1.5">
            {activeQuestions.map((q, idx) => {
              const isCurrent = idx === currentIndex;
              const isAnswered = Boolean(answers[q.id]);
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#7c3aed] text-white shadow-xs ring-2 ring-[#7c3aed] ring-offset-2'
                      : isAnswered
                      ? 'bg-[#ede0ff] text-[#630ed4]'
                      : 'bg-white border border-[#e1e3e4] text-[#7b7487]'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 md:p-7 border border-[#e1e3e4] shadow-sm mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#e1e3e4]">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: subj.bgColor, color: subj.textColor }}
            >
              {currentQuestion.areaName}
            </span>
            <span className="text-xs font-semibold text-[#7b7487]">
              Questão {currentIndex + 1} de {activeQuestions.length}
            </span>
          </div>

          <div className="text-sm md:text-base text-[#191c1d] leading-relaxed font-normal mb-6">
            {currentQuestion.question}
          </div>

          <div className="space-y-3">
            {currentQuestion.options.map((opt) => {
              const isSelected = selected === opt.letter;
              return (
                <button
                  key={opt.letter}
                  onClick={() => handleSelectOption(currentQuestion.id, opt.letter)}
                  aria-pressed={isSelected}
                  className={`w-full p-3.5 rounded-2xl border text-left text-xs md:text-sm flex items-start gap-3 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 ${
                    isSelected
                      ? 'bg-[#ede0ff] border-[#7c3aed] text-[#630ed4] font-semibold shadow-xs'
                      : 'bg-[#f9fafb] border-[#e1e3e4] text-[#191c1d] hover:border-[#7c3aed]'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                      isSelected ? 'bg-current text-white' : 'bg-white border border-[#ccc3d8]'
                    }`}
                  >
                    <span className={isSelected ? 'text-white' : 'text-[#4a4455]'}>{opt.letter}</span>
                  </span>
                  <span className="flex-1 mt-0.5">{opt.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 rounded-xl border border-[#ccc3d8] text-[#4a4455] hover:border-[#7c3aed] font-semibold text-sm transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          <button type="button" onClick={handleRequestFinish} className="text-xs font-semibold text-[#7b7487] hover:text-red-600 underline cursor-pointer">
            Entregar prova
          </button>

          {currentIndex < activeQuestions.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => Math.min(activeQuestions.length - 1, prev + 1))}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              Próxima
            </button>
          ) : (
            <button
              type="button"
              onClick={handleRequestFinish}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              Finalizar Prova
            </button>
          )}
        </div>
      </div>
    );
  }

  // ---------- Resultado ----------
  if (screen === 'resultado' && activeDia && activeResultado) {
    const scorePercent =
      activeResultado.total > 0 ? Math.round((activeResultado.acertos / activeResultado.total) * 100) : 0;

    return (
      <div className="max-w-3xl mx-auto px-4 py-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-3xl p-6 md:p-10 border border-[#e1e3e4] shadow-sm text-center mb-6"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#c026d3]/30">
            <span className="material-symbols-outlined text-[32px]">emoji_events</span>
          </div>
          <h2 className="text-xl md:text-2xl font-black text-[#191c1d] mb-1">{activeDia.label} concluído!</h2>
          <p className="text-sm text-[#4a4455] mb-6">
            Você acertou {activeResultado.acertos} de {activeResultado.total} questões em{' '}
            {formatTime(activeResultado.tempoGastoSegundos)}.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-[#f9fafb] border border-[#e1e3e4] rounded-2xl px-6 py-4 mb-4">
            <div>
              <span className="block text-3xl font-black text-[#630ed4]">{scorePercent}%</span>
              <span className="text-[10px] font-bold text-[#7b7487] uppercase tracking-wider">Aproveitamento</span>
            </div>
            {Object.entries(activeResultado.notaEstimadaPorArea).map(([subject, nota]) => (
              <React.Fragment key={subject}>
                <div className="w-px h-10 bg-[#e1e3e4]" />
                <div>
                  <span className="block text-3xl font-black text-[#191c1d]">{nota}</span>
                  <span className="text-[10px] font-bold text-[#7b7487] uppercase tracking-wider">
                    Nota est. {SUBJECT_INFO[subject as SubjectType].name}
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>

          <p className="text-[11px] text-[#7b7487] max-w-md mx-auto mb-6">
            Nota estimada a partir do seu desempenho — não é o cálculo oficial de TRI usado pelo INEP, que depende
            de parâmetros de calibração exclusivos de cada questão.
          </p>

          <button
            type="button"
            onClick={handleBackToLanding}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer"
          >
            Voltar ao Simulado Completo
          </button>
        </motion.div>

        {/* Review */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#191c1d] uppercase tracking-wider px-1">Revisão questão a questão</h3>
          {activeQuestions.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctLetter;
            return (
              <div key={q.id} className="bg-white rounded-2xl p-4 md:p-5 border border-[#e1e3e4] shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-[#7b7487]">Questão {idx + 1}</span>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold ${
                      isCorrect ? 'text-green-700' : 'text-red-700'
                    }`}
                  >
                    <span className="material-symbols-outlined text-base">{isCorrect ? 'check_circle' : 'cancel'}</span>
                    {isCorrect ? 'Correta' : userAnswer ? 'Incorreta' : 'Não respondida'}
                  </span>
                </div>
                <p className="text-sm text-[#191c1d] mb-3">{q.question}</p>
                <p className="text-xs text-[#4a4455] mb-2">
                  Gabarito: <strong>{q.correctLetter}</strong>
                  {userAnswer && userAnswer !== q.correctLetter && (
                    <span> • Sua resposta: <strong>{userAnswer}</strong></span>
                  )}
                </p>
                <div className="p-3 bg-[#f8f9fa] border border-[#e1e3e4] rounded-xl text-xs text-[#4a4455] leading-relaxed">
                  {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};
