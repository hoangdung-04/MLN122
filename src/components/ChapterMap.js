import { CHAPTERS, SPECIAL_MODULES } from '../data/chapters.js';
import { SCENARIOS } from '../data/scenarios.js';
import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';
import { resolveAssetUrl } from '../utils/assetUrl.js';

export function renderChapterMap(container, onSelectScenario, onSelectDetective, onResetProgress, onSelectTycoon) {
  const state = stateManager.state;
  const completedScenarios = state.completedScenarios;
  const detectiveSolved = state.detectiveSolved;
  const totalCompleted = Object.keys(completedScenarios).length + Object.keys(detectiveSolved).length;
  const totalItems = SCENARIOS.length + DETECTIVE_CASES.length;
  const progressPercent = stateManager.getTotalProgressPercent();

  let chaptersHTML = '';

  CHAPTERS.forEach(ch => {
    // Filter scenarios for this chapter
    const chScenarios = SCENARIOS.filter(s => s.chapter === ch.id);
    const completedInChapter = chScenarios.filter(s => completedScenarios[s.id]).length;
    const isFinished = completedInChapter === chScenarios.length && chScenarios.length > 0;

    let scenariosCardsHTML = '';

    chScenarios.forEach(sc => {
      const isCompleted = !!completedScenarios[sc.id];
      const isDialectical = completedScenarios[sc.id]?.isDialectical;
      const isSlider = sc.type === 'slider';

      scenariosCardsHTML += `
        <div class="scenario-item-card ${isCompleted ? 'completed' : ''}" data-id="${sc.id}" style="--card-accent: ${ch.accentColor};">
          <div class="scenario-thumb-wrapper">
            <img class="scenario-item-img" src="${resolveAssetUrl(sc.image)}" alt="${sc.title}" loading="lazy" onerror="this.onerror=null; this.src='${sc.image}'; this.style.opacity='0.4'" />
            <div class="scenario-status-badge">
              ${isCompleted 
                ? (isDialectical 
                    ? '<span class="badge-pill" style="background: var(--accent-emerald); color: #ffffff;">✓ Đạt</span>' 
                    : '<span class="badge-pill" style="background: var(--accent-gold); color: #ffffff;">✓ Đã Làm</span>')
                : (isSlider 
                    ? '<span class="badge-pill" style="background: linear-gradient(135deg, #ec4899, #f43f5e); color: #ffffff;">⚡ Tương Tác</span>'
                    : '<span class="badge-pill" style="background: var(--bg-card); color: var(--text-dim); border: 1px solid var(--border-subtle);">Chưa làm</span>')
              }
            </div>
          </div>
          <div>
            <div class="topic-tag" style="color: ${ch.accentColor};">${sc.topic}</div>
            <h4>${sc.title}</h4>
            <p style="font-size: 0.86rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.55;">
              ${sc.situation}
            </p>
          </div>
          <div class="scenario-card-footer">
            <span class="scenario-concept-label" title="${sc.philosophyConcept}">${sc.philosophyConcept}</span>
            <span class="scenario-cta-btn" style="color: ${ch.accentColor};">Khám phá →</span>
          </div>
        </div>
      `;
    });

    const modulesStripHTML = (ch.modules && ch.modules.length > 0) ? `
      <div class="chapter-curriculum-strip">
        <div class="curriculum-strip-title">
          <span class="strip-icon">📚</span>
          <span class="strip-label">KHUNG NỘI DUNG CHUẨN SLIDE SP24:</span>
        </div>
        <div class="curriculum-strip-tags">
          ${ch.modules.map(m => `
            <div class="curriculum-pill" style="--ch-accent: ${ch.accentColor};" title="${m.title}">
              <span class="curriculum-pill-id" style="color: ${ch.accentColor};">${m.id}</span>
              <span class="curriculum-pill-name">${m.title.replace(/^[0-9.]+\s*/, '')}</span>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    chaptersHTML += `
      <section class="glass-panel chapter-card chapter-card-${ch.id} animate-slide-up" id="chapter-sec-${ch.id}">
        <div class="chapter-top">
          <div class="chapter-heading">
            <div class="ch-code">${ch.code}</div>
            <h3>${ch.title}</h3>
            <p>${ch.desc}</p>
          </div>
          <div style="text-align: right;">
            <span class="badge-pill ch-theme-badge">
              ${ch.badge}
            </span>
            <div class="ch-completion-counter" style="color: ${isFinished ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
              ${completedInChapter} / ${chScenarios.length} Hoàn thành
            </div>
          </div>
        </div>

        <!-- Curriculum Syllabus Strip (Chuẩn Slide SP24) -->
        ${modulesStripHTML}

        <!-- Scenarios Grid -->
        <div class="scenario-grid">
          ${scenariosCardsHTML}
        </div>
      </section>
    `;
  });

  // Philosophy Detective Cases
  const specialModule = SPECIAL_MODULES[0];
  let detectiveCasesHTML = '';

  DETECTIVE_CASES.forEach(cs => {
    const isSolved = !!detectiveSolved[cs.id];

    detectiveCasesHTML += `
      <div class="scenario-item-card ${isSolved ? 'completed' : ''}" data-case-id="${cs.id}" style="border-left: 4px solid var(--accent-crimson);">
        <div class="scenario-thumb-wrapper">
          <img class="scenario-item-img" src="${resolveAssetUrl(cs.image)}" alt="${cs.title}" loading="lazy" onerror="this.onerror=null; this.src='${cs.image}'; this.style.opacity='0.4'" />
          <div class="scenario-status-badge">
            ${isSolved 
              ? '<span class="badge-pill" style="background: var(--accent-emerald); color: #ffffff;">✓ ĐÃ PHÁ ÁN</span>'
              : '<span class="badge-pill" style="background: var(--accent-crimson); color: #ffffff;">🕵️ ĐANG MỞ</span>'
            }
          </div>
        </div>
        <div>
          <div class="topic-tag" style="color: var(--accent-crimson);">${cs.code} • ${cs.dossierLevel}</div>
          <h4>${cs.title}</h4>
          <p style="font-size: 0.86rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.55;">
            ${cs.backgroundStory}
          </p>
        </div>
        <div class="scenario-card-footer">
          <span class="scenario-concept-label" style="color: var(--accent-crimson);">Phân loại manh mối</span>
          <span class="scenario-cta-btn" style="color: var(--accent-crimson);">Vào phá án →</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container animate-fade-in" style="padding-bottom: 5.5rem;">
      <div class="journey-header" style="padding: 2.2rem 0 1.6rem; text-align: center;">
        <div style="display: inline-flex; align-items: center; justify-content: center; gap: 1.3rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
          <img src="${resolveAssetUrl('./assets/images/portraits/marx-lenin-banner.svg')}" alt="C. Mác & V.I. Lênin" style="height: 58px; max-width: 145px; object-fit: contain; border-radius: 12px; border: 1.5px solid rgba(217, 119, 6, 0.45); box-shadow: 0 4px 14px rgba(217, 119, 6, 0.18);" onerror="this.onerror=null; this.src='./assets/images/portraits/marx-lenin-banner.svg';" />
          <div style="text-align: left;">
            <h2 style="font-size: 2.05rem; font-weight: 900; margin: 0; color: var(--text-heading); font-family: var(--font-heading); letter-spacing: -0.02em;">Bản Đồ Hành Trình MLN122</h2>
            <p style="margin: 0.2rem 0 0; color: var(--text-muted); font-size: 0.98rem; font-weight: 500;">Lý luận Kinh tế chính trị Mác – Lênin qua các tình huống đời sống và thị trường</p>
          </div>
        </div>
        ${totalCompleted > 0 ? `
          <div style="margin-top: 1.1rem; display: flex; align-items: center; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
            <span class="badge-pill" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(5, 150, 105, 0.18)); color: #059669; border: 1.5px solid rgba(5, 150, 105, 0.35); font-weight: 850; font-family: var(--font-heading); font-size: 0.85rem; padding: 0.45rem 1.15rem; border-radius: 9999px; box-shadow: 0 2px 8px rgba(5, 150, 105, 0.12);">
              🎯 TIẾN TRÌNH: ${totalCompleted}/${totalItems} (${progressPercent}%)
            </span>
          </div>
        ` : ''}
      </div>

      <div class="chapter-track">
        ${chaptersHTML}

        <!-- Special Module: Quizizz Arena MLN122 -->
        <section class="glass-panel chapter-card animate-slide-up" style="border: 2px solid rgba(139, 92, 246, 0.4); background: linear-gradient(180deg, var(--bg-card) 0%, rgba(245, 243, 255, 0.6) 100%);">
          <div class="chapter-top">
            <div class="chapter-heading">
              <div class="ch-code" style="color: #8b5cf6;">🎮 ĐẤU TRƯỜNG TRẮC NGHIỆM QUIZIZZ</div>
              <h3>Đấu Trường Tri Thức MLN122 (Quiz Arena)</h3>
              <p>Tranh tài trắc nghiệm phong cách Quizizz: Hỏi nhanh đáp chuẩn, tranh đoạt Streak Combo, làm chủ trọn vẹn kiến thức 6 chương (đặc biệt Chương 3 GTTD, Chương 5 KTTT XHCN, Chương 6 CNH-HĐH)!</p>
            </div>
            <div style="text-align: right;">
              <button class="btn-primary" id="map-enter-tycoon-btn" style="background: linear-gradient(135deg, #8b5cf6, #ec4899); padding: 0.75rem 1.6rem;">
                <span>🚀 VÀO ĐẤU TRƯỜNG NGAY →</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Special Module: Detective Bureau -->
        <section class="glass-panel chapter-card animate-slide-up" style="border: 2px solid rgba(220, 38, 38, 0.35); background: linear-gradient(180deg, var(--bg-card) 0%, rgba(254, 242, 242, 0.6) 100%);">
          <div class="chapter-top">
            <div class="chapter-heading">
              <div class="ch-code" style="color: var(--accent-crimson);">${specialModule.badge}</div>
              <h3>${specialModule.titleVi} (${specialModule.title})</h3>
              <p>${specialModule.desc}</p>
            </div>
            <div style="text-align: right;">
              <span class="badge-pill" style="background: var(--accent-crimson-light); color: var(--accent-crimson); border: 1px solid rgba(220, 38, 38, 0.4);">
                HỒ SƠ ĐIỀU TRA
              </span>
              <div style="margin-top: 0.5rem; font-size: 0.88rem; font-weight: 800; font-family: var(--font-heading); color: var(--accent-crimson);">
                ${Object.keys(detectiveSolved).length} / ${DETECTIVE_CASES.length} Vụ án đã phá
              </div>
            </div>
          </div>

          <div class="scenario-grid">
            ${detectiveCasesHTML}
          </div>
        </section>
      </div>
    </div>
  `;

  // Attach click listeners to regular scenarios
  container.querySelectorAll('.scenario-item-card[data-id]').forEach(card => {
    card.addEventListener('click', () => {
      sound.playClick();
      const id = card.getAttribute('data-id');
      onSelectScenario(id);
    });
  });

  // Attach click listeners to detective cases
  container.querySelectorAll('.scenario-item-card[data-case-id]').forEach(card => {
    card.addEventListener('click', () => {
      sound.playClick();
      const caseId = card.getAttribute('data-case-id');
      onSelectDetective(caseId);
    });
  });

  const mapTycoonBtn = document.getElementById('map-enter-tycoon-btn');
  if (mapTycoonBtn && onSelectTycoon) {
    mapTycoonBtn.addEventListener('click', () => {
      sound.playClick();
      onSelectTycoon();
    });
  }
}
