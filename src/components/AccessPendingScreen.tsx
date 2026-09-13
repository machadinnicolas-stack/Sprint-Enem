import React, { useState } from 'react';
import { AccessState } from '../hooks/useEntitlement';

const SALES_PAGE_URL = 'https://machadinnicolas-stack.github.io/Sprint-Enem/';

interface AccessPendingScreenProps {
  email: string | undefined;
  access: Extract<AccessState, 'none' | 'error'>;
  onRecheck: () => Promise<void> | void;
  onLogout: () => void;
}

export const AccessPendingScreen: React.FC<AccessPendingScreenProps> = ({
  email,
  access,
  onRecheck,
  onLogout
}) => {
  const [isRechecking, setIsRechecking] = useState(false);

  const handleRecheck = async () => {
    setIsRechecking(true);
    try {
      await onRecheck();
    } finally {
      setIsRechecking(false);
    }
  };

  const isError = access === 'error';

  return (
    <div className="min-h-screen bg-[#e9e3f4] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-[#ede0ff] flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-[#7c3aed]">
              {isError ? 'sync_problem' : 'lock'}
            </span>
          </div>
          <h1 className="text-xl font-extrabold text-[#191c1d]">
            {isError ? 'Não conseguimos verificar sua compra' : 'Acesso ainda não liberado'}
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-[#d6cce8] shadow-xs space-y-4">
          {isError ? (
            <p className="text-sm text-[#4a4455] leading-relaxed">
              Houve uma falha ao consultar sua compra. Isso costuma ser temporário — tente novamente em alguns
              instantes.
            </p>
          ) : (
            <>
              <p className="text-sm text-[#4a4455] leading-relaxed">
                Não encontramos uma compra ativa vinculada a este e-mail:
              </p>
              <p className="text-sm font-bold text-[#191c1d] bg-[#f5f0ff] border border-[#d6cce8] rounded-xl px-3 py-2.5 break-all">
                {email ?? '—'}
              </p>
              <p className="text-sm text-[#4a4455] leading-relaxed">
                Se você já comprou, verifique se este é o mesmo e-mail que usou no pagamento. Sendo outro, saia e
                entre novamente com o e-mail da compra. A liberação também pode levar alguns minutos após a
                confirmação.
              </p>
            </>
          )}

          <button
            type="button"
            onClick={handleRecheck}
            disabled={isRechecking}
            className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#7c3aed] to-[#c026d3] hover:from-[#6d28d9] hover:to-[#a21caf] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isRechecking ? (
              <>
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Verificando...</span>
              </>
            ) : (
              <span>Já comprei — verificar novamente</span>
            )}
          </button>

          {!isError && (
            <a
              href={SALES_PAGE_URL}
              className="block w-full px-6 py-3 rounded-xl border border-[#7c3aed] text-[#630ed4] font-bold text-sm text-center hover:bg-[#ede0ff] transition-all"
            >
              Ainda não comprei
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={onLogout}
          className="w-full mt-4 text-xs font-semibold text-[#7b7487] hover:text-[#4a4455] transition-colors cursor-pointer"
        >
          Sair e entrar com outro e-mail
        </button>
      </div>
    </div>
  );
};
