export const DETECTIVE_CASES = [
  {
    id: 'CASE-001',
    code: 'HỒ SƠ #001',
    title: 'Vụ Án Siêu Lợi Nhuận Của Nền Tảng Công Nghệ Gọi Xe',
    subtitle: 'Bóc tách cấu trúc giá trị (c + v + m) và bóc lột trong nền kinh tế số',
    image: './assets/images/cases/case-ai-labor.svg',
    dossierLevel: 'CẤP ĐỘ: CƠ BẢN',
    accentColor: '#0284c7',
    backgroundStory: 'Một ứng dụng gọi xe công nghệ công bố mức lợi nhuận ròng hàng nghìn tỷ đồng mỗi năm. Trong khi đó, hàng vạn tài xế và lập trình viên làm việc 12-14 tiếng mỗi ngày nhưng thu nhập ngày càng teo tóp do bị tăng chiết khấu lên 30%. Lãnh đạo công ty tuyên bố: "Lợi nhuận này hoàn toàn do thuật toán máy tính tự sinh ra, không hề bóc lột ai!". Với tư cách là Chuyên gia Điều tra Kinh tế Chính trị MLN122, bạn hãy phân loại các manh mối vào đúng các ngăn phạm trù khoa học để bóc trần bản chất!',
    categories: [
      { id: 'tu_ban_bat_bien', name: 'TƯ BẢN BẤT BIẾN (c)', desc: 'Tư liệu sản xuất, máy chủ, thuật toán, văn phòng - chỉ chuyển dịch giá trị', color: '#38bdf8' },
      { id: 'tu_ban_kha_bien', name: 'TƯ BẢN KHẢ BIẾN (v)', desc: 'Chi phí mua hàng hóa sức lao động (tiền lương, thu nhập thực nhận)', color: '#10b981' },
      { id: 'gia_tri_thang_du', name: 'GIÁ TRỊ THẶNG DƯ (m)', desc: 'Phần giá trị mới dôi ra do lao động sống sáng tạo bị tư bản chiếm đoạt', color: '#f59e0b' },
      { id: 'gia_ca_doc_quyen', name: 'GIÁ CẢ ĐỘC QUYỀN', desc: 'Mức giá và mức chiết khấu 30% áp đặt nhờ vị thế thống lĩnh thị trường', color: '#a855f7' },
      { id: 'loi_nhuan_doc_quyen', name: 'LỢI NHUẬN ĐỘC QUYỀN', desc: 'Mức lợi nhuận siêu ngạch cao hơn lợi nhuận bình quân nhờ vị thế độc quyền', color: '#ef4444' }
    ],
    clues: [
      {
        id: 'clue-1',
        text: 'Hệ thống cụm máy chủ đám mây, bản quyền phần mềm và tòa nhà văn phòng của công ty',
        correctCategory: 'tu_ban_bat_bien',
        hint: 'Tư liệu sản xuất giá trị không đổi trong quá trình sản xuất, chỉ chuyển dịch vào sản phẩm.'
      },
      {
        id: 'clue-2',
        text: 'Khoản tiền công và thu nhập ròng chi trả cho đội ngũ tài xế và kỹ sư sau khi khấu trừ',
        correctCategory: 'tu_ban_kha_bien',
        hint: 'Khoản chi phí biến thành sức lao động sống, có khả năng tăng thêm về giá trị.'
      },
      {
        id: 'clue-3',
        text: 'Thời gian lao động thặng dư ngoài 4 tiếng tất yếu mà tài xế và kỹ sư cống hiến cho nền tảng',
        correctCategory: 'gia_tri_thang_du',
        hint: 'Nguồn gốc thực sự sáng tạo ra lượng giá trị dôi ra vượt quá tiền công tái sản xuất sức lao động.'
      },
      {
        id: 'clue-4',
        text: 'Chính sách áp mức phí chiết khấu 30% đối với mỗi cuốc xe dựa trên vị thế khống chế thị phần',
        correctCategory: 'gia_ca_doc_quyen',
        hint: 'Giá cả chênh lệch lớn so với giá trị thực tế do các tập đoàn độc quyền tự định đoạt.'
      },
      {
        id: 'clue-5',
        text: 'Khoản siêu lợi nhuận nghìn tỷ chia cổ tức cho các cổ đông sáng lập vượt trội mức bình quân',
        correctCategory: 'loi_nhuan_doc_quyen',
        hint: 'Hình thức chuyển hóa của giá trị thặng dư siêu ngạch trong giai đoạn độc quyền tư bản.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Máy tính không tạo ra giá trị, chính lao động sống mới tạo ra m!',
      concept: 'Bản chất Giá trị thặng dư (m) & Độc quyền trong nền kinh tế số',
      analysis: 'Bằng phương pháp phân tích của C. Mác và V.I. Lênin, điều tra viên đã chứng minh rõ: Hệ thống máy chủ và thuật toán chỉ là Tư bản bất biến (c), giá trị của nó chỉ được bảo tồn và chuyển dịch dần. Nguồn gốc của khoản siêu lợi nhuận nghìn tỷ hoàn toàn bắt nguồn từ Giá trị thặng dư (m) do hàng vạn giờ lao động thặng dư của tài xế và kỹ sư (v) tạo ra, kết hợp với cơ chế Giá cả độc quyền nhờ vị thế thống lĩnh.',
      xpAwarded: 150
    }
  },
  {
    id: 'CASE-002',
    code: 'HỒ SƠ #002',
    title: 'Nghịch Lý Khủng Hoảng Nông Sản: "Được Mùa Rớt Giá & Giải Cứu"',
    subtitle: 'Giải mã sự tác động của các quy luật kinh tế thị trường căn bản',
    image: './assets/images/cases/case-startup-crisis.svg',
    dossierLevel: 'CẤP ĐỘ: TRUNG BÌNH',
    accentColor: '#10b981',
    backgroundStory: 'Một tỉnh miền Tây vừa trải qua vụ thu hoạch thanh long bội thu kỷ lục. Thế nhưng thay vì ăn mừng, hàng nghìn nhà vườn bật khóc vì giá bán tụt dốc từ 35.000đ/kg xuống chỉ còn 1.500đ/kg, không đủ tiền thuê người hái. Các chiến dịch "giải cứu thanh long" nở rộ khắp các thành phố lớn. Tại sao "được mùa" lại biến thành thảm họa kinh tế? Hãy phân loại các manh mối vào đúng các Quy luật kinh tế thị trường chi phối!',
    categories: [
      { id: 'quy_luat_gia_tri', name: 'QUY LUẬT GIÁ TRỊ', desc: 'Hao phí cá biệt cao hơn hao phí xã hội; giá cả vận động xoay quanh giá trị', color: '#f59e0b' },
      { id: 'quy_luat_cung_cau', name: 'QUY LUẬT CUNG - CẦU', desc: 'Sản lượng cung vượt xa nhu cầu có khả năng thanh toán khiến giá lao dốc', color: '#38bdf8' },
      { id: 'quy_luat_canh_tranh', name: 'QUY LUẬT CẠNH TRANH', desc: 'Cạnh tranh nội bộ người bán khiến thương lái ép giá và dìm giá lẫn nhau', color: '#ef4444' },
      { id: 'quy_luat_tien_te', name: 'LƯU THÔNG TIỀN TỆ & TÍN DỤNG', desc: 'Nông dân vướng nợ vay tín dụng nóng buộc phải bán tháo lấy tiền mặt gấp', color: '#a855f7' },
      { id: 'dieu_tiet_nha_nuoc', name: 'ĐIỀU TIẾT CỦA NHÀ NƯỚC', desc: 'Quy hoạch vùng trồng, hỗ trợ kho lạnh chế biến sâu và đàm phán mở cửa thị trường', color: '#10b981' }
    ],
    clues: [
      {
        id: 'clue-1',
        text: 'Nông dân tự phát chặt cây ăn trái khác trồng ồ ạt thanh long khiến chi phí cá biệt không tối ưu',
        correctCategory: 'quy_luat_gia_tri',
        hint: 'Yêu cầu hao phí lao động cá biệt phải phù hợp với hao phí lao động xã hội cần thiết.'
      },
      {
        id: 'clue-2',
        text: 'Sản lượng thu hoạch cùng một thời điểm vượt quá gấp 4 lần dung lượng tiêu thụ của thị trường',
        correctCategory: 'quy_luat_cung_cau',
        hint: 'Quan hệ mất cân đối giữa lượng hàng đem bán và nhu cầu có khả năng thanh toán.'
      },
      {
        id: 'clue-3',
        text: 'Hàng trăm thương lái ép giá nhà vườn và người trồng cạnh tranh bán tháo trước khi quả thối rữa',
        correctCategory: 'quy_luat_canh_tranh',
        hint: 'Sự ganh đua kinh tế giữa những người bán trong cùng ngành dẫn tới dìm giá.'
      },
      {
        id: 'clue-4',
        text: 'Các khoản vay ngân hàng và nợ phân bón đến hạn đòi hỏi phải có tiền mặt thanh toán ngay',
        correctCategory: 'quy_luat_tien_te',
        hint: 'Chức năng phương tiện thanh toán của tiền tệ và áp lực thanh khoản tín dụng.'
      },
      {
        id: 'clue-5',
        text: 'Chính sách xây dựng kho bảo quản lạnh, chế biến sấy khô xuất khẩu và cấp mã số vùng trồng chính ngạch',
        correctCategory: 'dieu_tiet_nha_nuoc',
        hint: 'Bàn tay hữu hình can thiệp sửa chữa khuyết tật tự phát của thị trường tự do.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Giải cứu chỉ là tạm thời, quy luật giá trị và quy hoạch mới là gốc rễ!',
      concept: 'Quy luật Giá trị, Cung – Cầu & Vai trò Điều tiết của Nhà nước',
      analysis: 'Bản kết luận điều tra khẳng định: "Giải cứu" chỉ là biện pháp tình thế giải quyết triệu chứng bề ngoài. Căn nguyên sâu xa là sự phát triển tự phát mù quáng vi phạm Quy luật Cung - Cầu và Quy luật Giá trị. Để phát triển nông nghiệp bền vững, phải gắn sản xuất với nhu cầu thị trường, đẩy mạnh công nghiệp chế biến sâu (tăng giá trị gia tăng) và có sự điều tiết quy hoạch vĩ mô sáng suốt của Nhà nước.',
      xpAwarded: 160
    }
  },
  {
    id: 'CASE-003',
    code: 'HỒ SƠ #003',
    title: 'Xung Đột Lợi Ích & Khủng Hoảng Môi Trường Tại Khu Kinh Tế Biển',
    subtitle: 'Giải mã bài toán hài hòa lợi ích kinh tế trong nền KTTT định hướng XHCN',
    image: './assets/images/cases/case-student-mystery.svg',
    dossierLevel: 'CẤP ĐỘ: NÂNG CAO',
    accentColor: '#ec4899',
    backgroundStory: 'Một tổ hợp luyện kim và hóa chất ven biển xả nước thải nguy hại chưa xử lý đạt chuẩn, làm ô nhiễm 100km bờ biển, hủy hoại sinh kế của 30.000 hộ ngư dân và làm tê liệt ngành du lịch địa phương. Doanh nghiệp biện minh: "Chúng tôi đóng thuế hàng nghìn tỷ và tạo 5.000 việc làm, xã hội phải hy sinh môi trường để đổi lấy công nghiệp hóa!". Hãy phân loại các manh mối vào các chiều quan hệ lợi ích kinh tế!',
    categories: [
      { id: 'loi_ich_doanh_nghiep', name: 'LỢI ÍCH CHỦ TƯ BẢN / DOANH NGHIỆP', desc: 'Tối đa hóa lợi nhuận, cắt giảm chi phí xử lý chất thải để tăng tỷ suất sinh lời', color: '#f59e0b' },
      { id: 'loi_ich_nguoi_lao_dong', name: 'LỢI ÍCH CỦA NGƯỜI LAO ĐỘNG', desc: 'Nhu cầu việc làm, tiền lương xứng đáng, an toàn sức khỏe và sinh kế lâu dài', color: '#10b981' },
      { id: 'loi_ich_xa_hoi', name: 'LỢI ÍCH XÃ HỘI & MÔI TRƯỜNG', desc: 'Bảo vệ nguồn tài nguyên thiên nhiên, an ninh sinh thái và đời sống của toàn thể cộng đồng', color: '#38bdf8' },
      { id: 'mau_thuan_loi_ich', name: 'MÂU THUẪN & XUNG ĐỘT LỢI ÍCH', desc: 'Sự đối lập gay gắt khi lợi ích cục bộ của doanh nghiệp chà đạp lên lợi ích công cộng', color: '#ef4444' },
      { id: 'the_che_nha_nuoc', name: 'THỂ CHẾ ĐIỀU HÒA CỦA NHÀ NƯỚC', desc: 'Xử phạt nghiêm minh, bắt buộc đền bù thiệt hại và hoàn thiện quy chuẩn môi trường', color: '#a855f7' }
    ],
    clues: [
      {
        id: 'clue-1',
        text: 'Cố tình cắt giảm ngân sách 200 tỷ vận hành hệ thống lọc nước thải để thổi phồng lợi nhuận',
        correctCategory: 'loi_ich_doanh_nghiep',
        hint: 'Lợi ích kinh tế vị kỷ cục bộ của chủ đầu tư bất chấp quy chuẩn an toàn.'
      },
      {
        id: 'clue-2',
        text: 'Nguyện vọng chính đáng của 30.000 ngư dân có nguồn biển sạch để đánh bắt nuôi sống gia đình',
        correctCategory: 'loi_ich_nguoi_lao_dong',
        hint: 'Lợi ích kinh tế cơ bản trực tiếp của giai cấp những người lao động sản xuất.'
      },
      {
        id: 'clue-3',
        text: 'Hệ sinh thái san hô và nguồn lợi hải sản biển chung bị hủy diệt ảnh hưởng các thế hệ mai sau',
        correctCategory: 'loi_ich_xa_hoi',
        hint: 'Lợi ích công cộng, đại diện cho sự tồn tại và phát triển bền vững của quốc gia.'
      },
      {
        id: 'clue-4',
        text: 'Ngư dân phong tỏa cổng nhà máy, công nhân hoang mang lo mất việc và xã hội bất an',
        correctCategory: 'mau_thuan_loi_ich',
        hint: 'Biểu hiện xung đột khi sự phân chia lợi ích kinh tế bị phá vỡ thế cân bằng.'
      },
      {
        id: 'clue-5',
        text: 'Chính phủ đình chỉ xả thải, buộc doanh nghiệp bồi thường 500 triệu USD và chuyển đổi công nghệ xanh',
        correctCategory: 'the_che_nha_nuoc',
        hint: 'Quyền lực công của Nhà nước pháp quyền XHCN đứng ra bảo vệ công lý và lợi ích nhân dân.'
      }
    ],
    philosophicalVerdict: {
      headline: 'Vụ án phá giải: Không thể đánh đổi môi trường và lợi ích nhân dân lấy tăng trưởng mù quáng!',
      concept: 'Hài hòa các Quan hệ Lợi ích Kinh tế trong KTTT Định hướng XHCN',
      analysis: 'Bản kết luận điều tra đúc kết nguyên lý then chốt của Chương 5 MLN122: Trong nền kinh tế thị trường định hướng XHCN, tăng trưởng kinh tế phải đi đôi với bảo vệ môi trường và tiến bộ công bằng xã hội. Nhà nước pháp quyền XHCN tuyệt đối không cho phép doanh nghiệp tối đa hóa lợi nhuận bằng cách xâm phạm lợi ích sống còn của người lao động và cộng đồng. Hài hòa lợi ích là động lực và điều kiện tiên quyết cho sự phát triển bền vững.',
      xpAwarded: 180
    }
  }
];
