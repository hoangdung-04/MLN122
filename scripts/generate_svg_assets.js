import fs from 'fs';
import path from 'path';

const svgTemplates = {
  // CHAPTER 1
  'assets/images/chapter1/intro-philosophy.svg': {
    title: 'NGUỒN GỐC TRIẾT HỌC',
    sub: 'Nhận thức & Xã hội | Con người & Vũ trụ',
    iconColor: '#38bdf8',
    render: `
      <!-- Cosmos & Human Wonder -->
      <circle cx="400" cy="225" r="160" fill="none" stroke="url(#cyanGlow)" stroke-width="2" stroke-dasharray="6 6" opacity="0.6"/>
      <circle cx="400" cy="225" r="110" fill="none" stroke="url(#goldGlow)" stroke-width="1.5" opacity="0.8"/>
      
      <!-- Celestial bodies -->
      <circle cx="310" cy="160" r="18" fill="url(#cyanGlow)"/>
      <circle cx="490" cy="290" r="24" fill="url(#goldGlow)"/>
      <circle cx="470" cy="150" r="10" fill="#a78bfa"/>
      
      <!-- Human silhouette contemplating -->
      <path d="M385 270 Q400 240 400 215 Q400 195 385 180 Q400 185 415 180 Q400 195 400 215 Q400 240 415 270 Z" fill="#ffffff" opacity="0.9"/>
      <circle cx="400" cy="165" r="16" fill="#facc15"/>
      <path d="M370 310 L400 265 L430 310 Z" fill="url(#goldGlow)"/>
      
      <!-- Question marks and wonder rays -->
      <text x="350" y="140" fill="#38bdf8" font-size="28" font-weight="bold" opacity="0.8">?</text>
      <text x="445" y="130" fill="#f59e0b" font-size="34" font-weight="bold" opacity="0.9">?</text>
      <text x="400" y="105" fill="#a855f7" font-size="40" font-weight="bold">?</text>
      
      <!-- Thought beam -->
      <path d="M400 150 L400 80" stroke="#facc15" stroke-width="2" stroke-dasharray="4 4"/>
    `
  },
  'assets/images/chapter1/basic-question.svg': {
    title: 'VẤN ĐỀ CƠ BẢN CỦA TRIẾT HỌC',
    sub: 'Bản thể luận: Vật chất & Ý thức - Cái nào có trước?',
    iconColor: '#f59e0b',
    render: `
      <!-- Left side: Matter (Brain, Circuit, Physics) -->
      <rect x="180" y="130" width="180" height="190" rx="16" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
      <text x="270" y="170" fill="#60a5fa" font-size="18" font-weight="bold" text-anchor="middle">VẬT CHẤT</text>
      <circle cx="270" cy="225" r="35" fill="none" stroke="#38bdf8" stroke-width="3"/>
      <path d="M250 225 L290 225 M270 205 L270 245" stroke="#38bdf8" stroke-width="3"/>
      <text x="270" y="290" fill="#94a3b8" font-size="13" text-anchor="middle">Thế giới khách quan</text>

      <!-- Center Vs / Relation Symbol -->
      <circle cx="400" cy="225" r="30" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <text x="400" y="233" fill="#fbbf24" font-size="20" font-weight="bold" text-anchor="middle">VS</text>
      <path d="M360 225 L370 225 M430 225 L440 225" stroke="#f59e0b" stroke-width="2"/>

      <!-- Right side: Consciousness (Idea, Lightbulb, Thought) -->
      <rect x="440" y="130" width="180" height="190" rx="16" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
      <text x="530" y="170" fill="#f472b6" font-size="18" font-weight="bold" text-anchor="middle">Ý THỨC</text>
      <!-- Lightbulb -->
      <path d="M515 215 C515 200 545 200 545 215 C545 225 538 230 538 240 L522 240 C522 230 515 225 515 215 Z" fill="#fbbf24"/>
      <rect x="524" y="243" width="12" height="6" rx="2" fill="#d97706"/>
      <text x="530" y="290" fill="#94a3b8" font-size="13" text-anchor="middle">Tư duy & Tinh thần</text>
    `
  },
  'assets/images/chapter1/destiny-choice.svg': {
    title: 'SỐ PHẬN HAY NỖ LỰC CHỦ ĐỘNG?',
    sub: 'Duy tâm khách quan vs Thế giới quan Duy vật biện chứng',
    iconColor: '#ec4899',
    render: `
      <!-- Crossroads -->
      <path d="M400 370 L400 260 L240 150 M400 260 L560 150" fill="none" stroke="#475569" stroke-width="32" stroke-linecap="round"/>
      <path d="M400 370 L400 260 L240 150 M400 260 L560 150" fill="none" stroke="#0ea5e9" stroke-width="4" stroke-dasharray="10 10"/>
      
      <!-- Left Sign: Số phận (Duy tâm) -->
      <g transform="translate(160, 100)">
        <rect width="150" height="60" rx="12" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
        <text x="75" y="30" fill="#c7d2fe" font-size="15" font-weight="bold" text-anchor="middle">CON ĐƯỜNG 1</text>
        <text x="75" y="48" fill="#e0e7ff" font-size="14" font-weight="bold" text-anchor="middle">"Do Số Phận"</text>
      </g>
      
      <!-- Right Sign: Nỗ lực (Duy vật) -->
      <g transform="translate(490, 100)">
        <rect width="150" height="60" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
        <text x="75" y="30" fill="#a7f3d0" font-size="15" font-weight="bold" text-anchor="middle">CON ĐƯỜNG 2</text>
        <text x="75" y="48" fill="#ecfdf5" font-size="14" font-weight="bold" text-anchor="middle">"Hành Động Thực Tiễn"</text>
      </g>

      <!-- Traveler Figure -->
      <circle cx="400" cy="300" r="14" fill="#fbbf24"/>
      <path d="M390 340 L400 314 L410 340 Z" fill="#f8fafc"/>
    `
  },
  'assets/images/chapter1/dialectics-metaphysics.svg': {
    title: 'PHƯƠNG PHÁP BIỆN CHỨNG VS SIÊU HÌNH',
    sub: 'Vận động trong liên hệ phổ biến vs Bất biến trong cô lập',
    iconColor: '#10b981',
    render: `
      <!-- Metaphysical side (isolated box) -->
      <rect x="160" y="130" width="200" height="200" rx="16" fill="#1e1b4b" stroke="#6366f1" stroke-width="2"/>
      <text x="260" y="165" fill="#a5b4fc" font-size="16" font-weight="bold" text-anchor="middle">SIÊU HÌNH</text>
      <rect x="220" y="195" width="80" height="80" fill="#312e81" stroke="#818cf8" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="260" y="240" fill="#c7d2fe" font-size="13" text-anchor="middle">Tĩnh tại</text>
      <text x="260" y="258" fill="#94a3b8" font-size="11" text-anchor="middle">Cô lập, bất biến</text>

      <!-- Dialectical side (flow, spirals, connections) -->
      <rect x="440" y="130" width="200" height="200" rx="16" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
      <text x="540" y="165" fill="#6ee7b7" font-size="16" font-weight="bold" text-anchor="middle">BIỆN CHỨNG</text>
      <!-- Spiral / Growth cycle -->
      <path d="M510 240 A 30 30 0 1 1 570 240 A 20 20 0 1 1 530 240 A 10 10 0 1 1 550 240" fill="none" stroke="#34d399" stroke-width="3"/>
      <polygon points="565,225 575,240 555,240" fill="#34d399"/>
      <text x="540" y="295" fill="#a7f3d0" font-size="12" text-anchor="middle">Vận động, chuyển hóa</text>
    `
  },
  'assets/images/chapter1/marxist-role.svg': {
    title: 'VAI TRÒ TRIẾT HỌC MÁC – LÊNIN',
    sub: 'Thế giới quan khoa học & Phương pháp luận cách mạng',
    iconColor: '#e11d48',
    render: `
      <!-- Compass / Guide for youth -->
      <circle cx="400" cy="225" r="90" fill="#1e293b" stroke="#f43f5e" stroke-width="3"/>
      <circle cx="400" cy="225" r="75" fill="none" stroke="#fda4af" stroke-width="1" stroke-dasharray="4 4"/>
      <!-- Compass needle -->
      <polygon points="400,150 415,225 385,225" fill="#f43f5e"/>
      <polygon points="400,300 415,225 385,225" fill="#64748b"/>
      <circle cx="400" cy="225" r="10" fill="#fbbf24"/>
      <!-- Cardinal letters -->
      <text x="400" y="142" fill="#fb7185" font-size="16" font-weight="bold" text-anchor="middle">KHOA HỌC</text>
      <text x="400" y="325" fill="#94a3b8" font-size="14" text-anchor="middle">THỰC TIỄN</text>
      <!-- Star rays -->
      <circle cx="280" cy="180" r="4" fill="#fde047"/>
      <circle cx="520" cy="180" r="4" fill="#fde047"/>
      <circle cx="300" cy="280" r="3" fill="#fde047"/>
      <circle cx="500" cy="280" r="3" fill="#fde047"/>
    `
  },

  // CHAPTER 2
  'assets/images/chapter2/material-consciousness.svg': {
    title: 'VẬT CHẤT & Ý THỨC: ÁP LỰC ĐỜI THỰC',
    sub: 'Điều kiện vật chất khách quan quyết định ý thức',
    iconColor: '#0ea5e9',
    render: `
      <!-- Center Student Figure with backpack -->
      <circle cx="400" cy="170" r="22" fill="#fbbf24"/>
      <rect x="382" y="195" width="36" height="60" rx="8" fill="#3b82f6"/>
      <rect x="375" y="200" width="10" height="40" rx="4" fill="#d97706"/>

      <!-- Left: Stack of study books (Goal: GPA 4.0) -->
      <g transform="translate(180, 200)">
        <rect x="0" y="60" width="130" height="25" rx="5" fill="#0284c7" stroke="#38bdf8"/>
        <rect x="15" y="35" width="100" height="25" rx="5" fill="#0369a1" stroke="#38bdf8"/>
        <rect x="30" y="10" width="70" height="25" rx="5" fill="#075985" stroke="#38bdf8"/>
        <text x="65" y="-10" fill="#7dd3fc" font-size="16" font-weight="bold" text-anchor="middle">MỤC TIÊU: GPA 4.0</text>
      </g>

      <!-- Right: Clock and 8 hours Work Shift -->
      <g transform="translate(480, 200)">
        <circle cx="65" cy="45" r="45" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
        <line x1="65" y1="45" x2="65" y2="20" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
        <line x1="65" y1="45" x2="90" y2="45" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
        <text x="65" y="-10" fill="#fcd34d" font-size="16" font-weight="bold" text-anchor="middle">CA LÀM: 8H/NGÀY</text>
      </g>
      
      <!-- Connecting Balance Beam -->
      <line x1="245" y1="200" x2="545" y2="200" stroke="#cbd5e1" stroke-width="3"/>
      <circle cx="400" cy="200" r="6" fill="#ef4444"/>
    `
  },
  'assets/images/chapter2/subjective-dynamism.svg': {
    title: 'TÍNH NĂNG ĐỘNG CHỦ QUAN',
    sub: 'Ý thức tác động trở lại thế giới vật chất thông qua thực tiễn',
    iconColor: '#f59e0b',
    render: `
      <!-- Glowing mind / light illuminating reality -->
      <circle cx="400" cy="180" r="45" fill="none" stroke="#f59e0b" stroke-width="3"/>
      <path d="M375 180 Q400 130 425 180 Q400 230 375 180" fill="#fde047" opacity="0.6"/>
      <!-- Radiating transformation arrows -->
      <g stroke="#fbbf24" stroke-width="2" stroke-linecap="round">
        <line x1="330" y1="180" x2="280" y2="180"/>
        <line x1="470" y1="180" x2="520" y2="180"/>
        <line x1="350" y1="130" x2="310" y2="90"/>
        <line x1="450" y1="130" x2="490" y2="90"/>
      </g>
      <!-- Real-world execution blocks below -->
      <rect x="220" y="270" width="100" height="50" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>
      <text x="270" y="300" fill="#93c5fd" font-size="13" font-weight="bold" text-anchor="middle">Kế hoạch</text>
      <rect x="350" y="270" width="100" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="400" y="300" fill="#6ee7b7" font-size="13" font-weight="bold" text-anchor="middle">Hành động</text>
      <rect x="480" y="270" width="100" height="50" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
      <text x="530" y="300" fill="#d8b4fe" font-size="13" font-weight="bold" text-anchor="middle">Cải tạo</text>
    `
  },
  'assets/images/chapter2/universal-connection.svg': {
    title: 'MỐI LIÊN HỆ PHỔ BIẾN',
    sub: 'Xem xét toàn diện các mối tương quan, tránh phiến diện',
    iconColor: '#38bdf8',
    render: `
      <!-- Central problem: Low grade / Result -->
      <circle cx="400" cy="225" r="42" fill="#ef4444" stroke="#fca5a5" stroke-width="3"/>
      <text x="400" y="222" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">KẾT QUẢ</text>
      <text x="400" y="240" fill="#ffffff" font-size="12" text-anchor="middle">ĐIỂM THẤP</text>

      <!-- Surrounding interconnected factors -->
      <!-- Node 1: Sức khỏe -->
      <circle cx="250" cy="140" r="34" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
      <text x="250" y="145" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">Sức khỏe</text>
      <line x1="280" y1="160" x2="365" y2="205" stroke="#10b981" stroke-width="2" stroke-dasharray="4 4"/>

      <!-- Node 2: Phương pháp -->
      <circle cx="550" cy="140" r="34" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
      <text x="550" y="145" fill="#bfdbfe" font-size="12" font-weight="bold" text-anchor="middle">Cách học</text>
      <line x1="520" y1="160" x2="435" y2="205" stroke="#60a5fa" stroke-width="2" stroke-dasharray="4 4"/>

      <!-- Node 3: Thời gian làm thêm -->
      <circle cx="230" cy="300" r="34" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="230" y="305" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Làm thêm</text>
      <line x1="260" y1="285" x2="365" y2="245" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 4"/>

      <!-- Node 4: Môi trường / Gia đình -->
      <circle cx="570" cy="300" r="34" fill="#1e293b" stroke="#c084fc" stroke-width="2"/>
      <text x="570" y="305" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">Môi trường</text>
      <line x1="540" y1="285" x2="435" y2="245" stroke="#c084fc" stroke-width="2" stroke-dasharray="4 4"/>
      
      <!-- Interconnection between factors -->
      <path d="M250 174 L230 266" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
      <path d="M550 174 L570 266" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2 2"/>
    `
  },
  'assets/images/chapter2/development-spiral.svg': {
    title: 'NGUYÊN LÝ VỀ SỰ PHÁT TRIỂN',
    sub: 'Khuynh hướng đi lên theo đường xoắn ốc quanh co phức tạp',
    iconColor: '#10b981',
    render: `
      <!-- Ascending Spiral Line -->
      <path d="M220 340 C 320 340, 360 280, 280 270 C 200 260, 260 200, 380 200 C 500 200, 520 130, 440 120 C 380 110, 460 70, 560 80" fill="none" stroke="url(#greenGlow)" stroke-width="4"/>
      <polygon points="560,70 580,82 562,94" fill="#34d399"/>
      
      <!-- Checkpoints along development -->
      <circle cx="220" cy="340" r="8" fill="#ef4444"/>
      <text x="220" y="365" fill="#fca5a5" font-size="11" text-anchor="middle">Điểm xuất phát</text>

      <circle cx="280" cy="270" r="8" fill="#f59e0b"/>
      <text x="320" y="260" fill="#fde68a" font-size="11">Khủng hoảng & thử thách</text>

      <circle cx="380" cy="200" r="8" fill="#38bdf8"/>
      <text x="380" y="180" fill="#7dd3fc" font-size="11" text-anchor="middle">Đổi mới phương pháp</text>

      <circle cx="560" cy="80" r="10" fill="#10b981"/>
      <text x="560" y="55" fill="#a7f3d0" font-size="13" font-weight="bold" text-anchor="middle">Chất mới tiến bộ</text>
    `
  },
  'assets/images/chapter2/quantity-quality.svg': {
    title: 'QUY LUẬT LƯỢNG – CHẤT',
    sub: 'Tích lũy về Lượng vượt Điểm Nút dẫn đến Bước Nhảy về Chất',
    iconColor: '#ec4899',
    render: `
      <!-- Boiling Water / Energy Bar Metaphor -->
      <rect x="180" y="160" width="440" height="30" rx="15" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <!-- Filled gradient progress -->
      <rect x="180" y="160" width="350" height="30" rx="15" fill="url(#pinkGlow)"/>
      
      <!-- Node point marker (100°C / Node Point) -->
      <line x1="530" y1="130" x2="530" y2="220" stroke="#facc15" stroke-width="3" stroke-dasharray="4 2"/>
      <polygon points="522,125 538,125 530,138" fill="#facc15"/>
      <text x="530" y="115" fill="#fef08a" font-size="13" font-weight="bold" text-anchor="middle">ĐIỂM NÚT (100h)</text>
      
      <!-- Measure zone (Độ) -->
      <text x="320" y="145" fill="#94a3b8" font-size="13" text-anchor="middle">GIỚI HẠN ĐỘ (0h - 100h)</text>
      
      <!-- Leap explosion effect -->
      <g transform="translate(580, 220)">
        <polygon points="0,-20 7,-5 22,-9 11,3 20,17 4,11 -5,22 -8,7 -22,6 -11,-4" fill="#fbbf24"/>
        <text x="45" y="5" fill="#fbbf24" font-size="14" font-weight="bold">BƯỚC NHẢY!</text>
        <text x="45" y="23" fill="#cbd5e1" font-size="12">Biến đổi về Chất</text>
      </g>
    `
  },
  'assets/images/chapter2/contradiction-study-work.svg': {
    title: 'QUY LUẬT MÂU THUẪN',
    sub: 'Mặt đối lập: Thống nhất và Đấu tranh là nguồn gốc phát triển',
    iconColor: '#f97316',
    render: `
      <!-- Balance Scale on central pivot -->
      <polygon points="400,240 380,310 420,310" fill="#334155"/>
      <line x1="250" y1="220" x2="550" y2="260" stroke="#94a3b8" stroke-width="6" stroke-linecap="round"/>
      <circle cx="400" cy="240" r="10" fill="#f97316"/>

      <!-- Left Pan: Học tập & Nghiên cứu (Up) -->
      <g transform="translate(250, 220)">
        <line x1="0" y1="0" x2="-35" y2="50" stroke="#64748b" stroke-width="2"/>
        <line x1="0" y1="0" x2="35" y2="50" stroke="#64748b" stroke-width="2"/>
        <ellipse cx="0" cy="50" rx="45" ry="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="0" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">HỌC TẬP</text>
      </g>

      <!-- Right Pan: Đi làm kiếm sống (Down) -->
      <g transform="translate(550, 260)">
        <line x1="0" y1="0" x2="-35" y2="50" stroke="#64748b" stroke-width="2"/>
        <line x1="0" y1="0" x2="35" y2="50" stroke="#64748b" stroke-width="2"/>
        <ellipse cx="0" cy="50" rx="45" ry="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="0" y="45" fill="#f59e0b" font-size="13" font-weight="bold" text-anchor="middle">ĐI LÀM THÊM</text>
      </g>

      <!-- Clash lightning bolt in middle -->
      <path d="M395 140 L410 170 L395 175 L415 210" stroke="#fbbf24" stroke-width="4" fill="none"/>
    `
  },
  'assets/images/chapter2/negation-of-negation.svg': {
    title: 'PHỦ ĐỊNH CỦA PHỦ ĐỊNH',
    sub: 'Đường xoắn ốc: Kế thừa cái tích cực ở nấc thang cao hơn',
    iconColor: '#8b5cf6',
    render: `
      <!-- Step 1: Khẳng định ban đầu -->
      <g transform="translate(180, 200)">
        <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
        <text x="0" y="-5" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">GIAI ĐOẠN 1</text>
        <text x="0" y="14" fill="#94a3b8" font-size="10" text-anchor="middle">Cách học cũ</text>
      </g>

      <!-- Arrow 1: Phủ định lần 1 -->
      <path d="M230 200 Q280 160 330 200" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 2"/>
      <text x="280" y="160" fill="#fca5a5" font-size="11" text-anchor="middle">Phủ định 1 (Thất bại)</text>

      <!-- Step 2: Phủ định lần 1 -->
      <g transform="translate(380, 200)">
        <circle cx="0" cy="0" r="38" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
        <text x="0" y="-5" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">GIAI ĐOẠN 2</text>
        <text x="0" y="14" fill="#f87171" font-size="10" text-anchor="middle">Phá bỏ thói quen</text>
      </g>

      <!-- Arrow 2: Phủ định của phủ định -->
      <path d="M430 200 Q480 120 530 150" fill="none" stroke="#10b981" stroke-width="4"/>
      <text x="490" y="120" fill="#6ee7b7" font-size="11" text-anchor="middle">Kế thừa & nâng cao</text>

      <!-- Step 3: Đỉnh cao mới -->
      <g transform="translate(580, 150)">
        <circle cx="0" cy="0" r="44" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
        <text x="0" y="-8" fill="#ecfdf5" font-size="12" font-weight="bold" text-anchor="middle">GIAI ĐOẠN 3</text>
        <text x="0" y="10" fill="#a7f3d0" font-size="11" text-anchor="middle">Tư duy biện chứng</text>
        <text x="0" y="25" fill="#34d399" font-size="9" text-anchor="middle">(Chất lượng vượt trội)</text>
      </g>
    `
  },
  'assets/images/chapter2/individual-general.svg': {
    title: 'CÁI RIÊNG VÀ CÁI CHUNG',
    sub: 'Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng',
    iconColor: '#06b6d4',
    render: `
      <!-- Large overlapping Venn circles -->
      <circle cx="340" cy="225" r="95" fill="#0e7490" fill-opacity="0.3" stroke="#22d3ee" stroke-width="2"/>
      <circle cx="460" cy="225" r="95" fill="#4338ca" fill-opacity="0.3" stroke="#818cf8" stroke-width="2"/>
      
      <!-- Left: Cái riêng A -->
      <text x="290" y="225" fill="#a5f3fc" font-size="14" font-weight="bold" text-anchor="middle">CÁI RIÊNG A</text>
      <text x="290" y="245" fill="#bae6fd" font-size="11" text-anchor="middle">(Cá tính, hoàn cảnh)</text>

      <!-- Right: Cái riêng B -->
      <text x="510" y="225" fill="#c7d2fe" font-size="14" font-weight="bold" text-anchor="middle">CÁI RIÊNG B</text>
      <text x="510" y="245" fill="#e0e7ff" font-size="11" text-anchor="middle">(Ngành học, sở trường)</text>

      <!-- Intersection: Cái chung -->
      <rect x="365" y="195" width="70" height="60" rx="8" fill="#fbbf24" fill-opacity="0.9"/>
      <text x="400" y="222" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">CÁI CHUNG</text>
      <text x="400" y="240" fill="#1e293b" font-size="10" font-weight="bold" text-anchor="middle">Quy luật học</text>
    `
  },
  'assets/images/chapter2/cause-effect.svg': {
    title: 'NGUYÊN NHÂN VÀ KẾT QUẢ',
    sub: 'Mối quan hệ sản sinh khách quan: Nguyên nhân sinh ra kết quả',
    iconColor: '#eab308',
    render: `
      <!-- Falling Dominoes -->
      <!-- Domino 1: Thức khuya 3h sáng -->
      <g transform="translate(240, 200) rotate(15)">
        <rect x="-15" y="-50" width="30" height="100" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="0" y="10" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90)">Thức khuya</text>
      </g>

      <!-- Domino 2: Mất tập trung -->
      <g transform="translate(320, 215) rotate(35)">
        <rect x="-15" y="-50" width="30" height="100" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="0" y="10" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90)">Mệt mỏi</text>
      </g>

      <!-- Domino 3: Làm bài sai -->
      <g transform="translate(410, 240) rotate(60)">
        <rect x="-15" y="-50" width="30" height="100" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <text x="0" y="10" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle" transform="rotate(-90)">Hổng bài</text>
      </g>

      <!-- Final Result Box -->
      <g transform="translate(540, 230)">
        <circle cx="0" cy="0" r="45" fill="#991b1b" stroke="#f87171" stroke-width="3"/>
        <text x="0" y="-5" fill="#fef2f2" font-size="13" font-weight="bold" text-anchor="middle">KẾT QUẢ</text>
        <text x="0" y="15" fill="#fecaca" font-size="12" text-anchor="middle">Trượt môn</text>
      </g>
    `
  },
  'assets/images/chapter2/necessity-chance.svg': {
    title: 'TẤT NHIÊN VÀ NGẪU NHIÊN',
    sub: 'Tất nhiên vạch đường đi qua vô số cái ngẫu nhiên',
    iconColor: '#14b8a6',
    render: `
      <!-- Main Highway of Necessity -->
      <path d="M160 225 L640 225" stroke="#0d9488" stroke-width="18" stroke-linecap="round"/>
      <path d="M160 225 L640 225" stroke="#f0fdfa" stroke-width="2" stroke-dasharray="12 12"/>
      <text x="400" y="195" fill="#5eead4" font-size="16" font-weight="bold" text-anchor="middle">ĐƯỜNG TẤT NHIÊN: NỖ LỰC TÍCH LŨY KIẾN THỨC</text>

      <!-- Random bumps / Chance events -->
      <circle cx="280" cy="140" r="28" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="280" y="145" fill="#fde68a" font-size="11" text-anchor="middle">Trúng tủ</text>
      <line x1="280" y1="168" x2="280" y2="216" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>

      <circle cx="500" cy="310" r="28" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
      <text x="500" y="315" fill="#fbcfe8" font-size="11" text-anchor="middle">Hỏng xe</text>
      <line x1="500" y1="282" x2="500" y2="234" stroke="#ec4899" stroke-width="2" stroke-dasharray="3 3"/>
    `
  },
  'assets/images/chapter2/content-form.svg': {
    title: 'NỘI DUNG VÀ HÌNH THỨC',
    sub: 'Nội dung quyết định hình thức, hình thức tác động trở lại nội dung',
    iconColor: '#6366f1',
    render: `
      <!-- Left: Beautiful slides but empty content -->
      <g transform="translate(260, 220)">
        <rect x="-80" y="-60" width="160" height="120" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
        <text x="0" y="-30" fill="#a5b4fc" font-size="13" font-weight="bold" text-anchor="middle">SLIDE LỘNG LẪY</text>
        <rect x="-60" y="-10" width="120" height="8" rx="4" fill="#4338ca"/>
        <text x="0" y="30" fill="#f43f5e" font-size="12" font-weight="bold" text-anchor="middle">Nội dung rỗng!</text>
      </g>

      <!-- Right: Substantial content with harmonious form -->
      <g transform="translate(540, 220)">
        <rect x="-80" y="-60" width="160" height="120" rx="12" fill="#064e3b" stroke="#34d399" stroke-width="3"/>
        <text x="0" y="-30" fill="#6ee7b7" font-size="13" font-weight="bold" text-anchor="middle">TRI THỨC SÂU SẮC</text>
        <circle cx="-30" cy="15" r="16" fill="#047857"/>
        <circle cx="30" cy="15" r="16" fill="#047857"/>
        <text x="0" y="45" fill="#a7f3d0" font-size="11" text-anchor="middle">Trình bày sáng sủa</text>
      </g>
    `
  },
  'assets/images/chapter2/essence-phenomenon.svg': {
    title: 'BẢN CHẤT VÀ HIỆN TƯỢNG',
    sub: 'Tảng băng trôi: Hiện tượng bộc lộ một phần nhưng cũng có thể xuyên tạc',
    iconColor: '#38bdf8',
    render: `
      <!-- Sea surface line -->
      <line x1="140" y1="210" x2="660" y2="210" stroke="#0284c7" stroke-width="4"/>
      <text x="210" y="195" fill="#7dd3fc" font-size="13" font-weight="bold">MẶT NƯỚC (HIỆN TƯỢNG)</text>
      
      <!-- Iceberg Top (Phenomenon) -->
      <polygon points="400,120 440,210 360,210" fill="#e0f2fe" stroke="#38bdf8" stroke-width="2"/>
      <text x="400" y="165" fill="#0369a1" font-size="12" font-weight="bold" text-anchor="middle">Đi học đủ</text>
      <text x="400" y="180" fill="#0369a1" font-size="10" text-anchor="middle">(10% nhìn thấy)</text>

      <!-- Iceberg Deep Bottom (Essence) -->
      <polygon points="340,210 460,210 520,330 280,340" fill="#0369a1" fill-opacity="0.6" stroke="#38bdf8" stroke-width="2"/>
      <text x="400" y="260" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">BẢN CHẤT</text>
      <text x="400" y="280" fill="#bae6fd" font-size="12" text-anchor="middle">Thụ động, không hiểu bài</text>
      <text x="400" y="300" fill="#93c5fd" font-size="11" text-anchor="middle">(90% quyết định kết quả)</text>
    `
  },
  'assets/images/chapter2/possibility-reality.svg': {
    title: 'KHẢ NĂNG VÀ HIỆN THỰC',
    sub: 'Khả năng chuyển hóa thành hiện thực khi hội tụ đủ điều kiện',
    iconColor: '#84cc16',
    render: `
      <!-- Sprout (Possibility) -->
      <g transform="translate(250, 240)">
        <ellipse cx="0" cy="50" rx="60" ry="16" fill="#3f3f46"/>
        <path d="M0 50 Q-15 20 -25 0 Q-5 10 0 50" fill="#84cc16"/>
        <path d="M0 50 Q15 15 30 5 Q10 20 0 50" fill="#65a30d"/>
        <text x="0" y="90" fill="#bef264" font-size="14" font-weight="bold" text-anchor="middle">KHẢ NĂNG</text>
        <text x="0" y="110" fill="#a1a1aa" font-size="11" text-anchor="middle">(Ý tưởng khởi nghiệp)</text>
      </g>

      <!-- Conditions Arrow -->
      <path d="M350 250 L450 250" stroke="#facc15" stroke-width="4" stroke-dasharray="6 3"/>
      <polygon points="450,242 465,250 450,258" fill="#facc15"/>
      <text x="405" y="235" fill="#fef08a" font-size="12" text-anchor="middle">Hội tụ điều kiện</text>

      <!-- Mighty Tree (Reality) -->
      <g transform="translate(560, 230)">
        <ellipse cx="0" cy="60" rx="70" ry="18" fill="#3f3f46"/>
        <rect x="-14" y="0" width="28" height="60" fill="#78350f"/>
        <circle cx="0" cy="-20" r="45" fill="#15803d"/>
        <circle cx="-25" cy="-10" r="30" fill="#16a34a"/>
        <circle cx="25" cy="-10" r="30" fill="#16a34a"/>
        <text x="0" y="100" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">HIỆN THỰC</text>
        <text x="0" y="120" fill="#a1a1aa" font-size="11" text-anchor="middle">(Dự án thành công)</text>
      </g>
    `
  },
  'assets/images/chapter2/sensory-rational.svg': {
    title: 'NHẬN THỨC CẢM TÍNH & LÝ TÍNH',
    sub: 'Từ trực quan sinh động đến tư duy trừu tượng',
    iconColor: '#ec4899',
    render: `
      <!-- Left: Sensory (Eye, Appearance) -->
      <g transform="translate(250, 220)">
        <rect x="-80" y="-70" width="160" height="140" rx="16" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
        <text x="0" y="-40" fill="#f472b6" font-size="14" font-weight="bold" text-anchor="middle">CẢM TÍNH</text>
        <path d="M-40 0 Q0 -25 40 0 Q0 25 -40 0 Z" fill="none" stroke="#fb7185" stroke-width="3"/>
        <circle cx="0" cy="0" r="10" fill="#fb7185"/>
        <text x="0" y="45" fill="#cbd5e1" font-size="11" text-anchor="middle">Cảm giác, tri giác</text>
      </g>

      <!-- Upward dialectical jump -->
      <path d="M350 220 L430 220" stroke="#facc15" stroke-width="4"/>
      <polygon points="430,212 445,220 430,228" fill="#facc15"/>

      <!-- Right: Rational (Brain, Concepts, Logic) -->
      <g transform="translate(540, 220)">
        <rect x="-80" y="-70" width="160" height="140" rx="16" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="0" y="-40" fill="#d8b4fe" font-size="14" font-weight="bold" text-anchor="middle">LÝ TÍNH</text>
        <circle cx="0" cy="0" r="24" fill="none" stroke="#c084fc" stroke-width="3"/>
        <text x="0" y="5" fill="#f3e8ff" font-size="16" font-weight="bold" text-anchor="middle">f(x)</text>
        <text x="0" y="45" fill="#cbd5e1" font-size="11" text-anchor="middle">Khái niệm, phán đoán</text>
      </g>
    `
  },
  'assets/images/chapter2/practice-truth.svg': {
    title: 'THỰC TIỄN – TIÊU CHUẨN CHÂN LÝ',
    sub: 'Học bơi trên bờ vs Nhảy xuống dòng nước kiểm chứng',
    iconColor: '#0ea5e9',
    render: `
      <!-- Left side: Theory book on dry shore -->
      <rect x="160" y="160" width="180" height="130" rx="12" fill="#1e293b" stroke="#e2e8f0" stroke-width="2"/>
      <text x="250" y="195" fill="#94a3b8" font-size="14" font-weight="bold" text-anchor="middle">LÝ THUYẾT TRÊN GIẤY</text>
      <text x="250" y="230" fill="#cbd5e1" font-size="12" text-anchor="middle">100 cuốn sách bơi lội</text>
      <text x="250" y="255" fill="#f59e0b" font-size="11" text-anchor="middle">Chưa thể khẳng định chân lý</text>

      <!-- Right side: Water Waves & Real Swimming -->
      <rect x="420" y="160" width="220" height="130" rx="12" fill="#0369a1" stroke="#38bdf8" stroke-width="3"/>
      <!-- Waves -->
      <path d="M440 230 Q465 215 490 230 T540 230 T590 230 T640 230" fill="none" stroke="#bae6fd" stroke-width="3"/>
      <circle cx="510" cy="205" r="14" fill="#fbbf24"/>
      <text x="530" y="270" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">HOẠT ĐỘNG THỰC TIỄN</text>
      <text x="530" y="285" fill="#e0f2fe" font-size="11" text-anchor="middle">Kiểm nghiệm chân lý tối thượng</text>
    `
  },

  // CHAPTER 3
  'assets/images/chapter3/production-relations.svg': {
    title: 'LỰC LƯỢNG SẢN XUẤT & QUAN HỆ SẢN XUẤT',
    sub: 'QHSX phải phù hợp với trình độ phát triển của LLSX',
    iconColor: '#3b82f6',
    render: `
      <!-- Left Gear: Productive Forces (Modern AI, Automation) -->
      <g transform="translate(300, 225)">
        <circle cx="0" cy="0" r="70" fill="#1e293b" stroke="#3b82f6" stroke-width="5"/>
        <circle cx="0" cy="0" r="20" fill="#3b82f6"/>
        <!-- Gear teeth -->
        <rect x="-10" y="-85" width="20" height="20" rx="4" fill="#3b82f6"/>
        <rect x="-10" y="65" width="20" height="20" rx="4" fill="#3b82f6"/>
        <rect x="-85" y="-10" width="20" height="20" rx="4" fill="#3b82f6"/>
        <rect x="65" y="-10" width="20" height="20" rx="4" fill="#3b82f6"/>
        <text x="0" y="110" fill="#93c5fd" font-size="13" font-weight="bold" text-anchor="middle">LỰC LƯỢNG SX</text>
        <text x="0" y="128" fill="#64748b" font-size="11" text-anchor="middle">(AI, Kỹ thuật số)</text>
      </g>

      <!-- Right Gear: Relations of Production -->
      <g transform="translate(500, 225)">
        <circle cx="0" cy="0" r="60" fill="#1e293b" stroke="#10b981" stroke-width="5"/>
        <circle cx="0" cy="0" r="16" fill="#10b981"/>
        <rect x="-8" y="-72" width="16" height="16" rx="4" fill="#10b981"/>
        <rect x="-8" y="56" width="16" height="16" rx="4" fill="#10b981"/>
        <rect x="-72" y="-8" width="16" height="16" rx="4" fill="#10b981"/>
        <rect x="56" y="-8" width="16" height="16" rx="4" fill="#10b981"/>
        <text x="0" y="100" fill="#6ee7b7" font-size="13" font-weight="bold" text-anchor="middle">QUAN HỆ SẢN XUẤT</text>
        <text x="0" y="118" fill="#64748b" font-size="11" text-anchor="middle">(Quản lý, phân phối)</text>
      </g>
    `
  },
  'assets/images/chapter3/social-consciousness.svg': {
    title: 'TỒN TẠI XÃ HỘI & Ý THỨC XÃ HỘI',
    sub: 'Tồn tại xã hội quyết định ý thức xã hội, YTXH có tính độc lập tương đối',
    iconColor: '#f59e0b',
    render: `
      <!-- Base: Economic life / Social Being -->
      <rect x="180" y="270" width="440" height="70" rx="14" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
      <text x="400" y="305" fill="#f1f5f9" font-size="15" font-weight="bold" text-anchor="middle">TỒN TẠI XÃ HỘI (KINH TẾ - VẬT CHẤT)</text>
      <text x="400" y="325" fill="#94a3b8" font-size="12" text-anchor="middle">Phương thức sản xuất, điều kiện tự nhiên, dân cư</text>

      <!-- Upward determination arrow -->
      <path d="M400 260 L400 190" stroke="#f59e0b" stroke-width="4"/>
      <polygon points="392,190 400,175 408,190" fill="#f59e0b"/>

      <!-- Top: Social Consciousness (Social Media, Trend, Morals) -->
      <rect x="220" y="90" width="360" height="75" rx="14" fill="#312e81" stroke="#818cf8" stroke-width="2"/>
      <text x="400" y="125" fill="#c7d2fe" font-size="15" font-weight="bold" text-anchor="middle">Ý THỨC XÃ HỘI</text>
      <text x="400" y="145" fill="#a5b4fc" font-size="12" text-anchor="middle">Tâm lý xã hội, hệ tư tưởng, xu hướng mạng xã hội</text>
    `
  },
  'assets/images/chapter3/human-essence.svg': {
    title: 'BẢN CHẤT CON NGƯỜI',
    sub: 'Tổng hòa các mối quan hệ xã hội & Chủ thể hoạt động thực tiễn',
    iconColor: '#ec4899',
    render: `
      <!-- Center Person -->
      <circle cx="400" cy="210" r="32" fill="#fbbf24"/>
      <path d="M370 280 Q400 250 430 280 Z" fill="#f8fafc"/>
      <text x="400" y="305" fill="#facc15" font-size="14" font-weight="bold" text-anchor="middle">CON NGƯỜI</text>

      <!-- Surrounding Social Relations -->
      <g transform="translate(240, 140)">
        <rect x="-60" y="-20" width="120" height="40" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="0" y="5" fill="#7dd3fc" font-size="12" font-weight="bold" text-anchor="middle">Gia đình</text>
      </g>
      <line x1="280" y1="160" x2="365" y2="195" stroke="#38bdf8" stroke-width="2"/>

      <g transform="translate(560, 140)">
        <rect x="-60" y="-20" width="120" height="40" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
        <text x="0" y="5" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">Lao động - SX</text>
      </g>
      <line x1="520" y1="160" x2="435" y2="195" stroke="#34d399" stroke-width="2"/>

      <g transform="translate(240, 290)">
        <rect x="-60" y="-20" width="120" height="40" rx="8" fill="#1e293b" stroke="#f472b6" stroke-width="2"/>
        <text x="0" y="5" fill="#fbcfe8" font-size="12" font-weight="bold" text-anchor="middle">Văn hóa - Xã hội</text>
      </g>
      <line x1="280" y1="270" x2="365" y2="225" stroke="#f472b6" stroke-width="2"/>

      <g transform="translate(560, 290)">
        <rect x="-60" y="-20" width="120" height="40" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
        <text x="0" y="5" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">Chính trị - Pháp luật</text>
      </g>
      <line x1="520" y1="270" x2="435" y2="225" stroke="#fbbf24" stroke-width="2"/>
    `
  },

  // DETECTIVE CASES
  'assets/images/cases/case-student-mystery.svg': {
    title: 'HỒ SƠ ĐIỀU TRA #001',
    sub: 'Bí ẩn Sinh Viên A: Đến lớp 100% nhưng vì sao vẫn trượt môn?',
    iconColor: '#ef4444',
    render: `
      <!-- Dossier Folder -->
      <rect x="180" y="100" width="440" height="260" rx="16" fill="#1e293b" stroke="#ef4444" stroke-width="3"/>
      <!-- Top Red Stamp: CONFIDENTIAL -->
      <rect x="210" y="125" width="160" height="36" rx="6" fill="#991b1b" stroke="#fca5a5" stroke-width="2"/>
      <text x="290" y="148" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">HỒ SƠ MẬT #001</text>
      
      <!-- Magnifying Glass hovering -->
      <circle cx="480" cy="210" r="55" fill="#0f172a" fill-opacity="0.8" stroke="#f59e0b" stroke-width="5"/>
      <line x1="520" y1="250" x2="575" y2="305" stroke="#f59e0b" stroke-width="10" stroke-linecap="round"/>
      
      <!-- Clue text inside glass -->
      <text x="480" y="200" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">CHUYÊN CẦN: 100%</text>
      <text x="480" y="222" fill="#ef4444" font-size="16" font-weight="bold" text-anchor="middle">ĐIỂM THI: 2.0 (F)</text>
      
      <!-- Clue Pins -->
      <circle cx="240" cy="220" r="6" fill="#ef4444"/>
      <text x="255" y="224" fill="#cbd5e1" font-size="12">Manh mối 1: Thức đêm 3h sáng</text>
      <circle cx="240" cy="260" r="6" fill="#ef4444"/>
      <text x="255" y="264" fill="#cbd5e1" font-size="12">Manh mối 2: Học vẹt thụ động</text>
      <circle cx="240" cy="300" r="6" fill="#ef4444"/>
      <text x="255" y="304" fill="#cbd5e1" font-size="12">Manh mối 3: Hiện tượng vs Bản chất</text>
    `
  },
  'assets/images/cases/case-startup-crisis.svg': {
    title: 'HỒ SƠ ĐIỀU TRA #002',
    sub: 'Khủng hoảng Startup X: Đốt 50 triệu và cái bẫy chủ quan duy ý chí',
    iconColor: '#f59e0b',
    render: `
      <!-- Dossier Board with downward graph -->
      <rect x="180" y="100" width="440" height="260" rx="16" fill="#1e293b" stroke="#f59e0b" stroke-width="3"/>
      <rect x="210" y="125" width="160" height="36" rx="6" fill="#b45309" stroke="#fde68a" stroke-width="2"/>
      <text x="290" y="148" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">HỒ SƠ KHẨN #002</text>
      
      <!-- Downward chart -->
      <polyline points="230,220 300,200 370,250 450,230 540,320" fill="none" stroke="#ef4444" stroke-width="4"/>
      <circle cx="540" cy="320" r="8" fill="#ef4444"/>
      <text x="540" y="345" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Cạn vốn sau 2 tháng</text>

      <!-- Stamp: CHỦ QUAN DUY Ý CHÍ -->
      <g transform="translate(360, 200) rotate(-15)">
        <rect x="-100" y="-20" width="200" height="40" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
        <text x="0" y="5" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">CHỦ QUAN DUY Ý CHÍ</text>
      </g>
    `
  },
  'assets/images/cases/case-ai-labor.svg': {
    title: 'HỒ SƠ ĐIỀU TRA #003',
    sub: 'Nghịch lý Tự động hóa: Robot thế chỗ hay Mâu thuẫn LLSX và QHSX?',
    iconColor: '#06b6d4',
    render: `
      <!-- Factory silhouette & AI Robot arm -->
      <rect x="180" y="100" width="440" height="260" rx="16" fill="#1e293b" stroke="#06b6d4" stroke-width="3"/>
      <rect x="210" y="125" width="160" height="36" rx="6" fill="#0e7490" stroke="#a5f3fc" stroke-width="2"/>
      <text x="290" y="148" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">HỒ SƠ XÃ HỘI #003</text>

      <!-- Robotic Arm drawing -->
      <path d="M480 320 L500 240 L450 190 L410 205" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
      <circle cx="500" cy="240" r="10" fill="#38bdf8"/>
      <circle cx="450" cy="190" r="8" fill="#38bdf8"/>
      <polygon points="400,200 415,190 415,220" fill="#f59e0b"/>

      <!-- Clashing workers vs obsolete policies -->
      <text x="250" y="220" fill="#f1f5f9" font-size="13" font-weight="bold">LỰC LƯỢNG SX: TỰ ĐỘNG HÓA</text>
      <text x="250" y="245" fill="#f87171" font-size="13" font-weight="bold">QHSX CŨ: SA THẢI ĐỘT NGỘT</text>
      <text x="250" y="280" fill="#facc15" font-size="12">Mâu thuẫn biện chứng bùng phát</text>
    `
  }
};

