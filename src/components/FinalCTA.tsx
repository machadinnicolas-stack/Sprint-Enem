import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRICE, handleCheckoutClick } from '../config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="max-w-3xl mx-auto space-y-5">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.2] text-balance">
            O tempo que passou não volta.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 mt-1">
              Seu próximo estudo ainda está nas suas mãos.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-xl mx-auto leading-relaxed">
            Pare de gastar energia tentando decidir por onde começar. O próximo passo para entrar na faculdade e se formar pode começar hoje.
          </p>

          <div className="pt-4 flex flex-col items-center justify-center gap-4">
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="final-cta-btn"
                onClick={() => handleCheckoutClick('final_cta_click')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 sm:px-12 py-5 sm:py-5 text-lg sm:text-xl font-black text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.98] rounded-2xl shadow-2xl shadow-purple-500/30 animate-pulse-cta transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-300 cursor-pointer"
              >
                <span>COMEÇAR MEU SPRINT</span>
                <ArrowRight className="w-6 h-6 stroke-[2.5]" />
              </button>

              <div className="flex items-center gap-2.5 px-6 py-4 rounded-2xl bg-purple-50 text-slate-800 border-2 border-purple-200 shadow-sm">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-600">Por apenas</span>
                <span className="font-black text-purple-700 text-2xl sm:text-3xl animate-pulse-price tracking-tight">{PRICE}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Acesso imediato à plataforma após a confirmação.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
