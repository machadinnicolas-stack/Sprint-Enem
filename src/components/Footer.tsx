import React from 'react';
import { PRODUCT_NAME } from '../config';
import { SprintEnemLogo } from './SprintEnemLogo';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">

          {/* Brand */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <SprintEnemLogo size="md" />
            <div>
              <span className="font-extrabold text-white text-base tracking-tight">
                {PRODUCT_NAME}
              </span>
              <p className="text-xs text-slate-400">
                Plataforma digital de organização e prática para o ENEM.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => onOpenLegal('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contato
            </button>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-8 space-y-4 text-center sm:text-left">
          <p className="text-xs text-slate-400 leading-relaxed max-w-3xl">
            O {PRODUCT_NAME} é uma ferramenta educacional de organização e prática. O desempenho de cada estudante depende de diversos fatores individuais e não há garantia de aprovação ou nota específica. Esta plataforma não possui relação institucional com o INEP, MEC ou qualquer entidade governamental.
          </p>

          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} {PRODUCT_NAME}. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
