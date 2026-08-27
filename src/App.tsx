import React, { useState, useEffect } from 'react';
import { UserPreferences, GeneratedPlan, StudyBlock, UserGamificationState, Badge } from './types';
import { generateStudyPlan } from './data/enemData';
import { getInitialGamificationState, processGamificationEvent, getLevelInfo } from './data/gamificationData';
import { OnboardingForm } from './components/OnboardingForm';
import { Header } from './components/Header';
import { CronogramaView } from './components/CronogramaView';
import { ChecklistIncidencia } from './components/ChecklistIncidencia';
import { SimuladoTRI } from './components/SimuladoTRI';
import { RedacaoHub } from './components/RedacaoHub';
import { PomodoroTimerModal } from './components/PomodoroTimerModal';
import { BadgesModal } from './components/BadgesModal';
import { BadgeUnlockCelebration } from './components/BadgeUnlockCelebration';

const DEFAULT_PREFERENCES: UserPreferences = {
  curso: 'Medicina',
  tempoDia: '2h',
  diasSemana: 5,
  nivel: 'intermediario',
  dificuldades: ['matematica', 'linguagens']
};

export default function App() {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    try {
      const saved = localStorage.getItem('sprint_enem_prefs');
      return saved ? JSON.parse(saved) : DEFAULT_PREFERENCES;
    } catch {
      return DEFAULT_PREFERENCES;
    }
  });

  const [gamification, setGamification] = useState<UserGamificationState>(() => {
    try {
      const saved = localStorage.getItem('sprint_enem_gamification');
      return saved ? JSON.parse(saved) : getInitialGamificationState();
    } catch {
      return getInitialGamificationState();
    }
  });

  const [activeTab, setActiveTab] = useState<'personalizar' | 'cronograma' | 'incidencia' | 'simulado' | 'redacao'>('personalizar');
  const [plan, setPlan] = useState<GeneratedPlan>(() => generateStudyPlan(preferences));
  const [selectedBlockForTimer, setSelectedBlockForTimer] = useState<StudyBlock | null>(null);
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);

  const [celebration, setCelebration] = useState<{
    badge?: Badge | null;
    isLevelUp?: boolean;
    newLevelTitle?: string;
    newLevelNumber?: number;
  } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('sprint_enem_prefs', JSON.stringify(preferences));
    } catch {
      // safe fallback
    }
  }, [preferences]);

  useEffect(() => {
    try {
      localStorage.setItem('sprint_enem_gamification', JSON.stringify(gamification));
    } catch {
      // safe fallback
    }
  }, [gamification]);

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
    for (const day of plan.weeklySchedule) {
      const found = day.blocks.find((b) => b.id === blockId);
      if (found) {
        blockDuration = found.durationMinutes || 25;
        break;
      }
    }

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

  return (
    <div className="min-h-screen bg-[#f9fafb] text-[#191c1d] flex flex-col font-sans selection:bg-[#eaddff] selection:text-[#630ed4]">
      {/* Top Header Navigation */}
      {activeTab !== 'personalizar' && (
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          preferences={preferences}
          gamification={gamification}
          onOpenBadgesModal={() => setIsBadgesModalOpen(true)}
        />
      )}

      {/* Screen Views */}
      <main className="flex-1">
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
          />
        )}

        {activeTab === 'incidencia' && <ChecklistIncidencia />}

        {activeTab === 'simulado' && (
          <SimuladoTRI onAnswerQuestion={handleSimuladoAnswered} />
        )}

        {activeTab === 'redacao' && (
          <RedacaoHub onEvaluationComplete={handleRedacaoEvaluated} />
        )}
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
    </div>
  );
}
