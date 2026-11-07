import fs from 'fs';
import path from 'path';

const additionalSVGs = {
  // OUTCOME IMAGES FOR SCENARIO CHOICES
  'assets/images/outcomes/outcome-dialectical-success.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 140" width="840" height="140">
  <defs>
    <linearGradient id="successBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="45%" stop-color="#063e30" />
      <stop offset="100%" stop-color="#0a1a1e" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#34d399" />
    </linearGradient>
    <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#fbbf24" />
    </linearGradient>
  </defs>

  <rect width="840" height="140" rx="14" fill="url(#successBg)" stroke="#10b981" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="150" y1="0" x2="150" y2="140" stroke="#10b981" stroke-width="1" stroke-opacity="0.1" stroke-dasharray="4 4" />
  <line x1="620" y1="18" x2="620" y2="122" stroke="#34d399" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="3 3"/>

  <!-- ZONE 1: Left Dialectical Triumph Seal -->
  <g transform="translate(75, 70)">
    <circle cx="0" cy="0" r="48" fill="#047857" stroke="#34d399" stroke-width="2.5" opacity="0.9" />
    <circle cx="0" cy="0" r="38" fill="#064e3b" stroke="#a7f3d0" stroke-width="1.2" stroke-dasharray="4 3" />
    <polygon points="0,-26 22,18 -22,18" fill="url(#goldGlow)" />
    <circle cx="0" cy="0" r="14" fill="#022c22" stroke="#34d399" stroke-width="1.5" />
    <text x="0" y="5" fill="#34d399" font-size="15" font-weight="900" font-family="'Be Vietnam Pro', system-ui, sans-serif" text-anchor="middle">✓</text>
  </g>

  <!-- ZONE 2: Middle Structured Typography -->
  <rect x="155" y="18" width="175" height="24" rx="12" fill="#047857" stroke="#34d399" stroke-width="1" stroke-opacity="0.5"/>
  <circle cx="169" cy="30" r="4" fill="#34d399" />
  <text x="180" y="34" fill="#ecfdf5" font-size="10.5" font-weight="800" font-family="'Plus Jakarta Sans', system-ui, sans-serif" letter-spacing="0.8">LỰA CHỌN BIỆN CHỨNG</text>
  <text x="155" y="68" fill="#34d399" font-size="19" font-weight="800" font-family="'Be Vietnam Pro', system-ui, sans-serif">HỆ QUẢ ĐỜI THỰC TÍCH CỰC &amp; BỀN VỮNG</text>
  <text x="155" y="93" fill="#e2e8f0" font-size="12.5" font-family="'Be Vietnam Pro', system-ui, sans-serif">• Tôn trọng quy luật khách quan • Làm chủ hoàn cảnh thực tiễn</text>
  <text x="155" y="114" fill="#94a3b8" font-size="11.5" font-family="'Be Vietnam Pro', system-ui, sans-serif">• Tích lũy về lượng tạo nên bước nhảy cách mạng về chất trong đời sống</text>

  <!-- ZONE 3: Right Balance Scale Pedestal -->
  <g transform="translate(730, 62)">
    <circle cx="0" cy="0" r="44" fill="#044e39" fill-opacity="0.4" stroke="#10b981" stroke-width="1" stroke-opacity="0.3"/>
    <polygon points="0,-16 -7,22 7,22" fill="#10b981" opacity="0.9"/>
    <circle cx="0" cy="-16" r="4" fill="#34d399"/>
    <rect x="-18" y="22" width="36" height="4" rx="2" fill="#059669"/>
    <line x1="-38" y1="-14" x2="38" y2="-14" stroke="#a7f3d0" stroke-width="3" stroke-linecap="round"/>
    <line x1="-32" y1="-14" x2="-32" y2="4" stroke="#34d399" stroke-width="1"/>
    <ellipse cx="-32" cy="7" rx="13" ry="5" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
    <line x1="32" y1="-14" x2="32" y2="4" stroke="#34d399" stroke-width="1"/>
    <ellipse cx="32" cy="7" rx="13" ry="5" fill="#065f46" stroke="#34d399" stroke-width="1.5"/>
    <text x="0" y="52" fill="#6ee7b7" font-size="9.5" font-weight="800" font-family="'Plus Jakarta Sans', system-ui, sans-serif" text-anchor="middle" letter-spacing="0.5">CÂN BẰNG BIỆN CHỨNG</text>
  </g>
</svg>`,

  'assets/images/outcomes/outcome-subjective-failure.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 140" width="840" height="140">
  <defs>
    <linearGradient id="failureBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#450a0a" />
      <stop offset="45%" stop-color="#330e0e" />
      <stop offset="100%" stop-color="#14070a" />
    </linearGradient>
    <linearGradient id="amberGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>

  <rect width="840" height="140" rx="14" fill="url(#failureBg)" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="150" y1="0" x2="150" y2="140" stroke="#ef4444" stroke-width="1" stroke-opacity="0.1" stroke-dasharray="4 4" />
  <line x1="620" y1="18" x2="620" y2="122" stroke="#f87171" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="3 3"/>

  <!-- ZONE 1: Left Warning Seal -->
  <g transform="translate(75, 70)">
    <circle cx="0" cy="0" r="48" fill="#7f1d1d" stroke="#f87171" stroke-width="2.5" opacity="0.9" />
    <circle cx="0" cy="0" r="38" fill="#450a0a" stroke="#fca5a5" stroke-width="1.2" stroke-dasharray="4 3" />
    <polygon points="0,-24 22,18 -22,18" fill="url(#amberGlow)" />
    <text x="0" y="14" fill="#ffffff" font-size="24" font-weight="900" font-family="'Plus Jakarta Sans', system-ui, sans-serif" text-anchor="middle">!</text>
  </g>

  <!-- ZONE 2: Middle Structured Typography -->
  <rect x="155" y="18" width="165" height="24" rx="12" fill="#7f1d1d" stroke="#ef4444" stroke-width="1" stroke-opacity="0.5"/>
  <circle cx="169" cy="30" r="4" fill="#ef4444" />
  <text x="180" y="34" fill="#fee2e2" font-size="10.5" font-weight="800" font-family="'Plus Jakarta Sans', system-ui, sans-serif" letter-spacing="0.8">LỆCH LẠC CHỦ QUAN</text>
  <text x="155" y="68" fill="#f87171" font-size="19" font-weight="800" font-family="'Be Vietnam Pro', system-ui, sans-serif">BẾ TẮC DO RỜI XA HIỆN THỰC KHÁCH QUAN</text>
  <text x="155" y="93" fill="#fed7aa" font-size="12.5" font-family="'Be Vietnam Pro', system-ui, sans-serif">• Ý chí chủ quan, ảo tưởng duy tâm hoặc siêu hình phiến diện</text>
  <text x="155" y="114" fill="#94a3b8" font-size="11.5" font-family="'Be Vietnam Pro', system-ui, sans-serif">• Hành động tách rời thực tiễn tất yếu dẫn đến thất bại và khủng hoảng</text>

  <!-- ZONE 3: Right Tilted Scale Pedestal -->
  <g transform="translate(730, 62)">
    <circle cx="0" cy="0" r="44" fill="#500724" fill-opacity="0.35" stroke="#ef4444" stroke-width="1" stroke-opacity="0.3"/>
    <polygon points="0,-16 -7,22 7,22" fill="#dc2626" opacity="0.9"/>
    <circle cx="0" cy="-16" r="4" fill="#ef4444"/>
    <rect x="-18" y="22" width="36" height="4" rx="2" fill="#991b1b"/>
    <line x1="-38" y1="-26" x2="38" y2="-2" stroke="#fca5a5" stroke-width="3" stroke-linecap="round"/>
    <line x1="-32" y1="-24" x2="-32" y2="-6" stroke="#f87171" stroke-width="1"/>
    <ellipse cx="-32" cy="-3" rx="13" ry="5" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
    <line x1="32" y1="-4" x2="32" y2="14" stroke="#f87171" stroke-width="1"/>
    <ellipse cx="32" cy="17" rx="13" ry="5" fill="#450a0a" stroke="#f87171" stroke-width="1.5"/>
    <text x="0" y="52" fill="#fca5a5" font-size="9.5" font-weight="800" font-family="'Plus Jakarta Sans', system-ui, sans-serif" text-anchor="middle" letter-spacing="0.5">MẤT CÂN ĐỐI QUY LUẬT</text>
  </g>
</svg>`,

  // SLIDER STAGE ILLUSTRATIONS
  'assets/images/slider/stage-beginner.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <defs>
    <linearGradient id="bgS1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="500" height="200" rx="16" fill="url(#bgS1)" stroke="#475569" stroke-width="1.5"/>
  
  <!-- Tangled wires / confusion -->
  <path d="M120 100 Q150 40 180 120 T240 80 T290 130" fill="none" stroke="#94a3b8" stroke-width="4" stroke-dasharray="6 4"/>
  <circle cx="120" cy="100" r="10" fill="#ef4444"/>
  <circle cx="290" cy="130" r="10" fill="#f59e0b"/>

  <!-- Question Marks -->
  <text x="170" y="70" fill="#f43f5e" font-size="28" font-weight="bold">?</text>
  <text x="230" y="60" fill="#eab308" font-size="34" font-weight="bold">?</text>

  <!-- Student silhouette scratching head -->
  <g transform="translate(370, 100)">
    <circle cx="0" cy="-30" r="22" fill="#fbbf24"/>
    <path d="M-20 20 C-20 -10 20 -10 20 20 Z" fill="#64748b"/>
    <text x="0" y="50" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">0 - 25 GIỜ</text>
    <text x="0" y="68" fill="#64748b" font-size="10" text-anchor="middle">(Chưa có biến đổi về chất)</text>
  </g>
</svg>`,

  'assets/images/slider/stage-measure.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <defs>
    <linearGradient id="bgS2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e3a5f" />
    </linearGradient>
  </defs>
  <rect width="500" height="200" rx="16" fill="url(#bgS2)" stroke="#38bdf8" stroke-width="1.5"/>

  <!-- Steady Bricks of Knowledge Stacking (Lượng tích lũy) -->
  <g transform="translate(90, 130)">
    <rect x="0" y="0" width="45" height="20" rx="4" fill="#0284c7" stroke="#38bdf8"/>
    <rect x="50" y="0" width="45" height="20" rx="4" fill="#0284c7" stroke="#38bdf8"/>
    <rect x="100" y="0" width="45" height="20" rx="4" fill="#0284c7" stroke="#38bdf8"/>
    
    <rect x="25" y="-25" width="45" height="20" rx="4" fill="#0369a1" stroke="#38bdf8"/>
    <rect x="75" y="-25" width="45" height="20" rx="4" fill="#0369a1" stroke="#38bdf8"/>
    
    <rect x="50" y="-50" width="45" height="20" rx="4" fill="#075985" stroke="#38bdf8"/>
  </g>

  <!-- Measure Arrow Tag -->
  <path d="M70 165 L260 165" stroke="#38bdf8" stroke-width="3"/>
  <polygon points="70,161 60,165 70,169" fill="#38bdf8"/>
  <polygon points="260,161 270,165 260,169" fill="#38bdf8"/>
  <text x="165" y="182" fill="#7dd3fc" font-size="11" font-weight="bold" text-anchor="middle">GIỚI HẠN "ĐỘ" (25h - 60h)</text>

  <!-- Focused studying figure -->
  <g transform="translate(370, 100)">
    <circle cx="0" cy="-30" r="22" fill="#fbbf24"/>
    <path d="M-20 20 C-20 -10 20 -10 20 20 Z" fill="#0284c7"/>
    <rect x="-15" y="5" width="30" height="15" rx="3" fill="#ffffff" stroke="#38bdf8"/>
    <text x="0" y="50" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">25 - 60 GIỜ</text>
    <text x="0" y="68" fill="#94a3b8" font-size="10" text-anchor="middle">(Tích lũy âm thầm về Lượng)</text>
  </g>
</svg>`,

  'assets/images/slider/stage-node.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <defs>
    <linearGradient id="bgS3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e1b4b" />
      <stop offset="100%" stop-color="#311042" />
    </linearGradient>
  </defs>
  <rect width="500" height="200" rx="16" fill="url(#bgS3)" stroke="#f59e0b" stroke-width="2"/>

  <!-- Tension sparks / Node point indicator -->
  <circle cx="180" cy="100" r="45" fill="none" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6 3"/>
  <circle cx="180" cy="100" r="30" fill="rgba(245, 158, 11, 0.2)"/>
  <text x="180" y="106" fill="#fde68a" font-size="14" font-weight="900" text-anchor="middle">80h</text>
  <text x="180" y="165" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">ĐIỂM NÚT (NODE)</text>

  <!-- Sparks radiating -->
  <line x1="180" y1="45" x2="180" y2="25" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
  <line x1="180" y1="155" x2="180" y2="175" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
  <line x1="125" y1="100" x2="105" y2="100" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
  <line x1="235" y1="100" x2="255" y2="100" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>

  <!-- Intense focus figure -->
  <g transform="translate(370, 100)">
    <circle cx="0" cy="-30" r="22" fill="#f59e0b"/>
    <path d="M-20 20 C-20 -10 20 -10 20 20 Z" fill="#d97706"/>
    <text x="0" y="50" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">60 - 79 GIỜ</text>
    <text x="0" y="68" fill="#fde68a" font-size="10" text-anchor="middle">(Sát ngưỡng Điểm Nút)</text>
  </g>
</svg>`,

  'assets/images/slider/stage-leap.svg': `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" width="500" height="200">
  <defs>
    <linearGradient id="bgS4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="50%" stop-color="#047857" />
      <stop offset="100%" stop-color="#065f46" />
    </linearGradient>
  </defs>
  <rect width="500" height="200" rx="16" fill="url(#bgS4)" stroke="#34d399" stroke-width="3"/>

  <!-- Leap Explosion Sunburst -->
  <g transform="translate(180, 100)">
    <circle cx="0" cy="0" r="45" fill="#facc15" stroke="#ffffff" stroke-width="4"/>
    <polygon points="0,-45 12,-15 45,-15 18,5 28,38 0,18 -28,38 -18,5 -45,-15 -12,-15" fill="#fbbf24"/>
    <text x="0" y="7" fill="#0f172a" font-size="18" font-weight="900" text-anchor="middle">LEAP</text>
  </g>

  <!-- Rocket / Quantum Evolution -->
  <g transform="translate(370, 90)">
    <circle cx="0" cy="-25" r="24" fill="#facc15" stroke="#ffffff" stroke-width="2"/>
    <!-- Graduation Cap -->
    <polygon points="0,-48 24,-38 0,-28 -24,-38" fill="#0f172a"/>
    <line x1="20" y1="-36" x2="24" y2="-20" stroke="#f59e0b" stroke-width="2"/>
    <path d="M-22 25 C-22 -5 22 -5 22 25 Z" fill="#10b981"/>
    
    <text x="0" y="50" fill="#a7f3d0" font-size="13" font-weight="900" text-anchor="middle">80 - 100 GIỜ</text>
    <text x="0" y="68" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">BIẾN ĐỔI VỀ CHẤT!</text>
  </g>

  <!-- Bottom banner -->
  <rect x="20" y="160" width="460" height="28" rx="14" fill="#065f46" stroke="#34d399"/>
  <text x="250" y="179" fill="#ecfdf5" font-size="11" font-weight="bold" text-anchor="middle">
    CHẤT MỚI RA ĐỜI: KỸ NĂNG ĐẠT ĐẲNG CẤP TINH THÔNG
  </text>
</svg>`
};

let count = 0;
for (const [relPath, svgContent] of Object.entries(additionalSVGs)) {
  const fullPath = path.resolve(relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, svgContent, 'utf8');
  count++;
}

console.log(`Generated ${count} additional rich exercise SVGs!`);
