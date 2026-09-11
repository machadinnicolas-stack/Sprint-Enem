import React from 'react';
import { ArrowRight, Check, ShieldCheck, Sparkles } from 'lucide-react';
import {
  PRODUCT_NAME,
  PRICE,
  BUNDLE_PRICE,
  ESSAY_ADDON_PRICE,
  CHECKOUT_URL,
  BUNDLE_CHECKOUT_URL,
  handleCheckoutClick,
} from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

const enemFeatures = [
  'Cronograma personalizado',
  'Raio-X de incidência',
  'Questões e simulados',
  'Oficina de Redação',
  'Modo Foco',
  'Acompanhamento de progresso',
];

const bundleFeatures = [
  'Tudo do Sprint ENEM',
  'Sprint Redação completo',
  '5 competências',
  'Planejamento de tese e argumentos',
  'Introdução e desenvolvimento',
  'Proposta de intervenção',
  'Checklists de revisão',
  'Exercícios e materiais práticos',
];

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="relative py-16 sm:py-24 bg-gradient-to-b from-violet-200/70 via-fuchsia-100 to-purple-100 border-b border-slate-200/60 overflow-hidden">
      {/* Ambient glow behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-10 -z-0 flex justify-center blur-3xl"
      >
        <div className="h-80 w-[46rem] rounded-full bg-gradient-to-r from-violet-300/50 via-fuchsia-200/50 to-purple-300/50" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Duas formas de começar
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Escolha como começar.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* OFERTA 1: Sprint ENEM */}
          <div className="flex flex-col h-full rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-lg shadow-slate-900/5 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-3.5">
              <SprintEnemLogo size="lg" />
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                {PRODUCT_NAME}
              </h3>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl sm:text-6xl font-black text-slate-950 tracking-tight">{PRICE}</span>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Para quem quer organizar os estudos e saber o que fazer todos os dias até o ENEM.
            </p>

            <ul className="mt-6 space-y-3 flex-1">
              {enemFeatures.map((item) => (
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
              onClick={() => handleCheckoutClick('offer_enem_cta_click', CHECKOUT_URL)}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-purple-500/25 transition-all hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 hover:shadow-2xl hover:shadow-purple-500/35 hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO O SPRINT ENEM</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* OFERTA 2: Sprint ENEM + Sprint Redação (gradient-bordered highlight card) */}
          <div className="relative rounded-[2rem] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-[2px] shadow-2xl shadow-purple-500/30 transition-transform hover:-translate-y-1.5">
            {/* Floating badge */}
            <div className="absolute left-1/2 -top-3.5 -translate-x-1/2 z-10 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-lg shadow-purple-500/40 whitespace-nowrap">
              MAIS COMPLETO
            </div>

            <div className="flex flex-col h-full rounded-[calc(2rem-2px)] bg-white p-6 sm:p-8 pt-8">
              <div className="flex items-center gap-3.5">
                <SprintEnemLogo size="lg" />
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-1 border border-purple-200">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Combo</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                    Sprint ENEM + Sprint Redação
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold text-slate-500">
                {PRODUCT_NAME} {PRICE} + Sprint Redação {ESSAY_ADDON_PRICE}
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 tracking-tight">{BUNDLE_PRICE}</span>
              </div>

              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Para quem quer organizar toda a preparação e também ter um material prático para planejar, escrever e revisar a redação.
              </p>

              <ul className="mt-6 space-y-3 flex-1">
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
                onClick={() => handleCheckoutClick('offer_bundle_cta_click', BUNDLE_CHECKOUT_URL)}
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-purple-500/30 transition-all hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
              >
                <span>QUERO O PACOTE COMPLETO</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
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
