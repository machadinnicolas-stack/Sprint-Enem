import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { UserPreferences, GeneratedPlan, StudyBlock, UserGamificationState, Badge, SubjectType } from './types';
import { generateStudyPlan, buildDaySchedule, regenerateDaySubject } from './data/enemData';
import { getInitialGamificationState, reconcileGamificationState, processGamificationEvent, getLevelInfo } from './data/gamificationData';
import { useAuth } from './hooks/useAuth';
import { loadUserData, saveUserData } from './services/userData';
import { AuthScreen } from './components/AuthScreen';
import { OnboardingForm } from './components/OnboardingForm';
import { Header } from './components/Header';
import { CronogramaView } from './components/CronogramaView';
import { ChecklistIncidencia } from './components/ChecklistIncidencia';
import { SimuladoTRI } from './components/SimuladoTRI';
import { SimuladoCompleto } from './components/SimuladoCompleto';
import { RedacaoHub } from './components/RedacaoHub';
import { PomodoroTimerModal } from './components/PomodoroTimerModal';
import { BadgesModal } from './components/BadgesModal';
import { BadgeUnlockCelebration } from './components/BadgeUnlockCelebration';
import { UpdateNotifier } from './components/UpdateNotifier';

const DAY_NAMES = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const DEFAULT_PREFERENCES: UserPreferences = {
  curso: 'Medicina',
  tempoDia: '2h',
  diasSemana: 5,
  nivel: 'intermediario',
  dificuldades: ['matematica', 'linguagens']
};

