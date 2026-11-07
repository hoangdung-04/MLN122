import { sound } from '../core/audio.js';
import { stateManager } from '../core/state.js';

export function renderLandingHero(container, onNavigate) {
  const hasProgress = stateManager.state.xp > 0 || 
    Object.keys(stateManager.state.completedScenarios).length > 0 ||
    Object.keys(stateManager.state.detectiveSolved).length > 0;

  container.innerHTML = `
    <section class="hero-fullscreen animate-fade-in">
      <!-- Ambient Background Glow -->
      <div class="hero-ambient-bg"></div>

      <div class="container" style="position: relative; z-index: 2;">
        <div class="hero-grid-main">
          
          <!-- LEFT COLUMN: Content, Headline, Quote & Actions -->
          <div>
            <!-- Badge -->
            <div class="hero-badge-tag">
              <span>🏛️</span>
              <span>MÔN HỌC MLN122 • KINH TẾ CHÍNH TRỊ MÁC – LÊNIN</span>
            </div>

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
                <span style="font-size: 1.2rem;">→</span>
              </button>
              ${hasProgress ? `
                <button class="btn-secondary" id="hero-reset-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(220, 38, 38, 0.35); color: var(--accent-crimson);">
                  <span>↺ LÀM LẠI TỪ ĐẦU</span>
                </button>
              ` : ''}
              <button class="btn-secondary" id="hero-detective-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem;">
                <span>🔍 PHÒNG PHÁ ÁN KINH TẾ</span>
              </button>
              <button class="btn-secondary" id="hero-tycoon-btn" style="padding: 0.95rem 1.8rem; font-size: 1rem; border-color: rgba(217, 119, 6, 0.4); color: var(--accent-gold);">
                <span>🏭 THAO TRƯỜNG TYCOON</span>
              </button>
            </div>

            <!-- Quick Chapter Roadmap Navigation -->
            <div>
              <div style="font-size: 0.78rem; font-weight: 800; color: var(--text-dim); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 0.7rem;">
                LỘ TRÌNH 6 CHƯƠNG MLN122:
              </div>
              <div class="hero-quick-roadmap">
                <button class="roadmap-pill-btn" data-nav-chapter="1">
                  Ch.1: Đối Tượng &amp; Phương Pháp
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="2" style="border-color: rgba(5, 150, 105, 0.4); color: var(--accent-emerald);">
                  Ch.2: Hàng Hóa &amp; Thị Trường
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="3" style="border-color: rgba(217, 119, 6, 0.4); color: var(--accent-gold);">
                  Ch.3: Giá Trị Thặng Dư (m)
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="4" style="border-color: rgba(139, 92, 246, 0.4); color: var(--accent-purple);">
                  Ch.4: Cạnh Tranh &amp; Độc Quyền
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="5" style="border-color: rgba(236, 72, 153, 0.4); color: #db2777;">
                  Ch.5: KTTT Định Hướng XHCN
                </button>
                <button class="roadmap-pill-btn" data-nav-chapter="6" style="border-color: rgba(6, 182, 212, 0.4); color: #0891b2;">
                  Ch.6: CNH 4.0 &amp; Hội Nhập
                </button>
                <button class="roadmap-pill-btn" data-nav-detective="true" style="border-color: rgba(220, 38, 38, 0.4); color: var(--accent-crimson);">
                  🔍 Phá Án Kinh Tế
                </button>
              </div>
            </div>
          </div>

          <!-- RIGHT COLUMN: Full-Height Classic Portrait of Lenin, Engels & Marx -->
          <div>
            <div class="hero-portrait-frame">
              <img 
                src="./assets/images/portraits/marx-engels-lenin.png" 
                alt="Chân dung V.I. Lênin, Ph. Ăng-ghen và C. Mác" 
                class="hero-portrait-img" 
              />
              <div class="hero-portrait-caption">
                <div class="cap-names">C. MÁC • PH. ĂNG-GHEN • V.I. LÊNIN</div>
                <div class="cap-sub">NHỮNG BẬC THẦY ĐẶT NỀN MÓNG KINH TẾ CHÍNH TRỊ KHOA HỌC</div>
              </div>
            </div>
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
