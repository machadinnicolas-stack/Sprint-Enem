import React from 'react';
import { AlertCircle, CalendarX2, Shuffle, Hourglass, BatteryLow, Compass, ArrowRight } from 'lucide-react';
import { handleCheckoutClick } from '../config';

interface PainPoint {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    icon: Compass,
    title: 'Não saber qual matéria priorizar',
    description: 'Você abre o edital ou a lista de matérias com dezenas de tópicos e passa meia hora apenas tentando decidir o que abrir primeiro.',
  },
  {
    icon: CalendarX2,
    title: 'Cronogramas que não cabem na rotina',
    description: 'Planejamentos prontos da internet que exigem 6 horas diárias de quem trabalha ou estuda o dia inteiro e só tem 1h ou 2h livres.',
  },
  {
    icon: Shuffle,
    title: 'Estudo em ordem aleatória',
    description: 'Pular de uma matéria para outra sem saber se aquele conteúdo realmente tem peso ou incidência relevante na sua prova.',
  },
  {
    icon: Hourglass,
    title: 'A sensação constante de atraso',
    description: 'Olhar o calendário, perceber os meses passando e sentir que já perdeu tempo demais para conseguir organizar tudo.',
  },
  {
    icon: BatteryLow,
    title: 'Poucas horas disponíveis por dia',
    description: 'Chegar em casa cansado e não ter energia para planejar, gerenciar planilhas ou adivinhar o próximo exercício.',
  },
  {
    icon: AlertCircle,
    title: 'Terminar o dia sem sensação de avanço',
    description: 'Passar horas na frente de livros ou vídeos e, no fim da noite, sentir que não assimilou nem construiu nada palpável.',
  },
];

export const PainSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
            A realidade da preparação
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Quando tudo parece importante, você acaba não sabendo por onde começar.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Se você se identifica com algum destes cenários, saiba que isso acontece com a maioria dos estudantes que tentam se preparar sem uma direção definida:
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
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
              </div>
            );
          })}
        </div>

        {/* Mature Bridge / Transition */}
        <div className="mt-12 sm:mt-16 max-w-2xl mx-auto text-center rounded-2xl bg-purple-50/70 border border-purple-200/80 p-6 sm:p-8">
          <p className="text-base sm:text-xl font-bold text-slate-900 leading-relaxed">
            Seu problema talvez não seja falta de vontade.
            <br />
            <span className="text-purple-700 font-extrabold">Talvez esteja faltando direção.</span>
          </p>
          <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto">
            Quando você sabe exatamente o que precisa executar hoje, o estudo finalmente flui e a ansiedade dá lugar à disciplina.
          </p>
          <div className="mt-5">
            <button
              onClick={() => handleCheckoutClick('mid_page_cta_click')}
              className="inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
            >
              <span>Organizar minha rotina no Sprint ENEM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
