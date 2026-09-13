// Confere os gabaritos do banco de questões recalculando cada resultado de forma
// independente do que está gravado em correctLetter, e comparando com o texto da
// alternativa marcada como correta.
//
//   npx tsx scripts/confere-gabaritos.mts
//
// A conferência é deliberadamente redundante: se o gabarito e este script
// discordarem, um dos dois está errado e a questão não deve ir para o ar.

import { MATEMATICA_QUESTIONS } from '../src/data/questions/matematica.js';

type Esperado = number | { texto: string };

const C = (n: number, k: number): number => {
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
};

const mediana = (v: number[]): number => {
  const s = [...v].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

const media = (v: number[]): number => v.reduce((a, b) => a + b, 0) / v.length;

const moda = (v: number[]): number => {
  const c = new Map<number, number>();
  v.forEach((x) => c.set(x, (c.get(x) ?? 0) + 1));
  return [...c.entries()].sort((a, b) => b[1] - a[1])[0][0];
};

// Cada função recalcula a resposta a partir do enunciado, sem olhar o gabarito.
const CALCULOS: Record<string, () => Esperado> = {
  'mat-01': () => 180 * 0.75 * 1.2,
  'mat-02': () => 2400 * 1.08 * 0.91,
  'mat-03': () => 1200 - 1200 * 0.85,
  'mat-04': () => 5000 * Math.pow(1.1, 3),
  'mat-05': () => 800 * 0.02 * 5,
  'mat-06': () => ((50 - 40) / 40) * 100,
  'mat-07': () => ({ texto: '9% menor' }),
  'mat-08': () => (300 * 10) / 4,
  'mat-09': () => (8 * 25000) / 100000,
  'mat-10': () => 1200 * (8 / 5) * (6 / 4),
  'mat-11': () => (3 / 5) * 45,
  'mat-12': () => (80 * 3) / 60,
  'mat-13': () => media([5, 6, 7, 8, 9]),
  'mat-14': () => mediana([12, 15, 18, 20, 22, 25, 30]),
  'mat-15': () => (6 * 2 + 8 * 3) / (2 + 3),
  'mat-16': () => (9 * 7 - 5) / 8,
  'mat-17': () => moda([2, 3, 3, 4, 5, 5, 5, 6]),
  'mat-18': () => ({ texto: 'Abril' }),
  'mat-19': () => media([10, 12, 15, 18, 20, 25, 40]) - mediana([10, 12, 15, 18, 20, 25, 40]),
  'mat-20': () => 12 * 8,
  'mat-21': () => Math.sqrt(5 ** 2 - 3 ** 2),
  'mat-22': () => 3.14 * 10 ** 2,
  'mat-23': () => 30 * 20 - 3 * 5 ** 2,
  'mat-24': () => 6 * (1.8 / 2),
  'mat-25': () => 4 * Math.sqrt(49),
  'mat-26': () => 4 * 3 * 2,
  'mat-27': () => 3 * 2 ** 2 * 5 * 1000,
  'mat-28': () => 10 * 5 * 1.5 * 1000 * 0.8,
  'mat-29': () => 6 * 6 ** 2,
  'mat-30': () => (3 * 1 ** 2 * 4) / 2,
  'mat-31': () => 30 + 0.5 * 80,
  'mat-32': () => -5 * 2 ** 2 + 20 * 2,
  'mat-33': () => 20 / 5,
  'mat-34': () => 500 * Math.pow(2, 12 / 3),
  'mat-35': () => 12 - ((20 - 12) / (8 - 4)) * 4,
  'mat-36': () => 60 / (3 - 1.5) + 1,
  'mat-37': () => 2 / 6,
  'mat-38': () => 13 / 52,
  'mat-39': () => 6 / 36,
  'mat-40': () => ((3 + 2) / 10) * 100,
  'mat-41': () => 10 * 9 * 8,
  'mat-42': () => C(7, 3),
  'mat-43': () => 4 * 5 * 3,
  'mat-44': () => 1500 / 25,
  'mat-45': () => (540 / 12) * 5.8,
  'mat-46': () => 900 / 15 / 60,
  'mat-47': () => 5 + 19 * 3,
  'mat-48': () => ((3 + (3 + 7 * 0.5)) * 8) / 2
};

// Converte "R$ 6.655,00", "2 880 peças", "5,4 m" e "1/3" em número.
function paraNumero(texto: string): number | null {
  const limpo = texto.replace(/R\$|\s|[a-zA-Zçãáéíóúâêô²³%]+\.?/g, '');
  if (limpo.includes('/')) {
    const [a, b] = limpo.split('/').map(Number);
    if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) return a / b;
    return null;
  }
  const normalizado = limpo.replace(/\.(?=\d{3}\b)/g, '').replace(',', '.');
  const n = Number(normalizado);
  return Number.isFinite(n) ? n : null;
}

