import { GoogleGenAI, Type } from '@google/genai';

export const MINIMUM_LINES = 8;

// Pinned rather than using a floating alias so grading behaviour can't shift
// under students mid-cycle. Revisit when Google deprecates it: gemini-3.7-flash
// was the previous pick and began returning sustained 503s.
const GEMINI_MODEL = 'gemini-3.8-flash';

const MAX_ATTEMPTS = 3;
const RETRYABLE_STATUS = new Set([429, 500, 502, 503, 504]);

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

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
        config: {
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
        },
      });

      if (response.text) return JSON.parse(response.text.trim());
      console.warn(`Gemini returned an empty response (attempt ${attempt}/${MAX_ATTEMPTS}).`);
    } catch (err) {
      if (attempt < MAX_ATTEMPTS && isRetryable(err)) {
        await delay(attempt * 1500);
        continue;
      }
      console.error(`Gemini evaluation failed (attempt ${attempt}/${MAX_ATTEMPTS}):`, err);
      return null;
    }
  }

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
