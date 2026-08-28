import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_QUESTIONS, SUBJECT_INFO } from '../data/enemData';
import { ExamQuestion, SubjectType } from '../types';
import confetti from 'canvas-confetti';

interface SimuladoTRIProps {
  onAnswerQuestion?: (isCorrect: boolean) => void;
}

const AREA_FILTERS: { id: SubjectType | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todas as Áreas' },
  { id: 'matematica', label: 'Matemática' },
  { id: 'natureza', label: 'Natureza' },
  { id: 'humanas', label: 'Humanas' },
  { id: 'linguagens', label: 'Linguagens' }
];

export const SimuladoTRI: React.FC<SimuladoTRIProps> = ({ onAnswerQuestion }) => {
  const [areaFilter, setAreaFilter] = useState<SubjectType | 'todos'>('todos');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = useMemo<ExamQuestion[]>(() => {
    return areaFilter === 'todos'
      ? MOCK_QUESTIONS
      : MOCK_QUESTIONS.filter((q) => q.subject === areaFilter);
  }, [areaFilter]);

  const currentQ = questions[currentIndex];
  const subj = currentQ ? SUBJECT_INFO[currentQ.subject] : null;

  const handleChangeArea = (area: SubjectType | 'todos') => {
    setAreaFilter(area);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsFinished(false);
  };

  const handleSelectOption = (letter: string) => {
    if (isAnswered) return;
    setSelectedOption(letter);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption || isAnswered || !currentQ) return;
    setIsAnswered(true);
    setAnsweredCount((prev) => prev + 1);

    const isCorrect = selectedOption === currentQ.correctLetter;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }
    }

    if (onAnswerQuestion) {
      onAnswerQuestion(isCorrect);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsFinished(false);
    setCorrectCount(0);
    setAnsweredCount(0);
  };

  const scorePercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative">
        <div className="absolute -left-8 -top-10 w-40 h-40 bg-[#7c3aed]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute right-0 -top-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 bg-[#ede0ff] text-[#630ed4] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[14px]">psychology</span>
            Treino Rápido TRI
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#191c1d] tracking-tight">
            Questões Estratégicas do ENEM
          </h1>
          <p className="text-xs md:text-sm text-[#4a4455] mt-0.5">
            Treine seu raciocínio e aprenda o padrão de correção da Teoria de Resposta ao Item.
          </p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl border border-[#e1e3e4] text-xs font-bold text-[#4a4455] shadow-xs flex items-center gap-2 self-start sm:self-auto">
          <span>Acertos:</span>
          <span className="text-[#630ed4] text-sm font-black">{correctCount}</span>
          <span className="text-[#7b7487]">/ {answeredCount}</span>
        </div>
      </div>

      {/* Area filter pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-6 no-scrollbar">
        {AREA_FILTERS.map((area) => (
          <button
            key={area.id}
            type="button"
            onClick={() => handleChangeArea(area.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
              areaFilter === area.id
                ? 'bg-[#7c3aed] text-white shadow-xs'
                : 'bg-white border border-[#e1e3e4] text-[#4a4455] hover:border-[#7c3aed]'
            }`}
          >
            {area.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isFinished || !currentQ ? (
          <motion.div
            key="resultado"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-6 md:p-10 border border-[#e1e3e4] shadow-sm text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#c026d3]/30">
              <span className="material-symbols-outlined text-[32px]">emoji_events</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-[#191c1d] mb-1">
              {questions.length === 0 ? 'Nenhuma questão nessa área ainda' : 'Simulado concluído!'}
            </h2>
            {questions.length > 0 && (
              <>
                <p className="text-sm text-[#4a4455] mb-6">
                  Você acertou {correctCount} de {answeredCount} questões respondidas nesta rodada.
                </p>
                <div className="inline-flex items-center gap-6 bg-[#f9fafb] border border-[#e1e3e4] rounded-2xl px-6 py-4 mb-6">
                  <div>
                    <span className="block text-3xl font-black text-[#630ed4]">{scorePercent}%</span>
                    <span className="text-[10px] font-bold text-[#7b7487] uppercase tracking-wider">Aproveitamento</span>
                  </div>
                  <div className="w-px h-10 bg-[#e1e3e4]" />
                  <div>
                    <span className="block text-3xl font-black text-[#191c1d]">{questions.length}</span>
                    <span className="text-[10px] font-bold text-[#7b7487] uppercase tracking-wider">Questões na área</span>
                  </div>
                </div>
              </>
            )}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleRestart}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
                <span>Refazer esta área</span>
              </button>
              <button
                type="button"
                onClick={() => handleChangeArea('todos')}
                className="px-6 py-3 rounded-xl border border-[#ccc3d8] text-[#4a4455] hover:border-[#7c3aed] font-semibold text-sm transition-all cursor-pointer"
              >
                Ver todas as áreas
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={currentQ.id}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -12 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl p-5 md:p-7 border border-[#e1e3e4] shadow-sm mb-6"
          >
            {/* Question metadata */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#e1e3e4]">
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-md"
                  style={{ backgroundColor: subj?.bgColor, color: subj?.textColor }}
                >
                  {currentQ.areaName}
                </span>
                <span className="text-xs font-semibold text-[#7b7487] bg-[#f3f4f5] px-2.5 py-1 rounded-md">
                  {currentQ.year}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#7b7487]">
                <span>Dificuldade:</span>
                <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {currentQ.difficulty}
                </span>
                <span>• Questão {currentIndex + 1} de {questions.length}</span>
              </div>
            </div>

            {/* Question text */}
            <div className="text-sm md:text-base text-[#191c1d] leading-relaxed font-normal mb-6">
              {currentQ.question}
            </div>

            {/* Options list */}
            <div className="space-y-3 mb-6">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.letter;
                let optionStyle = 'bg-[#f9fafb] border-[#e1e3e4] text-[#191c1d] hover:border-[#7c3aed]';

                if (isAnswered) {
                  if (opt.letter === currentQ.correctLetter) {
                    optionStyle = 'bg-[#d1fae5] border-[#10b981] text-[#047857] font-semibold';
                  } else if (isSelected && opt.letter !== currentQ.correctLetter) {
                    optionStyle = 'bg-[#fee2e2] border-[#ef4444] text-[#b91c1c]';
                  } else {
                    optionStyle = 'bg-[#f9fafb] border-[#e1e3e4] text-[#7b7487] opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-[#ede0ff] border-[#7c3aed] text-[#630ed4] font-semibold shadow-xs';
                }

                return (
                  <button
                    key={opt.letter}
                    onClick={() => handleSelectOption(opt.letter)}
                    disabled={isAnswered}
                    aria-pressed={isSelected}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs md:text-sm flex items-start gap-3 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 ${optionStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected || (isAnswered && opt.letter === currentQ.correctLetter)
                          ? 'bg-current text-white'
                          : 'bg-white border border-[#ccc3d8]'
                      }`}
                    >
                      <span className={isSelected || (isAnswered && opt.letter === currentQ.correctLetter) ? 'text-white' : 'text-[#4a4455]'}>
                        {opt.letter}
                      </span>
                    </span>
                    <span className="flex-1 mt-0.5">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Answer explanation card */}
            {isAnswered && (
              <div className="p-4 md:p-5 rounded-2xl bg-[#f8f9fa] border border-[#e1e3e4] space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2">
                  <span
                    className={`material-symbols-outlined text-xl ${
                      selectedOption === currentQ.correctLetter ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {selectedOption === currentQ.correctLetter ? 'check_circle' : 'cancel'}
                  </span>
                  <span className="font-bold text-sm text-[#191c1d]">
                    {selectedOption === currentQ.correctLetter
                      ? 'Resposta Correta! Parabéns!'
                      : `Gabarito Oficial: Letra ${currentQ.correctLetter}`}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-[#4a4455] leading-relaxed">
                  {currentQ.explanation}
                </p>

                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                  <span className="material-symbols-outlined text-amber-600 text-base mt-0.5">lightbulb</span>
                  <span><strong>Dica de TRI:</strong> {currentQ.triTip}</span>
                </div>
              </div>
            )}

            {/* Action Controls */}
            <div className="mt-6 flex justify-end gap-3">
              {!isAnswered ? (
                <button
                  onClick={handleConfirmAnswer}
                  disabled={!selectedOption}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                >
                  Confirmar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Próxima Questão' : 'Ver Resultado'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
