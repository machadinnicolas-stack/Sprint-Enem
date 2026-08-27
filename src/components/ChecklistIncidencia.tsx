import React, { useState } from 'react';
import { SubjectType, TopicItem } from '../types';
import { ENEN_TOPICS, SUBJECT_INFO } from '../data/enemData';
import confetti from 'canvas-confetti';

export const ChecklistIncidencia: React.FC = () => {
  const [topics, setTopics] = useState<TopicItem[]>(ENEN_TOPICS);
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'todos'>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTopic = (id: string) => {
    setTopics((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const next = !item.completed;
          if (next) {
            try {
              confetti({
                particleCount: 40,
                spread: 50,
                origin: { y: 0.7 }
              });
            } catch {
              // safe fallback
            }
          }
          return { ...item, completed: next };
        }
        return item;
      })
    );
  };

  const filteredTopics = topics.filter((t) => {
    const matchSubject = selectedSubject === 'todos' || t.subject === selectedSubject;
    const matchSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSubject && matchSearch;
  });

  const completedCount = topics.filter((t) => t.completed).length;
  const progressPercent = Math.round((completedCount / topics.length) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 pb-24">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#ede0ff] text-[#630ed4] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <span className="material-symbols-outlined text-[14px]">query_stats</span>
              Incidência Real ENEM
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#191c1d] tracking-tight">
              Raio-X de Matérias Mais Recorrentes
            </h1>
            <p className="text-sm text-[#4a4455] mt-1">
              Checklist estratégico dos conteúdos responsáveis por mais de 75% das questões do exame.
            </p>
          </div>

          {/* Progress metric */}
          <div className="bg-white p-4 rounded-2xl border border-[#e1e3e4] shadow-xs min-w-[200px]">
            <div className="flex justify-between items-baseline mb-1.5">
              <span className="text-xs font-bold text-[#7b7487]">Domínio dos Tópicos</span>
              <span className="text-base font-black text-[#630ed4]">{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#f3f4f5] rounded-full h-2 overflow-hidden">
              <div
                className="bg-[#7c3aed] h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-[#7b7487] mt-1.5 block">
              {completedCount} de {topics.length} tópicos dominados
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#e1e3e4] shadow-xs mb-6 space-y-3">
        {/* Search */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7b7487]">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por tópico (ex: Geometria, Ecologia, Vargas...)"
            className="w-full pl-10 pr-4 py-2.5 bg-[#f9fafb] border border-[#ccc3d8] rounded-xl text-sm text-[#191c1d] placeholder:text-[#7b7487] focus:border-[#7c3aed] focus:ring-1 focus:ring-[#7c3aed] outline-none"
          />
        </div>

        {/* Subject pills */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          <button
            onClick={() => setSelectedSubject('todos')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer shrink-0 ${
              selectedSubject === 'todos'
                ? 'bg-[#7c3aed] text-white shadow-xs'
                : 'bg-[#f3f4f5] text-[#4a4455] hover:bg-[#e1e3e4]'
            }`}
          >
            Todas as Áreas
          </button>

          {(['matematica', 'natureza', 'linguagens', 'humanas', 'redacao'] as SubjectType[]).map(
            (subj) => {
              const info = SUBJECT_INFO[subj];
              const isSelected = selectedSubject === subj;
              return (
                <button
                  key={subj}
                  onClick={() => setSelectedSubject(subj)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isSelected
                      ? 'bg-[#7c3aed] text-white shadow-xs'
                      : 'bg-[#f3f4f5] text-[#4a4455] hover:bg-[#e1e3e4]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">{info.icon}</span>
                  <span>{info.name}</span>
                </button>
              );
            }
          )}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map((item) => {
          const subj = SUBJECT_INFO[item.subject];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => toggleTopic(item.id)}
              aria-pressed={item.completed}
              aria-label={`${item.title} — ${item.completed ? 'concluído, clique para desmarcar' : 'não concluído, clique para marcar como concluído'}`}
              className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 ${
                item.completed
                  ? 'bg-[#f8f9fa] border-[#e1e3e4] opacity-80'
                  : 'bg-white border-[#e1e3e4] hover:border-[#7c3aed] shadow-xs'
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Custom Checkbox */}
                <div
                  aria-hidden="true"
                  className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 transition-all shrink-0 ${
                    item.completed
                      ? 'bg-[#7c3aed] border-[#7c3aed] text-white'
                      : 'border-[#ccc3d8] bg-white'
                  }`}
                >
                  {item.completed && (
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-sm"
                      style={{ backgroundColor: subj.bgColor, color: subj.textColor }}
                    >
                      {subj.name}
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200">
                      {item.incidence}
                    </span>
                  </div>

                  <h3
                    className={`text-sm font-bold leading-snug ${
                      item.completed ? 'line-through text-[#7b7487]' : 'text-[#191c1d]'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#4a4455] mt-1.5 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
