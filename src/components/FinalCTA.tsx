import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PRICE,
  BUNDLE_PRICE,
  CHECKOUT_URL,
  BUNDLE_CHECKOUT_URL,
  handleCheckoutClick,
} from '../config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-950 text-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug text-balance">
          O ENEM está chegando.{' '}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 mt-1">
            Pare de perder tempo decidindo o que estudar.
          </span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300">
          Organize sua preparação e comece hoje.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-stretch justify-center gap-4">
          <button
            id="final-enem-cta-btn"
            onClick={() => handleCheckoutClick('final_enem_cta_click', CHECKOUT_URL)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white text-slate-950 font-black text-sm sm:text-base shadow-xl transition-all hover:bg-slate-100 active:scale-[0.98] cursor-pointer"
          >
            <span>Sprint ENEM — {PRICE}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>

          <button
            id="final-bundle-cta-btn"
            onClick={() => handleCheckoutClick('final_bundle_cta_click', BUNDLE_CHECKOUT_URL)}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-black text-sm sm:text-base shadow-xl shadow-purple-900/40 transition-all hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 active:scale-[0.98] cursor-pointer"
          >
            <span>Sprint ENEM + Sprint Redação — {BUNDLE_PRICE}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
