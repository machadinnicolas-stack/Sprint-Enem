import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { ProductShowcase } from './components/ProductShowcase';
import { HowItWorks } from './components/HowItWorks';
import { Offer } from './components/Offer';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-500 selection:text-white pb-14 sm:pb-0">
      <Header />

      <main className="flex-1">
        {/* Seção 1: Hero */}
        <Hero />
        {/* Seção 2: Dor */}
        <PainSection />
        {/* Seção 3: Produto / Solução */}
        <ProductShowcase />
        {/* Seção 4: Como Funciona */}
        <HowItWorks />
        {/* Seção 5: Ofertas */}
        <Offer />
        {/* Seção 6: FAQ + CTA Final */}
        <FAQ />
        <FinalCTA />
      </main>

      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      <MobileStickyCTA />

      <LegalModal
        isOpen={legalModal !== null}
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
