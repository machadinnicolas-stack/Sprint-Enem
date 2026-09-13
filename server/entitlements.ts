// Extensão .js obrigatória: package.json declara "type": "module", então as
// funções da Vercel rodam como ESM, e o resolvedor ESM do Node não completa
// extensões. Sem isso o import quebra em produção (ERR_MODULE_NOT_FOUND),
// mesmo funcionando localmente sob tsx.
import { supabaseAdmin } from './supabaseServer.js';

export const NO_ACCESS_MESSAGE =
  'Não encontramos uma compra ativa para este e-mail. Se você já comprou, use o mesmo e-mail do pagamento.';

// A Perfect Pay pode devolver o e-mail com espaços ou capitalização diferente da
// que o aluno digita no cadastro; a tabela guarda tudo em minúsculas e o check
// constraint no schema garante que ninguém insira fora desse formato.
export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export async function hasActiveEntitlement(email: string | undefined): Promise<boolean> {
  if (!email) return false;

  if (!supabaseAdmin) {
    console.error('SUPABASE_SECRET_KEY is not set — cannot verify purchase, denying access.');
    return false;
  }

  const { data, error } = await supabaseAdmin
    .from('entitlements')
    .select('status')
    .eq('email', normalizeEmail(email))
    .maybeSingle();

  if (error) {
    console.error('Failed to read entitlement:', error);
    return false;
  }

  return data?.status === 'active';
}

export interface GrantInput {
  email: string;
  source: string;
  product?: string;
  externalId?: string;
}

// Idempotente: a Perfect Pay reenvia o postback em caso de timeout, e reprocessar
// a mesma venda não pode gerar estado diferente.
export async function grantEntitlement({ email, source, product, externalId }: GrantInput): Promise<boolean> {
  if (!supabaseAdmin) {
    console.error('SUPABASE_SECRET_KEY is not set — cannot grant access.');
    return false;
  }

  const { error } = await supabaseAdmin.from('entitlements').upsert(
    {
      email: normalizeEmail(email),
      status: 'active',
      source,
      product: product ?? null,
      external_id: externalId ?? null,
      granted_at: new Date().toISOString(),
      revoked_at: null,
    },
    { onConflict: 'email' }
  );

  if (error) {
    console.error('Failed to grant entitlement:', error);
    return false;
  }

  return true;
}

// Usado em estorno e chargeback. Mantém a linha para preservar o histórico da
// compra em vez de apagá-la.
export async function revokeEntitlement(email: string): Promise<boolean> {
  if (!supabaseAdmin) {
    console.error('SUPABASE_SECRET_KEY is not set — cannot revoke access.');
    return false;
  }

  const { error } = await supabaseAdmin
    .from('entitlements')
    .update({ status: 'revoked', revoked_at: new Date().toISOString() })
    .eq('email', normalizeEmail(email));

  if (error) {
    console.error('Failed to revoke entitlement:', error);
    return false;
  }

  return true;
}
