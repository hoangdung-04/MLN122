import { DETECTIVE_CASES } from '../data/detectiveCases.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';
import { resolveAssetUrl } from '../utils/assetUrl.js';

let activeChapterFilter = 'all'; // 'all' | '1' | '2' | '3' | '4' | '5' | '6'

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

  function assignClueToCategory(clueId, categoryId) {
    if (!clueId || !categoryId) return;
    assignments[clueId] = categoryId;
    selectedClueId = null;
    sound.playClueSnap();
    validationResult = null;
    renderView();
  }

  function resetCurrentDossier() {
    activeCase.clues.forEach(c => {
      delete assignments[c.id];
    });
    selectedClueId = null;
    validationResult = null;
    sound.playClick();
    renderView();
  }

  function renderView() {
    // Unassigned clues
    const unassignedClues = activeCase.clues.filter(c => !assignments[c.id]);

    let unassignedHTML = '';
    unassignedClues.forEach(clue => {
      const isSelected = selectedClueId === clue.id;
      
      // Generate quick assign pills for each category
      let quickPillsHTML = '';
      if (isSelected) {
        activeCase.categories.forEach((cat) => {
          const shortCode = cat.name.split(':')[0].trim();
          quickPillsHTML += `
            <button class="quick-assign-btn" data-assign-clue="${clue.id}" data-target-cat="${cat.id}" style="--btn-color: ${cat.color};" title="Ghim ngay vào ${cat.name}">
              <span>📌 ${shortCode}</span>
            </button>
          `;
        });
      }

      unassignedHTML += `
        <div class="clue-chip ${isSelected ? 'active-selection' : ''}" data-clue-id="${clue.id}" draggable="true">
          <div class="clue-chip-main">
            <span class="clue-pin-icon">📌</span>
            <span class="clue-text">${clue.text}</span>
            <span class="clue-click-hint">${isSelected ? 'Đang chọn' : 'Bấm để ghim'}</span>
          </div>
          ${isSelected ? `
            <div class="quick-assign-bar animate-fade-in">
              <span class="quick-assign-label">⚡ Ghim nhanh vào:</span>
              <div class="quick-assign-btns">
                ${quickPillsHTML}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    });

    if (unassignedClues.length === 0 && !isCaseSolved && !validationResult?.isAllCorrect) {
      unassignedHTML = `
        <div class="clues-all-placed-note">
          <span>✨</span>
          <span>Bạn đã xếp toàn bộ 5 luận điểm vào các đề mục. Hãy bấm nút <strong>Kiểm tra phân loại</strong> bên dưới!</span>
        </div>
      `;
    }

    // Category Buckets
    let bucketsHTML = '';
    activeCase.categories.forEach((cat) => {
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
            <span class="clue-pin-icon">📌</span>
            <span class="clue-text">${clue.text}</span>
            <button class="remove-clue-btn" data-remove-id="${clue.id}" title="Gỡ luận điểm ra khay">✕</button>
          </div>
        `;
      });

      bucketsHTML += `
        <div class="category-bucket ${selectedClueId ? 'ready-to-assign' : ''}" data-bucket-id="${cat.id}" style="--cat-accent: ${cat.color};">
          <div class="bucket-header">
            <div class="bucket-color-tag" style="background: ${cat.color};"></div>
            <div style="flex: 1;">
              <div class="bucket-name" style="color: ${cat.color};">${cat.name}</div>
              <div class="bucket-desc">${cat.desc}</div>
            </div>
          </div>
          
          <div class="bucket-clues-list">
            ${chipsInBucketHTML.length > 0 ? chipsInBucketHTML : `
              <div class="bucket-empty-hint ${selectedClueId ? 'highlight-hint' : ''}">
                ${selectedClueId 
                  ? `<span class="glow-assign-txt">👉 Bấm vào ô này để ghim luận điểm đang chọn!</span>` 
                  : `Bấm chọn 1 luận điểm ở khay rồi bấm vào đây để ghim`}
              </div>
            `}
          </div>

          ${selectedClueId ? `
            <button class="bucket-direct-pin-btn" data-direct-bucket="${cat.id}" style="border-color: ${cat.color}; color: ${cat.color};">
              <span>➕ Ghim luận điểm đang chọn vào đây</span>
            </button>
          ` : ''}
        </div>
      `;
    });

    // Case Selector Tabs (Balanced 3x3 Grid with Filter Tabs)
    const solvedCasesCount = Object.keys(stateManager.state.detectiveSolved || {}).length;
    
    // Filter cases if a chapter filter is active
    const filteredCases = activeChapterFilter === 'all' 
      ? DETECTIVE_CASES 
      : DETECTIVE_CASES.filter(c => String(c.chapterNum) === String(activeChapterFilter));

    let caseTabsHTML = '';
    filteredCases.forEach((c) => {
      const isCur = c.id === activeCase.id;
      const solved = !!stateManager.state.detectiveSolved[c.id];
      const chapterLabel = c.chapterBadge ? c.chapterBadge.split('•')[0].trim() : `Chương ${c.chapterNum || 1}`;
      
      caseTabsHTML += `
        <button class="dossier-tab-card ${isCur ? 'active' : ''} ${solved ? 'is-solved' : ''}" data-switch-case="${c.id}" style="--card-accent: ${c.accentColor || '#dc2626'};" title="${c.title}">
          <div class="tab-card-top">
            <span class="tab-card-chapter" style="--ch-color: ${c.accentColor};">
              <span class="ch-dot" style="background: ${c.accentColor};"></span>
              ${chapterLabel}
            </span>
            <span class="tab-card-code">${c.code}</span>
          </div>

          <div class="tab-card-topic">
            <span class="tab-card-icon">${c.icon || '📁'}</span>
            <span class="tab-card-topic-title">${c.shortTopic || c.title}</span>
          </div>

          <div class="tab-card-sub" title="${c.subtitle}">
            ${c.subtitle.split(':')[0]}
          </div>

          <div class="tab-card-status">
            ${solved 
              ? '<span class="status-pill-solved">✓ ĐÃ PHÁ GIẢI</span>' 
              : (isCur 
                  ? '<span class="status-pill-active"><span class="pulse-dot"></span> ĐANG THỤ LÝ</span>' 
                  : '<span class="status-pill-open">Khám phá →</span>')
            }
          </div>
          ${isCur ? '<div class="tab-card-active-arrow"></div>' : ''}
        </button>
      `;
    });

    // Chapter Filter Pills HTML
    const filterOptions = [
      { id: 'all', label: 'Tất cả (9)', icon: '🏛️' },
      { id: '1', label: 'Chương 1 (1)', icon: '📜' },
      { id: '2', label: 'Chương 2 (1)', icon: '⚖️' },
      { id: '3', label: 'Chương 3 (2)', icon: '🔍' },
      { id: '4', label: 'Chương 4 (1)', icon: '🏢' },
      { id: '5', label: 'Chương 5 (2)', icon: '🇻🇳' },
      { id: '6', label: 'Chương 6 (2)', icon: '⚡' }
    ];

    let filterPillsHTML = '';
    filterOptions.forEach(opt => {
      const isActive = activeChapterFilter === opt.id;
      filterPillsHTML += `
        <button class="ch-filter-pill ${isActive ? 'active' : ''}" data-filter-ch="${opt.id}">
          <span>${opt.icon}</span>
          <span>${opt.label}</span>
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
        <!-- Top Command Bar -->
        <div class="detective-header-section">
          <div class="detective-top-action-bar">
            <button class="back-to-map-btn" id="detective-back-btn">
              <span>← Bản đồ hành trình</span>
            </button>

            <!-- Chapter Filter Segmented Control -->
            <div class="detective-filter-bar">
              ${filterPillsHTML}
            </div>

            <!-- Overall Progress Pill -->
            <div class="detective-overall-progress">
              <span class="progress-trophy">🏆</span>
              <span class="progress-text">Tiến độ: <strong>${solvedCasesCount}/${DETECTIVE_CASES.length}</strong> (${Math.round((solvedCasesCount / DETECTIVE_CASES.length) * 100)}%)</span>
              <div class="progress-mini-track">
                <div class="progress-mini-fill" style="width: ${(solvedCasesCount / DETECTIVE_CASES.length) * 100}%;"></div>
              </div>
            </div>
          </div>

          <!-- Dossier Cards Grid (Balanced 3x3 layout) -->
          <div class="dossier-nav-grid">
            ${caseTabsHTML}
          </div>
        </div>

        <!-- Case Dossier Header Card (Classified Executive Theme) -->
        <div class="dossier-card" style="--case-accent: ${activeCase.accentColor || '#dc2626'};">
          <div class="dossier-header-bar">
            <div class="dossier-header-left">
              <span class="stamp-confidential">
                <span class="stamp-dot"></span>
                TOP SECRET // HỒ SƠ ĐIỀU TRA MẬT
              </span>
              <span class="dossier-sub-badge">${activeCase.code} • ${activeCase.chapterBadge || 'MLN122'}</span>
            </div>
            <div class="dossier-header-right">
              <span class="dossier-bureau-label">BỘ MÔN MLN122 • ECONOMIC DETECTIVE BUREAU</span>
              <button class="btn-reset-dossier" id="reset-dossier-btn" title="Đặt lại khay luận điểm của hồ sơ này">
                <span>↺ Xếp lại</span>
              </button>
            </div>
          </div>

          <div class="detective-intro-body">
            <!-- Case Evidence Frame (High-res SVG Image) -->
            <div class="detective-image-box">
              <div class="evidence-tag">
                <span class="evidence-icon">🔍</span>
                <span>SƠ ĐỒ CHỨNG CỨ #${String(activeCase.caseNumber || activeIndex + 1).padStart(2, '0')}</span>
                <span class="evidence-badge-sub">CHỨNG CỨ GỐC</span>
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
                <span class="dossier-clues-count-pill">
                  📁 5 Manh Mối
                </span>
                <span class="dossier-xp-pill">
                  🌟 +${activeCase.philosophicalVerdict?.xpAwarded || 150} XP
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
              <div class="board-badge">ĐỐI CHIẾU NỘI DUNG GIÁO TRÌNH CHUẨN &amp; GIÁO TRÌNH</div>
              <h3 class="board-main-heading">Bàn Phân Loại Luận Điểm Kinh Tế Chính Trị (${activeCase.chapterBadge})</h3>
              <p class="board-guide-text">
                👉 Hướng dẫn: Đọc kỹ từng luận điểm ở khay; <strong>bấm vào luận điểm</strong> rồi <strong>bấm vào đề mục bên dưới</strong> (hoặc bấm nút ghim nhanh) để phân loại.
              </p>
            </div>
            ${!isCaseSolved && !validationResult?.isAllCorrect ? `
              <button class="btn-primary btn-validate-clues" id="validate-clues-btn">
                <span>🔍 KIỂM TRA PHÂN LOẠI ĐỀ MỤC</span>
              </button>
            ` : ''}
          </div>

          <!-- Unassigned Clues Tray -->
          <div class="unassigned-clues-section">
            <div class="clues-tray-label">
              <span>📁</span>
              <span>Khay Luận Điểm Cần Phân Loại (${unassignedClues.length} luận điểm còn lại):</span>
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
                <strong>Vẫn còn luận điểm bị xếp sai đề mục hoặc chưa xếp hết!</strong>
                <p>Hãy đọc kỹ định nghĩa và đặc trưng của từng đề mục khoa học, quan sát các gợi ý và thử lại nhé.</p>
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

    // Reset current dossier button
    const resetBtn = document.getElementById('reset-dossier-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        resetCurrentDossier();
      });
    }

    // Chapter filter pills
    container.querySelectorAll('[data-filter-ch]').forEach(btn => {
      btn.addEventListener('click', () => {
        sound.playClick();
        activeChapterFilter = btn.getAttribute('data-filter-ch');
        renderView();
      });
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
      chip.addEventListener('click', (e) => {
        if (e.target.closest('.quick-assign-btn')) return;
        sound.playClick();
        const clueId = chip.getAttribute('data-clue-id');
        selectedClueId = (selectedClueId === clueId) ? null : clueId;
        renderView();
      });
    });

    // Quick assign buttons inside clue chip
    container.querySelectorAll('.quick-assign-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const clueId = btn.getAttribute('data-assign-clue');
        const catId = btn.getAttribute('data-target-cat');
        assignClueToCategory(clueId, catId);
      });
    });

    // Target bucket click to assign
    container.querySelectorAll('.category-bucket').forEach(bucket => {
      bucket.addEventListener('click', (e) => {
        if (e.target.closest('.remove-clue-btn')) return;
        if (e.target.closest('.bucket-direct-pin-btn')) return;
        const bucketId = bucket.getAttribute('data-bucket-id');
        if (selectedClueId) {
          assignClueToCategory(selectedClueId, bucketId);
        } else {
          // If no clue selected yet, pick the first unassigned clue and assign it!
          const unassigned = activeCase.clues.filter(c => !assignments[c.id]);
          if (unassigned.length > 0) {
            assignClueToCategory(unassigned[0].id, bucketId);
          }
        }
      });
    });

    // Direct Pin Button inside bucket
    container.querySelectorAll('.bucket-direct-pin-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const bucketId = btn.getAttribute('data-direct-bucket');
        if (selectedClueId) {
          assignClueToCategory(selectedClueId, bucketId);
        }
      });
    });

    // Drag and drop support
    container.querySelectorAll('.clue-chip[draggable="true"]').forEach(chip => {
      chip.addEventListener('dragstart', (e) => {
        const clueId = chip.getAttribute('data-clue-id');
        e.dataTransfer.setData('text/plain', clueId);
        chip.classList.add('dragging');
      });
      chip.addEventListener('dragend', () => {
        chip.classList.remove('dragging');
      });
    });

    container.querySelectorAll('.category-bucket').forEach(bucket => {
      bucket.addEventListener('dragover', (e) => {
        e.preventDefault();
        bucket.classList.add('drag-over');
      });
      bucket.addEventListener('dragleave', () => {
        bucket.classList.remove('drag-over');
      });
      bucket.addEventListener('drop', (e) => {
        e.preventDefault();
        bucket.classList.remove('drag-over');
        const clueId = e.dataTransfer.getData('text/plain');
        const bucketId = bucket.getAttribute('data-bucket-id');
        if (clueId && bucketId) {
          assignClueToCategory(clueId, bucketId);
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
          alert('Vui lòng xếp toàn bộ 5 luận điểm vào các đề mục trước khi kiểm tra!');
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
