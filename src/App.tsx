import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PainSection } from './components/PainSection';
import { HowItWorks } from './components/HowItWorks';
import { DifferenceSection } from './components/DifferenceSection';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { BusyRoutineSection } from './components/BusyRoutineSection';
import { EmotionalSection } from './components/EmotionalSection';
import { Offer } from './components/Offer';
import { FrictionReduction } from './components/FrictionReduction';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModal, setLegalModal] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-indigo-500 selection:text-white pb-14 sm:pb-0">
      {/* Header */}
      <Header />

      {/* Main Landing Sections */}
      <main className="flex-1">
        {/* 1. Hero / Primeira Dobra */}
        <Hero />

        {/* 2. Identificação da Dor */}
        <PainSection />

        {/* 3. Mecanismo / Como Funciona */}
        <HowItWorks />

        {/* 4. Diferencial / Antes vs Depois */}
        <DifferenceSection />

        {/* 5. Funcionalidades Reais */}
        <Features />

        {/* 6. Produto na Prática / Telas da Plataforma */}
        <ProductShowcase />

        {/* 7. Pouco Tempo / Rotinas Reais */}
        <BusyRoutineSection />

        {/* 8. Sonho / Conexão Emocional Madura */}
        <EmotionalSection />

        {/* 9. Oferta Principal */}
        <Offer />

        {/* 10. Redução de Fricção */}
        <FrictionReduction />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Chamada Final */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      {/* Sticky CTA for Mobile viewports past hero */}
      <MobileStickyCTA />

      {/* Terms / Privacy / Contact Modal */}
      <LegalModal
        isOpen={legalModal !== null}
        type={legalModal}
        onClose={() => setLegalModal(null)}
      />
    </div>
  );
}
