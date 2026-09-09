import React from 'react';
import { X } from 'lucide-react';
import { PRODUCT_NAME } from '../config';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' && (
          <div className="space-y-4 text-sm text-slate-600">
            <h3 className="text-xl font-bold text-slate-900">Termos de Uso</h3>
            <p>
              O <strong>{PRODUCT_NAME}</strong> é uma plataforma digital de organização, planejamento e prática desenvolvida para auxiliar estudantes na preparação para o Exame Nacional do Ensino Médio (ENEM).
            </p>
            <p>
              1. <strong>Finalidade:</strong> A plataforma fornece ferramentas de gestão de tempo, cronogramas personalizados, simulados, checklist de incidência e oficina de redação. O uso dos recursos é de caráter pessoal e intransferível.
            </p>
            <p>
              2. <strong>Isenção de Garantia:</strong> A plataforma é um recurso de auxílio metodológico. O desempenho em qualquer exame oficial depende exclusivamente do empenho individual, assimilação do conteúdo e fatores alheios ao controle da plataforma.
            </p>
            <p>
              3. <strong>Independência:</strong> O {PRODUCT_NAME} é uma iniciativa independente e não possui filiação, parceria, patrocínio ou endosso por parte do INEP, MEC ou órgãos governamentais.
            </p>
            <p>
              4. <strong>Direito de Arrependimento:</strong> O consumidor tem direito ao arrependimento no prazo de 7 (sete) dias corridos a partir da confirmação da compra, conforme o artigo 49 do Código de Defesa do Consumidor, quando a aquisição for feita por meio digital e o produto não tenha sido utilizado de forma que inviabilize a restituição.
            </p>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4 text-sm text-slate-600">
            <h3 className="text-xl font-bold text-slate-900">Política de Privacidade</h3>
            <p>
              A privacidade e a proteção dos seus dados são fundamentais para o <strong>{PRODUCT_NAME}</strong>.
            </p>
            <p>
              1. <strong>Coleta de Informações:</strong> Coletamos apenas as informações estritamente necessárias para a personalização da sua rotina de estudos (curso desejado, disponibilidade de horas diárias, dias de estudo e áreas de maior dificuldade) e dados de identificação fornecidos na compra para liberação do acesso.
            </p>
            <p>
              2. <strong>Uso dos Dados:</strong> Os dados fornecidos são utilizados unicamente para gerar o cronograma adaptativo e permitir a operação segura da sua conta. Não compartilhamos, vendemos ou repassamos seus dados a terceiros para fins comerciais.
            </p>
            <p>
              3. <strong>Segurança:</strong> Adotamos padrões modernos de criptografia e proteção da informação para assegurar a integridade dos dados cadastrados.
            </p>
          </div>
        )}

        {type === 'contact' && (
          <div className="space-y-4 text-sm text-slate-600">
            <h3 className="text-xl font-bold text-slate-900">Atendimento e Contato</h3>
            <p>
              Dúvidas sobre o funcionamento ou acesso ao <strong>{PRODUCT_NAME}</strong>? Nossa equipe está à disposição para ajudar.
            </p>
            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-100/70 space-y-2">
              <p className="font-semibold text-slate-800">Canal Oficial de Suporte:</p>
              <p className="text-purple-700 font-mono text-sm font-semibold">suporte@sprintenem.com.br</p>
              <p className="text-xs text-slate-500">Horário de atendimento: Segunda a sexta-feira, em horário comercial.</p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
