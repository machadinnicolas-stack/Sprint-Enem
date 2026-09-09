import React from 'react';
import { Compass, CalendarX2, Layers } from 'lucide-react';

const painPoints = [
  {
    icon: Layers,
    title: 'Matéria demais para revisar',
    description: 'São dezenas de disciplinas, centenas de tópicos. Difícil saber por onde começar quando tudo parece importante.',
  },
  {
    icon: CalendarX2,
    title: 'Pouco tempo até a prova',
    description: 'O calendário avança e a sensação de estar atrasado só aumenta. O tempo que sobra no dia é curto — e precisa render.',
  },
  {
    icon: Compass,
    title: 'Dificuldade para saber o que priorizar',
    description: 'Sem uma referência clara, você estuda no escuro. Pula de assunto em assunto sem saber se aquilo vai cair na prova.',
  },
];

export const PainSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Você senta para estudar… mas nem sabe por onde começar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            O problema nem sempre é falta de vontade. Quando existem dezenas de matérias, pouco tempo e nenhuma direção, você perde mais tempo tentando decidir o que estudar do que realmente estudando.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200/90 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center shadow-xs shrink-0">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
