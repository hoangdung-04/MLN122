# MLN122 – KINH TẾ CHÍNH TRỊ TRONG ĐỜI SỐNG (POLITICAL ECONOMY IN LIFE)
> *"Thấu hiểu quy luật thị trường – Làm chủ giá trị và đời sống hiện đại."*

Dự án web sáng tạo đổi mới phương pháp học tập môn **MLN122 – Kinh tế chính trị Mác – Lênin**, chuyển đổi toàn bộ kiến thức lý luận khoa học thành chuỗi tình huống tương tác thực tế đời sống sinh viên, môi trường khởi nghiệp, doanh nghiệp và nền kinh tế số hiện đại.

---

## 🌟 ĐẶC ĐIỂM NỔI BẬT

1. **100% TÌNH HUỐNG CÓ HÌNH ẢNH MINH HỌA TRỰC QUAN**:
   - Tất cả 28 tình huống của 6 chương đều đi kèm hình ảnh vector chất lượng cao (SVG), mô tả chân thực bối cảnh và ẩn dụ kinh tế chính trị.
   - Tránh hoàn toàn việc học lý thuyết khô khan qua câu hỏi văn bản thuần túy.

2. **LUỒNG TRẢI NGHIỆM ĐỘC ĐÁO 4 GIAI ĐOẠN (SCENARIO FLOW)**:
   - **TÌNH HUỐNG & HÌNH ẢNH**: Đối mặt với bài toán thực tế (Khởi nghiệp, tối ưu giá trị thặng dư, cạnh tranh công nghệ, bẫy giá cả độc quyền...).
   - **LỰA CHỌN CỦA BẠN (YOUR CHOICE)**: Đưa ra quyết định kinh tế thực tế.
   - **HỆ QUẢ ĐỜI THỰC (CONSEQUENCE)**: Trực quan hóa kết quả hành động qua hình ảnh và diễn biến cụ thể.
   - **LĂNG KÍNH KINH TẾ CHÍNH TRỊ MÁC – LÊNIN**: Soi rọi bản chất bằng các quy luật khách quan ($c + v + m$, quy luật giá trị, cung cầu, độc quyền).
   - **BÀI HỌC CỐT LÕI (WHAT YOU JUST LEARNED)**: Rút ra phương pháp luận thực tiễn cho công việc và quản trị đời sống.

3. **PHÒNG THÍ NGHIỆM TƯƠNG TÁC NGÀY LAO ĐỘNG & GIÁ TRỊ THẶNG DƯ (SURPLUS VALUE LAB)**:
   - Kéo thanh trượt điều chỉnh độ dài ngày làm việc từ 4h đến 14h.
   - Trực quan hóa cấu trúc ngày lao động: Thời gian tất yếu ($v$) và Thời gian thặng dư ($m$).
   - Tự động tính toán tỷ suất giá trị thặng dư $m'$ theo thời gian thực.
   - Báo động đỏ bóc lột cực độ khi vượt ngưỡng 11h.

4. **PHÒNG PHÁ ÁN KINH TẾ CHÍNH TRỊ (ECONOMIC DETECTIVE BUREAU)**:
   - Hóa thân thành Chuyên gia Điều tra Kinh tế phá các vụ án thực tế thời kinh tế số.
   - Bảng phân loại manh mối vào các ngăn khoa học: **Tư bản bất biến (c), Tư bản khả biến (v), Giá trị thặng dư (m), Giá cả độc quyền, Lợi nhuận độc quyền**.
   - Bản kết luận điều tra (Verdict) đúc kết nguyên lý và tặng điểm kinh nghiệm XP.

5. **HỒ SƠ TƯ DUY 5 CHIỀU & BẢNG VINH DANH HUY HIỆU**:
   - Biểu đồ Radar 5 trục: Mối liên hệ, Xử lý mâu thuẫn, Tôn trọng khách quan, Vận dụng thực tiễn, Đào sâu bản chất.
   - Khắc họa Hình mẫu tư duy (Archetype) cá nhân hóa (Nhà tư duy toàn diện, Chiến lược gia thị trường, Nhà kiến tạo lợi ích...).
   - Hỗ trợ in / lưu Giấy chứng nhận trực tiếp từ trình duyệt.
   - Hệ thống 7 huy hiệu mở khóa tự động theo thành tích.

6. **HOẠT ĐỘNG HOÀN TOÀN TRÊN CLIENT & TỰ DO RESET**:
   - Tự động lưu tiến trình vào `localStorage`.
   - Hỗ trợ nút **"↺ Làm Lại"** trên thanh điều hướng để xóa tiến trình về 0 bất cứ lúc nào (thuận tiện cho việc thuyết trình, chấm điểm bài thi).
   - Thiết kế chuẩn Responsive: Chạy mượt mà trên Desktop, Laptop, Tablet và Mobile.
   - Âm thanh tương tác tự tổng hợp bằng Web Audio API (có nút bật/tắt tiếng, không phụ thuộc file âm thanh ngoài).

