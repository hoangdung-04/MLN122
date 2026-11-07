import { stateManager } from '../core/state.js';
import { generateRadarChartSVG } from '../core/scoring.js';
import { DIMENSIONS } from '../data/archetypes.js';
import { sound } from '../core/audio.js';

export function renderProfileModal(container, onClose) {
  const profile = stateManager.getProfile();
  const archetype = profile.archetype;
  const radarSVG = generateRadarChartSVG(profile.dimensionScores, 300);

  let dimensionsListHTML = '';
  DIMENSIONS.forEach(dim => {
    const val = profile.dimensionScores[dim.key] || 50;
    dimensionsListHTML += `
      <div style="margin-bottom: 1.1rem;">
        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; font-weight: 700; margin-bottom: 0.35rem; font-family: var(--font-heading);">
          <span style="color: var(--text-heading);">${dim.name}</span>
          <span style="color: ${dim.color};">${val}%</span>
        </div>
        <div style="width: 100%; height: 9px; background: var(--border-subtle); border-radius: var(--radius-full); overflow: hidden;">
          <div style="width: ${val}%; height: 100%; background: ${dim.color}; border-radius: var(--radius-full); transition: width 0.8s var(--ease-spring);"></div>
        </div>
        <div style="font-size: 0.76rem; color: var(--text-dim); margin-top: 0.25rem;">${dim.desc}</div>
      </div>
    `;
  });

  let strengthsHTML = '';
  archetype.strengths.forEach(s => {
    strengthsHTML += `<li style="margin-bottom: 0.4rem; color: var(--text-main);">✓ ${s}</li>`;
  });

  container.innerHTML = `
    <div class="modal-overlay open" id="profile-modal-overlay">
      <div class="modal-content animate-slide-up" style="max-width: 840px;" id="certificate-print-area">
        <button class="modal-close-btn" id="profile-close-btn">✕</button>

        <div style="text-align: center; margin-bottom: 2rem;">
          <span class="badge-pill" style="background: var(--accent-blue-light); color: var(--accent-blue); border: 1px solid rgba(37, 99, 235, 0.3);">
            CHỨNG NHẬN TƯ DUY KINH TẾ CHÍNH TRỊ • MLN122
          </span>
          <h2 style="font-size: 1.9rem; margin: 0.6rem 0 0.3rem; color: var(--text-heading);">Hồ Sơ Tư Duy Kinh Tế Chính Trị Của Bạn</h2>
          <p style="font-size: 0.92rem; color: var(--text-muted);">
            Được phân tích từ quá trình xử lý tình huống thực tế và phá án điều tra kinh tế.
          </p>
        </div>

        <!-- Main Archetype Banner -->
        <div style="background: var(--bg-alt); border: 2.5px solid ${archetype.accentColor}; border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 2.2rem; position: relative; overflow: hidden; box-shadow: 0 8px 25px -5px rgba(15, 23, 42, 0.05);">
          <div style="display: flex; gap: 1.6rem; align-items: center; flex-wrap: wrap;">
            <div style="font-size: 4.2rem; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.12));">
              ${archetype.icon}
            </div>
            <div style="flex-grow: 1;">
              <div style="font-size: 0.8rem; font-weight: 800; letter-spacing: 0.08em; color: ${archetype.accentColor}; font-family: var(--font-heading); text-transform: uppercase;">
                HÌNH MẪU TƯ DUY (ARCHETYPE)
              </div>
              <h3 style="font-size: 1.7rem; color: var(--text-heading); margin-bottom: 0.35rem; font-family: var(--font-heading);">
                ${archetype.title}
              </h3>
              <p style="color: var(--accent-gold); font-size: 0.96rem; font-style: italic; margin-bottom: 0.65rem; font-weight: 600;">
                "${archetype.tagline}"
              </p>
              <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.68;">
                ${archetype.description}
              </p>
            </div>
          </div>

          <div style="margin-top: 1.4rem; padding-top: 1.4rem; border-top: 1.5px solid var(--border-subtle); display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem;">
            <div>
              <strong style="font-size: 0.84rem; color: var(--accent-blue); display: block; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                ĐIỂM MẠNH TƯ DUY:
              </strong>
              <ul style="list-style: none; padding: 0; font-size: 0.86rem; line-height: 1.6;">
                ${strengthsHTML}
              </ul>
            </div>
            <div>
              <strong style="font-size: 0.84rem; color: var(--accent-gold); display: block; margin-bottom: 0.5rem; font-family: var(--font-heading);">
                LỜI KHUYÊN PHÁT TRIỂN:
              </strong>
              <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.6;">
                ${archetype.lifeAdvice}
              </p>
            </div>
          </div>
        </div>

        <!-- 5-Dimensional Radar & Progress Bars -->
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 2.2rem; align-items: center;">
          <div style="text-align: center;">
            <h4 style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 0.8rem;">Biểu Đồ Radar 5 Chiều</h4>
            <div style="display: flex; justify-content: center;">
              ${radarSVG}
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.7rem; font-family: var(--font-heading);">
              Điểm tổng hợp trung bình: <strong style="color: var(--accent-blue); font-size: 1.05rem;">${profile.averageScore}%</strong>
            </div>
          </div>

          <div>
            <h4 style="font-size: 1.1rem; color: var(--text-heading); margin-bottom: 1.1rem;">Chi Tiết Từng Chiều Tư Duy</h4>
            ${dimensionsListHTML}
          </div>
        </div>

        <!-- Actions -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 2.5rem; padding-top: 1.6rem; border-top: 1.5px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
          <div style="font-size: 0.82rem; color: var(--text-dim); max-width: 320px;">
            * Kết quả phản ánh mức độ vận dụng lý luận Kinh tế chính trị Mác - Lênin trong các tình huống mô phỏng.
          </div>
          <div style="display: flex; gap: 0.85rem; flex-wrap: wrap;">
            <button class="nav-btn" id="profile-reset-btn" style="border-color: rgba(220, 38, 38, 0.35); color: var(--accent-crimson);">
              <span>↺ Làm Lại Từ Đầu</span>
            </button>
            <button class="nav-btn" id="print-certificate-btn">
              <span>🖨️ In / Lưu Chứng Nhận</span>
            </button>
            <button class="btn-primary" id="profile-done-btn">
              <span>ĐÓNG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Listeners
  document.getElementById('profile-close-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });

  document.getElementById('profile-done-btn').addEventListener('click', () => {
    sound.playClick();
    onClose();
  });

  document.getElementById('profile-modal-overlay').addEventListener('click', (e) => {
    if (e.target.id === 'profile-modal-overlay') {
      sound.playClick();
      onClose();
    }
  });

  const resetBtn = document.getElementById('profile-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sound.playClick();
      if (confirm('Bạn có chắc chắn muốn làm lại từ đầu không?')) {
        stateManager.resetAllProgress();
        sound.playComplete();
        renderProfileModal(container, onClose);
      }
    });
  }

  const printBtn = document.getElementById('print-certificate-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      sound.playClick();
      window.print();
    });
  }
}
