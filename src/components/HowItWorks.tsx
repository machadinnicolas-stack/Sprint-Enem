import React from 'react';
import { LogIn, SlidersHorizontal, TrendingUp } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '01',
    icon: LogIn,
    title: 'Acesse o Sprint',
    description: 'Após a confirmação da compra, você recebe o acesso à plataforma.',
  },
  {
    number: '02',
    icon: SlidersHorizontal,
    title: 'Personalize seu plano',
    description: 'Informe sua rotina, objetivo, tempo disponível e principais dificuldades.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Comece a estudar',
    description: 'Siga seu planejamento, pratique e acompanhe sua evolução.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Começar é simples.
          </h2>
        </div>

        {/* 3 Step Visual Representation */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-purple-600/30">{step.number}</span>
                  <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
