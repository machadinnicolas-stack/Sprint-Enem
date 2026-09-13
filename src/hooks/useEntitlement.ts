import { useCallback, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../services/supabase';

// 'error' é separado de 'none' de propósito: uma falha de rede não deve dizer a
// quem pagou que a compra não existe. Nenhum dos dois libera o app — a checagem
// que de fato protege o custo de IA é a do servidor, esta aqui é a da interface.
export type AccessState = 'checking' | 'active' | 'none' | 'error';

export function useEntitlement(user: User | null) {
  const [access, setAccess] = useState<AccessState>('checking');

  const check = useCallback(async () => {
    if (!user?.email) {
      setAccess('none');
      return;
    }

    setAccess('checking');

    const { data, error } = await supabase
      .from('entitlements')
      .select('status')
      .eq('email', user.email.toLowerCase())
      .maybeSingle();

    if (error) {
      setAccess('error');
      return;
    }

    setAccess(data?.status === 'active' ? 'active' : 'none');
  }, [user]);

  useEffect(() => {
    if (!user) {
      setAccess('checking');
      return;
    }
    check();
  }, [user, check]);

  return { access, recheck: check };
}
