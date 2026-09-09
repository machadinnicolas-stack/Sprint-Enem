import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_NAME, scrollToOffer, trackEvent } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

export const Header: React.FC = () => {
  const handleHeaderCTA = () => {
    trackEvent('header_cta_click');
    scrollToOffer();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#topo"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded-lg p-1"
          aria-label="Sprint ENEM - Página Inicial"
        >
          <SprintEnemLogo size="sm" />
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 tracking-tight text-lg leading-none group-hover:text-purple-700 transition-colors">
              {PRODUCT_NAME}
            </span>
            <span className="text-[11px] font-semibold text-purple-700 tracking-wide mt-0.5">
              Plataforma Digital
            </span>
          </div>
        </a>

        {/* CTA */}
        <button
          id="header-cta-btn"
          onClick={handleHeaderCTA}
          className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-black text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 active:scale-[0.98] rounded-xl shadow-lg shadow-purple-500/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 cursor-pointer"
        >
          <span>VER PLANOS</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
        </button>
      </div>
    </header>
  );
};
