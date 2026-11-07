import { CHAPTERS, SPECIAL_MODULES } from '../data/chapters.js';
import { SCENARIOS } from '../data/scenarios.js';
import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderChapterMap(container, onSelectScenario, onSelectDetective, onResetProgress) {
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
        <div class="scenario-item-card ${isCompleted ? 'completed' : ''}" data-id="${sc.id}">
          <div class="scenario-thumb-wrapper">
            <img class="scenario-item-img" src="${sc.image}" alt="${sc.title}" loading="lazy" onerror="this.style.opacity='0.4'" />
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
            <div class="topic-tag">${sc.topic}</div>
            <h4>${sc.title}</h4>
            <p style="font-size: 0.86rem; color: var(--text-muted); display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.55;">
              ${sc.situation}
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 0.5rem;">
            <span style="font-size: 0.76rem; color: var(--text-dim); font-weight: 700;">${sc.philosophyConcept}</span>
            <span style="font-size: 0.86rem; color: var(--accent-blue); font-weight: 800; font-family: var(--font-heading);">Khám phá →</span>
          </div>
        </div>
      `;
    });

    chaptersHTML += `
      <section class="glass-panel chapter-card animate-slide-up">
        <div class="chapter-top">
          <div class="chapter-heading">
            <div class="ch-code">${ch.code}</div>
            <h3>${ch.title}</h3>
            <p>${ch.desc}</p>
          </div>
          <div style="text-align: right;">
            <span class="badge-pill" style="background: var(--accent-blue-light); color: var(--accent-blue); border: 1px solid rgba(37, 99, 235, 0.3);">
              ${ch.badge}
            </span>
            <div style="margin-top: 0.5rem; font-size: 0.88rem; font-weight: 800; font-family: var(--font-heading); color: ${isFinished ? 'var(--accent-emerald)' : 'var(--text-muted)'};">
              ${completedInChapter} / ${chScenarios.length} Hoàn thành
            </div>
          </div>
        </div>

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
          <img class="scenario-item-img" src="${cs.image}" alt="${cs.title}" loading="lazy" onerror="this.style.opacity='0.4'" />
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
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem; margin-top: 0.5rem;">
          <span style="font-size: 0.76rem; color: var(--accent-crimson); font-weight: 700;">Phân loại manh mối</span>
          <span style="font-size: 0.86rem; color: var(--accent-crimson); font-weight: 800; font-family: var(--font-heading);">Vào phá án →</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="container animate-fade-in" style="padding-bottom: 5.5rem;">
      <div class="journey-header" style="padding: 2rem 0 1.5rem; text-align: center;">
        <div style="display: inline-flex; align-items: center; justify-content: center; gap: 1.2rem; margin-bottom: 0.6rem; flex-wrap: wrap;">
          <img src="./assets/images/portraits/marx-lenin-banner.svg" alt="C. Mác & V.I. Lênin" style="height: 54px; max-width: 140px; object-fit: contain; border-radius: 10px; border: 1.5px solid rgba(217, 119, 6, 0.4); box-shadow: 0 4px 12px rgba(217, 119, 6, 0.15);" />
          <div style="text-align: left;">
            <h2 style="font-size: 1.85rem; margin: 0; color: var(--text-heading);">Bản Đồ Hành Trình MLN122</h2>
            <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem;">Lý luận Kinh tế chính trị Mác – Lênin qua các tình huống đời sống và thị trường</p>
          </div>
        </div>
        ${totalCompleted > 0 ? `
          <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: center; gap: 0.85rem; flex-wrap: wrap;">
            <span class="badge-pill" style="background: var(--accent-emerald-light); color: var(--accent-emerald-dark); border: 1px solid rgba(5, 150, 105, 0.35);">
              Tiến trình: ${totalCompleted}/${totalItems} (${progressPercent}%)
            </span>
            <button class="nav-btn" id="map-reset-btn" style="border-color: rgba(220, 38, 38, 0.35); color: var(--accent-crimson); font-size: 0.82rem; padding: 0.35rem 0.85rem;">
              <span>↺ Làm lại từ đầu</span>
            </button>
          </div>
        ` : ''}
      </div>

      <div class="chapter-track">
        ${chaptersHTML}

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

  const mapResetBtn = document.getElementById('map-reset-btn');
  if (mapResetBtn && onResetProgress) {
    mapResetBtn.addEventListener('click', () => {
      sound.playClick();
      onResetProgress();
    });
  }
}
