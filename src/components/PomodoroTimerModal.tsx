import React, { useState, useEffect } from 'react';
import { StudyBlock } from '../types';
import confetti from 'canvas-confetti';

interface PomodoroTimerModalProps {
  block: StudyBlock | null;
  onClose: () => void;
  onCompleteBlock: (blockId: string) => void;
}

export const PomodoroTimerModal: React.FC<PomodoroTimerModalProps> = ({
  block,
  onClose,
  onCompleteBlock
}) => {
  const defaultMinutes = block?.durationMinutes || 25;
  const [timeLeft, setTimeLeft] = useState(defaultMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(defaultMinutes);

  useEffect(() => {
    if (block) {
      const mins = block.durationMinutes || 25;
      setSelectedDuration(mins);
      setTimeLeft(mins * 60);
      setIsRunning(false);
    }
  }, [block]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch {
        // safe fallback
      }
      if (block) {
        onCompleteBlock(block.id);
      }
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, block, onCompleteBlock]);

  useEffect(() => {
    if (!block) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [block, onClose]);

  if (!block) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercent = ((selectedDuration * 60 - timeLeft) / (selectedDuration * 60)) * 100;

  const setTimerPreset = (mins: number) => {
    setSelectedDuration(mins);
    setTimeLeft(mins * 60);
    setIsRunning(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pomodoro-modal-title"
        className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-[#e1e3e4] relative animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 text-[#7b7487] hover:text-[#191c1d] p-1.5 rounded-full hover:bg-[#f3f4f5] transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Header info */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#630ed4] bg-[#ede0ff] px-3 py-1 rounded-full mb-2">
            <span className="material-symbols-outlined text-[14px]">timer</span>
            Modo Foco Ativo
          </span>
          <h3 id="pomodoro-modal-title" className="text-lg md:text-xl font-bold text-[#191c1d] leading-snug">
            {block.title}
          </h3>
          <p className="text-xs text-[#7b7487] mt-1 line-clamp-1">{block.topic}</p>
        </div>

        {/* Timer Circle */}
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#ede0ff"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="44"
              stroke="#7c3aed"
              strokeWidth="6"
              strokeDasharray="276.46"
              strokeDashoffset={276.46 - (276.46 * progressPercent) / 100}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-500 ease-linear"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-4xl font-extrabold tracking-tight text-[#191c1d] font-mono">
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
            <span className="text-xs font-medium text-[#7b7487] mt-0.5">
              {isRunning ? 'Em andamento' : 'Pausado'}
            </span>
          </div>
        </div>

        {/* Presets */}
        <div className="flex justify-center gap-2 mb-6">
          {[15, 25, 45, 60].map((mins) => (
            <button
              key={mins}
              onClick={() => setTimerPreset(mins)}
              className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all cursor-pointer ${
                selectedDuration === mins
                  ? 'bg-[#ede0ff] text-[#630ed4] border-[#7c3aed]'
                  : 'bg-white text-[#4a4455] border-[#e1e3e4] hover:border-[#7c3aed]'
              }`}
            >
              {mins} min
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer ${
              isRunning
                ? 'bg-[#ba1a1a] hover:bg-[#93000a] text-white'
                : 'bg-[#7c3aed] hover:bg-[#630ed4] text-white'
            }`}
          >
            <span className="material-symbols-outlined">
              {isRunning ? 'pause' : 'play_arrow'}
            </span>
            <span>{isRunning ? 'Pausar' : 'Iniciar Foco'}</span>
          </button>

          <button
            onClick={() => {
              onCompleteBlock(block.id);
              onClose();
            }}
            className="py-3 px-4 rounded-xl font-semibold text-sm bg-[#d1fae5] text-[#047857] border border-[#10b981] hover:bg-[#a7f3d0] transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Concluir bloco agora"
          >
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>Concluir</span>
          </button>
        </div>

        {/* Quick study tip */}
        {block.tip && (
          <div className="mt-4 p-3 bg-[#f9fafb] border border-[#e1e3e4] rounded-xl text-xs text-[#4a4455] flex items-start gap-2">
            <span className="material-symbols-outlined text-amber-500 text-sm mt-0.5">lightbulb</span>
            <span>{block.tip}</span>
          </div>
        )}
      </div>
    </div>
  );
};
