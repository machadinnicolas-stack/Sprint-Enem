// Confere os gabaritos do banco de questões recalculando cada resultado de forma
// independente do que está gravado em correctLetter, e comparando com o texto da
// alternativa marcada como correta.
//
//   npm run confere-questoes
//
// A redundância é deliberada: se o gabarito e este script discordarem, um dos
// dois está errado e a questão não deve ir para o ar. Questões conceituais, que
// não têm resultado calculável, são conferidas por um trecho esperado do texto.

import { ExamQuestion } from '../src/types.js';
import { MATEMATICA_QUESTIONS } from '../src/data/questions/matematica.js';
import { NATUREZA_QUESTIONS } from '../src/data/questions/natureza.js';
import { HUMANAS_QUESTIONS } from '../src/data/questions/humanas.js';
import { LINGUAGENS_QUESTIONS } from '../src/data/questions/linguagens.js';

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

const t = (texto: string): Esperado => ({ texto });

// Cada função recalcula a resposta a partir do enunciado, sem olhar o gabarito.
const CALCULOS: Record<string, () => Esperado> = {
  // ---- Matemática
  'mat-01': () => 180 * 0.75 * 1.2,
  'mat-02': () => 2400 * 1.08 * 0.91,
  'mat-03': () => 1200 - 1200 * 0.85,
  'mat-04': () => 5000 * Math.pow(1.1, 3),
  'mat-05': () => 800 * 0.02 * 5,
  'mat-06': () => ((50 - 40) / 40) * 100,
  'mat-07': () => t('9% menor'),
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
  'mat-18': () => t('Abril'),
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
  'mat-48': () => ((3 + (3 + 7 * 0.5)) * 8) / 2,

  // ---- Matemática: Lote 2
  'mat-49': () => 180 * 1.15,
  'mat-50': () => ((900 - 720) / 900) * 100,
  'mat-51': () => 4000 * Math.pow(1.05, 2),
  'mat-52': () => (6 + 7 + 9 + 10) / 4,
  'mat-53': () => mediana([22, 25, 19, 31, 28, 24]),
  'mat-54': () => moda([4, 5, 5, 5, 6, 8, 9, 9, 10, 10]),
  'mat-55': () => 20 - 6,
  'mat-56': () => Math.sqrt(13 ** 2 - 5 ** 2),
  'mat-57': () => ((30 + 20) / 2) * 10,
  'mat-58': () => 5 + 3 * 15,
  'mat-59': () => -12 / (2 * -1),
  'mat-60': () => 50000 * Math.pow(0.9, 2),
  'mat-61': () => 3 * (175 / 50),
  'mat-62': () => 1 / (1 / 6 + 1 / 6),
  'mat-63': () => 300 / 20,
  'mat-64': () => 30 * 20 * 12,
  'mat-65': () => (1 / 3) * 3 * 9 * 4,
  'mat-66': () => (3 / 4) * 100,
  'mat-67': () => (3 / 5) * (2 / 4) * 100,
  'mat-68': () => 4 * 3 * 2 * 1,
  'mat-69': () => C(6, 2),
  'mat-70': () => 90 / 0.75,
  'mat-71': () => ((4 + (4 + 9 * 5)) * 10) / 2,
  'mat-72': () => 3 * Math.pow(2, 4),

  // ---- Natureza: Biologia
  'nat-01': () => 10000 * 0.1 * 0.1,
  'nat-02': () => t('aves piscívoras'),
  'nat-03': () => t('Fotossíntese'),
  'nat-04': () => t('Mutualismo'),
  'nat-05': () => t('consome o oxigênio dissolvido'),
  'nat-06': () => (1 / 4) * (1 / 4),
  'nat-07': () => t('A, B, AB ou O'),
  'nat-08': () => t('Uracila'),
  'nat-09': () => t('Mitocôndria'),
  'nat-10': () => t('plasmólise'),
  'nat-11': () => 6,
  'nat-12': () => t('produzir seus próprios anticorpos'),
  'nat-13': () => t('Artéria pulmonar'),
  'nat-14': () => t('Aedes aegypti'),
  'nat-15': () => t('já existiam variantes resistentes'),
  'nat-16': () => t('Lamarckismo'),

  // ---- Natureza: Física
  'nat-17': () => 240 / 3,
  'nat-18': () => 20 ** 2 / (2 * 4),
  'nat-19': () => 20 / 5,
  'nat-20': () => 2 * 10 * 10,
  'nat-21': () => Math.sqrt(2 * 10 * 20),
  'nat-22': () => (5500 / 1000) * 0.5 * 30,
  'nat-23': () => 12 / 4,
  'nat-24': () => t('3,3'),
  'nat-25': () => (60 / 1000) * 5 * 30 * 0.75,
  'nat-26': () => 500 * 1 * (75 - 25),
  'nat-27': () => t('romper as ligações'),
  'nat-28': () => (300 / 1000) * 100,
  'nat-29': () => 1.7 * 200,
  'nat-30': () => t('Raios gama'),
  'nat-31': () => t('refração'),
  'nat-32': () => t('Virtual, direita e maior'),

  // ---- Natureza: Química
  'nat-33': () => 90 / 18,
  'nat-34': () => 2 * 3,
  'nat-35': () => 44,
  'nat-36': () => 20 / 0.5,
  'nat-37': () => (0.5 * 0.2) / 1,
  'nat-38': () => 0.5 / 2,
  'nat-39': () => t('Ácido carboxílico'),
  'nat-40': () => t('Isomeria de cadeia'),
  'nat-41': () => t('adição'),
  'nat-42': () => t('a cana absorveu'),
  'nat-43': () => t('pH 5'),
  'nat-44': () => t('sal (NaCl) e água'),
  'nat-45': () => t('sofre oxidação, perde massa'),
  'nat-46': () => t('se oxida preferencialmente'),
  'nat-47': () => 2 * 890,
  'nat-48': () => t('enxofre'),

  // ---- Natureza: Lote 2 (Biologia)
  'nat-49': () => t('Sucessão ecológica secundária'),
  'nat-50': () => t('menor que a base'),
  'nat-51': () => (1 / 2) * 100,
  'nat-52': () => t('Transporte ativo'),
  'nat-53': () => t('liberação de neurotransmissores'),
  'nat-54': () => t('Proteínas'),
  'nat-55': () => t('Especiação alopátrica'),
  'nat-56': () => t('não possuem estrutura celular'),

  // ---- Natureza: Lote 2 (Física)
  'nat-57': () => 8 * 10,
  'nat-58': () => 3000 / 5,
  'nat-59': () => 20 / (4 + 6 + 10),
  'nat-60': () => t('um quarto de F'),
  'nat-61': () => (0.004 / 2) * 100,
  'nat-62': () => (340 * 2) / 2,
  'nat-63': () => t('real, invertida e menor'),
  'nat-64': () => 80 / Math.pow(2, 30 / 10),

  // ---- Natureza: Lote 2 (Química)
  'nat-65': () => 1,
  'nat-66': () => t('menor raio atômico e maior eletronegatividade'),
  'nat-67': () => t('Ligação iônica'),
  'nat-68': () => t('H₂ é limitante; formam-se 2 mols'),
  'nat-69': () => t('diminui a energia cinética'),
  'nat-70': () => t('sentido inverso'),
  'nat-71': () => t('Esterificação'),
  'nat-72': () => (2 * 4) / 2,

  // ---- Humanas: História
  'hum-01': () => t('construindo comunidades autônomas'),
  'hum-02': () => t('monocultura'),
  'hum-03': () => t('manteve-se a monarquia'),
  'hum-04': () => t('marginalização socioeconômica'),
  'hum-05': () => t('cabresto'),
  'hum-06': () => t('caráter autoritário da campanha'),
  'hum-07': () => t('controle estatal sobre os trabalhadores'),
  'hum-08': () => t('silenciava a crítica'),
  'hum-09': () => t('fechar o Congresso'),
  'hum-10': () => t('força da mobilização popular'),
  'hum-11': () => t('classe operária urbana'),
  'hum-12': () => t('sociedade estamental'),
  'hum-13': () => t('corrida armamentista'),
  'hum-14': () => t('partido único'),

  // ---- Humanas: Geografia
  'hum-15': () => t('Êxodo rural'),
  'hum-16': () => t('Segregação socioespacial'),
  'hum-17': () => t('Conurbação'),
  'hum-18': () => t('Revolução Verde'),
  'hum-19': () => t('concentração fundiária'),
  'hum-20': () => t('Cerrado'),
  'hum-21': () => t('Inversão térmica'),
  'hum-22': () => t('envelhecimento da população'),
  'hum-23': () => t('altas taxas de natalidade'),
  'hum-24': () => t('Divisão internacional do trabalho'),
  'hum-25': () => t('reduzir barreiras comerciais'),
  'hum-26': () => t('fontes renováveis'),
  'hum-27': () => t('distribuição desigual'),
  'hum-28': () => (6 * 50000) / 100000,

  // ---- Humanas: Filosofia
  'hum-29': () => t('Maiêutica'),
  'hum-30': () => t('mundo inteligível'),
  'hum-31': () => t('justo meio'),
  'hum-32': () => t('poder soberano'),
  'hum-33': () => t('vontade geral'),
  'hum-34': () => t('dever e na intenção'),
  'hum-35': () => t('crítica ao absolutismo'),
  'hum-36': () => t('construções históricas'),
  'hum-37': () => t('padronizar os produtos culturais'),
  'hum-38': () => t('pessoas comuns'),

  // ---- Humanas: Sociologia
  'hum-39': () => t('Fato social'),
  'hum-40': () => t('jaula de ferro'),
  'hum-41': () => t('Mais-valia'),
  'hum-42': () => t('Etnocentrismo'),
  'hum-43': () => t('relativismo cultural'),
  'hum-44': () => t('tarefas repetitivas e fragmentadas'),
  'hum-45': () => t('just in time'),
  'hum-46': () => t('ampliação de direitos'),
  'hum-47': () => t('reproduzir entre gerações'),
  'hum-48': () => t('fluidez e à fragilidade'),

  // ---- Humanas: Lote 2 (História)
  'hum-49': () => t('acúmulo de metais preciosos'),
  'hum-50': () => t('estatização dos meios de produção'),
  'hum-51': () => t('política de Estado, planejada'),
  'hum-52': () => t('enfraquecimento econômico e militar'),
  'hum-53': () => t('concentração de renda'),
  'hum-54': () => t('derrama'),
  'hum-55': () => t('café com leite'),

  // ---- Humanas: Lote 2 (Geografia)
  'hum-56': () => t('intensificação dos fluxos'),
  'hum-57': () => t('12h'),
  'hum-58': () => t('pecuária extensiva'),
  'hum-59': () => t('administrativa e de planejamento'),
  'hum-60': () => t('maior participação do Estado'),
  'hum-61': () => t('Rede urbana e hierarquia urbana'),
  'hum-62': () => t('Semiárido'),

  // ---- Humanas: Lote 2 (Filosofia)
  'hum-63': () => t('certeza do próprio pensamento'),
  'hum-64': () => t('primeiro existe'),
  'hum-65': () => t('tábula rasa'),
  'hum-66': () => t('construções culturais'),
  'hum-67': () => t('resultados práticos'),

  // ---- Humanas: Lote 2 (Sociologia)
  'hum-68': () => t('Racional-legal'),
  'hum-69': () => t('substituição de postos de trabalho'),
  'hum-70': () => t('Bolha informacional'),
  'hum-71': () => t('acesso à educação, à saúde'),
  'hum-72': () => t('estruturas sociais, econômicas'),

  // ---- Linguagens: Interpretação
  'lin-01': () => t('descompasso entre a exigência legal'),
  'lin-02': () => t('devolução de livros atrasados'),
  'lin-03': () => t('limitações de tempo e de conexão'),
  'lin-04': () => t('cético quanto à continuidade'),
  'lin-05': () => t('acessível ao leitor não especializado'),
  'lin-06': () => t('incoerência de quem prega sacrifício'),
  'lin-07': () => t('procedimentos corretos de instalação'),
  'lin-08': () => t('refutá-la com evidência'),
  'lin-09': () => t('contradição entre o objetivo declarado'),
  'lin-10': () => t('diminui conforme a renda aumenta'),
  'lin-11': () => t('solicito a prorrogação'),
  'lin-12': () => t('já pratica a reciclagem'),

  // ---- Linguagens: Variação linguística
  'lin-13': () => t('regional (diatópica)'),
  'lin-14': () => t('competência comunicativa'),
  'lin-15': () => t('preconceito linguístico'),
  'lin-16': () => t('histórica (diacrônica)'),
  'lin-17': () => t('não coincidem integralmente'),

  // ---- Linguagens: Funções da linguagem
  'lin-18': () => t('conativa'),
  'lin-19': () => t('emotiva'),
  'lin-20': () => t('metalinguística'),
  'lin-21': () => t('fática'),

  // ---- Linguagens: Figuras de linguagem
  'lin-22': () => t('Metáfora'),
  'lin-23': () => t('Metonímia'),
  'lin-24': () => t('Hipérbole'),
  'lin-25': () => t('Antítese'),

  // ---- Linguagens: Literatura
  'lin-26': () => t('nacionalismo ufanista'),
  'lin-27': () => t('ironia e a liberdade'),
  'lin-28': () => t('Parnasianismo'),
  'lin-29': () => t('musicalidade obtida'),
  'lin-30': () => t('legitimidade da fala brasileira'),
  'lin-31': () => t('romance regionalista de 30'),
  'lin-32': () => t('dualismo barroco'),
  'lin-33': () => t('ideais neoclássicos'),

  // ---- Linguagens: Gêneros textuais
  'lin-34': () => t('Meme'),
  'lin-35': () => t('Resumo e resenha crítica'),
  'lin-36': () => t('editorial'),
  'lin-37': () => t('Verbete de dicionário'),

  // ---- Linguagens: Coesão e coerência
  'lin-38': () => t('no entanto'),
  'lin-39': () => t('portanto'),
  'lin-40': () => t('retomar por coesão referencial'),
  'lin-41': () => t('quebra de coerência'),

  // ---- Linguagens: Artes, cultura e corpo
  'lin-42': () => t('imaterial'),
  'lin-43': () => t('apropriação crítica e criativa'),
  'lin-44': () => t('garantir participação'),
  'lin-45': () => t('apropriação cultural'),

  // ---- Linguagens: Semântica
  'lin-46': () => t('conotativo, com sentido figurado'),
  'lin-47': () => t('ambiguidade'),
  'lin-48': () => t('polissemia'),

  // ---- Linguagens: Lote 2 (Interpretação)
  'lin-49': () => t('contraste entre a intenção declarada'),
  'lin-50': () => t('naturalização da reclamação'),
  'lin-51': () => t('acessível, sem custo'),
  'lin-52': () => t('valorizá-la como sinal'),
  'lin-53': () => t('reconhecendo qualidade técnica'),
  'lin-54': () => t('admite exceção mediante condição'),

  // ---- Linguagens: Lote 2 (Literatura)
  'lin-55': () => t('disposição espacial das palavras'),
  'lin-56': () => t('diversificação de perspectivas'),
  'lin-57': () => t('eu lírico masculino'),
  'lin-58': () => t('de Informação'),

  // ---- Linguagens: Lote 2 (Variação linguística)
  'lin-59': () => t('Jargão'),
  'lin-60': () => t('Estrangeirismo'),

  // ---- Linguagens: Lote 2 (Funções da linguagem)
  'lin-61': () => t('poética'),
  'lin-62': () => t('Referencial'),

  // ---- Linguagens: Lote 2 (Figuras de linguagem)
  'lin-63': () => t('Eufemismo'),
  'lin-64': () => t('Ironia'),

  // ---- Linguagens: Lote 2 (Gêneros textuais)
  'lin-65': () => t('Reportagem investigativa'),
  'lin-66': () => t('multimodal'),

  // ---- Linguagens: Lote 2 (Coesão e coerência)
  'lin-67': () => t('a fim de'),
  'lin-68': () => t('ausência de progressão temática'),

  // ---- Linguagens: Lote 2 (Artes, cultura e corpo)
  'lin-69': () => t('crítica política'),
  'lin-70': () => t('visibilidade a realidades sociais'),

  // ---- Linguagens: Lote 2 (Semântica)
  'lin-71': () => t('Sinonímia'),
  'lin-72': () => t('Plágio')
};

