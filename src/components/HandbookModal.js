import { HANDBOOK_ENTRIES } from '../data/handbook.js';
import { sound } from '../core/audio.js';

export function renderHandbookModal(container, onClose) {
  let activeChapter = 'all'; // 'all' | 1 | 2 | 3 | 4 | 5 | 6
  let searchQuery = '';

  const totalTopics = HANDBOOK_ENTRIES.reduce((acc, ch) => acc + ch.topics.length, 0);

  function getFilteredEntries() {
    return HANDBOOK_ENTRIES.map(ch => {
      if (activeChapter !== 'all' && ch.chapter !== parseInt(activeChapter)) {
        return null;
      }

      const q = searchQuery.toLowerCase().trim();
      if (!q) return ch;

      const matchedTopics = ch.topics.filter(t => 
        t.title.toLowerCase().includes(q) ||
        t.code.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        t.lifeLesson.toLowerCase().includes(q)
      );

      if (matchedTopics.length === 0 && !ch.chapterTitle.toLowerCase().includes(q)) {
        return null;
      }

      return {
        ...ch,
        topics: matchedTopics.length > 0 ? matchedTopics : ch.topics
      };
    }).filter(Boolean);
  }

  function renderContent() {
    const filteredEntries = getFilteredEntries();

    let chaptersHTML = '';

    if (filteredEntries.length === 0) {
      chaptersHTML = `
        <div style="text-align: center; padding: 3rem 1.5rem; background: var(--bg-alt); border-radius: var(--radius-lg); border: 1.5px dashed var(--border-subtle); margin: 1.5rem 0;">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h4 style="font-size: 1.15rem; color: var(--text-heading); font-family: var(--font-heading); margin-bottom: 0.4rem;">
            Không tìm thấy chuyên đề phù hợp với "${searchQuery}"
          </h4>
          <p style="color: var(--text-muted); font-size: 0.92rem; margin: 0;">
            Hãy thử tìm các từ khóa như: <em>giá trị thặng dư, tích lũy, thể chế, độc quyền, ESG, 5.1.3</em>
          </p>
        </div>
      `;
    } else {
      filteredEntries.forEach(ch => {
        let topicsHTML = '';
        ch.topics.forEach(t => {
          // Format bullet points nicely
          const formattedSummary = t.summary.split('\n').map(line => {
            const trimmed = line.trim();
            if (!trimmed) return '';
            if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
              const cleanText = trimmed.replace(/^[•\-]\s*/, '');
              return `
                <div class="handbook-bullet-point">
                  <span class="bullet-dot" style="background: ${ch.accentColor};"></span>
                  <span class="bullet-text">${cleanText}</span>
                </div>
              `;
            }
            return `<p class="handbook-paragraph">${trimmed}</p>`;
          }).join('');

          topicsHTML += `
            <article class="handbook-topic-card" style="--card-accent: ${ch.accentColor};">
              <div class="handbook-topic-head">
                <span class="handbook-code-badge" style="background: ${ch.accentBg}; color: ${ch.accentColor}; border: 1.5px solid ${ch.accentBorder};">
                  MỤC ${t.code}
                </span>
                <h4 class="handbook-topic-title">
                  ${t.title}
                </h4>
              </div>

              <div class="handbook-theory-body">
                <div class="theory-section-label" style="color: ${ch.accentColor};">
                  <span>📖</span>
                  <span>LÝ LUẬN &amp; TRỌNG TÂM BÀI GIẢNG:</span>
                </div>
                <div class="handbook-summary-text">
                  ${formattedSummary}
                </div>
              </div>

              <div class="handbook-life-box">
                <div class="handbook-life-label">
                  <span>💡</span>
                  <span>VẬN DỤNG VÀO THỰC TIỄN &amp; BÀI HỌC ĐỜI SỐNG:</span>
                </div>
                <p class="handbook-life-desc">
                  ${t.lifeLesson}
                </p>
              </div>
            </article>
          `;
        });

        chaptersHTML += `
          <div class="handbook-chapter-block">
            <div class="handbook-chapter-header" style="border-bottom: 2px solid ${ch.accentBorder};">
              <div>
                <span class="badge-pill ch-head-pill" style="background: ${ch.accentBg}; color: ${ch.accentColor}; border: 1.5px solid ${ch.accentBorder};">
                  ✦ ${ch.chapterCode} • ${ch.badge}
                </span>
                <h3 class="handbook-chapter-title">
                  ${ch.chapterTitle}
                </h3>
              </div>
              <span class="badge-pill ch-count-pill">
                ${ch.topics.length} chuyên đề
              </span>
            </div>
            <div class="handbook-topics-list">
              ${topicsHTML}
            </div>
          </div>
        `;
      });
    }

    const containerEl = document.getElementById('handbook-content-container');
    if (containerEl) {
      containerEl.innerHTML = chaptersHTML;
    }
  }

  // Render initial modal shell
  let tabsHTML = `
    <button class="handbook-tab-btn ${activeChapter === 'all' ? 'active' : ''}" data-ch="all">
      Tất cả (${totalTopics})
    </button>
  `;
  HANDBOOK_ENTRIES.forEach(ch => {
    tabsHTML += `
      <button class="handbook-tab-btn ${activeChapter === String(ch.chapter) ? 'active' : ''}" data-ch="${ch.chapter}" style="--tab-color: ${ch.accentColor};">
        Chương ${ch.chapter} (${ch.topics.length})
      </button>
    `;
  });

  container.innerHTML = `
    <div class="handbook-fullscreen-overlay open" id="handbook-modal-overlay">
      <div class="handbook-fullscreen-page" id="handbook-print-area">
        <!-- Sticky Top Navigation Bar -->
        <header class="handbook-top-navbar">
          <div class="handbook-header-left">
            <button class="handbook-back-pill" id="handbook-back-btn" title="Quay lại bản đồ (Esc)">
              <span>← Đóng &amp; Quay lại bản đồ</span>
            </button>
          </div>
          <div class="handbook-top-title">
            <span>SỔ TAY KINH TẾ CHÍNH TRỊ MÁC – LÊNIN • MLN122</span>
          </div>
          <div class="handbook-top-actions">
            <button class="handbook-action-btn" id="handbook-print-btn" title="In / Lưu PDF">
              <span>🖨️ In / Lưu PDF</span>
            </button>
            <button class="handbook-close-x-btn" id="handbook-close-btn" title="Đóng sổ tay (Esc)">✕</button>
          </div>
        </header>

        <!-- Main Scrollable Fullscreen Container -->
        <main class="handbook-main-content">
          <!-- Header Hero Banner -->
          <div class="handbook-hero-head">
            <div class="handbook-header-badge">
              <span class="badge-pill" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(139, 92, 246, 0.15)); color: var(--accent-blue); border: 1.5px solid rgba(37, 99, 235, 0.35); font-weight: 800; font-family: var(--font-heading);">
                📚 MLN122 • KHO TRI THỨC TOÀN DIỆN
              </span>
              <span class="cert-sub-tag">
                Cập nhật chuẩn Giáo trình chuẩn &amp; Giáo trình BGD&amp;ĐT
              </span>
            </div>
            <h1 class="handbook-modal-title">Sổ Tay Kinh Tế Chính Trị Bỏ Túi</h1>
            <p class="handbook-modal-subtitle">
              Hệ thống hóa toàn bộ ${totalTopics} chuyên đề cốt lõi của 6 chương MLN122. Từ bản chất quy luật giá trị thặng dư đến thể chế KTTT định hướng XHCN và chiến lược độc lập tự chủ 4.0.
            </p>
          </div>

          <!-- Sticky Search & Filter Controls -->
          <div class="handbook-controls-wrap">
            <div class="handbook-search-bar">
              <span class="search-icon">🔍</span>
              <input 
                type="text" 
                id="handbook-search-input" 
                class="handbook-input" 
                placeholder="Tìm kiếm chuyên đề, khái niệm, công thức (ví dụ: 5.1.3, thặng dư, thể chế, độc quyền, ESG)..." 
                value="${searchQuery}"
                autocomplete="off"
              />
              <button id="handbook-clear-search" class="search-clear-btn" style="display: none;" title="Xóa tìm kiếm">✕</button>
            </div>

            <!-- Chapter Navigation Tabs -->
            <div class="handbook-tabs-scroller" id="handbook-tabs-row">
              ${tabsHTML}
            </div>
          </div>

          <!-- Main Dynamic Topics Container (1 Single Native Page Scrollbar) -->
          <div class="handbook-topics-container" id="handbook-content-container">
            <!-- Injected via renderContent() -->
          </div>

          <!-- Bottom Action Bar -->
          <footer class="handbook-bottom-bar">
            <button class="btn-primary" id="handbook-done-btn">
              <span>✕ ĐÓNG SỔ TAY TRI THỨC</span>
            </button>
          </footer>
        </main>
      </div>
    </div>
  `;

  renderContent();

  // Event Listeners
  const modalOverlay = document.getElementById('handbook-modal-overlay');
  const closeBtn = document.getElementById('handbook-close-btn');
  const backBtn = document.getElementById('handbook-back-btn');
  const doneBtn = document.getElementById('handbook-done-btn');
  const printBtn = document.getElementById('handbook-print-btn');
  const searchInput = document.getElementById('handbook-search-input');
  const clearSearchBtn = document.getElementById('handbook-clear-search');
  const tabsRow = document.getElementById('handbook-tabs-row');

  // Tab switching
  tabsRow.addEventListener('click', (e) => {
    const btn = e.target.closest('.handbook-tab-btn');
    if (!btn) return;
    sound.playClick();
    activeChapter = btn.getAttribute('data-ch');
    tabsRow.querySelectorAll('.handbook-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderContent();
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    clearSearchBtn.style.display = searchQuery ? 'inline-flex' : 'none';
    renderContent();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderContent();
  });

  // Close handlers
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
  if (backBtn) backBtn.addEventListener('click', handleClose);
  if (doneBtn) doneBtn.addEventListener('click', handleClose);

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      sound.playClick();
      window.print();
    });
  }
}
