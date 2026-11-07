import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderDetectiveBureau(container, caseId, onBackToMap, onSelectOtherCase) {
  // If no caseId specified, pick first or solved state
  const activeCase = DETECTIVE_CASES.find(c => c.id === caseId) || DETECTIVE_CASES[0];
  
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
          <span>📌</span>
          <span>${clue.text}</span>
        </div>
      `;
    });

    if (unassignedClues.length === 0 && !isCaseSolved && !validationResult?.isAllCorrect) {
      unassignedHTML = `<div style="color: var(--text-muted); font-style: italic; font-size: 0.92rem;">Đã xếp tất cả manh mối vào bảng. Hãy bấm nút Kiểm tra bên dưới!</div>`;
    }

    // Category Buckets
    let bucketsHTML = '';
    activeCase.categories.forEach(cat => {
      // Clues in this bucket
      const cluesInBucket = activeCase.clues.filter(c => assignments[c.id] === cat.id);

      let chipsInBucketHTML = '';
      cluesInBucket.forEach(clue => {
        let errorHighlight = '';
        if (validationResult && !validationResult.isAllCorrect) {
          if (clue.correctCategory !== cat.id) {
            errorHighlight = 'style="border-color: var(--accent-crimson); background: var(--accent-crimson-light); color: var(--accent-crimson-dark);"';
          }
        }

        chipsInBucketHTML += `
          <div class="clue-chip" data-clue-id="${clue.id}" ${errorHighlight}>
            <span>🔍</span>
            <span style="flex-grow: 1;">${clue.text}</span>
            <button class="remove-clue-btn" data-remove-id="${clue.id}" style="color: var(--text-dim); padding: 2px 6px; font-weight: bold;" title="Bỏ ra">✕</button>
          </div>
        `;
      });

      bucketsHTML += `
        <div class="category-bucket ${selectedClueId ? 'ready-to-assign' : ''}" data-bucket-id="${cat.id}" style="border-top: 4px solid ${cat.color};">
          <div class="bucket-header">
            <div class="bucket-name" style="color: ${cat.color};">${cat.name}</div>
            <div class="bucket-desc">${cat.desc}</div>
          </div>
          <div class="bucket-clues-list">
            ${chipsInBucketHTML.length > 0 ? chipsInBucketHTML : '<div style="color: var(--text-dim); font-size: 0.82rem; text-align: center; margin: auto;">Thả hoặc bấm chọn manh mối vào đây</div>'}
          </div>
        </div>
      `;
    });

    // Case Selector Tabs
    let caseTabsHTML = '';
    DETECTIVE_CASES.forEach(c => {
      const isCur = c.id === activeCase.id;
      const solved = !!stateManager.state.detectiveSolved[c.id];
      caseTabsHTML += `
        <button class="nav-btn ${isCur ? 'active' : ''}" data-switch-case="${c.id}" style="${isCur ? 'border-color: var(--accent-crimson); color: var(--accent-crimson);' : ''}">
          <span>${c.code}</span>
          ${solved ? '<span style="color: var(--accent-emerald);">✓</span>' : ''}
        </button>
      `;
    });

    // Verdict Box if solved
    let verdictHTML = '';
    if (validationResult?.isAllCorrect || isCaseSolved) {
      const v = activeCase.philosophicalVerdict;
      verdictHTML = `
        <div class="verdict-box animate-slide-up">
          <img src="./assets/images/cases/seal-verdict-solved.svg" alt="Huy hiệu phá án" style="width: 115px; height: 115px; float: right; margin: 0 0 1rem 1.5rem; filter: drop-shadow(0 6px 18px rgba(217, 119, 6, 0.4));" />
          <div class="verdict-badge">🏆 VỤ ÁN ĐÃ ĐƯỢC PHÁ GIẢI HOÀN TOÀN!</div>
          <h3 style="font-size: 1.6rem; color: var(--text-heading); margin-bottom: 0.5rem; font-family: var(--font-heading);">
            ${v.headline}
          </h3>
          <div style="font-size: 0.95rem; color: var(--accent-gold); font-weight: 800; margin-bottom: 1rem; font-family: var(--font-heading);">
            Khái niệm triết học cốt lõi: ${v.concept}
          </div>
          <div class="verdict-analysis-text">
            ${v.analysis}
          </div>
          <div style="display: flex; gap: 1rem; align-items: center; justify-content: flex-end; flex-wrap: wrap;">
            <span style="color: var(--accent-emerald-dark); font-weight: 800; font-family: var(--font-heading);">+${v.xpAwarded} XP Đã cộng vào hồ sơ!</span>
            <button class="btn-primary" id="detective-continue-btn">
              <span>TIẾP TỤC KHÁM PHÁ →</span>
            </button>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="container detective-wrap animate-fade-in">
        <!-- Top Nav -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="detective-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            ${caseTabsHTML}
          </div>
        </div>

        <!-- Case Dossier Header -->
        <div class="dossier-card">
          <div class="dossier-header-bar">
            <span class="stamp-confidential">HỒ SƠ ĐIỀU TRA MẬT</span>
            <span style="font-family: var(--font-heading); font-weight: 800; color: #ffffff; font-size: 0.88rem; letter-spacing: 0.04em;">
              BỘ MÔN MLN122 • PHILOSOPHY DETECTIVE BUREAU
            </span>
          </div>

          <div class="detective-intro-body">
            <!-- Mandatory Case Image -->
            <div class="detective-image-box">
              <img src="${activeCase.image}" alt="${activeCase.title}" style="width: 100%; max-height: 320px; object-fit: cover;" />
            </div>

            <!-- Case Story context -->
            <div>
              <div style="color: var(--accent-crimson); font-size: 0.88rem; font-weight: 800; letter-spacing: 0.06em; margin-bottom: 0.4rem; font-family: var(--font-heading);">
                ${activeCase.code} • ${activeCase.dossierLevel}
              </div>
              <h2 style="font-size: 1.75rem; margin-bottom: 0.6rem; color: var(--text-heading);">${activeCase.title}</h2>
              <p style="color: var(--accent-gold); font-size: 1rem; margin-bottom: 1.4rem; font-weight: 600;">${activeCase.subtitle}</p>
              
              <div class="detective-story-box">
                <strong style="color: var(--accent-crimson); display: block; margin-bottom: 0.4rem; font-family: var(--font-heading); font-size: 0.92rem; text-transform: uppercase;">Bối cảnh điều tra:</strong>
                ${activeCase.backgroundStory}
              </div>
            </div>
          </div>
        </div>

        <!-- Investigation Interactive Board -->
        <div class="investigation-board">
          <div class="board-title">
            <div>
              <h3 style="font-size: 1.35rem; color: var(--text-heading); font-family: var(--font-heading); margin-bottom: 0.3rem;">Bàn Phân Loại Manh Mối Triết Học</h3>
              <p style="font-size: 0.9rem; color: var(--text-muted);">
                Hướng dẫn: <strong>Bấm vào một manh mối</strong> ở khay bên dưới, sau đó <strong>bấm vào ô danh mục tương ứng</strong> để ghim manh mối.
              </p>
            </div>
            ${!isCaseSolved && !validationResult?.isAllCorrect ? `
              <button class="btn-primary" id="validate-clues-btn" style="background: linear-gradient(135deg, #dc2626, #ef4444); box-shadow: 0 4px 18px rgba(220, 38, 38, 0.35);">
                <span>🔍 KIỂM TRA PHÂN LOẠI</span>
              </button>
            ` : ''}
          </div>

          <!-- Unassigned Clues Tray -->
          <div class="unassigned-clues-section">
            <div style="font-size: 0.88rem; font-weight: 800; color: var(--accent-gold); display: flex; align-items: center; gap: 0.45rem; font-family: var(--font-heading);">
              <span>📁</span>
              <span>Khay Manh Mối Cần Phân Loại (${unassignedClues.length}):</span>
            </div>
            <div class="clues-grid">
              ${unassignedHTML}
            </div>
          </div>

          <!-- Target Buckets -->
          <div class="categories-bucket-grid">
            ${bucketsHTML}
          </div>

          <!-- Error Alert if validation failed -->
          ${validationResult && !validationResult.isAllCorrect ? `
            <div style="margin-top: 1.6rem; padding: 1.1rem 1.6rem; background: var(--accent-crimson-light); border: 1.5px solid rgba(220, 38, 38, 0.3); border-radius: var(--radius-md); color: var(--accent-crimson); font-size: 0.98rem; font-weight: 600;">
              ⚠️ Vẫn còn manh mối bị xếp sai danh mục hoặc chưa xếp hết! Hãy đọc kỹ định nghĩa các phạm trù và thử lại.
            </div>
          ` : ''}

          <!-- Verdict Section -->
          ${verdictHTML}
        </div>
      </div>
    `;

    // Event listeners
    document.getElementById('detective-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

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
          alert('Vui lòng xếp toàn bộ manh mối vào các danh mục trước khi kiểm tra!');
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

  renderView();
}
