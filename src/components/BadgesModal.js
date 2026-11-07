import { BADGES } from '../data/badges.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderBadgesModal(container, onClose) {
  const state = stateManager.state;
  const unlockedBadges = state.unlockedBadges;

  let badgesHTML = '';
  BADGES.forEach(b => {
    const isUnlocked = unlockedBadges.includes(b.id);
    badgesHTML += `
      <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}">
        <div class="badge-icon">${b.icon}</div>
        <h4 style="color: ${isUnlocked ? 'var(--text-heading)' : 'var(--text-dim)'}; font-family: var(--font-heading);">${b.name}</h4>
        <div style="font-size: 0.78rem; color: var(--accent-gold); font-weight: 800; margin-bottom: 0.35rem; font-family: var(--font-heading);">${b.nameVi}</div>
        <p style="margin-bottom: 0.65rem; color: var(--text-muted); font-size: 0.85rem; line-height: 1.5;">${b.desc}</p>
        <div style="font-size: 0.75rem; color: ${isUnlocked ? 'var(--accent-emerald)' : 'var(--text-dim)'}; font-weight: 700; border-top: 1px dashed var(--border-subtle); padding-top: 0.5rem; font-family: var(--font-heading);">
          ${isUnlocked ? '✓ ĐÃ MỞ KHÓA' : `Điều kiện: ${b.requirement}`}
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="modal-overlay open" id="badges-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 820px;">
        <button class="modal-close-btn" id="badges-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 1.8rem;">
          <h2 style="font-size: 1.8rem; margin-bottom: 0.4rem; color: var(--text-heading);">Bảng Vinh Danh Huy Hiệu</h2>
          <p style="font-size: 0.92rem; color: var(--text-muted);">
            Bạn đã mở khóa <strong style="color: var(--accent-gold);">${unlockedBadges.length}</strong> / <strong>${BADGES.length}</strong> danh hiệu kinh tế chính trị.
          </p>
        </div>

        <div class="badges-grid">
          ${badgesHTML}
        </div>
      </div>
    </div>
  `;

  document.getElementById('badges-close-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });
  document.getElementById('badges-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'badges-modal-overlay') {
      sound.playClick();
      onClose();
    }
  });
}