let falhas = 0;
let semCalculo = 0;

console.log(`Conferindo ${MATEMATICA_QUESTIONS.length} questões de Matemática\n`);

for (const q of MATEMATICA_QUESTIONS) {
  const alternativa = q.options.find((o) => o.letter === q.correctLetter);

  if (!alternativa) {
    console.log(`  ${q.id}  FALHA: correctLetter "${q.correctLetter}" não existe nas alternativas`);
    falhas++;
    continue;
  }

  if (q.options.length !== 5) {
    console.log(`  ${q.id}  FALHA: ${q.options.length} alternativas (esperado 5)`);
    falhas++;
    continue;
  }

  const calc = CALCULOS[q.id];
  if (!calc) {
    console.log(`  ${q.id}  SEM CÁLCULO independente cadastrado`);
    semCalculo++;
    continue;
  }

  const esperado = calc();

  if (typeof esperado === 'object') {
    if (alternativa.text.toLowerCase().includes(esperado.texto.toLowerCase())) continue;
    console.log(`  ${q.id}  FALHA: esperava "${esperado.texto}", gabarito ${q.correctLetter} diz "${alternativa.text}"`);
    falhas++;
    continue;
  }

  const obtido = paraNumero(alternativa.text);
  if (obtido === null) {
    console.log(`  ${q.id}  FALHA: não consegui ler número em "${alternativa.text}"`);
    falhas++;
    continue;
  }

  if (Math.abs(obtido - esperado) > Math.max(0.01, Math.abs(esperado) * 0.001)) {
    console.log(
      `  ${q.id}  FALHA: cálculo dá ${esperado}, mas o gabarito ${q.correctLetter} diz "${alternativa.text}" (${obtido})`
    );
    falhas++;
  }
}

// Duplicatas de conceito passariam despercebidas na leitura.
const topicos = new Map<string, string[]>();
MATEMATICA_QUESTIONS.forEach((q) => {
  const k = q.topic.split('—')[0].trim().toLowerCase();
  topicos.set(k, [...(topicos.get(k) ?? []), q.id]);
});

console.log('\nDistribuição por tópico:');
[...topicos.entries()].sort().forEach(([t, ids]) => console.log(`  ${String(ids.length).padStart(2)}x  ${t}`));

const dif = new Map<string, number>();
MATEMATICA_QUESTIONS.forEach((q) => dif.set(q.difficulty, (dif.get(q.difficulty) ?? 0) + 1));
console.log('\nDificuldade: ' + [...dif.entries()].map(([d, n]) => `${d} ${n}`).join(' | '));

const letras = new Map<string, number>();
MATEMATICA_QUESTIONS.forEach((q) => letras.set(q.correctLetter, (letras.get(q.correctLetter) ?? 0) + 1));
console.log('Gabaritos: ' + [...letras.entries()].sort().map(([l, n]) => `${l}=${n}`).join(' '));

const ids = MATEMATICA_QUESTIONS.map((q) => q.id);
const repetidos = ids.filter((id, i) => ids.indexOf(id) !== i);
if (repetidos.length) console.log('\nIDs DUPLICADOS: ' + repetidos.join(', '));

console.log(
  `\n${falhas === 0 && semCalculo === 0 ? 'TODOS OS GABARITOS CONFEREM' : `${falhas} falha(s), ${semCalculo} sem cálculo`}`
);

process.exit(falhas === 0 && semCalculo === 0 ? 0 : 1);
