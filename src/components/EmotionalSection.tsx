import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';
import { PRICE, handleCheckoutClick } from '../config';

export const EmotionalSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white p-8 sm:p-14 border border-slate-800 shadow-xl relative overflow-hidden text-center">
          
          {/* Subtle Ambient Light */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/25 rounded-full blur-3xl -z-0"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-purple-950 border border-purple-600/60 flex items-center justify-center text-purple-300 mx-auto mb-6 shadow-xs">
              <Compass className="w-6 h-6" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Talvez a faculdade e o diploma estejam nos seus planos há mais tempo do que você gostaria.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              Trabalho, rotina, cansaço e falta de organização podem fazer o ENEM ser adiado várias vezes. Você não consegue mudar o tempo que passou — mas pode organizar melhor o próximo estudo e se aproximar do sonho de entrar na faculdade e se formar.
            </p>

            <p className="mt-6 text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300">
              Comece pelo próximo passo.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="emotional-cta-btn"
                onClick={() => handleCheckoutClick('mid_page_cta_click')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-5 text-lg sm:text-xl font-black text-slate-950 bg-white hover:bg-slate-100 active:scale-[0.98] rounded-2xl shadow-2xl animate-pulse-cta transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-400 cursor-pointer"
              >
                <span>COMEÇAR MEU SPRINT</span>
                <ArrowRight className="w-6 h-6 stroke-[2.5] text-purple-600" />
              </button>

              <div className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-purple-950/90 text-white border-2 border-purple-500/60 shadow-lg">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-purple-200">Por apenas</span>
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 text-2xl sm:text-3xl animate-pulse-price tracking-tight">{PRICE}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
