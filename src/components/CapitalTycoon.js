import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderCapitalTycoon(container, onBackToMap) {
  // Game State
  let currentStage = 1; // 1 | 2 | 3 | 'victory' | 'gameover'
  let capital = 100; // in Millions VNĐ
  let constantCapital = 60; // c
  let variableCapital = 40; // v
  let surplusRate = 100; // m' (%)
  let workerMorale = 80; // %
  let socialScore = 75; // %
  let historyLogs = [];
  let lastEventResult = null;

  // Stages Configuration
  const STAGES = [
    {
      id: 1,
      title: 'GIAI ĐOẠN 1: KHỞI NGHIỆP TƯ BẢN & BÍ MẬT GTTD (CHƯƠNG 3)',
      subtitle: 'Nắm vững công thức T - H - T\', phân chia c - v, GTTD tuyệt đối vs tương đối và Tích lũy tư bản.',
      targetCapital: 500,
      targetDesc: 'Mục tiêu: Tích lũy tư bản đạt 500 Triệu VNĐ.',
      badge: 'CHƯƠNG 3: GIÁ TRỊ THẶNG DƯ'
    },
    {
      id: 2,
      title: 'GIAI ĐOẠN 2: BÃO TÁP CẠNH TRANH & ĐỘC QUYỀN (CHƯƠNG 4)',
      subtitle: 'Quy luật tích tụ, tập trung tư bản, giá cả độc quyền và hình thành lợi nhuận bình quân.',
      targetCapital: 2000,
      targetDesc: 'Mục tiêu: Đạt quy mô Tập đoàn 2 Tỷ VNĐ (2.000 Triệu).',
      badge: 'CHƯƠNG 4: CẠNH TRANH & ĐỘC QUYỀN'
    },
    {
      id: 3,
      title: 'GIAI ĐOẠN 3: KTTT ĐỊNH HƯỚNG XHCN & THÍCH ỨNG 4.0 (CHƯƠNG 5 & 6)',
      subtitle: 'Hài hòa lợi ích kinh tế, chuyển đổi số toàn diện và hội nhập kinh tế quốc tế độc lập tự chủ.',
      targetCapital: 5000,
      targetDesc: 'Mục tiêu: Doanh nghiệp tiêu biểu KTTT Định hướng XHCN & Vươn tầm toàn cầu.',
      badge: 'CHƯƠNG 5 & 6: MÔ HÌNH VIỆT NAM'
    }
  ];

  // Stage 1 Choices
  const STAGE_1_CHOICES = [
    {
      id: 's1-opt1',
      tag: 'GTTD TUYỆT ĐỐI',
      title: 'Kéo dài ngày làm việc lên 14 giờ / ngày',
      desc: 'Bắt công nhân tăng ca kiệt lực vào ban đêm, giữ nguyên mức lương cơ bản (thời gian lao động tất yếu giữ nguyên).',
      isDialectical: false,
      impact: {
        capitalDelta: +90,
        moraleDelta: -45,
        surplusDelta: +150,
        cDelta: 0,
        vDelta: 0
      },
      outcomeTitle: '⚠️ Lợi nhuận bùng nổ ngắn hạn nhưng công nhân kiệt sức!',
      outcomeDesc: 'Bạn thu được lượng GTTD tuyệt đối khổng lồ trong 2 tháng đầu. Nhưng sau đó, công nhân suy nhược thể lực, tỉ lệ phế phẩm tăng vọt và nổ ra làn sóng bãi công đòi quyền lợi!',
      philosophicalLens: 'Lý luận C. Mác chỉ rõ: Sản xuất GTTD tuyệt đối bị giới hạn bởi ranh giới sinh lý tự nhiên của con người và sự phản kháng tất yếu của giai cấp công nhân. Không thể làm giàu bền vững bằng bóc lột thể xác thô bạo.'
    },
    {
      id: 's1-opt2',
      tag: 'CƯỜNG ĐỘ LAO ĐỘNG',
      title: 'Lắp camera giám sát & Tăng định mức sản phẩm',
      desc: 'Ép công nhân làm việc căng thẳng gấp đôi trong 8 tiếng, cắt giảm thời gian nghỉ ngơi giữa giờ.',
      isDialectical: false,
      impact: {
        capitalDelta: +70,
        moraleDelta: -30,
        surplusDelta: +80,
        cDelta: +10,
        vDelta: 0
      },
      outcomeTitle: '⚠️ Năng suất bề nổi tăng nhưng nhân sự xin nghỉ việc hàng loạt!',
      outcomeDesc: 'Sản lượng tăng nhưng áp lực tâm lý đè nặng. Các thợ bậc cao bất mãn bỏ sang công ty khác, nhà máy thiếu hụt lao động tay nghề.',
      philosophicalLens: 'Tăng cường độ lao động bản chất cũng là tăng sự hao phí thể lực và trí lực trong cùng một đơn vị thời gian, sớm muộn cũng dẫn tới sự kiệt quệ của sức lao động.'
    },
    {
      id: 's1-opt3',
      tag: 'GTTD TƯƠNG ĐỐI & SIÊU NGẠCH',
      title: 'Đổi mới công nghệ máy móc tự động hóa',
      desc: 'Chi 40 triệu nâng cấp dây chuyền bán tự động, rút ngắn thời gian lao động tất yếu, nâng cao năng suất.',
      isDialectical: true,
      impact: {
        capitalDelta: +140,
        moraleDelta: +15,
        surplusDelta: +60,
        cDelta: +40,
        vDelta: +10
      },
      outcomeTitle: '✓ BƯỚC NHẢY VỌT: Năng suất tăng phi mã, thu GTTD siêu ngạch!',
      outcomeDesc: 'Thời gian lao động cần thiết để bù đắp lương giảm xuống chỉ còn 2.5 giờ. Doanh nghiệp bán sản phẩm với giá cá biệt rẻ hơn thị trường nhưng vẫn thu siêu lợi nhuận, công nhân phấn khởi vì bớt nặng nhọc!',
      philosophicalLens: 'Vận dụng chuẩn xác phương pháp sản xuất GTTD tương đối và siêu ngạch của C. Mác: Tăng năng suất lao động xã hội là chìa khóa vàng nâng cao giá trị thặng dư bền vững và nhân văn.'
    },
    {
      id: 's1-opt4',
      tag: 'TÍCH LŨY TƯ BẢN',
      title: 'Tái sản xuất mở rộng: Trích 60% lợi nhuận tái đầu tư',
      desc: 'Không rút hết tiền mặt hưởng thụ cá nhân, dùng 60% giá trị thặng dư thu được để mua thêm máy móc và mở rộng quy mô xưởng.',
      isDialectical: true,
      impact: {
        capitalDelta: +180,
        moraleDelta: +20,
        surplusDelta: +40,
        cDelta: +60,
        vDelta: +20
      },
      outcomeTitle: '✓ TÍCH LŨY TƯ BẢN THÀNH CÔNG: Quy mô nhà máy mở rộng gấp đôi!',
      outcomeDesc: 'Quy mô sản xuất mở rộng, tư bản ứng trước tăng trưởng vượt bậc, hoàn thành xuất sắc mục tiêu Giai đoạn 1!',
      philosophicalLens: 'Đúng bản chất của Tích lũy tư bản: Biến một phần giá trị thặng dư thành tư bản phụ thêm để tái sản xuất mở rộng, đưa doanh nghiệp từ tiểu thương trở thành nhà tư bản thực thụ.'
    }
  ];

  // Stage 2 Choices
  const STAGE_2_CHOICES = [
    {
      id: 's2-opt1',
      tag: 'PHÁ GIÁ CẠNH TRANH',
      title: '"Đốt tiền" hạ giá dưới giá thành để bóp nghẹt đối thủ',
      desc: 'Chấp nhận chịu lỗ 200 triệu để độc chiếm thị phần, ép các cơ sở kinh doanh vừa và nhỏ phá sản rút lui.',
      isDialectical: false,
      impact: {
        capitalDelta: -120,
        moraleDelta: -15,
        surplusDelta: +50,
        cDelta: +80,
        vDelta: 0
      },
      outcomeTitle: '⚠️ Độc chiếm thị phần nhưng tổn thất tài chính và bị dư luận phản đối!',
      outcomeDesc: 'Các đối thủ nhỏ giải thể nhưng bạn bị điều tra hành vi bán phá giá phản cạnh tranh, quỹ tiền mặt bị bào mòn nặng nề.',
      philosophicalLens: 'Biểu hiện tiêu cực của cạnh tranh dẫn đến độc quyền: Lạm dụng sức mạnh tư bản để bóp nghẹt cạnh tranh tự do, gây lũng đoạn thị trường.'
    },
    {
      id: 's2-opt2',
      tag: 'TẬP TRUNG TƯ BẢN (M&A)',
      title: 'Mua lại & Sáp nhập đối thủ công nghệ (M&A)',
      desc: 'Hợp nhất 2 đối thủ cạnh tranh vào tập đoàn, nâng cao cấu tạo hữu cơ của tư bản (c/v), tối ưu chi phí vận hành.',
      isDialectical: true,
      impact: {
        capitalDelta: +450,
        moraleDelta: +10,
        surplusDelta: +80,
        cDelta: +150,
        vDelta: +40
      },
      outcomeTitle: '✓ HỢP NHẤT TẬP TRUNG TƯ BẢN: Trở thành Tập đoàn thống lĩnh thị phần!',
      outcomeDesc: 'Quy mô tư bản tăng vọt nhờ tập trung tư bản. Hệ thống chuỗi cung ứng được tinh gọn, năng lực cạnh tranh vươn lên dẫn đầu thị trường.',
      philosophicalLens: 'Vận dụng chuẩn xác quy luật: Tự do cạnh tranh tất yếu dẫn đến tích tụ và tập trung sản xuất, sinh ra các tổ chức kinh tế quy mô lớn có sức mạnh vượt trội.'
    },
    {
      id: 's2-opt3',
      tag: 'LỢI NHUẬN BÌNH QUÂN',
      title: 'Dịch chuyển vốn sang ngành công nghệ số có tỷ suất cao',
      desc: 'Nhận thấy ngành sản xuất thô có p\' giảm, bạn chủ động rút một phần vốn tái đầu tư vào hệ sinh thái phần mềm & logistics.',
      isDialectical: true,
      impact: {
        capitalDelta: +550,
        moraleDelta: +25,
        surplusDelta: +90,
        cDelta: +120,
        vDelta: +50
      },
      outcomeTitle: '✓ ĐÓN ĐẦU DÒNG VỐN: Hưởng trọn tỷ suất sinh lời vượt bậc!',
      outcomeDesc: 'Bạn chuyển dịch vốn nhạy bén trước khi tỷ suất lợi nhuận bình quân san phẳng thị trường, gia tăng tích lũy tư bản thần tốc.',
      philosophicalLens: 'Vận dụng chuẩn xác quy luật di chuyển tự do của tư bản giữa các ngành: Tư bản luôn chảy từ nơi có tỷ suất lợi nhuận thấp sang nơi có tỷ suất cao, hình thành tỷ suất lợi nhuận bình quân.'
    },
    {
      id: 's2-opt4',
      tag: 'GIÁ CẢ ĐỘC QUYỀN',
      title: 'Liên minh ngầm áp đặt giá độc quyền cao cho người dùng',
      desc: 'Lợi dụng vị thế thống lĩnh để bắt tay đối thủ tăng giá 40%, ép khách hàng không có lựa chọn nào khác.',
      isDialectical: false,
      impact: {
        capitalDelta: +250,
        moraleDelta: -40,
        surplusDelta: +120,
        cDelta: 0,
        vDelta: 0
      },
      outcomeTitle: '💥 CƠ QUAN QUẢN LÝ PHẠT NẶNG: Bị phạt 300 triệu vì lũng đoạn!',
      outcomeDesc: 'Nhà nước can thiệp theo Luật Cạnh tranh, xử phạt hành vi liên minh thao túng giá cả độc quyền; khách hàng tẩy chay thương hiệu.',
      philosophicalLens: 'Chủ nghĩa tư bản độc quyền sinh ra giá cả độc quyền để chiếm đoạt lợi nhuận độc quyền cao, tất yếu đòi hỏi sự can thiệp điều tiết của Nhà nước để bảo vệ lợi ích xã hội.'
    }
  ];

  // Stage 3 Choices
  const STAGE_3_CHOICES = [
    {
      id: 's3-opt1',
      tag: 'CÔNG NGHIỆP HÓA 4.0',
      title: 'Chuyển đổi số toàn diện & Đào tạo lại nhân lực số',
      desc: 'Đầu tư cụm máy chủ AI, tự động hóa quy trình kết hợp mở lớp đào tạo kỹ năng số cho 100% công nhân.',
      isDialectical: true,
      impact: {
        capitalDelta: +800,
        moraleDelta: +35,
        socialDelta: +30,
        cDelta: +200,
        vDelta: +80
      },
      outcomeTitle: '✓ BƯỚC NHẢY VỌT 4.0: Năng suất nhảy vọt, không một công nhân nào bị bỏ lại!',
      outcomeDesc: 'Doanh nghiệp trở thành hình mẫu tiên phong chuyển đổi số quốc gia; công nhân làm chủ AI, lương thưởng tăng gấp đôi, thương hiệu uy tín vang dội.',
      philosophicalLens: 'Thực hiện chuẩn mực CNH, HĐH thích ứng CMCN 4.0: Phát triển lực lượng sản xuất hiện đại đi đôi với hoàn thiện quan hệ sản xuất tiến bộ, coi con người là trung tâm và chủ thể sáng tạo.'
    },
    {
      id: 's3-opt2',
      tag: 'HỘI NHẬP & CHUẨN XANH ESG',
      title: 'Chuyển đổi xanh & Đạt chứng chỉ xuất khẩu EU/Mỹ',
      desc: 'Đầu tư hệ thống điện mặt trời áp mái, giảm phát thải carbon, truy xuất nguồn gốc minh bạch để mở rộng thị trường toàn cầu.',
      isDialectical: true,
      impact: {
        capitalDelta: +950,
        moraleDelta: +25,
        socialDelta: +35,
        cDelta: +180,
        vDelta: +60
      },
      outcomeTitle: '✓ HỘI NHẬP THẾ HỆ MỚI: Đơn hàng quốc tế bùng nổ sang EU & Bắc Mỹ!',
      outcomeDesc: 'Vượt qua mọi rào cản kỹ thuật khắt khe, doanh nghiệp ký kết các hợp đồng triệu USD thông qua các hiệp định EVFTA và CPTPP.',
      philosophicalLens: 'Vận dụng chuẩn xác phương hướng hội nhập kinh tế quốc tế hiệu quả: Nâng cao năng lực cạnh tranh quốc gia, chủ động đáp ứng các tiêu chuẩn xanh hiện đại để vươn tầm toàn cầu.'
    },
    {
      id: 's3-opt3',
      tag: 'HÀI HÒA LỢI ÍCH XHCN',
      title: 'Chia sẻ cổ phần ESOP & Trích lập quỹ phúc lợi cộng đồng',
      desc: 'Trích 15% lợi nhuận thưởng cổ phần cho nhân viên, tài trợ học bổng và xây dựng nhà ở xã hội cho công nhân.',
      isDialectical: true,
      impact: {
        capitalDelta: +600,
        moraleDelta: +40,
        socialDelta: +45,
        cDelta: +50,
        vDelta: +100
      },
      outcomeTitle: '✓ ĐỈNH CAO HÀI HÒA LỢI ÍCH: Tập thể gắn kết bền chặt như một khối thống nhất!',
      outcomeDesc: 'Người lao động cống hiến hết mình vì thấy mình là người làm chủ thực sự; doanh nghiệp nhận Giải thưởng Doanh nghiệp vì cộng đồng của Thủ tướng Chính phủ.',
      philosophicalLens: 'Thể hiện sâu sắc bản chất KTTT định hướng XHCN: Kết hợp hài hòa 3 lợi ích (Cá nhân - Doanh nghiệp - Xã hội), gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội.'
    },
    {
      id: 's3-opt4',
      tag: 'GIA CÔNG THUẦN TÚY',
      title: 'Từ chối đầu tư công nghệ, tiếp tục gia công giá rẻ thô sơ',
      desc: 'Không chịu chuyển đổi xanh, tiếp tục dùng máy cũ gây ô nhiễm và chỉ nhận đơn hàng gia công giá rẻ.',
      isDialectical: false,
      impact: {
        capitalDelta: -300,
        moraleDelta: -25,
        socialDelta: -30,
        cDelta: 0,
        vDelta: 0
      },
      outcomeTitle: '💥 RƠI VÀO BẪY THU NHẬP TRUNG BÌNH: Đơn hàng bị hủy hàng loạt!',
      outcomeDesc: 'Thị trường thế giới áp thuế carbon nặng nề, đối thủ AI làm nhanh gấp 10 lần khiến doanh nghiệp đánh mất toàn bộ khách hàng và thua lỗ nặng nề.',
      philosophicalLens: 'Bài học sống còn: Trong thời đại CMCN 4.0 và hội nhập sâu rộng, dừng lại ở gia công giá rẻ đồng nghĩa với tụt hậu và tự đào thải khỏi chuỗi giá trị toàn cầu.'
    }
  ];

  function getActiveChoices() {
    if (currentStage === 1) return STAGE_1_CHOICES;
    if (currentStage === 2) return STAGE_2_CHOICES;
    if (currentStage === 3) return STAGE_3_CHOICES;
    return [];
  }

  function handleDecision(choice) {
    lastEventResult = choice;

    // Apply Impacts
    capital += choice.impact.capitalDelta;
    if (choice.impact.moraleDelta) workerMorale = Math.max(0, Math.min(100, workerMorale + choice.impact.moraleDelta));
    if (choice.impact.socialDelta) socialScore = Math.max(0, Math.min(100, socialScore + choice.impact.socialDelta));
    if (choice.impact.surplusDelta) surplusRate += choice.impact.surplusDelta;
    if (choice.impact.cDelta) constantCapital += choice.impact.cDelta;
    if (choice.impact.vDelta) variableCapital += choice.impact.vDelta;

    // Play Audio
    if (choice.isDialectical) {
      sound.playDialecticalSuccess();
      stateManager.state.xp += 40;
    } else {
      sound.playWarning();
      stateManager.state.xp += 15;
    }

    historyLogs.unshift({
      stage: currentStage,
      title: choice.title,
      capitalChange: choice.impact.capitalDelta,
      success: choice.isDialectical
    });

    // Check Game Over Condition
    if (capital <= 0 || workerMorale <= 10) {
      currentStage = 'gameover';
      sound.playWarning();
      renderView();
      return;
    }

    // Check Stage Promotion
    const stageConfig = STAGES.find(s => s.id === currentStage);
    if (stageConfig && capital >= stageConfig.targetCapital) {
      if (currentStage === 1) {
        currentStage = 2;
        sound.playFanfare();
        stateManager.state.xp += 80;
      } else if (currentStage === 2) {
        currentStage = 3;
        sound.playFanfare();
        stateManager.state.xp += 100;
      } else if (currentStage === 3) {
        currentStage = 'victory';
        sound.playFanfare();
        stateManager.recordTycoonVictory();
      }
    }

    renderView();
  }

  function restartGame() {
    currentStage = 1;
    capital = 100;
    constantCapital = 60;
    variableCapital = 40;
    surplusRate = 100;
    workerMorale = 80;
    socialScore = 75;
    lastEventResult = null;
    historyLogs = [];
    sound.playClick();
    renderView();
  }

  function renderView() {
    const stageConfig = STAGES.find(s => s.id === (typeof currentStage === 'number' ? currentStage : 3)) || STAGES[0];

    // Victory Screen
    if (currentStage === 'victory') {
      container.innerHTML = `
        <div class="tycoon-container animate-fade-in">
          <div class="tycoon-endgame-modal">
            <div class="endgame-trophy">🏆✨</div>
            <span class="badge-pill" style="background: var(--accent-gold-light); color: var(--accent-amber); font-size: 0.95rem; padding: 0.5rem 1.4rem; border: 1.5px solid var(--accent-gold);">
              VINH DANH ĐỈNH CAO: BẬC THẦY KINH TẾ CHÍNH TRỊ MLN122
            </span>
            <h2 style="font-size: 2.3rem; margin: 1.2rem 0 0.6rem; color: var(--text-heading); font-family: var(--font-heading);">
              CHÚC MỪNG BẠN ĐÃ XÂY DỰNG THÀNH CÔNG DOANH NGHIỆP KTTT 4.0!
            </h2>
            <p style="font-size: 1.05rem; color: var(--text-main); max-width: 680px; margin: 0 auto 1.8rem; line-height: 1.8;">
              Từ số vốn khiêm tốn 100 triệu, bạn đã vượt qua bẫy bóc lột GTTD tuyệt đối, đứng vững trước sóng gió độc quyền và kiến tạo một tập đoàn kinh tế vững mạnh đạt chuẩn <strong>Kinh tế thị trường định hướng XHCN</strong>: Doanh nghiệp thịnh vượng (${capital} Triệu VNĐ), người lao động hạnh phúc (${workerMorale}%), đóng góp xã hội xuất sắc (${socialScore}%) và tự tin hội nhập toàn cầu!
            </p>

            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <button class="btn-primary" id="tycoon-replay-btn" style="padding: 0.85rem 2rem; font-size: 1.05rem;">
                <span>↺ CHƠI LẠI TỪ ĐẦU</span>
              </button>
              <button class="btn-secondary" id="tycoon-exit-btn" style="padding: 0.85rem 2rem; font-size: 1.05rem;">
                <span>🗺️ QUAY LẠI HÀNH TRÌNH CHÍNH</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.getElementById('tycoon-replay-btn').addEventListener('click', restartGame);
      document.getElementById('tycoon-exit-btn').addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });
      return;
    }

    // Game Over Screen
    if (currentStage === 'gameover') {
      container.innerHTML = `
        <div class="tycoon-container animate-fade-in">
          <div class="tycoon-endgame-modal" style="border-color: var(--accent-crimson);">
            <div class="endgame-trophy">⚠️📉</div>
            <span class="badge-pill" style="background: var(--accent-crimson-light); color: var(--accent-crimson); font-size: 0.95rem; padding: 0.5rem 1.4rem;">
              BÁO ĐỘNG KHỦNG HOẢNG KINH TẾ
            </span>
            <h2 style="font-size: 2.1rem; margin: 1.2rem 0 0.6rem; color: var(--accent-crimson); font-family: var(--font-heading);">
              DOANH NGHIỆP CỦA BẠN ĐÃ RƠI VÀO PHÁ SẢN!
            </h2>
            <p style="font-size: 1.05rem; color: var(--text-main); max-width: 640px; margin: 0 auto 1.8rem; line-height: 1.8;">
              ${capital <= 0 
                ? 'Quỹ tiền mặt bị cạn kiệt (-0 VNĐ) do đầu tư sai lầm hoặc bị xử phạt hành vi độc quyền thao túng thị trường!' 
                : 'Mức độ hài lòng của công nhân chạm đáy (< 10%) dẫn tới cuộc bãi công toàn diện, dây chuyền sản xuất tê liệt! Bài học của C. Mác: Lòng tham bóc lột không giới hạn tất yếu dẫn tới sự phản kháng của giai cấp công nhân!'}
            </p>

            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <button class="btn-primary" id="tycoon-retry-btn" style="background: var(--accent-crimson); padding: 0.85rem 2rem; font-size: 1.05rem;">
                <span>↺ THỬ LẠI CHIẾN LƯỢC MỚI</span>
              </button>
              <button class="btn-secondary" id="tycoon-exit-fail-btn">
                <span>🗺️ QUAY LẠI HÀNH TRÌNH CHÍNH</span>
              </button>
            </div>
          </div>
        </div>
      `;
      document.getElementById('tycoon-retry-btn').addEventListener('click', restartGame);
      document.getElementById('tycoon-exit-fail-btn').addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });
      return;
    }

    // Active Stage Navigation
    let stageNavHTML = '';
    STAGES.forEach(st => {
      let statusClass = 'locked';
      if (st.id === currentStage) statusClass = 'active';
      else if (st.id < currentStage) statusClass = 'completed';

      stageNavHTML += `
        <div class="stage-step-card ${statusClass}">
          <div class="stage-num-badge">
            ${st.id < currentStage ? '✓' : st.id}
          </div>
          <div>
            <div style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: ${st.id === currentStage ? 'var(--accent-gold)' : 'var(--text-dim)'}; font-family: var(--font-heading);">
              ${st.badge}
            </div>
            <div style="font-size: 0.95rem; font-weight: 800; color: var(--text-heading); font-family: var(--font-heading);">
              Giai đoạn ${st.id}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted);">${st.targetDesc}</div>
          </div>
        </div>
      `;
    });

    // Choices HTML
    const activeChoices = getActiveChoices();
    let choicesHTML = '';
    activeChoices.forEach(ch => {
      choicesHTML += `
        <button class="decision-card-btn" data-choice-id="${ch.id}">
          <div>
            <div class="decision-card-header">
              <span class="decision-tag" style="background: ${ch.isDialectical ? 'var(--accent-emerald-light)' : 'var(--accent-gold-light)'}; color: ${ch.isDialectical ? 'var(--accent-emerald-dark)' : 'var(--accent-amber)'}; border: 1px solid ${ch.isDialectical ? 'var(--accent-emerald)' : 'var(--accent-gold)'};">
                ${ch.tag}
              </span>
            </div>
            <div class="decision-card-title">${ch.title}</div>
            <div class="decision-card-desc">${ch.desc}</div>
          </div>

          <div class="decision-card-impacts">
            <div class="impact-item">
              <span>💰 Vốn tư bản:</span>
              <span class="${ch.impact.capitalDelta >= 0 ? 'impact-pos' : 'impact-neg'}">
                ${ch.impact.capitalDelta >= 0 ? '+' : ''}${ch.impact.capitalDelta} Triệu
              </span>
            </div>
            ${ch.impact.moraleDelta ? `
              <div class="impact-item">
                <span>👥 Tinh thần thợ:</span>
                <span class="${ch.impact.moraleDelta >= 0 ? 'impact-pos' : 'impact-neg'}">
                  ${ch.impact.moraleDelta >= 0 ? '+' : ''}${ch.impact.moraleDelta}%
                </span>
              </div>
            ` : ''}
            ${ch.impact.socialDelta ? `
              <div class="impact-item">
                <span>🏛️ Trách nhiệm XH:</span>
                <span class="${ch.impact.socialDelta >= 0 ? 'impact-pos' : 'impact-neg'}">
                  ${ch.impact.socialDelta >= 0 ? '+' : ''}${ch.impact.socialDelta}%
                </span>
              </div>
            ` : ''}
          </div>
        </button>
      `;
    });

    // Last Decision Event Feedback Box
    let eventFeedbackHTML = '';
    if (lastEventResult) {
      eventFeedbackHTML = `
        <div class="event-feedback-box ${lastEventResult.isDialectical ? 'success' : 'warning'}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem;">
            <h4 style="font-size: 1.15rem; color: ${lastEventResult.isDialectical ? 'var(--accent-emerald-dark)' : 'var(--accent-amber)'}; font-family: var(--font-heading); margin: 0;">
              ${lastEventResult.outcomeTitle}
            </h4>
            <span class="badge-pill" style="background: var(--bg-card); font-size: 0.78rem;">
              ${lastEventResult.isDialectical ? '✓ Đạt Biện Chứng (+40 XP)' : '⚠️ Lệch Lạc (+15 XP)'}
            </span>
          </div>
          <p style="font-size: 0.98rem; color: var(--text-main); line-height: 1.7; margin-bottom: 0.8rem;">
            ${lastEventResult.outcomeDesc}
          </p>
          <div class="lens-analysis-box">
            <strong style="color: var(--accent-purple); font-size: 0.88rem; display: block; margin-bottom: 0.35rem; font-family: var(--font-heading);">
              🔍 Soi rọi bằng Lăng kính Kinh tế chính trị Mác – Lênin (MLN122):
            </strong>
            <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.65; margin: 0;">
              ${lastEventResult.philosophicalLens}
            </p>
          </div>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="tycoon-container animate-fade-in">
        <!-- Top Nav -->
        <div class="tycoon-header">
          <button class="back-to-map-btn" id="tycoon-back-btn">
            <span>← Quay lại bản đồ hành trình</span>
          </button>
          <div class="tycoon-badge-bar">
            <span class="badge-pill" style="background: linear-gradient(135deg, #f59e0b, #ef4444); color: #ffffff; font-weight: 800;">
              🏭 SIMULATOR: CAPITAL TYCOON
            </span>
            <button class="nav-btn" id="tycoon-reset-btn" style="border-color: rgba(220, 38, 38, 0.3); color: var(--accent-crimson); padding: 0.35rem 0.85rem; font-size: 0.8rem;">
              <span>↺ Chơi lại</span>
            </button>
          </div>
        </div>

        <!-- Stage Navigation Stepper -->
        <div class="tycoon-stage-nav">
          ${stageNavHTML}
        </div>

        <!-- Dashboard Metrics Grid -->
        <div class="tycoon-dashboard">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.9rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="badge-pill" style="background: var(--accent-blue-light); color: var(--accent-blue);">
                BẢNG ĐIỀU HÀNH DOANH NGHIỆP • CÔNG THỨC: T - H - T'
              </span>
              <h3 style="font-size: 1.35rem; margin: 0.4rem 0 0; color: var(--text-heading); font-family: var(--font-heading);">
                ${stageConfig.title}
              </h3>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.82rem; color: var(--text-muted);">Mục tiêu giai đoạn:</span>
              <div style="font-size: 1.1rem; font-weight: 800; color: var(--accent-gold); font-family: var(--font-heading);">
                ${capital} / ${stageConfig.targetCapital} Triệu VNĐ
              </div>
            </div>
          </div>

          <div class="metrics-grid-tycoon">
            <div class="metric-pill-box">
              <div class="metric-label-row">
                <span>💰 VỐN TƯ BẢN (K)</span>
                <span>💵</span>
              </div>
              <div class="metric-val-number" style="color: var(--accent-gold);">
                ${capital}M
              </div>
              <div class="metric-subtext">Tích lũy tiền mặt (T')</div>
            </div>

            <div class="metric-pill-box">
              <div class="metric-label-row">
                <span>🏭 BẤT BIẾN (c)</span>
                <span>⚙️</span>
              </div>
              <div class="metric-val-number" style="color: var(--accent-blue);">
                ${constantCapital}M
              </div>
              <div class="metric-subtext">Máy móc & xưởng</div>
            </div>

            <div class="metric-pill-box">
              <div class="metric-label-row">
                <span>👥 KHẢ BIẾN (v)</span>
                <span>🤝</span>
              </div>
              <div class="metric-val-number" style="color: var(--accent-emerald);">
                ${variableCapital}M
              </div>
              <div class="metric-subtext">Quỹ lương thợ</div>
            </div>

            <div class="metric-pill-box">
              <div class="metric-label-row">
                <span>⚡ TỶ SUẤT (m')</span>
                <span>📊</span>
              </div>
              <div class="metric-val-number" style="color: var(--accent-crimson);">
                ${surplusRate}%
              </div>
              <div class="metric-subtext">Trình độ bóc lột m/v</div>
            </div>

            <div class="metric-pill-box">
              <div class="metric-label-row">
                <span>❤️ TINH THẦN THỢ</span>
                <span>😊</span>
              </div>
              <div class="metric-val-number" style="color: ${workerMorale >= 50 ? 'var(--accent-emerald)' : 'var(--accent-crimson)'};">
                ${workerMorale}%
              </div>
              <div class="metric-subtext">Nếu &lt; 10% sẽ bãi công!</div>
            </div>
          </div>
        </div>

        <!-- Factory Narrative & Decision Panel -->
        <div class="factory-view-panel">
          <div class="factory-status-badge">
            <span>🎯</span>
            <span>QUYẾT ĐỊNH CHIẾN LƯỢC CHO GIAI ĐOẠN NÀY:</span>
          </div>
          <p class="factory-narrative-story">
            ${stageConfig.subtitle} Hãy cân nhắc kỹ lưỡng giữa <strong>lợi ích kinh tế trước mắt</strong> và <strong>quy luật khách quan dài hạn</strong> để đưa doanh nghiệp vượt qua thử thách!
          </p>

          <!-- Choices Grid -->
          <div class="decision-cards-grid">
            ${choicesHTML}
          </div>

          <!-- Dynamic Event Result Box -->
          ${eventFeedbackHTML}
        </div>
      </div>
    `;

    // Attach Event Handlers
    document.getElementById('tycoon-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    const resetBtn = document.getElementById('tycoon-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', restartGame);

    container.querySelectorAll('.decision-card-btn[data-choice-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-choice-id');
        const choice = activeChoices.find(c => c.id === id);
        if (choice) handleDecision(choice);
      });
    });
  }

  renderView();
}
