// Ngân hàng câu hỏi trắc nghiệm Đấu trường Quizizz MLN122
// Biên soạn chuẩn chỉnh theo Đề cương chi tiết & Giáo trình Slide

export const QUIZ_QUESTIONS = [
  // --- CHƯƠNG 3: GIÁ TRỊ THẶNG DƯ (TRỌNG TÂM) ---
  {
    id: 'q-c3-01',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.1. Nguồn gốc GTTD',
    question: 'Theo C. Mác, điều kiện tiên quyết để tiền tệ chuyển hóa thành tư bản (T - H - T\') là gì?',
    options: [
      'Nhà tư bản phải có một lượng vàng bạc dự trữ rất lớn trong ngân khố',
      'Nhà tư bản tìm thấy trên thị trường một loại hàng hóa đặc biệt: Hàng hóa sức lao động',
      'Nhà nước bãi bỏ mọi loại thuế thương mại và rào cản xuất nhập khẩu',
      'Thị trường phải có sự can thiệp và bao cấp toàn diện từ phía chính quyền'
    ],
    correctIndex: 1,
    explanation: 'Tiền chỉ biến thành tư bản khi tìm thấy trên thị trường hàng hóa sức lao động – loại hàng hóa có khả năng sáng tạo ra giá trị mới lớn hơn giá trị của chính nó (nguồn gốc của GTTD m).',
    quote: 'Slide Chương 3 • Mục 3.1.1: Hàng hóa sức lao động'
  },
  {
    id: 'q-c3-02',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.1. Hàng hóa sức lao động',
    question: 'Hai điều kiện cơ bản để sức lao động trở thành hàng hóa trong nền kinh tế thị trường là gì?',
    options: [
      'Người lao động có chứng chỉ nghề cao cấp và doanh nghiệp được miễn thuế sản xuất',
      'Người lao động tự do về thân thể VÀ bị tước đoạt toàn bộ tư liệu sản xuất',
      'Người lao động ký hợp đồng vô thời hạn và mức lương cao hơn mức trung bình xã hội',
      'Người lao động có quyền sở hữu cổ phần và được chia lợi nhuận cuối năm'
    ],
    correctIndex: 1,
    explanation: 'Hai điều kiện tất yếu: (1) Người lao động tự do về thân thể (có quyền bán sức lao động); (2) Người lao động không có tư liệu sản xuất (buộc phải bán sức lao động để sinh tồn).',
    quote: 'Slide Chương 3 • Mục 3.1.1: Điều kiện để sức lao động thành hàng hóa'
  },
  {
    id: 'q-c3-03',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.1. Bản chất GTTD',
    question: 'Tư bản bất biến (ký hiệu là c) là bộ phận tư bản có đặc điểm nào dưới đây?',
    options: [
      'Biến thành tư liệu sản xuất (máy móc, nguyên vật liệu), giá trị được bảo tồn và chuyển dịch nguyên vẹn vào sản phẩm mới',
      'Dùng để trả lương cho công nhân, giá trị tăng lên vượt trội trong quá trình sản xuất',
      'Luôn luôn thay đổi số lượng giá trị theo tỷ lệ lạm phát hàng năm của ngân hàng',
      'Được trích trực tiếp từ quỹ từ thiện xã hội để trợ cấp cho người yếu thế'
    ],
    correctIndex: 0,
    explanation: 'Tư bản bất biến (c) tồn tại dưới dạng tư liệu sản xuất (máy móc, nhà xưởng, nguyên liệu), giá trị của nó không biến đổi về lượng trong sản xuất, chỉ được chuyển dịch nguyên vẹn vào sản phẩm mới nhờ lao động cụ thể.',
    quote: 'Slide Chương 3 • Mục 3.1.2: Tư bản bất biến (c) và Tư bản khả biến (v)'
  },
  {
    id: 'q-c3-04',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.1. Phương pháp sản xuất GTTD',
    question: 'Phương pháp sản xuất giá trị thặng dư TUYỆT ĐỐI được thực hiện bằng cách nào?',
    options: [
      'Tăng năng suất lao động xã hội để hạ giá trị tư liệu sinh hoạt của công nhân',
      'Kéo dài ngày lao động vượt quá thời gian lao động tất yếu trong điều kiện thời gian tất yếu không đổi',
      'Áp dụng robot và trí tuệ nhân tạo để thay thế 100% công nhân trong nhà máy',
      'Tăng lương gấp đôi cho công nhân để kích thích tinh thần thi đua lao động sáng tạo'
    ],
    correctIndex: 1,
    explanation: 'Sản xuất GTTD tuyệt đối là phương pháp thu được bằng cách kéo dài ngày lao động hoặc tăng cường độ lao động vượt quá thời gian lao động tất yếu, trong điều kiện thời gian lao động tất yếu không đổi.',
    quote: 'Slide Chương 3 • Mục 3.1.3: Sản xuất GTTD tuyệt đối'
  },
  {
    id: 'q-c3-05',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.1. Phương pháp sản xuất GTTD',
    question: 'Giá trị thặng dư SIÊU NGẠCH có nguồn gốc từ đâu trong nền kinh tế thị trường?',
    options: [
      'Do doanh nghiệp cá biệt ứng dụng công nghệ tiến bộ, làm cho giá trị cá biệt thấp hơn giá trị thị trường',
      'Do hành vi buôn bán gian lận, cân thiếu hàng hóa cho người tiêu dùng trên chợ tự do',
      'Do nhà nước trợ cấp tiền mặt trực tiếp cho các doanh nghiệp xuất khẩu lớn',
      'Do nhà tư bản phát hành thêm nhiều cổ phiếu và trái phiếu doanh nghiệp ra công chúng'
    ],
    correctIndex: 0,
    explanation: 'GTTD siêu ngạch thu được do doanh nghiệp cá biệt có năng suất cao hơn mặt bằng xã hội (nhờ cải tiến kỹ thuật, quản lý), làm giá trị cá biệt của sản phẩm thấp hơn giá trị xã hội nhưng vẫn bán theo giá xã hội.',
    quote: 'Slide Chương 3 • Mục 3.1.3: Giá trị thặng dư siêu ngạch'
  },
  {
    id: 'q-c3-06',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.2. Tích lũy tư bản',
    question: 'Bản chất thực sự của "Tích lũy tư bản" theo luận điểm của C. Mác là gì?',
    options: [
      'Là việc cất giữ tiền vàng trong két sắt của gia đình để phòng ngừa rủi ro tương lai',
      'Là sự chuyển hóa một phần giá trị thặng dư trở lại thành tư bản phụ thêm để tái sản xuất mở rộng',
      'Là việc nhà nước thu thuế doanh nghiệp đem đầu tư xây dựng các công trình công cộng',
      'Là việc người lao động gửi tiền tiết kiệm vào các ngân hàng thương mại để lấy lãi suất'
    ],
    correctIndex: 1,
    explanation: 'Bản chất của tích lũy tư bản là biến một phần giá trị thặng dư thành tư bản phụ thêm (tư bản hóa giá trị thặng dư) nhằm tái sản xuất mở rộng quy mô kinh doanh.',
    quote: 'Slide Chương 3 • Mục 3.2: Tích lũy tư bản và các nhân tố ảnh hưởng'
  },
  {
    id: 'q-c3-07',
    chapter: 3,
    chapterTitle: 'Chương 3: Giá trị thặng dư',
    category: '3.3. Các hình thức biểu hiện GTTD',
    question: 'Công thức Chi phí sản xuất tư bản chủ nghĩa (k) và Lợi nhuận (p) phản ánh mối quan hệ nào?',
    options: [
      'k = c + v và p là hình thức biểu hiện bề ngoài của giá trị thặng dư m',
      'k = c + m và p chỉ sinh ra từ máy móc thiết bị tự động hóa hiện đại',
      'k = v + m và p luôn luôn bằng 0 trong điều kiện thị trường tự do cạnh tranh hoàn hảo',
      'k = c + v + m và p chính là toàn bộ tiền lương trả cho giám đốc điều hành'
    ],
    correctIndex: 0,
    explanation: 'Chi phí sản xuất k = c + v (bù đắp hao phí tư bản ứng trước). Lợi nhuận p chính là GTTD m khi được quan niệm là con đẻ của toàn bộ tư bản ứng trước (k).',
    quote: 'Slide Chương 3 • Mục 3.3: Lợi nhuận và tỷ suất lợi nhuận'
  },

  // --- CHƯƠNG 5: KTTT ĐỊNH HƯỚNG XÃ HỘI CHỦ NGHĨA Ở VIỆT NAM ---
  {
    id: 'q-c5-01',
    chapter: 5,
    chapterTitle: 'Chương 5: KTTT định hướng XHCN & Lợi ích KT',
    category: '5.1. Khái niệm KTTT ĐHXHCN',
    question: 'Khái niệm Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam được Đảng ta xác định là gì?',
    options: [
      'Nền kinh tế đóng cửa, bao cấp toàn diện không chịu sự chi phối của quy luật cung cầu',
      'Nền kinh tế vận hành đầy đủ, đồng bộ theo quy luật KTTT, đồng thời bảo đảm định hướng XHCN phù hợp từng chặng đường',
      'Nền kinh tế tư bản chủ nghĩa tự do thả nổi, nhà nước hoàn toàn đứng ngoài không điều tiết',
      'Mô hình kinh tế phi thị trường chỉ trao đổi hiện vật trực tiếp giữa các hợp tác xã nông nghiệp'
    ],
    correctIndex: 1,
    explanation: 'KTTT định hướng XHCN ở VN là nền kinh tế vận hành đầy đủ, đồng bộ theo các quy luật của KTTT, đồng thời bảo đảm định hướng XHCN phù hợp với từng chặng đường phát triển của đất nước.',
    quote: 'Slide Chương 5 • Mục 5.1.1: Khái niệm KTTT định hướng XHCN'
  },
  {
    id: 'q-c5-02',
    chapter: 5,
    chapterTitle: 'Chương 5: KTTT định hướng XHCN & Lợi ích KT',
    category: '5.1. Tính tất yếu khách quan',
    question: 'Tại sao phát triển KTTT định hướng XHCN ở Việt Nam là một "tính tất yếu khách quan"?',
    options: [
      'Do áp lực từ các tổ chức tài chính quốc tế ép buộc Việt Nam phải ký kết hiệp định',
      'Phù hợp quy luật phát triển khách quan, yêu cầu phát triển LLSX và tận dụng ưu việt của KTTT xây dựng CNXH',
      'Vì Việt Nam đã hoàn thành xuất sắc quá trình CNH và thừa thãi của cải vật chất trong xã hội',
      'Là quyết định mang tính tạm thời, sau 5 năm sẽ quay trở lại thời kỳ kế hoạch hóa quan liêu bao cấp'
    ],
    correctIndex: 1,
    explanation: 'Tính tất yếu bắt nguồn từ 3 lý do: (1) Phù hợp quy luật phát triển khách quan; (2) Do tính ưu việt của KTTT trong thúc đẩy LLSX; (3) Phù hợp nguyện vọng của nhân dân mong muốn dân giàu nước mạnh.',
    quote: 'Slide Chương 5 • Mục 5.1.2: Tính tất yếu khách quan'
  },
  {
    id: 'q-c5-03',
    chapter: 5,
    chapterTitle: 'Chương 5: KTTT định hướng XHCN & Lợi ích KT',
    category: '5.1. Đặc trưng KTTT ĐHXHCN',
    question: 'Trong nền kinh tế thị trường định hướng XHCN ở Việt Nam, thành phần kinh tế nào giữ vai trò "CHỦ ĐẠO"?',
    options: [
      'Kinh tế tư nhân trong nước',
      'Kinh tế có vốn đầu tư nước ngoài (FDI)',
      'Kinh tế nhà nước',
      'Kinh tế hộ cá thể tiểu nông'
    ],
    correctIndex: 2,
    explanation: 'Kinh tế nhà nước giữ vai trò chủ đạo, là công cụ định hướng và điều tiết vĩ mô; Kinh tế tư nhân là một động lực quan trọng của nền kinh tế.',
    quote: 'Slide Chương 5 • Mục 5.1.3: Đặc trưng về quan hệ sở hữu và thành phần kinh tế'
  },
  {
    id: 'q-c5-04',
    chapter: 5,
    chapterTitle: 'Chương 5: KTTT định hướng XHCN & Lợi ích KT',
    category: '5.1. Đặc trưng phân phối',
    question: 'Hình thức phân phối thu nhập nào giữ vai trò "CHỦ YẾU" trong KTTT định hướng XHCN ở Việt Nam?',
    options: [
      'Phân phối bình quân cào bằng, ai cũng nhận phần bằng nhau bất kể làm nhiều hay ít',
      'Phân phối theo kết quả lao động, hiệu quả kinh tế, đồng thời theo mức đóng góp vốn và các nguồn lực khác',
      'Chỉ phân phối dựa trên nguồn tiền thừa kế và may mắn trúng thưởng tài chính',
      'Phân phối hoàn toàn theo sự chỉ định và ban phát hành chính của lãnh đạo cơ quan'
    ],
    correctIndex: 1,
    explanation: 'Đặc trưng phân phối: Phân phối theo kết quả lao động và hiệu quả kinh tế là chủ yếu, kết hợp phân phối theo mức đóng góp vốn cùng các nguồn lực khác và thông qua hệ thống an sinh xã hội.',
    quote: 'Slide Chương 5 • Mục 5.1.3: Đặc trưng về quan hệ phân phối'
  },
  {
    id: 'q-c5-05',
    chapter: 5,
    chapterTitle: 'Chương 5: KTTT định hướng XHCN & Lợi ích KT',
    category: '5.2. Hoàn thiện thể chế',
    question: 'Nội dung trọng tâm nào KHÔNG PHẢI là định hướng hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam?',
    options: [
      'Hoàn thiện thể chế về sở hữu, bảo vệ quyền tài sản và tự do kinh doanh hợp pháp',
      'Phát triển đồng bộ các yếu tố thị trường và các loại thị trường (tài chính, lao động, đất đai, KHCN)',
      'Xóa bỏ hoàn toàn thành phần kinh tế tư nhân và cấm các doanh nghiệp tư nhân hoạt động',
      'Nâng cao năng lực lãnh đạo của Đảng và hiệu lực quản lý của Nhà nước pháp quyền XHCN'
    ],
    correctIndex: 2,
    explanation: 'Đảng ta khẳng định kinh tế tư nhân là một động lực quan trọng của nền kinh tế. Xóa bỏ kinh tế tư nhân là quan điểm sai lầm tả khuynh thời bao cấp.',
    quote: 'Slide Chương 5 • Mục 5.2: Hoàn thiện thể chế KTTT định hướng XHCN'
  },
  {
    id: 'q-c5-06',
    chapter: 5,
    chapterTitle: 'Chương 5: KTTT định hướng XHCN & Lợi ích KT',
    category: '5.3. Quan hệ lợi ích kinh tế',
    question: 'Trong hệ thống các quan hệ lợi ích kinh tế, loại lợi ích nào đóng vai trò là "nền tảng, động lực trực tiếp"?',
    options: [
      'Lợi ích chính trị thuần túy của các hiệp hội quốc tế bên ngoài',
      'Lợi ích kinh tế cá nhân của chính người lao động và chủ thể sản xuất',
      'Lợi ích tài chính của các công ty đa quốc gia độc quyền nước ngoài',
      'Lợi ích hình thức bề ngoài trong các phong trào khẩu hiệu thi đua ngắn hạn'
    ],
    correctIndex: 1,
    explanation: 'Lợi ích kinh tế cá nhân là động lực trực tiếp và mạnh mẽ nhất thúc đẩy con người lao động sáng tạo. Tôn trọng lợi ích cá nhân chính đáng là nền tảng kết hợp hài hòa lợi ích tập thể và xã hội.',
    quote: 'Slide Chương 5 • Mục 5.3: Quan hệ lợi ích kinh tế ở Việt Nam'
  },

  // --- CHƯƠNG 6: CÔNG NGHIỆP HÓA, HIỆN ĐẠI HÓA & HỘI NHẬP KINH TẾ QUỐC TẾ ---
  {
    id: 'q-c6-01',
    chapter: 6,
    chapterTitle: 'Chương 6: CNH, HĐH & Hội nhập KTQT',
    category: '6.1. Cách mạng công nghiệp',
    question: 'Đặc trưng cốt lõi của cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) là gì?',
    options: [
      'Sử dụng động cơ hơi nước và cơ khí hóa quy mô lớn trong xưởng dệt thủ công',
      'Sử dụng năng lượng điện và dây chuyền sản xuất lắp ráp tự động hàng loạt',
      'Sự hội tụ và đột phá của Trí tuệ nhân tạo (AI), Vạn vật kết nối (IoT), Dữ liệu lớn (Big Data) và Công nghệ sinh học',
      'Chỉ tập trung vào khai thác dầu mỏ và các mỏ than khoáng sản truyền thống'
    ],
    correctIndex: 2,
    explanation: 'CMCN 4.0 đặc trưng bởi sự hợp nhất của các công nghệ làm mờ ranh giới giữa vật lý, kỹ thuật số và sinh học, với tâm điểm là AI, IoT, Big Data, Robot thông minh và Điện toán đám mây.',
    quote: 'Slide Chương 6 • Mục 6.1.1: Khái quát về cách mạng công nghiệp'
  },
  {
    id: 'q-c6-02',
    chapter: 6,
    chapterTitle: 'Chương 6: CNH, HĐH & Hội nhập KTQT',
    category: '6.1. CNH, HĐH ở Việt Nam',
    question: 'Mô hình Công nghiệp hóa, hiện đại hóa ở Việt Nam trong bối cảnh hiện nay có đặc điểm nổi bật nào?',
    options: [
      'Phát triển tuần tự từng bước giống hệt nước Anh thế kỷ XVIII, cấm bỏ qua bất kỳ giai đoạn nào',
      'CNH gắn liền với HĐH, gắn với phát triển kinh tế tri thức và bảo vệ môi trường, thích ứng với CMCN 4.0',
      'Chỉ tập trung phát triển công nghiệp nặng độc quyền, đóng cửa hoàn toàn biên giới kinh tế',
      'Bán toàn bộ tài nguyên thiên nhiên thô sơ để nhập khẩu máy móc đã qua sử dụng từ nước ngoài'
    ],
    correctIndex: 1,
    explanation: 'Đặc điểm CNH, HĐH ở VN: Rút ngắn thời gian, kết hợp CNH với HĐH, lấy kinh tế tri thức làm nền tảng, phát triển kinh tế xanh, kinh tế tuần hoàn và chủ động nắm bắt thời cơ của CMCN 4.0.',
    quote: 'Slide Chương 6 • Mục 6.1.2: Tính tất yếu khách quan và nội dung CNH, HĐH'
  },
  {
    id: 'q-c6-03',
    chapter: 6,
    chapterTitle: 'Chương 6: CNH, HĐH & Hội nhập KTQT',
    category: '6.2. Hội nhập kinh tế quốc tế',
    question: 'Các hình thức hội nhập kinh tế quốc tế phát triển theo thứ tự từ THẤP ĐẾN CAO như thế nào?',
    options: [
      'Thị trường chung → Liên minh thuế quan → Khu vực mậu dịch tự do (FTA) → Hiệp định thương mại đơn phương',
      'Thỏa thuận thương mại ưu đãi (PTA) → Khu vực mậu dịch tự do (FTA) → Liên minh thuế quan → Thị trường chung → Liên minh kinh tế - tiền tệ',
      'Liên minh tiền tệ toàn cầu → Thị trường tự do cá biệt → Xóa bỏ hoàn toàn đồng tiền quốc gia',
      'Đóng cửa biên giới → Mậu dịch song phương kín → Cấm trao đổi ngoại tệ quốc tế'
    ],
    correctIndex: 1,
    explanation: 'Các nấc thang hội nhập: Bắt đầu từ PTA (ưu đãi thuế quan) → FTA (mậu dịch tự do) → Customs Union (biểu thuế đối ngoại chung) → Common Market (tự do dòng vốn và lao động) → Economic & Monetary Union.',
    quote: 'Slide Chương 6 • Mục 6.2.1: Các hình thức hội nhập kinh tế quốc tế'
  },
  {
    id: 'q-c6-04',
    chapter: 6,
    chapterTitle: 'Chương 6: CNH, HĐH & Hội nhập KTQT',
    category: '6.2. Tác động của hội nhập',
    question: 'Đâu là một THÁCH THỨC TIÊU CỰC mà hội nhập kinh tế quốc tế có thể mang lại cho Việt Nam nếu không ứng phó tốt?',
    options: [
      'Mở rộng thị trường xuất khẩu sang các cường quốc thế giới như EU, Hoa Kỳ, Nhật Bản',
      'Tiếp thu công nghệ quản lý tiên tiến và kỹ thuật sản xuất hiện đại của thế giới',
      'Gia tăng sức ép cạnh tranh gay gắt, nguy cơ phụ thuộc kinh tế bên ngoài và nguy cơ tụt hậu vào bẫy gia công giá rẻ',
      'Tạo thêm hàng triệu cơ hội việc làm mới cho thanh niên và sinh viên đại học'
    ],
    correctIndex: 2,
    explanation: 'Mặt trái của hội nhập: Gia tăng áp lực cạnh tranh cho doanh nghiệp nội địa, nguy cơ tổn thương trước khủng hoảng kinh tế toàn cầu, cạn kiệt tài nguyên và nguy cơ trở thành bãi thải công nghệ lạc hậu.',
    quote: 'Slide Chương 6 • Mục 6.2.2: Tác động của hội nhập kinh tế quốc tế'
  },
  {
    id: 'q-c6-05',
    chapter: 6,
    chapterTitle: 'Chương 6: CNH, HĐH & Hội nhập KTQT',
    category: '6.2. Phương hướng nâng cao hiệu quả',
    question: 'Phương hướng cốt lõi nhất để nâng cao hiệu quả hội nhập kinh tế quốc tế của Việt Nam là gì?',
    options: [
      'Chủ động, tích cực hội nhập kinh tế quốc tế trên cơ sở giữ vững độc lập, tự chủ và bảo đảm lợi ích quốc gia - dân tộc',
      'Đóng cửa thị trường, đơn phương áp thuế cao trừng phạt mọi quốc gia đối tác kinh tế',
      'Vay nợ nước ngoài tối đa và chấp nhận mọi điều kiện chính trị của các tổ chức tài chính',
      'Cấm thanh niên học ngoại ngữ và cấm các doanh nghiệp công nghệ hợp tác với nước ngoài'
    ],
    correctIndex: 0,
    explanation: 'Quan điểm chỉ đạo nhất quán của Đảng: Hội nhập kinh tế quốc tế là sự nghiệp của toàn dân; giữ vững độc lập, tự chủ đi đôi với đa phương hóa, đa dạng hóa quan hệ kinh tế quốc tế.',
    quote: 'Slide Chương 6 • Mục 6.2.3: Phương hướng nâng cao hiệu quả hội nhập'
  },

  // --- CÂU HỎI TỔNG HỢP CHƯƠNG 1, 2 & 4 ---
  {
    id: 'q-c1-01',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng & Chức năng KTCT',
    category: '1.1. Lịch sử phát triển',
    question: 'Thuật ngữ "Kinh tế chính trị" (Political Economy) xuất hiện lần đầu tiên vào năm nào, trong tác phẩm của ai?',
    options: [
      'Năm 1776, trong tác phẩm "Sự giàu có của các quốc gia" của Adam Smith',
      'Năm 1867, trong tác phẩm "Bộ Tư bản" của Karl Marx',
      'Năm 1615, trong tác phẩm "Chuyên luận về kinh tế chính trị" của Antoine de Montchrestien',
      'Năm 1917, trong tác phẩm "Nhà nước và cách mạng" của V.I. Lênin'
    ],
    correctIndex: 2,
    explanation: 'Thuật ngữ "Kinh tế chính trị" xuất hiện lần đầu năm 1615 bởi nhà kinh tế học người Pháp A. Montchrestien thuộc trường phái Chủ nghĩa trọng thương.',
    quote: 'Slide Chương 1 • Mục 1.1: Khái quát sự ra đời của KTCT'
  },
  {
    id: 'q-c1-02',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.1. Thuật ngữ KTCT',
    question: 'Thuật ngữ "kinh tế chính trị" viết ngắn gọn từ cụm từ gốc Hán – Việt nào và mang hàm nghĩa gì?',
    options: [
      '"Kinh bang tế thế" – Phương pháp để trị nước và giúp đời',
      '"Kinh doanh tế vi" – Phương pháp buôn bán nhỏ lẻ thu lợi nhuận',
      '"Chính sách kinh tài" – Quản lý ngân khố của triều đình phong kiến',
      '"Bang giao thế cuộc" – Chiến lược ngoại giao thương mại quốc tế'
    ],
    correctIndex: 0,
    explanation: 'Thuật ngữ "Kinh tế chính trị" bắt nguồn từ chữ Hán "kinh bang tế thế", mang hàm nghĩa là khoa học và phương pháp trị nước giúp đời, chăm lo sự ấm no, giàu mạnh cho quốc gia và muôn dân.',
    quote: 'Slide Chương 1 • Mục 1.1: Thuật ngữ kinh tế chính trị'
  },
  {
    id: 'q-c1-03',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.1. KTCT Cổ điển Anh',
    question: 'Nhà kinh tế học nào đã đưa kinh tế chính trị trở thành một môn khoa học có tính hệ thống với các phạm trù và khái niệm chuyên ngành vào thế kỷ XVIII?',
    options: [
      'Adam Smith với tác phẩm "Của cải của các quốc gia" (The Wealth of Nations - 1776)',
      'David Ricardo với tác phẩm "Những nguyên lý của kinh tế chính trị"',
      'François Quesnay với tác phẩm "Biểu kinh tế"',
      'Thomas Malthus với lý luận về bẫy dân số'
    ],
    correctIndex: 0,
    explanation: 'Đến thế kỷ XVIII, với tác phẩm kinh điển "The Wealth of Nations" (1776), Adam Smith đã chính thức đưa kinh tế chính trị trở thành môn khoa học có hệ thống với 2 mục tiêu: tạo sinh kế cho dân và ngân sách cho nhà nước.',
    quote: 'Slide Chương 1 • Mục 1.1: Adam Smith (1776)'
  },
  {
    id: 'q-c1-04',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.1. Góc độ kinh tế học',
    question: 'Dưới góc độ kinh tế học chuẩn slide bài giảng MLN122, khái niệm "kinh tế" được hiểu là gì?',
    options: [
      'Toàn bộ các hoạt động sản xuất, phân phối, trao đổi, tiêu thụ hàng hóa và dịch vụ của một cộng đồng quốc gia trong một khoảng thời gian',
      'Hoạt động giao dịch tiền tệ, cổ phiếu và trái phiếu trên sàn chứng khoán',
      'Hoạt động chi tiêu công và thu thuế xuất nhập khẩu của ngân sách nhà nước',
      'Kỹ năng tiết kiệm tiền và quản lý tài chính cá nhân trong đời sống'
    ],
    correctIndex: 0,
    explanation: 'Kinh tế (dưới góc độ kinh tế học) là toàn bộ các hoạt động sản xuất, phân phối, trao đổi, tiêu thụ hàng hóa và dịch vụ của một cộng đồng quốc gia trong một khoảng thời gian nhất định.',
    quote: 'Slide Chương 1 • Mục 1.1: Góc độ kinh tế học'
  },
  {
    id: 'q-c1-05',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.2. Bốn khâu tái sản xuất',
    question: 'Đối tượng nghiên cứu của KTCT Mác – Lênin bao trùm các quan hệ sản xuất trong 4 khâu nào của quá trình tái sản xuất xã hội?',
    options: [
      'Sản xuất – Phân phối – Trao đổi – Tiêu dùng',
      'Thiết kế – Vận hành – Tiếp thị – Bán hàng',
      'Đầu tư – Xây dựng – Khai thác – Thu hồi vốn',
      'Thu gom nguyên liệu – Đóng gói – Lưu kho – Xuất khẩu'
    ],
    correctIndex: 0,
    explanation: 'Hệ thống 4 khâu của tái sản xuất xã hội gồm: Sản xuất (vai trò quyết định) – Phân phối (định hướng lợi ích) – Trao đổi (cầu nối lưu thông) – Tiêu dùng (mục đích và động lực).',
    quote: 'Slide Chương 1 • Mục 1.2: Đối tượng nghiên cứu & 4 khâu tái sản xuất'
  },
  {
    id: 'q-c1-06',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.3. Phương pháp nghiên cứu',
    question: 'Phương pháp nghiên cứu quan trọng và đặc thù nhất của Kinh tế chính trị Mác – Lênin là gì?',
    options: [
      'Phương pháp trừu tượng hóa khoa học',
      'Phương pháp thử nghiệm thực địa trong phòng thí nghiệm',
      'Phương pháp khảo sát ngẫu nhiên trên mạng xã hội',
      'Phương pháp trực giác cảm tính của nhà nghiên cứu'
    ],
    correctIndex: 0,
    explanation: 'Phương pháp trừu tượng hóa khoa học là phương pháp chủ yếu và đặc thù: Gạt bỏ những yếu tố ngẫu nhiên, tạm thời, bề ngoài để đi sâu vào bản chất, tách ra những mối liên hệ tất nhiên, bền vững và khái quát thành quy luật kinh tế.',
    quote: 'Slide Chương 1 • Mục 1.3: Phương pháp nghiên cứu của KTCT'
  },
  {
    id: 'q-c1-07',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.2. Đối tượng nghĩa rộng',
    question: 'Theo quan điểm của Ph. Ăng-ghen về kinh tế chính trị theo nghĩa rộng, vì sao "không có một bộ môn kinh tế chính trị duy nhất cho tất cả mọi quốc gia, mọi thời đại kinh tế"?',
    options: [
      'Vì điều kiện sản xuất, trao đổi và trình độ phát triển của LLSX ở mỗi thời đại, mỗi quốc gia là khác nhau, quy định các quan hệ sản xuất đặc thù tương ứng',
      'Vì mỗi quốc gia sử dụng một loại đồng tiền và ngôn ngữ khác nhau nên không thể chung một lý thuyết',
      'Vì các nhà kinh tế học thời cổ đại từ chối hợp tác nghiên cứu với các nhà kinh tế học thời cận đại',
      'Vì kinh tế chính trị chỉ áp dụng được duy nhất cho các nước công nghiệp phát triển phương Tây'
    ],
    correctIndex: 0,
    explanation: 'Ph. Ăng-ghen khẳng định: Do điều kiện sản xuất vật chất và trình độ phát triển của LLSX biến đổi không ngừng qua các phương thức sản xuất trong lịch sử, nên không thể có một môn KTCT duy nhất cho mọi thời đại và mọi quốc gia.',
    quote: 'Slide Chương 1 • Mục 2.1: Đối tượng nghiên cứu theo nghĩa rộng'
  },
  {
    id: 'q-c1-08',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.2. Mối liên hệ tổng thể',
    question: 'Đối tượng nghiên cứu của Kinh tế chính trị Mác – Lênin đặt hệ thống các quan hệ sản xuất trong sự tác động biện chứng nhiều tầng nấc nào?',
    options: [
      'Kiến trúc thượng tầng ➔ Cơ sở hạ tầng ➔ Trình độ phát triển của lực lượng sản xuất',
      'Lợi nhuận ngắn hạn ➔ Giá cả thị trường ➔ Tâm lý người tiêu dùng',
      'Chính sách tiền tệ ➔ Lãi suất ngân hàng ➔ Thị trường chứng khoán',
      'Quảng cáo tiếp thị ➔ Khuyến mãi giảm giá ➔ Số lượng đơn hàng'
    ],
    correctIndex: 0,
    explanation: 'KTCT Mác - Lênin nghiên cứu quan hệ sản xuất không cô lập mà đặt trong chỉnh thể biện chứng: Kiến trúc thượng tầng tác động trở lại Cơ sở hạ tầng, và Cơ sở hạ tầng phản ánh Trình độ phát triển của Lực lượng sản xuất.',
    quote: 'Slide Chương 1 • Mục 2.1: Mối liên hệ biện chứng trong đối tượng nghiên cứu'
  },
  {
    id: 'q-c1-09',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.2. Mục đích nghiên cứu',
    question: 'Theo slide bài giảng MLN122, chuỗi logic 5 bước thể hiện mục đích nghiên cứu của Kinh tế chính trị Mác – Lênin là gì?',
    options: [
      'Tìm quy luật kinh tế ➔ Hoạch định chính sách ➔ Giải quyết hài hòa quan hệ lợi ích ➔ Tạo động lực sáng tạo ➔ Thúc đẩy phát triển toàn diện xã hội',
      'Tăng thuế nhập khẩu ➔ Tích lũy vàng bạc kim loại quý ➔ Độc quyền ngoại thương ➔ Mở rộng thị trường thuộc địa',
      'Dự báo giá cổ phiếu ➔ Tối đa hóa lợi nhuận đầu cơ ➔ Giảm chi phí nhân công ➔ Thôn tính các doanh nghiệp nhỏ',
      'Xóa bỏ hoàn toàn thị trường ➔ Triệt tiêu các quan hệ trao đổi tiền tệ ➔ Phân phối bình quân cào bằng'
    ],
    correctIndex: 0,
    explanation: 'Slide Mục 2.2 chỉ rõ chuỗi giá trị mục đích nghiên cứu: Tìm ra các quy luật kinh tế chi phối PTSX => Hoạch định chính sách kinh tế => Giải quyết hài hòa các quan hệ lợi ích => Tạo động lực cho con người sáng tạo => Thúc đẩy sự phát triển toàn diện của xã hội.',
    quote: 'Slide Chương 1 • Mục 2.2: Mục đích nghiên cứu của KTCT Mác – Lênin'
  },
  {
    id: 'q-c1-10',
    chapter: 1,
    chapterTitle: 'Chương 1: Đối tượng, phương pháp & chức năng',
    category: '1.3. Các phương pháp nghiên cứu chính',
    question: 'Theo slide bài giảng MLN122, hệ thống các phương pháp nghiên cứu chính của Kinh tế chính trị Mác – Lênin bao gồm những phương pháp nào?',
    options: [
      'Phương pháp trừu tượng hóa khoa học, phương pháp logic & lịch sử, phân tích thống kê và mô hình hóa...',
      'Phương pháp thử nghiệm hóa học vi sinh, giải trình tự gen và đo phóng xạ',
      'Phương pháp chiêm tinh học, trực giác tâm linh và bói toán chu kỳ kinh tế',
      'Phương pháp khảo sát ngẫu nhiên cảm xúc người tiêu dùng trên mạng xã hội'
    ],
    correctIndex: 0,
    explanation: 'Slide Mục 2.3 chuẩn hóa các phương pháp nghiên cứu chính: Phương pháp trừu tượng hóa khoa học (chủ yếu nhất), phương pháp logic & lịch sử, cùng phân tích thống kê, mô hình hóa...',
    quote: 'Slide Chương 1 • Mục 2.3: Các phương pháp nghiên cứu chính'
  },
  {
    id: 'q-c2-01',
    chapter: 2,
    chapterTitle: 'Chương 2: Hàng hóa & Thị trường',
    category: '2.1. Hai thuộc tính của hàng hóa',
    question: 'Giá trị của hàng hóa theo lý luận của C. Mác được định nghĩa chính xác là gì?',
    options: [
      'Là công dụng thỏa mãn một nhu cầu vật chất hoặc tinh thần nhất định của người tiêu dùng',
      'Là lao động xã hội của người sản xuất kết tinh trong hàng hóa',
      'Là mức giá niêm yết in trên bao bì của sản phẩm tại các siêu thị hiện đại',
      'Là toàn bộ chi phí quảng cáo và tiếp thị mà doanh nghiệp đã bỏ ra trên mạng xã hội'
    ],
    correctIndex: 1,
    explanation: 'Giá trị của hàng hóa là lao động xã hội của người sản xuất kết tinh trong hàng hóa. Giá trị là nội dung, cơ sở của giá trị trao đổi.',
    quote: 'Slide Chương 2 • Mục 2.1: Thuộc tính của hàng hóa'
  },
  {
    id: 'q-c2-02',
    chapter: 2,
    chapterTitle: 'Chương 2: Hàng hóa & Thị trường',
    category: '2.2. Tính hai mặt của lao động',
    question: 'Lao động cụ thể của người sản xuất hàng hóa có vai trò gì trong quá trình sản xuất?',
    options: [
      'Sáng tạo ra giá trị mới (v + m) của sản phẩm',
      'Tạo ra giá trị sử dụng của hàng hóa, bảo tồn và chuyển dịch giá trị cũ (c) vào sản phẩm mới',
      'Làm cho tỷ lệ lạm phát tiền tệ giảm về mức âm trong nền kinh tế',
      'Tự động biến đổi tiền mặt thành tư bản tài chính ngân hàng'
    ],
    correctIndex: 1,
    explanation: 'Lao động cụ thể tạo ra giá trị sử dụng, đồng thời bảo tồn và chuyển dịch giá trị tư liệu sản xuất (c) vào sản phẩm mới; còn Lao động trừu tượng tạo ra giá trị mới (v + m).',
    quote: 'Slide Chương 2 • Mục 2.1: Tính hai mặt của lao động sản xuất hàng hóa'
  },
  {
    id: 'q-c2-03',
    chapter: 2,
    chapterTitle: 'Chương 2: Hàng hóa & Thị trường',
    category: '2.1. Cơ sở sản xuất hàng hóa',
    question: 'Theo C. Mác, trước khi có thể tham gia vào các hoạt động chính trị, văn hoá, nghệ thuật, khoa học, tôn giáo..., con người trước hết phải làm gì?',
    options: [
      'Phải có thức ăn, thức uống, quần áo mặc, chỗ ở... tức là phải tiến hành sản xuất của cải vật chất',
      'Phải hoàn thành việc xây dựng thể chế chính trị và ban hành hiến pháp',
      'Phải đạt được chứng chỉ học vấn chuyên môn cao cấp trong xã hội',
      'Phải tích lũy một lượng lớn kim loại quý vàng bạc trong ngân khố'
    ],
    correctIndex: 0,
    explanation: 'Tiền đề duy vật lịch sử: Sản xuất vật chất là nền tảng sinh tồn của nhân loại. Con người trước hết phải có các tư liệu sinh hoạt thiết yếu để duy trì sự sống trước khi sáng tạo các giá trị tinh thần khác.',
    quote: 'Slide Chương 2 • Mục 1.1: Sản xuất hàng hóa'
  },
  {
    id: 'q-c2-04',
    chapter: 2,
    chapterTitle: 'Chương 2: Hàng hóa & Thị trường',
    category: '2.1. Khái niệm sản xuất hàng hóa',
    question: 'Khái niệm "Sản xuất hàng hóa" theo lý luận của C. Mác trong slide bài giảng MLN122 được định nghĩa chính xác là gì?',
    options: [
      'Là kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán',
      'Là mô hình kinh tế tự nhiên tự cấp tự túc, sản phẩm làm ra chỉ phục vụ tiêu dùng nội bộ gia đình',
      'Là hoạt động phân phối hàng hóa cứu trợ miễn phí của các tổ chức thiện nguyện',
      'Là hoạt động mua bán trái phiếu chính phủ trên thị trường tài chính quốc tế'
    ],
    correctIndex: 0,
    explanation: 'Slide Chương 2 Mục 1.1 định nghĩa chuẩn: Sản xuất hàng hóa là kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán.',
    quote: 'Slide Chương 2 • Mục 1.1: Khái niệm sản xuất hàng hóa'
  },
  {
    id: 'q-c4-01',
    chapter: 4,
    chapterTitle: 'Chương 4: Cạnh tranh & Độc quyền',
    category: '4.1. Độc quyền trong CNTB',
    question: 'Nguyên nhân cơ bản dẫn tới sự chuyển biến từ chủ nghĩa tư bản tự do cạnh tranh sang chủ nghĩa tư bản độc quyền là gì?',
    options: [
      'Do sự phát triển vượt bậc của LLSX dưới tác động của tiến bộ KH-CN thúc đẩy quá trình tích tụ và tập trung sản xuất quy mô lớn',
      'Do tất cả các ngân hàng thương mại trên thế giới tự nguyện sáp nhập thành một ngân hàng duy nhất',
      'Do các nhà nước tư bản ban hành luật cấm người dân tham gia buôn bán kinh doanh tự do',
      'Do sự cạn kiệt hoàn toàn của mọi nguồn năng lượng tự nhiên trên hành tinh'
    ],
    correctIndex: 0,
    explanation: 'V.I. Lênin đã chỉ ra: Tự do cạnh tranh đẻ ra tập trung sản xuất và sự tập trung sản xuất này, khi phát triển đến một mức độ nhất định, tất yếu dẫn tới độc quyền.',
    quote: 'Slide Chương 4 • Mục 4.1: Nguyên nhân hình thành độc quyền'
  }
];

