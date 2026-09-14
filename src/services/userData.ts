import { supabase } from './supabase';
import { UserPreferences, UserGamificationState, GeneratedPlan, SpacedRepetitionState } from '../types';

const LEGACY_PREFS_KEY = 'sprint_enem_prefs';
const LEGACY_GAMIFICATION_KEY = 'sprint_enem_gamification';

export interface UserData {
  preferences: UserPreferences | null;
  gamification: UserGamificationState | null;
  plan: GeneratedPlan | null;
  spacedRepetition: SpacedRepetitionState | null;
}

function readLegacyLocalData(): UserData | null {
  try {
    const rawPrefs = localStorage.getItem(LEGACY_PREFS_KEY);
    const rawGamification = localStorage.getItem(LEGACY_GAMIFICATION_KEY);
    if (!rawPrefs && !rawGamification) return null;
    return {
      preferences: rawPrefs ? JSON.parse(rawPrefs) : null,
      gamification: rawGamification ? JSON.parse(rawGamification) : null,
      plan: null,
      spacedRepetition: null,
    };
  } catch {
    return null;
  }
}

function clearLegacyLocalData() {
  try {
    localStorage.removeItem(LEGACY_PREFS_KEY);
    localStorage.removeItem(LEGACY_GAMIFICATION_KEY);
  } catch {
    // safe fallback
  }
}

/**
 * Loads the signed-in user's data from Supabase. If no row exists yet, migrates
 * any pre-existing localStorage data (from before cloud sync existed) into a
 * fresh row so early testers don't lose their progress.
 */
export async function loadUserData(userId: string): Promise<UserData> {
  const { data, error } = await supabase
    .from('user_data')
    .select('preferences, gamification, plan, spaced_repetition')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) throw error;

  if (data) {
    return {
      preferences: data.preferences ?? null,
      gamification: data.gamification ?? null,
      plan: data.plan ?? null,
      spacedRepetition: data.spaced_repetition ?? null,
    };
  }

  const legacy = readLegacyLocalData();
  if (legacy) {
    await saveUserData(userId, legacy);
    clearLegacyLocalData();
    return legacy;
  }

  return { preferences: null, gamification: null, plan: null, spacedRepetition: null };
}

// A coluna spaced_repetition é snake_case por convenção do Postgres, mas o
// campo no app é spacedRepetition — por isso o upsert mapeia os campos
// individualmente em vez de espalhar `data` diretamente.
export async function saveUserData(userId: string, data: UserData): Promise<void> {
  const { error } = await supabase.from('user_data').upsert({
    user_id: userId,
    preferences: data.preferences,
    gamification: data.gamification,
    plan: data.plan,
    spaced_repetition: data.spacedRepetition,
    updated_at: new Date().toISOString(),
  });

  if (error) throw error;
}
