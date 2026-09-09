import React from 'react';
import {
  Calendar,
  Target,
  CheckSquare,
  PenTool,
  Play,
  Clock,
  BookOpen,
  Flame,
} from 'lucide-react';
import { SprintEnemLogo } from './SprintEnemLogo';

const benefits = [
  {
    icon: Calendar,
    title: 'Plano personalizado',
    description: 'Organize sua semana de acordo com seus dias disponíveis, tempo de estudo e objetivo.',
    color: 'text-purple-600 bg-purple-50 border-purple-100',
  },
  {
    icon: Target,
    title: 'Saiba o que priorizar',
    description: 'Use o Raio-X de incidência para direcionar seus estudos aos conteúdos mais relevantes.',
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    icon: CheckSquare,
    title: 'Pratique de verdade',
    description: 'Resolva questões, faça simulados e acompanhe sua evolução.',
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    icon: PenTool,
    title: 'Redação, foco e progresso',
    description: 'Use ferramentas para treinar redação, manter a concentração e acompanhar sua consistência.',
    color: 'text-fuchsia-600 bg-fuchsia-50 border-fuchsia-100',
  },
];

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            A plataforma
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            O Sprint transforma sua rotina em um plano claro.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Informe sua rotina, seu objetivo e suas dificuldades. O Sprint ajuda a transformar isso em uma estratégia de estudos mais organizada.
          </p>
        </div>

        {/* Mockup Frame */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-slate-950 p-2 sm:p-4 shadow-xl border border-purple-900/30">

            {/* Browser Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800/90 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <SprintEnemLogo size="xs" />
                  <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
                    Sprint ENEM • Dashboard
                  </span>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs text-purple-300 bg-purple-950/80 border border-purple-800 px-2.5 py-0.5 rounded-md font-medium">
                Painel do Estudante
              </span>
            </div>

            {/* Dashboard Content */}
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 text-white space-y-4">

              {/* Top banner */}
              <div className="bg-gradient-to-r from-slate-900 via-purple-950/50 to-slate-900 rounded-xl p-4 border border-purple-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Sua Próxima Tarefa
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Bloco de 40 min
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white">
                    Matemática: Funções e Razão/Proporção
                    <span className="ml-2 text-xs font-normal text-amber-300 px-1.5 py-0.5 rounded bg-amber-950/70 border border-amber-800/50">
                      Alta Incidência
                    </span>
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Modo Foco</span>
                </div>
              </div>

              {/* Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Cronograma Semanal
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-200">Matemática</span>
                      <span className="text-[10px] text-emerald-400 font-semibold">Em andamento</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center justify-between text-slate-400">
                      <span>Redação: Comp. 3</span>
                      <span className="text-[10px]">20h30</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
                    <Target className="w-3.5 h-3.5 text-amber-400" /> Raio-X de Incidência
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Ecologia & Ciclos</span>
                      <span className="text-purple-400 font-medium">92%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-[92%]" />
                    </div>
                    <div className="flex items-center justify-between text-slate-300 pt-0.5">
                      <span>Proporção</span>
                      <span className="text-purple-400 font-medium">88%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-[88%]" />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-2">
                    <Flame className="w-3.5 h-3.5 text-orange-500" /> Sequência & Evolução
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <SprintEnemLogo size="xs" />
                      <div>
                        <div className="text-xs font-bold text-white">Nível 4</div>
                        <div className="text-[11px] text-slate-400">480 / 600 XP</div>
                      </div>
                    </div>
                    <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-1 rounded font-medium">
                      +45 XP hoje
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-3">
                    <div className="bg-emerald-500 h-full rounded-full w-[80%]" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4 Benefit Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 flex flex-col gap-3 hover:border-purple-200 transition-colors"
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${b.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {b.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
