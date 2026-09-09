import React from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { PRODUCT_NAME, PRICE, BUNDLE_PRICE, handleCheckoutClick } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

const commonFeatures = [
  'Cronograma personalizado com base na sua rotina real',
  'Raio-X de incidência para priorizar o que mais cai no ENEM',
  'Simulados TRI e acompanhamento estratégico de desempenho',
  'Modo Foco com timer para sessões mais produtivas',
  'Sistema de progresso com XP, níveis e sequência diária',
];

const bundleFeatures = [
  'Todo o conteúdo do Sprint ENEM',
  'Acesso ao Sprint Redação com repertórios e temas',
  'Mais suporte para organização e revisão da redação',
];

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-800 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
            Escolha seu plano
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comece com o caminho certo para o ENEM.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Você pode entrar pelo Sprint ENEM ou aproveitar o combo com Sprint Redação para ampliar seu suporte e sua organização.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <SprintEnemLogo size="lg" />
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Plano base</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    {PRODUCT_NAME}
                  </h3>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">{PRICE}</span>
              <span className="pb-1 text-sm font-bold text-slate-500">acesso único</span>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Ideal para quem quer organizar a rotina, priorizar o que importa e começar a estudar com direção.
            </p>

            <ul className="mt-6 space-y-3">
              {commonFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <button
              id="offer-cta-btn"
              onClick={() => handleCheckoutClick('offer_cta_click')}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-purple-500/20 transition-all hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO O SPRINT ENEM</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          <div className="rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-purple-50 to-white p-6 sm:p-8 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
            <div className="absolute right-5 top-5 rounded-full bg-purple-600 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white">
              MAIS VANTAJOSO
            </div>

            <div className="flex items-center gap-3.5">
              <SprintEnemLogo size="lg" />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white text-purple-700 text-xs font-bold uppercase tracking-wider mb-1 border border-purple-200">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>Combo completo</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  Sprint ENEM + Sprint Redação
                </h3>
              </div>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 tracking-tight">{BUNDLE_PRICE}</span>
              <span className="pb-1 text-sm font-bold text-slate-500">por tudo</span>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Para quem quer levar a organização e a escrita do ENEM para o próximo nível, com foco em leitura, planejamento e redação.
            </p>

            <ul className="mt-6 space-y-3">
              {bundleFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <button
              id="bundle-cta-btn"
              onClick={() => handleCheckoutClick('offer_cta_click')}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-slate-800 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO O COMBO COMPLETO</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Após a confirmação, você recebe o endereço para acessar a plataforma.</span>
          </span>
          <p className="text-xs text-slate-600">
            Garantia de 7 dias para arrependimento, conforme o Código de Defesa do Consumidor.
          </p>
        </div>
      </div>
    </section>
  );
};
