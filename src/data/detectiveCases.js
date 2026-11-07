/**
 * HỒ SƠ ĐIỀU TRA KỲ ÁN KINH TẾ (DETECTIVE BUREAU MLN122)
 * Hệ thống hóa 6 đại án kinh tế thực tiễn đối chiếu trực tiếp các chương cốt lõi:
 * - HỒ SƠ #001 (Chương 3 - Mục 3.1): Lý luận C. Mác về Giá trị thặng dư (Nguồn gốc c+v+m & Phương pháp sản xuất GTTD)
 * - HỒ SƠ #002 (Chương 3 - Mục 3.2 & 3.3): Tích lũy tư bản, Cấu tạo hữu cơ (c/v), M&A và Lợi nhuận siêu ngạch
 * - HỒ SƠ #003 (Chương 5 - Mục 5.1): Mô hình KTTT định hướng XHCN & 5 Đặc trưng cốt lõi tại Việt Nam
 * - HỒ SƠ #004 (Chương 5 - Mục 5.2): Hoàn thiện thể chế KTTT định hướng XHCN & Hài hòa các quan hệ lợi ích kinh tế
 * - HỒ SƠ #005 (Chương 6 - Mục 6.1): Công nghiệp hóa, hiện đại hóa thích ứng Cách mạng công nghiệp 4.0
 * - HỒ SƠ #006 (Chương 6 - Mục 6.2): Hội nhập kinh tế quốc tế của Việt Nam, Thời cơ - Thách thức & Độc lập tự chủ
 */

