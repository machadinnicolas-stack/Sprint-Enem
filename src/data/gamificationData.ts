import { Badge, UserGamificationState, UserLevelInfo } from '../types';

export const LEVEL_TIERS = [
  { level: 1, title: 'Calouro do ENEM', icon: 'school', minXp: 0, maxXp: 150 },
  { level: 2, title: 'Estudante Focado', icon: 'auto_stories', minXp: 150, maxXp: 400 },
  { level: 3, title: 'Rato de Biblioteca', icon: 'menu_book', minXp: 400, maxXp: 800 },
  { level: 4, title: 'Estrategista TRI', icon: 'psychology', minXp: 800, maxXp: 1400 },
  { level: 5, title: 'Mestre dos Simulados', icon: 'military_tech', minXp: 1400, maxXp: 2200 },
  { level: 6, title: 'Gênio da Redação', icon: 'edit_note', minXp: 2200, maxXp: 3200 },
  { level: 7, title: 'Vestibulando Lendário', icon: 'workspace_premium', minXp: 3200, maxXp: 4500 },
  { level: 8, title: 'Aprovado no Top 1%', icon: 'stars', minXp: 4500, maxXp: 6000 }
];

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'primeiro_passo',
    title: 'Primeiro Passo',
    description: 'Conclua seu primeiro bloco de estudos no cronograma.',
    icon: 'flag',
    category: 'blocks',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'comum',
    xpReward: 50
  },
  {
    id: 'ritmo_constante',
    title: 'Ritmo Constante',
    description: 'Complete 5 blocos de estudo no cronograma semanal.',
    icon: 'speed',
    category: 'blocks',
    unlocked: false,
    progress: 0,
    maxProgress: 5,
    rarity: 'comum',
    xpReward: 100
  },
  {
    id: 'semana_imbativel',
    title: 'Semana Imbatível',
    description: 'Complete 15 blocos de estudo no cronograma.',
    icon: 'emoji_events',
    category: 'blocks',
    unlocked: false,
    progress: 0,
    maxProgress: 15,
    rarity: 'raro',
    xpReward: 250
  },
  {
    id: 'mestre_pomodoro',
    title: 'Mestre do Foco',
    description: 'Conclua uma sessão de foco total com o cronômetro Pomodoro.',
    icon: 'timer',
    category: 'mastery',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'raro',
    xpReward: 120
  },
  {
    id: 'chama_acesa',
    title: 'Chama Acesa',
    description: 'Mantenha uma sequência de 3 dias de estudo (Streak).',
    icon: 'local_fire_department',
    category: 'streak',
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    rarity: 'comum',
    xpReward: 150
  },
  {
    id: 'habito_ferreo',
    title: 'Hábito Férreo',
    description: 'Alcance uma sequência de 7 dias consecutivos de estudo.',
    icon: 'whatshot',
    category: 'streak',
    unlocked: false,
    progress: 0,
    maxProgress: 7,
    rarity: 'epico',
    xpReward: 350
  },
  {
    id: 'disciplina_suprema',
    title: 'Disciplina Suprema',
    description: 'Mantenha 14 dias de sequência sem faltar aos estudos.',
    icon: 'shield',
    category: 'streak',
    unlocked: false,
    progress: 0,
    maxProgress: 14,
    rarity: 'lendario',
    xpReward: 600
  },
  {
    id: 'sniper_tri',
    title: 'Sniper da TRI',
    description: 'Pratique no Simulado TRI e acerte questões comentadas.',
    icon: 'psychology',
    category: 'simulado',
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    rarity: 'raro',
    xpReward: 150
  },
  {
    id: 'maratonista_enem',
    title: 'Maratonista do ENEM',
    description: 'Conclua um dia inteiro do Simulado Completo cronometrado.',
    icon: 'timer',
    category: 'simulado',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'epico',
    xpReward: 300
  },
  {
    id: 'arquiteto_redacao',
    title: 'Arquiteto Nota 1000',
    description: 'Avalie uma redação na Oficina com a inteligência artificial.',
    icon: 'history_edu',
    category: 'redacao',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'raro',
    xpReward: 200
  },
  {
    id: 'centuriao_estudos',
    title: 'Centurião dos Estudos',
    description: 'Acumule mais de 300 minutos (5 horas) de estudo registrado.',
    icon: 'hourglass_bottom',
    category: 'mastery',
    unlocked: false,
    progress: 0,
    maxProgress: 300,
    rarity: 'epico',
    xpReward: 400
  },
  {
    id: 'dia_perfeito',
    title: 'Dia Perfeito',
    description: 'Complete todos os blocos programados para um dia inteiro.',
    icon: 'verified',
    category: 'mastery',
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    rarity: 'epico',
    xpReward: 250
  },
  {
    id: 'planejador_sisu',
    title: 'Estrategista SISU',
    description: 'Personalize e gere seu plano com meta para o curso dos sonhos.',
    icon: 'explore',
    category: 'mastery',
    unlocked: true,
    unlockedAt: 'Hoje',
    progress: 1,
    maxProgress: 1,
    rarity: 'comum',
    xpReward: 50
  }
];

