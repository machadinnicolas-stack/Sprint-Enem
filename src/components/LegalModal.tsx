import React, { useEffect } from 'react';
import { LegalDocument } from '../data/legalContent';

interface LegalModalProps {
  document: LegalDocument;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ document: doc, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={doc.title}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full sm:max-w-2xl max-h-[88vh] rounded-t-3xl sm:rounded-3xl border border-[#d6cce8] shadow-lg flex flex-col"
      >
        <div className="flex items-start justify-between gap-3 p-5 border-b border-[#d6cce8] shrink-0">
          <div>
            <h2 className="text-lg font-extrabold text-[#191c1d]">{doc.title}</h2>
            <p className="text-xs text-[#7b7487] mt-0.5">Última atualização: {doc.updatedAt}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="w-9 h-9 rounded-xl border border-[#d6cce8] text-[#4a4455] hover:border-[#7c3aed] hover:text-[#630ed4] transition-all flex items-center justify-center cursor-pointer shrink-0"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="overflow-y-auto p-5 space-y-5">
          {doc.sections.map((section) => (
            <section key={section.title}>
              <h3 className="text-sm font-bold text-[#191c1d] mb-1.5">{section.title}</h3>
              <div className="space-y-2">
                {section.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-[#4a4455] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
