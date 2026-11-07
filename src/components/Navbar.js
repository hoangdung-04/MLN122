import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderNavbar(container, onNavigate, onOpenModal, onResetProgress) {
  const state = stateManager.state;
  const isMuted = sound.isMuted();
  const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

  container.innerHTML = `
    <header class="site-header">
      <div class="container header-content">
        <!-- Minimalist Brand -->
        <div class="brand-logo" id="nav-brand-btn" title="Về trang chủ MLN122">
          <div class="brand-icon">📈</div>
          <div class="brand-text">
            <h1>MLN122 – KINH TẾ CHÍNH TRỊ TRONG ĐỜI SỐNG</h1>
            <p>C. MÁC • PH. ĂNG-GHEN • V.I. LÊNIN</p>
          </div>
        </div>

        <!-- Clean Minimalist Nav -->
        <div class="nav-actions">
          <button class="nav-btn" id="nav-map-btn" title="Bản đồ 6 chương và các tình huống">
            <span>🗺️ Hành Trình</span>
          </button>

          <button class="nav-btn" id="nav-detective-btn" title="Phòng Phá Án Kinh Tế">
            <span>🔍 Phá Án Kinh Tế</span>
          </button>

          <button class="nav-btn" id="nav-tycoon-btn" style="border-color: rgba(217, 119, 6, 0.4); color: var(--accent-gold);" title="Thao Trường Doanh Nghiệp Tycoon">
            <span>🏭 Game Tycoon</span>
          </button>

          <button class="nav-btn" id="nav-handbook-btn" title="Sổ tay lý luận MLN122">
            <span>📖 Sổ Tay KTCT</span>
          </button>

          <button class="nav-btn" id="nav-profile-btn" style="border-color: rgba(37, 99, 235, 0.4); color: var(--accent-blue);" title="Xem hồ sơ tư duy & chứng nhận">
            <span>🧠 Hồ Sơ Tư Duy</span>
          </button>

          <div class="xp-counter" title="Tổng điểm kinh nghiệm tích lũy">
            <span>✨</span>
            <span id="nav-xp-val">${state.xp} XP</span>
          </div>

          <!-- Theme Toggle Button -->
          <button class="nav-btn" id="nav-theme-toggle-btn" title="Chuyển chế độ Sáng / Tối">
            <span id="theme-icon-symbol">${currentTheme === 'dark' ? '☀️ Sáng' : '🌙 Tối'}</span>
          </button>

          <button class="nav-btn" id="nav-reset-btn" title="Làm lại từ đầu (Đặt lại điểm và bài làm về 0)" style="border-color: rgba(220, 38, 38, 0.3); color: var(--accent-crimson);">
            <span>↺ Làm Lại</span>
          </button>

          <button class="nav-btn" id="nav-sound-toggle-btn" title="${isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}">
            <span id="sound-icon-symbol">${isMuted ? '🔇' : '🔊'}</span>
          </button>
        </div>
      </div>
    </header>
  `;

  // Attach event handlers
  document.getElementById('nav-brand-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('landing');
  });

  document.getElementById('nav-map-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('map');
  });

  document.getElementById('nav-detective-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('detective');
  });

  const tycoonBtn = document.getElementById('nav-tycoon-btn');
  if (tycoonBtn) {
    tycoonBtn.addEventListener('click', () => {
      sound.playClick();
      onNavigate('tycoon');
    });
  }

  document.getElementById('nav-handbook-btn').addEventListener('click', () => {
    sound.playClick();
    onOpenModal('handbook');
  });

  document.getElementById('nav-profile-btn').addEventListener('click', () => {
    sound.playClick();
    onOpenModal('profile');
  });

  const resetBtn = document.getElementById('nav-reset-btn');
  if (resetBtn && onResetProgress) {
    resetBtn.addEventListener('click', () => {
      sound.playClick();
      onResetProgress();
    });
  }

  // Theme toggle listener
  const themeBtn = document.getElementById('nav-theme-toggle-btn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      sound.playClick();
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('mln122_theme', target);
      document.getElementById('theme-icon-symbol').textContent = target === 'dark' ? '☀️ Sáng' : '🌙 Tối';
    });
  }

  document.getElementById('nav-sound-toggle-btn').addEventListener('click', () => {
    const muted = sound.toggleMute();
    document.getElementById('sound-icon-symbol').textContent = muted ? '🔇' : '🔊';
    sound.playClick();
  });
}
