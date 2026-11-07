# MLN122 – TRIẾT HỌC TRONG ĐỜI SỐNG (PHILOSOPHY IN LIFE)
> *"Học triết học bằng cách nhìn vào chính cuộc sống."*

Dự án web sáng tạo đổi mới phương pháp học tập môn **MLN122 – Triết học Mác – Lênin**, biến toàn bộ kiến thức lý luận thành chuỗi tình huống tương tác thực tế đời sống sinh viên, công việc và xã hội.

---

## 🌟 ĐẶC ĐIỂM NỔI BẬT

1. **100% TÌNH HUỐNG CÓ HÌNH ẢNH MINH HỌA TRỰC QUAN**:
   - Tất cả các câu hỏi/tình huống đều đi kèm hình ảnh vector chất lượng cao (SVG 16:9), mô tả chân thực bối cảnh và ẩn dụ triết học.
   - Không có câu hỏi nào chỉ là văn bản trần trụi.

2. **LUỒNG TRẢI NGHIỆM ĐỘC ĐÁO 4 GIAI ĐOẠN**:
   - **TÌNH HUỐNG & HÌNH ẢNH**: Đối mặt với nghịch lý đời sống (GPA 4.0 vs ca làm 8h, áp lực đồng trang lứa, thất bại khởi nghiệp, bão AI...).
   - **LỰA CHỌN CỦA BẠN (YOUR CHOICE)**: Đưa ra quyết định thực tế.
   - **HỆ QUẢ ĐỜI THỰC (CONSEQUENCE)**: Trực quan hóa kết quả hành động.
   - **LĂNG KÍNH TRIẾT HỌC (PHILOSOPHY ANALYSIS)**: Soi rọi bằng thế giới quan và phương pháp luận MLN122.
   - **BÀI HỌC CỐT LÕI (WHAT YOU JUST LEARNED)**: Rút ra phương pháp luận thực tiễn.

3. **PHÒNG THÍ NGHIỆM LƯỢNG – CHẤT TƯƠNG TÁC**:
   - Kéo thanh trượt từ 0 đến 100 giờ rèn luyện kỹ năng.
   - Trực quan hóa ranh giới giữa Lượng, Chất, Độ, Điểm nút.
   - Animation bùng nổ **"BƯỚC NHẢY VỌT"** khi vượt qua mốc 80h.

4. **PHÒNG ĐIỀU TRA TRIẾT HỌC (PHILOSOPHY DETECTIVE)**:
   - Người chơi hóa thân thành "Thám tử Triết học" phá các vụ án thực tế.
   - Bảng phân loại manh mối vào các ngăn: **Hiện tượng, Bản chất, Nguyên nhân, Điều kiện, Kết quả**.
   - Bản kết luận điều tra (Verdict) đúc kết nguyên lý MLN122.

5. **HỒ SƠ TƯ DUY 5 CHIỀU & BẢNG VINH DANH HUY HIỆU**:
   - Biểu đồ Radar 5 trục: Mối liên hệ, Xử lý mâu thuẫn, Tôn trọng khách quan, Vận dụng thực tiễn, Đào sâu bản chất.
   - Hình mẫu tư duy (Archetype) cá nhân hóa (Nhà tư duy biện chứng toàn diện, Nhà thực hành duy vật...).
   - Hỗ trợ in/lưu Giấy chứng nhận trực tiếp từ trình duyệt.
   - Hệ thống 7 huy hiệu thành tích mở khóa tự động.

6. **KHÔNG CẦN DATABASE – KHỞI ĐỘNG SẠCH SẼ & HOẠT ĐỘNG HOÀN TOÀN OFFLINE**:
   - Khi run/chạy lại ứng dụng từ đầu, hệ thống luôn khởi động mới hoàn toàn (không lưu lại các câu hỏi/tiến trình cũ của lần trước), thuận tiện tối đa cho việc chấm điểm bài thi, thuyết trình và chơi lại.
   - Hỗ trợ nút **"↺ Làm Lại"** trên thanh điều hướng để xóa tiến trình về 0 bất cứ lúc nào.
   - Chạy mượt mà trên Desktop, Laptop, Tablet và Mobile.
   - Âm thanh tương tác tự tổng hợp bằng Web Audio API (có nút bật/tắt tiếng).

---

## 🚀 HƯỚNG DẪN CHẠY DỰ ÁN

Dự án đã được cấu hình sẵn để chạy cực kỳ dễ dàng trên mọi máy tính Windows có cài sẵn **Node.js**:

