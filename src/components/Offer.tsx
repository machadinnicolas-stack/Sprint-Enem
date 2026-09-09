import React from 'react';
import { ArrowRight, Check, ShieldCheck, Star } from 'lucide-react';
import { PRICE, BUNDLE_PRICE, SPRINT_PRICE, REDACAO_PRICE, handleCheckoutClick, handleBundleCheckoutClick } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

const sprintFeatures = [
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
  'Estrutura das 5 competências',
  'Planejamento de tese e argumentos',
  'Construção de introdução',
  'Construção de desenvolvimento',
  'Proposta de intervenção',
  'Checklists de revisão',
  'Exercícios e materiais práticos',
];

export const Offer: React.FC = () => {
  return (
    <section id="oferta" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Escolha como você quer começar
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Comece apenas com a plataforma ou leve também o material completo de redação.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* CARD 1 — Sprint ENEM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col">
            <div className="flex items-center gap-3.5">
              <SprintEnemLogo size="lg" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Plataforma de estudos</div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
                  Sprint ENEM
                </h3>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">{PRICE}</div>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Para quem quer organizar os estudos e saber o que fazer todos os dias até o ENEM.
            </p>

            <ul className="mt-6 space-y-2.5 flex-1">
              {sprintFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              id="offer-sprint-cta"
              onClick={() => handleCheckoutClick('offer_sprint_cta_click')}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-6 py-4 text-base sm:text-lg font-black text-white shadow-lg shadow-purple-500/20 transition-all hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO O SPRINT ENEM</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* CARD 2 — Bundle */}
          <div className="rounded-3xl border-2 border-purple-500 bg-gradient-to-b from-purple-50 to-white p-6 sm:p-8 shadow-2xl shadow-purple-500/10 relative overflow-hidden flex flex-col">
            {/* Badge */}
            <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-purple-600 px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-white">
              <Star className="w-3 h-3 fill-white" />
              MAIS COMPLETO
            </div>

            <div className="flex items-center gap-3.5 pr-28">
              <SprintEnemLogo size="lg" />
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-1">Plataforma + Material</div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                  Sprint ENEM<br />+ Sprint Redação
                </h3>
              </div>
            </div>

            <div className="mt-6">
              {/* Composição discreta */}
              <div className="text-sm text-slate-500 font-medium mb-1">
                Sprint ENEM {SPRINT_PRICE} + Sprint Redação {REDACAO_PRICE}
              </div>
              {/* Preço principal em destaque */}
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 tracking-tight">
                {BUNDLE_PRICE}
              </div>
            </div>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Para quem quer organizar toda a preparação e também ter um material prático para planejar, escrever e revisar a redação.
            </p>

            <ul className="mt-6 space-y-2.5 flex-1">
              {bundleFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shrink-0">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              id="offer-bundle-cta"
              onClick={() => handleBundleCheckoutClick('offer_bundle_cta_click')}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-base sm:text-lg font-black text-white shadow-xl shadow-slate-900/20 transition-all hover:bg-slate-800 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
            >
              <span>QUERO O PACOTE COMPLETO</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>

        </div>

        {/* Trust note */}
        <div className="mt-8 flex flex-col items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Após a confirmação, você recebe o acesso à plataforma.</span>
          </span>
          <p className="text-xs text-slate-500 text-center">
            Garantia de 7 dias para arrependimento, conforme o Código de Defesa do Consumidor.
          </p>
        </div>

      </div>
    </section>
  );
};
