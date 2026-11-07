import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';
import { resolveAssetUrl } from '../utils/assetUrl.js';

export function renderDetectiveBureau(container, caseId, onBackToMap, onSelectOtherCase) {
  // If no caseId specified, pick first or solved state
  const activeCase = DETECTIVE_CASES.find(c => c.id === caseId) || DETECTIVE_CASES[0];
  const activeIndex = DETECTIVE_CASES.findIndex(c => c.id === activeCase.id);
  
  // Track assignments: clueId -> categoryId
  const assignments = {};
  let selectedClueId = null;
  let validationResult = null; // null | { isAllCorrect: boolean, errors: [] }
  let isCaseSolved = !!stateManager.state.detectiveSolved[activeCase.id];

  // Pre-fill if already solved
  if (isCaseSolved) {
    activeCase.clues.forEach(clue => {
      assignments[clue.id] = clue.correctCategory;
    });
    validationResult = { isAllCorrect: true, errors: [] };
  }

  function renderView() {
    // Unassigned clues
    const unassignedClues = activeCase.clues.filter(c => !assignments[c.id]);

    let unassignedHTML = '';
    unassignedClues.forEach(clue => {
      const isSelected = selectedClueId === clue.id;
      unassignedHTML += `
        <div class="clue-chip ${isSelected ? 'active-selection' : ''}" data-clue-id="${clue.id}">
          <span class="clue-pin-icon">📌</span>
          <span class="clue-text">${clue.text}</span>
        </div>
      `;
    });

    if (unassignedClues.length === 0 && !isCaseSolved && !validationResult?.isAllCorrect) {
      unassignedHTML = `
        <div class="clues-all-placed-note">
          <span>✨</span>
          <span>Đã xếp toàn bộ manh mối vào các ngăn danh mục. Hãy bấm nút <strong>Kiểm tra phân loại</strong> bên dưới!</span>
        </div>
      `;
    }

    // Category Buckets
    let bucketsHTML = '';
    activeCase.categories.forEach(cat => {
      // Clues in this bucket
      const cluesInBucket = activeCase.clues.filter(c => assignments[c.id] === cat.id);

      let chipsInBucketHTML = '';
      cluesInBucket.forEach(clue => {
        let errorClass = '';
        if (validationResult && !validationResult.isAllCorrect) {
          if (clue.correctCategory !== cat.id) {
            errorClass = 'clue-error-highlight';
          }
        }

        chipsInBucketHTML += `
          <div class="clue-chip in-bucket ${errorClass}" data-clue-id="${clue.id}">
            <span class="clue-pin-icon">🔍</span>
            <span class="clue-text">${clue.text}</span>
            <button class="remove-clue-btn" data-remove-id="${clue.id}" title="Gỡ manh mối ra khay">✕</button>
          </div>
        `;
      });

      bucketsHTML += `
        <div class="category-bucket ${selectedClueId ? 'ready-to-assign' : ''}" data-bucket-id="${cat.id}" style="--cat-accent: ${cat.color};">
          <div class="bucket-header">
            <div class="bucket-color-tag" style="background: ${cat.color};"></div>
            <div>
              <div class="bucket-name" style="color: ${cat.color};">${cat.name}</div>
              <div class="bucket-desc">${cat.desc}</div>
            </div>
          </div>
          <div class="bucket-clues-list">
            ${chipsInBucketHTML.length > 0 ? chipsInBucketHTML : '<div class="bucket-empty-hint">Bấm manh mối ở khay rồi bấm vào ô này để ghim</div>'}
          </div>
        </div>
      `;
    });

    // Case Selector Tabs (All 6 Cases)
    let caseTabsHTML = '';
    DETECTIVE_CASES.forEach((c, idx) => {
      const isCur = c.id === activeCase.id;
      const solved = !!stateManager.state.detectiveSolved[c.id];
      caseTabsHTML += `
        <button class="case-nav-tab ${isCur ? 'active' : ''} ${solved ? 'is-solved' : ''}" data-switch-case="${c.id}">
          <div class="case-tab-main">
            <span class="case-tab-code">${c.code}</span>
            <span class="case-tab-chapter">${c.chapterBadge ? c.chapterBadge.split('•')[0].trim() : `Chương ${idx + 1}`}</span>
          </div>
          ${solved ? '<span class="case-tab-check">✓ Đã phá</span>' : ''}
        </button>
      `;
    });

    // Verdict Box if solved
    let verdictHTML = '';
    if (validationResult?.isAllCorrect || isCaseSolved) {
      const v = activeCase.philosophicalVerdict;
      verdictHTML = `
        <div class="verdict-box animate-slide-up">
          <img src="${resolveAssetUrl('./assets/images/cases/seal-verdict-solved.svg')}" alt="Huy hiệu phá án" class="verdict-seal-img" onerror="this.onerror=null; this.src='./assets/images/cases/seal-verdict-solved.svg';" />
          <div class="verdict-badge">🏆 ĐẠI ÁN ĐÃ ĐƯỢC PHÁ GIẢI HOÀN TOÀN!</div>
          <h3 class="verdict-headline">
            ${v.headline}
          </h3>
          <div class="verdict-concept-pill">
            <span>💡 Khái niệm Kinh tế chính trị cốt lõi:</span>
            <strong>${v.concept}</strong>
          </div>
          <div class="verdict-analysis-text">
            ${v.analysis}
          </div>
          <div class="verdict-footer-actions">
            <div class="verdict-xp-awarded">
              <span>🌟</span>
              <span>+${v.xpAwarded} XP đã ghi nhận vào Hồ Sơ Tư Duy!</span>
            </div>
            <button class="btn-primary" id="detective-continue-btn">
              <span>TIẾP TỤC KHÁM PHÁ →</span>
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="container detective-wrap animate-fade-in">
        <!-- Top Nav & Case Selector Bar -->
        <div class="detective-top-bar">
          <button class="back-to-map-btn" id="detective-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          
          <div class="case-selector-scroll-wrap">
            <div class="case-selector-tabs">
              ${caseTabsHTML}
            </div>
          </div>
        </div>

        <!-- Case Dossier Header -->
        <div class="dossier-card">
          <div class="dossier-header-bar">
            <div class="dossier-header-left">
              <span class="stamp-confidential">📁 HỒ SƠ ĐIỀU TRA MẬT</span>
              <span class="dossier-sub-badge">${activeCase.code} • ${activeCase.chapterBadge || 'MLN122'}</span>
            </div>
            <div class="dossier-header-right">
              <span>BỘ MÔN MLN122 • ECONOMIC DETECTIVE BUREAU: GIẢI MÃ KỲ ÁN THỊ TRƯỜNG</span>
            </div>
          </div>

          <div class="detective-intro-body">
            <!-- Mandatory Case Image with Evidence Frame -->
            <div class="detective-image-box">
              <div class="evidence-tag">
                <span>🔍 SƠ ĐỒ CHỨNG CỨ #${activeCase.code.replace(/\D/g, '')}</span>
              </div>
              <img src="${resolveAssetUrl(activeCase.image)}" alt="${activeCase.title}" class="detective-hero-img" onerror="this.onerror=null; this.src='${activeCase.image}';" />
            </div>

            <!-- Case Story context -->
            <div class="detective-info-box">
              <div class="detective-meta-pills">
                <span class="dossier-level-pill" style="color: ${activeCase.accentColor}; background: rgba(2, 132, 199, 0.08); border: 1.5px solid ${activeCase.accentColor};">
                  ${activeCase.dossierLevel}
                </span>
                <span class="dossier-chapter-pill">
                  ${activeCase.chapterBadge}
                </span>
              </div>

              <h2 class="detective-case-title">${activeCase.title}</h2>
              <p class="detective-case-subtitle">${activeCase.subtitle}</p>
              
              <div class="detective-story-box">
                <div class="story-label">
                  <span class="story-icon">📌</span>
                  <span>BỐI CẢNH ĐIỀU TRA:</span>
                </div>
                <div class="story-content">
                  ${activeCase.backgroundStory}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Investigation Interactive Board -->
        <div class="investigation-board">
          <div class="board-title">
            <div>
              <div class="board-badge">THAO TRƯỜNG PHÂN TÍCH</div>
              <h3 class="board-main-heading">Bàn Phân Loại Manh Mối Kinh Tế Chính Trị</h3>
              <p class="board-guide-text">
                👉 Hướng dẫn: <strong>Bấm vào một manh mối</strong> ở khay bên dưới, sau đó <strong>bấm vào ô danh mục tương ứng</strong> để ghim chứng cứ khoa học.
              </p>
            </div>
            ${!isCaseSolved && !validationResult?.isAllCorrect ? `
              <button class="btn-primary btn-validate-clues" id="validate-clues-btn">
                <span>🔍 KIỂM TRA PHÂN LOẠI</span>
              </button>
            ` : ''}
          </div>

          <!-- Unassigned Clues Tray -->
          <div class="unassigned-clues-section">
            <div class="clues-tray-label">
              <span>📁</span>
              <span>Khay Manh Mối Cần Phân Loại (${unassignedClues.length} manh mối còn lại):</span>
            </div>
            <div class="clues-grid">
              ${unassignedHTML}
            </div>
          </div>

          <!-- Target Buckets Grid -->
          <div class="categories-bucket-grid">
            ${bucketsHTML}
          </div>

          <!-- Error Alert if validation failed -->
          ${validationResult && !validationResult.isAllCorrect ? `
            <div class="detective-validation-error animate-shake">
              <div class="error-icon">⚠️</div>
              <div class="error-text">
                <strong>Vẫn còn manh mối bị xếp sai danh mục hoặc chưa xếp hết!</strong>
                <p>Hãy đọc kỹ định nghĩa và đặc trưng của từng phạm trù kinh tế chính trị, quan sát các gợi ý và thử lại nhé.</p>
              </div>
            </div>
          ` : ''}

          <!-- Verdict Section -->
          ${verdictHTML}
        </div>
      </div>
    `;

    // Event listeners
    const backBtn = document.getElementById('detective-back-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });
    }

    // Switch case buttons
    container.querySelectorAll('[data-switch-case]').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        const nextId = btn.getAttribute('data-switch-case');
        onSelectOtherCase(nextId);
      });
    });

    // Clue click to select
    container.querySelectorAll('.unassigned-clues-section .clue-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        sound.playClick();
        const clueId = chip.getAttribute('data-clue-id');
        selectedClueId = (selectedClueId === clueId) ? null : clueId;
        renderView();
      });
    });

    // Target bucket click to assign
    container.querySelectorAll('.category-bucket').forEach(bucket => {
      bucket.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-clue-btn')) return;
        if (selectedClueId) {
          const bucketId = bucket.getAttribute('data-bucket-id');
          assignments[selectedClueId] = bucketId;
          selectedClueId = null;
          sound.playClueSnap();
          validationResult = null;
          renderView();
        }
      });
    });

    // Remove clue from bucket
    container.querySelectorAll('.remove-clue-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sound.playClick();
        const clueId = btn.getAttribute('data-remove-id');
        delete assignments[clueId];
        validationResult = null;
        renderView();
      });
    });

    // Validate Clues Button
    const validateBtn = document.getElementById('validate-clues-btn');
    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        // Check if all clues assigned
        const allAssigned = activeCase.clues.every(c => assignments[c.id]);
        if (!allAssigned) {
          alert('Vui lòng xếp toàn bộ 5 manh mối vào các ngăn danh mục trước khi kiểm tra!');
          return;
        }

        // Check correctness
        let errors = [];
        activeCase.clues.forEach(c => {
          if (assignments[c.id] !== c.correctCategory) {
            errors.push(c.id);
          }
        });

        if (errors.length === 0) {
          validationResult = { isAllCorrect: true, errors: [] };
          isCaseSolved = true;
          stateManager.recordDetectiveSolved(activeCase.id);
          renderView();
          // Scroll smoothly to verdict
          setTimeout(() => {
            const verdictBox = container.querySelector('.verdict-box');
            if (verdictBox) verdictBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        } else {
          sound.playWarning();
          validationResult = { isAllCorrect: false, errors };
          renderView();
        }
      });
    }

    const continueBtn = document.getElementById('detective-continue-btn');
    if (continueBtn) {
      continueBtn.addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });
    }
  }

  // Initial render
  renderView();
}