---

## 🚀 HƯỚNG DẪN KHỞI CHẠY & DEPLOY

### Cách 1: Chạy trực tiếp qua Web Online (Không cần cài đặt)
Truy cập: 👉 **[https://hoangdung-04.github.io/MLN122/](https://hoangdung-04.github.io/MLN122/)**

### Cách 2: Chạy trên máy tính (Local)
1. **1-Click bằng file `run.bat`**:
   - Nhấp đúp chuột vào file `run.bat` để tự động mở máy chủ và trình duyệt tại `http://localhost:3000/`.
2. **Chạy bằng lệnh Terminal**:
   ```powershell
   # Chạy máy chủ độc lập không cần node_modules:
   node server.js

   # Hoặc chạy môi trường phát triển Vite:
   npm run dev
   ```

### Cách 3: Deploy cập nhật lên GitHub Pages
```powershell
npm run deploy
```

---

## 📂 KIẾN TRÚC DỰ ÁN

```
MLN122/
├── index.html                   # Giao diện chính, tối ưu SEO, font Be Vietnam Pro & Plus Jakarta Sans
├── server.js                    # Máy chủ HTTP Node.js độc lập không phụ thuộc node_modules
├── vite.config.js               # Cấu hình Vite với base relative './'
├── package.json                 # Cấu hình dự án và scripts deploy
├── assets/images/               # Kho hình ảnh vector SVG minh họa tình huống
│   ├── cases/                   # Ảnh các vụ án kinh tế
│   ├── chapter1/                # Ảnh tình huống Chương 1
│   ├── chapter2/                # Ảnh tình huống Chương 2
│   ├── chapter3/                # Ảnh tình huống Chương 3
│   ├── outcomes/                # Ảnh kết quả lựa chọn đạt / lệch lạc
│   ├── portraits/               # Banner chân dung C. Mác, Ph. Ăng-ghen, V.I. Lênin
│   └── slider/                  # Ảnh minh họa các giai đoạn kéo ngày lao động
├── public/                      # Static assets phục vụ Vite build
│   ├── favicon.svg              # Favicon trang web
│   └── assets/                  # Assets sao chép phục vụ build
└── src/
    ├── main.js                  # Điều phối luồng, router và quản lý modal
    ├── core/
    │   ├── state.js             # Quản lý trạng thái, tính điểm, mở khóa badge
    │   ├── audio.js             # Bộ tổng hợp âm thanh Web Audio API thuần
    │   └── scoring.js           # Bộ tính điểm 5 chiều tư duy và tạo SVG Radar Chart
    ├── data/
    │   ├── chapters.js          # Dữ liệu 6 chương môn KTCT MLN122
    │   ├── scenarios.js         # Ngân hàng 28 tình huống thực tế đầy đủ schema
    │   ├── detectiveCases.js    # 3 vụ án điều tra phá án thực tế
    │   ├── badges.js            # Danh sách 7 huy hiệu thành tích
    │   ├── archetypes.js        # Hình mẫu tư duy và thang đo 5 chiều
    │   └── handbook.js          # Sổ tay lý luận Kinh tế chính trị bỏ túi
    ├── components/
    │   ├── Navbar.js            # Thanh điều hướng, bộ đếm XP, đổi theme, bật/tắt tiếng, reset
    │   ├── LandingHero.js       # Trang chủ giới thiệu, slogan, thống kê
    │   ├── ChapterMap.js        # Bản đồ hành trình 6 chương và phòng phá án
    │   ├── ScenarioPlayer.js    # Trình diễn tình huống 4 giai đoạn chuẩn UX
    │   ├── InteractiveSlider.js # Phòng thí nghiệm Ngày lao động & Giá trị thặng dư
    │   ├── DetectiveBureau.js   # Bàn phá án ghim manh mối tương tác
    │   ├── ProfileModal.js      # Modal Hồ sơ tư duy & Giấy chứng nhận Radar Chart
    │   ├── BadgesModal.js       # Modal Bảng vinh danh 7 huy hiệu
    │   ├── HandbookModal.js     # Modal Sổ tay lý thuyết KTCT bỏ túi
    │   └── BadgeUnlockPopup.js  # Popup chúc mừng khi mở khóa huy hiệu
    └── styles/
        ├── variables.css        # Hệ thống biến CSS màu sắc Light/Dark, Glassmorphism
        ├── base.css             # Typography chuẩn tiếng Việt, layout reset
        ├── components.css       # Style nút bấm, thẻ card, modal, header
        ├── scenario.css         # Style trình diễn tình huống & 4 bước phản hồi
        ├── detective.css        # Style hồ sơ vụ án & bảng ghim manh mối
        ├── slider.css           # Style phòng thí nghiệm ngày lao động
        └── animations.css       # Hiệu ứng chuyển động mượt mà
```
