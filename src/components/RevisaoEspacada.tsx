import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_QUESTIONS, SUBJECT_INFO } from '../data/enemData';
import { ExamQuestion, SpacedRepetitionState } from '../types';
import { questoesPendentes, diasParaProximaRevisao, totalNoSistema } from '../data/spacedRepetition';
import confetti from 'canvas-confetti';

interface RevisaoEspacadaProps {
  spacedRepetition: SpacedRepetitionState;
  onAnswer: (question: ExamQuestion, isCorrect: boolean) => void;
}

export const RevisaoEspacada: React.FC<RevisaoEspacadaProps> = ({ spacedRepetition, onAnswer }) => {
  // Congela a fila no momento em que a sessão começa: responder uma questão
  // muda spacedRepetition (ela pode até sair do sistema, se graduar), e sem
  // esse snapshot a lista encolheria e pularia itens no meio da sessão.
  const [fila] = useState<ExamQuestion[]>(() => questoesPendentes(spacedRepetition, MOCK_QUESTIONS));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [acertos, setAcertos] = useState(0);
  const [erros, setErros] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = fila[currentIndex];
  const subj = currentQ ? SUBJECT_INFO[currentQ.subject] : null;

  const handleSelectOption = (letter: string) => {
    if (isAnswered) return;
    setSelectedOption(letter);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption || isAnswered || !currentQ) return;
    setIsAnswered(true);

    const isCorrect = selectedOption === currentQ.correctLetter;
    if (isCorrect) {
      setAcertos((prev) => prev + 1);
      try {
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      } catch {
        // safe fallback
      }
    } else {
      setErros((prev) => prev + 1);
    }

    onAnswer(currentQ, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex < fila.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  // ---------- Nada pendente agora ----------
  if (fila.length === 0) {
    const totalAguardando = totalNoSistema(spacedRepetition);
    const dias = diasParaProximaRevisao(spacedRepetition);

    return (
      <div className="max-w-2xl mx-auto px-4 py-10 pb-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#c026d3]/30">
          <span className="material-symbols-outlined text-[32px]">
            {totalAguardando === 0 ? 'check_circle' : 'schedule'}
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-black text-[#191c1d] mb-2">
          {totalAguardando === 0 ? 'Nada para revisar ainda' : 'Você está em dia com as revisões'}
        </h1>
        <p className="text-sm text-[#4a4455] mb-2 max-w-md mx-auto">
          {totalAguardando === 0
            ? 'Questões que você errar no Treino Rápido ou no Simulado Completo aparecem aqui depois, no momento certo para reforçar a memória.'
            : `Você tem ${totalAguardando} questão${totalAguardando === 1 ? '' : 'ões'} agendada${
                totalAguardando === 1 ? '' : 's'
              } para revisão futura.`}
        </p>
        {totalAguardando > 0 && dias !== null && (
          <p className="text-xs text-[#7b7487]">
            A próxima fica disponível em {dias} {dias === 1 ? 'dia' : 'dias'}.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative">
        <div className="absolute -left-8 -top-10 w-40 h-40 bg-[#7c3aed]/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute right-0 -top-6 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative">
          <div className="inline-flex items-center gap-1.5 bg-[#ede0ff] text-[#630ed4] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[14px]">history</span>
            Revisão Espaçada
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#191c1d] tracking-tight">
            Questões que você já errou antes
          </h1>
          <p className="text-xs md:text-sm text-[#4a4455] mt-0.5">
            Reforce agora, no momento em que a memória mais precisa — é assim que o conteúdo gruda.
          </p>
        </div>

        <div className="bg-white px-4 py-2 rounded-2xl border border-[#d6cce8] text-xs font-bold text-[#4a4455] shadow-xs flex items-center gap-2 self-start sm:self-auto">
          <span>Progresso:</span>
          <span className="text-[#630ed4] text-sm font-black">{currentIndex + (isAnswered ? 1 : 0)}</span>
          <span className="text-[#7b7487]">/ {fila.length}</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isFinished ? (
          <motion.div
            key="resultado"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl p-6 md:p-10 border border-[#d6cce8] shadow-sm text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#7c3aed] via-[#c026d3] to-amber-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-[#c026d3]/30">
              <span className="material-symbols-outlined text-[32px]">emoji_events</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-[#191c1d] mb-1">Revisão concluída!</h2>
            <p className="text-sm text-[#4a4455] mb-6">
              Você revisou {fila.length} questão{fila.length === 1 ? '' : 'ões'} nesta sessão.
            </p>
            <div className="inline-flex items-center gap-6 bg-[#f5f0ff] border border-[#d6cce8] rounded-2xl px-6 py-4 mb-6">
              <div>
                <span className="block text-3xl font-black text-[#047857]">{acertos}</span>
                <span className="text-[10px] font-bold text-[#7b7487] uppercase tracking-wider">
                  Avançaram ou dominadas
                </span>
              </div>
              <div className="w-px h-10 bg-[#d6cce8]" />
              <div>
                <span className="block text-3xl font-black text-amber-700">{erros}</span>
                <span className="text-[10px] font-bold text-[#7b7487] uppercase tracking-wider">
                  Voltaram para o início
                </span>
              </div>
            </div>
            <p className="text-xs text-[#7b7487] max-w-sm mx-auto">
              As que você errou de novo vão reaparecer amanhã. As que acertou ficam agendadas para daqui a mais
              tempo — quanto mais vezes você acerta a mesma questão em dias diferentes, mais espaçadas ficam as
              revisões dela.
            </p>
          </motion.div>
        ) : (
          currentQ && (
            <motion.div
              key={currentQ.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-5 md:p-7 border border-[#d6cce8] shadow-sm mb-6"
            >
              {/* Question metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#d6cce8]">
                <div className="flex items-center gap-2">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-md"
                    style={{ backgroundColor: subj?.bgColor, color: subj?.textColor }}
                  >
                    {currentQ.areaName}
                  </span>
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md">
                    Você errou esta antes
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#7b7487]">
                  <span>Questão {currentIndex + 1} de {fila.length}</span>
                </div>
              </div>

              {/* Question text */}
              <div className="text-sm md:text-base text-[#191c1d] leading-relaxed font-normal mb-6 whitespace-pre-line">
                {currentQ.question}
              </div>

              {/* Options list */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt) => {
                  const isSelected = selectedOption === opt.letter;
                  let optionStyle = 'bg-[#f5f0ff] border-[#d6cce8] text-[#191c1d] hover:border-[#7c3aed]';

                  if (isAnswered) {
                    if (opt.letter === currentQ.correctLetter) {
                      optionStyle = 'bg-[#d1fae5] border-[#10b981] text-[#047857] font-semibold';
                    } else if (isSelected && opt.letter !== currentQ.correctLetter) {
                      optionStyle = 'bg-[#fee2e2] border-[#ef4444] text-[#b91c1c]';
                    } else {
                      optionStyle = 'bg-[#f5f0ff] border-[#d6cce8] text-[#7b7487] opacity-60';
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
                        <span
                          className={
                            isSelected || (isAnswered && opt.letter === currentQ.correctLetter)
                              ? 'text-white'
                              : 'text-[#4a4455]'
                          }
                        >
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
                <div className="p-4 md:p-5 rounded-2xl bg-[#f5f0ff] border border-[#d6cce8] space-y-3 animate-in fade-in duration-300">
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
                        ? 'Acertou! Um passo mais perto de dominar esta questão.'
                        : `Gabarito Oficial: Letra ${currentQ.correctLetter}`}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-[#4a4455] leading-relaxed">{currentQ.explanation}</p>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                    <span className="material-symbols-outlined text-amber-600 text-base mt-0.5">lightbulb</span>
                    <span>
                      <strong>Dica:</strong> {currentQ.triTip}
                    </span>
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
                    <span>{currentIndex < fila.length - 1 ? 'Próxima Questão' : 'Ver Resumo'}</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                )}
              </div>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
};
