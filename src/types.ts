export type LevelType = 'iniciante' | 'intermediario' | 'avancado';
export type TimeType = '1h' | '2h' | '4h' | '6h+';
export type SubjectType = 'matematica' | 'natureza' | 'linguagens' | 'humanas' | 'redacao';

export interface UserPreferences {
  curso: string;
  tempoDia: TimeType;
  diasSemana: number;
  nivel: LevelType;
  dificuldades: SubjectType[];
  metaNota?: number;
  dataEnem?: string;
}

export interface StudyBlock {
  id: string;
  title: string;
  subject: SubjectType | 'geral';
  topic: string;
  durationMinutes: number;
  triWeight: 'Normal' | 'Alta' | 'Muito Alta';
  completed: boolean;
  notes?: string;
  tip?: string;
  sourceExam?: string;
}

export interface DaySchedule {
  dayNumber: number;
  dayName: string;
  focusArea: string;
  totalTimeMinutes: number;
  blocks: StudyBlock[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'streak' | 'blocks' | 'subjects' | 'redacao' | 'simulado' | 'mastery';
  unlocked: boolean;
  unlockedAt?: string;
  progress: number;
  maxProgress: number;
  rarity: 'comum' | 'raro' | 'epico' | 'lendario';
  xpReward: number;
}

export interface UserLevelInfo {
  level: number;
  title: string;
  icon: string;
  currentXp: number;
  minXp: number;
  maxXp: number;
  progressPercent: number;
}

export interface UserGamificationState {
  xp: number;
  streakDays: number;
  lastStudiedDate: string;
  totalBlocksCompleted: number;
  totalMinutesStudied: number;
  simuladosCompleted: number;
  simuladosCompletosFinalizados: number;
  redacoesEvaluated: number;
  badges: Badge[];
}

export interface GeneratedPlan {
  preferences: UserPreferences;
  weeklySchedule: DaySchedule[];
  aiRecommendations: string[];
  triStrategy: {
    subject: string;
    weight: string;
    strategy: string;
    highYieldTopics: string[];
  }[];
  summaryStats: {
    totalWeeklyHours: number;
    completedHours: number;
    completionPercentage: number;
    streakDays: number;
  };
  createdAt: string;
}

export interface ExamQuestion {
  id: string;
  subject: SubjectType;
  areaName: string;
  year: string;
  topic: string;
  difficulty: 'Fácil' | 'Média' | 'Difícil';
  question: string;
  options: { letter: string; text: string }[];
  correctLetter: string;
  explanation: string;
  triTip: string;
}

export interface RedacaoTheme {
  id: string;
  title: string;
  axis: string;
  status: 'Pendente' | 'Concluída';
  motivatingContext: string;
  suggestedArguments: string[];
  repertoire: string[];
  interventionTips: string[];
}

export interface TopicItem {
  id: string;
  subject: SubjectType;
  title: string;
  incidence: string; // e.g. "22% das questões"
  importance: 'Muito Alta' | 'Alta' | 'Média';
  completed: boolean;
  summary: string;
}

export interface SimuladoCompletoDia {
  id: 'dia1' | 'dia2';
  label: string;
  subjects: [SubjectType, SubjectType];
  questionIds: string[];
  durationMinutes: number;
}

export interface SimuladoCompletoResultado {
  dia: 'dia1' | 'dia2';
  acertos: number;
  total: number;
  tempoGastoSegundos: number;
  notaEstimadaPorArea: Record<string, number>;
}
