/**
 * HỒ SƠ ĐIỀU TRA KỲ ÁN KINH TẾ (DETECTIVE BUREAU MLN122)
 * Bám sát 100% cấu trúc đề mục, nội dung bài giảng và slide chuẩn:
 * 
 * - HỒ SƠ #001: Chương 3 - Mục 3.1: Lý luận của C. Mác về giá trị thặng dư
 *   (3.1.1. Nguồn gốc; 3.1.2. Bản chất c+v+m, m', M; 3.1.3. Các phương pháp sản xuất GTTD tuyệt đối, tương đối & siêu ngạch)
 * 
 * - HỒ SƠ #002: Chương 3 - Mục 3.2 & 3.3: Tích lũy tư bản & Các hình thức biểu hiện của giá trị thặng dư
 *   (3.2. Tích lũy tư bản, c/v, đội quân thất nghiệp; 3.3. Chi phí sản xuất k, Lợi nhuận p, Tỷ suất lợi nhuận p', Lợi nhuận bình quân, Lợi tức, Địa tô)
 * 
 * - HỒ SƠ #003: Chương 5 - Mục 5.1: Kinh tế thị trường định hướng XHCN ở Việt Nam
 *   (5.1.1. Khái niệm KTTT định hướng XHCN; 5.1.2. Tính tất yếu khách quan; 5.1.3. Các đặc trưng cốt lõi về mục tiêu, sở hữu, quản lý, phân phối, gắn tăng trưởng với công bằng xã hội)
 * 
 * - HỒ SƠ #004: Chương 5 - Mục 5.2: Hoàn thiện thể chế kinh tế thị trường định hướng XHCN ở Việt Nam
 *   (5.2.1. Sự cần thiết phải hoàn thiện thể chế; 5.2.2. Hoàn thiện thể chế trên các khía cạnh chủ yếu: sở hữu, các thành phần kinh tế, đồng bộ các loại thị trường, gắn tăng trưởng với công bằng, nâng cao năng lực lãnh đạo của Đảng)
 * 
 * - HỒ SƠ #005: Chương 6 - Mục 6.1: Công nghiệp hóa, hiện đại hóa ở Việt Nam
 *   (6.1.1. Khái quát về cách mạng công nghiệp và công nghiệp hóa; 6.1.2. Tính tất yếu khách quan và nội dung của công nghiệp hóa hiện đại hóa thích ứng CMCN 4.0, đi tắt đón đầu)
 * 
 * - HỒ SƠ #006: Chương 6 - Mục 6.2: Hội nhập kinh tế quốc tế của Việt Nam
 *   (6.2.1. Khái niệm và các hình thức hội nhập; 6.2.2. Tác động của hội nhập đến quá trình phát triển; 6.2.3. Phương hướng nâng cao hiệu quả hội nhập và xây dựng nền kinh tế độc lập tự chủ)
 */

