import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRICE, scrollToOffer, trackEvent } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 480);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    trackEvent('sticky_cta_click');
    scrollToOffer();
  };

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden transition-all duration-300">
      <div className="bg-slate-950/95 text-white rounded-2xl p-3 shadow-2xl border border-purple-800/60 flex items-center justify-between gap-3 backdrop-blur-md">
        <div className="flex items-center gap-2 pl-1">
          <SprintEnemLogo size="sm" />
          <div className="flex flex-col">
            <span className="text-[10px] text-purple-300 font-bold leading-none uppercase tracking-wider">Sprint ENEM a partir de</span>
            <span className="text-base font-black text-white leading-tight mt-0.5 animate-pulse-price">{PRICE}</span>
          </div>
        </div>

        <button
          id="sticky-mobile-cta"
          onClick={handleClick}
          className="flex-1 max-w-[160px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-700 hover:via-purple-700 hover:to-fuchsia-700 text-white font-black text-sm shadow-lg shadow-purple-600/40 animate-pulse-cta transition-all active:scale-[0.98] cursor-pointer"
        >
          <span>COMEÇAR</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
