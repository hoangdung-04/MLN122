/**
 * SỔ TAY KINH TẾ CHÍNH TRỊ MÁC – LÊNIN (MLN122)
 * Cập nhật toàn diện theo Slide bài giảng & Giáo trình chuẩn Bộ Giáo dục & Đào tạo
 * Bao gồm đầy đủ 6 chương với chi tiết các tiểu mục 3.1, 3.2, 3.3, 5.1, 5.2, 5.3, 6.1, 6.2
 */

export const HANDBOOK_ENTRIES = [
  // =========================================================================
  // CHƯƠNG 1
  // =========================================================================
{
    chapter: 1,
    chapterCode: 'CHƯƠNG 1',
    chapterTitle: 'Đối Tượng, Phương Pháp Nghiên Cứu & Chức Năng Của Kinh Tế Chính Trị Mác – Lênin',
    badge: 'NỀN TẢNG KHOA HỌC',
    accentColor: '#2563eb',
    accentBg: 'rgba(37, 99, 235, 0.08)',
    accentBorder: 'rgba(37, 99, 235, 0.35)',
    topics: [
      {
        code: '1.1',
        title: 'Khái quát sự hình thành và phát triển của Kinh tế chính trị Mác – Lênin',
        summary: '• Cội nguồn thuật ngữ: "Kinh tế chính trị" viết ngắn gọn từ cụm từ gốc Hán – Việt "Kinh bang tế thế" (nghĩa là Phương pháp để trị nước và giúp đời).\n' +
          '• Định nghĩa Kinh tế (góc độ kinh tế học): Toàn bộ các hoạt động sản xuất, phân phối, trao đổi, tiêu thụ hàng hóa và dịch vụ của một cộng đồng quốc gia trong một khoảng thời gian nhất định.\n' +
          '• Cột mốc Antoine de Montchrestien (1575 – 1621): Năm 1615, trong tác phẩm "Chuyên luận về kinh tế chính trị" (Traité de l\'économie politique), thuật ngữ "Political Economy" lần đầu tiên xuất hiện. Ông cho rằng sức mạnh nhà nước gắn liền với sự giàu có của quốc gia và thương nhân là gương mặt chính của nền kinh tế.\n' +
          '• Cột mốc Adam Smith (1723 – 1790): Năm 1776, với kiệt tác "Của cải của các quốc gia" (The Wealth of Nations), A. Smith đã đưa kinh tế chính trị trở thành một môn khoa học có tính hệ thống với các phạm trù và khái niệm chuyên ngành, hướng tới 2 mục tiêu lớn: (1) Tạo nguồn thu dồi dào và sinh kế phong phú cho người dân; (2) Cung cấp nguồn ngân sách dồi dào cho nhà nước.\n' +
          '• Hai giai đoạn phát triển lịch sử lớn:\n' +
          '  - Giai đoạn 1 (Từ cổ đại đến cuối TK XVIII): Trải qua tư tưởng kinh tế thời cổ, trung đại ➔ Chủ nghĩa trọng thương (TK XV – XVII, coi trọng vàng bạc và ngoại thương) ➔ Chủ nghĩa trọng nông (TK XVII – XVIII, đề cao nông nghiệp) ➔ Kinh tế chính trị tư sản cổ điển Anh (giữa TK XVII – cuối TK XVIII, A. Smith, D. Ricardo, đặt nền móng lý luận giá trị lao động).\n' +
          '  - Giai đoạn 2 (Từ sau TK XVIII đến nay): C. Mác và Ph. Ăng-ghen kế thừa tinh hoa cổ điển Anh, sáng lập Kinh tế chính trị Mác – Lênin khoa học và cách mạng, phát hiện ra quy luật giá trị thặng dư; V.I. Lênin tiếp tục phát triển trong thời đại độc quyền. Dòng thứ hai rẽ nhánh sang kinh tế học tầm thường / kinh tế học hiện đại (chỉ khái quát tâm lý, hành vi bề ngoài mà không phân tích sâu quan hệ xã hội của sản xuất).',
        lifeLesson: 'Hiểu cội nguồn "kinh bang tế thế" giúp người học có cái nhìn vĩ mô và trách nhiệm: Kinh tế học không chỉ là mánh lới buôn bán cá nhân, mà là khoa học phụng sự sự thịnh vượng của nhân dân và quốc gia.'
      },
      {
        code: '1.2',
        title: 'Đối tượng và mục đích nghiên cứu của Kinh tế chính trị Mác – Lênin',
        summary: '• Định nghĩa kinh điển của Ph. Ăng-ghen (nghĩa rộng): "Kinh tế chính trị là khoa học về những quy luật chi phối sự sản xuất vật chất và sự trao đổi những tư liệu sinh hoạt vật chất trong xã hội loài người".\n' +
          '• Đối tượng nghiên cứu theo 2 nghĩa chuẩn giáo trình:\n' +
          '  - Theo nghĩa hẹp: Nghiên cứu quan hệ sản xuất và trao đổi trong một phương thức sản xuất nhất định.\n' +
          '  - Theo nghĩa rộng: Nghiên cứu các hệ thống quan hệ xã hội của sản xuất và trao đổi qua các thời đại lịch sử.\n' +
          '  ⇨ Luận điểm cốt lõi: "Không có một bộ môn kinh tế chính trị duy nhất cho tất cả mọi quốc gia, mọi thời đại kinh tế".\n' +
          '• Mối liên hệ tổng thể biện chứng: Kiến trúc thượng tầng ➔ Cơ sở hạ tầng ➔ Trình độ phát triển của Lực lượng sản xuất.\n' +
          '• Nghiên cứu trọn vẹn 4 khâu của quá trình tái sản xuất xã hội:\n' +
          '  1. Sản xuất: Giữ vai trò quyết định, sáng tạo ra toàn bộ của cải vật chất.\n' +
          '  2. Phân phối: Xác định tỷ lệ của cải cho từng chủ thể và định hướng quan hệ lợi ích.\n' +
          '  3. Trao đổi: Là cầu nối lưu thông, đưa sản phẩm từ người sản xuất đến người tiêu dùng.\n' +
          '  4. Tiêu dùng: Mục đích cuối cùng và là động lực kích thích chu kỳ sản xuất mới.\n' +
          '• Mục đích nghiên cứu tối cao: Tìm ra những quy luật kinh tế chi phối sự vận động và phát triển của phương thức sản xuất ➔ Làm cơ sở hoạch định các chính sách kinh tế khoa học ➔ Giải quyết hài hòa các quan hệ về lợi ích ➔ Tạo động lực to lớn cho con người sáng tạo ➔ Thúc đẩy sự phát triển toàn diện của toàn xã hội.',
        lifeLesson: 'Mọi thất bại trong kinh doanh hay quản lý thường bắt nguồn từ sự đứt gãy giữa 4 khâu hoặc xung đột lợi ích bất công; giải quyết đúng quan hệ con người và chia sẻ lợi ích hài hòa là chìa khóa phát triển bền vững.'
      },
      {
        code: '1.3',
        title: 'Phương pháp nghiên cứu đặc thù của Kinh tế chính trị Mác – Lênin',
        summary: '• Phương pháp quan trọng và đặc thù nhất: Phương pháp trừu tượng hóa khoa học.\n' +
          '  - Bản chất: Gạt bỏ những yếu tố ngẫu nhiên, tạm thời, hiện tượng bề ngoài của đời sống kinh tế để đi sâu vào bản chất bên trong, tách ra những mối liên hệ tất nhiên, bền vững và khái quát thành các phạm trù, quy luật kinh tế khách quan.\n' +
          '  - Điểm dừng trừu tượng: Không được trừu tượng hóa một cách chủ quan, siêu hình làm biến dạng bản chất hiện thực khách quan.\n' +
          '• Các phương pháp nghiên cứu phối hợp chặt chẽ:\n' +
          '  - Phương pháp logic kết hợp với lịch sử: Nắm bắt bản chất quy luật theo tiến trình phát sinh, phát triển và chuyển hóa thực tế.\n' +
          '  - Phương pháp phân tích và tổng hợp: Mổ xẻ chi tiết từng bộ phận rồi hợp nhất trong chỉnh thể thống nhất.\n' +
          '  - Phương pháp thống kê kinh tế & mô hình hóa: Định lượng hóa các quan hệ tỷ lệ để kiểm chứng lý thuyết.\n' +
          '  - Khảo sát thực tiễn: Đối chiếu lý luận với thực tiễn sản xuất xã hội sinh động.',
        lifeLesson: 'Giữa thời đại bùng nổ dữ liệu số (Big Data), phương pháp trừu tượng hóa khoa học giúp bạn lọc sạch "nhiễu" thông tin, không bị cảm xúc thị trường đánh lừa để nhìn thấu quy luật vận động bản chất.'
      },
      {
        code: '1.4',
        title: 'Bốn chức năng cốt lõi của Kinh tế chính trị Mác – Lênin',
        summary: '• 1. Chức năng nhận thức: Cung cấp hệ thống tri thức lý luận khoa học, bản chất quy luật chi phối nền sản xuất và thị trường; hiểu rõ cội nguồn của cải, giá trị thặng dư và quy luật phát triển xã hội.\n' +
          '• 2. Chức năng thực tiễn: Giúp người lao động, doanh nhân và nhà quản lý vận dụng sáng tạo các quy luật kinh tế vào đời sống; hoạch định chính sách kinh tế vĩ mô, nâng cao hiệu quả sản xuất kinh doanh và quản trị rủi ro.\n' +
          '• 3. Chức năng tư tưởng: Xây dựng thế giới quan khoa học duy vật biện chứng, bồi đắp niềm tin vào con đường phát triển tiến bộ xã hội, kiên định lý tưởng độc lập dân tộc gắn liền với CNXH tại Việt Nam.\n' +
          '• 4. Chức năng phương pháp luận: Là nền tảng thế giới quan và phương pháp luận khoa học cho toàn bộ hệ thống các khoa học kinh tế ngành (Kinh tế phát triển, Tài chính - Ngân hàng, Quản trị kinh doanh, Marketing, Kinh tế quốc tế...).',
        lifeLesson: 'Nắm vững 4 chức năng giúp bạn chuyển hóa tri thức sách vở thành bản lĩnh sống: Có nhận thức đúng thì hành động thực tiễn mới hiệu quả, có tư tưởng vững vàng thì không dao động trước biến động thị trường.'
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG 2
  // =========================================================================
  {
    chapter: 2,
    chapterCode: 'CHƯƠNG 2',
    chapterTitle: 'Hàng Hóa, Thị Trường & Vai Trò Của Các Chủ Thể Tham Gia Thị Trường',
    badge: 'QUY LUẬT THỊ TRƯỜNG',
    accentColor: '#059669',
    accentBg: 'rgba(5, 150, 105, 0.08)',
    accentBorder: 'rgba(5, 150, 105, 0.35)',
    topics: [
      {
        code: '2.1',
        title: 'Lý luận của C. Mác về sản xuất hàng hóa & Hai thuộc tính của hàng hóa',
        summary: '• Tiền đề thực tiễn & Cơ sở duy vật lịch sử: Đời sống xã hội loài người có nhiều mặt hoạt động khác nhau (chính trị, văn hoá, nghệ thuật, khoa học, kỹ thuật, tôn giáo…). Nhưng trước khi tiến hành các hoạt động đó, con người phải có thức ăn, quần áo mặc, nhà ở… Do đó, sản xuất của cải vật chất là cơ sở sinh tồn và phát triển của xã hội.\n' +
          '• Khái niệm Sản xuất hàng hóa chuẩn slide: Là kiểu tổ chức hoạt động kinh tế mà ở đó, những người sản xuất ra sản phẩm nhằm mục đích trao đổi, mua bán (khác với sản xuất tự cung tự cấp).\n' +
          '• 2 điều kiện lịch sử tất yếu để sản xuất hàng hóa ra đời và tồn tại:\n' +
          '  1. Phân công lao động xã hội: Sự chuyên môn hóa sản xuất, mỗi người làm một nghề, tạo nên sự phụ thuộc lẫn nhau về sản phẩm.\n' +
          '  2. Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất: Do chế độ sở hữu khác nhau về tư liệu sản xuất quy định, người này muốn tiêu dùng sản phẩm của người khác phải thông qua trao đổi, mua bán.\n' +
          '• Khái niệm Hàng hóa: Là sản phẩm của lao động, có thể thỏa mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán.\n' +
          '• Thuộc tính 1 - Giá trị sử dụng: Công dụng của vật phẩm có thể thỏa mãn nhu cầu nào đó của con người (tiêu dùng cá nhân hoặc sản xuất). Là thuộc tính tự nhiên, phạm trù vĩnh viễn.\n' +
          '• Thuộc tính 2 - Giá trị: Lao động xã hội của người sản xuất kết tinh trong hàng hóa. Là thuộc tính xã hội, phạm trù lịch sử biểu hiện mối quan hệ giữa những người sản xuất hàng hóa. Giá cả là hình thức biểu hiện bằng tiền của giá trị.',
        lifeLesson: 'Một sản phẩm muốn thành công trên thị trường phải có giá trị sử dụng xuất sắc (giải quyết nỗi đau khách hàng) và được thị trường thừa nhận giá trị xã hội thông qua mức giá phù hợp.'
      },
      {
        code: '2.2',
        title: 'Tính hai mặt của lao động sản xuất hàng hóa (Phát kiến vĩ đại của C. Mác)',
        summary: 'Lao động sản xuất hàng hóa không phải là hai thứ lao động khác nhau, mà là một quá trình lao động có hai mặt biện chứng:\n' +
          '• Lao động cụ thể: Là lao động có ích dưới một hình thức chuyên môn cụ thể (công cụ riêng, phương pháp riêng, kết quả riêng). Tạo ra Giá trị sử dụng của hàng hóa, bảo tồn và chuyển dịch giá trị tư liệu sản xuất cũ (c) vào sản phẩm mới.\n' +
          '• Lao động trừu tượng: Là sự hao phí sức lao động nói chung của con người (cơ bắp, thần kinh, trí óc) không kể hình thức biểu hiện cụ thể. Tạo ra Giá trị mới của hàng hóa (v + m).\n' +
          '• Ý nghĩa: Giải thích được mâu thuẫn giữa lao động tư nhân và lao động xã hội - mầm mống mọi cuộc khủng hoảng trong sản xuất hàng hóa.',
        lifeLesson: 'Kỹ năng cụ thể giúp bạn làm ra sản phẩm, nhưng khả năng lao động trừu tượng (tư duy logic, quản lý cảm xúc, sức bền trí tuệ) mới tạo ra bước nhảy vọt về giá trị bản thân.'
      },
      {
        code: '2.3',
        title: 'Lượng giá trị hàng hóa và các nhân tố ảnh hưởng',
        summary: '• Thước đo lượng giá trị: Đo bằng thời gian lao động xã hội cần thiết (thời gian đòi hỏi để sản xuất ra một hàng hóa trong điều kiện sản xuất bình thường, trình độ khéo léo trung bình và cường độ lao động trung bình).\n' +
          '• 3 nhân tố ảnh hưởng lượng giá trị:\n' +
          '  1. Năng suất lao động: Số lượng sản phẩm tạo ra trong 1 đơn vị thời gian. Tỷ lệ nghịch với lượng giá trị trong 1 đơn vị hàng hóa.\n' +
          '  2. Cường độ lao động: Mức độ khẩn trương, nặng nhọc của lao động. Khi cường độ lao động tăng, tổng lượng giá trị tạo ra tăng theo, nhưng lượng giá trị trong 1 đơn vị hàng hóa không đổi.\n' +
          '  3. Mức độ phức tạp của lao động: Lao động phức tạp là bội số của lao động giản đơn. Trong cùng 1 thời gian, lao động phức tạp tạo ra lượng giá trị lớn hơn nhiều so với lao động giản đơn.',
        lifeLesson: 'Để thoát bẫy thu nhập thấp, con đường duy nhất là chuyển từ lao động giản đơn sang lao động phức tạp bằng cách học tập chuyên môn sâu và áp dụng công nghệ tự động hóa.'
      },
      {
        code: '2.4',
        title: 'Bản chất tiền tệ và các quy luật kinh tế thị trường cơ bản',
        summary: '• Bản chất tiền tệ: Là hàng hóa đặc biệt được tách ra làm vật ngang giá chung cho toàn bộ thế giới hàng hóa. Có 5 chức năng: Thước đo giá trị, Phương tiện lưu thông, Phương tiện cất trữ, Phương tiện thanh toán, Tiền tệ thế giới.\n' +
          '• 4 quy luật thị trường cốt lõi:\n' +
          '  1. Quy luật giá trị: Sản xuất và lưu thông hàng hóa phải dựa trên hao phí lao động xã hội cần thiết; giá cả vận động xoay quanh trục giá trị.\n' +
          '  2. Quy luật cung – cầu: Điều tiết quan hệ giữa cung ứng và nhu cầu hàng hóa, tác động trực tiếp đến giá cả thị trường.\n' +
          '  3. Quy luật lưu thông tiền tệ: Số lượng tiền cần thiết cho lưu thông: M = (P.Q - G1 - G2 + G3) / V.\n' +
          '  4. Quy luật cạnh tranh: Động lực thúc đẩy cải tiến kỹ thuật, nâng cao năng suất, đồng thời đào thải những đơn vị kinh doanh kém hiệu quả.',
        lifeLesson: 'Tôn trọng quy luật thị trường, không đầu tư theo cảm tính đám đông (FOMO), luôn bám sát giá trị thực của tài sản và dòng tiền.'
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG 3
  // =========================================================================
  {
    chapter: 3,
    chapterCode: 'CHƯƠNG 3',
    chapterTitle: 'Giá Trị Thặng Dư Trong Nền Kinh Tế Thị Trường (Trọng Tâm Lý Luận)',
    badge: 'HẠT NHÂN HỌC THUYẾT MÁC',
    accentColor: '#d97706',
    accentBg: 'rgba(217, 119, 6, 0.08)',
    accentBorder: 'rgba(217, 119, 6, 0.35)',
    topics: [
      {
        code: '3.1.1',
        title: 'Nguồn gốc của giá trị thặng dư & Hàng hóa sức lao động',
        summary: '• Công thức chung của tư bản: T – H – T\' (với T\' = T + ΔT; ΔT là giá trị thặng dư m). Tiền chỉ thành tư bản khi vận động nhằm mục đích sinh sôi giá trị.\n' +
          '• Mâu thuẫn công thức chung: Giá trị thặng dư không thể sinh ra từ lưu thông thuần túy (mua rẻ bán đắt chỉ là phân phối lại), nhưng cũng không thể sinh ra ngoài lưu thông. Tư bản phải bắt đầu từ lưu thông để tìm thấy một loại hàng hóa đặc biệt: HÀNG HÓA SỨC LAO ĐỘNG.\n' +
          '• 2 điều kiện để sức lao động thành hàng hóa: (1) Người lao động tự do về thân thể; (2) Người lao động bị tước đoạt toàn bộ TLSX, buộc phải bán sức lao động để kiếm sống.\n' +
          '• 2 thuộc tính hàng hóa sức lao động: Giá trị (chi phí nuôi sống người LĐ và gia đình) và Giá trị sử dụng ĐẶC BIỆT: Khi tiêu dùng, nó sáng tạo ra lượng giá trị MỚI LỚN HƠN giá trị bản thân nó (phần dôi ra chính là giá trị thặng dư m).',
        lifeLesson: 'Lao động làm thuê thực chất là bán quyền sử dụng sức lao động trong một khoảng thời gian. Muốn nâng cao thu nhập, bạn phải tạo ra giá trị mới thặng dư vượt bậc cho tổ chức.'
      },
      {
        code: '3.1.2',
        title: 'Bản chất giá trị thặng dư & Phân chia Tư bản bất biến (c) – Tư bản khả biến (v)',
        summary: '• Quá trình sản xuất GTTD là sự thống nhất giữa quá trình tạo ra giá trị sử dụng và quá trình tăng thêm giá trị. Ngày lao động chia thành 2 phần:\n' +
          '  - Thời gian lao động tất yếu (t): Người LĐ tái tạo giá trị sức lao động (tiền lương v).\n' +
          '  - Thời gian lao động thặng dư (t\'): Người LĐ tạo ra giá trị thặng dư (m) bị nhà tư bản chiếm đoạt.\n' +
          '• Tư bản bất biến (c): Bộ phận tư bản biến thành tư liệu sản xuất (nhà xưởng, máy móc, nguyên vật liệu), giá trị được bảo tồn và chuyển nguyên vẹn vào sản phẩm mới, không thay đổi về lượng.\n' +
          '• Tư bản khả biến (v): Bộ phận tư bản biến thành sức lao động, trong sản xuất không chỉ tái tạo giá trị của chính nó mà còn tạo ra giá trị thặng dư m (v + m).\n' +
          '• Tỷ suất GTTD: m\' = (m / v) * 100% = (t\' / t) * 100% (phản ánh trình độ bóc lột).\n' +
          '• Khối lượng GTTD: M = m\' * V (phản ánh quy mô giá trị thặng dư thu được).',
        lifeLesson: 'Máy móc, máy chủ hay AI (tư bản bất biến c) tự chúng không sinh ra giá trị mới nếu thiếu sức lao động sống của con người (v) vận hành và sáng tạo.'
      },
      {
        code: '3.1.3',
        title: 'Các phương pháp sản xuất giá trị thặng dư trong nền kinh tế thị trường',
        summary: 'Có 3 phương pháp sản xuất giá trị thặng dư:\n' +
          '1. Sản xuất GTTD tuyệt đối: Thu được bằng cách kéo dài ngày lao động vượt quá thời gian tất yếu trong điều kiện năng suất lao động không đổi. Phương pháp này vấp phải giới hạn thể chất con người và sự đấu tranh của phong trào công nhân.\n' +
          '2. Sản xuất GTTD tương đối: Thu được bằng cách rút ngắn thời gian lao động tất yếu nhờ tăng năng suất lao động xã hội trong các ngành sản xuất tư liệu sinh hoạt, qua đó kéo dài thời gian thặng dư dù độ dài ngày làm việc giữ nguyên.\n' +
          '3. Giá trị thặng dư siêu ngạch: Do doanh nghiệp cá biệt áp dụng công nghệ mới làm cho giá trị cá biệt thấp hơn giá trị thị trường. Là hình thái biến tướng của GTTD tương đối, là động lực mạnh mẽ nhất thúc đẩy cải tiến công nghệ trong nền kinh tế thị trường.',
        lifeLesson: 'Doanh nghiệp khôn ngoan thời đại 4.0 tập trung đầu tư công nghệ số và tự động hóa để thu GTTD tương đối và siêu ngạch, thay vì vắt kiệt sức lao động qua tăng ca kiệt quệ.'
      },
      {
        code: '3.2',
        title: 'Tích lũy tư bản: Bản chất, các nhân tố ảnh hưởng & Quy luật chung',
        summary: '• Bản chất tích lũy tư bản: Là sự chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm (tái sản xuất mở rộng TBCN). Nguồn gốc duy nhất của tích lũy tư bản chính là giá trị thặng dư.\n' +
          '• 4 nhân tố quyết định quy mô tích lũy: (1) Trình độ bóc lột sức lao động (m\'); (2) Năng suất lao động xã hội; (3) Chênh lệch ngày càng tăng giữa tư bản sử dụng và tư bản tiêu dùng; (4) Quy mô tư bản ứng trước ban đầu.\n' +
          '• Các quy luật và hệ quả của tích lũy tư bản:\n' +
          '  - Làm tăng cấu tạo hữu cơ của tư bản (c/v): Tỷ lệ máy móc thiết bị (c) tăng nhanh hơn tỷ lệ nhân công (v).\n' +
          '  - Thúc đẩy tích tụ và tập trung tư bản thành các tập đoàn khổng lồ.\n' +
          '  - Sinh ra nạn nhân tạo "đội quân thất nghiệp công nghiệp" (dân số thừa tương đối).\n' +
          '  - Quy luật chung: Một cực tích lũy của cải, cực đối lập tích lũy sự bần cùng và bất bình đẳng.',
        lifeLesson: 'Để tích lũy tài sản cá nhân hay doanh nghiệp, nguyên tắc sống còn là kiên trì trích lập quỹ tái đầu tư, không ngừng gia tăng tỷ suất sinh lời và làm chủ công nghệ.'
      },
      {
        code: '3.3',
        title: 'Các hình thức biểu hiện của giá trị thặng dư trong nền KTTT (K, p, p\', p̄, z, R)',
        summary: 'Giá trị thặng dư che giấu nguồn gốc thực sự của nó qua các hình thái chuyển hóa trên bề mặt thị trường:\n' +
          '• Chi phí sản xuất TBCN (K): K = c + v (bù đắp TLSX và tiền công đã hao phí). Khi đó Giá trị hàng hóa G = K + m.\n' +
          '• Lợi nhuận (p): Khi m được quan niệm là con đẻ của toàn bộ tư bản ứng trước K, m biến tướng thành p. Giá trị hàng hóa G = K + p.\n' +
          '• Tỷ suất lợi nhuận (p\'): p\' = [p / (c + v)] * 100%. Luôn nhỏ hơn m\'. Bị chi phối bởi: m\', cấu tạo hữu cơ c/v, tốc độ chu chuyển vốn và việc tiết kiệm tư bản bất biến.\n' +
          '• Lợi nhuận bình quân (p̄) & Giá cả sản xuất: Do cạnh tranh giữa các ngành dẫn đến san bằng các tỷ suất lợi nhuận thành tỷ suất lợi nhuận bình quân. Giá trị hàng hóa chuyển hóa thành Giá cả sản xuất = K + p̄.\n' +
          '• Lợi nhuận thương nghiệp: Phần GTTD công nghiệp nhượng cho nhà tư bản thương nghiệp vì đã đảm nhận lưu thông hàng hóa.\n' +
          '• Lợi tức (z): Phần lợi nhuận bình quân mà nhà tư bản đi vay phải trả cho nhà tư bản cho vay để được quyền sử dụng vốn tiền tệ.\n' +
          '• Địa tô TBCN (R): Phần GTTD siêu ngạch do công nhân nông nghiệp tạo ra mà nhà tư bản thuê đất phải nộp cho chủ đất.',
        lifeLesson: 'Nhìn vào báo cáo tài chính của doanh nghiệp, hãy hiểu rõ: Lợi nhuận, cổ tức hay lãi vay thực chất đều bắt nguồn từ giá trị thặng dư do con người lao động sáng tạo nên.'
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG 4
  // =========================================================================
  {
    chapter: 4,
    chapterCode: 'CHƯƠNG 4',
    chapterTitle: 'Cạnh Tranh & Độc Quyền Trong Nền Kinh Tế Thị Trường',
    badge: 'QUY LUẬT TẬP TRUNG',
    accentColor: '#7c3aed',
    accentBg: 'rgba(124, 58, 237, 0.08)',
    accentBorder: 'rgba(124, 58, 237, 0.35)',
    topics: [
      {
        code: '4.1',
        title: 'Từ cạnh tranh tự do đến độc quyền & Các tổ chức độc quyền',
        summary: '• Nguyên nhân sinh ra độc quyền: Cạnh tranh tự do thúc đẩy tích tụ và tập trung sản xuất đến một trình độ nhất định sẽ tất yếu dẫn tới độc quyền (sự liên minh giữa các doanh nghiệp lớn nhằm chi phối giá cả và thị phần).\n' +
          '• 4 hình thức tổ chức độc quyền lịch sử: Cartel (thỏa thuận giá/thị phần), Syndicate (chung đầu mối lưu thông), Trust (thống nhất cả sản xuất và thương mại), Consortium (liên minh đa ngành quy mô khổng lồ).\n' +
          '• Lợi nhuận độc quyền cao: Thu được nhờ áp đặt Giá cả độc quyền (Giá cả độc quyền mua thấp đối với nguyên liệu, Giá cả độc quyền bán cao đối với thành phẩm).\n' +
          '• Độc quyền không thủ tiêu cạnh tranh, mà làm cạnh tranh trở nên gay gắt, khốc liệt hơn giữa các tổ chức độc quyền với nhau và giữa độc quyền với doanh nghiệp ngoài độc quyền.',
        lifeLesson: 'Cảnh giác trước các chiến lược "đốt tiền" hạ giá sâu của các nền tảng thương mại để triệt tiêu đối thủ cạnh tranh trước khi họ độc chiếm thị phần và tăng giá áp đặt.'
      },
      {
        code: '4.2',
        title: 'Độc quyền nhà nước trong CNTB & Biểu hiện mới thời đại số (Big Tech)',
        summary: '• Bản chất độc quyền nhà nước: Là sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh chính trị của bộ máy nhà nước tư sản nhằm duy trì sự thống trị và phục vụ lợi ích của tư bản tài chính.\n' +
          '• 3 biểu hiện mới thời đại kinh tế số:\n' +
          '  1. Độc quyền dữ liệu (Big Data): Các tập đoàn công nghệ (Google, Meta, Apple, Amazon) thâu tóm toàn bộ hành vi số của người dùng, biến dữ liệu thành tài sản độc quyền.\n' +
          '  2. Độc quyền thuật toán và nền tảng khép kín: Giữ chân người dùng trong hệ sinh thái (Walled Garden), kiểm soát luồng phân phối thông tin.\n' +
          '  3. Độc quyền chuỗi cung ứng công nghệ cao: Thâu tóm sáng chế bán dẫn, hạ tầng AI và dịch vụ điện toán đám mây.',
        lifeLesson: 'Bảo vệ dữ liệu cá nhân số và thực thi nghiêm luật chống độc quyền là yếu tố sống còn để bảo đảm tự do và cạnh tranh lành mạnh trong thời đại kinh tế số.'
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG 5
  // =========================================================================
  {
    chapter: 5,
    chapterCode: 'CHƯƠNG 5',
    chapterTitle: 'Kinh Tế Thị Trường Định Hướng XHCN & Quan Hệ Lợi Ích Kinh Tế Ở Việt Nam',
    badge: 'MÔ HÌNH KINH TẾ VIỆT NAM',
    accentColor: '#db2777',
    accentBg: 'rgba(219, 39, 119, 0.08)',
    accentBorder: 'rgba(219, 39, 119, 0.35)',
    topics: [
      {
        code: '5.1.1',
        title: 'Khái niệm kinh tế thị trường định hướng XHCN ở Việt Nam',
        summary: 'Kinh tế thị trường định hướng XHCN là nền kinh tế vận hành theo các quy luật của thị trường, đồng thời góp phần hướng tới từng bước xác lập một xã hội mà ở đó "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh"; có sự điều tiết của Nhà nước do Đảng Cộng sản Việt Nam lãnh đạo.\n' +
          '• Điểm cốt lõi: KTTT không phải là sản phẩm riêng có của CNTB mà là thành tựu chung của văn minh nhân loại. Việt Nam sử dụng KTTT làm phương tiện và công cụ để xây dựng cơ sở vật chất cho CNXH.',
        lifeLesson: 'Hiểu đúng rằng phát triển kinh tế thị trường không đồng nghĩa với mất định hướng XHCN; thị trường là động lực giải phóng sức sản xuất, còn định hướng XHCN là la bàn giữ vững giá trị nhân văn.'
      },
      {
        code: '5.1.2',
        title: 'Tính tất yếu khách quan của việc phát triển KTTT định hướng XHCN',
        summary: 'Phát triển KTTT định hướng XHCN ở Việt Nam là một tất yếu khách quan xuất phát từ 3 lý do căn bản:\n' +
          '1. Phù hợp với quy luật phát triển khách quan: Việt Nam quá độ lên CNXH từ một nền kinh tế nông nghiệp lạc hậu, bỏ qua chế độ TBCN. Tồn tại nhiều hình thức sở hữu và nhiều trình độ LLSX khác nhau nên tất yếu phải tồn tại sản xuất và trao đổi hàng hóa.\n' +
          '2. Tính ưu việt không thể thay thế của KTTT: Là cơ chế phân bổ nguồn lực hiệu quả nhất, thúc đẩy cạnh tranh, kích thích sáng tạo khoa học kỹ thuật và tăng năng suất lao động.\n' +
          '3. Phù hợp với nguyện vọng thiết tha của nhân dân: Mong muốn thoát khỏi nghèo nàn, lạc hậu, giải phóng sức sản xuất để xây dựng cuộc sống ấm no, hạnh phúc.',
        lifeLesson: 'Không thể duy ý chí "đốt cháy giai đoạn" xóa bỏ thị trường; phải tôn trọng các quy luật kinh tế khách quan để xây dựng nền tảng của cải vật chất vững chắc cho đất nước.'
      },
      {
        code: '5.1.3',
        title: 'Đặc trưng của kinh tế thị trường định hướng XHCN ở Việt Nam',
        summary: 'Nền KTTT định hướng XHCN ở Việt Nam có 5 đặc trưng cơ bản cấu thành bản chất:\n' +
          '• Về mục tiêu: Phát triển LLSX, xây dựng cơ sở vật chất – kỹ thuật của CNXH, nâng cao đời sống nhân dân, thực hiện "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh".\n' +
          '• Về quan hệ sở hữu và thành phần kinh tế: Nhiều hình thức sở hữu, nhiều thành phần kinh tế bình đẳng trước pháp luật. Trong đó: KINH TẾ NHÀ NƯỚC GIỮ VAI TRÒ CHỦ ĐẠO; KINH TẾ TƯ NHÂN LÀ MỘT ĐỘNG LỰC QUAN TRỌNG NHẤT; Kinh tế tập thể và Kinh tế có vốn đầu tư nước ngoài (FDI) được khuyến khích phát triển.\n' +
          '• Về quan hệ quản lý: Nhà nước pháp quyền XHCN quản lý nền kinh tế dưới sự lãnh đạo của Đảng Cộng sản, phát huy tối đa quyền làm chủ của nhân dân.\n' +
          '• Về quan hệ phân phối: Phân phối theo kết quả lao động và hiệu quả kinh tế là chủ yếu; kết hợp phân phối theo mức đóng góp vốn và phân phối qua hệ thống an sinh xã hội, phúc lợi công cộng.\n' +
          '• Về gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội: Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách phát triển; không "chờ kinh tế phát triển rồi mới sửa chữa bất công".',
        lifeLesson: 'Doanh nghiệp Việt Nam phát triển bền vững phải kết hợp hài hòa giữa tìm kiếm lợi nhuận chính đáng và thực hiện trách nhiệm xã hội, bảo vệ môi trường và người lao động.'
      },
      {
        code: '5.2.1',
        title: 'Sự cần thiết phải hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam',
        summary: 'Thể chế KTTT định hướng XHCN là hệ thống quy tắc, luật pháp, bộ máy quản lý và cơ chế vận hành điều chỉnh hành vi của các chủ thể kinh tế. Hoàn thiện thể chế là tất yếu vì:\n' +
          '1. Hệ thống thể chế KTTT định hướng XHCN ở nước ta còn chưa đồng bộ, còn mâu thuẫn và chồng chéo.\n' +
          '2. Thể chế còn chưa đầy đủ, nhiều khoảng trống pháp lý trước các mô hình kinh tế mới (kinh tế số, kinh tế chia sẻ, tài sản số, kinh tế xanh).\n' +
          '3. Hiệu lực, hiệu quả thực thi thể chế còn hạn chế; môi trường kinh doanh cần minh bạch, thông thoáng hơn.\n' +
          '4. Yêu cầu cấp bách nâng cao năng lực cạnh tranh quốc gia trước hội nhập kinh tế quốc tế sâu rộng.',
        lifeLesson: 'Một môi trường thể chế minh bạch, pháp luật thượng tôn chính là "hạ tầng mềm" quan trọng nhất để thu hút đầu tư, giảm chi phí giao dịch và ươm mầm khởi nghiệp đổi mới sáng tạo.'
      },
      {
        code: '5.2.2',
        title: 'Nội dung hoàn thiện thể chế KTTT định hướng XHCN trên các khía cạnh chủ yếu',
        summary: '• Hoàn thiện thể chế về sở hữu: Bảo vệ quyền tài sản hợp pháp, hoàn thiện luật về đất đai, tài nguyên số, phát triển mạnh mẽ kinh tế tư nhân và cơ cấu lại DNNN.\n' +
          '• Hoàn thiện thể chế phát triển đồng bộ các yếu tố thị trường và các loại thị trường: Thị trường hàng hóa - dịch vụ, thị trường tài chính - tiền tệ, thị trường bất động sản, thị trường lao động và thị trường khoa học - công nghệ.\n' +
          '• Hoàn thiện thể chế gắn kết tăng trưởng kinh tế với tiến bộ công bằng xã hội và bảo vệ môi trường (ESG).\n' +
          '• Nâng cao năng lực lãnh đạo của Đảng và hiệu lực quản lý của Nhà nước kiến tạo phát triển.',
        lifeLesson: 'Người khởi nghiệp và quản trị kinh doanh cần am hiểu thể chế chính sách để đón đầu ưu đãi của Nhà nước và phòng ngừa rủi ro pháp lý trong hoạt động thương mại.'
      },
      {
        code: '5.3',
        title: 'Các quan hệ lợi ích kinh tế ở Việt Nam & Vai trò điều tiết của Nhà nước',
        summary: '• Lợi ích kinh tế là lợi ích vật chất thu được khi thực hiện các hoạt động kinh tế; là động lực trực tiếp của mọi chủ thể.\n' +
          '• 3 quan hệ lợi ích kinh tế cơ bản:\n' +
          '  1. Quan hệ giữa Người lao động và Người sử dụng lao động (quan hệ việc làm và tiền lương).\n' +
          '  2. Quan hệ giữa các chủ thể kinh tế với nhau (cạnh tranh và hợp tác chia sẻ thị trường).\n' +
          '  3. Quan hệ giữa Lợi ích cá nhân – Lợi ích nhóm – Lợi ích toàn xã hội.\n' +
          '• Vai trò điều tiết của Nhà nước: Tạo môi trường pháp lý thuận lợi; kiểm soát và ngăn chặn lợi ích nhóm tiêu cực; điều hòa lợi ích bằng thuế thu nhập, phân phối lại và mạng lưới an sinh xã hội; giải quyết kịp thời xung đột lợi ích.',
        lifeLesson: 'Bí quyết hợp tác kinh doanh bền vững là triết lý Win-Win (cùng thắng); chèn ép hay tước đoạt lợi ích của đối tác sớm muộn cũng dẫn tới đổ vỡ và thất bại.'
      }
    ]
  },

  // =========================================================================
  // CHƯƠNG 6
  // =========================================================================
  {
    chapter: 6,
    chapterCode: 'CHƯƠNG 6',
    chapterTitle: 'Công Nghiệp Hóa, Hiện Đại Hóa & Hội Nhập Kinh Tế Quốc Tế Của Việt Nam',
    badge: 'VIỆT NAM 4.0 & TOÀN CẦU',
    accentColor: '#0891b2',
    accentBg: 'rgba(8, 145, 178, 0.08)',
    accentBorder: 'rgba(8, 145, 178, 0.35)',
    topics: [
      {
        code: '6.1.1',
        title: 'Khái quát về cách mạng công nghiệp (CMCN 1.0 – 4.0) và công nghiệp hóa',
        summary: '• Cách mạng công nghiệp là những bước phát triển nhảy vọt về chất trong trình độ của tư liệu lao động, kéo theo thay đổi căn bản về phân công lao động xã hội và tạo năng suất lao động đột phá.\n' +
          '• Lịch sử 4 cuộc CMCN:\n' +
          '  1. CMCN 1.0 (cuối TK XVIII – giữa TK XIX): Cơ giới hóa bằng động cơ hơi nước và máy dệt.\n' +
          '  2. CMCN 2.0 (nửa cuối TK XIX – đầu TK XX): Điện khí hóa, động cơ đốt trong và dây chuyền sản xuất hàng loạt.\n' +
          '  3. CMCN 3.0 (từ thập niên 1960): Tự động hóa, máy tính điện tử, Internet và công nghệ thông tin.\n' +
          '  4. CMCN 4.0 (từ đầu TK XXI đến nay): Không gian mạng kết hợp vật lý (Cyber-Physical Systems), Trí tuệ nhân tạo (AI), Dữ liệu lớn (Big Data), Internet vạn vật (IoT), Điện toán đám mây và Công nghệ sinh học.\n' +
          '• Vai trò CMCN: Thúc đẩy LLSX phát triển vượt bậc, biến đổi căn bản QHSX và phương thức quản trị quốc gia.',
        lifeLesson: 'Mỗi cuộc CMCN đều loại bỏ những công việc thủ công lặp lại; muốn không bị đào thải, bạn phải liên tục làm chủ công nghệ mới và rèn luyện kỹ năng tư duy độc lập sáng tạo.'
      },
      {
        code: '6.1.2',
        title: 'Tính tất yếu khách quan và nội dung của CNH, HĐH ở Việt Nam',
        summary: '• Tính tất yếu khách quan: (1) CNH là quy luật phổ biến để xây dựng cơ sở vật chất - kỹ thuật cho CNXH; (2) Yêu cầu cấp bách rút ngắn khoảng cách tụt hậu, vượt qua bẫy thu nhập trung bình; (3) Tận dụng thời cơ vàng của CMCN 4.0 để đi tắt đón đầu.\n' +
          '• Nội dung CNH, HĐH ở Việt Nam thời kỳ mới:\n' +
          '  - Chuyển đổi căn bản sang sản xuất hiện đại dựa trên khoa học công nghệ và đổi mới sáng tạo.\n' +
          '  - Đẩy mạnh công nghiệp hóa gắn với kinh tế tri thức và CHUYỂN ĐỔI SỐ QUỐC GIA.\n' +
          '  - Chuyển dịch cơ cấu kinh tế theo hướng hiện đại, hợp lý và hiệu quả; nâng cao tỷ trọng công nghiệp chế tạo công nghệ cao và dịch vụ số.\n' +
          '  - Từng bước hoàn thiện quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất.',
        lifeLesson: 'Chuyển từ tư duy "làm thuê gia công giá rẻ" sang làm chủ công nghệ lõi và đổi mới sáng tạo để chiếm lĩnh các khâu có giá trị gia tăng cao nhất trong chuỗi giá trị toàn cầu.'
      },
      {
        code: '6.2.1',
        title: 'Khái niệm và các hình thức hội nhập kinh tế quốc tế',
        summary: '• Khái niệm: Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế của một quốc gia với nền kinh tế khu vực và thế giới thông qua các nỗ lực tự do hóa thương mại, mở cửa thị trường và tham gia phân công lao động quốc tế.\n' +
          '• 5 hình thức hội nhập từ thấp đến cao:\n' +
          '  1. Thỏa thuận thương mại ưu đãi (PTA).\n' +
          '  2. Khu vực mậu dịch tự do (FTA) - đặc biệt các FTA thế hệ mới như CPTPP, EVFTA, RCEP (tiêu chuẩn cao về lao động, môi trường ESG, sở hữu trí tuệ).\n' +
          '  3. Liên minh thuế quan (Customs Union).\n' +
          '  4. Thị trường chung (Common Market).\n' +
          '  5. Liên minh kinh tế - tiền tệ (Economic and Monetary Union).',
        lifeLesson: 'Làm ăn trong thời kỳ toàn cầu hóa đòi hỏi bạn phải nắm vững "luật chơi quốc tế" (tiêu chuẩn xuất xứ hàng hóa, tiêu chuẩn lao động, tiêu chuẩn xanh) để tự tin vươn ra biển lớn.'
      },
      {
        code: '6.2.2',
        title: 'Tác động hai mặt của hội nhập kinh tế quốc tế đến quá trình phát triển của Việt Nam',
        summary: 'Hội nhập là quá trình mang tính hai mặt biện chứng rõ rệt:\n' +
          '• Tác động tích cực (Cơ hội):\n' +
          '  - Mở rộng thị trường xuất khẩu, thu hút mạnh mẽ vốn đầu tư trực tiếp nước ngoài (FDI).\n' +
          '  - Tiếp thu công nghệ tiên tiến, kỹ năng quản lý hiện đại, nâng cao chất lượng nguồn nhân lực.\n' +
          '  - Thúc đẩy cải cách thể chế kinh tế trong nước theo chuẩn mực quốc tế, tạo thêm nhiều việc làm.\n' +
          '• Tác động tiêu cực và thách thức:\n' +
          '  - Cạnh tranh khốc liệt khiến các doanh nghiệp yếu kém trong nước có nguy cơ giải thể, phá sản.\n' +
          '  - Nguy cơ phụ thuộc vào thị trường bên ngoài và chuỗi cung ứng dễ đứt gãy.\n' +
          '  - Gia tăng phân hóa giàu nghèo, sức ép về ô nhiễm môi trường và an ninh dữ liệu quốc gia.',
        lifeLesson: 'Phải luôn có tư duy phòng ngừa rủi ro; tận dụng tối đa cơ hội từ mở cửa nhưng đồng thời phải chủ động xây dựng hàng rào năng lực nội tại để chống sốc trước các biến động địa chính trị.'
      },
      {
        code: '6.2.3',
        title: 'Phương hướng nâng cao hiệu quả hội nhập & Xây dựng nền kinh tế độc lập, tự chủ',
        summary: '• Phương hướng nâng cao hiệu quả hội nhập:\n' +
          '  1. Nhận thức đúng đắn về xu thế khách quan của hội nhập; đa phương hóa, đa dạng hóa đối tác thương mại.\n' +
          '  2. Hoàn thiện đồng bộ hệ thống pháp luật tương thích chuẩn mực quốc tế.\n' +
          '  3. Nâng cao năng lực cạnh tranh quốc gia và năng lực chống chịu của doanh nghiệp trong nước.\n' +
          '• Xây dựng nền kinh tế độc lập, tự chủ:\n' +
          '  - Bản chất: Không bị lệ thuộc hay bị khống chế về đường lối kinh tế, dựa trên nội lực vững chắc (tự chủ về an ninh lương thực, năng lượng, tài chính, công nghệ lõi) kết hợp với sức mạnh thời đại.\n' +
          '  - Mối quan hệ biện chứng: NỘI LỰC LÀ QUYẾT ĐỊNH, NGOẠI LỰC LÀ QUAN TRỌNG. Độc lập tự chủ là tiền đề để hội nhập bình đẳng; ngược lại, hội nhập hiệu quả tạo nguồn lực để củng cố nền độc lập tự chủ.',
        lifeLesson: '"Độc lập tự chủ" thời đại 4.0 không phải là đóng cửa tự cung tự cấp, mà là làm chủ công nghệ và năng lực cốt lõi để đứng vững trên đôi chân của chính mình trong mọi cuộc đàm phán toàn cầu.'
      }
    ]
  }
];