export function getLevelInfo(xp: number): UserLevelInfo {
  let currentTier = LEVEL_TIERS[0];

  for (const tier of LEVEL_TIERS) {
    if (xp >= tier.minXp) {
      currentTier = tier;
    } else {
      break;
    }
  }

  const span = Math.max(1, currentTier.maxXp - currentTier.minXp);
  const currentInTier = Math.min(span, Math.max(0, xp - currentTier.minXp));
  const progressPercent = Math.min(100, Math.round((currentInTier / span) * 100));

  return {
    level: currentTier.level,
    title: currentTier.title,
    icon: currentTier.icon,
    currentXp: xp,
    minXp: currentTier.minXp,
    maxXp: currentTier.maxXp,
    progressPercent
  };
}

// Local (not UTC) calendar date as YYYY-MM-DD, so the streak matches the user's actual day.
function getLocalDateString(d: Date = new Date()): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Whole calendar days between two YYYY-MM-DD local dates (b - a).
function getDaysBetween(dateA: string, dateB: string): number {
  const a = new Date(`${dateA}T00:00:00`);
  const b = new Date(`${dateB}T00:00:00`);
  return Math.round((b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24));
}

// Events that represent real study activity and should count toward the daily streak.
const STREAK_QUALIFYING_EVENTS = new Set<GamificationUpdateEvent['type']>([
  'block_completed',
  'pomodoro_completed',
  'simulado_answered',
  'simulado_completo_finished',
  'redacao_evaluated'
]);

export function getInitialGamificationState(): UserGamificationState {
  const initialXp = 50; // Started with planner unlock
  return {
    xp: initialXp,
    streakDays: 0,
    lastStudiedDate: '',
    totalBlocksCompleted: 0,
    totalMinutesStudied: 0,
    simuladosCompleted: 0,
    simuladosCompletosFinalizados: 0,
    redacoesEvaluated: 0,
    badges: INITIAL_BADGES
  };
}

// Merges a persisted state (from before new fields/badges existed in code) with the
// current defaults, so users who saved data with an older app version pick up new
// badges/fields automatically instead of being stuck without them forever.
export function reconcileGamificationState(saved?: UserGamificationState | null): UserGamificationState {
  const initial = getInitialGamificationState();
  if (!saved) return initial;

  const savedBadgesById = new Map((saved.badges ?? []).map((b) => [b.id, b]));
  const badges = INITIAL_BADGES.map((defaultBadge) => {
    const savedBadge = savedBadgesById.get(defaultBadge.id);
    return savedBadge ? { ...defaultBadge, ...savedBadge } : defaultBadge;
  });

  return {
    ...initial,
    ...saved,
    simuladosCompleted: saved.simuladosCompleted ?? 0,
    simuladosCompletosFinalizados: saved.simuladosCompletosFinalizados ?? 0,
    badges
  };
}

export interface GamificationUpdateEvent {
  type: 'block_completed' | 'block_uncompleted' | 'pomodoro_completed' | 'simulado_answered' | 'simulado_completo_finished' | 'redacao_evaluated' | 'plan_customized';
  minutes?: number;
  isAllDayCompleted?: boolean;
  correctCount?: number;
  totalCount?: number;
}

