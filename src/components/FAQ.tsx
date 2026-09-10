import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackEvent } from '../config';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'O Sprint ENEM é um curso?',
    answer: 'Não. O Sprint ENEM é uma plataforma digital de organização e prática para ajudar você a estruturar sua preparação para o ENEM.',
  },
  {
    id: 2,
    question: 'Como recebo o acesso?',
    answer: 'Após a confirmação da compra, você recebe as instruções para acessar a plataforma.',
  },
  {
    id: 3,
    question: 'Serve para quem está atrasado nos estudos?',
    answer: 'Sim. A proposta é ajudar você a organizar o tempo disponível e definir prioridades, independentemente de quando começou a estudar.',
  },
  {
    id: 4,
    question: 'Qual a diferença entre as duas opções?',
    answer: 'O Sprint ENEM por R$12,99 dá acesso à plataforma. No pacote de R$22,98 você recebe o Sprint ENEM e também o Sprint Redação, material complementar para planejamento, escrita e revisão.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    const nextState = openId === id ? null : id;
    setOpenId(nextState);
    if (nextState !== null) {
      trackEvent('faq_open', { questionId: id, question: faqData.find(q => q.id === id)?.question });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Dúvidas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-100/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-purple-50 text-purple-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/70 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
