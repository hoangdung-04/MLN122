import { SCENARIOS } from '../data/scenarios.js';
import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { BADGES } from '../data/badges.js';
import { calculateMindsetMetrics } from './scoring.js';
import { sound } from './audio.js';

const STORAGE_KEY = 'mln122_philosophy_state_v1';

class StateManager {
  constructor() {
    this.listeners = [];
    this.state = this.loadState();
  }

  // Load from LocalStorage
  loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        return {
          xp: parsed.xp || 0,
          completedScenarios: parsed.completedScenarios || {},
          detectiveSolved: parsed.detectiveSolved || {},
          unlockedBadges: parsed.unlockedBadges || [],
          activeBadgePopup: null,
          sliderCompleted: !!parsed.sliderCompleted
        };
      }
    } catch (e) {
      console.warn('[MLN122] Failed to load localStorage state, starting fresh:', e);
    }

    // Default Fresh Clean State
    return {
      xp: 0,
      completedScenarios: {},
      detectiveSolved: {},
      unlockedBadges: [],
      activeBadgePopup: null,
      sliderCompleted: false
    };
  }

  // Save to LocalStorage
  saveState() {
    try {
      const copy = {
        xp: this.state.xp,
        completedScenarios: this.state.completedScenarios,
        detectiveSolved: this.state.detectiveSolved,
        unlockedBadges: this.state.unlockedBadges,
        sliderCompleted: this.state.sliderCompleted
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(copy));
    } catch (e) {
      console.warn('[MLN122] Failed to save state:', e);
    }
    this.notify();
  }

  // Subscribe to changes
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.listeners.forEach(cb => cb(this.state));
  }

  // Answer a scenario
  recordScenarioAnswer(scenarioId, optionId) {
    const scenario = SCENARIOS.find(s => s.id === scenarioId);
    if (!scenario) return null;

    const option = scenario.options.find(o => o.id === optionId);
    if (!option) return null;

    const prevEntry = this.state.completedScenarios[scenarioId];
    const isDialectical = option.isDialectical;

    this.state.completedScenarios[scenarioId] = {
      optionId,
      isDialectical,
      answeredAt: new Date().toISOString()
    };

    if (!prevEntry) {
      const points = isDialectical ? 50 : 25;
      this.state.xp += points;
    } else if (!prevEntry.isDialectical && isDialectical) {
      // Upgrade from standard to dialectical
      this.state.xp += 25;
    }

    // Play feedback sound
    if (isDialectical) {
      sound.playDialecticalSuccess();
    } else {
      sound.playWarning();
    }

    // Check badges
    this.checkBadges();
    this.saveState();

    return { scenario, option };
  }

  // Record Detective Case solved
  recordDetectiveSolved(caseId) {
    const caseData = DETECTIVE_CASES.find(c => c.id === caseId);
    if (!caseData) return;

    const isFirst = !this.state.detectiveSolved[caseId];
    this.state.detectiveSolved[caseId] = {
      solvedAt: new Date().toISOString(),
      xp: caseData.philosophicalVerdict.xpAwarded
    };

    if (isFirst) {
      this.state.xp += caseData.philosophicalVerdict.xpAwarded;
    }

    sound.playFanfare();
    this.checkBadges();
    this.saveState();
  }

  // Record Slider completed
  recordSliderLeap() {
    this.state.sliderCompleted = true;
    this.state.completedScenarios['C3-M3-SLIDER'] = {
      optionId: 'B',
      isDialectical: true,
      answeredAt: new Date().toISOString()
    };
    this.state.completedScenarios['C2-M3-SLIDER'] = {
      optionId: 'B',
      isDialectical: true,
      answeredAt: new Date().toISOString()
    };
    this.state.xp += 60;
    this.checkBadges();
    this.saveState();
  }

  // Check badges achievement triggers
  checkBadges() {
    const completedCount = Object.keys(this.state.completedScenarios).length;
    const solvedCases = Object.keys(this.state.detectiveSolved).length;
    const newlyUnlocked = [];

    const unlock = (badgeId) => {
      if (!this.state.unlockedBadges.includes(badgeId)) {
        this.state.unlockedBadges.push(badgeId);
        const b = BADGES.find(x => x.id === badgeId);
        if (b) newlyUnlocked.push(b);
      }
    };

    // 1. First Thinker
    if (completedCount >= 1) unlock('first-thinker');

    // 2. Value Master
    if (this.state.completedScenarios['C2-S1']?.isDialectical || this.state.completedScenarios['C2-S4']?.isDialectical) {
      unlock('value-master');
    }

    // 3. Surplus Value Decoder (Slider)
    if (this.state.sliderCompleted) {
      unlock('quantity-to-quality');
    }

    // 4. Economic Detective
    if (solvedCases >= 1) {
      unlock('philosophy-detective');
    }

    // 5. Monopoly Strategist
    if (this.state.completedScenarios['C4-S1']?.isDialectical || this.state.completedScenarios['C4-S3']?.isDialectical) {
      unlock('monopoly-challenger');
    }

    // 6. Harmonious Builder
    if (this.state.completedScenarios['C5-S1']?.isDialectical || this.state.completedScenarios['C5-S2']?.isDialectical) {
      unlock('social-harmonizer');
    }

    // 7. Master Political Economist
    if (completedCount >= 6 && solvedCases >= 1) {
      unlock('dialectical-thinker');
    }

    if (newlyUnlocked.length > 0) {
      this.state.activeBadgePopup = newlyUnlocked[0];
      sound.playFanfare();
    }
  }

  // Dismiss Badge Popup
  dismissBadgePopup() {
    this.state.activeBadgePopup = null;
    this.notify();
  }

  // Calculate Mindset Profile
  getProfile() {
    return calculateMindsetMetrics(this.state, SCENARIOS);
  }

  // Reset Progress
  resetProgress() {
    this.state = {
      xp: 0,
      completedScenarios: {},
      detectiveSolved: {},
      unlockedBadges: [],
      activeBadgePopup: null,
      sliderCompleted: false
    };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('[MLN122] Failed to clear localStorage:', e);
    }
    this.notify();
  }

  resetAllProgress() {
    this.resetProgress();
  }

  getTotalProgressPercent() {
    const totalItems = SCENARIOS.length + DETECTIVE_CASES.length;
    const completed = Object.keys(this.state.completedScenarios).length + Object.keys(this.state.detectiveSolved).length;
    if (totalItems === 0) return 0;
    return Math.min(100, Math.round((completed / totalItems) * 100));
  }
}

export const stateManager = new StateManager();
