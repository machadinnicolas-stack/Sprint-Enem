import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRICE, BUNDLE_PRICE, handleCheckoutClick, handleBundleCheckoutClick } from '../config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-center border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.2] text-balance">
          O ENEM está chegando.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 mt-1">
            Pare de perder tempo decidindo o que estudar.
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
          Organize sua preparação e comece hoje.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            id="final-sprint-cta"
            onClick={() => handleCheckoutClick('final_cta_sprint_click')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-black text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.98] rounded-2xl shadow-lg shadow-purple-500/25 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
          >
            <span>Sprint ENEM — {PRICE}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            id="final-bundle-cta"
            onClick={() => handleBundleCheckoutClick('final_cta_bundle_click')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm sm:text-base font-black text-white bg-slate-950 hover:bg-slate-800 active:scale-[0.98] rounded-2xl shadow-lg shadow-slate-900/20 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
          >
            <span>Sprint ENEM + Sprint Redação — {BUNDLE_PRICE}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
