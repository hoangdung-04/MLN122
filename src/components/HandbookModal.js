import { HANDBOOK_ENTRIES } from '../data/handbook.js';
import { sound } from '../core/audio.js';

export function renderHandbookModal(container, onClose) {
  let chaptersHTML = '';

  HANDBOOK_ENTRIES.forEach(ch => {
    let topicsHTML = '';
    ch.topics.forEach(t => {
      topicsHTML += `
        <div style="background: var(--bg-alt); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.35rem; margin-bottom: 1.1rem; box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);">
          <h4 style="font-size: 1.08rem; color: var(--accent-blue); margin-bottom: 0.5rem; font-family: var(--font-heading);">
            📌 ${t.title}
          </h4>
          <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.68; margin-bottom: 0.75rem;">
            <strong style="color: var(--text-heading);">Lý thuyết cốt lõi:</strong> ${t.summary}
          </p>
          <div style="background: var(--accent-gold-light); border-left: 3.5px solid var(--accent-gold); padding: 0.75rem 1rem; font-size: 0.92rem; color: var(--accent-amber); border-radius: 0 var(--radius-xs) var(--radius-xs) 0; font-weight: 500; line-height: 1.6;">
            💡 <strong>Vận dụng vào đời sống:</strong> ${t.lifeLesson}
          </div>
        </div>
      `;
    });

    chaptersHTML += `
      <div style="margin-bottom: 2.2rem;">
        <h3 style="font-size: 1.35rem; color: var(--text-heading); border-bottom: 1.5px solid var(--border-subtle); padding-bottom: 0.5rem; margin-bottom: 1.2rem; font-family: var(--font-heading);">
          Chương ${ch.chapter}: ${ch.chapterTitle}
        </h3>
        <div>${topicsHTML}</div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="modal-overlay open" id="handbook-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 820px;">
        <button class="modal-close-btn" id="handbook-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 1.8rem;">
          <h2 style="font-size: 1.8rem; margin-bottom: 0.4rem; color: var(--text-heading);">Sổ Tay Triết Học Bỏ Túi</h2>
          <p style="font-size: 0.95rem; color: var(--text-muted);">
            Tóm lược kiến thức môn MLN122 gắn liền trực tiếp với bài học thực tiễn đời sống.
          </p>
        </div>

        <div>
          ${chaptersHTML}
        </div>
      </div>
    </div>
  `;

  document.getElementById('handbook-close-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });
  document.getElementById('handbook-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'handbook-modal-overlay') {
      sound.playClick();
      onClose();
    }
  });
}