function generateFullSVG(data) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19" />
      <stop offset="50%" stop-color="#111827" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
    <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
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
    <linearGradient id="pinkGlow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f472b6" />
      <stop offset="100%" stop-color="#db2777" />
    </linearGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="800" height="450" rx="20" fill="url(#bgGrad)" />
  
  <!-- Subtle Grid lines -->
  <g stroke="#1e293b" stroke-width="1" opacity="0.4">
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

  <!-- Header Badge -->
  <g transform="translate(40, 36)">
    <rect width="180" height="28" rx="14" fill="#1e293b" stroke="${data.iconColor}" stroke-width="1.5" />
    <circle cx="16" cy="14" r="5" fill="${data.iconColor}" />
    <text x="32" y="19" fill="#e2e8f0" font-size="11" font-weight="bold" letter-spacing="1">MLN122 • CASE SCENARIO</text>
  </g>

  <!-- Title & Subtitle inside SVG for standalone view -->
  <text x="760" y="44" fill="${data.iconColor}" font-size="13" font-weight="bold" text-anchor="end" letter-spacing="0.5">${data.title}</text>
  <text x="760" y="62" fill="#94a3b8" font-size="11" text-anchor="end">${data.sub}</text>

  <!-- Main Illustration Graphics -->
  ${data.render}

  <!-- Bottom Brand Watermark -->
  <text x="40" y="420" fill="#475569" font-size="11" font-weight="500">PHILOSOPHY IN LIFE — TRIẾT HỌC TRONG ĐỜI SỐNG</text>
  <text x="760" y="420" fill="#475569" font-size="11" text-anchor="end">FPT UNIVERSITY • MLN122</text>
</svg>`;
}

// Generate all assets
let count = 0;
for (const [relPath, data] of Object.entries(svgTemplates)) {
  const fullPath = path.resolve(relPath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, generateFullSVG(data), 'utf8');
  count++;
}

console.log(`Generated ${count} rich bespoke SVG illustrations!`);
