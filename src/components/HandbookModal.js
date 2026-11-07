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
            if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
              return `<div style="padding-left: 1.2rem; text-indent: -1.2rem; margin-bottom: 0.35rem; line-height: 1.62;">${trimmed}</div>`;
            }
            return `<p style="margin-bottom: 0.5rem; line-height: 1.65;">${trimmed}</p>`;
          }).join('');

          topicsHTML += `
            <article class="handbook-topic-card" style="border-left: 4px solid ${ch.accentColor};">
              <div class="handbook-topic-head">
                <span class="handbook-code-badge" style="background: ${ch.accentBg}; color: ${ch.accentColor}; border: 1px solid ${ch.accentBorder};">
                  MỤC ${t.code}
                </span>
                <h4 class="handbook-topic-title" style="color: var(--text-heading);">
                  ${t.title}
                </h4>
              </div>

              <div class="handbook-theory-body">
                <strong style="color: ${ch.accentColor}; font-size: 0.88rem; text-transform: uppercase; letter-spacing: 0.04em; display: block; margin-bottom: 0.4rem; font-family: var(--font-heading);">
                  📖 Lý luận &amp; Trọng tâm Slide:
                </strong>
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
                <span class="badge-pill" style="background: ${ch.accentBg}; color: ${ch.accentColor}; border: 1px solid ${ch.accentBorder}; font-size: 0.78rem; font-weight: 800; font-family: var(--font-heading); margin-bottom: 0.35rem; display: inline-block;">
                  ${ch.chapterCode} • ${ch.badge}
                </span>
                <h3 style="font-size: 1.28rem; font-weight: 800; color: var(--text-heading); font-family: var(--font-heading); margin: 0; line-height: 1.35;">
                  ${ch.chapterTitle}
                </h3>
              </div>
              <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); font-family: var(--font-heading); white-space: nowrap;">
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
    <div class="modal-overlay open" id="handbook-modal-overlay">
      <div class="modal-content handbook-modal-card animate-slide-up">
        <button class="modal-close-btn" id="handbook-close-btn" title="Đóng sổ tay (Esc)">✕</button>

        <!-- Header -->
        <div class="handbook-hero-head">
          <div class="handbook-header-badge">
            <span class="badge-pill" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.15), rgba(139, 92, 246, 0.15)); color: var(--accent-blue); border: 1.5px solid rgba(37, 99, 235, 0.35); font-weight: 800; font-family: var(--font-heading);">
              📚 MLN122 • KHO TRI THỨC TOÀN DIỆN
            </span>
            <span style="font-size: 0.85rem; font-weight: 700; color: var(--text-muted); font-family: var(--font-heading);">
              Cập nhật chuẩn Slide bài giảng &amp; Giáo trình BGD&amp;ĐT
            </span>
          </div>
          <h2 class="handbook-modal-title">Sổ Tay Kinh Tế Chính Trị Bỏ Túi</h2>
          <p class="handbook-modal-subtitle">
            Hệ thống hóa toàn bộ ${totalTopics} chuyên đề cốt lõi của 6 chương MLN122. Từ bản chất quy luật giá trị thặng dư đến thể chế KTTT định hướng XHCN và chiến lược độc lập tự chủ 4.0.
          </p>
        </div>

        <!-- Search & Filter Controls -->
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

          <!-- Chapter Navigation Pills -->
          <div class="handbook-tabs-scroller" id="handbook-tabs-row">
            ${tabsHTML}
          </div>
        </div>

        <!-- Main Dynamic Content List -->
        <div class="handbook-scroll-area" id="handbook-content-container">
          <!-- Injected via renderContent() -->
        </div>
      </div>
    </div>
  `;

  renderContent();

  // Event Listeners
  const modalOverlay = document.getElementById('handbook-modal-overlay');
  const closeBtn = document.getElementById('handbook-close-btn');
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
    window.removeEventListener('keydown', handleKeyDown);
    onClose();
  }

  function handleKeyDown(e) {
    if (e.key === 'Escape') {
      handleClose();
    }
  }

  window.addEventListener('keydown', handleKeyDown);
  closeBtn.addEventListener('click', handleClose);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target.id === 'handbook-modal-overlay') {
      handleClose();
    }
  });
}
