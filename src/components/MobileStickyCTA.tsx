import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PRODUCT_NAME, PRICE, scrollToOffer } from '../config';

export const MobileStickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past the first fold
      if (window.scrollY > 480) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden transition-all duration-300 transform translate-y-0">
      <button
        id="sticky-mobile-cta"
        onClick={() => scrollToOffer('sticky_cta_click')}
        className="w-full bg-slate-950/95 text-white rounded-2xl px-4 py-3.5 shadow-2xl border border-purple-800/60 flex items-center justify-between gap-3 backdrop-blur-md cursor-pointer active:scale-[0.99] transition-transform"
      >
        <span className="text-sm font-bold text-left leading-snug">
          {PRODUCT_NAME} a partir de <span className="text-white animate-pulse-price">{PRICE}</span>
        </span>
        <span className="inline-flex items-center gap-1.5 py-2 px-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 font-black text-xs shrink-0 shadow-lg shadow-purple-600/40">
          COMEÇAR
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </span>
      </button>
    </div>
  );
};
