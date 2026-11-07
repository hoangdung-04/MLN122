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

          <button class="nav-btn" id="nav-quiz-btn" style="border-color: rgba(139, 92, 246, 0.4); color: #8b5cf6;" title="Đấu Trường Quizizz MLN122">
            <span>🎮 Game Quizizz</span>
          </button>

          <button class="nav-btn" id="nav-tycoon-btn" style="border-color: rgba(245, 158, 11, 0.4); color: #f59e0b;" title="Mô phỏng tích lũy tư bản">
            <span>🏭 Mô Phỏng Tư Bản</span>
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

  const quizBtn = document.getElementById('nav-quiz-btn');
  if (quizBtn) {
    quizBtn.addEventListener('click', () => {
      sound.playClick();
      onNavigate('quiz');
    });
  }

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
