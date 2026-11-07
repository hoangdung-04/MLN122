import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderInteractiveSlider(container, onBackToMap) {
  let hours = 8;
  let hasTriggeredLeap = false;

  // Necessary labor time fixed at 4 hours
  const necessaryTime = 4;

  function calculateMetrics(h) {
    const surplusTime = Math.max(0, h - necessaryTime);
    const mPrime = Math.round((surplusTime / necessaryTime) * 100);

    let stageInfo = {};
    if (h <= 4) {
      stageInfo = {
        title: 'Ngày làm việc 4h: Hòa vốn (m\' = 0%)',
        desc: 'Người lao động chỉ vừa đủ thời gian tạo ra lượng giá trị ngang bằng giá trị sức lao động (tiền lương). Nhà tư bản chưa thu được bất kỳ đồng giá trị thặng dư (m) nào!',
        badge: 'CHƯA CÓ GIÁ TRỊ THẶNG DƯ',
        color: '#64748b',
        icon: '⚖️',
        img: './assets/images/slider/stage-beginner.svg'
      };
    } else if (h <= 8) {
      stageInfo = {
        title: `Ngày làm việc ${h}h: Tiêu chuẩn công nghiệp (m' = ${mPrime}%)`,
        desc: `Trong đó có 4h lao động tất yếu và ${surplusTime}h lao động thặng dư. Nhà tư bản thu được tỷ suất giá trị thặng dư m' = ${mPrime}%. Đây là mức phân bổ phổ biến trong nền kinh tế thị trường có luật lao động điều tiết.`,
        badge: 'GTTD TIÊU CHUẨN',
        color: '#2563eb',
        icon: '🏭',
        img: './assets/images/slider/stage-measure.svg'
      };
    } else if (h < 11) {
      stageInfo = {
        title: `Ngày làm việc ${h}h: Tăng ca cường độ cao (m' = ${mPrime}%)`,
        desc: `Thời gian thặng dư lên tới ${surplusTime}h, gấp hơn 1.5 lần thời gian tất yếu! Tỷ suất bóc lột m' = ${mPrime}%. Lợi nhuận nhà tư bản phình to nhưng sức khỏe và tinh thần người lao động bắt đầu suy giảm nghiêm trọng.`,
        badge: 'GTTD TUYỆT ĐỐI CAO ĐỘ',
        color: '#d97706',
        icon: '⚠️',
        img: './assets/images/slider/stage-node.svg'
      };
    } else {
      stageInfo = {
        title: `BÁO ĐỘNG ĐỎ: BÓC LỘT CỰC ĐỘ ${h}h (m' = ${mPrime}%)!`,
        desc: `BÙNG NỔ! Ngày lao động kéo dài tới ${h}h (thặng dư ${surplusTime}h, m' = ${mPrime}%). Vượt quá giới hạn chịu đựng sinh học tự nhiên của con người! C. Mác chỉ rõ: Tư bản vì lòng tham giá trị thặng dư tuyệt đối sẵn sàng vắt kiệt sức lao động, tất yếu dẫn tới phong trào đấu tranh bãi công của giai cấp công nhân!`,
        badge: 'BÙNG NỔ MÂU THUẪN GIAI CẤP!',
        color: '#dc2626',
        icon: '⚡💥',
        img: './assets/images/slider/stage-leap.svg'
      };
    }

    return { surplusTime, mPrime, stageInfo };
  }

  function renderView() {
    const { surplusTime, mPrime, stageInfo } = calculateMetrics(hours);
    const isLeapActive = hours >= 11;

    // Width percentages for the segmented visual bar
    const totalMax = 14;
    const necWidth = (necessaryTime / totalMax) * 100;
    const surWidth = (surplusTime / totalMax) * 100;

    container.innerHTML = `
      <div class="container animate-fade-in" style="padding: 2.5rem 0 5.5rem;">
        <!-- Nav Header -->
        <div class="scenario-header-nav">
          <button class="back-to-map-btn" id="slider-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <span class="badge-pill" style="background: var(--accent-gold-light); color: var(--accent-amber); border: 1.5px solid rgba(217, 119, 6, 0.35);">
            PHÒNG THÍ NGHIỆM TƯƠNG TÁC: NGÀY LAO ĐỘNG &amp; GIÁ TRỊ THẶNG DƯ (m)
          </span>
        </div>

        <div class="slider-lab-card">
          <!-- Visual Dynamic Stage Area with SVG Stage Illustration -->
          <div class="lab-visual-area">
            ${isLeapActive ? `
              <div class="leap-blast-overlay">
                <div class="leap-burst-badge">💥 BÁO ĐỘNG BÓC LỘT CỰC ĐỘ!</div>
              </div>
            ` : ''}

            <div class="lab-state-avatar" style="width: 100%; max-width: 580px;">
              <img src="${stageInfo.img}" alt="${stageInfo.title}" style="width: 100%; max-height: 160px; object-fit: contain; margin-bottom: 1.2rem; filter: drop-shadow(0 6px 16px rgba(0,0,0,0.1));" />
              <div class="lab-state-title" style="color: ${stageInfo.color};">
                ${stageInfo.title}
              </div>
              <p class="lab-state-desc" style="margin: 0 auto;">${stageInfo.desc}</p>
            </div>
          </div>

          <!-- Segmented Visual Bar representing Working Day Breakdown -->
          <div style="margin: 2rem 0; background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; font-family: var(--font-heading); font-weight: 800; font-size: 0.95rem;">
              <span>SƠ ĐỒ PHÂN CHIA NGÀY LAO ĐỘNG (${hours} GIỜ):</span>
              <span style="color: var(--accent-blue); font-size: 1.15rem;">
                Tỷ suất GTTD m' = <strong>${mPrime}%</strong>
              </span>
            </div>

            <!-- Two-tone bar -->
            <div style="height: 28px; width: 100%; background: #e2e8f0; border-radius: var(--radius-full); overflow: hidden; display: flex; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
              <div style="width: ${necWidth}%; height: 100%; background: linear-gradient(90deg, #059669, #10b981); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;" title="Thời gian lao động tất yếu">
                Tất yếu: ${necessaryTime}h (v)
              </div>
              <div style="width: ${surWidth}%; height: 100%; background: linear-gradient(90deg, #f59e0b, #ef4444); display: flex; align-items: center; justify-content: center; color: #ffffff; font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; transition: width 0.3s ease;" title="Thời gian lao động thặng dư">
                ${surplusTime > 0 ? `Thặng dư: ${surplusTime}h (m)` : ''}
              </div>
            </div>

            <div style="display: flex; justify-content: space-between; margin-top: 0.6rem; font-size: 0.8rem; font-weight: 700; color: var(--text-dim); font-family: var(--font-heading);">
              <span style="color: var(--accent-emerald);">🟢 Lao động tất yếu (tạo giá trị ngang lương)</span>
              <span style="color: var(--accent-crimson);">🔴 Lao động thặng dư (tạo ra m cho chủ tư bản)</span>
            </div>
          </div>

          <!-- Slider Controls -->
          <div class="slider-control-box">
            <div class="slider-labels-row">
              <span style="color: var(--text-muted);">Kéo thanh trượt điều chỉnh độ dài Ngày Lao Động:</span>
              <span style="color: var(--accent-gold); font-size: 1.35rem; font-weight: 800; font-family: var(--font-heading);">
                <span id="slider-val-display">${hours}</span> Giờ / Ngày
              </span>
            </div>

            <!-- Range input -->
            <input 
              type="range" 
              class="slider-input-track" 
              id="hours-slider-input" 
              min="4" 
              max="14" 
              step="1" 
              value="${hours}" 
            />

            <!-- Markers -->
            <div class="node-markers">
              <div class="node-point-flag" style="left: ${(8 - 4) / (14 - 4) * 100}%;">
                <span>CHUẨN (8h)</span>
              </div>
              <div class="node-point-flag" style="left: ${(11 - 4) / (14 - 4) * 100}%; border-color: #ef4444; color: #ef4444; background: #fee2e2;">
                <span>CỰC ĐỘ (11h)</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.78rem; font-weight: 700; color: var(--text-dim); margin-top: 1.2rem; font-family: var(--font-heading);">
                <span>4h (m' = 0%)</span>
                <span>8h (m' = 100%)</span>
                <span>11h (m' = 175%)</span>
                <span>14h (m' = 250%)</span>
              </div>
            </div>
          </div>

          <!-- Philosophy Breakdown Box -->
          <div style="background: var(--bg-alt); border-radius: var(--radius-lg); padding: 2rem; border-left: 4px solid var(--accent-blue); border-top: 1px solid var(--border-subtle); border-right: 1px solid var(--border-subtle); border-bottom: 1px solid var(--border-subtle); margin-top: 2rem; box-shadow: 0 4px 14px rgba(15, 23, 42, 0.03);">
            <h4 style="font-size: 1.2rem; color: var(--accent-blue); margin-bottom: 0.8rem; font-family: var(--font-heading);">
              📚 Luận điểm Kinh tế chính trị Mác – Lênin (MLN122):
            </h4>
            <ul style="padding-left: 1.6rem; line-height: 1.85; color: var(--text-main); font-size: 1rem;">
              <li><strong>Thời gian lao động tất yếu (t):</strong> Là phần thời gian mà người lao động tạo ra một lượng giá trị ngang bằng với giá trị sức lao động của chính mình (được trả bằng tiền lương v).</li>
              <li><strong>Thời gian lao động thặng dư (t'):</strong> Là phần thời gian lao động vượt quá thời gian tất yếu, tạo ra giá trị thặng dư (m) bị nhà tư bản chiếm đoạt không bồi hoàn.</li>
              <li><strong>Tỷ suất giá trị thặng dư (m'):</strong> Công thức: <code>m' = (m / v) * 100% = (t' / t) * 100%</code>, phản ánh chính xác trình độ bóc lột của tư bản đối với lao động làm thuê.</li>
              <li><strong>Sản xuất GTTD tuyệt đối:</strong> Phương pháp thu GTTD bằng cách kéo dài ngày làm việc vượt quá thời gian tất yếu trong điều kiện năng suất lao động không đổi.</li>
              <li><strong>Sản xuất GTTD tương đối:</strong> Phương pháp thu GTTD bằng cách rút ngắn thời gian lao động tất yếu nhờ tăng năng suất lao động xã hội, nhờ đó thời gian thặng dư tăng lên dù độ dài ngày làm việc không đổi.</li>
            </ul>
          </div>

          <!-- Methodological Takeaway -->
          <div style="margin-top: 1.8rem; text-align: center; padding: 1.5rem; background: var(--accent-emerald-light); border: 1.5px solid rgba(5, 150, 105, 0.35); border-radius: var(--radius-lg); box-shadow: 0 4px 14px rgba(5, 150, 105, 0.08);">
            <p style="font-size: 1.05rem; color: var(--accent-emerald-dark); font-weight: 700; line-height: 1.7;">
              💡 <strong>Bài học quản trị &amp; đời sống:</strong> Chiến lược bóc lột bằng cách kéo dài thời gian làm việc (GTTD tuyệt đối) tất yếu chạm trần giới hạn thể lực và gây bất mãn; con đường phát triển văn minh, nhân văn và bền vững là đầu tư công nghệ, tự động hóa để tăng năng suất lao động (GTTD tương đối) và chia sẻ thành quả công bằng với người lao động!
            </p>
          </div>
        </div>
      </div>
    `;

    // Attach listeners
    document.getElementById('slider-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    const sliderInput = document.getElementById('hours-slider-input');
    sliderInput.addEventListener('input', (e) => {
      hours = parseInt(e.target.value, 10);
      document.getElementById('slider-val-display').textContent = hours;

      if (hours >= 11 && !hasTriggeredLeap) {
        hasTriggeredLeap = true;
        sound.playLeapBoom();
        stateManager.recordSliderLeap();
      } else if (hours < 11) {
        hasTriggeredLeap = false;
      }

      renderView();
      // Keep input focused
      const newInput = document.getElementById('hours-slider-input');
      if (newInput) newInput.focus();
    });
  }

  renderView();
}
