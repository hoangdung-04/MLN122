export const DIMENSIONS = [
  {
    key: 'connection',
    name: 'Quy Luật Giá Trị & Cơ Chế Thị Trường',
    nameShort: 'Quy Luật Giá Trị',
    desc: 'Khả năng nhận diện quy luật giá trị, cung - cầu và tính hai mặt của lao động sản xuất hàng hóa.',
    color: '#0284c7'
  },
  {
    key: 'contradiction',
    name: 'Bản Chất Giá Trị Thặng Dư & Lao Động',
    nameShort: 'Giá Trị Thặng Dư',
    desc: 'Khả năng bóc tách nguồn gốc giá trị thặng dư (m), hàng hóa sức lao động và sự phân chia c và v.',
    color: '#f59e0b'
  },
  {
    key: 'depth',
    name: 'Chiến Lược Cạnh Tranh & Độc Quyền',
    nameShort: 'Cạnh Tranh & Độc Quyền',
    desc: 'Khả năng phân tích sự tập trung tư bản, nhận diện độc quyền số và vai trò điều tiết của Nhà nước.',
    color: '#8b5cf6'
  },
  {
    key: 'objective',
    name: 'Hài Hòa Các Quan Hệ Lợi Ích Kinh Tế',
    nameShort: 'Hài Hòa Lợi Ích',
    desc: 'Năng lực cân bằng lợi ích cá nhân, doanh nghiệp và xã hội trong nền KTTT định hướng XHCN.',
    color: '#10b981'
  },
  {
    key: 'practice',
    name: 'Tầm Nhìn Công Nghiệp Hóa 4.0 & Hội Nhập',
    nameShort: 'Hội Nhập & CNH 4.0',
    desc: 'Tư duy chủ động đón đầu cách mạng công nghiệp số và xây dựng nền kinh tế độc lập tự chủ.',
    color: '#ec4899'
  }
];

export const ARCHETYPES = [
  {
    id: 'master-economist',
    title: 'NHÀ KINH TẾ CHÍNH TRỊ BIỆN CHỨNG TOÀN DIỆN',
    titleEn: 'Master Political Economist',
    tagline: 'Làm chủ các quy luật thị trường, thấu suốt bản chất giá trị thặng dư và lợi ích xã hội.',
    icon: '🏛️✨',
    minScore: 80,
    accentColor: '#10b981',
    description: 'Bạn sở hữu tư duy kinh tế chính trị xuất sắc: không bị lừa gạt bởi hiện tượng sốt giá ngắn hạn hay chiêu trò độc quyền, luôn phân tích bản chất hao phí lao động xã hội và các quan hệ sản xuất bên dưới. Bạn có tầm nhìn chiến lược sâu sắc về kinh tế thị trường định hướng XHCN và làm chủ các quyết định đầu tư, sự nghiệp bền vững.',
    strengths: [
      'Khả năng nhìn thấu bản chất giá trị đằng sau giá cả',
      'Thấu suốt nguồn gốc giá trị thặng dư và quan hệ lao động',
      'Năng lực cân bằng hài hòa giữa lợi nhuận và trách nhiệm xã hội',
      'Tầm nhìn công nghiệp hóa 4.0 và hội nhập quốc tế độc lập tự chủ'
    ],
    lifeAdvice: 'Tiếp tục phát huy vai trò người dẫn dắt kinh tế có tầm nhìn và đạo đức; chia sẻ tri thức và xây dựng các mô hình kinh doanh mang lại giá trị thực chất cho cộng đồng.'
  },
  {
    id: 'market-strategist',
    title: 'NHÀ CHIẾN LƯỢC THỊ TRƯỜNG & GIÁ TRỊ',
    titleEn: 'Market & Value Strategist',
    tagline: 'Nắm vững quy luật giá trị, cung - cầu và bí quyết tối ưu hóa năng suất lao động.',
    icon: '📈💡',
    minScore: 65,
    accentColor: '#0284c7',
    description: 'Bạn là chuyên gia nhạy bén với cơ chế thị trường: hiểu rõ sự khác biệt giữa giá trị sử dụng và giá trị, biết cách tăng năng suất lao động bằng công nghệ thay vì vắt kiệt thể lực. Bạn có bản lĩnh vững vàng trước các cơn sốt đầu cơ và biết tạo ra giá trị bền vững.',
    strengths: [
      'Nhạy bén với quy luật giá trị và biến động cung - cầu',
      'Tư duy tối ưu hóa năng suất lao động bằng công nghệ',
      'Tránh xa các bẫy đầu cơ ngắn hạn'
    ],
    lifeAdvice: 'Mở rộng sự quan tâm hơn nữa tới khía cạnh trách nhiệm xã hội và môi trường; sự thành công bền vững của doanh nghiệp luôn cần sự đồng thuận của cộng đồng.'
  },
  {
    id: 'social-harmonizer',
    title: 'NHÀ QUẢN TRỊ HÀI HÒA LỢI ÍCH XÃ HỘI',
    titleEn: 'Social Economic Harmonizer',
    tagline: 'Lợi ích kinh tế là động lực, nhưng công bằng và nhân văn là linh hồn của phát triển.',
    icon: '🤝🌱',
    minScore: 50,
    accentColor: '#f59e0b',
    description: 'Bạn có trái tim ấm áp và tư duy công bằng: luôn chú trọng bảo vệ quyền lợi người lao động, kiên quyết phản đối bóc lột bất công và thúc đẩy mô hình hợp tác cùng có lợi (Win-Win). Bạn là đại diện tiêu biểu cho tinh thần nhân văn của KTTT định hướng XHCN.',
    strengths: [
      'Kỹ năng giải quyết mâu thuẫn và hài hòa các bên liên quan',
      'Tôn trọng giá trị con người và đạo đức kinh doanh',
      'Ý thức bảo vệ môi trường và trách nhiệm cộng đồng'
    ],
    lifeAdvice: 'Cần trau dồi thêm các công cụ định lượng kinh tế, phân tích cấu tạo tư bản và bài toán tài chính để lòng tốt luôn được chắp cánh bởi năng lực vận hành hiệu quả.'
  },
  {
    id: 'economic-explorer',
    title: 'NHÀ THỰC HÀNH KINH TẾ TIỀM NĂNG',
    titleEn: 'Pragmatic Economic Explorer',
    tagline: 'Mỗi tình huống đời sống là một bài học thực tiễn để tôi luyện tư duy kinh tế.',
    icon: '🧭🌱',
    minScore: 0,
    accentColor: '#8b5cf6',
    description: 'Bạn đang trên hành trình khám phá thế giới kinh tế chính trị đầy lôi cuốn. Đôi khi bạn còn bối rối trước các hiện tượng thị trường phức tạp, nhưng tinh thần học hỏi và trải nghiệm qua các tình huống sẽ giúp bạn nhanh chóng trưởng thành và làm chủ các quy luật.',
    strengths: [
      'Tinh thần cởi mở sẵn sàng tiếp thu tri thức mới',
      'Khát khao tự lập và làm chủ kinh tế cá nhân',
      'Khả năng thích ứng linh hoạt'
    ],
    lifeAdvice: 'Hãy kiên trì học hỏi và đối chiếu lý luận MLN122 với các chuyển động kinh tế hằng ngày trên báo chí và đời sống; bạn sẽ sớm trở thành một nhà kinh tế bản lĩnh!'
  }
];
