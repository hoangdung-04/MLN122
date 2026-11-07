import { sound } from '../core/audio.js';
import { stateManager } from '../core/state.js';
import { resolveAssetUrl } from '../utils/assetUrl.js';

export function renderLandingHero(container, onNavigate) {
  const hasProgress = stateManager.state.xp > 0 || 
    Object.keys(stateManager.state.completedScenarios).length > 0 ||
    Object.keys(stateManager.state.detectiveSolved).length > 0;

  container.innerHTML = `
    <section class="hero-fullscreen animate-fade-in">
      <!-- Ambient Background Glow & Floating Mathematical Symbols -->
      <div class="hero-ambient-bg">
        <div class="ambient-orb ambient-orb-1"></div>
        <div class="ambient-orb ambient-orb-2"></div>
        <div class="ambient-orb ambient-orb-3"></div>
        <div class="floating-econ-symbol econ-sym-1" title="Giá trị thặng dư">m</div>
        <div class="econ-sym-pill econ-sym-2" title="Công thức chung tư bản">T – H – T'</div>
        <div class="econ-sym-pill econ-sym-3" title="Cấu thành giá trị">c + v + m</div>
        <div class="floating-econ-symbol econ-sym-4">📈</div>
        <div class="floating-econ-symbol econ-sym-5">⚙️</div>
      </div>

      <div class="container" style="position: relative; z-index: 2;">
        <!-- Top Centered Badge -->
        <div class="hero-top-badge-wrapper">
          <div class="hero-badge-tag">
            <span>MÔN HỌC MLN122 • KINH TẾ CHÍNH TRỊ MÁC – LÊNIN</span>
          </div>
        </div>

        <div class="hero-grid-main">
          
          <!-- LEFT COLUMN: Content, Headline, Quote & Actions -->
          <div>
            <!-- Main Headline -->
            <h1 class="hero-headline-h1">
              KINH TẾ CHÍNH TRỊ <br />
              <span class="text-gold-gradient">TRONG ĐỜI SỐNG</span>
            </h1>

            <!-- Slogan -->
            <p class="hero-slogan-text">
              "Thấu hiểu quy luật thị trường – Làm chủ giá trị và đời sống hiện đại."
            </p>

            <!-- Philosophy Quote Card -->
            <div class="hero-quote-box">
              <p>
                "Lao động là cha, còn đất đai là mẹ của mọi của cải vật chất... Người ta không thể ăn những lý thuyết suông, mà phải sản xuất ra của cải để sinh tồn và phát triển."
              </p>
              <div class="author">— C. MÁC &amp; W. PETTY</div>
            </div>

            <!-- Primary Action Buttons -->
            <div class="hero-cta-buttons">
              <button class="btn-primary" id="hero-start-btn" style="padding: 0.95rem 2.2rem; font-size: 1.05rem;">
                <span>${hasProgress ? '🚀 TIẾP TỤC HỌC TẬP' : '🚀 BẮT ĐẦU HỌC TẬP MLN122'}</span>
              </button>
              ${hasProgress ? `
                <button class="btn-secondary" id="hero-reset-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(220, 38, 38, 0.35); color: var(--accent-crimson);">
                  <span>↺ LÀM LẠI TỪ ĐẦU</span>
                </button>
              ` : ''}
              <button class="btn-secondary" id="hero-detective-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem;">
                <span>🔍 PHÒNG PHÁ ÁN KINH TẾ</span>
              </button>
              <button class="btn-secondary" id="hero-tycoon-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(139, 92, 246, 0.4); color: #8b5cf6;">
                <span>🎮 ĐẤU TRƯỜNG QUIZIZZ</span>
              </button>
            </div>
          </div>

          <!-- RIGHT COLUMN: Full-Height Classic Portrait of Lenin, Engels & Marx -->
          <div>
            <div class="hero-portrait-wrapper">
              <div class="hero-portrait-glow"></div>
              <div class="hero-portrait-frame">
                <img 
                  src="${resolveAssetUrl('./assets/images/portraits/marx-engels-lenin.png')}" 
                  alt="Chân dung V.I. Lênin, Ph. Ăng-ghen và C. Mác" 
                  class="hero-portrait-img" 
                  onerror="this.onerror=null; this.src='./assets/images/portraits/marx-engels-lenin.png';"
                />
                <div class="hero-portrait-caption">
                  <div class="cap-names">C. MÁC • PH. ĂNG-GHEN • V.I. LÊNIN</div>
                  <div class="cap-sub">NHỮNG BẬC THẦY ĐẶT NỀN MÓNG KINH TẾ CHÍNH TRỊ KHOA HỌC</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- FULL-WIDTH CENTERED ROADMAP: 6 CHƯƠNG MLN122 (3 CỘT X 2 HÀNG) -->
        <div class="hero-roadmap-section">
          <div class="roadmap-header-center">
            <span class="roadmap-badge-title">LỘ TRÌNH 6 CHƯƠNG MLN122</span>
          </div>
          <div class="hero-quick-roadmap">
            <button class="roadmap-pill-btn roadmap-ch1" data-nav-chapter="1">
              <span class="ch-badge">Chương 1</span>
              <span class="ch-name">Đối Tượng &amp; Phương Pháp</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch2" data-nav-chapter="2">
              <span class="ch-badge">Chương 2</span>
              <span class="ch-name">Hàng Hóa &amp; Thị Trường</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch3" data-nav-chapter="3">
              <span class="ch-badge">Chương 3</span>
              <span class="ch-name">Giá Trị Thặng Dư (m)</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch4" data-nav-chapter="4">
              <span class="ch-badge">Chương 4</span>
              <span class="ch-name">Cạnh Tranh &amp; Độc Quyền</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch5" data-nav-chapter="5">
              <span class="ch-badge">Chương 5</span>
              <span class="ch-name">KTTT Định Hướng XHCN</span>
              <span class="ch-arrow">→</span>
            </button>
            <button class="roadmap-pill-btn roadmap-ch6" data-nav-chapter="6">
              <span class="ch-badge">Chương 6</span>
              <span class="ch-name">CNH 4.0 &amp; Hội Nhập</span>
              <span class="ch-arrow">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  `;

  // Attach button events
  document.getElementById('hero-start-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('map');
  });

  const resetBtn = document.getElementById('hero-reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      sound.playClick();
      if (confirm('Bạn có chắc chắn muốn làm lại từ đầu không? Toàn bộ điểm kinh nghiệm và tiến trình làm bài sẽ được đặt lại về 0.')) {
        stateManager.resetAllProgress();
        sound.playComplete();
        renderLandingHero(container, onNavigate);
      }
    });
  }

  document.getElementById('hero-detective-btn').addEventListener('click', () => {
    sound.playClick();
    onNavigate('detective');
  });

  const tycoonBtn = document.getElementById('hero-tycoon-btn');
  if (tycoonBtn) {
    tycoonBtn.addEventListener('click', () => {
      sound.playClick();
      onNavigate('tycoon');
    });
  }

  container.querySelectorAll('[data-nav-chapter]').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      const chNum = btn.getAttribute('data-nav-chapter');
      onNavigate('map', { scrollToChapter: chNum });
    });
  });

  const detNav = container.querySelector('[data-nav-detective]');
  if (detNav) {
    detNav.addEventListener('click', () => {
      sound.playClick();
      onNavigate('detective');
    });
  }
}
