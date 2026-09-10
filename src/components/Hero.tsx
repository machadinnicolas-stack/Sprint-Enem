import React from 'react';
import { ArrowRight, CheckCircle2, Clock, BookOpen, Target, Flame, Play } from 'lucide-react';
import { PRODUCT_NAME, PRICE, scrollToOffer } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

export const Hero: React.FC = () => {
  return (
    <section id="topo" className="relative pt-6 pb-14 sm:pt-10 sm:pb-20 overflow-hidden">
      {/* Harmonious Violet/Fuchsia Background Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-purple-200/50 via-fuchsia-100/40 to-pink-200/50 opacity-80"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200/80 text-purple-900 text-xs sm:text-sm font-bold mb-5 shadow-xs">
            <SprintEnemLogo size="xs" />
            <span>ENEM 2026</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] text-balance">
            Você não precisa estudar tudo.
            <br className="hidden sm:block" />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600">
              Precisa saber o que estudar agora.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto text-balance">
            O {PRODUCT_NAME} monta seu plano de estudos de acordo com sua rotina, mostra o que priorizar e reúne as ferramentas que você precisa para estudar com direção.
          </p>

          {/* Price line */}
          <div className="mt-6 flex items-center justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-purple-50 border-2 border-purple-200 text-slate-800 shadow-sm">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">{PRODUCT_NAME} a partir de</span>
              <span className="font-black text-purple-700 text-xl sm:text-2xl animate-pulse-price tracking-tight">{PRICE}</span>
            </div>
          </div>

          {/* CTA Group */}
          <div className="mt-7 sm:mt-8 flex flex-col items-center justify-center gap-4">
            <button
              id="hero-main-cta"
              onClick={() => scrollToOffer('hero_cta_click')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 sm:px-12 py-5 sm:py-5 text-lg sm:text-xl font-black text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.98] rounded-2xl shadow-xl shadow-purple-500/30 animate-pulse-cta transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO COMEÇAR AGORA</span>
              <ArrowRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Microcopy */}
            <p className="text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Acesso digital • Comece hoje</span>
            </p>
          </div>
        </div>

        {/* HERO PRODUCT MOCKUP */}
        <div className="mt-10 sm:mt-12 relative mx-auto max-w-4xl">
          {/* Outer Shell resembling modern SaaS window */}
          <div className="rounded-2xl sm:rounded-3xl bg-slate-900/95 p-2 sm:p-3.5 shadow-2xl ring-1 ring-purple-900/40 shadow-purple-950/20">
            {/* Window bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800 mb-2 sm:mb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 ml-2">
                  <SprintEnemLogo size="xs" />
                  <span className="text-[11px] font-bold text-slate-300 hidden sm:inline">
                    Sprint ENEM • Painel do Estudante
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md bg-purple-950 text-purple-300 border border-purple-800/60">
                  Plano Ativo • Hoje: 1h30 disponível
                </span>
              </div>
            </div>

            {/* Mockup Interface Inside */}
            <div className="bg-slate-950 rounded-xl sm:rounded-2xl p-3.5 sm:p-6 text-white border border-slate-800/80 space-y-4 sm:space-y-5">

              {/* Top Banner inside app: Next Step Clarity */}
              <div className="bg-gradient-to-r from-slate-900 via-purple-950/50 to-slate-900 rounded-xl p-4 sm:p-5 border border-purple-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Sua Próxima Tarefa
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> Bloco de 40 min
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                    <span>Matemática: Funções e Razão/Proporção</span>
                    <span className="text-xs font-normal text-amber-300 px-1.5 py-0.5 rounded bg-amber-950/70 border border-amber-800/50">
                      Alta Incidência ENEM
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Calculado com base nas suas dificuldades e no tempo disponível nesta terça-feira.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 w-full sm:w-auto">
                  <div className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:opacity-90 text-white font-semibold text-xs sm:text-sm shadow-md transition-all">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Iniciar no Modo Foco</span>
                  </div>
                </div>
              </div>

              {/* 3 Dashboard Summary Widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">

                {/* Widget 1: Cronograma Dinâmico */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Cronograma Semanal
                    </span>
                    <span className="text-emerald-400 font-bold">Hoje: 1/2 blocos</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-between">
                      <span className="text-slate-200">1. Matemática (Revisão ativa)</span>
                      <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-1.5 py-0.5 rounded">Em andamento</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800/60 flex items-center justify-between text-slate-400">
                      <span>2. Redação: Competência 3</span>
                      <span className="text-[10px] text-slate-500">Hoje às 20h30</span>
                    </div>
                  </div>
                </div>

                {/* Widget 2: Raio-X Prioridades */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Target className="w-3.5 h-3.5 text-amber-400" /> Raio-X de Incidência
                    </span>
                    <span className="text-slate-400 text-[11px]">Temas prioritários</span>
                  </div>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Ecologia & Ciclos</span>
                      <span className="text-purple-400 font-medium">92% incidência</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-[92%]" />
                    </div>

                    <div className="flex items-center justify-between text-slate-300 pt-1">
                      <span>Cálculo de Proporção</span>
                      <span className="text-purple-400 font-medium">88% incidência</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-full rounded-full w-[88%]" />
                    </div>
                  </div>
                </div>

                {/* Widget 3: Gamificação & Foco */}
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-orange-500" /> Sequência & Evolução
                    </span>
                    <span className="text-orange-400 font-bold">5 dias seguidos</span>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-2">
                      <SprintEnemLogo size="xs" />
                      <div>
                        <div className="text-xs font-bold text-white">Nível 4 • Foco Ativo</div>
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

          {/* Subtle caption */}
          <p className="text-center text-xs text-slate-500 mt-2.5 font-medium">
            Interface visual representativa da plataforma Sprint ENEM.
          </p>
        </div>
      </div>
    </section>
  );
};
