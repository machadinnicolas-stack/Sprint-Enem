import { GoogleGenAI, Type } from '@google/genai';

export const MINIMUM_LINES = 8;

// Primeiro da lista é o modelo de referência; o segundo só entra quando o
// primeiro está indisponível. Em 13/09/2026, gemini-3.7-flash ficou horas em 503
// e o 3.8-flash caiu num pico no meio da tarde — com um único modelo fixo, cada
// pico desses vira "correção indisponível" para o aluno.
const GEMINI_MODELS = ['gemini-3.8-flash', 'gemini-flash-latest'];

const ATTEMPTS_PER_MODEL = 2;
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);

// Um 503 do Gemini pode levar mais de 20s para voltar, então quatro tentativas
// no pior caso passariam do tempo limite da função. Estourar o limite devolve um
// erro de gateway cru ao aluno; desistir dentro do orçamento devolve a nossa
// mensagem, com o texto preservado e o botão de tentar de novo.
const TOTAL_BUDGET_MS = 45_000;

// Correções legítimas já levaram 27s, então o teto por chamada precisa ficar
// acima disso; o que ele impede é uma chamada pendurada consumir o orçamento
// inteiro sozinha.
const PER_CALL_TIMEOUT_MS = 30_000;

// Mensagem sem dígitos de propósito: isRetryable procura códigos HTTP no texto
// do erro, e um número aqui faria um timeout ser confundido com um 500.
class GeminiTimeoutError extends Error {
  constructor() {
    super('Gemini call timed out');
  }
}

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new GeminiTimeoutError()), ms);
    promise.then(
      (valor) => {
        clearTimeout(timer);
        resolve(valor);
      },
      (erro) => {
        clearTimeout(timer);
        reject(erro);
      }
    );
  });
}

// Shared by both runtimes so the wording can't drift between local dev and Vercel.
export const AI_UNAVAILABLE_MESSAGE =
  'A correção por IA está indisponível no momento. Seu texto não foi perdido — tente novamente em alguns minutos.';

export interface RedacaoFeedback {
  totalScore: number;
  generalComment: string;
  competencies: { name: string; score: number; tip: string }[];
}

export interface WritingChecklistItem {
  name: string;
  ok: boolean;
  tip: string;
}

let aiClient: GoogleGenAI | null = null;
function getGeminiAI(): GoogleGenAI | null {
  if (!process.env.GEMINI_API_KEY) return null;
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

export function estimatedLineCount(text: string): number {
  return Math.ceil(text.trim().split(/\s+/).length / 10);
}

// Gemini overload (503) and rate limiting (429) are routine and usually clear in
// seconds; a hard failure on the first blip would send a paying student to the
// "unavailable" screen for no reason.
function isRetryable(err: unknown): boolean {
  const status = (err as { status?: number })?.status;
  if (typeof status === 'number') return RETRYABLE_STATUS.has(status);
  const message = String((err as { message?: string })?.message ?? '');
  return /\b(429|500|502|503|504)\b|UNAVAILABLE|RESOURCE_EXHAUSTED|overloaded|high demand/i.test(message);
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Grades against the 5 official ENEM competencies. Returns null when grading
// could not be completed — callers must surface that to the student rather than
// substituting a made-up score.
export async function evaluateWithGemini(theme: string, text: string): Promise<RedacaoFeedback | null> {
  const ai = getGeminiAI();
  if (!ai) {
    console.error('GEMINI_API_KEY is not set — redação evaluation is unavailable.');
    return null;
  }

  const prompt = `Você é um avaliador oficial da banca de Redação do ENEM (INEP).
Avalie a seguinte redação para o tema "${theme || 'Tema Livre'}":

--- REDAÇÃO DO ALUNO ---
${text}
-----------------------

Avalie o texto segundo as 5 Competências Oficiais do ENEM (cada uma valendo de 0 a 200 pontos, em intervalos de 40 pontos: 0, 40, 80, 120, 160, 200):
1. Competência 1: Domínio da norma culta da língua escrita.
2. Competência 2: Compreensão da proposta de redação e aplicação das várias áreas do conhecimento (Repertório sociocultural).
3. Competência 3: Seleção, relação, organização e interpretação de informações, fatos e argumentos em defesa de um ponto de vista.
4. Competência 4: Demonstração de conhecimento dos mecanismos linguísticos necessários para a construção da argumentação (Coesão e conectivos).
5. Competência 5: Elaboração de proposta de intervenção para o problema abordado (Agente, Ação, Modo/Meio, Efeito e Detalhamento).

Seja rigoroso e fiel aos critérios do INEP: atribua notas baixas quando o texto de fato as merece. Uma avaliação generosa demais prejudica o aluno, que precisa saber onde está para melhorar.

Retorne em formato JSON estrito com o total, comentário geral e notas/dicas por competência.`;

  const config = {
    responseMimeType: 'application/json',
    responseSchema: {
      type: Type.OBJECT,
      properties: {
        totalScore: { type: Type.INTEGER },
        generalComment: { type: Type.STRING },
        competencies: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              score: { type: Type.INTEGER },
              tip: { type: Type.STRING },
            },
            required: ['name', 'score', 'tip'],
          },
        },
      },
      required: ['totalScore', 'generalComment', 'competencies'],
    },
  };

  const startedAt = Date.now();
  const restante = () => TOTAL_BUDGET_MS - (Date.now() - startedAt);

  for (const model of GEMINI_MODELS) {
    for (let attempt = 1; attempt <= ATTEMPTS_PER_MODEL; attempt++) {
      const orcamento = restante();
      if (orcamento <= 0) {
        console.error('Gemini time budget exhausted before a grade could be produced.');
        return null;
      }

      try {
        const response = await withTimeout(
          ai.models.generateContent({ model, contents: prompt, config }),
          Math.min(orcamento, PER_CALL_TIMEOUT_MS)
        );

        if (response.text) return JSON.parse(response.text.trim());
        console.warn(`Gemini (${model}) returned an empty response, attempt ${attempt}/${ATTEMPTS_PER_MODEL}.`);
      } catch (err) {
        console.error(`Gemini (${model}) failed on attempt ${attempt}/${ATTEMPTS_PER_MODEL}:`, err);

        // Erro permanente (modelo removido, chave inválida) e timeout não
        // melhoram com repetição imediata — vão direto para o próximo modelo.
        if (!isRetryable(err)) break;

        if (attempt < ATTEMPTS_PER_MODEL && restante() > 5_000) await delay(2_000);
      }
    }
  }

  console.error('All Gemini models failed — reporting the essay as ungradable rather than inventing a score.');
  return null;
}