export default function App() {
  const { user, authLoading, logout } = useAuth();

  const [preferences, setPreferences] = useState<UserPreferences>(DEFAULT_PREFERENCES);
  const [gamification, setGamification] = useState<UserGamificationState>(getInitialGamificationState());
  const [activeTab, setActiveTab] = useState<'personalizar' | 'cronograma' | 'incidencia' | 'simulado' | 'redacao'>('personalizar');
  const [simuladoMode, setSimuladoMode] = useState<'rapido' | 'completo'>('rapido');
  const [plan, setPlan] = useState<GeneratedPlan>(() => generateStudyPlan(DEFAULT_PREFERENCES));
  const [selectedBlockForTimer, setSelectedBlockForTimer] = useState<StudyBlock | null>(null);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);

  const [celebration, setCelebration] = useState<{
    badge?: Badge | null;
    isLevelUp?: boolean;
    newLevelTitle?: string;
    newLevelNumber?: number;
  } | null>(null);

  // Cloud sync: load the signed-in user's data from Firestore, then debounce-save
  // any local changes back. `dataReady` gates the save effect so we never overwrite
  // Firestore with default state before the initial load completes.
  const [dataReady, setDataReady] = useState(false);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!user) {
      setDataReady(false);
      return;
    }

    let cancelled = false;
    setDataReady(false);

    loadUserData(user.id)
      .then((data) => {
        if (cancelled) return;
        const loadedPrefs = data.preferences ?? DEFAULT_PREFERENCES;
        setPreferences(loadedPrefs);
        setGamification(reconcileGamificationState(data.gamification));
        setPlan(data.plan ?? generateStudyPlan(loadedPrefs));
        // Returning users with an existing plan land on their cronograma, not back at onboarding.
        if (data.preferences) setActiveTab('cronograma');
        setDataReady(true);
      })
      .catch(() => {
        if (cancelled) return;
        // Falls back to defaults so the app doesn't hang on the loading spinner forever.
        setPlan(generateStudyPlan(DEFAULT_PREFERENCES));
        setDataReady(true);
      });

    return () => {
      cancelled = true;
    };
  }, [user]);

  useEffect(() => {
    if (!user || !dataReady) return;

    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      saveUserData(user.id, { preferences, gamification, plan }).catch(() => {
        // safe fallback: next change will retry the save
      });
    }, 800);

    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [user, dataReady, preferences, gamification, plan]);

  const handleGeneratePlan = (newPrefs: UserPreferences) => {
    setPreferences(newPrefs);
    const newPlan = generateStudyPlan(newPrefs);
    setPlan(newPlan);
    setActiveTab('simulado');

    // Trigger plan customized gamification event
    const { newState, newlyUnlocked, levelUp } = processGamificationEvent(gamification, {
      type: 'plan_customized'
    });
    setGamification(newState);

    if (levelUp) {
      const info = getLevelInfo(newState.xp);
      setCelebration({
        isLevelUp: true,
        newLevelTitle: info.title,
        newLevelNumber: info.level
      });
    } else if (newlyUnlocked.length > 0) {
      setCelebration({
        badge: newlyUnlocked[0]
      });
    }
  };

  const handleChangeDaySubject = (dayIndex: number, newSubject: SubjectType) => {
    const day = plan.weeklySchedule[dayIndex];
    if (!day) return;
    const updatedDay = regenerateDaySubject(day, newSubject);
    const updatedSchedule = plan.weeklySchedule.map((d, i) => (i === dayIndex ? updatedDay : d));
    const allBlocks = updatedSchedule.flatMap((d) => d.blocks);
    const completed = allBlocks.filter((b) => b.completed).length;
    const pct = allBlocks.length > 0 ? Math.round((completed / allBlocks.length) * 100) : 0;
    setPlan({
      ...plan,
      weeklySchedule: updatedSchedule,
      summaryStats: { ...plan.summaryStats, completionPercentage: pct }
    });
  };

  const handleAddDay = () => {
    if (plan.weeklySchedule.length >= 7) return;
    const usedNames = new Set(plan.weeklySchedule.map((d) => d.dayName));
    const nextName = DAY_NAMES.find((n) => !usedNames.has(n)) || `Dia ${plan.weeklySchedule.length + 1}`;
    const dailyMinutes = plan.weeklySchedule[0]?.totalTimeMinutes || 120;
    const newDayIndex = plan.weeklySchedule.length;
    const newDay = buildDaySchedule(newDayIndex, nextName, 'matematica', 'matematica', dailyMinutes);
    const updatedSchedule = [...plan.weeklySchedule, newDay];
    const totalWeeklyHours = Math.round(updatedSchedule.reduce((acc, d) => acc + d.totalTimeMinutes, 0) / 60);
    setPlan({
      ...plan,
      weeklySchedule: updatedSchedule,
      summaryStats: { ...plan.summaryStats, totalWeeklyHours }
    });
    setPreferences((prev) => ({ ...prev, diasSemana: updatedSchedule.length }));
  };

  const handleRemoveDay = (dayIndex: number) => {
    if (plan.weeklySchedule.length <= 1) return;
    const updatedSchedule = plan.weeklySchedule
      .filter((_, i) => i !== dayIndex)
      .map((day, i) => ({ ...day, dayNumber: i + 1 }));
    const allBlocks = updatedSchedule.flatMap((d) => d.blocks);
    const completed = allBlocks.filter((b) => b.completed).length;
    const pct = allBlocks.length > 0 ? Math.round((completed / allBlocks.length) * 100) : 0;
    const totalWeeklyHours = Math.round(updatedSchedule.reduce((acc, d) => acc + d.totalTimeMinutes, 0) / 60);
    setPlan({
      ...plan,
      weeklySchedule: updatedSchedule,
      summaryStats: { ...plan.summaryStats, completionPercentage: pct, totalWeeklyHours }
    });
    setPreferences((prev) => ({ ...prev, diasSemana: updatedSchedule.length }));
  };

  const handleToggleBlock = (blockId: string) => {
    let blockWasCompleted = false;
    let blockDuration = 30;

    // Find block
    for (const day of plan.weeklySchedule) {
      const found = day.blocks.find((b) => b.id === blockId);
      if (found) {
        blockWasCompleted = found.completed;
        blockDuration = found.durationMinutes || 30;
        break;
      }
    }

    const willBeCompleted = !blockWasCompleted;

    setPlan((prev) => {
      const updatedSchedule = prev.weeklySchedule.map((day) => ({
        ...day,
        blocks: day.blocks.map((b) =>
          b.id === blockId ? { ...b, completed: willBeCompleted } : b
        )
      }));

      const allBlocks = updatedSchedule.flatMap((d) => d.blocks);
      const completed = allBlocks.filter((b) => b.completed).length;
      const pct = allBlocks.length > 0 ? Math.round((completed / allBlocks.length) * 100) : 0;

      return {
        ...prev,
        weeklySchedule: updatedSchedule,
        summaryStats: {
          ...prev.summaryStats,
          completionPercentage: pct
        }
      };
    });

    // Check gamification update
    const eventType = willBeCompleted ? 'block_completed' : 'block_uncompleted';
    const { newState, newlyUnlocked, levelUp } = processGamificationEvent(gamification, {
      type: eventType,
      minutes: blockDuration
    });
    setGamification(newState);

    if (willBeCompleted) {
      if (levelUp) {
        const info = getLevelInfo(newState.xp);
        setCelebration({
          isLevelUp: true,
          newLevelTitle: info.title,
          newLevelNumber: info.level
        });
      } else if (newlyUnlocked.length > 0) {
        setCelebration({
          badge: newlyUnlocked[0]
        });
      }
    }
  };

  const handleCompleteBlock = (blockId: string) => {
    let blockDuration = 25;
    let blockAlreadyCompleted = false;
    for (const day of plan.weeklySchedule) {
      const found = day.blocks.find((b) => b.id === blockId);
      if (found) {
        blockDuration = found.durationMinutes || 25;
        blockAlreadyCompleted = found.completed;
        break;
      }
    }

    if (blockAlreadyCompleted) return;

    setPlan((prev) => {
      const updatedSchedule = prev.weeklySchedule.map((day) => ({
        ...day,
        blocks: day.blocks.map((b) =>
          b.id === blockId ? { ...b, completed: true } : b
        )
      }));

      const allBlocks = updatedSchedule.flatMap((d) => d.blocks);
      const completed = allBlocks.filter((b) => b.completed).length;
      const pct = allBlocks.length > 0 ? Math.round((completed / allBlocks.length) * 100) : 0;

      return {
        ...prev,
        weeklySchedule: updatedSchedule,
        summaryStats: {
          ...prev.summaryStats,
          completionPercentage: pct
        }
      };
    });

    const { newState, newlyUnlocked, levelUp } = processGamificationEvent(gamification, {
      type: 'pomodoro_completed',
      minutes: blockDuration
    });
    setGamification(newState);

    if (levelUp) {
      const info = getLevelInfo(newState.xp);
      setCelebration({
        isLevelUp: true,
        newLevelTitle: info.title,
        newLevelNumber: info.level
      });
    } else if (newlyUnlocked.length > 0) {
      setCelebration({
        badge: newlyUnlocked[0]
      });
    }
  };

  const handleSimuladoAnswered = (isCorrect: boolean) => {
    if (!isCorrect) return;
    const { newState, newlyUnlocked, levelUp } = processGamificationEvent(gamification, {
      type: 'simulado_answered'
    });
    setGamification(newState);

    if (levelUp) {
      const info = getLevelInfo(newState.xp);
      setCelebration({
        isLevelUp: true,
        newLevelTitle: info.title,
        newLevelNumber: info.level
      });
    } else if (newlyUnlocked.length > 0) {
      setCelebration({
        badge: newlyUnlocked[0]
      });
    }
  };

  const handleSimuladoCompletoFinished = (correctCount: number, totalCount: number) => {
    const { newState, newlyUnlocked, levelUp } = processGamificationEvent(gamification, {
      type: 'simulado_completo_finished',
      correctCount,
      totalCount
    });
    setGamification(newState);

    if (levelUp) {
      const info = getLevelInfo(newState.xp);
      setCelebration({
        isLevelUp: true,
        newLevelTitle: info.title,
        newLevelNumber: info.level
      });
    } else if (newlyUnlocked.length > 0) {
      setCelebration({
        badge: newlyUnlocked[0]
      });
    }
  };

  const handleRedacaoEvaluated = (_score: number) => {
    const { newState, newlyUnlocked, levelUp } = processGamificationEvent(gamification, {
      type: 'redacao_evaluated'
    });
    setGamification(newState);

    if (levelUp) {
      const info = getLevelInfo(newState.xp);
      setCelebration({
        isLevelUp: true,
        newLevelTitle: info.title,
        newLevelNumber: info.level
      });
    } else if (newlyUnlocked.length > 0) {
      setCelebration({
        badge: newlyUnlocked[0]
      });
    }
  };

  if (authLoading || (user && !dataReady)) {
    return (
      <div className="min-h-screen bg-[#f9fafb]/70 flex items-center justify-center">
        <div className="w-8 h-8 border-[3px] border-[#ede0ff] border-t-[#7c3aed] rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  return (
    <div className="app-shell min-h-screen bg-[#f9fafb]/70 text-[#191c1d] flex flex-col font-sans selection:bg-[#eaddff] selection:text-[#630ed4]">
      {/* Top Header Navigation */}
      {activeTab !== 'personalizar' && (
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          preferences={preferences}
          gamification={gamification}
          onOpenBadgesModal={() => setIsBadgesModalOpen(true)}
          userEmail={user.email}
          onLogout={logout}
        />
      )}

      {/* Screen Views */}
      <main className="flex-1 pb-20 md:pb-0">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {activeTab === 'personalizar' && (
            <OnboardingForm
              initialValues={preferences}
              onGeneratePlan={handleGeneratePlan}
            />
          )}

          {activeTab === 'cronograma' && (
            <CronogramaView
              plan={plan}
              gamification={gamification}
              onToggleBlock={handleToggleBlock}
              onOpenTimer={(b) => setSelectedBlockForTimer(b)}
              onEditPreferences={() => setActiveTab('personalizar')}
              onOpenBadgesModal={() => setIsBadgesModalOpen(true)}
              onChangeDaySubject={handleChangeDaySubject}
              onAddDay={handleAddDay}
              onRemoveDay={handleRemoveDay}
            />
          )}

          {activeTab === 'incidencia' && <ChecklistIncidencia />}

          {activeTab === 'simulado' && (
            <div>
              <div className="max-w-3xl mx-auto px-4 pt-6 flex gap-2">
                <button
                  type="button"
                  onClick={() => setSimuladoMode('rapido')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    simuladoMode === 'rapido'
                      ? 'bg-[#7c3aed] text-white shadow-xs'
                      : 'bg-white border border-[#e1e3e4] text-[#4a4455] hover:border-[#7c3aed]'
                  }`}
                >
                  Treino Rápido
                </button>
                <button
                  type="button"
                  onClick={() => setSimuladoMode('completo')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    simuladoMode === 'completo'
                      ? 'bg-[#7c3aed] text-white shadow-xs'
                      : 'bg-white border border-[#e1e3e4] text-[#4a4455] hover:border-[#7c3aed]'
                  }`}
                >
                  Simulado Completo
                </button>
              </div>

              {simuladoMode === 'rapido' ? (
                <SimuladoTRI onAnswerQuestion={handleSimuladoAnswered} />
              ) : (
                <SimuladoCompleto onFinishedDia={handleSimuladoCompletoFinished} />
              )}
            </div>
          )}

          {activeTab === 'redacao' && (
            <RedacaoHub onEvaluationComplete={handleRedacaoEvaluated} />
          )}
        </motion.div>
      </main>

      {/* Focus Timer Modal */}
      {selectedBlockForTimer && (
        <PomodoroTimerModal
          block={selectedBlockForTimer}
          onClose={() => setSelectedBlockForTimer(null)}
          onCompleteBlock={handleCompleteBlock}
        />
      )}

      {/* Badges & Achievements Modal */}
      {isBadgesModalOpen && (
        <BadgesModal
          gamification={gamification}
          onClose={() => setIsBadgesModalOpen(false)}
        />
      )}

      {/* Badge or Level-Up Celebration Modal */}
      {celebration && (
        <BadgeUnlockCelebration
          badge={celebration.badge}
          isLevelUp={celebration.isLevelUp}
          newLevelTitle={celebration.newLevelTitle}
          newLevelNumber={celebration.newLevelNumber}
          onClose={() => setCelebration(null)}
        />
      )}

      <UpdateNotifier />
    </div>
  );
}
