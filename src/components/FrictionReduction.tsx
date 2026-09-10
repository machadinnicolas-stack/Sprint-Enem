import React from 'react';
import { LogIn, UserCheck, SlidersHorizontal, PlayCircle } from 'lucide-react';

interface Step {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    icon: LogIn,
    title: 'Acesse a plataforma',
    description: 'Receba seu link de acesso diretamente após a confirmação e entre no ambiente web do Sprint.',
  },
  {
    number: '2',
    icon: UserCheck,
    title: 'Informe sua rotina e objetivo',
    description: 'Preencha o curso almejado, suas maiores dificuldades e as horas reais que você pode estudar por dia.',
  },
  {
    number: '3',
    icon: SlidersHorizontal,
    title: 'Personalize seu plano',
    description: 'O Sprint estrutura um cronograma semanal dinâmico priorizando temas frequentes para o seu perfil.',
  },
  {
    number: '4',
    icon: PlayCircle,
    title: 'Comece seu próximo bloco',
    description: 'Abra a primeira tarefa do dia com timer no Modo Foco e sinta a clareza de saber exatamente o que fazer.',
  },
];

export const FrictionReduction: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Você não precisa reorganizar sua vida inteira para começar.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            O processo de entrada foi pensado para ser rápido, sem burocracia ou formulários intermináveis.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between hover:border-purple-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center text-purple-600 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-purple-600/20">
                      0{step.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
