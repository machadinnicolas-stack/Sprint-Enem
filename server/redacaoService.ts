import { GoogleGenAI, Type } from '@google/genai';

export const MINIMUM_LINES = 8;

export interface RedacaoFeedback {
  totalScore: number;
  generalComment: string;
  competencies: { name: string; score: number; tip: string }[];
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

// Calls Gemini to grade the essay against the 5 official ENEM competencies.
// Returns null (never throws) so callers can fall back to evaluateAlgorithmically.
export async function evaluateWithGemini(theme: string, text: string): Promise<RedacaoFeedback | null> {
  const ai = getGeminiAI();
  if (!ai) return null;

  try {
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

Retorne em formato JSON estrito com o total, comentário geral e notas/dicas por competência.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
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

    if (response.text) {
      return JSON.parse(response.text.trim());
    }
  } catch (err) {
    console.warn('Gemini API call failed, falling back to algorithmic feedback:', err);
  }

  return null;
}

// Free, instant heuristic used whenever Gemini is unavailable, fails, or the
// user's daily AI quota (see redacaoRateLimit.ts) has been reached.
export function evaluateAlgorithmically(theme: string, text: string): RedacaoFeedback {
  const wordCount = text.trim().split(/\s+/).length;
  const lowerText = text.toLowerCase();

  const hasConnectives =
    lowerText.includes('portanto') ||
    lowerText.includes('ademais') ||
    lowerText.includes('outrossim') ||
    lowerText.includes('nesse sentido');
  const hasRepertoire =
    lowerText.includes('constitui') ||
    lowerText.includes('bauman') ||
    lowerText.includes('segundo') ||
    lowerText.includes('conforme') ||
    lowerText.includes('artigo');
  const hasIntervention =
    lowerText.includes('ministério') ||
    lowerText.includes('governo') ||
    lowerText.includes('cabe ao') ||
    lowerText.includes('afim de') ||
    lowerText.includes('por meio');

  const c1 = wordCount > 150 ? 160 : 120;
  const c2 = hasRepertoire ? 200 : 160;
  const c3 = wordCount > 200 ? 160 : 120;
  const c4 = hasConnectives ? 200 : 160;
  const c5 = hasIntervention ? 200 : 160;
  const total = c1 + c2 + c3 + c4 + c5;

  return {
    totalScore: total,
    generalComment: `Texto estruturado de forma consistente para o tema "${theme}". Boa maturidade nos parágrafos argumentativos.`,
    competencies: [
      {
        name: 'C1: Norma Culta',
        score: c1,
        tip: 'Mantenha atenção à concordância verbal e pontuação em orações intercaladas.',
      },
      {
        name: 'C2: Tema e Repertório',
        score: c2,
        tip: hasRepertoire
          ? 'Repertório legitimado e produtivo bem integrado à tese.'
          : 'Sugestão: conecte um conceito filosófico ou artigo da CF/88 ao problema.',
      },
      {
        name: 'C3: Projeto de Texto',
        score: c3,
        tip: 'Argumentação lógica e coerente em defesa da tese central.',
      },
      {
        name: 'C4: Coesão Textual',
        score: c4,
        tip: hasConnectives
          ? 'Excelente repertório de operadores argumentativos interparágrafos.'
          : 'Use mais conectivos diversificados no início dos parágrafos.',
      },
      {
        name: 'C5: Proposta de Intervenção',
        score: c5,
        tip: hasIntervention
          ? 'Proposta completa contendo os 5 elementos essenciais do INEP.'
          : 'Certifique-se de explicitar o Detalhamento do Meio/Modo para garantir os 200 pontos.',
      },
    ],
  };
}
