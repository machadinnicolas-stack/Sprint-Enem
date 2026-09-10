import React, { useState } from 'react';
import {
  LayoutDashboard,
  Calendar,
  CheckSquare,
  Target,
  PenTool,
  Timer,
  Play,
  CheckCircle2,
  Sliders,
} from 'lucide-react';
import { SprintEnemLogo } from './SprintEnemLogo';

interface SolutionBlock {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const solutionBlocks: SolutionBlock[] = [
  {
    icon: Sliders,
    title: 'Plano personalizado',
    description: 'Organize sua semana de acordo com seus dias disponíveis, tempo de estudo e objetivo.',
  },
  {
    icon: Target,
    title: 'Saiba o que priorizar',
    description: 'Use o Raio-X de incidência para direcionar seus estudos aos conteúdos mais relevantes.',
  },
  {
    icon: CheckSquare,
    title: 'Pratique de verdade',
    description: 'Resolva questões, faça simulados e acompanhe sua evolução.',
  },
  {
    icon: PenTool,
    title: 'Redação, foco e progresso',
    description: 'Use ferramentas para treinar redação, manter a concentração e acompanhar sua consistência.',
  },
];

/* =========================================================================
   NOTE FOR DEVELOPERS / PRODUCT TEAM:
   To replace these functional UI mockups with actual screenshot images,
   simply update the `realScreenshotUrl` property in the `screens` array below.
   If `realScreenshotUrl` is null, the clean SVG/HTML SaaS component is rendered.
   ========================================================================= */

interface ScreenTab {
  id: string;
  name: string;
  shortName: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  realScreenshotUrl: string | null; // Placeholder for real image: e.g. '/assets/screens/dashboard.png'
}

const screens: ScreenTab[] = [
  {
    id: 'dashboard',
    name: 'Dashboard Geral',
    shortName: 'Dashboard',
    icon: LayoutDashboard,
    description: 'A visão inicial ao entrar na plataforma: sua próxima tarefa imediata, meta do dia e status dos blocos.',
    realScreenshotUrl: null,
  },
  {
    id: 'cronograma',
    name: 'Cronograma Semanal',
    shortName: 'Cronograma',
    icon: Calendar,
    description: 'Plano semanal gerado dinamicamente com base nas suas horas livres e dias da semana disponíveis.',
    realScreenshotUrl: null,
  },
  {
    id: 'simulados',
    name: 'Simulados TRI',
    shortName: 'Simulados',
    icon: CheckSquare,
    description: 'Ambiente de prática de questões com gabarito comentado e análise estratégica de consistência.',
    realScreenshotUrl: null,
  },
  {
    id: 'raiox',
    name: 'Raio-X de Incidência',
    shortName: 'Raio-X',
    icon: Target,
    description: 'Checklist com os temas que mais aparecem na prova do ENEM para guiar onde investir seu tempo.',
    realScreenshotUrl: null,
  },
  {
    id: 'redacao',
    name: 'Oficina de Redação',
    shortName: 'Redação',
    icon: PenTool,
    description: 'Temas quentes, repertórios legitimados e matriz de avaliação orientada às 5 competências do ENEM.',
    realScreenshotUrl: null,
  },
  {
    id: 'foco',
    name: 'Modo Foco & Gamificação',
    shortName: 'Foco & XP',
    icon: Timer,
    description: 'Timer integrado aos blocos de estudo, contagem de XP por tarefa cumprida, níveis e sequência diária.',
    realScreenshotUrl: null,
  },
];

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const currentScreen = screens.find((s) => s.id === activeTab) || screens[0];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            O Sprint transforma sua rotina em um plano claro.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Informe sua rotina, seu objetivo e suas dificuldades. O Sprint ajuda a transformar isso em uma estratégia de estudos mais organizada.
          </p>
        </div>

