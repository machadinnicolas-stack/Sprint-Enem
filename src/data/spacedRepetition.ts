import { ExamQuestion, RevisaoQuestaoState, SpacedRepetitionState } from '../types';

// Sistema de Leitner com 5 caixas. Cada índice corresponde à caixa (box) de
// mesmo número, e o valor é quantos dias até a próxima revisão daquela caixa.
const INTERVALOS_DIAS = [1, 3, 7, 14, 30];
const CAIXA_MAXIMA = INTERVALOS_DIAS.length;

function addDias(data: Date, dias: number): Date {
  const copia = new Date(data);
  copia.setDate(copia.getDate() + dias);
  return copia;
}

function proximaRevisao(caixa: number, agora: Date): string {
  return addDias(agora, INTERVALOS_DIAS[caixa - 1]).toISOString();
}

// Registra uma resposta e devolve o novo estado. Regras:
//
// - Acertar uma questão que nunca falhou antes não entra no sistema — ela já
//   demonstrou domínio, não precisa de reforço agendado.
// - Errar (a qualquer momento) manda a questão para a caixa 1, de volta ao
//   início da fila.
// - Acertar uma questão que estava em revisão avança uma caixa.
// - Acertar estando na última caixa "gradua" a questão: ela sai do sistema.
export function registrarResposta(
  state: SpacedRepetitionState,
  questionId: string,
  isCorrect: boolean,
  agora: Date = new Date()
): SpacedRepetitionState {
  const atual = state[questionId];

  if (!atual && isCorrect) return state;

  if (!isCorrect) {
    const proximo: RevisaoQuestaoState = {
      box: 1,
      nextReviewAt: proximaRevisao(1, agora),
      timesSeen: (atual?.timesSeen ?? 0) + 1,
      timesCorrect: atual?.timesCorrect ?? 0
    };
    return { ...state, [questionId]: proximo };
  }

  // A partir daqui, isCorrect é true e atual existe.
  const timesSeen = atual.timesSeen + 1;
  const timesCorrect = atual.timesCorrect + 1;

  if (atual.box >= CAIXA_MAXIMA) {
    const { [questionId]: _removida, ...resto } = state;
    return resto;
  }

  const novaCaixa = atual.box + 1;
  return {
    ...state,
    [questionId]: {
      box: novaCaixa,
      nextReviewAt: proximaRevisao(novaCaixa, agora),
      timesSeen,
      timesCorrect
    }
  };
}

// Questões cujo prazo de revisão já chegou, da mais atrasada para a mais
// recente — reforçar primeiro o que está esperando há mais tempo.
export function questoesPendentes(
  state: SpacedRepetitionState,
  banco: ExamQuestion[],
  agora: Date = new Date()
): ExamQuestion[] {
  const agoraMs = agora.getTime();
  const idsPendentes = Object.entries(state)
    .filter(([, s]) => new Date(s.nextReviewAt).getTime() <= agoraMs)
    .sort((a, b) => new Date(a[1].nextReviewAt).getTime() - new Date(b[1].nextReviewAt).getTime())
    .map(([id]) => id);

  const porId = new Map(banco.map((q) => [q.id, q]));
  return idsPendentes.map((id) => porId.get(id)).filter((q): q is ExamQuestion => Boolean(q));
}

// Quantos dias até a próxima questão (ainda não vencida) ficar disponível.
// Retorna null quando não há nenhuma questão agendada no sistema.
export function diasParaProximaRevisao(state: SpacedRepetitionState, agora: Date = new Date()): number | null {
  const futuras = Object.values(state)
    .map((s) => new Date(s.nextReviewAt).getTime())
    .filter((t) => t > agora.getTime());
  if (futuras.length === 0) return null;
  const maisProxima = Math.min(...futuras);
  return Math.ceil((maisProxima - agora.getTime()) / (1000 * 60 * 60 * 24));
}

export function totalNoSistema(state: SpacedRepetitionState): number {
  return Object.keys(state).length;
}
