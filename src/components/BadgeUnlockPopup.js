import { sound } from '../core/audio.js';

export function renderBadgeUnlockPopup(container, badge, onDismiss) {
  if (!badge) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
    <div class="badge-popup-overlay" id="badge-popup-backdrop">
      <div class="badge-popup-card">
        <div class="badge-popup-icon">${badge.icon}</div>
        <div style="font-size: 0.82rem; font-weight: 800; letter-spacing: 0.1em; color: var(--text-dim); text-transform: uppercase; font-family: var(--font-heading);">
          🎉 BẠN VỪA MỞ KHÓA HUY HIỆU MỚI!
        </div>
        <h3 class="badge-popup-title">${badge.name}</h3>
        <div style="font-size: 0.98rem; color: var(--accent-gold); font-weight: 800; margin-bottom: 0.85rem; font-family: var(--font-heading);">
          ${badge.nameVi}
        </div>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 1.8rem;">
          ${badge.desc}
        </p>
        <button class="btn-primary" id="claim-badge-btn" style="width: 100%; justify-content: center; padding: 0.85rem 1.8rem; font-size: 1rem;">
          <span>TUYỆT VỜI, TIẾP TỤC!</span>
        </button>
      </div>
    </div>
  `;

  document.getElementById('claim-badge-btn').addEventListener('click', () => {
    sound.playClick();
    onDismiss();
  });

  document.getElementById('badge-popup-backdrop').addEventListener('click', (e) => {
    if (e.target.id === 'badge-popup-backdrop') {
      sound.playClick();
      onDismiss();
    }
  });
}
