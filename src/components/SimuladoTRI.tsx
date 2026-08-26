import React, { useState } from 'react';
import { MOCK_QUESTIONS, SUBJECT_INFO } from '../data/enemData';
import { ExamQuestion } from '../types';
import confetti from 'canvas-confetti';

interface SimuladoTRIProps {
  onAnswerQuestion?: (isCorrect: boolean) => void;
}

export const SimuladoTRI: React.FC<SimuladoTRIProps> = ({ onAnswerQuestion }) => {
  const [questions] = useState<ExamQuestion[]>(MOCK_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQ = questions[currentIndex];
  const subj = SUBJECT_INFO[currentQ.subject];

  const handleSelectOption = (letter: string) => {
    if (isAnswered) return;
    setSelectedOption(letter);
  };

  const handleConfirmAnswer = () => {
    if (!selectedOption || isAnswered) return;
    setIsAnswered(true);

    const isCorrect = selectedOption === currentQ.correctLetter;
    if (isCorrect) {
      setScore((prev) => prev + 1);
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
      // Reset or show final
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
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
          <span className="text-[#630ed4] text-sm font-black">{score}</span>
          <span className="text-[#7b7487]">/ {questions.length}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-5 md:p-7 border border-[#e1e3e4] shadow-sm mb-6">
        {/* Question metadata */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#e1e3e4]">
          <div className="flex items-center gap-2">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-md"
              style={{ backgroundColor: subj.bgColor, color: subj.textColor }}
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
                className={`w-full p-3.5 rounded-2xl border text-left text-xs md:text-sm flex items-start gap-3 transition-all cursor-pointer ${optionStyle}`}
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
              className="px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-bold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              Confirmar Resposta
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-bold text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>{currentIndex < questions.length - 1 ? 'Próxima Questão' : 'Reiniciar Simulado'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
