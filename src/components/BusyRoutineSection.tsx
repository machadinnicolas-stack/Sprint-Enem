import React from 'react';
import { Clock, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { handleCheckoutClick } from '../config';

interface RoutineExample {
  profile: string;
  timeAvailable: string;
  strategy: string;
  details: string;
}

const routineExamples: RoutineExample[] = [
  {
    profile: 'Trabalha em período integral',
    timeAvailable: '1h15 por dia útil (noite) + sábado de manhã',
    strategy: 'Priorização cirúrgica de temas recorrentes',
    details: 'Em vez de tentar assistir a aulas teóricas de 2 horas, o plano foca em blocos curtos de revisão ativa e questões-chave dos temas com mais peso no curso almejado.',
  },
  {
    profile: 'Rotina mista (trabalho ou faculdade anterior)',
    timeAvailable: '2 horas por dia (4 dias na semana)',
    strategy: 'Alternância equilibrada entre exatas e redação',
    details: 'Dois blocos de 50 minutos com intervalo: um bloco de treino de questões de alta incidência e outro dedicado à redação ou correção comentada.',
  },
  {
    profile: 'Rotina flexível ou estudante exclusivo',
    timeAvailable: '3h a 4h por dia',
    strategy: 'Ciclo completo de incidência, simulados TRI e redação',
    details: 'Distribuição homogênea entre as quatro áreas do conhecimento com simulados regulares para monitorar a proficiência.',
  },
];

export const BusyRoutineSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200/70 px-3 py-1 rounded-full">
            Adaptação à vida real
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Pouco tempo não precisa significar estudo sem direção — principalmente se a sua meta é entrar na faculdade.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Você informa os dias e o tempo que consegue estudar. O Sprint usa essas informações para ajudar a organizar um plano compatível com sua rotina.
          </p>
        </div>

        {/* Conceptual Formula Badge */}
        <div className="mt-8 max-w-md mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs text-center">
          <div className="flex items-center justify-center gap-3 text-sm sm:text-base font-bold text-slate-900">
            <span className="px-3 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-100">
              &ldquo;Tenho pouco tempo.&rdquo;
            </span>
            <span className="text-purple-600 font-extrabold text-lg">→</span>
            <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100">
              &ldquo;Então preciso priorizar melhor.&rdquo;
            </span>
          </div>
        </div>

        {/* Routine Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {routineExamples.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-purple-600 font-semibold text-xs mb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>Perfil de Rotina</span>
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {item.profile}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-700 bg-purple-50/50 p-2.5 rounded-lg border border-purple-100/60">
                  <Clock className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>{item.timeAvailable}</span>
                </div>

                <p className="mt-3 text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Estratégia aplicada:
                </p>
                <p className="text-sm font-semibold text-purple-700 mt-0.5">
                  {item.strategy}
                </p>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {item.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Compatível com a plataforma</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible note */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-700 max-w-lg mx-auto font-medium">
            * O Sprint não faz promessas milagrosas de aprovação com poucos minutos: ele garante que o tempo que você realmente dispõe seja investido nos tópicos e tarefas que mais fazem sentido para seu objetivo.
          </p>

          <button
            onClick={() => handleCheckoutClick('mid_page_cta_click')}
            className="mt-5 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-bold text-sm shadow-md shadow-purple-500/20 transition-all cursor-pointer active:scale-[0.98]"
          >
            <span>Planejar meus estudos com meu tempo atual</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
