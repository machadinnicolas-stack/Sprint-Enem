import { createHash, timingSafeEqual } from 'node:crypto';
import { grantEntitlement, revokeEntitlement } from '../server/entitlements';

// Vercel Serverless Function: POST /api/perfectpay-webhook
//
// Recebe o postback da Perfect Pay e libera (ou revoga) o acesso do comprador.
// Este endpoint é público na internet: sem a checagem de token abaixo, qualquer
// pessoa poderia POSTar o próprio e-mail e liberar acesso de graça.

// Comparação em tempo constante. O hash iguala o tamanho das entradas, o que
// permite comparar segredos de comprimentos diferentes sem vazar o tamanho.
function secretMatches(received: string, expected: string): boolean {
  const a = createHash('sha256').update(received).digest();
  const b = createHash('sha256').update(expected).digest();
  return timingSafeEqual(a, b);
}

// ---------------------------------------------------------------------------
// MAPEAMENTO DO PAYLOAD DA PERFECT PAY
// Confirme os nomes de campo contra a documentação de postback da sua conta e
// ajuste aqui se divergir. Quando o e-mail não é encontrado, o handler responde
// 422 e loga as CHAVES recebidas (nunca os valores, que são dados do cliente),
// o que dá exatamente a informação necessária para corrigir este trecho.
// ---------------------------------------------------------------------------
function extractBuyerEmail(payload: Record<string, any>): string | undefined {
  const candidate = payload?.customer?.email ?? payload?.buyer?.email ?? payload?.email;
  return typeof candidate === 'string' && candidate.includes('@') ? candidate : undefined;
}

function extractStatus(payload: Record<string, any>): string {
  return String(
    payload?.sale_status_detail ?? payload?.sale_status_enum ?? payload?.status ?? ''
  )
    .trim()
    .toLowerCase();
}

function extractProduct(payload: Record<string, any>): string | undefined {
  const name = payload?.product?.name ?? payload?.product_name;
  return typeof name === 'string' ? name : undefined;
}

function extractTransactionId(payload: Record<string, any>): string | undefined {
  const code = payload?.code ?? payload?.transaction ?? payload?.sale_code;
  return code === undefined || code === null ? undefined : String(code);
}

const APPROVED = new Set(['approved', 'aprovado', 'paid', 'pago', 'completed', '2']);
const REVOKED = new Set([
  'refunded',
  'reembolsado',
  'estornado',
  'chargeback',
  'canceled',
  'cancelled',
  'cancelado',
  'expired',
  '5',
  '6',
  '7',
]);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const expectedToken = process.env.PERFECTPAY_WEBHOOK_TOKEN;
  if (!expectedToken) {
    console.error('PERFECTPAY_WEBHOOK_TOKEN is not set — refusing to process postbacks.');
    return res.status(500).json({ error: 'Webhook não configurado.' });
  }

  const payload: Record<string, any> = req.body ?? {};
  const receivedToken = String(payload.token ?? req.headers['x-perfectpay-token'] ?? '');

  if (!secretMatches(receivedToken, expectedToken)) {
    console.warn('Rejected Perfect Pay postback: invalid token.');
    return res.status(401).json({ error: 'Token inválido.' });
  }

  const email = extractBuyerEmail(payload);
  if (!email) {
    // Só os nomes dos campos — o conteúdo é dado pessoal do comprador.
    console.error('Perfect Pay postback without a recognizable email. Payload keys:', Object.keys(payload));
    return res.status(422).json({ error: 'E-mail do comprador não encontrado no payload.' });
  }

  const status = extractStatus(payload);

  if (APPROVED.has(status)) {
    const ok = await grantEntitlement({
      email,
      source: 'perfectpay',
      product: extractProduct(payload),
      externalId: extractTransactionId(payload),
    });
    // 500 faz a Perfect Pay reenviar, que é o que queremos se o banco falhou.
    if (!ok) return res.status(500).json({ error: 'Falha ao registrar o acesso.' });
    return res.status(200).json({ ok: true, action: 'granted' });
  }

  if (REVOKED.has(status)) {
    const ok = await revokeEntitlement(email);
    if (!ok) return res.status(500).json({ error: 'Falha ao revogar o acesso.' });
    return res.status(200).json({ ok: true, action: 'revoked' });
  }

  // Estados intermediários (boleto aguardando pagamento, análise) chegam aqui e
  // não devem liberar nada. 200 para a Perfect Pay parar de reenviar.
  console.info(`Perfect Pay postback ignored — status "${status}" is not actionable.`);
  return res.status(200).json({ ok: true, action: 'ignored', status });
}
