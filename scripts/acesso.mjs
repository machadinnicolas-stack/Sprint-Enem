// Libera, revoga ou consulta o acesso de um aluno manualmente.
// Existe para o caso inevitável de alguém pagar com um e-mail e se cadastrar
// com outro — sem isso, a única saída seria editar a tabela na mão no Supabase.
//
//   node scripts/acesso.mjs status  aluno@email.com
//   node scripts/acesso.mjs liberar aluno@email.com
//   node scripts/acesso.mjs revogar aluno@email.com
//
// Lê SUPABASE_SECRET_KEY do .env — nunca rode isto no navegador nem em CI público.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const env = {};
try {
  for (const linha of readFileSync(path.join(raiz, '.env'), 'utf8').split(/\r?\n/)) {
    const m = linha.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/i);
    if (m) env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
} catch {
  console.error('Não consegui ler o .env na raiz do projeto.');
  process.exit(1);
}

const url = env.VITE_SUPABASE_URL;
const secret = env.SUPABASE_SECRET_KEY;
if (!url || !secret) {
  console.error('VITE_SUPABASE_URL e SUPABASE_SECRET_KEY precisam estar no .env.');
  process.exit(1);
}

const [acao, emailBruto] = process.argv.slice(2);
const email = (emailBruto || '').trim().toLowerCase();

if (!['status', 'liberar', 'revogar'].includes(acao) || !email.includes('@')) {
  console.error('Uso: node scripts/acesso.mjs <status|liberar|revogar> <email>');
  process.exit(1);
}

const headers = {
  apikey: secret,
  Authorization: `Bearer ${secret}`,
  'Content-Type': 'application/json',
};

const alvo = `${url}/rest/v1/entitlements?email=eq.${encodeURIComponent(email)}`;

if (acao === 'status') {
  const res = await fetch(`${alvo}&select=*`, { headers });
  const linhas = await res.json();
  if (!Array.isArray(linhas) || linhas.length === 0) {
    console.log(`${email}: SEM ACESSO (nenhum registro)`);
  } else {
    const r = linhas[0];
    console.log(`${email}: ${r.status.toUpperCase()}  origem=${r.source}  produto=${r.product ?? '-'}  desde=${r.granted_at}`);
  }
  process.exit(0);
}

if (acao === 'liberar') {
  const res = await fetch(`${url}/rest/v1/entitlements`, {
    method: 'POST',
    headers: { ...headers, Prefer: 'resolution=merge-duplicates,return=representation' },
    body: JSON.stringify({
      email,
      status: 'active',
      source: 'manual',
      granted_at: new Date().toISOString(),
      revoked_at: null,
    }),
  });
  console.log(res.ok ? `${email}: acesso LIBERADO` : `Falhou (HTTP ${res.status}): ${await res.text()}`);
  process.exit(res.ok ? 0 : 1);
}

const res = await fetch(alvo, {
  method: 'PATCH',
  headers,
  body: JSON.stringify({ status: 'revoked', revoked_at: new Date().toISOString() }),
});
console.log(res.ok ? `${email}: acesso REVOGADO` : `Falhou (HTTP ${res.status}): ${await res.text()}`);
process.exit(res.ok ? 0 : 1);