export const DETECTIVE_CASES = [
  {
    id: 'CASE-001',
    code: 'HỒ SƠ #001',
    chapterBadge: 'CHƯƠNG 3 • GIÁ TRỊ THẶNG DƯ',
    title: 'Vụ Án Thuật Toán Nền Tảng Số: Máy Tính Hay Lao Động Sống Tạo Ra Giá Trị?',
    subtitle: 'Bóc tách cấu trúc giá trị (W = c + v + m) và bóc trần ngụy biện bóc lột trong nền kinh tế số',
    image: './assets/images/cases/case-c3-surplus-value.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#0284c7',
    backgroundStory: 'Một tập đoàn siêu ứng dụng gọi xe công nghệ công bố mức lợi nhuận ròng hàng nghìn tỷ đồng mỗi năm. Trong khi đó, hàng vạn tài xế và lập trình viên làm việc cật lực 12-14 tiếng mỗi ngày nhưng thu nhập thực nhận ngày càng teo tóp do bị tăng chiết khấu lên 30%. Ban lãnh đạo công ty tuyên bố: "Khoản lợi nhuận khổng lồ này hoàn toàn do thuật toán trí tuệ nhân tạo (AI) tự động tối ưu sinh ra, không hề bóc lột bất kỳ ai!". Với tư cách là Chuyên gia Điều tra Kinh tế Chính trị MLN122, bạn hãy phân loại các manh mối vào đúng các ngăn phạm trù khoa học để bóc trần bản chất!',
    categories: [
      { id: 'tu_ban_bat_bien', name: 'TƯ BẢN BẤT BIẾN (c)', desc: 'Tư liệu sản xuất, máy chủ đám mây, bản quyền - chỉ bảo tồn và chuyển dịch giá trị', color: '#38bdf8' },
      { id: 'tu_ban_kha_bien', name: 'TƯ BẢN KHẢ BIẾN (v)', desc: 'Chi phí mua hàng hóa sức lao động lập trình viên & tài xế - nguồn gốc sinh giá trị mới', color: '#10b981' },
      { id: 'gia_tri_thang_du', name: 'GIÁ TRỊ THẶNG DƯ (m)', desc: 'Phần giá trị mới dôi ra do sức lao động sống sáng tạo bị chủ nền tảng chiếm đoạt', color: '#f59e0b' },
      { id: 'gttd_tuyet_doi', name: 'SẢN XUẤT GTTD TUYỆT ĐỐI', desc: 'Tăng m bằng cách kéo dài ngày lao động vượt quá thời gian tất yếu (chạy 12-14h/ngày)', color: '#ef4444' },
      { id: 'gttd_tuong_doi', name: 'SẢN XUẤT GTTD TƯƠNG ĐỐI', desc: 'Rút ngắn thời gian lao động tất yếu nhờ ứng dụng thuật toán nâng cao năng suất xã hội', color: '#a855f7' }
    ],
    clues: [
      {
        id: 'c1-clue-1',
        text: 'Hệ thống cụm máy chủ đám mây, cáp quang và văn phòng trụ sở của tập đoàn',
        correctCategory: 'tu_ban_bat_bien',
        hint: 'Bộ phận tư bản tồn tại dưới hình thái tư liệu sản xuất, giá trị không đổi trong sản xuất.'
      },
      {
        id: 'c1-clue-2',
        text: 'Khoản tiền lương và thu nhập thực tế chi trả cho tài xế và kỹ sư sau khi trừ chiết khấu',
        correctCategory: 'tu_ban_kha_bien',
        hint: 'Khoản chi phí biến thành sức lao động sống, có khả năng tăng thêm về giá trị (v + m).'
      },
      {
        id: 'c1-clue-3',
        text: 'Phần giá trị hàng nghìn tỷ dôi ra vượt quá chi phí tái sản xuất sức lao động bị chia cho cổ đông',
        correctCategory: 'gia_tri_thang_du',
        hint: 'Kết tinh thời gian lao động thặng dư không công của người lao động sống.'
      },
      {
        id: 'c1-clue-4',
        text: 'Chính sách thưởng điểm ép tài xế chạy xe liên tục từ 6h sáng đến 23h đêm trên đường phố',
        correctCategory: 'gttd_tuyet_doi',
        hint: 'Kéo dài độ dài tuyệt đối của ngày làm việc khi thời gian tất yếu không đổi.'
      },
      {
        id: 'c1-clue-5',
        text: 'Thuật toán điều phối tự động ghép cuốc xe thần tốc giúp rút ngắn thời gian hoàn vốn tiền lương',
        correctCategory: 'gttd_tuong_doi',
        hint: 'Tăng năng suất lao động xã hội để hạ thấp giá trị sức lao động, tăng tỷ lệ thời gian thặng dư.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Máy tính không tạo ra giá trị, chính lao động sống mới sinh ra m!',
      concept: 'Bản chất Giá trị thặng dư (c + v + m) & Các phương pháp sản xuất GTTD',
      analysis: 'Bằng phương pháp trừu tượng hóa khoa học của C. Mác, điều tra viên đã bóc trần ngụy biện của tập đoàn công nghệ: Máy móc, thuật toán và máy chủ chỉ là Tư bản bất biến (c) - chúng chỉ đóng vai trò phương tiện truyền dẫn giá trị cũ vào sản phẩm chứ không thể tự sinh ra một đồng giá trị mới nào. Toàn bộ khoản siêu lợi nhuận nghìn tỷ bắt nguồn duy nhất từ Tư bản khả biến (v), do sức lao động sống của hàng vạn tài xế và kỹ sư tạo ra thông qua việc kết hợp cả hai phương pháp sản xuất giá trị thặng dư tuyệt đối (vắt kiệt thời gian chạy xe ngoài đường) và giá trị thặng dư tương đối (tối ưu hóa quy trình thuật toán).',
      xpAwarded: 160
    }
  },

  {
    id: 'CASE-002',
    code: 'HỒ SƠ #002',
    chapterBadge: 'CHƯƠNG 3 • TÍCH LŨY TƯ BẢN',
    title: 'Đại Án Thâu Tóm & Tích Lũy Tư Bản: Vòng Xoáy "Cá Lớn Nuốt Cá Bé" & Nạn Nhân Thất Nghiệp 4.0',
    subtitle: 'Giải mã quy luật tích lũy tư bản, cấu tạo hữu cơ (c/v) và sự phân hóa giàu nghèo sâu sắc',
    image: './assets/images/cases/case-c3-accumulation.svg',
    dossierLevel: 'CẤP ĐỘ: TRUNG BÌNH',
    accentColor: '#f59e0b',
    backgroundStory: 'Một tập đoàn bán lẻ thương mại điện tử khổng lồ vừa công bố thương vụ M&A thâu tóm 5 đối thủ cạnh tranh vừa và nhỏ, đồng thời nhập khẩu 5.000 cánh tay robot AI tự động hóa hoàn toàn chuỗi kho bãi thông minh. Ngay sau đó, tập đoàn thông báo cắt giảm 40% lực lượng nhân công bốc dỡ và đóng gói, đẩy hàng nghìn công nhân vào cảnh bấp bênh không việc làm. Tập đoàn tuyên bố: "Đây là quy luật thịnh vượng tất yếu của kinh tế số". Với tư cách là Điều tra viên MLN122, hãy làm sáng tỏ quy luật tích lũy tư bản và sự tăng vọt cấu tạo hữu cơ đằng sau tấn bi kịch này!',
    categories: [
      { id: 'ban_chat_tich_luy', name: 'BẢN CHẤT TÍCH LŨY TƯ BẢN', desc: 'Tái sản xuất mở rộng bằng cách tư bản hóa giá trị thặng dư (biến m thành tư bản phụ thêm)', color: '#f59e0b' },
      { id: 'tich_tu_tap_trung', name: 'TÍCH TỤ & TẬP TRUNG TƯ BẢN', desc: 'Tăng quy mô tư bản qua sáp nhập M&A, thôn tính các đối thủ nhỏ ("cá lớn nuốt cá bé")', color: '#3b82f6' },
      { id: 'cau_tao_huu_co', name: 'CẤU TẠO HỮU CƠ TƯ BẢN (c/v)', desc: 'Tỷ lệ giữa khối lượng tư liệu sản xuất (c) so với số lượng sức lao động (v) tăng vọt', color: '#a855f7' },
      { id: 'that_nghiep_cong_nghiep', name: 'ĐỘI QUÂN THẤT NGHIỆP CÔNG NGHIỆP', desc: 'Dân số thừa tương đối sinh ra tất yếu do tốc độ tăng của v chậm hơn c trong quá trình tích lũy', color: '#ef4444' },
      { id: 'chi_phi_loi_nhuan', name: 'HÌNH THỨC CHI PHÍ (k) & LỢI NHUẬN (p)', desc: 'Công thức W = k + p che giấu thực chất nguồn gốc bóc lột m thành khoản sinh lời của toàn bộ tư bản ứng trước', color: '#10b981' }
    ],
    clues: [
      {
        id: 'c2-clue-1',
        text: 'Trích 70% khoản giá trị thặng dư kiếm được năm ngoái để tiếp tục mua thêm nhà xưởng và công nghệ',
        correctCategory: 'ban_chat_tich_luy',
        hint: 'Biến một phần giá trị thặng dư trở lại thành tư bản để tái sản xuất mở rộng.'
      },
      {
        id: 'c2-clue-2',
        text: 'Chi tiền thôn tính toàn bộ cổ phần chi phối của 5 chuỗi bán lẻ nhỏ đang gặp khó khăn tài chính',
        correctCategory: 'tich_tu_tap_trung',
        hint: 'Tập trung các tư bản cá biệt sẵn có trong xã hội thành một khối tư bản khổng lồ duy nhất.'
      },
      {
        id: 'c2-clue-3',
        text: 'Tỷ lệ chi phí đầu tư máy móc tự động hóa tăng từ tỷ lệ 4:1 lên tới 10:1 so với quỹ lương nhân công',
        correctCategory: 'cau_tao_huu_co',
        hint: 'Cấu tạo giá trị phản ánh sự biến đổi của cấu tạo kỹ thuật tư bản (c/v tăng).'
      },
      {
        id: 'c2-clue-4',
        text: 'Hàng ngàn công nhân đóng gói bị sa thải tạo thành nguồn lao động dự trữ sẵn sàng cạnh tranh hạ giá lương',
        correctCategory: 'that_nghiep_cong_nghiep',
        hint: 'Nạn nhân của quy luật nhân khẩu thừa tương đối trong chủ nghĩa tư bản.'
      },
      {
        id: 'c2-clue-5',
        text: 'Báo cáo tài chính chỉ ghi nhận chi phí sản xuất k = 1.000 tỷ và lợi nhuận p = 300 tỷ để che giấu bóc lột',
        correctCategory: 'chi_phi_loi_nhuan',
        hint: 'Sự chuyển hóa của m thành p xóa nhòa ranh giới giữa c và v, che đậy bản chất nguồn gốc thặng dư.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Tích lũy tư bản tích tụ của cải ở một cực, tích lũy bần cùng và thất nghiệp ở cực đối lập!',
      concept: 'Quy luật Tích lũy Tư bản & Cấu tạo Hữu cơ (c/v) trong nền kinh tế thị trường',
      analysis: 'Bản kết luận điều tra đã làm sáng tỏ quy luật chung của tích lũy tư bản do C. Mác phát hiện: Khi quy mô tích lũy càng lớn và khoa học kỹ thuật càng phát triển, cấu tạo hữu cơ của tư bản (c/v) không ngừng tăng lên. Điều này đồng nghĩa với việc phần tư bản dùng để mua sắm thiết bị tự động (c) tăng vọt, trong khi phần chi trả cho sức lao động sống (v) giảm đi một cách tương đối. Hệ quả tất yếu là sinh ra "Đội quân thất nghiệp công nghiệp" (dân số thừa tương đối), dẫn đến sự phân hóa sâu sắc: của cải kếch xù tích tụ vào tay thiểu số tư bản độc quyền, còn người lao động lại chịu nguy cơ thất nghiệp và bấp bênh!',
      xpAwarded: 170
    }
  },

  {
    id: 'CASE-003',
    code: 'HỒ SƠ #003',
    chapterBadge: 'CHƯƠNG 5 • KTTT ĐỊNH HƯỚNG XHCN',
    title: 'Kỳ Án Thị Trường Định Hướng XHCN: Phát Triển Kinh Tế Tư Nhân Đi Đôi Với Giữ Vững An Sinh Xã Hội',
    subtitle: 'Giải mã tính tất yếu khách quan và 5 đặc trưng bản chất của nền KTTT định hướng XHCN ở Việt Nam',
    image: './assets/images/cases/case-c5-socialist-market.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#10b981',
    backgroundStory: 'Khi thảo luận về mô hình phát triển kinh tế của Việt Nam, một nhóm chuyên gia tranh luận gay gắt: Nhánh thứ nhất cho rằng "đã kinh tế thị trường thì phải tự do tư nhân hóa hoàn toàn như phương Tây, thả nổi y tế, giáo dục theo túi tiền người dân"; Nhánh thứ hai lại muốn "quay lại thời bao cấp nhà nước bao trọn gói để bảo đảm bình quân tuyệt đối"; Nhánh thứ ba khẳng định: Con đường KTTT định hướng XHCN của Việt Nam là sự kết hợp sáng tạo giữa tính năng động thị trường với mục tiêu nhân văn XHCN. Hãy phân loại các manh mối vào đúng 5 đặc trưng trụ cột của mô hình Việt Nam!',
    categories: [
      { id: 'dac_trung_muc_tieu', name: '1. MỤC TIÊU KINH TẾ - XÃ HỘI', desc: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh; giải phóng sức sản xuất vì con người', color: '#0ea5e9' },
      { id: 'dac_trung_so_huu', name: '2. QUAN HỆ SỞ HỮU & THÀNH PHẦN KT', desc: 'Kinh tế nhà nước giữ vai trò chủ đạo, kinh tế tư nhân là động lực quan trọng của nền kinh tế', color: '#10b981' },
      { id: 'dac_trung_quan_ly', name: '3. QUAN HỆ QUẢN LÝ CỦA NHÀ NƯỚC', desc: 'Nhà nước pháp quyền XHCN kiến tạo phát triển dưới sự lãnh đạo của Đảng Cộng sản Việt Nam', color: '#f59e0b' },
      { id: 'dac_trung_phan_phoi', name: '4. QUAN HỆ PHÂN PHỐI THU NHẬP', desc: 'Phân phối chủ yếu theo kết quả lao động & hiệu quả kinh tế, kết hợp đóng góp vốn và an sinh', color: '#a855f7' },
      { id: 'dac_trung_cong_bang', name: '5. GẮN TĂNG TRƯỞNG VỚI CÔNG BẰNG', desc: 'Không hy sinh công bằng xã hội và môi trường chạy theo tăng trưởng đơn thuần; tiến bộ trong từng bước', color: '#ef4444' }
    ],
    clues: [
      {
        id: 'c3-clue-1',
        text: 'Nỗ lực nâng cao đời sống vật chất và tinh thần cho toàn thể nhân dân, hướng tới "dân giàu, nước mạnh"',
        correctCategory: 'dac_trung_muc_tieu',
        hint: 'Mục đích tối thượng của sự phát triển kinh tế thị trường tại Việt Nam.'
      },
      {
        id: 'c3-clue-2',
        text: 'Tập đoàn Điện lực, Viễn thông Quốc gia nắm giữ hạ tầng huyết mạch trong khi khuyến khích kinh tế tư nhân',
        correctCategory: 'dac_trung_so_huu',
        hint: 'Phối hợp nhiều hình thức sở hữu, kinh tế nhà nước giữ mạch máu dẫn dắt nền kinh tế.'
      },
      {
        id: 'c3-clue-3',
        text: 'Chiến lược phát triển KTXH 10 năm do Đại hội Đảng đề ra và Chính phủ điều hành bằng pháp luật minh bạch',
        correctCategory: 'dac_trung_quan_ly',
        hint: 'Bàn tay hữu hình của Nhà nước pháp quyền dưới sự dẫn đường lý luận của Đảng.'
      },
      {
        id: 'c3-clue-4',
        text: 'Kỹ sư tay nghề cao nhận lương theo năng suất, nông dân nhận bảo tức cổ phần và hộ nghèo nhận trợ cấp BHYT',
        correctCategory: 'dac_trung_phan_phoi',
        hint: 'Cơ chế kết hợp hài hòa phân phối theo lao động và hệ thống an sinh xã hội rộng khắp.'
      },
      {
        id: 'c3-clue-5',
        text: 'Chương trình mục tiêu quốc gia giảm nghèo bền vững và xây dựng nông thôn mới triển khai đồng thời tăng trưởng GDP',
        correctCategory: 'dac_trung_cong_bang',
        hint: 'Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước đi chứ không chờ kinh tế giàu mới làm.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: KTTT định hướng XHCN không phải sự chắp vá khiên cưỡng mà là tất yếu lịch sử!',
      concept: 'Khái niệm, Tính tất yếu & 5 Đặc trưng của KTTT Định hướng XHCN (Chương 5)',
      analysis: 'Bản kết luận điều tra khẳng định nguyên lý cơ bản của Kinh tế chính trị Mác – Lênin tại Việt Nam: KTTT định hướng XHCN là mô hình kinh tế tổng quát trong thời kỳ quá độ lên chủ nghĩa xã hội. Nó vừa kế thừa quy luật vận hành khách quan của kinh tế thị trường (cung cầu, cạnh tranh, giá trị), vừa phát huy bản chất ưu việt của chế độ XHCN (do nhân dân làm chủ, nhà nước dẫn dắt vì mục tiêu phụng sự con người, không để ai bị bỏ lại phía sau). Đây là bước đột phá lý luận của Đảng Cộng sản Việt Nam, vượt qua cả bẫy tự do hóa tư bản lẫn cạm bẫy quan liêu bao cấp.',
      xpAwarded: 180
    }
  },

  {
    id: 'CASE-004',
    code: 'HỒ SƠ #004',
    chapterBadge: 'CHƯƠNG 5 • HOÀN THIỆN THỂ CHẾ',
    title: 'Đại Án Thao Túng Thị Trường & Hoàn Thiện Thể Chế Kinh Tế Thị Trường Định Hướng XHCN',
    subtitle: 'Giải mã sự cần thiết hoàn thiện thể chế kinh tế, minh bạch hóa các loại thị trường và điều hòa lợi ích',
    image: './assets/images/cases/case-c5-institutions.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#ec4899',
    backgroundStory: 'Một vụ thao túng thị trường chứng khoán và phát hành trái phiếu "ma" của một tập đoàn bất động sản lớn vừa bị phanh phui. Doanh nghiệp này lợi dụng kẽ hở pháp lý, dùng các công ty con "sân sau" thổi khống giá trị tài sản bảo đảm lên gấp 10 lần, chiếm dụng vốn của hàng chục nghìn nhà đầu tư nhỏ lẻ và gây nguy cơ đổ vỡ hệ thống tài chính tín dụng. Vụ án gióng lên hồi chuông cảnh báo về sự cấp thiết phải hoàn thiện thể chế KTTT định hướng XHCN. Hãy phân loại các manh mối vào đúng các khía cạnh chủ yếu của công tác hoàn thiện thể chế!',
    categories: [
      { id: 'the_che_so_huu', name: 'HOÀN THIỆN THỂ CHẾ SỞ HỮU', desc: 'Xác lập minh bạch quyền sở hữu tài sản, ngăn chặn hành vi thôn tính đất đai công và trục lợi "sân sau"', color: '#3b82f6' },
      { id: 'the_che_thi_truong', name: 'ĐỒNG BỘ CÁC LOẠI THỊ TRƯỜNG', desc: 'Hoàn thiện khung pháp lý minh bạch cho thị trường tài chính, chứng khoán, bất động sản, lao động & KHCN', color: '#10b981' },
      { id: 'hai_hoa_loi_ich', name: 'HÀI HÒA CÁC QUAN HỆ LỢI ÍCH', desc: 'Ngăn chặn xung đột giữa lợi ích nhóm vị kỷ với lợi ích chính đáng của người lao động và toàn xã hội', color: '#f59e0b' },
      { id: 'nang_luc_quan_tri', name: 'NÂNG CAO NĂNG LỰC QUẢN TRỊ CÔNG', desc: 'Tăng cường hiệu lực thanh tra, giám sát thị trường của Nhà nước, đẩy lùi tiêu cực và tham nhũng chính sách', color: '#ef4444' },
      { id: 'lanh_dao_cua_dang', name: 'TĂNG CƯỜNG SỰ LÃNH ĐẠO CỦA ĐẢNG', desc: 'Thể chế hóa kịp thời các Nghị quyết của Đảng về hoàn thiện thể chế kinh tế thành pháp luật đồng bộ', color: '#ec4899' }
    ],
    clues: [
      {
        id: 'c4-clue-1',
        text: 'Quy định định giá đất đai sát giá thị trường, bắt buộc đấu giá công khai quyền sử dụng đất công sản',
        correctCategory: 'the_che_so_huu',
        hint: 'Thể chế hóa quyền sở hữu toàn dân về đất đai do Nhà nước đại diện chủ sở hữu.'
      },
      {
        id: 'c4-clue-2',
        text: 'Nâng chuẩn phát hành trái phiếu doanh nghiệp riêng lẻ và chế tài kiểm toán độc lập trên sàn giao dịch',
        correctCategory: 'the_che_thi_truong',
        hint: 'Bảo đảm thị trường vốn và chứng khoán vận hành công khai, minh bạch, an toàn.'
      },
      {
        id: 'c4-clue-3',
        text: 'Bảo vệ quyền lợi nhà đầu tư nhỏ và buộc tập đoàn đền bù thiệt hại cho khách hàng bị lừa đảo tài chính',
        correctCategory: 'hai_hoa_loi_ich',
        hint: 'Điều hòa lợi ích kinh tế, không để lợi ích tập đoàn chà đạp lên đời sống người dân.'
      },
      {
        id: 'c4-clue-4',
        text: 'Kiểm toán Nhà nước và Thanh tra Chính phủ chủ động phát hiện các kẽ hở gian lận tín dụng ngân hàng',
        correctCategory: 'nang_luc_quan_tri',
        hint: 'Năng lực điều hành vĩ mô và công cụ pháp quyền giám sát thị trường của cơ quan công quyền.'
      },
      {
        id: 'c4-clue-5',
        text: 'Nghị quyết Trung ương 5 Khóa XII về hoàn thiện thể chế KTTT định hướng XHCN được Quốc hội luật hóa',
        correctCategory: 'lanh_dao_cua_dang',
        hint: 'Vai trò hạt nhân lãnh đạo của Đảng Cộng sản trong định hướng phát triển thể chế kinh tế.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Thể chế là điểm nghẽn của điểm nghẽn, hoàn thiện thể chế mở đường cho thị trường lành mạnh!',
      concept: 'Nội dung và Sự cần thiết Hoàn thiện Thể chế KTTT Định hướng XHCN (Mục 5.2)',
      analysis: 'Bản kết luận điều tra đúc kết sâu sắc kiến thức Mục 5.2 Giáo trình MLN122: Thể chế kinh tế không chỉ là những văn bản luật pháp khô cứng, mà là hệ thống quy tắc, luật lệ, cơ chế vận hành và chuẩn mực xã hội điều chỉnh hành vi của các chủ thể kinh tế. Việc hoàn thiện thể chế sở hữu, phát triển đồng bộ các loại thị trường và nâng cao vai trò giám sát của Nhà nước là yêu cầu khách quan cấp bách nhằm bịt kín các lỗ hổng trục lợi, chống "chủ nghĩa tư bản thân hữu" (crony capitalism), bảo vệ lợi ích hợp pháp của nhân dân và giữ vững bản chất định hướng XHCN của nền kinh tế.',
      xpAwarded: 190
    }
  },

  {
    id: 'CASE-005',
    code: 'HỒ SƠ #005',
    chapterBadge: 'CHƯƠNG 6 • CÔNG NGHIỆP HÓA 4.0',
    title: 'Thách Thức Công Nghiệp Hóa 4.0: Bẫy Gia Công Hay Thời Cơ Đột Phá Đi Tắt Đón Đầu?',
    subtitle: 'Khám phá tính tất yếu khách quan, nội dung CNH - HĐH và chiến lược chuyển đổi số quốc gia',
    image: './assets/images/cases/case-c6-industry40.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#06b6d4',
    backgroundStory: 'Một tổ hợp nhà máy may mặc và gia công điện tử với 20.000 công nhân bất ngờ bị đối tác quốc tế hủy hợp đồng chuyển đơn hàng sang các nước có giá nhân công thấp hơn và các nhà máy ứng dụng cánh tay robot AI. Lãnh đạo hiệp hội doanh nghiệp đứng trước ngã rẽ sống còn: Hoặc tiếp tục hạ giá nhân công để níu kéo gia công giá rẻ và đối mặt nguy cơ "bẫy thu nhập trung bình", hoặc quyết liệt chuyển đổi số, đầu tư công nghệ cao và tự chủ chuỗi cung ứng. Hãy phân loại các manh mối vào các nội dung CNH, HĐH thích ứng với Cách mạng công nghiệp 4.0!',
    categories: [
      { id: 'dac_trung_cmcn40', name: 'ĐẶC TRƯNG CỦA CMCN 4.0', desc: 'Đột phá về Trí tuệ nhân tạo (AI), Internet vạn vật (IoT), Dữ liệu lớn (Big Data) và điện toán đám mây', color: '#06b6d4' },
      { id: 'tat_yeu_cnh_hdh', name: 'TÍNH TẤT YẾU KHÁCH QUAN', desc: 'Xây dựng cơ sở vật chất - kỹ thuật, nâng cao năng suất xã hội, chống nguy cơ tụt hậu xa hơn về kinh tế', color: '#0284c7' },
      { id: 'chuyen_dich_co_cau', name: 'CHUYỂN DỊCH CƠ CẤU KINH TẾ', desc: 'Tăng nhanh tỷ trọng công nghiệp chế biến chế tạo và dịch vụ số, giảm dần tỷ trọng nông nghiệp truyền thống', color: '#10b981' },
      { id: 'di_tat_don_dau', name: 'CHIẾN LƯỢC ĐI TẮT ĐÓN ĐẦU', desc: 'Phát triển kinh tế số, xã hội số, đào tạo nhân lực CNTT chất lượng cao, tận dụng lợi thế nước đi sau', color: '#f59e0b' },
      { id: 'phat_trien_ben_vung', name: 'GẮN VỚI KINH TẾ TRI THỨC & XANH', desc: 'CNH, HĐH phải gắn liền với bảo vệ môi trường, tiết kiệm tài nguyên và hướng tới phát thải ròng bằng 0 (Net Zero)', color: '#ec4899' }
    ],
    clues: [
      {
        id: 'c5-clue-1',
        text: 'Dây chuyền tự động hóa kết nối cảm biến IoT kiểm soát lỗi vi mạch với độ chính xác tuyệt đối 99.9%',
        correctCategory: 'dac_trung_cmcn40',
        hint: 'Biểu hiện công nghệ cốt lõi của làn sóng Cách mạng công nghiệp lần thứ tư.'
      },
      {
        id: 'c5-clue-2',
        text: 'Nhu cầu xây dựng nền tảng công nghiệp tự chủ để Việt Nam không bị kẹt mãi ở vị thế làm thuê gia công',
        correctCategory: 'tat_yeu_cnh_hdh',
        hint: 'Đòi hỏi sống còn để xây dựng cơ sở vật chất kỹ thuật cho chủ nghĩa xã hội.'
      },
      {
        id: 'c5-clue-3',
        text: 'Chuyển đổi nhà máy từ gia công dệt may sang sản xuất chip bán dẫn và thiết bị viễn thông công nghệ cao',
        correctCategory: 'chuyen_dich_co_cau',
        hint: 'Tái cấu trúc tỷ trọng các ngành theo hướng công nghiệp hiện đại hóa giá trị gia tăng cao.'
      },
      {
        id: 'c5-clue-4',
        text: 'Chính sách đào tạo 50.000 kỹ sư vi mạch bán dẫn và phổ cập thanh toán số không dùng tiền mặt toàn quốc',
        correctCategory: 'di_tat_don_dau',
        hint: 'Bước nhảy vọt vào các ngành công nghệ mũi nhọn đón đầu làn sóng 4.0.'
      },
      {
        id: 'c5-clue-5',
        text: 'Lắp đặt hệ thống điện mặt trời mái nhà và quy chuẩn tuần hoàn nước thải công nghiệp đạt chuẩn ESG xanh',
        correctCategory: 'phat_trien_ben_vung',
        hint: 'Nội dung công nghiệp hóa hiện đại hóa hiện đại gắn với phát triển sinh thái bền vững.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: CNH, HĐH trong kỷ nguyên 4.0 là mệnh lệnh sống còn để vượt qua bẫy thu nhập trung bình!',
      concept: 'Cách mạng Công nghiệp & Nội dung CNH, HĐH ở Việt Nam (Mục 6.1)',
      analysis: 'Bản kết luận điều tra khẳng định luận điểm trung tâm của Chương 6: Công nghiệp hóa, hiện đại hóa ở Việt Nam thời kỳ mới không đơn thuần là lặp lại con đường cơ khí hóa cổ điển của các nước đi trước. Dưới tác động mạnh mẽ của CMCN 4.0, Việt Nam phải thực hiện đồng thời hai nhiệm vụ: vừa tiếp tục hoàn thành các nhiệm vụ công nghiệp hóa truyền thống, vừa tranh thủ thời cơ "đi tắt đón đầu" phát triển kinh tế số, kinh tế tri thức và công nghệ cao. Con đường duy nhất để giải phóng người lao động khỏi cái bẫy gia công giá rẻ là làm chủ tri thức và công nghệ sản xuất hiện đại.',
      xpAwarded: 200
    }
  },

  {
    id: 'CASE-006',
    code: 'HỒ SƠ #006',
    chapterBadge: 'CHƯƠNG 6 • HỘI NHẬP QUỐC TẾ',
    title: 'Đại Án "Đội Lốt" Xuất Xứ & Bản Lĩnh Hội Nhập Kinh Tế Quốc Tế Độc Lập Tự Chủ',
    subtitle: 'Giải mã thời cơ, thách thức và phương hướng xây dựng nền kinh tế tự chủ trong thế giới phẳng',
    image: './assets/images/cases/case-c6-integration.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#818cf8',
    backgroundStory: 'Một doanh nghiệp có vốn đầu tư nước ngoài (FDI) bị lực lượng Hải quan phát hiện nhập khẩu linh kiện pin năng lượng mặt trời hoàn chỉnh từ nước ngoài, sau đó dán nhãn "Made in Vietnam" để gian lận xuất xứ hòng lẩn tránh mức thuế chống bán phá giá 35% khi xuất sang thị trường Mỹ và Liên minh Châu Âu (EU). Vụ gian lận thương mại quy mô hàng trăm triệu USD này không chỉ đe dọa các doanh nghiệp chân chính của Việt Nam bị vạ lây trừng phạt thương mại, mà còn bộc lộ những thách thức khốc liệt của quá trình hội nhập quốc tế. Hãy phân loại các manh mối vào đúng các khía cạnh của hội nhập kinh tế quốc tế!',
    categories: [
      { id: 'hinh_thuc_hoi_nhap', name: 'CÁC HÌNH THỨC HỘI NHẬP QUỐC TẾ', desc: 'Tham gia các định chế thương mại đa phương WTO, các FTA thế hệ mới như CPTPP, EVFTA, RCEP', color: '#818cf8' },
      { id: 'tac_dong_tich_cuc', name: 'TÁC ĐỘNG TÍCH CỰC CỦA HỘI NHẬP', desc: 'Mở rộng thị trường xuất khẩu, thu hút vốn FDI công nghệ cao, tiếp thu tri thức quản trị hiện đại', color: '#10b981' },
      { id: 'thach_thuc_rui_ro', name: 'THÁCH THỨC & NGUY CƠ RỦI RO', desc: 'Cạnh tranh khốc liệt, nguy cơ trở thành bãi thải công nghệ cũ, gian lận xuất xứ và phụ thuộc bên ngoài', color: '#ef4444' },
      { id: 'doc_lap_tu_chu', name: 'XÂY DỰNG NỀN KT ĐỘC LẬP TỰ CHỦ', desc: 'Giữ vững tự chủ về đường lối, đa dạng hóa thị trường đối tác, không để lệ thuộc vào một nền kinh tế duy nhất', color: '#f59e0b' },
      { id: 'phuong_huong_nang_cao', name: 'PHƯƠNG HƯỚNG NÂNG CAO HIỆU QUẢ', desc: 'Nâng cao năng lực cạnh tranh quốc gia, hoàn thiện công cụ phòng vệ thương mại và năng lực nội sinh', color: '#ec4899' }
    ],
    clues: [
      {
        id: 'c6-clue-1',
        text: 'Ký kết và tận dụng ưu đãi thuế quan 0% từ Hiệp định thương mại tự do Việt Nam - EU (EVFTA)',
        correctCategory: 'hinh_thuc_hoi_nhap',
        hint: 'Biểu hiện hội nhập kinh tế khu vực và thế giới thông qua các hiệp định thương mại song phương/đa phương.'
      },
      {
        id: 'c6-clue-2',
        text: 'Kim ngạch xuất khẩu của Việt Nam tăng trưởng vượt mốc 370 tỷ USD nhờ mở cửa thị trường toàn cầu',
        correctCategory: 'tac_dong_tich_cuc',
        hint: 'Cơ hội vàng mở rộng quy mô tiêu thụ hàng hóa và tích lũy ngoại tệ cho đất nước.'
      },
      {
        id: 'c6-clue-3',
        text: 'Thủ đoạn gian lận xuất xứ hàng hóa khiến toàn ngành sản xuất trong nước đối mặt nguy cơ bị áp thuế trừng phạt',
        correctCategory: 'thach_thuc_rui_ro',
        hint: 'Mặt trái và cạm bẫy thương mại quốc tế đe dọa chuỗi cung ứng xuất khẩu.'
      },
      {
        id: 'c6-clue-4',
        text: 'Tự chủ công nghệ sản xuất phôi thép và linh kiện cốt lõi trong nước, không phụ thuộc duy nhất vào một thị trường cung ứng',
        correctCategory: 'doc_lap_tu_chu',
        hint: 'Năng lực nội sinh và sự kiên cường tự chủ bảo đảm an ninh kinh tế quốc gia.'
      },
      {
        id: 'c6-clue-5',
        text: 'Bộ Công Thương chủ động thiết lập hệ thống cảnh báo sớm điều tra chống lẩn tránh phòng vệ thương mại',
        correctCategory: 'phuong_huong_nang_cao',
        hint: 'Công cụ pháp lý và thể chế chủ động nâng cao hiệu quả bảo vệ lợi ích quốc gia khi hội nhập.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Hội nhập sâu rộng phải luôn đi đôi với giữ vững độc lập, tự chủ kinh tế!',
      concept: 'Hội nhập Kinh tế Quốc tế & Xây dựng Nền kinh tế Độc lập Tự chủ (Mục 6.2)',
      analysis: 'Bản kết luận điều tra đúc kết bài học đắt giá của Mục 6.2 Chương 6: Hội nhập kinh tế quốc tế là xu thế khách quan của thời đại, mở ra chân trời phát triển to lớn nhưng cũng tiềm ẩn vô vàn cạm bẫy và rủi ro khôn lường. Trong thế giới toàn cầu hóa biến động, Việt Nam phải thực hiện nhất quán đường lối: "Hội nhập quốc tế toàn diện, sâu rộng nhưng phải giữ vững độc lập, tự chủ và định hướng XHCN". Độc lập tự chủ là điểm tựa, là nền tảng để hội nhập thành công; ngược lại, hội nhập hiệu quả sẽ tạo thêm nguồn lực để củng cố nền độc lập tự chủ của đất nước.',
      xpAwarded: 200
    }
  }
];