### Cách 1: 1-Click bằng file `run.bat` (Đơn giản nhất - Khuyến nghị)
- Chỉ cần **nhấp đúp chuột vào file [run.bat](file:///d:/Ki8/MLN122/PHILOSOPHY%20IN%20LIFE/run.bat)**.
- File sẽ tự động:
  1. Kiểm tra môi trường Node.js.
  2. Cài đặt thư viện nếu chưa có.
  3. Tự động mở trình duyệt tại `http://localhost:3000/`.
  4. Khởi động server (tránh hoàn toàn lỗi PowerShell Script ExecutionPolicy).

### Cách 2: Chạy bằng Terminal
```powershell
npm.cmd run dev
# hoặc: node server.js
```
Mở trình duyệt tại: **`http://localhost:3000/`**

### Cách 3: Build bản Production đóng gói
```bash
npm run build
npm run preview
```

---

## 📂 KIẾN TRÚC DỰ ÁN

```
PHILOSOPHY IN LIFE/
├── index.html                   # Giao diện chính, tối ưu SEO, font Outfit & Inter
├── server.js                    # Máy chủ HTTP Node.js độc lập không cần thư viện ngoài
├── vite.config.js               # Cấu hình Vite
├── package.json                 # Cấu hình script và phụ thuộc
├── assets/images/               # Kho hình ảnh vector SVG minh họa tình huống
│   ├── chapter1/                # 5 ảnh tình huống Chương 1
│   ├── chapter2/                # 15 ảnh tình huống Chương 2
│   ├── chapter3/                # 3 ảnh tình huống Chương 3
│   └── cases/                   # 3 ảnh hồ sơ điều tra thám tử
├── public/                      # Static assets phục vụ Vite dev/build
│   ├── favicon.svg              # Favicon biểu tượng triết học Phi (Φ)
│   └── assets/                  # Bản sao đồng bộ assets
├── scripts/
│   └── generate_svg_assets.js   # Script tạo 26 hình ảnh SVG bespoke cao cấp
└── src/
    ├── main.js                  # Điều phối luồng và Router trung tâm
    ├── core/
    │   ├── state.js             # Quản lý trạng thái, localStorage, mở khóa badge
    │   ├── audio.js             # Bộ tổng hợp âm thanh Web Audio API (chime, leap, click)
    │   └── scoring.js           # Bộ tính điểm 5 chiều tư duy và tạo SVG Radar Chart
    ├── data/
    │   ├── chapters.js          # Dữ liệu danh mục 3 chương môn MLN122
    │   ├── scenarios.js         # Ngân hàng 23 tình huống thực tế đầy đủ schema
    │   ├── detectiveCases.js    # 3 vụ án điều tra phá án thực tế
    │   ├── badges.js            # Danh sách 7 huy hiệu thành tích
    │   ├── archetypes.js        # Các hình mẫu tư duy và thang đo 5 chiều
    │   └── handbook.js          # Sổ tay lý luận triết học MLN122 bỏ túi
    ├── components/
    │   ├── Navbar.js            # Thanh điều hướng, bộ đếm XP, nút Mute, Reset
    │   ├── LandingHero.js       # Trang chủ giới thiệu, slogan, thống kê
    │   ├── ChapterMap.js        # Bản đồ hành trình 3 chương và phòng phá án
    │   ├── ScenarioPlayer.js    # Trình diễn tình huống 4 giai đoạn chuẩn UX
    │   ├── InteractiveSlider.js # Phòng thí nghiệm Lượng - Chất có animation Bước nhảy
    │   ├── DetectiveBureau.js   # Bàn phá án ghim manh mối tương tác
    │   ├── ProfileModal.js      # Modal Hồ sơ tư duy & Chứng nhận Radar Chart
    │   ├── BadgesModal.js       # Modal Bảng vinh danh 7 huy hiệu
    │   ├── HandbookModal.js     # Modal Sổ tay lý thuyết bỏ túi
    │   └── BadgeUnlockPopup.js  # Popup chúc mừng khi mở khóa huy hiệu
    └── styles/
        ├── variables.css        # Hệ thống màu sắc HSL, bóng đổ, glassmorphism
        ├── base.css             # Typography, reset, scrollbar
        ├── components.css       # Style cho button, card, header, modal
        ├── scenario.css         # Style trình diễn tình huống & 4 bước phản hồi
        ├── detective.css        # Style hồ sơ vụ án & bảng ghim manh mối
        ├── slider.css           # Style phòng thí nghiệm Lượng - Chất & Bước nhảy
        └── animations.css       # Hiệu ứng chuyển động mượt mà
```

---

## 🎓 CÁCH BỔ SUNG THÊM TÌNH HUỐNG (DÀNH CHO GIẢNG VIÊN & SINH VIÊN)

Dự án được thiết kế theo mô hình **Data-Driven (Tách biệt hoàn toàn Dữ liệu khỏi Giao diện)**. Để thêm 1 tình huống mới, chỉ cần mở file `src/data/scenarios.js` và thêm 1 object theo cấu trúc chuẩn:

```javascript
{
  "id": "C2-M1-Q003",
  "chapter": 2,
  "module": "2.1",
  "topic": "Vật chất và ý thức",
  "philosophyConcept": "Tôn trọng khách quan",
  "difficulty": "medium",
  "image": "/assets/images/chapter2/your-image.svg", // hoặc .png/.jpg
  "title": "Tiêu đề tình huống đời sống",
  "situation": "Mô tả câu chuyện thực tế sinh viên hoặc đời sống...",
  "question": "Câu hỏi ra quyết định...",
  "options": [
    {
      "id": "A",
      "text": "Lựa chọn 1...",
      "isDialectical": false,
      "consequence": "Hệ quả trong đời thực nếu chọn A...",
      "philosophicalLens": "Phân tích vì sao lựa chọn này sai dưới góc nhìn MLN122..."
    },
    {
      "id": "B",
      "text": "Lựa chọn 2 (Biện chứng)...",
      "isDialectical": true,
      "consequence": "Hệ quả tích cực...",
      "philosophicalLens": "Phân tích sự phù hợp với quy luật MLN122..."
    }
  ],
  "explanation": "Giải thích chi tiết bám sát giáo trình MLN122...",
  "coreLesson": "Bài học phương pháp luận đúc kết...",
  "dimensionScores": { "connection": 20, "contradiction": 20, "objective": 25, "practice": 25, "depth": 20 }
}
```
Hệ thống sẽ tự động cập nhật lên giao diện, tính điểm và cập nhật tiến trình mà không cần sửa bất kỳ dòng code giao diện nào!
