import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRODUCT_NAME, PRICE, handleCheckoutClick } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

const includedFeatures = [
  'Cronograma personalizado de acordo com sua rotina e tempo disponível',
  'Simulados TRI com questões e acompanhamento de estratégia',
  'Raio-X de incidência com checklist dos temas mais recorrentes',
  'Oficina de Redação com temas, repertórios e as 5 competências do ENEM',
  'Modo Foco com timer integrado aos blocos de estudo',
  'Sistema de progresso e gamificação com XP, níveis e sequência diária',
];

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Acesso Completo
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comece seu Sprint hoje.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Tudo o que você precisa para parar de perder tempo decidindo o que estudar e começar a executar seu plano.
          </p>
        </div>

        {/* Central Premium Card */}
        <div className="mt-10 sm:mt-12 bg-white rounded-3xl p-6 sm:p-10 border-2 border-purple-500/80 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
          
          {/* Top Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <SprintEnemLogo size="lg" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Zap className="w-3.5 h-3.5 text-purple-600" />
                  <span>Plataforma Digital de Estudos</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                  {PRODUCT_NAME}
                </h3>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs sm:text-sm font-extrabold text-slate-500 uppercase tracking-wider block">
                Valor Único
              </span>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 tracking-tight animate-pulse-price">
                {PRICE}
              </div>
              <p className="mt-2 text-sm font-bold text-purple-700">
                Menos do que um lanche.
              </p>
            </div>
          </div>

          {/* Included Items Checklist */}
          <div className="py-8">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              O que está incluído no seu acesso:
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {includedFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing & Big CTA */}
          <div className="pt-6 border-t border-slate-100 space-y-4 text-center">
            
            <button
              id="offer-cta-btn"
              onClick={() => handleCheckoutClick('offer_cta_click')}
              className="w-full inline-flex items-center justify-center gap-3.5 px-8 py-6 sm:py-6 text-xl sm:text-2xl font-black text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.99] rounded-2xl shadow-2xl shadow-purple-500/30 animate-pulse-cta transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO ACESSAR O SPRINT ENEM</span>
              <ArrowRight className="w-7 h-7 stroke-[2.5]" />
            </button>

            {/* Microcopy & Security */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-700 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Após a confirmação, você recebe o endereço para acessar a plataforma.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Garantia de 7 dias para arrependimento, conforme o Código de Defesa do Consumidor.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
