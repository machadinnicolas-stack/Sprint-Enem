import React from 'react';
import { BookOpen, Hourglass, Compass } from 'lucide-react';

interface PainPoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    icon: BookOpen,
    title: 'Matéria demais para revisar',
    description: 'Dezenas de temas e conteúdos diferentes, sem saber por onde começar.',
  },
  {
    icon: Hourglass,
    title: 'Pouco tempo até a prova',
    description: 'Os dias passam e a sensação de atraso só aumenta.',
  },
  {
    icon: Compass,
    title: 'Dificuldade para saber o que priorizar',
    description: 'Sem direção clara, você estuda sem saber se está no caminho certo.',
  },
];

export const PainSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-purple-100 via-fuchsia-50 to-violet-100 border-y border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug text-balance">
            Você senta para estudar… mas nem sabe por onde começar?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            O problema nem sempre é falta de vontade. Quando existem dezenas de matérias, pouco tempo e nenhuma direção, você perde mais tempo tentando decidir o que estudar do que realmente estudando.
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200/90 hover:border-purple-200 hover:shadow-lg hover:shadow-slate-900/5 hover:-translate-y-1 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center text-slate-700 mb-4 shadow-2xs">
                  <Icon className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
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