        {/* Tab Navigation (Mobile: Horizontal Scroll / Snap; Desktop: Clean segmented bar) */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none sm:justify-center px-1">
            {screens.map((screen) => {
              const Icon = screen.icon;
              const isActive = screen.id === activeTab;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveTab(screen.id)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white shadow-sm shadow-purple-400/30'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span className="sm:hidden">{screen.shortName}</span>
                  <span className="hidden sm:inline">{screen.name}</span>
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs text-slate-600 mt-2 font-medium">
            {currentScreen.description}
          </p>
        </div>

        {/* Showcase Frame */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-slate-950 p-2 sm:p-4 shadow-xl border border-purple-900/30">
            
            {/* Top Browser Bar */}
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
                    Mockup funcional ilustrativo da plataforma
                  </span>
                </div>
              </div>
              <span className="text-[10px] sm:text-xs text-purple-300 bg-purple-950/80 border border-purple-800 px-2.5 py-0.5 rounded-md font-medium">
                {currentScreen.name}
              </span>
            </div>

            {/* Screen Content or Screenshot */}
            <div className="bg-slate-900 rounded-xl p-4 sm:p-6 min-h-[360px] text-white flex flex-col justify-center">
              
              {currentScreen.realScreenshotUrl ? (
                /* Slot for real screenshot image */
                <img 
                  src={currentScreen.realScreenshotUrl} 
                  alt={currentScreen.name} 
                  className="w-full h-auto rounded-lg shadow"
                  loading="lazy"
                />
              ) : (
                /* High-Fidelity Interactive Mockup */
                <div className="space-y-4">
                  
                  {/* TAB 1: DASHBOARD */}
                  {currentScreen.id === 'dashboard' && (
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                        <div>
                          <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">Terça-feira • Semana 3</span>
                          <h4 className="text-lg font-bold text-white">Olá, Estudante! Seu plano de hoje está pronto.</h4>
                        </div>
                        <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800/80 px-2.5 py-1 rounded-full font-medium">
                          Tempo planejado: 1h40min
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-4 rounded-xl bg-slate-800/90 border border-purple-900/60 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-emerald-400 uppercase bg-emerald-950/60 px-2 py-0.5 rounded">Bloco 1 (Agora)</span>
                            <h5 className="font-bold text-white text-base mt-2">Física: Ondulatória e Fenômenos</h5>
                            <p className="text-xs text-slate-400 mt-1">Revisão de conceitos + 10 questões com TRI.</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-700/60">
                            <span className="text-xs text-slate-300">Duração: 45 min</span>
                            <span className="text-xs text-purple-400 font-semibold flex items-center gap-1">
                              <Play className="w-3 h-3 fill-current" /> Abrir no Modo Foco
                            </span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/40 flex flex-col justify-between">
                          <div>
                            <span className="text-[10px] font-bold text-slate-400 uppercase bg-slate-700/50 px-2 py-0.5 rounded">Bloco 2 (Hoje)</span>
                            <h5 className="font-bold text-slate-200 text-base mt-2">Redação: Proposta de Intervenção</h5>
                            <p className="text-xs text-slate-400 mt-1">Treino dos 5 elementos da Competência 5.</p>
                          </div>
                          <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-700/60">
                            <span className="text-xs text-slate-400">Duração: 40 min</span>
                            <span className="text-xs text-slate-400">Agendado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: CRONOGRAMA */}
                  {currentScreen.id === 'cronograma' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h4 className="text-sm font-bold text-white">Cronograma Semanal Adaptado (4 dias / 1h30 por dia)</h4>
                        <span className="text-xs text-slate-400">Curso: Direito • Peso 2 em Humanas e Redação</span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="p-3 rounded-lg bg-purple-950/60 border border-purple-800">
                          <span className="font-bold text-purple-300">Segunda (1h30)</span>
                          <p className="mt-1.5 text-slate-200 font-medium">História do Brasil</p>
                          <p className="text-[11px] text-slate-400">Era Vargas + Cidadania</p>
                          <span className="mt-2 inline-block text-[10px] text-emerald-400 font-semibold">✓ Concluído</span>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-800 border border-slate-700">
                          <span className="font-bold text-white">Terça (1h30)</span>
                          <p className="mt-1.5 text-slate-200 font-medium">Matemática Básica</p>
                          <p className="text-[11px] text-slate-400">Porcentagem & Geometria</p>
                          <span className="mt-2 inline-block text-[10px] text-amber-400 font-semibold">● Hoje</span>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
                          <span className="font-bold text-slate-400">Quinta (1h30)</span>
                          <p className="mt-1.5 text-slate-300 font-medium">Oficina de Redação</p>
                          <p className="text-[11px] text-slate-500">Tema Semanal + Repertório</p>
                          <span className="mt-2 inline-block text-[10px] text-slate-500">Próximo</span>
                        </div>

                        <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40">
                          <span className="font-bold text-slate-400">Sábado (2h00)</span>
                          <p className="mt-1.5 text-slate-300 font-medium">Simulado TRI</p>
                          <p className="text-[11px] text-slate-500">45 questões de Humanas</p>
                          <span className="mt-2 inline-block text-[10px] text-slate-500">Próximo</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: SIMULADOS TRI */}
                  {currentScreen.id === 'simulados' && (
                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-purple-400">Questão 142 • Ciências da Natureza</span>
                          <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded font-medium">Item Fácil TRI (Prioritário)</span>
                        </div>
                        <p className="text-xs text-slate-200 leading-relaxed">
                          &ldquo;Um painel solar fotovoltaico instalado em uma residência converte energia luminosa em energia elétrica...&rdquo;
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                          <div className="p-2 rounded bg-slate-900 border border-emerald-600/50 text-emerald-300 font-medium flex items-center justify-between">
                            <span>A) Conversão direta e rendimento fototérmico</span>
                            <span className="text-[10px] bg-emerald-950 px-1.5 py-0.5 rounded">Gabarito</span>
                          </div>
                          <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400">
                            <span>B) Acúmulo estático em baterias químicas</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">Acompanhamento TRI: Coerência de Respostas</span>
                        <span className="text-emerald-400 font-bold">Régua Coerente (Sem chutes aleatórios)</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: RAIO-X */}
                  {currentScreen.id === 'raiox' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h4 className="text-sm font-bold text-white">Checklist de Incidência ENEM (Últimos anos)</h4>
                        <span className="text-xs text-amber-400">Priorize os itens em verde</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-white font-medium">Ecologia: Preservação, Cadeias e Ciclos</span>
                          </div>
                          <span className="text-emerald-400 font-bold">94% incidência • Essencial</span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span className="text-white font-medium">Funções de 1º e 2º Grau & Gráficos</span>
                          </div>
                          <span className="text-emerald-400 font-bold">89% incidência • Essencial</span>
                        </div>

                        <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/40 flex items-center justify-between text-slate-400">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border border-slate-600" />
                            <span>Geometria Espacial: Prismas e Cilindros</span>
                          </div>
                          <span className="text-purple-300 font-medium">72% incidência • Intermediário</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: REDAÇÃO */}
                  {currentScreen.id === 'redacao' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h4 className="text-sm font-bold text-white">Matriz das 5 Competências do ENEM</h4>
                        <span className="text-xs text-fuchsia-400">Guia de Redação 900+</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Comp. 1</span>
                          <span className="font-semibold text-white mt-1 block">Norma Padrão</span>
                          <span className="text-[10px] text-emerald-400 mt-1 block">Regras & desvios</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Comp. 2</span>
                          <span className="font-semibold text-white mt-1 block">Tema & Repertório</span>
                          <span className="text-[10px] text-emerald-400 mt-1 block">Legitimação</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Comp. 3</span>
                          <span className="font-semibold text-white mt-1 block">Projeto de Texto</span>
                          <span className="text-[10px] text-emerald-400 mt-1 block">Argumentação</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Comp. 4</span>
                          <span className="font-semibold text-white mt-1 block">Coesão</span>
                          <span className="text-[10px] text-emerald-400 mt-1 block">Conectivos</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-center">
                          <span className="text-[10px] font-bold text-slate-400 block">Comp. 5</span>
                          <span className="font-semibold text-white mt-1 block">Intervenção</span>
                          <span className="text-[10px] text-emerald-400 mt-1 block">5 Elementos</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 6: FOCO & GAMIFICAÇÃO */}
                  {currentScreen.id === 'foco' && (
                    <div className="space-y-4 text-center py-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
                        <Timer className="w-3.5 h-3.5 text-purple-400" />
                        <span>Modo Foco Ativo • Sessão de 35 minutos</span>
                      </div>

                      <div className="text-4xl sm:text-5xl font-mono font-extrabold text-white tracking-wider">
                        24:18
                      </div>

                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Bloco em andamento: Matemática Básica. Desative notificações e mantenha a concentração.
                      </p>

                      <div className="pt-2 flex items-center justify-center gap-3">
                        <span className="text-xs bg-purple-950 text-purple-300 border border-purple-800 px-3 py-1.5 rounded-lg font-bold">
                          Sequência: 5 dias seguidos
                        </span>
                        <span className="text-xs bg-emerald-950 text-emerald-300 border border-emerald-800 px-3 py-1.5 rounded-lg font-bold">
                          +50 XP ao concluir
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>
        </div>

        {/* 4 Solution Blocks */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {solutionBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="rounded-2xl p-5 sm:p-6 bg-slate-50 border border-slate-200/90"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-purple-100 flex items-center justify-center text-purple-600 mb-4 shadow-2xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {block.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
