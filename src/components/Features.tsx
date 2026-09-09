import React from 'react';
import { 
  CalendarDays, 
  Target, 
  CheckSquare2, 
  PenTool, 
  Timer, 
  Award,
  ArrowRight
} from 'lucide-react';
import { handleCheckoutClick } from '../config';

interface FeatureItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  quote: string;
  details: string[];
  badgeColor: string;
}

const featuresList: FeatureItem[] = [
  {
    id: 'cronograma',
    icon: CalendarDays,
    title: 'Cronograma Personalizado',
    quote: 'Um plano semanal pensado de acordo com sua rotina, nível e disponibilidade.',
    details: [
      'Estruturado a partir do seu curso e objetivo',
      'Adaptado aos dias e horas que você realmente tem',
      'Reduz a paralisia: você já sabe o que abrir ao sentar'
    ],
    badgeColor: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    id: 'raio-x',
    icon: Target,
    title: 'Raio-X de Incidência',
    quote: 'Identifique temas recorrentes e tenha mais clareza para definir prioridades.',
    details: [
      'Checklist estratégico de tópicos frequentes no ENEM',
      'Foco onde há maior probabilidade de cobrança',
      'Evita gastar horas em assuntos de raríssima aparição'
    ],
    badgeColor: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    id: 'simulados',
    icon: CheckSquare2,
    title: 'Simulados TRI',
    quote: 'Pratique questões e acompanhe seu desempenho com estratégia.',
    details: [
      'Questões no padrão ENEM para treino prático',
      'Acompanhamento de acertos e consistência',
      'Visão estratégica de proficiência por área'
    ],
    badgeColor: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    id: 'redacao',
    icon: PenTool,
    title: 'Oficina de Redação',
    quote: 'Trabalhe temas, repertórios e as cinco competências avaliadas no ENEM.',
    details: [
      'Banco de eixos temáticos e repertórios orientados',
      'Avaliação guiada pelas 5 competências oficiais do ENEM',
      'Estrutura para construir textos com segurança'
    ],
    badgeColor: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
  },
  {
    id: 'foco',
    icon: Timer,
    title: 'Modo Foco',
    quote: 'Use blocos de estudo com timer para apoiar sessões mais concentradas.',
    details: [
      'Timer integrado diretamente aos blocos de estudo',
      'Estudos em blocos concentrados (estilo sprint)',
      'Apoio prático contra distrações e interrupções'
    ],
    badgeColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    id: 'gamificacao',
    icon: Award,
    title: 'Gamificação',
    quote: 'XP, níveis, sequência e emblemas tornam sua evolução visível.',
    details: [
      'Ganhe XP ao concluir seus blocos diários de estudo',
      'Mantenha sua sequência ativa para criar o hábito',
      'Emblemas de disciplina que mostram sua consistência real'
    ],
    badgeColor: 'text-orange-600 bg-orange-50 border-orange-100',
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Módulos integrados
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Tudo que você precisa para transformar planejamento em execução.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Uma plataforma digital completa onde cada recurso tem uma função direta no seu estudo diário.
          </p>
        </div>

        {/* 6 Features Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-purple-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${feat.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {feat.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-700 font-medium leading-snug bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    &ldquo;{feat.quote}&rdquo;
                  </p>

                  <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-600">
                    {feat.details.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Plataforma Digital</span>
                  <span className="text-purple-700 font-bold">Incluído</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => handleCheckoutClick('mid_page_cta_click')}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-purple-500/25 transition-all active:scale-[0.98] cursor-pointer"
          >
            <span>QUERO ACESSAR TODOS OS RECURSOS</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
