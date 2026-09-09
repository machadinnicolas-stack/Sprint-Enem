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
    question: 'Estou começando atrasado. O Sprint serve para mim?',
    answer: 'O Sprint foi pensado para ajudar na organização e priorização dos estudos de acordo com a realidade informada pelo estudante. Ele pode ser usado tanto por quem já estuda quanto por quem precisa organizar melhor sua preparação.',
  },
  {
    id: 2,
    question: 'Trabalho e tenho pouco tempo. Consigo usar?',
    answer: 'Sim. O planejamento considera informações como dias e tempo disponível, permitindo organizar a rotina de acordo com a disponibilidade informada.',
  },
  {
    id: 3,
    question: 'O Sprint garante que eu vou passar?',
    answer: 'Não. O Sprint ENEM é uma ferramenta de organização e prática. O resultado depende da dedicação, rotina e desempenho de cada estudante, e não existe garantia de aprovação ou nota específica.',
  },
  {
    id: 4,
    question: 'O que encontro dentro da plataforma?',
    answer: 'Você encontra cronograma personalizado, simulados TRI, Raio-X de incidência, Oficina de Redação, Modo Foco e recursos de acompanhamento de progresso e gamificação.',
  },
  {
    id: 5,
    question: 'Como recebo acesso?',
    answer: 'Após a confirmação da compra, você recebe o endereço para acessar a plataforma e pode personalizar seu plano.',
  },
  {
    id: 6,
    question: 'Quanto custa?',
    answer: 'Você pode entrar pelo Sprint ENEM por R$ 12,99 ou escolher o combo Sprint ENEM + Sprint Redação por R$ 22,98.',
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
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-200/70 px-3 py-1 rounded-full">
            Dúvidas frequentes
          </span>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
            Perguntas e respostas objetivas
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Respostas diretas sobre o funcionamento e o propósito do Sprint ENEM.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-purple-50 text-purple-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
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