export const DETECTIVE_CASES = [
  {
    id: 'CASE-000',
    code: 'HỒ SƠ KHỞI NGUYÊN',
    chapterBadge: 'CHƯƠNG 1 • NỀN TẢNG',
    shortTopic: 'Chương 1: Tiến trình KTCT',
    title: 'Hồ Sơ Nền Tảng: Đại Án Tiến Trình Tư Tưởng & Bản Chất Khoa Học Của KTCT Mác – Lênin',
    subtitle: 'Chuẩn Chương 1: Từ "Kinh bang tế thế" (1615), Adam Smith (1776) đến KTCT Mác – Lênin đỉnh cao khoa học',
    image: './assets/images/cases/case-c1-origin.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#0284c7',
    backgroundStory: 'Một nhóm chuyên gia tư vấn chiến lược tuyên bố: "Xã hội số ngày nay không cần sản xuất vật chất, chỉ cần lưu thông buôn bán và phân tích tâm lý hành vi vi mô là đất nước tự khắc giàu có; kinh tế chính trị chỉ là lý thuyết cũ kỹ". Với tư cách là Chuyên gia Điều tra Kinh tế Chính trị MLN122, bạn hãy phân loại 5 manh mối lịch sử - học thuật chuẩn Slide bài giảng vào 5 ngăn nội dung khoa học để vạch trần sai lầm của quan điểm này và khẳng định bản chất khoa học của KTCT Mác – Lênin!',
    categories: [
      { 
        id: 'muc_1_1_origin', 
        name: 'MỤC 1.1A: KHỞI NGUỒN THUẬT NGỮ (1615 - 1776)', 
        desc: 'Montchrestien (1615), thương nhân & sức mạnh quốc gia; Adam Smith (1776, The Wealth of Nations) đưa KTCT thành hệ thống khoa học', 
        color: '#0ea5e9' 
      },
      { 
        id: 'muc_1_1_stages_1', 
        name: 'MỤC 1.1B: GIAI ĐOẠN 1 (CỔ ĐẠI ĐẾN CUỐI TK XVIII)', 
        desc: 'Tiến trình phát triển: Tư tưởng cổ trung đại ➔ Chủ nghĩa trọng thương (vàng bạc, lưu thông) ➔ Chủ nghĩa trọng nông ➔ KTCT tư sản cổ điển Anh', 
        color: '#10b981' 
      },
      { 
        id: 'muc_1_1_stages_2', 
        name: 'MỤC 1.1C: GIAI ĐOẠN 2 & SỰ RẼ NHÁNH TƯ TƯỞNG', 
        desc: 'Kế thừa thành KTCT Mác - Lênin vs rẽ nhánh sang Kinh tế học tầm thường (chỉ đi vào tâm lý, hành vi, không phân tích quan hệ xã hội của sản xuất)', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_1_1_marx_lenin', 
        name: 'MỤC 1.1D: KTCT MÁC – LÊNIN ĐỈNH CAO KHOA HỌC', 
        desc: 'Ra đời những năm 40 TK XIX, tìm ra quy luật PTSX tư bản, phạm trù KTTT và quan hệ giai cấp; Lênin bổ sung thời đại đế quốc và độc quyền', 
        color: '#ef4444' 
      },
      { 
        id: 'muc_1_2_definition', 
        name: 'MỤC 1.2: ĐỊNH NGHĨA KHOA HỌC & ĐỐI TƯỢNG NGHIÊN CỨU', 
        desc: 'Môn khoa học nghiên cứu các quan hệ kinh tế để tìm ra quy luật chi phối nền sản xuất xã hội qua 4 khâu: Sản xuất - Phân phối - Trao đổi - Tiêu dùng', 
        color: '#8b5cf6' 
      }
    ],
    clues: [
      {
        id: 'c0-clue-1',
        text: 'Trong "Chuyên luận về kinh tế chính trị" (1615), Montchrestien đề xuất môn KTCT, khẳng định sức mạnh nhà nước gắn với sự giàu có quốc gia và thương nhân là gương mặt chính',
        correctCategory: 'muc_1_1_origin',
        hint: 'Cột mốc đầu tiên xuất hiện thuật ngữ Political Economy năm 1615 trong Slide Mục 1.1.'
      },
      {
        id: 'c0-clue-2',
        text: 'Chủ nghĩa trọng thương (TK XV - XVII) coi trọng ngoại thương và tích lũy vàng bạc, sau đó chuyển sang Chủ nghĩa trọng nông đề cao sản xuất nông nghiệp',
        correctCategory: 'muc_1_1_stages_1',
        hint: 'Tiến trình phát triển trong Giai đoạn 1 từ cổ đại đến cuối TK XVIII.'
      },
      {
        id: 'c0-clue-3',
        text: 'Kinh tế học tầm thường chỉ đi vào khái quát tâm lý, hành vi mua bán bề ngoài mà không đi sâu phân tích các quan hệ xã hội trong quan hệ sản xuất',
        correctCategory: 'muc_1_1_stages_2',
        hint: 'Hạn chế của dòng kinh tế học tư sản tầm thường được phân tích ở Giai đoạn 2 Slide Mục 1.1.'
      },
      {
        id: 'c0-clue-4',
        text: 'Kinh tế chính trị Mác ra đời những năm 40 TK XIX tìm ra quy luật giá trị thặng dư; đầu TK XX Lênin bổ sung các đặc điểm kinh tế của CNTB độc quyền',
        correctCategory: 'muc_1_1_marx_lenin',
        hint: 'Sự hình thành và phát triển của KTCT Mác - Lênin khoa học và cách mạng.'
      },
      {
        id: 'c0-clue-5',
        text: 'KTCT nghiên cứu các quan hệ kinh tế để tìm ra quy luật chi phối sự vận động của hiện tượng và hoạt động kinh tế tương ứng với trình độ của nền sản xuất xã hội',
        correctCategory: 'muc_1_2_definition',
        hint: 'Định nghĩa khoa học cốt lõi về bản chất môn học trong Slide Chương 1.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: Khẳng định bản chất khoa học và vai trò nền tảng của KTCT Mác – Lênin!',
      concept: 'Chương 1: Tiến trình lịch sử tư tưởng, Đối tượng, Phương pháp và Chức năng của KTCT',
      analysis: 'Căn cứ toàn diện Slide Chương 1 MLN122: Thuật ngữ bắt nguồn từ "kinh bang tế thế", trải qua các cột mốc vĩ đại của Montchrestien (1615), Adam Smith (1776) và đạt đến đỉnh cao khoa học cách mạng với C. Mác, Ph. Ăng-ghen và V.I. Lênin. Khoa học kinh tế chính trị chỉ rõ: Sản xuất vật chất và quan hệ kinh tế giữa người với người trong 4 khâu (Sản xuất – Phân phối – Trao đổi – Tiêu dùng) mới là cội nguồn quyết định sự giàu có của quốc gia, đập tan luận điểm phiến diện của kinh tế học tầm thường!',
      xpAwarded: 160
    }
  },
  {
    id: 'CASE-000B',
    code: 'HỒ SƠ HÀNG HÓA',
    chapterBadge: 'CHƯƠNG 2 • HÀNG HÓA & THỊ TRƯỜNG',
    shortTopic: 'Chương 2: Bí mật hàng hóa',
    title: 'Hồ Sơ Bí Ẩn Giá Trị Hàng Hóa: Tỷ Lệ 1m Vải = 5kg Thóc & Tính Hai Mặt Của Lao Động',
    subtitle: 'Chuẩn Chương 2: Hai thuộc tính của hàng hóa, tỷ lệ trao đổi 1m vải = 5kg thóc và tính chất hai mặt của lao động sản xuất',
    image: './assets/images/cases/case-c2-commodity.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#10b981',
    backgroundStory: 'Trong một phiên chợ trao đổi nông sản và thủ công mỹ nghệ, một thương lái đưa ra nhận định: "Hàng hóa trao đổi được với nhau chỉ vì sở thích chủ quan và sự may rủi, hoàn toàn không có cơ sở khách quan nào". Một người thợ may đổi 1 mét vải lấy 5 kg thóc của người nông dân. Cả hai cùng thắc mắc: Hai vật có công dụng khác biệt hoàn toàn (vải để may mặc, thóc để ăn), tại sao lại trao đổi ngang bằng nhau? Để giải mã bí ẩn này, điều tra viên cần sắp xếp các bằng chứng lý luận của C. Mác vào đúng 4 ngăn hồ sơ khoa học!',
    categories: [
      { 
        id: 'muc_2_1_gtsd', 
        name: 'GIÁ TRỊ SỬ DỤNG & LAO ĐỘNG CỤ THỂ', 
        desc: 'Công dụng hàng hóa, thỏa mãn nhu cầu cá nhân (bánh mì) hoặc sản xuất (khung thép); 4 đặc trưng riêng của lao động cụ thể', 
        color: '#10b981' 
      },
      { 
        id: 'muc_2_1_gttd', 
        name: 'GIÁ TRỊ TRAO ĐỔI & THÍ DỤ 1M VẢI = 5KG THÓC', 
        desc: 'Quan hệ tỷ lệ về số lượng; cơ sở chung của trao đổi chính là hao phí lao động để tạo ra hàng hóa', 
        color: '#06b6d4' 
      },
      { 
        id: 'muc_2_1_gt', 
        name: 'BẢN CHẤT GIÁ TRỊ & 4 ĐẶC TÍNH CỐT LÕI', 
        desc: 'Lao động xã hội kết tinh; cơ sở của giá trị trao đổi; quan hệ kinh tế người với người; là phạm trù lịch sử', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_2_2_two_fold', 
        name: 'TÍNH HAI MẶT & MÂU THUẪN TƯ NHÂN - XÃ HỘI', 
        desc: 'Bắt nguồn từ phân công lao động xã hội; lao động cụ thể tạo GTSD, lao động trừu tượng tạo Giá trị', 
        color: '#8b5cf6' 
      }
    ],
    clues: [
      {
        id: 'c2-clue-1',
        text: 'Giá trị sử dụng là công dụng của hàng hóa, có thể thỏa mãn nhu cầu tiêu dùng cá nhân (bánh mì) hoặc nhu cầu tiêu dùng sản xuất (khung sắt thép công trình)',
        correctCategory: 'muc_2_1_gtsd',
        hint: 'Slide định nghĩa Giá trị sử dụng và ví dụ hình ảnh Bánh mì, Khung thép.'
      },
      {
        id: 'c2-clue-2',
        text: 'Lao động cụ thể bắt nguồn từ phân công lao động xã hội, có 4 đặc trưng: mục đích riêng, đối tượng riêng, phương pháp riêng và kết quả riêng',
        correctCategory: 'muc_2_1_gtsd',
        hint: 'Slide phân tích tính chất của Lao động Cụ thể với 4 chữ "riêng".'
      },
      {
        id: 'c2-clue-3',
        text: 'Giá trị trao đổi là một quan hệ về số lượng, là tỷ lệ theo đó một giá trị sử dụng loại này được trao đổi với những giá trị sử dụng loại khác',
        correctCategory: 'muc_2_1_gttd',
        hint: 'Slide định nghĩa Giá trị trao đổi - cầu nối để đi đến bản chất Giá trị.'
      },
      {
        id: 'c2-clue-4',
        text: 'Thí dụ 1m vải = 5kg thóc: Hai hàng hóa công dụng khác nhau trao đổi được vì chính lao động hao phí để tạo ra hàng hóa là cơ sở chung',
        correctCategory: 'muc_2_1_gttd',
        hint: 'Thí dụ kinh điển trong slide: 1 mét vải có giá trị trao đổi bằng 5 kg thóc.'
      },
      {
        id: 'c2-clue-5',
        text: 'Giá trị là lao động xã hội của người sản xuất kết tinh trong hàng hóa, là cơ sở của giá trị trao đổi và là một phạm trù lịch sử',
        correctCategory: 'muc_2_1_gt',
        hint: '4 đặc điểm cốt lõi của Giá trị được nêu rõ trong Slide 4.'
      },
      {
        id: 'c2-clue-6',
        text: 'Lao động sản xuất hàng hóa có tính hai mặt: Lao động cụ thể tạo ra giá trị sử dụng, lao động trừu tượng tạo ra thực thể giá trị của hàng hóa',
        correctCategory: 'muc_2_2_two_fold',
        hint: 'Phát kiến vĩ đại của C. Mác về tính hai mặt của lao động sản xuất hàng hóa.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: Giải mã trọn vẹn bí mật của hàng hóa và học thuyết giá trị lao động!',
      concept: 'Chương 2: Hai thuộc tính của hàng hóa, Thí dụ 1m vải = 5kg thóc & Tính hai mặt của lao động',
      analysis: 'Căn cứ các slide chuẩn Chương 2: Tỷ lệ trao đổi 1m vải = 5kg thóc không hề ngẫu nhiên mà được quyết định bởi hao phí lao động xã hội kết tinh bên trong. C. Mác đã tạo nên bước ngoặt vĩ đại trong lịch sử kinh tế khi phát hiện ra tính hai mặt của lao động sản xuất hàng hóa: Lao động cụ thể (với 4 nét riêng biệt) sáng tạo ra giá trị sử dụng, còn lao động trừu tượng (hao phí óc, bắp thịt) kết tinh thành thực thể giá trị!',
      xpAwarded: 180
    }
  },
  {
    id: 'CASE-001',
    code: 'HỒ SƠ #001',
    chapterBadge: 'CHƯƠNG 3 • MỤC 3.1',
    title: 'Hồ Sơ Lý Luận C. Mác Về Giá Trị Thặng Dư',
    subtitle: 'Chuẩn Mục 3.1: Nguồn gốc, bản chất và các phương pháp sản xuất giá trị thặng dư trong nền KTTT',
    image: './assets/images/cases/case-c3-surplus-value.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#0284c7',
    backgroundStory: 'Một nghiên cứu thực tế tại một doanh nghiệp công nghệ lớn tuyên bố: "Doanh thu và lợi nhuận nghìn tỷ của công ty hoàn toàn do hệ thống máy chủ, bằng sáng chế thuật toán tự sinh ra, không hề có việc chiếm đoạt lao động của kỹ sư hay công nhân". Để làm sáng tỏ chân lý khoa học, điều tra viên cần căn cứ vào Lý luận của C. Mác về giá trị thặng dư (Mục 3.1 Slide bài giảng) để phân loại đúng đắn các luận điểm vào từng ngăn nội dung khoa học!',
    categories: [
      { 
        id: 'muc_3_1_1', 
        name: 'MỤC 3.1.1: NGUỒN GỐC GIÁ TRỊ THẶNG DƯ', 
        desc: 'Hàng hóa sức lao động, hai điều kiện ra đời, giá trị và giá trị sử dụng đặc biệt có khả năng tạo ra giá trị mới', 
        color: '#0ea5e9' 
      },
      { 
        id: 'muc_3_1_2_a', 
        name: 'MỤC 3.1.2A: TƯ BẢN BẤT BIẾN & KHẢ BIẾN', 
        desc: 'Tư bản bất biến (c) chỉ bảo tồn/chuyển dịch giá trị; Tư bản khả biến (v) là nguồn gốc duy nhất sinh ra giá trị thặng dư', 
        color: '#10b981' 
      },
      { 
        id: 'muc_3_1_2_b', 
        name: 'MỤC 3.1.2B: BẢN CHẤT GTTD & TỶ SUẤT m\'', 
        desc: 'Giá trị thặng dư m là bộ phận giá trị mới dôi ra ngoài giá trị sức lao động; m\' phản ánh chính xác trình độ bóc lột', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_3_1_3_a', 
        name: 'MỤC 3.1.3A: SẢN XUẤT GTTD TUYỆT ĐỐI', 
        desc: 'Phương pháp kéo dài độ dài tuyệt đối của ngày lao động vượt quá thời gian lao động tất yếu', 
        color: '#ef4444' 
      },
      { 
        id: 'muc_3_1_3_b', 
        name: 'MỤC 3.1.3B: SẢN XUẤT GTTD TƯƠNG ĐỐI', 
        desc: 'Rút ngắn thời gian lao động tất yếu bằng cách tăng năng suất lao động xã hội, hạ thấp giá trị sức lao động', 
        color: '#a855f7' 
      }
    ],
    clues: [
      {
        id: 'c1-clue-1',
        text: 'Sức lao động là hàng hóa đặc biệt, khi sử dụng có khả năng sáng tạo ra một lượng giá trị lớn hơn giá trị bản thân nó',
        correctCategory: 'muc_3_1_1',
        hint: 'Nội dung cốt lõi của Mục 3.1.1 giải thích nguồn gốc sinh ra giá trị thặng dư.'
      },
      {
        id: 'c1-clue-2',
        text: 'Bộ phận tư bản biến thành tư liệu sản xuất (c) không thay đổi lượng giá trị, chỉ chuyển dịch nguyên vẹn vào sản phẩm mới',
        correctCategory: 'muc_3_1_2_a',
        hint: 'Định nghĩa khoa học về Tư bản bất biến (c) trong Mục 3.1.2.'
      },
      {
        id: 'c1-clue-3',
        text: 'Tỷ suất giá trị thặng dư m\' = (m / v) × 100% phản ánh thực chất mức độ bóc lột sức lao động của nhà tư bản',
        correctCategory: 'muc_3_1_2_b',
        hint: 'Công thức và ý nghĩa bản chất của m\' trong Mục 3.1.2.'
      },
      {
        id: 'c1-clue-4',
        text: 'Chủ doanh nghiệp ép người lao động tăng ca làm thêm từ 8 giờ lên 12-14 giờ mỗi ngày để tăng khối lượng thặng dư m',
        correctCategory: 'muc_3_1_3_a',
        hint: 'Biểu hiện thực tế của phương pháp sản xuất giá trị thặng dư tuyệt đối.'
      },
      {
        id: 'c1-clue-5',
        text: 'Cải tiến kỹ thuật công nghệ toàn diện trong các ngành sản xuất tư liệu sinh hoạt để hạ giá thành và rút ngắn thời gian tất yếu',
        correctCategory: 'muc_3_1_3_b',
        hint: 'Cơ chế vận hành của phương pháp sản xuất giá trị thặng dư tương đối.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: Máy tính không tạo ra m; chỉ có hàng hóa sức lao động sống mới sáng tạo ra m!',
      concept: 'Mục 3.1: Nguồn gốc, bản chất và các phương pháp sản xuất giá trị thặng dư',
      analysis: 'Căn cứ Mục 3.1 Giáo trình và Slide bài giảng MLN122: Tư liệu sản xuất (c) dù hiện đại đến đâu cũng chỉ là Tư bản bất biến, chỉ đóng vai trò phương tiện truyền dẫn giá trị. Nguồn gốc duy nhất sinh ra giá trị thặng dư (m) là việc tiêu dùng hàng hóa sức lao động sống (Tư bản khả biến v) trong thời gian lao động thặng dư. Các nhà tư bản luôn kết hợp tinh vi cả hai phương pháp sản xuất GTTD tuyệt đối (kéo dài ngày làm việc) và GTTD tương đối (tăng năng suất qua ứng dụng khoa học kỹ thuật).',
      xpAwarded: 160
    }
  },

  {
    id: 'CASE-002',
    code: 'HỒ SƠ #002',
    chapterBadge: 'CHƯƠNG 3 • MỤC 3.2 & 3.3',
    title: 'Hồ Sơ Tích Lũy Tư Bản & Các Hình Thức Biểu Hiện Của Giá Trị Thặng Dư',
    subtitle: 'Chuẩn Mục 3.2 (Tích lũy tư bản, c/v) & Mục 3.3 (Chi phí k, Lợi nhuận p, p\', Lợi tức, Địa tô)',
    image: './assets/images/cases/case-c3-accumulation.svg',
    dossierLevel: 'CẤP ĐỘ: TRUNG BÌNH',
    accentColor: '#f59e0b',
    backgroundStory: 'Một tập đoàn kinh tế tư nhân thực hiện chiến lược tái đầu tư mở rộng, nhập khẩu dây chuyền robot tự động hóa để tăng năng lực cạnh tranh, đồng thời thâu tóm hàng loạt công ty con. Báo cáo tài chính của tập đoàn chỉ ghi nhận "Chi phí k" và "Lợi nhuận p", tuyên bố lợi nhuận là thành quả kinh doanh của toàn bộ vốn đầu tư chứ không liên quan gì đến bóc lột. Hãy đối chiếu Mục 3.2 và Mục 3.3 Slide bài giảng để sắp xếp đúng các luận điểm lý luận!',
    categories: [
      { 
        id: 'muc_3_2_ban_chat', 
        name: 'MỤC 3.2: BẢN CHẤT TÍCH LŨY TƯ BẢN', 
        desc: 'Tái sản xuất mở rộng bằng cách tư bản hóa giá trị thặng dư; nguồn gốc duy nhất của tích lũy tư bản là m', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_3_2_cau_tao', 
        name: 'MỤC 3.2: CẤU TẠO HỮU CƠ (c/v) & HỆ QUẢ', 
        desc: 'Cấu tạo hữu cơ c/v tăng lên tất yếu dẫn tới sinh ra "Đội quân thất nghiệp công nghiệp" (dân số thừa tương đối)', 
        color: '#a855f7' 
      },
      { 
        id: 'muc_3_3_chi_phi_loi_nhuan', 
        name: 'MỤC 3.3: CHI PHÍ (k) & LỢI NHUẬN (p)', 
        desc: 'Chi phí sản xuất k = c + v; lợi nhuận p là hình thức biến tướng của m, che giấu quan hệ bóc lột', 
        color: '#ef4444' 
      },
      { 
        id: 'muc_3_3_loi_nhuan_binh_quan', 
        name: 'MỤC 3.3: TỶ SUẤT p\' & LỢI NHUẬN BÌNH QUÂN', 
        desc: 'Cạnh tranh giữa các ngành dẫn tới hình thành tỷ suất lợi nhuận bình quân và giá cả sản xuất', 
        color: '#3b82f6' 
      },
      { 
        id: 'muc_3_3_loi_tuc_dia_to', 
        name: 'MỤC 3.3: LỢI TỨC (z) & ĐỊA TÔ TƯ BẢN (R)', 
        desc: 'Các hình thức chuyển hóa khác của m chia cho tư bản cho vay (lợi tức) và chủ đất (địa tô chênh lệch, tuyệt đối)', 
        color: '#10b981' 
      }
    ],
    clues: [
      {
        id: 'c2-clue-1',
        text: 'Thực chất của tích lũy tư bản là sự chuyển hóa một phần giá trị thặng dư trở lại thành tư bản phụ thêm để tái sản xuất mở rộng',
        correctCategory: 'muc_3_2_ban_chat',
        hint: 'Khái niệm khoa học then chốt của Mục 3.2 Slide bài giảng.'
      },
      {
        id: 'c2-clue-2',
        text: 'Cấu tạo hữu cơ c/v tăng làm cầu về sức lao động giảm tương đối so với tư liệu sản xuất, tạo ra nạn nhân công thất nghiệp',
        correctCategory: 'muc_3_2_cau_tao',
        hint: 'Quy luật nhân khẩu thừa tương đối trong quá trình tích lũy tư bản.'
      },
      {
        id: 'c2-clue-3',
        text: 'Công thức W = k + p che đậy nguồn gốc bóc lột vì làm người ta tưởng lợi nhuận sinh ra từ toàn bộ vốn k ứng trước',
        correctCategory: 'muc_3_3_chi_phi_loi_nhuan',
        hint: 'Sự khác biệt bản chất giữa giá trị hàng hóa và chi phí sản xuất tư bản chủ nghĩa.'
      },
      {
        id: 'c2-clue-4',
        text: 'Sự tự do di chuyển tư bản giữa các ngành sản xuất khác nhau san bằng các mức p\' khác nhau thành tỷ suất lợi nhuận bình quân',
        correctCategory: 'muc_3_3_loi_nhuan_binh_quan',
        hint: 'Cơ chế cạnh tranh giữa các ngành dẫn tới hình thành lợi nhuận bình quân.'
      },
      {
        id: 'c2-clue-5',
        text: 'Lợi tức trả cho ngân hàng và tiền thuê đất trả cho chủ đất thực chất đều là một phần giá trị thặng dư do công nhân tạo ra',
        correctCategory: 'muc_3_3_loi_tuc_dia_to',
        hint: 'Bản chất khoa học của lợi tức cho vay và địa tô tư bản chủ nghĩa.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: Tích lũy tư bản đào sâu bất bình đẳng; lợi nhuận, lợi tức và địa tô đều bắt nguồn từ m!',
      concept: 'Mục 3.2 & Mục 3.3: Tích lũy tư bản và các hình thức chuyển hóa của giá trị thặng dư',
      analysis: 'Căn cứ Mục 3.2 và 3.3: Tích lũy tư bản thực chất là dùng chính giá trị thặng dư bóc lột được để tiếp tục mở rộng quy mô bóc lột. Quá trình này đẩy cấu tạo hữu cơ (c/v) tăng cao, sinh ra đội quân thất nghiệp công nghiệp. Trên bề mặt thị trường, giá trị thặng dư m biến tướng thành lợi nhuận (p), lợi nhuận bình quân, lợi tức ngân hàng (z) và địa tô (R) nhằm che giấu nguồn gốc thực sự là sức lao động làm thuê.',
      xpAwarded: 170
    }
  },

  {
    id: 'CASE-003',
    code: 'HỒ SƠ #003',
    chapterBadge: 'CHƯƠNG 5 • MỤC 5.1',
    title: 'Hồ Sơ Bản Chất & Đặc Trưng Kinh Tế Thị Trường Định Hướng XHCN Ở Việt Nam',
    subtitle: 'Chuẩn Mục 5.1: Khái niệm (5.1.1), Tính tất yếu khách quan (5.1.2) & Các đặc trưng của KTTT định hướng XHCN (5.1.3)',
    image: './assets/images/cases/case-c5-socialist-market.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#10b981',
    backgroundStory: 'Nhiều quan điểm tranh luận về con đường phát triển kinh tế của nước ta: Có người cho rằng phát triển kinh tế thị trường tất yếu phải tư nhân hóa toàn bộ; có ý kiến lại muốn quay về mô hình chỉ huy tập trung bao cấp. Bằng tri thức Mục 5.1 trong Slide bài giảng Chương 5, hãy phân loại chính xác các luận điểm vào đúng các đề mục khoa học!',
    categories: [
      { 
        id: 'muc_5_1_1', 
        name: 'MỤC 5.1.1: KHÁI NIỆM KTTT ĐỊNH HƯỚNG XHCN', 
        desc: 'Nền kinh tế vận hành theo các quy luật của thị trường, hướng tới xác lập xã hội dân giàu, nước mạnh, dân chủ, công bằng, văn minh', 
        color: '#0ea5e9' 
      },
      { 
        id: 'muc_5_1_2', 
        name: 'MỤC 5.1.2: TÍNH TẤT YẾU KHÁCH QUAN', 
        desc: 'Phù hợp với quy luật phát triển khách quan thời kỳ quá độ; phát huy ưu việt của thị trường để giải phóng sức sản xuất', 
        color: '#10b981' 
      },
      { 
        id: 'muc_5_1_3_a', 
        name: 'MỤC 5.1.3: ĐẶC TRƯNG VỀ MỤC TIÊU & SỞ HỮU', 
        desc: 'Mục tiêu giải phóng LLSX vì con người; kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_5_1_3_b', 
        name: 'MỤC 5.1.3: ĐẶC TRƯNG VỀ QUẢN LÝ & PHÂN PHỐI', 
        desc: 'Nhà nước pháp quyền XHCN quản lý dưới sự lãnh đạo của Đảng; phân phối chủ yếu theo lao động và hiệu quả kinh tế', 
        color: '#a855f7' 
      },
      { 
        id: 'muc_5_1_3_c', 
        name: 'MỤC 5.1.3: GẮN TĂNG TRƯỞNG VỚI CÔNG BẰNG XH', 
        desc: 'Không hy sinh công bằng xã hội và môi trường chạy theo tăng trưởng đơn thuần; thực hiện tiến bộ ngay trong từng bước đi', 
        color: '#ef4444' 
      }
    ],
    clues: [
      {
        id: 'c3-clue-1',
        text: 'KTTT định hướng XHCN là nền kinh tế vừa tuân theo các quy luật thị trường, vừa được dẫn dắt bởi các nguyên tắc và bản chất của CNXH',
        correctCategory: 'muc_5_1_1',
        hint: 'Định nghĩa chính xác theo Mục 5.1.1 trong Slide bài giảng.'
      },
      {
        id: 'c3-clue-2',
        text: 'Phát triển KTTT là sự lựa chọn tất yếu khách quan, bỏ qua chế độ TBCN nhưng không thể bỏ qua các quy luật kinh tế thị trường',
        correctCategory: 'muc_5_1_2',
        hint: 'Luận giải tính tất yếu khách quan của Mục 5.1.2.'
      },
      {
        id: 'c3-clue-3',
        text: 'Nền kinh tế gồm nhiều thành phần: Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là một động lực quan trọng của nền kinh tế',
        correctCategory: 'muc_5_1_3_a',
        hint: 'Đặc trưng cốt lõi về quan hệ sở hữu và thành phần kinh tế trong Mục 5.1.3.'
      },
      {
        id: 'c3-clue-4',
        text: 'Thực hiện phân phối chủ yếu theo kết quả lao động, hiệu quả kinh tế, đồng thời phân phối theo mức đóng góp vốn và qua hệ thống an sinh xã hội',
        correctCategory: 'muc_5_1_3_b',
        hint: 'Đặc trưng về quan hệ phân phối thu nhập trong Mục 5.1.3.'
      },
      {
        id: 'c3-clue-5',
        text: 'Tiến bộ và công bằng xã hội phải được thể hiện trong từng chính sách, từng dự án phát triển chứ không đợi kinh tế phát triển cao mới thực hiện',
        correctCategory: 'muc_5_1_3_c',
        hint: 'Đặc trưng thể hiện bản chất nhân văn ưu việt sâu sắc của định hướng XHCN.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: KTTT định hướng XHCN là mô hình phát triển sáng tạo, tất yếu của Việt Nam!',
      concept: 'Mục 5.1: Khái niệm, Tính tất yếu khách quan và Các đặc trưng của KTTT định hướng XHCN',
      analysis: 'Theo Mục 5.1 Slide bài giảng: Nền kinh tế thị trường định hướng XHCN ở Việt Nam là mô hình kinh tế tổng quát trong thời kỳ quá độ lên chủ nghĩa xã hội. Nó vận hành đầy đủ theo các quy luật khách quan của thị trường (giá trị, cung cầu, cạnh tranh), đồng thời bảo đảm định hướng XHCN thông qua vai trò chủ đạo của kinh tế nhà nước, sự lãnh đạo của Đảng và nguyên tắc gắn tăng trưởng kinh tế với công bằng xã hội ngay trong từng bước đi.',
      xpAwarded: 180
    }
  },

  {
    id: 'CASE-004',
    code: 'HỒ SƠ #004',
    chapterBadge: 'CHƯƠNG 5 • MỤC 5.2',
    title: 'Hồ Sơ Hoàn Thiện Thể Chế Kinh Tế Thị Trường Định Hướng XHCN Ở Việt Nam',
    subtitle: 'Chuẩn Mục 5.2: Sự cần thiết hoàn thiện thể chế (5.2.1) & Các nội dung hoàn thiện chủ yếu (5.2.2)',
    image: './assets/images/cases/case-c5-institutions.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#ec4899',
    backgroundStory: 'Thực tiễn phát triển kinh tế bộc lộ những bất cập: Hệ thống pháp luật về đất đai còn kẽ hở dẫn đến đầu cơ thổi giá; thị trường vốn và trái phiếu doanh nghiệp thiếu minh bạch; năng lực thực thi và giám sát của bộ máy quản lý nhà nước có lúc còn lúng túng. Những hạn chế này đòi hỏi phải đẩy mạnh hoàn thiện thể chế kinh tế. Căn cứ Mục 5.2 Slide bài giảng, bạn hãy phân loại các luận điểm vào đúng các khía cạnh thể chế!',
    categories: [
      { 
        id: 'muc_5_2_1', 
        name: 'MỤC 5.2.1: SỰ CẦN THIẾT HOÀN THIỆN THỂ CHẾ', 
        desc: 'Thể chế KTTT định hướng XHCN còn chưa đồng bộ, hệ thống luật pháp chưa đầy đủ, hiệu lực hiệu quả quản lý còn hạn chế', 
        color: '#ef4444' 
      },
      { 
        id: 'muc_5_2_2_a', 
        name: 'MỤC 5.2.2: THỂ CHẾ SỞ HỮU & THÀNH PHẦN KT', 
        desc: 'Thể chế hóa quyền tài sản; đổi mới nâng cao hiệu quả DNNN; tạo môi trường thuận lợi phát triển kinh tế tư nhân bình đẳng', 
        color: '#3b82f6' 
      },
      { 
        id: 'muc_5_2_2_b', 
        name: 'MỤC 5.2.2: ĐỒNG BỘ CÁC LOẠI THỊ TRƯỜNG', 
        desc: 'Hoàn thiện thể chế phát triển thị trường hàng hóa, dịch vụ, tài chính, bất động sản, lao động và khoa học công nghệ', 
        color: '#10b981' 
      },
      { 
        id: 'muc_5_2_2_c', 
        name: 'MỤC 5.2.2: THỂ CHẾ GẮN TĂNG TRƯỞNG & CÔNG BẰNG', 
        desc: 'Thể chế hóa chính sách phân phối, an sinh xã hội, giảm nghèo bền vững và bảo vệ môi trường sinh thái', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_5_2_2_d', 
        name: 'MỤC 5.2.2: NÂNG CAO NĂNG LỰC LÃNH ĐẠO CỦA ĐẢNG', 
        desc: 'Xây dựng Nhà nước kiến tạo phát triển; tăng cường sự lãnh đạo của Đảng và hiệu lực kiểm tra, giám sát của cả hệ thống', 
        color: '#ec4899' 
      }
    ],
    clues: [
      {
        id: 'c4-clue-1',
        text: 'Do thể chế KTTT định hướng XHCN còn chưa đồng bộ, hệ thống luật pháp còn chồng chéo và hiệu lực thực thi chưa cao',
        correctCategory: 'muc_5_2_1',
        hint: 'Lý do cốt lõi khẳng định sự cần thiết phải hoàn thiện thể chế trong Mục 5.2.1.'
      },
      {
        id: 'c4-clue-2',
        text: 'Hoàn thiện luật pháp về đất đai, bảo vệ quyền sở hữu trí tuệ và bảo đảm quyền tự do kinh doanh bình đẳng của mọi thành phần kinh tế',
        correctCategory: 'muc_5_2_2_a',
        hint: 'Nội dung hoàn thiện thể chế về sở hữu và phát triển các thành phần kinh tế.'
      },
      {
        id: 'c4-clue-3',
        text: 'Xây dựng khung pháp lý minh bạch cho thị trường chứng khoán, thị trường trái phiếu, thị trường bất động sản và thị trường lao động',
        correctCategory: 'muc_5_2_2_b',
        hint: 'Nội dung hoàn thiện thể chế phát triển đồng bộ các yếu tố thị trường.'
      },
      {
        id: 'c4-clue-4',
        text: 'Hoàn thiện luật pháp bảo hiểm xã hội, chính sách trợ cấp xã hội và quy chuẩn xả thải môi trường đạt chuẩn bền vững',
        correctCategory: 'muc_5_2_2_c',
        hint: 'Thể chế gắn kết tăng trưởng kinh tế với bảo đảm an sinh và tiến bộ xã hội.'
      },
      {
        id: 'c4-clue-5',
        text: 'Đẩy mạnh cải cách hành chính công, xây dựng Chính phủ liêm chính kiến tạo và thể chế hóa kịp thời các Nghị quyết của Đảng vào pháp luật',
        correctCategory: 'muc_5_2_2_d',
        hint: 'Nâng cao vai trò lãnh đạo của Đảng và năng lực quản trị của Nhà nước pháp quyền.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: Hoàn thiện thể chế là chìa khóa mở đường giải phóng sức sản xuất!',
      concept: 'Mục 5.2: Sự cần thiết và Nội dung hoàn thiện thể chế KTTT định hướng XHCN ở Việt Nam',
      analysis: 'Căn cứ Mục 5.2 Slide bài giảng: Thể chế kinh tế là "luật chơi" quyết định hiệu quả vận hành của nền kinh tế. Sự cần thiết phải hoàn thiện thể chế bắt nguồn từ thực trạng hệ thống thể chế hiện hành chưa đồng bộ và kém hiệu lực. Nội dung hoàn thiện tập trung vào 4 trụ cột: hoàn thiện thể chế sở hữu và thành phần kinh tế; đồng bộ các loại thị trường; gắn tăng trưởng với công bằng xã hội; và nâng cao năng lực lãnh đạo của Đảng, năng lực quản lý của Nhà nước pháp quyền.',
      xpAwarded: 190
    }
  },

  {
    id: 'CASE-005',
    code: 'HỒ SƠ #005',
    chapterBadge: 'CHƯƠNG 6 • MỤC 6.1',
    title: 'Hồ Sơ Công Nghiệp Hóa, Hiện Đại Hóa Ở Việt Nam',
    subtitle: 'Chuẩn Mục 6.1: Khái quát CMCN (6.1.1) & Tính tất yếu, Nội dung CNH - HĐH thích ứng CMCN 4.0 (6.1.2)',
    image: './assets/images/cases/case-c6-industry40.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#06b6d4',
    backgroundStory: 'Trong bối cảnh cuộc Cách mạng công nghiệp lần thứ tư (CMCN 4.0) bùng nổ, nhiều doanh nghiệp sản xuất gia công của Việt Nam đứng trước nguy cơ mất đơn hàng vào tay robot và công nghệ tự động hóa. Đứng trước câu hỏi: Việt Nam có cần công nghiệp hóa nữa không và CNH thời kỳ này có gì khác trước? Hãy đối chiếu Mục 6.1 trong Slide bài giảng Chương 6 để sắp xếp đúng các luận điểm lý luận!',
    categories: [
      { 
        id: 'muc_6_1_1', 
        name: 'MỤC 6.1.1: KHÁI QUÁT VỀ CMCN & CNH', 
        desc: 'Bản chất CMCN là bước nhảy vọt về tư liệu lao động; CNH là quá trình chuyển đổi căn bản từ lao động thủ công sang lao động bằng máy móc', 
        color: '#06b6d4' 
      },
      { 
        id: 'muc_6_1_2_a', 
        name: 'MỤC 6.1.2: TÍNH TẤT YẾU CỦA CNH, HĐH', 
        desc: 'Yêu cầu khách quan xây dựng CSVC-KT cho CNXH, rút ngắn khoảng cách tụt hậu, nâng cao năng suất và bảo vệ độc lập tự chủ', 
        color: '#0284c7' 
      },
      { 
        id: 'muc_6_1_2_b', 
        name: 'MỤC 6.1.2: CHUYỂN DỊCH CƠ CẤU KINH TẾ', 
        desc: 'Tăng nhanh tỷ trọng công nghiệp chế biến chế tạo và dịch vụ công nghệ cao, giảm dần tỷ trọng nông nghiệp truyền thống', 
        color: '#10b981' 
      },
      { 
        id: 'muc_6_1_2_c', 
        name: 'MỤC 6.1.2: NỘI DUNG THÍCH ỨNG CMCN 4.0', 
        desc: 'Đẩy mạnh chuyển đổi số quốc gia, phát triển kinh tế số, xã hội số, ứng dụng trí tuệ nhân tạo (AI), IoT và dữ liệu lớn', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_6_1_2_d', 
        name: 'MỤC 6.1.2: CHIẾN LƯỢC ĐI TẮT ĐÓN ĐẦU & BỀN VỮNG', 
        desc: 'Tận dụng lợi thế nước đi sau, phát triển nguồn nhân lực chất lượng cao, gắn CNH với kinh tế tri thức và tăng trưởng xanh', 
        color: '#ec4899' 
      }
    ],
    clues: [
      {
        id: 'c5-clue-1',
        text: 'Cách mạng công nghiệp là những bước nhảy vọt về chất trình độ của tư liệu lao động, thúc đẩy phân công lao động xã hội và năng suất bứt phá',
        correctCategory: 'muc_6_1_1',
        hint: 'Định nghĩa khái quát về CMCN theo Mục 6.1.1 Slide bài giảng.'
      },
      {
        id: 'c5-clue-2',
        text: 'CNH, HĐH là con đường tất yếu khách quan để thoát khỏi bẫy thu nhập trung bình và xây dựng cơ sở vật chất kỹ thuật cho CNXH',
        correctCategory: 'muc_6_1_2_a',
        hint: 'Luận giải tính tất yếu khách quan trong Mục 6.1.2.'
      },
      {
        id: 'c5-clue-3',
        text: 'Cơ cấu kinh tế chuyển dịch mạnh mẽ theo hướng tăng tỷ trọng ngành công nghiệp chế biến, chế tạo và dịch vụ tri thức hiện đại',
        correctCategory: 'muc_6_1_2_b',
        hint: 'Nội dung cốt lõi về chuyển dịch cơ cấu kinh tế của công nghiệp hóa hiện đại hóa.'
      },
      {
        id: 'c5-clue-4',
        text: 'Thực hiện đồng thời chuyển đổi số toàn diện, phát triển Chính phủ số, kinh tế số và ứng dụng công nghệ thông minh trong sản xuất',
        correctCategory: 'muc_6_1_2_c',
        hint: 'Đặc thù công nghiệp hóa hiện đại hóa ở Việt Nam trong bối cảnh thích ứng CMCN 4.0.'
      },
      {
        id: 'c5-clue-5',
        text: 'Kết hợp tuần tự với đi tắt đón đầu, phát triển nguồn nhân lực công nghệ cao và gắn công nghiệp hóa với bảo vệ môi trường sinh thái bền vững',
        correctCategory: 'muc_6_1_2_d',
        hint: 'Con đường và phương thức thực hiện CNH, HĐH hiệu quả ở nước ta.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: CNH, HĐH thích ứng 4.0 là con đường duy nhất để Việt Nam phát triển bứt phá!',
      concept: 'Mục 6.1: Khái quát CMCN và Tính tất yếu, Nội dung CNH, HĐH ở Việt Nam',
      analysis: 'Theo Mục 6.1 Slide bài giảng Chương 6: Công nghiệp hóa, hiện đại hóa ở Việt Nam là quá trình chuyển đổi căn bản, toàn diện các hoạt động sản xuất kinh doanh từ sử dụng lao động thủ công là chính sang lao động sử dụng phổ biến công nghệ tiên tiến, hiện đại. Trong thời đại CMCN 4.0, Việt Nam không đi theo lộ trình tuần tự cũ mà kết hợp "đi tắt đón đầu", lấy chuyển đổi số, kinh tế tri thức và phát triển bền vững làm động lực then chốt.',
      xpAwarded: 200
    }
  },

  {
    id: 'CASE-006',
    code: 'HỒ SƠ #006',
    chapterBadge: 'CHƯƠNG 6 • MỤC 6.2',
    title: 'Hồ Sơ Hội Nhập Kinh Tế Quốc Tế Của Việt Nam',
    subtitle: 'Chuẩn Mục 6.2: Khái niệm & Hình thức (6.2.1), Tác động (6.2.2) & Phương hướng nâng cao hiệu quả, Độc lập tự chủ (6.2.3)',
    image: './assets/images/cases/case-c6-integration.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#818cf8',
    backgroundStory: 'Hội nhập kinh tế quốc tế mang lại cho nước ta cơ hội mở rộng thị trường xuất khẩu kỷ lục và thu hút hàng trăm tỷ USD vốn đầu tư FDI. Tuy nhiên, đi kèm với đó là sức ép cạnh tranh gay gắt, nguy cơ gian lận xuất xứ hàng hóa và rủi ro bị phụ thuộc vào chuỗi cung ứng bên ngoài. Làm thế nào để vừa hội nhập sâu rộng, vừa giữ vững độc lập tự chủ kinh tế? Hãy phân loại các luận điểm khoa học theo Mục 6.2 Slide bài giảng!',
    categories: [
      { 
        id: 'muc_6_2_1', 
        name: 'MỤC 6.2.1: KHÁI NIỆM & HÌNH THỨC HỘI NHẬP', 
        desc: 'Quá trình chủ động gắn kết kinh tế quốc gia với kinh tế thế giới qua các hình thức song phương, khu vực và đa phương toàn cầu (WTO, FTA)', 
        color: '#818cf8' 
      },
      { 
        id: 'muc_6_2_2_a', 
        name: 'MỤC 6.2.2: TÁC ĐỘNG TÍCH CỰC CỦA HỘI NHẬP', 
        desc: 'Mở rộng thị trường xuất khẩu, thu hút vốn FDI, tiếp thu công nghệ và kỹ năng quản lý, thúc đẩy cải cách thể chế trong nước', 
        color: '#10b981' 
      },
      { 
        id: 'muc_6_2_2_b', 
        name: 'MỤC 6.2.2: THÁCH THỨC & NGUY CƠ RỦI RO', 
        desc: 'Gia tăng cạnh tranh khốc liệt, nguy cơ phụ thuộc chuỗi cung ứng, gian lận thương mại xuất xứ và dễ tổn thương trước khủng hoảng toàn cầu', 
        color: '#ef4444' 
      },
      { 
        id: 'muc_6_2_3_a', 
        name: 'MỤC 6.2.3: XÂY DỰNG NỀN KT ĐỘC LẬP TỰ CHỦ', 
        desc: 'Tự chủ về đường lối phát triển, nâng cao năng lực nội sinh, đa dạng hóa thị trường đối tác để bảo đảm an ninh kinh tế', 
        color: '#f59e0b' 
      },
      { 
        id: 'muc_6_2_3_b', 
        name: 'MỤC 6.2.3: PHƯƠNG HƯỚNG NÂNG CAO HIỆU QUẢ', 
        desc: 'Nâng cao năng lực cạnh tranh quốc gia, hoàn thiện hệ thống phòng vệ thương mại, chủ động hội nhập có chọn lọc và bền vững', 
        color: '#ec4899' 
      }
    ],
    clues: [
      {
        id: 'c6-clue-1',
        text: 'Hội nhập kinh tế quốc tế là quá trình gắn kết nền kinh tế của một quốc gia với kinh tế khu vực và thế giới thông qua các nỗ lực tự do hóa thương mại',
        correctCategory: 'muc_6_2_1',
        hint: 'Khái niệm chuẩn xác được định nghĩa trong Mục 6.2.1 Slide bài giảng.'
      },
      {
        id: 'c6-clue-2',
        text: 'Mở rộng thị trường tiêu thụ hàng hóa cho nông sản, dệt may, điện tử và tạo hàng triệu việc làm nhờ dòng vốn đầu tư trực tiếp nước ngoài (FDI)',
        correctCategory: 'muc_6_2_2_a',
        hint: 'Biểu hiện thực tiễn của tác động tích cực trong Mục 6.2.2.'
      },
      {
        id: 'c6-clue-3',
        text: 'Nhiều doanh nghiệp nhỏ và vừa trong nước có nguy cơ giải thể do không chịu nổi sức ép cạnh tranh từ các tập đoàn đa quốc gia và hàng nhập khẩu giá rẻ',
        correctCategory: 'muc_6_2_2_b',
        hint: 'Tác động tiêu cực và thách thức của hội nhập trong Mục 6.2.2.'
      },
      {
        id: 'c6-clue-4',
        text: 'Xây dựng nền kinh tế độc lập tự chủ là điểm tựa vững chắc để hội nhập hiệu quả, không để nền kinh tế bị lệ thuộc vào bất kỳ một thị trường đơn lẻ nào',
        correctCategory: 'muc_6_2_3_a',
        hint: 'Mối quan hệ biện chứng giữa độc lập tự chủ và hội nhập quốc tế trong Mục 6.2.3.'
      },
      {
        id: 'c6-clue-5',
        text: 'Chủ động hoàn thiện công cụ phòng vệ thương mại, xử lý nghiêm gian lận xuất xứ và đào tạo nguồn nhân lực tinh thông luật thương mại quốc tế',
        correctCategory: 'muc_6_2_3_b',
        hint: 'Phương hướng then chốt nhằm nâng cao hiệu quả hội nhập quốc tế theo Mục 6.2.3.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Phá án thành công: Hội nhập toàn diện phải luôn gắn liền với xây dựng nền kinh tế độc lập tự chủ!',
      concept: 'Mục 6.2: Khái niệm, Hình thức, Tác động và Phương hướng nâng cao hiệu quả Hội nhập KT quốc tế',
      analysis: 'Theo Mục 6.2 Slide bài giảng Chương 6: Hội nhập kinh tế quốc tế là xu thế khách quan của thời đại. Việt Nam chủ động, tích cực hội nhập theo phương châm: đa phương hóa, đa dạng hóa các quan hệ kinh tế quốc tế. Quá trình này đem lại cơ hội phát triển to lớn nhưng cũng đặt ra những thách thức gay gắt. Để hội nhập thành công, Việt Nam phải không ngừng củng cố nội lực, nâng cao năng lực cạnh tranh và kiên quyết giữ vững độc lập tự chủ kinh tế.',
      xpAwarded: 200
    }
  }
];