// Shown when the student has used up the day's AI gradings. Deliberately reports
// only what can be checked mechanically — presence of connectives, of repertoire
// markers, of an intervention proposal — and never a score, because a keyword
// scan cannot tell whether an essay is good and must not imply that it can.
export function buildWritingChecklist(text: string): WritingChecklistItem[] {
  const lower = text.toLowerCase();
  const wordCount = text.trim().split(/\s+/).length;

  const hasConnectives = ['portanto', 'ademais', 'outrossim', 'nesse sentido', 'dessa forma', 'por conseguinte'].some(
    (term) => lower.includes(term)
  );
  const hasRepertoire = ['constitui', 'bauman', 'segundo', 'conforme', 'artigo', 'lei ', 'de acordo com'].some((term) =>
    lower.includes(term)
  );
  const hasIntervention = ['ministério', 'governo', 'cabe ao', 'a fim de', 'por meio', 'secretaria'].some((term) =>
    lower.includes(term)
  );

  return [
    {
      name: 'Extensão do texto',
      ok: wordCount >= 200,
      tip:
        wordCount >= 200
          ? `${wordCount} palavras — dentro da faixa esperada para uma dissertação completa.`
          : `${wordCount} palavras. Uma dissertação completa costuma passar de 200; textos curtos limitam o desenvolvimento dos argumentos.`,
    },
    {
      name: 'Conectivos entre parágrafos',
      ok: hasConnectives,
      tip: hasConnectives
        ? 'Encontramos operadores argumentativos no texto.'
        : 'Não encontramos conectivos como "Ademais", "Portanto" ou "Nesse sentido" — eles sustentam a Competência 4.',
    },
    {
      name: 'Marcas de repertório sociocultural',
      ok: hasRepertoire,
      tip: hasRepertoire
        ? 'Há indícios de citação ou referência externa.'
        : 'Não encontramos citação, lei ou autor referenciado — a Competência 2 pede repertório legitimado.',
    },
    {
      name: 'Proposta de intervenção',
      ok: hasIntervention,
      tip: hasIntervention
        ? 'Há indícios de agente e meio na proposta.'
        : 'Não encontramos um agente explícito (ministério, secretaria, governo) — a Competência 5 exige agente, ação, meio, efeito e detalhamento.',
    },
  ];
}