// Converte "R$ 6.655,00", "2 880 peças", "5,4 m", "80 km/h" e "1/3" em número.
// A barra exige cuidado: em "1/3" ela é fração, em "km/h" faz parte da unidade.
function paraNumero(texto: string): number | null {
  const semMoeda = texto.replace(/R\$/g, '').trim();

  // Fração pura — formato que o ENEM usa nas alternativas de probabilidade.
  const fracao = semMoeda.replace(/\s/g, '').match(/^(\d+)\/(\d+)$/);
  if (fracao) return Number(fracao[1]) / Number(fracao[2]);

  // Caso geral: primeiro número do texto, no formato brasileiro (1.234,56).
  const encontrado = semMoeda.match(/\d[\d.\s]*(?:,\d+)?/);
  if (!encontrado) return null;

  const normalizado = encontrado[0]
    .replace(/\s/g, '')
    .replace(/\.(?=\d{3}\b)/g, '')
    .replace(',', '.')
    .replace(/[.,]$/, '');

  const n = Number(normalizado);
  return Number.isFinite(n) ? n : null;
}

function confere(nome: string, banco: ExamQuestion[]): number {
  let falhas = 0;
  let semCalculo = 0;

  console.log(`\n=== ${nome} — ${banco.length} questões ===`);

  for (const q of banco) {
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
      console.log(`  ${q.id}  FALHA: esperava conter "${esperado.texto}", gabarito ${q.correctLetter} diz "${alternativa.text}"`);
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
      console.log(`  ${q.id}  FALHA: cálculo dá ${esperado}, gabarito ${q.correctLetter} diz "${alternativa.text}" (${obtido})`);
      falhas++;
    }
  }

  const dif = new Map<string, number>();
  banco.forEach((q) => dif.set(q.difficulty, (dif.get(q.difficulty) ?? 0) + 1));
  const letras = new Map<string, number>();
  banco.forEach((q) => letras.set(q.correctLetter, (letras.get(q.correctLetter) ?? 0) + 1));

  console.log('  dificuldade: ' + ['Fácil', 'Média', 'Difícil'].map((d) => `${d} ${dif.get(d) ?? 0}`).join(' | '));
  console.log('  gabaritos:   ' + ['A', 'B', 'C', 'D', 'E'].map((l) => `${l}=${letras.get(l) ?? 0}`).join(' '));

  const ids = banco.map((q) => q.id);
  const repetidos = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (repetidos.length) {
    console.log('  IDS DUPLICADOS: ' + repetidos.join(', '));
    falhas += repetidos.length;
  }

  console.log(`  ${falhas === 0 && semCalculo === 0 ? 'OK — todos conferem' : `${falhas} falha(s), ${semCalculo} sem cálculo`}`);
  return falhas + semCalculo;
}

const problemas =
  confere('Matemática', MATEMATICA_QUESTIONS) +
  confere('Ciências da Natureza', NATUREZA_QUESTIONS) +
  confere('Ciências Humanas', HUMANAS_QUESTIONS) +
  confere('Linguagens e Códigos', LINGUAGENS_QUESTIONS);

console.log(problemas === 0 ? '\nTODOS OS GABARITOS CONFEREM\n' : `\n${problemas} problema(s) encontrado(s)\n`);
process.exit(problemas === 0 ? 0 : 1);
