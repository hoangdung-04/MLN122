import fs from 'fs';
import path from 'path';

const outDir = path.resolve('assets/images/scenarios');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function createSVG(config) {
  const { title, subtitle, badgeText, badgeColor, mainGraphics, tagLeft, tagRight } = config;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <linearGradient id="greenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#34d399" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c084fc" />
      <stop offset="100%" stop-color="#7c3aed" />
    </linearGradient>
    <linearGradient id="roseGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fb7185" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#0891b2" />
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="450" rx="20" fill="url(#bgGrad)" />

  <!-- Subtle Blueprint Grid Lines -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.45">
    <line x1="0" y1="75" x2="800" y2="75"/>
    <line x1="0" y1="150" x2="800" y2="150"/>
    <line x1="0" y1="225" x2="800" y2="225"/>
    <line x1="0" y1="300" x2="800" y2="300"/>
    <line x1="0" y1="375" x2="800" y2="375"/>
    <line x1="160" y1="0" x2="160" y2="450"/>
    <line x1="320" y1="0" x2="320" y2="450"/>
    <line x1="480" y1="0" x2="480" y2="450"/>
    <line x1="640" y1="0" x2="640" y2="450"/>
  </g>

  <!-- Top Left Badge -->
  <g transform="translate(40, 32)">
    <rect width="210" height="28" rx="14" fill="#1e293b" stroke="${badgeColor}" stroke-width="1.5" />
    <circle cx="16" cy="14" r="5" fill="${badgeColor}" />
    <text x="30" y="18" fill="#e2e8f0" font-family="'Be Vietnam Pro', system-ui, sans-serif" font-size="11" font-weight="800" letter-spacing="1">MLN122 • ${badgeText}</text>
  </g>

  <!-- Top Right Title & Subtitle -->
  <text x="760" y="44" fill="${badgeColor}" font-family="'Be Vietnam Pro', system-ui, sans-serif" font-size="13" font-weight="800" text-anchor="end" letter-spacing="0.5">${title}</text>
  <text x="760" y="64" fill="#94a3b8" font-family="'Be Vietnam Pro', system-ui, sans-serif" font-size="11" font-weight="600" text-anchor="end">${subtitle}</text>

  <!-- Main Illustration Graphics -->
  ${mainGraphics}

  <!-- Bottom Metadata -->
  <text x="40" y="422" fill="#475569" font-family="'Be Vietnam Pro', system-ui, sans-serif" font-size="11" font-weight="700">${tagLeft || 'KINH TẾ CHÍNH TRỊ TRONG ĐỜI SỐNG'}</text>
  <text x="760" y="422" fill="#475569" font-family="'Be Vietnam Pro', system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="end">${tagRight || 'MLN122 • KHOA HỌC KINH TẾ CHÍNH TRỊ MÁC – LÊNIN'}</text>
</svg>
`;
}

const scenarioSVGs = {
  // CHAPTER 1: ĐỐI TƯỢNG & PHƯƠNG PHÁP
  'c1-s1.svg': {
    title: 'QUAN HỆ SẢN XUẤT & TRAO ĐỔI',
    subtitle: 'Đối tượng nghiên cứu của Kinh tế chính trị Mác – Lênin',
    badgeText: 'CHƯƠNG 1 • ĐỐI TƯỢNG',
    badgeColor: '#38bdf8',
    mainGraphics: `
      <!-- Center Relations of Production Flow -->
      <g transform="translate(180, 220)">
        <rect x="-85" y="-60" width="170" height="120" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="0" y="-20" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">SỞ HỮU TLSX</text>
        <circle cx="0" cy="15" r="22" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="0" y="21" fill="#bae6fd" font-size="18" text-anchor="middle">⚙️</text>
        <text x="0" y="48" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Tư liệu sản xuất</text>
      </g>

      <path d="M265 220 L335 220" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 4"/>
      <polygon points="335,215 345,220 335,225" fill="#38bdf8"/>

      <g transform="translate(425, 220)">
        <rect x="-85" y="-60" width="170" height="120" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="0" y="-20" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">TỔ CHỨC QUẢN LÝ</text>
        <circle cx="0" cy="15" r="22" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="0" y="21" fill="#bae6fd" font-size="18" text-anchor="middle">📊</text>
        <text x="0" y="48" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Phân công lao động</text>
      </g>

      <path d="M510 220 L580 220" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6 4"/>
      <polygon points="580,215 590,220 580,225" fill="#38bdf8"/>

      <g transform="translate(665, 220)">
        <rect x="-85" y="-60" width="170" height="120" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="0" y="-20" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">PHÂN PHỐI SẢN PHẨM</text>
        <circle cx="0" cy="15" r="22" fill="rgba(56, 189, 248, 0.15)"/>
        <text x="0" y="21" fill="#bae6fd" font-size="18" text-anchor="middle">⚖️</text>
        <text x="0" y="48" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Lợi ích kinh tế</text>
      </g>
    `
  },
  'c1-s2.svg': {
    title: 'TRỪU TƯỢNG HÓA KHOA HỌC',
    subtitle: 'Gạt bỏ hiện tượng bề ngoài, tìm bản chất quy luật',
    badgeText: 'CHƯƠNG 1 • PHƯƠNG PHÁP',
    badgeColor: '#38bdf8',
    mainGraphics: `
      <g transform="translate(240, 220)">
        <rect x="-110" y="-70" width="220" height="140" rx="16" fill="#1e293b" stroke="#64748b" stroke-width="2" stroke-dasharray="4 4"/>
        <text x="0" y="-35" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">HIỆN TƯỢNG BỀ NGOÀI</text>
        <text x="0" y="-5" fill="#e2e8f0" font-family="'Be Vietnam Pro', sans-serif" font-size="12" text-anchor="middle">• Biến động giá thị trường</text>
        <text x="0" y="18" fill="#e2e8f0" font-family="'Be Vietnam Pro', sans-serif" font-size="12" text-anchor="middle">• Tâm lý nhất thời</text>
        <text x="0" y="40" fill="#ef4444" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">[Gạt bỏ yếu tố ngẫu nhiên]</text>
      </g>

      <!-- Scientific Funnel -->
      <path d="M370 220 L430 220" stroke="#38bdf8" stroke-width="4"/>
      <polygon points="430,212 445,220 430,228" fill="#38bdf8"/>
      <circle cx="400" cy="180" r="18" fill="rgba(56, 189, 248, 0.2)"/>
      <text x="400" y="185" fill="#38bdf8" font-size="14" text-anchor="middle">🔬</text>

      <g transform="translate(560, 220)">
        <rect x="-110" y="-70" width="220" height="140" rx="16" fill="#0c4a6e" stroke="#38bdf8" stroke-width="3"/>
        <text x="0" y="-35" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="900" text-anchor="middle">BẢN CHẤT QUY LUẬT</text>
        <text x="0" y="-5" fill="#f0f9ff" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Quy luật giá trị</text>
        <text x="0" y="18" fill="#f0f9ff" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Quy luật Cung - Cầu</text>
        <text x="0" y="45" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">✓ BẢN CHẤT CỐT LÕI</text>
      </g>
    `
  },
  'c1-s3.svg': {
    title: '4 CHỨC NĂNG CỦA KTCT',
    subtitle: 'Nhận thức • Thực tiễn • Tư tưởng • Phương pháp luận',
    badgeText: 'CHƯƠNG 1 • CHỨC NĂNG',
    badgeColor: '#38bdf8',
    mainGraphics: `
      <g transform="translate(400, 220)">
        <!-- Center Hub -->
        <circle cx="0" cy="0" r="45" fill="#0284c7" stroke="#38bdf8" stroke-width="3"/>
        <text x="0" y="-5" fill="#ffffff" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">KTCT</text>
        <text x="0" y="15" fill="#e0f2fe" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">MÁC-LÊNIN</text>

        <!-- 4 Nodes -->
        <!-- Top: Nhận thức -->
        <rect x="-80" y="-140" width="160" height="50" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="0" y="-110" fill="#bae6fd" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">🧠 1. NHẬN THỨC</text>
        <line x1="0" y1="-90" x2="0" y2="-45" stroke="#38bdf8" stroke-width="2"/>

        <!-- Bottom: Thực tiễn -->
        <rect x="-80" y="90" width="160" height="50" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="0" y="120" fill="#a7f3d0" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">🚀 2. THỰC TIỄN</text>
        <line x1="0" y1="45" x2="0" y2="90" stroke="#10b981" stroke-width="2"/>

        <!-- Left: Tư tưởng -->
        <rect x="-240" y="-25" width="150" height="50" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-165" y="6" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">💡 3. TƯ TƯỞNG</text>
        <line x1="-90" y1="0" x2="-45" y2="0" stroke="#f59e0b" stroke-width="2"/>

        <!-- Right: Phương pháp luận -->
        <rect x="90" y="-25" width="160" height="50" rx="10" fill="#1e293b" stroke="#8b5cf6" stroke-width="2"/>
        <text x="170" y="6" fill="#ddd6fe" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">📐 4. PHƯƠNG PHÁP</text>
        <line x1="45" y1="0" x2="90" y2="0" stroke="#8b5cf6" stroke-width="2"/>
      </g>
    `
  },

  // CHAPTER 2: HÀNG HÓA & THỊ TRƯỜNG
  'c2-s1.svg': {
    title: 'HAI THUỘC TÍNH CỦA HÀNG HÓA',
    subtitle: 'Giá trị sử dụng (Công dụng) vs Giá trị (Lao động xã hội)',
    badgeText: 'CHƯƠNG 2 • HÀNG HÓA',
    badgeColor: '#10b981',
    mainGraphics: `
      <!-- Scale Beam -->
      <g transform="translate(400, 220)">
        <!-- Fulcrum Base -->
        <polygon points="-25,120 25,120 0,60" fill="#334155"/>
        <line x1="0" y1="60" x2="0" y2="-40" stroke="#64748b" stroke-width="6"/>
        <circle cx="0" cy="-40" r="10" fill="#10b981"/>
        <line x1="-220" y1="-40" x2="220" y2="-40" stroke="#10b981" stroke-width="6"/>

        <!-- Left Pan: Giá trị sử dụng -->
        <line x1="-220" y1="-40" x2="-220" y2="20" stroke="#94a3b8" stroke-width="2"/>
        <rect x="-300" y="20" width="160" height="90" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
        <text x="-220" y="48" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">GIÁ TRỊ SỬ DỤNG</text>
        <text x="-220" y="70" fill="#e2e8f0" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Công dụng vật chất</text>
        <text x="-220" y="90" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Thỏa mãn nhu cầu</text>

        <!-- Right Pan: Giá trị -->
        <line x1="220" y1="-40" x2="220" y2="20" stroke="#94a3b8" stroke-width="2"/>
        <rect x="140" y="20" width="160" height="90" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="220" y="48" fill="#fbbf24" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">GIÁ TRỊ HÀNG HÓA</text>
        <text x="220" y="70" fill="#e2e8f0" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Lao động xã hội kết tinh</text>
        <text x="220" y="90" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="10" font-weight="700" text-anchor="middle">Biểu hiện qua Giá cả</text>
      </g>
    `
  },
  'c2-s2.svg': {
    title: 'TÍNH HAI MẶT CỦA LAO ĐỘNG SẢN XUẤT',
    subtitle: 'Lao động cụ thể (Tạo ra GTSD) vs Lao động trừu tượng (Tạo ra Giá trị)',
    badgeText: 'CHƯƠNG 2 • TÍNH HAI MẶT',
    badgeColor: '#10b981',
    mainGraphics: `
      <g transform="translate(400, 220)">
        <!-- Top: One labor activity -->
        <rect x="-140" y="-130" width="280" height="50" rx="12" fill="#0f172a" stroke="#10b981" stroke-width="2.5"/>
        <text x="0" y="-98" fill="#ffffff" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="900" text-anchor="middle">LAO ĐỘNG SẢN XUẤT HÀNG HÓA</text>

        <!-- Fork lines -->
        <path d="M-60 -80 L-140 -20" stroke="#10b981" stroke-width="3"/>
        <path d="M60 -80 L140 -20" stroke="#f59e0b" stroke-width="3"/>

        <!-- Left Box: Cụ thể -->
        <rect x="-240" y="-20" width="180" height="110" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="-150" y="10" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">LAO ĐỘNG CỤ THỂ</text>
        <text x="-150" y="32" fill="#cbd5e1" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Nghề nghiệp, công cụ riêng</text>
        <text x="-150" y="65" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">➔ Tạo ra GTSD</text>

        <!-- Right Box: Trừu tượng -->
        <rect x="60" y="-20" width="180" height="110" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="150" y="10" fill="#fbbf24" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">LAO ĐỘNG TRỪU TƯỢNG</text>
        <text x="150" y="32" fill="#cbd5e1" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Hao phí óc, bắp thịt chung</text>
        <text x="150" y="65" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">➔ Tạo ra GIÁ TRỊ</text>
      </g>
    `
  },
  'c2-s3.svg': {
    title: 'NĂNG SUẤT VS CƯỜNG ĐỘ LAO ĐỘNG',
    subtitle: 'Tăng NSLĐ (Giá trị 1 sp giảm) vs Tăng CĐLĐ (Giá trị 1 sp không đổi)',
    badgeText: 'CHƯƠNG 2 • NSLĐ VS CĐLĐ',
    badgeColor: '#10b981',
    mainGraphics: `
      <g transform="translate(250, 220)">
        <rect x="-110" y="-75" width="220" height="150" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
        <text x="0" y="-40" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="800" text-anchor="middle">TĂNG NĂNG SUẤT LĐ</text>
        <text x="0" y="-12" fill="#e2e8f0" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Ứng dụng máy móc & AI ⚡</text>
        <text x="0" y="15" fill="#6ee7b7" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Sản lượng tổng: TĂNG ⬆️</text>
        <text x="0" y="42" fill="#f43f5e" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">Giá trị 1 sản phẩm: GIẢM ⬇️</text>
      </g>

      <text x="400" y="225" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="18" font-weight="900" text-anchor="middle">VS</text>

      <g transform="translate(550, 220)">
        <rect x="-110" y="-75" width="220" height="150" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="0" y="-40" fill="#fbbf24" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="800" text-anchor="middle">TĂNG CƯỜNG ĐỘ LĐ</text>
        <text x="0" y="-12" fill="#e2e8f0" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Tăng ca, khẩn trương hơn ⏳</text>
        <text x="0" y="15" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Sản lượng tổng: TĂNG ⬆️</text>
        <text x="0" y="42" fill="#f59e0b" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">Giá trị 1 sản phẩm: KHÔNG ĐỔI ↔️</text>
      </g>
    `
  },
  'c2-s4.svg': {
    title: 'QUY LUẬT GIÁ TRỊ & CƠ CHẾ THỊ TRƯỜNG',
    subtitle: 'Giá cả thị trường vận động xoay quanh trục Giá trị',
    badgeText: 'CHƯƠNG 2 • QUY LUẬT GIÁ TRỊ',
    badgeColor: '#10b981',
    mainGraphics: `
      <!-- Center Line: Axis of Value -->
      <line x1="160" y1="225" x2="640" y2="225" stroke="#f59e0b" stroke-width="4" stroke-dasharray="8 6"/>
      <text x="645" y="230" fill="#f59e0b" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800">TRỤC GIÁ TRỊ</text>

      <!-- Sine Wave: Market Price -->
      <path d="M 160 225 Q 240 130, 320 225 T 480 225 T 640 225" fill="none" stroke="#38bdf8" stroke-width="4"/>
      <circle cx="240" cy="155" r="8" fill="#38bdf8"/>
      <text x="240" y="135" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">Cung &lt; Cầu (Giá &gt; Giá trị)</text>

      <circle cx="400" cy="295" r="8" fill="#ef4444"/>
      <text x="400" y="325" fill="#ef4444" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">Cung &gt; Cầu (Giá &lt; Giá trị)</text>

      <rect x="250" y="350" width="300" height="35" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
      <text x="400" y="372" fill="#a7f3d0" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Tổng giá cả = Tổng giá trị (Toàn xã hội)</text>
    `
  },
  'c2-s5.svg': {
    title: 'CÁC CHỦ THỂ THAM GIA THỊ TRƯỜNG',
    subtitle: 'Người sản xuất • Người tiêu dùng • Trung gian • Nhà nước',
    badgeText: 'CHƯƠNG 2 • CHỦ THỂ THỊ TRƯỜNG',
    badgeColor: '#10b981',
    mainGraphics: `
      <!-- 4 Connected Nodes in Cycle -->
      <g transform="translate(400, 220)">
        <rect x="-180" y="-120" width="160" height="60" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="-100" y="-95" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">🏭 NGƯỜI SẢN XUẤT</text>
        <text x="-100" y="-75" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Cung cấp hàng hóa</text>

        <rect x="20" y="-120" width="160" height="60" rx="12" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="100" y="-95" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">🛒 NGƯỜI TIÊU DÙNG</text>
        <text x="100" y="-75" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Động lực phát triển</text>

        <rect x="-180" y="40" width="160" height="60" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-100" y="65" fill="#fbbf24" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">🤝 CHỦ THỂ TRUNG GIAN</text>
        <text x="-100" y="85" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Logistics, Sàn TMĐT</text>

        <rect x="20" y="40" width="160" height="60" rx="12" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="100" y="65" fill="#f472b6" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">🏛️ NHÀ NƯỚC</text>
        <text x="100" y="85" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Kiến tạo & Điều tiết</text>

        <circle cx="0" cy="-10" r="28" fill="#0f172a" stroke="#ffffff" stroke-width="2"/>
        <text x="0" y="-5" fill="#ffffff" font-size="14" text-anchor="middle">🔄</text>
      </g>
    `
  },

  // CHAPTER 3: GIÁ TRỊ THẶNG DƯ (TRỌNG TÂM)
  'c3-s1.svg': {
    title: 'HÀNG HÓA SỨC LAO ĐỘNG & NGUỒN GỐC GTTD',
    subtitle: 'Khả năng tạo ra lượng giá trị lớn hơn giá trị bản thân (m)',
    badgeText: 'CHƯƠNG 3 • HẠT NHÂN GTTD',
    badgeColor: '#f59e0b',
    mainGraphics: `
      <!-- Working Day Split -->
      <g transform="translate(150, 200)">
        <text x="250" y="-40" fill="#f59e0b" font-family="'Be Vietnam Pro', sans-serif" font-size="15" font-weight="900" text-anchor="middle">KẾT CẤU NGÀY LAO ĐỘNG (8 GIỜ)</text>
        <!-- Time Necessary: 4h -->
        <rect x="0" y="0" width="240" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="120" y="30" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">THỜI GIAN TẤT YẾU (v)</text>
        <text x="120" y="50" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Tái sản xuất giá trị SLĐ (Lương)</text>

        <!-- Surplus Time: 4h -->
        <rect x="250" y="0" width="250" height="65" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="375" y="30" fill="#fbbf24" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">THỜI GIAN THẶNG DƯ (m)</text>
        <text x="375" y="50" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Bị nhà tư bản chiếm đoạt không công</text>
      </g>

      <rect x="200" y="315" width="400" height="40" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="400" y="340" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">Tỷ suất GTTD: m' = (m / v) × 100% = 100%</text>
    `
  },
  'c3-s2.svg': {
    title: 'HAI PHƯƠNG PHÁP SẢN XUẤT GTTD',
    subtitle: 'GTTD Tuyệt đối (Kéo dài giờ làm) vs GTTD Tương đối (Rút ngắn giờ tất yếu)',
    badgeText: 'CHƯƠNG 3 • PHƯƠNG PHÁP GTTD',
    badgeColor: '#f59e0b',
    mainGraphics: `
      <!-- Method 1: Absolute -->
      <g transform="translate(150, 160)">
        <text x="0" y="-10" fill="#ef4444" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800">1. GTTD TUYỆT ĐỐI (Kéo dài ngày làm việc 8h ➔ 12h):</text>
        <rect x="0" y="10" width="200" height="35" rx="6" fill="#334155"/>
        <text x="100" y="32" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">Tất yếu (4h)</text>
        <rect x="205" y="10" width="300" height="35" rx="6" fill="#7f1d1d" stroke="#ef4444" stroke-width="2"/>
        <text x="355" y="32" fill="#fca5a5" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">Thặng dư m kéo dài (8h) ➔ m' = 200%</text>
      </g>

      <!-- Method 2: Relative -->
      <g transform="translate(150, 260)">
        <text x="0" y="-10" fill="#10b981" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800">2. GTTD TƯƠNG ĐỐI (Áp dụng công nghệ, ngày 8h giữ nguyên):</text>
        <rect x="0" y="10" width="120" height="35" rx="6" fill="#334155"/>
        <text x="60" y="32" fill="#94a3b8" font-size="11" font-weight="700" text-anchor="middle">Rút còn (2h)</text>
        <rect x="125" y="10" width="380" height="35" rx="6" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
        <text x="315" y="32" fill="#6ee7b7" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">Thặng dư m tự nhiên tăng lên (6h) ➔ m' = 300%</text>
      </g>
    `
  },
  'c3-slider.svg': {
    title: 'PHÒNG THÍ NGHIỆM TỶ SUẤT BÓC LỘT (m\')',
    subtitle: 'Mô phỏng tương tác: Điều chỉnh ngày lao động & năng suất',
    badgeText: 'CHƯƠNG 3 • SIMULATOR',
    badgeColor: '#ec4899',
    mainGraphics: `
      <!-- Interactive Gauge -->
      <g transform="translate(400, 210)">
        <circle cx="0" cy="0" r="90" fill="#1e293b" stroke="#ec4899" stroke-width="4"/>
        <path d="M-60 40 A 75 75 0 1 1 60 40" fill="none" stroke="#f43f5e" stroke-width="12" stroke-linecap="round"/>
        <line x1="0" y1="0" x2="35" y2="-45" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="12" fill="#ec4899"/>
        <text x="0" y="45" fill="#f43f5e" font-family="'Be Vietnam Pro', sans-serif" font-size="16" font-weight="900" text-anchor="middle">m' = 150%</text>

        <!-- Slider handle simulation -->
        <rect x="-180" y="110" width="360" height="12" rx="6" fill="#334155"/>
        <circle cx="40" cy="116" r="14" fill="#fbbf24" stroke="#ffffff" stroke-width="2"/>
        <text x="0" y="150" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Kéo thanh trượt để thử nghiệm kịch bản sản xuất</text>
      </g>
    `
  },
  'c3-s4.svg': {
    title: 'TÍCH LŨY TƯ BẢN & CẤU TẠO HỮU CƠ (c/v)',
    subtitle: 'Tư bản hóa GTTD ➔ Tự động hóa tăng ➔ Đội quân thất nghiệp công nghiệp',
    badgeText: 'CHƯƠNG 3 • TÍCH LŨY TƯ BẢN',
    badgeColor: '#f59e0b',
    mainGraphics: `
      <g transform="translate(400, 220)">
        <rect x="-240" y="-80" width="200" height="150" rx="14" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-140" y="-45" fill="#fbbf24" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">CÔNG NGHỆ THỦ CÔNG</text>
        <text x="-140" y="-15" fill="#94a3b8" font-size="11" text-anchor="middle">c : v = 1 : 1</text>
        <text x="-140" y="15" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Máy móc: 50M</text>
        <text x="-140" y="40" fill="#10b981" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Tiền lương: 50M</text>

        <path d="M-20 -5 L30 -5" stroke="#f59e0b" stroke-width="3"/>
        <polygon points="30,-12 45,-5 30,2" fill="#f59e0b"/>

        <rect x="50" y="-80" width="200" height="150" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="150" y="-45" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">TỰ ĐỘNG HÓA AI (4.0)</text>
        <text x="150" y="-15" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">c : v = 9 : 1 (Tăng vọt)</text>
        <text x="150" y="15" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Máy móc: 900M</text>
        <text x="150" y="40" fill="#ef4444" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Tiền lương chỉ còn 100M</text>
      </g>
    `
  },
  'c3-s5.svg': {
    title: 'CHI PHÍ SẢN XUẤT (K) & LỢI NHUẬN (p)',
    subtitle: 'Chi phí thực tế (c+v+m) vs Chi phí tư bản K = c + v',
    badgeText: 'CHƯƠNG 3 • CHI PHÍ & LỢI NHUẬN',
    badgeColor: '#f59e0b',
    mainGraphics: `
      <!-- Two comparison bars -->
      <g transform="translate(160, 160)">
        <text x="0" y="-15" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800">1. GIÁ TRỊ THỰC TẾ CỦA HÀNG HÓA (W):</text>
        <rect x="0" y="5" width="200" height="40" rx="6" fill="#334155"/>
        <text x="100" y="30" fill="#cbd5e1" font-size="12" font-weight="700" text-anchor="middle">c (Tư bản bất biến)</text>
        <rect x="205" y="5" width="140" height="40" rx="6" fill="#1e3a8a"/>
        <text x="275" y="30" fill="#93c5fd" font-size="12" font-weight="700" text-anchor="middle">v (Khả biến)</text>
        <rect x="350" y="5" width="150" height="40" rx="6" fill="#b45309"/>
        <text x="425" y="30" fill="#fde68a" font-size="12" font-weight="900" text-anchor="middle">m (Thặng dư)</text>
      </g>

      <g transform="translate(160, 260)">
        <text x="0" y="-15" fill="#f59e0b" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800">2. DƯỚI CON MẮT NHÀ TƯ BẢN:</text>
        <rect x="0" y="5" width="345" height="40" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
        <text x="172" y="30" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">CHI PHÍ SẢN XUẤT TƯ BẢN (K = c + v)</text>
        <rect x="350" y="5" width="150" height="40" rx="6" fill="#15803d"/>
        <text x="425" y="30" fill="#bbf7d0" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">LỢI NHUẬN (p)</text>
      </g>
    `
  },
  'c3-s6.svg': {
    title: 'LỢI NHUẬN BÌNH QUÂN & DÒNG VỐN',
    subtitle: 'Cạnh tranh giữa các ngành ➔ Tỷ suất lợi nhuận bình quân (p̄)',
    badgeText: 'CHƯƠNG 3 • LỢI NHUẬN BÌNH QUÂN',
    badgeColor: '#f59e0b',
    mainGraphics: `
      <!-- Three branches of industry with capital flow -->
      <g transform="translate(180, 220)">
        <rect x="-70" y="-60" width="140" height="120" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="0" y="-25" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">NGÀNH DA GIÀY</text>
        <text x="0" y="5" fill="#ffffff" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="900" text-anchor="middle">p' = 30%</text>
        <text x="0" y="35" fill="#10b981" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Vốn đổ vào ➔</text>
      </g>

      <path d="M260 220 Q 330 150, 400 220" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 4"/>
      <polygon points="400,212 410,220 400,228" fill="#f59e0b"/>

      <g transform="translate(400, 220)">
        <rect x="-70" y="-60" width="140" height="120" rx="12" fill="#0c4a6e" stroke="#f59e0b" stroke-width="3"/>
        <text x="0" y="-25" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">LỢI NHUẬN BÌNH QUÂN</text>
        <text x="0" y="10" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="16" font-weight="900" text-anchor="middle">p̄ = 20%</text>
        <text x="0" y="35" fill="#bae6fd" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Trục cân bằng xã hội</text>
      </g>

      <path d="M480 220 Q 550 290, 620 220" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 4"/>
      <polygon points="620,212 630,220 620,228" fill="#f59e0b"/>

      <g transform="translate(620, 220)">
        <rect x="-70" y="-60" width="140" height="120" rx="12" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <text x="0" y="-25" fill="#f87171" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">NGÀNH CƠ KHÍ</text>
        <text x="0" y="5" fill="#ffffff" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="900" text-anchor="middle">p' = 10%</text>
        <text x="0" y="35" fill="#ef4444" font-family="'Be Vietnam Pro', sans-serif" font-size="11" text-anchor="middle">Rút vốn đi ⬅️</text>
      </g>
    `
  },
  'c3-s7.svg': {
    title: 'TÁI SẢN XUẤT MỞ RỘNG TƯ BẢN',
    subtitle: 'Công thức chu chuyển: T – H (TLSX & SLĐ) ... SX ... H\' – T\'',
    badgeText: 'CHƯƠNG 3 • TÁI SẢN XUẤT',
    badgeColor: '#f59e0b',
    mainGraphics: `
      <!-- Cycle diagram of Capital Circulation -->
      <g transform="translate(400, 215)">
        <circle cx="0" cy="0" r="110" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="8 6"/>
        
        <!-- Money (T) -->
        <circle cx="-110" cy="0" r="30" fill="#1e293b" stroke="#facc15" stroke-width="2.5"/>
        <text x="-110" y="7" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="18" font-weight="900" text-anchor="middle">T</text>
        <text x="-110" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Tiền tệ đầu tư</text>

        <!-- Commodity (H: TLSX & SLĐ) -->
        <circle cx="0" cy="-110" r="30" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="0" y="-103" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="18" font-weight="900" text-anchor="middle">H</text>
        <text x="0" y="-65" fill="#bae6fd" font-size="10" text-anchor="middle">TLSX &amp; Sức LĐ</text>

        <!-- Production (SX) -->
        <circle cx="110" cy="0" r="30" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
        <text x="110" y="7" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="15" font-weight="900" text-anchor="middle">...SX...</text>
        <text x="110" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Sản xuất thặng dư</text>

        <!-- Final Money (T') -->
        <circle cx="0" cy="110" r="32" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
        <text x="0" y="117" fill="#6ee7b7" font-family="'Be Vietnam Pro', sans-serif" font-size="18" font-weight="900" text-anchor="middle">T'</text>
        <text x="0" y="155" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">T' = T + m (Lãi thặng dư)</text>
      </g>
    `
  },

  // CHAPTER 4: CẠNH TRANH & ĐỘC QUYỀN
  'c4-s1.svg': {
    title: 'TÍCH TỤ, TẬP TRUNG SẢN XUẤT ➔ ĐỘC QUYỀN',
    subtitle: 'Từ cạnh tranh tự do dẫn đến các tổ chức độc quyền',
    badgeText: 'CHƯƠNG 4 • TẬP TRUNG SX',
    badgeColor: '#8b5cf6',
    mainGraphics: `
      <!-- Multiple small firms converging into a giant monopoly -->
      <g transform="translate(180, 220)">
        <text x="0" y="-70" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Cạnh tranh tự do</text>
        <circle cx="-40" cy="-30" r="16" fill="#334155"/>
        <circle cx="40" cy="-30" r="16" fill="#334155"/>
        <circle cx="-40" cy="30" r="16" fill="#334155"/>
        <circle cx="40" cy="30" r="16" fill="#334155"/>
        <text x="0" y="5" fill="#64748b" font-size="11" text-anchor="middle">Hàng ngàn DN nhỏ</text>
      </g>

      <path d="M260 220 L340 220" stroke="#8b5cf6" stroke-width="4"/>
      <polygon points="340,212 355,220 340,228" fill="#8b5cf6"/>

      <g transform="translate(520, 220)">
        <rect x="-130" y="-80" width="260" height="160" rx="18" fill="#2e1065" stroke="#a855f7" stroke-width="3"/>
        <text x="0" y="-45" fill="#c084fc" font-family="'Be Vietnam Pro', sans-serif" font-size="15" font-weight="900" text-anchor="middle">TỔ CHỨC ĐỘC QUYỀN</text>
        <text x="0" y="-18" fill="#e9d5ff" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Cartel • Syndicate • Trust • Concern</text>
        <line x1="-90" y1="5" x2="90" y2="5" stroke="#7e22ce" stroke-width="2"/>
        <text x="0" y="30" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">Áp đặt Giá cả độc quyền</text>
        <text x="0" y="55" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">Thu Lợi nhuận độc quyền cao</text>
      </g>
    `
  },
  'c4-s2.svg': {
    title: 'ĐỘC QUYỀN NHÀ NƯỚC TRONG CNTB',
    subtitle: 'Sự kết hợp sức mạnh giữa tổ chức độc quyền tư nhân & bộ máy nhà nước',
    badgeText: 'CHƯƠNG 4 • ĐỘC QUYỀN NHÀ NƯỚC',
    badgeColor: '#8b5cf6',
    mainGraphics: `
      <g transform="translate(400, 220)">
        <!-- Left: Private Monopolies -->
        <rect x="-240" y="-60" width="170" height="120" rx="14" fill="#1e293b" stroke="#a855f7" stroke-width="2.5"/>
        <text x="-155" y="-20" fill="#c084fc" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">TƯ BẢN ĐỘC QUYỀN</text>
        <text x="-155" y="10" fill="#ffffff" font-size="22" text-anchor="middle">🏢</text>
        <text x="-155" y="38" fill="#94a3b8" font-size="10" text-anchor="middle">Tài phiệt chi phối</text>

        <!-- Union Symbol -->
        <circle cx="0" cy="0" r="30" fill="#4c1d95" stroke="#facc15" stroke-width="3"/>
        <text x="0" y="8" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="20" font-weight="900" text-anchor="middle">🤝</text>

        <!-- Right: State Apparatus -->
        <rect x="70" y="-60" width="170" height="120" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="155" y="-20" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">BỘ MÁY NHÀ NƯỚC</text>
        <text x="155" y="10" fill="#ffffff" font-size="22" text-anchor="middle">🏛️</text>
        <text x="155" y="38" fill="#94a3b8" font-size="10" text-anchor="middle">Chính sách & Pháp luật</text>

        <rect x="-160" y="80" width="320" height="36" rx="10" fill="#0f172a" stroke="#8b5cf6" stroke-width="1.5"/>
        <text x="0" y="103" fill="#e9d5ff" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="700" text-anchor="middle">Phục vụ lợi ích tập đoàn độc quyền</text>
      </g>
    `
  },
  'c4-s3.svg': {
    title: 'ĐỘC QUYỀN KỶ NGUYÊN SỐ (BIG TECH)',
    subtitle: 'Bẫy thuật toán, dữ liệu người dùng & Hiệu ứng mạng lưới',
    badgeText: 'CHƯƠNG 4 • BIG TECH 4.0',
    badgeColor: '#8b5cf6',
    mainGraphics: `
      <!-- Modern Network Hub with Lock in Center -->
      <g transform="translate(400, 215)">
        <circle cx="0" cy="0" r="100" fill="none" stroke="#7c3aed" stroke-width="2" stroke-dasharray="6 4"/>
        
        <!-- Big Tech Core -->
        <rect x="-70" y="-45" width="140" height="90" rx="14" fill="#2e1065" stroke="#c084fc" stroke-width="3"/>
        <text x="0" y="-12" fill="#c084fc" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">BIG TECH</text>
        <text x="0" y="12" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="10" font-weight="800" text-anchor="middle">DATA MONOPOLY</text>
        <text x="0" y="30" fill="#e9d5ff" font-size="12" text-anchor="middle">🔒</text>

        <!-- Satellites -->
        <circle cx="-130" cy="-60" r="22" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="-130" y="-55" fill="#38bdf8" font-size="10" font-weight="700" text-anchor="middle">Dữ liệu</text>

        <circle cx="130" cy="-60" r="22" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="130" y="-55" fill="#10b981" font-size="10" font-weight="700" text-anchor="middle">Thuật toán</text>

        <circle cx="-130" cy="60" r="22" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-130" y="65" fill="#f59e0b" font-size="10" font-weight="700" text-anchor="middle">Nền tảng</text>

        <circle cx="130" cy="60" r="22" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="130" y="65" fill="#ec4899" font-size="10" font-weight="700" text-anchor="middle">Hệ sinh thái</text>
      </g>
    `
  },

  // CHAPTER 5: KTTT ĐỊNH HƯỚNG XHCN Ở VIỆT NAM
  'c5-s1.svg': {
    title: 'KTTT ĐỊNH HƯỚNG XHCN Ở VIỆT NAM',
    subtitle: 'Nhiều thành phần kinh tế, Kinh tế nhà nước giữ vai trò chủ đạo',
    badgeText: 'CHƯƠNG 5 • MÔ HÌNH VN',
    badgeColor: '#ec4899',
    mainGraphics: `
      <!-- Pillar Diagram -->
      <g transform="translate(400, 215)">
        <!-- State Economy (Core) -->
        <rect x="-90" y="-85" width="180" height="150" rx="16" fill="#881337" stroke="#fb7185" stroke-width="3"/>
        <text x="0" y="-50" fill="#fecdd3" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">KINH TẾ NHÀ NƯỚC</text>
        <circle cx="0" cy="-10" r="25" fill="#be123c"/>
        <text x="0" y="-2" fill="#facc15" font-size="20" text-anchor="middle">★</text>
        <text x="0" y="30" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">VAI TRÒ CHỦ ĐẠO</text>
        <text x="0" y="50" fill="#fda4af" font-family="'Be Vietnam Pro', sans-serif" font-size="10" text-anchor="middle">Định hướng & Điều tiết vĩ mô</text>

        <!-- Left: Private Economy -->
        <rect x="-270" y="-40" width="160" height="100" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-190" y="-12" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">KINH TẾ TƯ NHÂN</text>
        <text x="-190" y="15" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Động lực quan trọng</text>
        <text x="-190" y="40" fill="#94a3b8" font-size="10" text-anchor="middle">Khởi nghiệp sáng tạo</text>

        <!-- Right: Collective & FDI -->
        <rect x="110" y="-40" width="160" height="100" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="190" y="-12" fill="#bae6fd" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">TẬP THỂ &amp; FDI</text>
        <text x="190" y="15" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Hợp tác xã &amp; Vốn ngoại</text>
        <text x="190" y="40" fill="#94a3b8" font-size="10" text-anchor="middle">Đa dạng hóa nguồn lực</text>
      </g>
    `
  },
  'c5-s2.svg': {
    title: 'HÀI HÒA CÁC QUAN HỆ LỢI ÍCH KINH TẾ',
    subtitle: 'Tam giác lợi ích: Cá nhân • Tập thể • Xã hội',
    badgeText: 'CHƯƠNG 5 • LỢI ÍCH KINH TẾ',
    badgeColor: '#ec4899',
    mainGraphics: `
      <!-- Triangle of Interests -->
      <g transform="translate(400, 220)">
        <polygon points="0,-100 -140,80 140,80" fill="none" stroke="#ec4899" stroke-width="3" stroke-dasharray="6 4"/>

        <!-- Top: Lợi ích xã hội -->
        <circle cx="0" cy="-100" r="32" fill="#1e293b" stroke="#ec4899" stroke-width="2.5"/>
        <text x="0" y="-105" fill="#f43f5e" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">XÃ HỘI</text>
        <text x="0" y="-90" fill="#cbd5e1" font-size="9" text-anchor="middle">An sinh, thịnh vượng</text>

        <!-- Left: Lợi ích cá nhân -->
        <circle cx="-140" cy="80" r="32" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="-140" y="75" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">CÁ NHÂN</text>
        <text x="-140" y="90" fill="#cbd5e1" font-size="9" text-anchor="middle">Động lực trực tiếp</text>

        <!-- Right: Lợi ích tập thể / Doanh nghiệp -->
        <circle cx="140" cy="80" r="32" fill="#1e293b" stroke="#10b981" stroke-width="2.5"/>
        <text x="140" y="75" fill="#10b981" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="900" text-anchor="middle">TẬP THỂ</text>
        <text x="140" y="90" fill="#cbd5e1" font-size="9" text-anchor="middle">Doanh nghiệp vững bền</text>

        <!-- Center: Hài hòa -->
        <circle cx="0" cy="15" r="30" fill="#881337" stroke="#fb7185" stroke-width="2"/>
        <text x="0" y="20" fill="#fecdd3" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="900" text-anchor="middle">HÀI HÒA</text>
      </g>
    `
  },
  'c5-s3.svg': {
    title: 'HOÀN THIỆN THỂ CHẾ KTTT ĐỊNH HƯỚNG XHCN',
    subtitle: 'Xây dựng môi trường pháp lý minh bạch, bảo vệ đổi mới sáng tạo',
    badgeText: 'CHƯƠNG 5 • THỂ CHẾ KTTT',
    badgeColor: '#ec4899',
    mainGraphics: `
      <!-- Pillars of Institution -->
      <g transform="translate(180, 220)">
        <rect x="-70" y="-70" width="140" height="140" rx="14" fill="#1e293b" stroke="#fb7185" stroke-width="2"/>
        <text x="0" y="-30" fill="#f43f5e" font-size="24" text-anchor="middle">📜</text>
        <text x="0" y="5" fill="#fecdd3" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">PHÁP LUẬT</text>
        <text x="0" y="30" fill="#94a3b8" font-size="10" text-anchor="middle">Minh bạch, bảo vệ</text>
      </g>

      <g transform="translate(400, 220)">
        <rect x="-70" y="-70" width="140" height="140" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="0" y="-30" fill="#38bdf8" font-size="24" text-anchor="middle">⚖️</text>
        <text x="0" y="5" fill="#bae6fd" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">CẠNH TRANH</text>
        <text x="0" y="30" fill="#94a3b8" font-size="10" text-anchor="middle">Chống độc quyền xấu</text>
      </g>

      <g transform="translate(620, 220)">
        <rect x="-70" y="-70" width="140" height="140" rx="14" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="0" y="-30" fill="#10b981" font-size="24" text-anchor="middle">🚀</text>
        <text x="0" y="5" fill="#a7f3d0" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">SÁNG TẠO</text>
        <text x="0" y="30" fill="#94a3b8" font-size="10" text-anchor="middle">Sandbox, Kinh tế số</text>
      </g>
    `
  },
  'c5-s4.svg': {
    title: 'TÍNH TẤT YẾU CỦA KTTT ĐỊNH HƯỚNG XHCN',
    subtitle: 'Phù hợp trình độ phát triển của Lực lượng sản xuất trong thời kỳ quá độ',
    badgeText: 'CHƯƠNG 5 • TÍNH TẤT YẾU',
    badgeColor: '#ec4899',
    mainGraphics: `
      <g transform="translate(400, 220)">
        <rect x="-240" y="-60" width="220" height="120" rx="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="-130" y="-20" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="800" text-anchor="middle">LỰC LƯỢNG SẢN XUẤT</text>
        <text x="-130" y="5" fill="#ffffff" font-size="11" text-anchor="middle">Nhiều tầng nấc, nhiều trình độ</text>
        <text x="-130" y="30" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Không thể duy ý chí</text>

        <path d="M-10 0 L30 0" stroke="#fb7185" stroke-width="4"/>
        <polygon points="30,-8 45,0 30,8" fill="#fb7185"/>

        <rect x="50" y="-60" width="220" height="120" rx="14" fill="#881337" stroke="#fb7185" stroke-width="2.5"/>
        <text x="160" y="-20" fill="#fecdd3" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">KTTT ĐỊNH HƯỚNG XHCN</text>
        <text x="160" y="5" fill="#ffffff" font-size="11" text-anchor="middle">Giải phóng sức sản xuất</text>
        <text x="160" y="30" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">Tất yếu khách quan</text>
      </g>
    `
  },
  'c5-s5.svg': {
    title: 'ĐỒNG BỘ CÁC LOẠI THỊ TRƯỜNG',
    subtitle: 'Thị trường hàng hóa, vốn, lao động, đất đai, khoa học công nghệ',
    badgeText: 'CHƯƠNG 5 • HỆ THỐNG THỊ TRƯỜNG',
    badgeColor: '#ec4899',
    mainGraphics: `
      <!-- Circular Market Elements -->
      <g transform="translate(400, 215)">
        <circle cx="0" cy="0" r="105" fill="none" stroke="#fb7185" stroke-width="2" stroke-dasharray="6 4"/>
        <circle cx="0" cy="0" r="36" fill="#881337" stroke="#ffffff" stroke-width="2"/>
        <text x="0" y="5" fill="#ffffff" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="900" text-anchor="middle">ĐỒNG BỘ</text>

        <!-- 5 Markets -->
        <circle cx="-95" cy="-45" r="28" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="-95" y="-40" fill="#38bdf8" font-size="11" font-weight="800" text-anchor="middle">Hàng hóa</text>

        <circle cx="95" cy="-45" r="28" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="95" y="-40" fill="#10b981" font-size="11" font-weight="800" text-anchor="middle">Tài chính</text>

        <circle cx="-65" cy="85" r="28" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-65" y="90" fill="#f59e0b" font-size="11" font-weight="800" text-anchor="middle">Đất đai</text>

        <circle cx="65" cy="85" r="28" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="65" y="90" fill="#a855f7" font-size="11" font-weight="800" text-anchor="middle">Sức LĐ</text>

        <circle cx="0" cy="-105" r="26" fill="#1e293b" stroke="#22d3ee" stroke-width="2"/>
        <text x="0" y="-100" fill="#22d3ee" font-size="10" font-weight="800" text-anchor="middle">KHCN</text>
      </g>
    `
  },

  // CHAPTER 6: CÔNG NGHIỆP HÓA 4.0 & HỘI NHẬP QUỐC TẾ
  'c6-s1.svg': {
    title: 'CNH, HĐH THÍCH ỨNG CMCN 4.0',
    subtitle: 'Chuyển từ gia công giá rẻ lên nấc thang kinh tế số & chế tạo thông minh',
    badgeText: 'CHƯƠNG 6 • CNH 4.0',
    badgeColor: '#06b6d4',
    mainGraphics: `
      <!-- Staircase of Industrial Upgrade -->
      <g transform="translate(180, 260)">
        <rect x="0" y="0" width="120" height="60" rx="8" fill="#334155"/>
        <text x="60" y="35" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Gia công dệt may</text>

        <rect x="135" y="-40" width="130" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="200" y="10" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">Lắp ráp điện tử</text>

        <rect x="280" y="-90" width="160" height="150" rx="12" fill="#083344" stroke="#06b6d4" stroke-width="3"/>
        <text x="360" y="-45" fill="#22d3ee" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">KINH TẾ SỐ &amp; AI</text>
        <text x="360" y="-15" fill="#e0f2fe" font-size="11" text-anchor="middle">Thiết kế bán dẫn</text>
        <text x="360" y="10" fill="#e0f2fe" font-size="11" text-anchor="middle">Chế tạo thông minh</text>
        <text x="360" y="40" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">GIÁ TRỊ GIA TĂNG CAO 🚀</text>
      </g>
    `
  },
  'c6-s2.svg': {
    title: 'HỘI NHẬP KINH TẾ & TIÊU CHUẨN ESG',
    subtitle: 'Vượt qua rào cản xanh, thuế carbon & chuỗi cung ứng minh bạch',
    badgeText: 'CHƯƠNG 6 • HỘI NHẬP XANH',
    badgeColor: '#06b6d4',
    mainGraphics: `
      <!-- Globe with Green ESG Leaf & Shield -->
      <g transform="translate(400, 215)">
        <circle cx="0" cy="0" r="95" fill="#0c4a6e" stroke="#06b6d4" stroke-width="3"/>
        <path d="M-70 0 Q 0 -70, 70 0 Q 0 70, -70 0" fill="none" stroke="#22d3ee" stroke-width="2"/>
        <line x1="-95" y1="0" x2="95" y2="0" stroke="#0891b2" stroke-width="2"/>
        <line x1="0" y1="-95" x2="0" y2="95" stroke="#0891b2" stroke-width="2"/>

        <circle cx="0" cy="0" r="45" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
        <text x="0" y="-5" fill="#34d399" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="900" text-anchor="middle">ESG</text>
        <text x="0" y="18" fill="#a7f3d0" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="700" text-anchor="middle">TIÊU CHUẨN XANH</text>

        <!-- Floating Tags -->
        <rect x="-240" y="-50" width="130" height="40" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
        <text x="-175" y="-25" fill="#a7f3d0" font-size="11" font-weight="700" text-anchor="middle">🌱 Giảm phát thải</text>

        <rect x="110" y="-50" width="130" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="175" y="-25" fill="#bae6fd" font-size="11" font-weight="700" text-anchor="middle">🌐 FTA thế hệ mới</text>
      </g>
    `
  },
  'c6-s3.svg': {
    title: 'NỀN KINH TẾ ĐỘC LẬP TỰ CHỦ',
    subtitle: 'Hội nhập sâu rộng gắn liền với giữ vững độc lập tự chủ về kinh tế',
    badgeText: 'CHƯƠNG 6 • ĐỘC LẬP TỰ CHỦ',
    badgeColor: '#06b6d4',
    mainGraphics: `
      <!-- Anchor & Shield of Autonomy -->
      <g transform="translate(400, 220)">
        <polygon points="0,-90 -90,-40 -90,40 0,90 90,40 90,-40" fill="#083344" stroke="#06b6d4" stroke-width="3"/>
        <circle cx="0" cy="0" r="45" fill="#0f172a" stroke="#facc15" stroke-width="2.5"/>
        <text x="0" y="-8" fill="#facc15" font-size="24" text-anchor="middle">⚓</text>
        <text x="0" y="18" fill="#e0f2fe" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="900" text-anchor="middle">TỰ CHỦ</text>

        <rect x="-250" y="-30" width="140" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="-180" y="-5" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">HỘI NHẬP</text>
        <text x="-180" y="16" fill="#94a3b8" font-size="10" text-anchor="middle">Mở cửa đa phương</text>

        <line x1="-110" y1="0" x2="-50" y2="0" stroke="#06b6d4" stroke-width="3"/>

        <rect x="110" y="-30" width="140" height="60" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="180" y="-5" fill="#10b981" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">AN NINH</text>
        <text x="180" y="16" fill="#94a3b8" font-size="10" text-anchor="middle">Năng lượng &amp; Lương thực</text>

        <line x1="50" y1="0" x2="110" y2="0" stroke="#06b6d4" stroke-width="3"/>
      </g>
    `
  },
  'c6-s4.svg': {
    title: '4 CUỘC CÁCH MẠNG CÔNG NGHIỆP',
    subtitle: '1.0 Cơ khí ➔ 2.0 Điện khí ➔ 3.0 Tự động hóa ➔ 4.0 Trí tuệ nhân tạo (AI)',
    badgeText: 'CHƯƠNG 6 • LỊCH SỬ 4 CMCN',
    badgeColor: '#06b6d4',
    mainGraphics: `
      <!-- 4 Stages Timeline -->
      <g transform="translate(130, 220)">
        <!-- 1.0 -->
        <rect x="-50" y="-60" width="100" height="120" rx="12" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
        <text x="0" y="-30" fill="#94a3b8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">1.0</text>
        <text x="0" y="-5" fill="#e2e8f0" font-size="20" text-anchor="middle">🚂</text>
        <text x="0" y="25" fill="#cbd5e1" font-size="10" text-anchor="middle">Động cơ hơi nước</text>

        <line x1="50" y1="0" x2="110" y2="0" stroke="#0891b2" stroke-width="3"/>

        <!-- 2.0 -->
        <rect x="110" y="-60" width="100" height="120" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="160" y="-30" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">2.0</text>
        <text x="160" y="-5" fill="#e2e8f0" font-size="20" text-anchor="middle">⚡</text>
        <text x="160" y="25" fill="#cbd5e1" font-size="10" text-anchor="middle">Động cơ điện</text>

        <line x1="210" y1="0" x2="270" y2="0" stroke="#0891b2" stroke-width="3"/>

        <!-- 3.0 -->
        <rect x="270" y="-60" width="100" height="120" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="320" y="-30" fill="#38bdf8" font-family="'Be Vietnam Pro', sans-serif" font-size="12" font-weight="800" text-anchor="middle">3.0</text>
        <text x="320" y="-5" fill="#e2e8f0" font-size="20" text-anchor="middle">💻</text>
        <text x="320" y="25" fill="#cbd5e1" font-size="10" text-anchor="middle">Máy tính &amp; Internet</text>

        <line x1="370" y1="0" x2="430" y2="0" stroke="#06b6d4" stroke-width="3"/>

        <!-- 4.0 -->
        <rect x="430" y="-70" width="120" height="140" rx="14" fill="#083344" stroke="#06b6d4" stroke-width="3"/>
        <text x="490" y="-40" fill="#22d3ee" font-family="'Be Vietnam Pro', sans-serif" font-size="14" font-weight="900" text-anchor="middle">4.0</text>
        <text x="490" y="-10" fill="#ffffff" font-size="24" text-anchor="middle">🤖</text>
        <text x="490" y="20" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">AI &amp; Big Data</text>
        <text x="490" y="42" fill="#e0f2fe" font-size="9" text-anchor="middle">Kỷ nguyên số</text>
      </g>
    `
  },
  'c6-s5.svg': {
    title: 'ĐA DẠNG HÓA ĐỐI TÁC TRONG HỘI NHẬP',
    subtitle: 'Tránh bỏ trứng vào một giỏ, phòng chống rủi ro chuỗi cung ứng',
    badgeText: 'CHƯƠNG 6 • ĐA PHƯƠNG HÓA',
    badgeColor: '#06b6d4',
    mainGraphics: `
      <!-- Diversified Global Hub -->
      <g transform="translate(400, 215)">
        <circle cx="0" cy="0" r="42" fill="#083344" stroke="#facc15" stroke-width="3"/>
        <text x="0" y="-6" fill="#facc15" font-family="'Be Vietnam Pro', sans-serif" font-size="13" font-weight="900" text-anchor="middle">VIỆT NAM</text>
        <text x="0" y="15" fill="#e0f2fe" font-family="'Be Vietnam Pro', sans-serif" font-size="10" font-weight="700" text-anchor="middle">TRUNG TÂM</text>

        <!-- Partner spokes -->
        <rect x="-240" y="-95" width="130" height="50" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="-175" y="-65" fill="#bae6fd" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">🇺🇸 HOA KỲ / CPTPP</text>
        <line x1="-110" y1="-70" x2="-35" y2="-25" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3"/>

        <rect x="110" y="-95" width="130" height="50" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="175" y="-65" fill="#a7f3d0" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">🇪🇺 LIÊN MINH CHÂU ÂU</text>
        <line x1="110" y1="-70" x2="35" y2="-25" stroke="#10b981" stroke-width="2" stroke-dasharray="4 3"/>

        <rect x="-240" y="55" width="130" height="50" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="-175" y="85" fill="#fde68a" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">🌏 CHÂU Á - TBD / RCEP</text>
        <line x1="-110" y1="80" x2="-35" y2="25" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>

        <rect x="110" y="55" width="130" height="50" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="175" y="85" fill="#ddd6fe" font-family="'Be Vietnam Pro', sans-serif" font-size="11" font-weight="800" text-anchor="middle">🌍 THỊ TRƯỜNG MỚI</text>
        <line x1="110" y1="80" x2="35" y2="25" stroke="#a855f7" stroke-width="2" stroke-dasharray="4 3"/>
      </g>
    `
  }
};

let count = 0;
for (const [filename, conf] of Object.entries(scenarioSVGs)) {
  const filePath = path.join(outDir, filename);
  fs.writeFileSync(filePath, createSVG(conf), 'utf8');
  count++;
}
console.log(`Generated ${count} accurate MLN122 SVG scenario graphics in assets/images/scenarios/!`);
