import { SCENARIOS } from '../data/scenarios.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';
import { resolveAssetUrl } from '../utils/assetUrl.js';

export function renderScenarioPlayer(container, scenarioId, onBackToMap, onNextScenario) {
  const scenario = SCENARIOS.find(s => s.id === scenarioId);
  if (!scenario) {
    container.innerHTML = `<div class="container" style="padding: 4rem 0;"><p>Không tìm thấy tình huống.</p></div>`;
    return;
  }

  const state = stateManager.state;
  const previousAnswer = state.completedScenarios[scenario.id];
  let selectedOption = previousAnswer 
    ? scenario.options.find(o => o.id === previousAnswer.optionId) 
    : null;

  function renderView() {
    let optionsHTML = '';
    scenario.options.forEach(opt => {
      let extraClass = '';
      if (selectedOption) {
        if (selectedOption.id === opt.id) {
          extraClass = opt.isDialectical ? 'selected-dialectical' : 'selected-warning';
        }
      }

      optionsHTML += `
        <button class="option-btn ${extraClass}" data-opt-id="${opt.id}" ${selectedOption ? 'disabled' : ''}>
          <div class="opt-letter">${opt.id}</div>
          <div style="flex-grow: 1;">${opt.text}</div>
          <span class="opt-badge-tag">${selectedOption && selectedOption.id === opt.id ? (opt.isDialectical ? '✓ Đạt Biện Chứng' : '⚠️ Lệch Lạc') : 'Phương Án'}</span>
        </button>
      `;
    });

    let feedbackStepperHTML = '';
    if (selectedOption) {
      const outcomeImgPath = selectedOption.isDialectical 
        ? './assets/images/outcomes/outcome-dialectical-success.svg' 
        : './assets/images/outcomes/outcome-subjective-failure.svg';
      const outcomeImg = resolveAssetUrl(outcomeImgPath);

      feedbackStepperHTML = `
        <div class="feedback-stepper animate-slide-up">
          <!-- STAGE 1: YOUR CHOICE -->
          <div class="feedback-step-card step-choice">
            <div class="step-label">
              <span>🎯</span>
              <span>1. LỰA CHỌN CỦA BẠN (YOUR CHOICE)</span>
            </div>
            <p style="font-size: 1.05rem; color: var(--text-heading); font-weight: 700; line-height: 1.6;">
              Lựa chọn [${selectedOption.id}]: ${selectedOption.text}
            </p>
          </div>

          <!-- STAGE 2: CONSEQUENCE WITH DEDICATED OUTCOME IMAGE -->
          <div class="feedback-step-card step-consequence">
            <div class="step-label">
              <span>⚡</span>
              <span>2. HỆ QUẢ ĐỜI THỰC (CONSEQUENCE)</span>
            </div>
            <img class="outcome-image-banner" src="${outcomeImg}" alt="Hình ảnh kết quả tương ứng" onerror="this.onerror=null; this.src='${outcomeImgPath}';" />
            <div class="consequence-narrative-box">
              <span class="narrative-tag">DIỄN BIẾN &amp; HỆ QUẢ THỰC TẾ:</span>
              <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.75; margin-top: 0.4rem; font-weight: 500;">
                ${selectedOption.consequence}
              </p>
            </div>
          </div>

          <!-- STAGE 3: ECONOMIC ANALYSIS -->
          <div class="feedback-step-card step-analysis">
            <div class="step-label">
              <span>🔍</span>
              <span>3. LĂNG KÍNH KINH TẾ CHÍNH TRỊ MÁC – LÊNIN (ECONOMIC ANALYSIS)</span>
            </div>
            <p style="font-size: 1.02rem; color: var(--text-main); line-height: 1.75; margin-bottom: 0.9rem; font-weight: 500;">
              ${selectedOption.philosophicalLens}
            </p>
            <div style="border-top: 1px dashed rgba(124, 58, 237, 0.25); padding-top: 0.85rem; font-size: 0.95rem; color: var(--text-muted); line-height: 1.65;">
              <strong style="color: var(--accent-purple);">Cơ sở lý luận MLN122:</strong> ${scenario.explanation}
            </div>
          </div>

          <!-- STAGE 4: WHAT YOU JUST LEARNED -->
          <div class="feedback-step-card step-learned">
            <div class="step-label">
              <span>💡</span>
              <span>4. BÀI HỌC PHƯƠNG PHÁP LUẬN CỐT LÕI (WHAT YOU JUST LEARNED)</span>
            </div>
            <p style="font-size: 1.08rem; color: var(--accent-emerald-dark); font-weight: 700; line-height: 1.75;">
              "${scenario.coreLesson}"
            </p>
          </div>

          <!-- ACTION BUTTONS -->
          <div class="stepper-actions">
            <button class="btn-secondary" id="retry-scenario-btn">
              <span>↺ Thử chọn phương án khác</span>
            </button>
            <button class="btn-primary" id="continue-scenario-btn">
              <span>TIẾP TỤC HÀNH TRÌNH →</span>
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="container scenario-player-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="scenario-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div class="scenario-header-pills">
            <span class="concept-pill">${scenario.philosophyConcept}</span>
            <span class="badge-pill difficulty-pill">
              ${scenario.difficulty.toUpperCase()}
            </span>
          </div>
        </div>

        <!-- Main Scenario Card -->
        <div class="scenario-card-main">
          <!-- Mandatory Large Visual -->
          <div class="scenario-visual-box">
            <img class="scenario-large-image" src="${resolveAssetUrl(scenario.image)}" alt="${scenario.title}" onerror="this.onerror=null; this.src='${scenario.image}';" />
          </div>

          <!-- Meta Bar -->
          <div class="scenario-meta-bar">
            <div class="meta-left-group">
              <span class="meta-ch-tag">CHƯƠNG ${scenario.chapter}</span>
              <span class="meta-topic-text">${scenario.topic}</span>
            </div>
            <div class="meta-right-group">
              <span class="meta-code-tag">Mã tình huống: <strong>${scenario.id}</strong></span>
            </div>
          </div>

          <!-- Body -->
          <div class="scenario-body">
            <h2 class="scenario-title">${scenario.title}</h2>

            <!-- Real-life situation context -->
            <div class="situation-story-box">
              <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.5rem; font-family: var(--font-heading); font-size: 0.92rem; text-transform: uppercase; letter-spacing: 0.04em;">
                📌 Tình huống đời sống:
              </strong>
              ${scenario.situation}
            </div>

            <!-- The Dilemma Question -->
            <div class="question-box">
              <div class="question-title">
                <span>❓</span>
                <span>${scenario.question}</span>
              </div>

              <!-- Options Grid -->
              <div class="options-grid">
                ${optionsHTML}
              </div>
            </div>

            <!-- Dynamic 4-Stage Feedback -->
            ${feedbackStepperHTML}
          </div>
        </div>
      </div>
    `;

    // Attach listeners
    document.getElementById('scenario-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    if (!selectedOption) {
      container.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const optId = btn.getAttribute('data-opt-id');
          const result = stateManager.recordScenarioAnswer(scenario.id, optId);
          selectedOption = result.option;
          renderView();

          // Smooth scroll to feedback
          setTimeout(() => {
            const feedbackEl = container.querySelector('.feedback-stepper');
            if (feedbackEl) {
              feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }, 100);
        });
      });
    } else {
      const retryBtn = document.getElementById('retry-scenario-btn');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          sound.playClick();
          selectedOption = null;
          renderView();
        });
      }

      const continueBtn = document.getElementById('continue-scenario-btn');
      if (continueBtn) {
        continueBtn.addEventListener('click', () => {
          sound.playClick();
          onNextScenario(scenario.id);
        });
      }
    }
  }

  renderView();
}
