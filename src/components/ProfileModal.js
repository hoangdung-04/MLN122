import { stateManager } from '../core/state.js';
import { generateRadarChartSVG } from '../core/scoring.js';
import { DIMENSIONS } from '../data/archetypes.js';
import { CHAPTERS } from '../data/chapters.js';
import { SCENARIOS } from '../data/scenarios.js';
import { sound } from '../core/audio.js';

export function renderProfileModal(container, onClose) {
  const profile = stateManager.getProfile();
  const archetype = profile.archetype;
  const radarSVG = generateRadarChartSVG(profile.dimensionScores, 300);
  const state = stateManager.state;
  const completedScenarios = state.completedScenarios || {};

  // 1. 5 Dimensions Progress Bars HTML
  let dimensionsListHTML = '';
  DIMENSIONS.forEach(dim => {
    const val = profile.dimensionScores[dim.key] || 50;
    dimensionsListHTML += `
      <div class="profile-dim-item">
        <div class="profile-dim-head">
          <span class="dim-name">${dim.name}</span>
          <span class="dim-val" style="color: ${dim.color};">${val}%</span>
        </div>
        <div class="profile-progress-track">
          <div class="profile-progress-fill" style="width: ${val}%; background: ${dim.color};"></div>
        </div>
        <div class="dim-desc">${dim.desc}</div>
      </div>
    `;
  });

  // 2. Strengths List HTML
  let strengthsHTML = '';
  archetype.strengths.forEach(s => {
    strengthsHTML += `<li><span class="chk-icon">✓</span> <span>${s}</span></li>`;
  });

  // 3. 6 Chapter Competency Cards (Slide Curriculum Matrix)
  let curriculumCardsHTML = '';
  CHAPTERS.forEach(ch => {
    const chScenarios = SCENARIOS.filter(s => s.chapter === ch.id);
    const completedCount = chScenarios.filter(s => completedScenarios[s.id]).length;
    const isCompleted = completedCount === chScenarios.length && chScenarios.length > 0;
    const percent = chScenarios.length > 0 ? Math.round((completedCount / chScenarios.length) * 100) : 0;

    let modulesHTML = '';
    ch.modules.forEach(m => {
      modulesHTML += `
        <div class="curriculum-mod-tag">
          <span class="mod-dot" style="background: ${ch.accentColor};"></span>
          <span>${m.title}</span>
        </div>
      `;
    });

    curriculumCardsHTML += `
      <div class="profile-chapter-card" style="--ch-color: ${ch.accentColor};">
        <div class="profile-chapter-head">
          <div>
            <span class="badge-pill ch-code-pill" style="background: ${ch.accentColor}18; color: ${ch.accentColor}; border: 1px solid ${ch.accentColor}40;">
              ${ch.code} • ${ch.badge}
            </span>
            <h5 class="profile-ch-title">${ch.title}</h5>
          </div>
          <div class="ch-status-box">
            ${isCompleted 
              ? `<span class="badge-pill ch-done-pill">✓ ĐÃ HOÀN THÀNH</span>` 
              : `<span class="badge-pill ch-learning-pill">${completedCount}/${chScenarios.length} Tình huống (${percent}%)</span>`
            }
          </div>
        </div>

        <div class="profile-progress-track" style="margin: 0.65rem 0 0.85rem; height: 6px;">
          <div class="profile-progress-fill" style="width: ${percent}%; background: ${ch.accentColor};"></div>
        </div>

        <div class="curriculum-modules-wrap">
          <div class="curriculum-mod-label" style="color: ${ch.accentColor};">Trọng tâm kiến thức cốt lõi (Slide bài giảng):</div>
          <div class="curriculum-modules-grid">
            ${modulesHTML}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="profile-fullscreen-overlay open" id="profile-modal-overlay">
      <div class="profile-fullscreen-page" id="certificate-print-area">
        <!-- Top Sticky Header Navigation Bar -->
        <header class="profile-top-navbar">
          <div class="profile-header-left">
            <button class="profile-back-pill" id="profile-close-btn" title="Quay lại bản đồ (Esc)">
              <span>← Đóng &amp; Quay lại bản đồ</span>
            </button>
          </div>
          <div class="profile-top-title">
            <span>HỒ SƠ TƯ DUY KINH TẾ CHÍNH TRỊ • MLN122</span>
          </div>
          <div class="profile-top-actions">
            <button class="profile-action-btn" id="print-certificate-btn" title="In / Lưu PDF">
              <span>🖨️ In / Lưu PDF</span>
            </button>
            <button class="profile-action-btn danger" id="profile-reset-btn" title="Làm lại từ đầu">
              <span>↺ Làm Lại</span>
            </button>
            <button class="profile-close-x-btn" id="profile-top-x-btn" title="Đóng hồ sơ (Esc)">✕</button>
          </div>
        </header>

        <!-- Main Scrollable Fullscreen Container -->
        <main class="profile-main-content">
          <!-- Top Header Banner -->
          <div class="profile-modal-head">
            <div class="profile-cert-badge">
              <span class="badge-pill cert-pill">
                ✨ CHỨNG NHẬN TƯ DUY KINH TẾ CHÍNH TRỊ • MLN122
              </span>
              <span class="cert-sub-tag">Chuẩn Giáo trình Bộ GD&amp;ĐT &amp; Slide bài giảng</span>
            </div>
            <h1 class="profile-title">Hồ Sơ Tư Duy Kinh Tế Chính Trị Của Bạn</h1>
            <p class="profile-subtitle">
              Hệ thống phân tích mức độ am hiểu lý luận, phản xạ thị trường và bài học thực tiễn qua toàn bộ 6 chương môn học MLN122.
            </p>
          </div>

          <!-- Section 1: Main Archetype Banner (Wide Showcase) -->
          <div class="profile-archetype-box" style="--archetype-color: ${archetype.accentColor};">
            <div class="archetype-hero-split">
              <!-- Left: Avatar, Title, Quote, Description -->
              <div class="archetype-left-col">
                <div class="archetype-badge-row">
                  <div class="archetype-icon-wrap animate-float">
                    ${archetype.icon}
                  </div>
                  <div>
                    <div class="archetype-pre-title" style="color: ${archetype.accentColor};">
                      HÌNH MẪU TƯ DUY (ARCHETYPE)
                    </div>
                    <h2 class="archetype-name">${archetype.title}</h2>
                    <div class="archetype-tagline-box">
                      <span class="quote-symbol">“</span>
                      <span class="tagline-text">${archetype.tagline}</span>
                      <span class="quote-symbol">”</span>
                    </div>
                  </div>
                </div>
                <p class="archetype-desc">
                  ${archetype.description}
                </p>
              </div>

              <!-- Right: Strengths and Advice -->
              <div class="archetype-right-col">
                <div class="advice-col strengths-col">
                  <div class="advice-col-title" style="color: var(--accent-blue);">
                    <span>🎯</span>
                    <span>ĐIỂM MẠNH TƯ DUY:</span>
                  </div>
                  <ul class="strengths-list">
                    ${strengthsHTML}
                  </ul>
                </div>

                <div class="advice-col advice-col-gold">
                  <div class="advice-col-title" style="color: var(--accent-gold);">
                    <span>💡</span>
                    <span>LỜI KHUYÊN PHÁT TRIỂN BẢN THÂN:</span>
                  </div>
                  <p class="advice-text">
                    ${archetype.lifeAdvice}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2: 5-Dimensional Radar & Progress Bars -->
          <div class="profile-radar-section">
            <div class="radar-visual-col">
              <h3 class="section-block-title">Biểu Đồ Radar 5 Chiều Năng Lực</h3>
              <div class="radar-svg-container">
                ${radarSVG}
              </div>
              <div class="radar-score-pill">
                Điểm năng lực tổng hợp: <strong style="color: var(--accent-blue);">${profile.averageScore}%</strong>
              </div>
            </div>

            <div class="radar-bars-col">
              <h3 class="section-block-title">Chi Tiết Từng Chiều Tư Duy Thực Nghiệm</h3>
              <div class="dimensions-bars-list">
                ${dimensionsListHTML}
              </div>
            </div>
          </div>

          <!-- Section 3: Comprehensive 6-Chapter Competency Matrix (Slide bài giảng) -->
          <div class="profile-curriculum-section">
            <div class="curriculum-sec-header">
              <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                <span class="badge-pill" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.12), rgba(16, 185, 129, 0.15)); color: var(--accent-blue); border: 1.5px solid rgba(37, 99, 235, 0.35); font-weight: 850; font-family: var(--font-heading);">
                  🎓 KHUNG TRI THỨC 6 CHƯƠNG MLN122
                </span>
                <span style="font-size: 0.85rem; color: var(--text-dim); font-weight: 700;">(Chuẩn Slide bài giảng &amp; Giáo trình Bộ GD&amp;ĐT)</span>
              </div>
              <h3 class="curriculum-sec-title">Chi Tiết Năng Lực Lý Luận Từng Chương Môn Học</h3>
              <p class="curriculum-sec-desc">
                Đối chiếu toàn bộ các đề mục học tập (Chương 1 đến Chương 6) từ quy luật giá trị, giá trị thặng dư đến thể chế KTTT định hướng XHCN và chiến lược công nghiệp hóa, hiện đại hóa, hội nhập quốc tế.
              </p>
            </div>

            <div class="curriculum-cards-grid">
              ${curriculumCardsHTML}
            </div>
          </div>

          <!-- Footer Actions Bar -->
          <footer class="profile-footer-bar">
            <div class="footer-note-text">
              * Kết quả hồ sơ được tính toán độc lập từ thuật toán đánh giá đa chiều MLN122 dựa trên lựa chọn tình huống và phá án kinh tế.
            </div>
            <div class="footer-btn-group">
              <button class="nav-btn" id="profile-bottom-reset-btn" style="border-color: rgba(220, 38, 38, 0.35); color: var(--accent-crimson);">
                <span>↺ Làm Lại Từ Đầu</span>
              </button>
              <button class="nav-btn" id="print-certificate-bottom-btn" style="border-color: rgba(37, 99, 235, 0.35); color: var(--accent-blue);">
                <span>🖨️ In / Lưu Chứng Nhận</span>
              </button>
              <button class="btn-primary" id="profile-done-btn">
                <span>✕ ĐÓNG HỒ SƠ TƯ DUY</span>
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  `;

  // Attach Event Listeners
  const closeBtn = document.getElementById('profile-close-btn');
  const topXBtn = document.getElementById('profile-top-x-btn');
  const doneBtn = document.getElementById('profile-done-btn');
  const resetBtn = document.getElementById('profile-reset-btn');
  const bottomResetBtn = document.getElementById('profile-bottom-reset-btn');
  const printBtn = document.getElementById('print-certificate-btn');
  const printBottomBtn = document.getElementById('print-certificate-bottom-btn');

  function handleClose() {
    sound.playClick();
    document.body.style.overflow = '';
    window.removeEventListener('keydown', handleKeyDown);
    onClose();
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }

  window.addEventListener('keydown', handleKeyDown);
  if (closeBtn) closeBtn.addEventListener('click', handleClose);
  if (topXBtn) topXBtn.addEventListener('click', handleClose);
  if (doneBtn) doneBtn.addEventListener('click', handleClose);

  function handleReset() {
    sound.playClick();
    if (confirm('Bạn có chắc chắn muốn làm lại từ đầu không? Toàn bộ tiến trình tình huống và điểm số sẽ được thiết lập lại.')) {
      stateManager.resetAllProgress();
      sound.playComplete();
      renderProfileModal(container, onClose);
    }
  }

  if (resetBtn) resetBtn.addEventListener('click', handleReset);
  if (bottomResetBtn) bottomResetBtn.addEventListener('click', handleReset);

  function handlePrint() {
    sound.playClick();
    window.print();
  }

  if (printBtn) printBtn.addEventListener('click', handlePrint);
  if (printBottomBtn) printBottomBtn.addEventListener('click', handlePrint);
}