export function processGamificationEvent(
  prevState: UserGamificationState,
  event: GamificationUpdateEvent
): {
  newState: UserGamificationState;
  newlyUnlocked: Badge[];
  levelUp: boolean;
  xpGained: number;
} {
  let xpGained = 0;
  let totalBlocks = prevState.totalBlocksCompleted;
  let totalMins = prevState.totalMinutesStudied;
  let simulados = prevState.simuladosCompleted;
  let simuladosCompletos = prevState.simuladosCompletosFinalizados;
  let redacoes = prevState.redacoesEvaluated;
  let streak = prevState.streakDays;
  let lastStudiedDate = prevState.lastStudiedDate;

  if (event.type === 'block_completed') {
    xpGained += 50;
    totalBlocks += 1;
    totalMins += (event.minutes || 30);
  } else if (event.type === 'block_uncompleted') {
    xpGained -= 50;
    totalBlocks = Math.max(0, totalBlocks - 1);
    totalMins = Math.max(0, totalMins - (event.minutes || 30));
  } else if (event.type === 'pomodoro_completed') {
    xpGained += 60;
    totalMins += (event.minutes || 25);
  } else if (event.type === 'simulado_answered') {
    xpGained += 40;
    simulados += 1;
  } else if (event.type === 'simulado_completo_finished') {
    const correctCount = event.correctCount || 0;
    xpGained += 100 + correctCount * 10;
    simulados += 1;
    simuladosCompletos += 1;
  } else if (event.type === 'redacao_evaluated') {
    xpGained += 150;
    redacoes += 1;
  }

  // Real, calendar-based streak: only the first qualifying study action of each
  // day advances it. Studying again the same day is a no-op; missing a day resets it.
  if (STREAK_QUALIFYING_EVENTS.has(event.type)) {
    const today = getLocalDateString();
    if (!prevState.lastStudiedDate) {
      streak = 1;
      lastStudiedDate = today;
    } else {
      const daysSinceLastStudy = getDaysBetween(prevState.lastStudiedDate, today);
      if (daysSinceLastStudy === 1) {
        streak = prevState.streakDays + 1;
        lastStudiedDate = today;
        xpGained += 100;
      } else if (daysSinceLastStudy > 1 || daysSinceLastStudy < 0) {
        streak = 1;
        lastStudiedDate = today;
      }
      // daysSinceLastStudy === 0: already studied today, streak unchanged.
    }
  }

  const newTotalXp = Math.max(0, prevState.xp + xpGained);
  const oldLevel = getLevelInfo(prevState.xp).level;
  const newLevel = getLevelInfo(newTotalXp).level;
  const levelUp = newLevel > oldLevel;

  const newlyUnlocked: Badge[] = [];

  // Update badges progress & check unlocks
  const updatedBadges = prevState.badges.map(b => {
    let currentProgress = b.progress;
    let unlocked = b.unlocked;
    let unlockedAt = b.unlockedAt;

    switch (b.id) {
      case 'primeiro_passo':
        currentProgress = totalBlocks;
        break;
      case 'ritmo_constante':
        currentProgress = totalBlocks;
        break;
      case 'semana_imbativel':
        currentProgress = totalBlocks;
        break;
      case 'mestre_pomodoro':
        if (event.type === 'pomodoro_completed') currentProgress = 1;
        break;
      case 'chama_acesa':
        currentProgress = streak;
        break;
      case 'habito_ferreo':
        currentProgress = streak;
        break;
      case 'disciplina_suprema':
        currentProgress = streak;
        break;
      case 'sniper_tri':
        currentProgress = simulados;
        break;
      case 'maratonista_enem':
        currentProgress = simuladosCompletos;
        break;
      case 'arquiteto_redacao':
        currentProgress = redacoes;
        break;
      case 'centuriao_estudos':
        currentProgress = totalMins;
        break;
      case 'dia_perfeito':
        if (event.isAllDayCompleted) currentProgress = 1;
        break;
      case 'planejador_sisu':
        currentProgress = 1;
        unlocked = true;
        break;
    }

    if (!unlocked && currentProgress >= b.maxProgress) {
      unlocked = true;
      unlockedAt = new Date().toLocaleDateString('pt-BR');
      newlyUnlocked.push({
        ...b,
        unlocked: true,
        unlockedAt,
        progress: Math.min(b.maxProgress, currentProgress)
      });
    }

    return {
      ...b,
      progress: Math.min(b.maxProgress, currentProgress),
      unlocked,
      unlockedAt
    };
  });

  // Add badge reward XP if any newly unlocked
  let badgeXpBonus = 0;
  newlyUnlocked.forEach(b => {
    badgeXpBonus += b.xpReward;
  });

  const finalXp = newTotalXp + badgeXpBonus;

  return {
    newState: {
      ...prevState,
      xp: finalXp,
      streakDays: streak,
      lastStudiedDate,
      totalBlocksCompleted: totalBlocks,
      totalMinutesStudied: totalMins,
      simuladosCompleted: simulados,
      simuladosCompletosFinalizados: simuladosCompletos,
      redacoesEvaluated: redacoes,
      badges: updatedBadges
    },
    newlyUnlocked,
    levelUp,
    xpGained: xpGained + badgeXpBonus
  };
}
