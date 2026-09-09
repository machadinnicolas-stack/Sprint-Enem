import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { handleCheckoutClick } from '../config';

export const DifferenceSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Não é sobre colocar mais conteúdo na sua frente.
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-purple-700 font-bold leading-relaxed">
            É sobre ajudar você a decidir onde colocar o tempo que ainda tem.
          </p>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            A maioria dos estudantes não sofre com falta de apostilas ou vídeos no YouTube — sofre com a sobrecarga de opções e a falta de priorização.
          </p>
        </div>

        {/* Comparison Cards: ANTES vs DEPOIS */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          
          {/* Card ANTES */}
          <div className="rounded-2xl p-6 sm:p-8 bg-rose-50/40 border border-rose-200/80 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Sem o Sprint ENEM</span>
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                &ldquo;Tenho que estudar tudo.&rdquo;
              </blockquote>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Listas infinitas de matérias sem critério de incidência.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Dúvida diária sobre o que abrir, gerando procrastinação.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Sensação permanente de atraso e estresse ao olhar o relógio.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Cronogramas irrealistas que são abandonados na primeira semana.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-rose-200/60 text-xs text-rose-700 font-medium">
              Resultado comum: Paralisia por excesso de informação.
            </div>
          </div>

          {/* Card DEPOIS */}
          <div className="rounded-2xl p-6 sm:p-8 bg-emerald-50/40 border border-emerald-300 shadow-sm flex flex-col justify-between ring-2 ring-emerald-500/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Com o Sprint ENEM</span>
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                &ldquo;Sei qual é a próxima tarefa.&rdquo;
              </blockquote>

              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Um plano semanal dimensionado para o tempo que você realmente tem.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Raio-X com temas recorrentes para priorizar o que mais cai.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Você abre a plataforma e só precisa clicar em &ldquo;Iniciar Bloco&rdquo;.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Simulados TRI, redação e Modo Foco integrados em um só lugar.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-200 text-xs text-emerald-800 font-semibold">
              Resultado prático: Clareza diária e execução constante.
            </div>
          </div>

        </div>

        {/* Responsible Notice */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-700 max-w-lg mx-auto font-medium">
            * O Sprint ENEM não substitui seu esforço nem garante aprovação: ele elimina o atrito do planejamento para que você foque toda sua energia em estudar o que importa.
          </p>
          <button
            onClick={() => handleCheckoutClick('mid_page_cta_click')}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-purple-700 hover:text-purple-900 transition-colors cursor-pointer"
          >
            <span>Quero ter clareza sobre o que estudar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
