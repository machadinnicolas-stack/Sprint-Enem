import React from 'react';
import { Sliders, CalendarCheck, TrendingUp, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Como funciona o método
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Transforme sua rotina em um plano.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Três passos simples para substituir a confusão diária por uma rota clara de estudo.
          </p>
        </div>

        {/* 3 Step Visual Representation */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          
          {/* Step 01 */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-purple-600/30">01</span>
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600">
                  <Sliders className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Conte sua realidade
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Você informa seu curso desejado, objetivo de nota, nível atual, dias disponíveis para estudar, horas livres por dia e principais dificuldades.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl border-t">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Curso pretendido & pesos</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Horas reais por dia (ex: 1h, 2h ou 4h)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Pontos fracos declarados</span>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-purple-200 shadow-sm flex flex-col justify-between ring-2 ring-purple-500/10">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-purple-600/40">02</span>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white flex items-center justify-center shadow-xs">
                  <CalendarCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Organize seu Sprint
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                O sistema estrutura um plano semanal dinâmico compatível com as informações fornecidas, priorizando conteúdos de alta incidência e pesos estratégicos.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5 bg-purple-50/50 -mx-6 -mb-6 p-4 rounded-b-2xl border-t border-purple-100/60">
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Cronograma semanal dinâmico</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Temas filtrados por incidência real</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Blocos com tempo exato do seu dia</span>
              </div>
            </div>
          </div>

          {/* Step 03 */}
          <div className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-black text-purple-600/30">03</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug">
                Execute e acompanhe
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Estude usando o cronograma, faça simulados TRI, treine redação, ligue o Modo Foco e acompanhe seu progresso por XP, níveis e sequência diária.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5 bg-slate-50/80 -mx-6 -mb-6 p-4 rounded-b-2xl border-t">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Sessões focadas com timer integrado</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Simulados com análise de proficiência</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Evolução visual a cada bloco finalizado</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
