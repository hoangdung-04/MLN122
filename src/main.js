import { stateManager } from './core/state.js';
import { SCENARIOS } from './data/scenarios.js';
import { DETECTIVE_CASES } from './data/detectiveCases.js';
import { renderNavbar } from './components/Navbar.js';
import { renderLandingHero } from './components/LandingHero.js';
import { renderChapterMap } from './components/ChapterMap.js';
import { renderScenarioPlayer } from './components/ScenarioPlayer.js';
import { renderInteractiveSlider } from './components/InteractiveSlider.js';
import { renderDetectiveBureau } from './components/DetectiveBureau.js';
import { renderProfileModal } from './components/ProfileModal.js';
import { renderBadgesModal } from './components/BadgesModal.js';
import { renderHandbookModal } from './components/HandbookModal.js';
import { renderBadgeUnlockPopup } from './components/BadgeUnlockPopup.js';

// DOM Containers
const navContainer = document.getElementById('navbar-container');
const mainContainer = document.getElementById('main-content-container');
const modalContainer = document.getElementById('modal-container');
const popupContainer = document.getElementById('popup-container');

// Theme Initialization (Default: Bright / Light Theme)
const savedTheme = localStorage.getItem('mln122_theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);

// Current App State
let currentView = 'landing'; // 'landing' | 'map' | 'scenario' | 'detective' | 'slider'
let currentScenarioId = null;
let currentCaseId = null;

// Route handler
function navigateTo(view, param = null) {
  currentView = view;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (view === 'scenario') {
    currentScenarioId = param;
    if (param === 'C2-M3-SLIDER' || param === 'C3-M3-SLIDER') {
      currentView = 'slider';
    }
  } else if (view === 'detective') {
    currentCaseId = param || DETECTIVE_CASES[0].id;
  }

  renderApp();
}

function handleNextScenario(currentId) {
  const currentIndex = SCENARIOS.findIndex(s => s.id === currentId);
  if (currentIndex >= 0 && currentIndex < SCENARIOS.length - 1) {
    const nextScenario = SCENARIOS[currentIndex + 1];
    navigateTo('scenario', nextScenario.id);
  } else {
    // Reached end of curriculum scenarios, offer Detective Mode
    navigateTo('detective');
  }
}

// Modal handler
function openModal(modalType) {
  if (modalType === 'profile') {
    renderProfileModal(modalContainer, closeModal);
  } else if (modalType === 'badges') {
    renderBadgesModal(modalContainer, closeModal);
  } else if (modalType === 'handbook') {
    renderHandbookModal(modalContainer, closeModal);
  }
}

function closeModal() {
  modalContainer.innerHTML = '';
}

function handleResetProgress() {
  const hasProgress = stateManager.state.xp > 0 || 
    Object.keys(stateManager.state.completedScenarios).length > 0 || 
    Object.keys(stateManager.state.detectiveSolved).length > 0;

  if (hasProgress) {
    if (confirm('Bạn có muốn làm lại từ đầu không? Toàn bộ tiến trình làm bài và điểm số sẽ được đặt lại về 0.')) {
      stateManager.resetProgress();
      navigateTo('map');
    }
  } else {
    stateManager.resetProgress();
    navigateTo('map');
  }
}

// Main Render Function
function renderApp() {
  // Always update Navbar
  renderNavbar(navContainer, navigateTo, openModal, handleResetProgress);

  // Render Active View
  if (currentView === 'landing') {
    renderLandingHero(mainContainer, navigateTo);
  } else if (currentView === 'map') {
    renderChapterMap(
      mainContainer, 
      (scenarioId) => navigateTo('scenario', scenarioId),
      (caseId) => navigateTo('detective', caseId),
      handleResetProgress
    );
  } else if (currentView === 'scenario') {
    renderScenarioPlayer(
      mainContainer, 
      currentScenarioId, 
      () => navigateTo('map'),
      handleNextScenario
    );
  } else if (currentView === 'slider') {
    renderInteractiveSlider(
      mainContainer,
      () => navigateTo('map')
    );
  } else if (currentView === 'detective') {
    renderDetectiveBureau(
      mainContainer,
      currentCaseId,
      () => navigateTo('map'),
      (nextCaseId) => navigateTo('detective', nextCaseId)
    );
  }

  // Check Badge Popup
  if (stateManager.state.activeBadgePopup) {
    renderBadgeUnlockPopup(
      popupContainer,
      stateManager.state.activeBadgePopup,
      () => {
        stateManager.dismissBadgePopup();
        popupContainer.innerHTML = '';
      }
    );
  } else {
    popupContainer.innerHTML = '';
  }
}

// Subscribe to state changes
stateManager.subscribe(() => {
  renderNavbar(navContainer, navigateTo, openModal, handleResetProgress);
  if (currentView === 'map') {
    renderChapterMap(
      mainContainer, 
      (scenarioId) => navigateTo('scenario', scenarioId),
      (caseId) => navigateTo('detective', caseId),
      handleResetProgress
    );
  }
  if (stateManager.state.activeBadgePopup) {
    renderBadgeUnlockPopup(
      popupContainer,
      stateManager.state.activeBadgePopup,
      () => {
        stateManager.dismissBadgePopup();
        popupContainer.innerHTML = '';
      }
    );
  }
});

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
