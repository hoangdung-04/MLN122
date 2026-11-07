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
  let turnCount = 1;
  let historyLogs = [];
  let lastEventResult = null;
  let stageClearedPending = false; // When true, prompt user to advance to next stage

  // Stages Configuration
  const STAGES = [
    {
      id: 1,
      title: 'GIAI ĐOẠN 1: KHỞI NGHIỆP TƯ BẢN & BÍ MẬT GTTD (CHƯƠNG 3)',
      subtitle: 'Nắm vững công thức T - H - T\', phân chia c - v, GTTD tuyệt đối vs tương đối và Tích lũy tư bản.',
      targetCapital: 500,
      targetDesc: 'Mục tiêu: Tích lũy tư bản đạt 500 Triệu VNĐ.',
      badge: 'CHƯƠNG 3: GIÁ TRỊ THẶNG DƯ',
      icon: '⚙️'
    },
    {
      id: 2,
      title: 'GIAI ĐOẠN 2: BÃO TÁP CẠNH TRANH & ĐỘC QUYỀN (CHƯƠNG 4)',
      subtitle: 'Quy luật tích tụ, tập trung tư bản, giá cả độc quyền và hình thành lợi nhuận bình quân.',
      targetCapital: 2000,
      targetDesc: 'Mục tiêu: Đạt quy mô Tập đoàn 2.000 Triệu VNĐ (2 Tỷ).',
      badge: 'CHƯƠNG 4: CẠNH TRANH & ĐỘC QUYỀN',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'GIAI ĐOẠN 3: KTTT ĐỊNH HƯỚNG XHCN & THÍCH ỨNG 4.0 (CHƯƠNG 5 & 6)',
      subtitle: 'Hài hòa lợi ích kinh tế, chuyển đổi số toàn diện và hội nhập kinh tế quốc tế độc lập tự chủ.',
      targetCapital: 5000,
      targetDesc: 'Mục tiêu: Doanh nghiệp tiêu biểu KTTT Định hướng XHCN & Đạt 5.000 Triệu VNĐ.',
      badge: 'CHƯƠNG 5 & 6: MÔ HÌNH VIỆT NAM',
      icon: '🚀'
    }
  ];

  // Stage 1 Choices (Chương 3)
  const STAGE_1_CHOICES = [
    {
      id: 's1-opt1',
      tag: 'GTTD TUYỆT ĐỐI',
      icon: '⏱️',
      title: 'Kéo dài ngày làm việc lên 14 giờ / ngày',
      desc: 'Bắt công nhân tăng ca kiệt lực vào ban đêm, giữ nguyên mức lương cơ bản (thời gian lao động tất yếu không đổi).',
      isDialectical: false,
      impact: {
        capitalDelta: +90,
        moraleDelta: -45,
        surplusDelta: +150,
        cDelta: 0,
        vDelta: 0
      },
      outcomeTitle: '⚠️ Lợi nhuận bùng nổ ngắn hạn nhưng công nhân kiệt sức!',
      outcomeDesc: 'Bạn thu được lượng GTTD tuyệt đối khổng lồ trong những tuần đầu (+90M). Nhưng sau đó, công nhân suy nhược thể lực, tỉ lệ sản phẩm lỗi tăng vọt và nổ ra nguy cơ đình công gay gắt!',
      philosophicalLens: 'Lý luận C. Mác chỉ rõ: Sản xuất GTTD tuyệt đối bị giới hạn bởi ranh giới sinh lý tự nhiên của con người và sự phản kháng tất yếu của giai cấp công nhân. Không thể làm giàu bền vững bằng bóc lột thể xác thô bạo.'
    },
    {
      id: 's1-opt2',
      tag: 'CƯỜNG ĐỘ LAO ĐỘNG',
      icon: '📹',
      title: 'Lắp camera giám sát & Ép định mức gắt gao',
      desc: 'Ép công nhân làm việc căng thẳng gấp đôi trong 8 tiếng, cắt giảm thời gian nghỉ ngơi giải lao giữa giờ.',
      isDialectical: false,
      impact: {
        capitalDelta: +70,
        moraleDelta: -30,
        surplusDelta: +80,
        cDelta: +10,
        vDelta: 0
      },
      outcomeTitle: '⚠️ Năng suất bề nổi tăng nhưng thợ giỏi xin nghỉ việc!',
      outcomeDesc: 'Sản lượng tăng ngắn hạn (+70M) nhưng áp lực tâm lý đè nặng khiến tỷ lệ tai nạn lao động tăng và các thợ lành nghề bậc cao đồng loạt xin thôi việc.',
      philosophicalLens: 'Tăng cường độ lao động thực chất là tăng sự hao phí thể lực và thần kinh trong cùng đơn vị thời gian, sớm muộn cũng dẫn tới sự kiệt quệ của sức lao động.'
    },
    {
      id: 's1-opt3',
      tag: 'GTTD TƯƠNG ĐỐI & SIÊU NGẠCH',
      icon: '🤖',
      title: 'Đổi mới công nghệ máy móc tự động hóa',
      desc: 'Chi 40 triệu nâng cấp dây chuyền bán tự động, rút ngắn thời gian lao động tất yếu, nâng cao năng suất cá biệt.',
      isDialectical: true,
      impact: {
        capitalDelta: +140,
        moraleDelta: +15,
        surplusDelta: +60,
        cDelta: +40,
        vDelta: +10
      },
      outcomeTitle: '✓ BƯỚC NHẢY VỌT: Năng suất tăng phi mã, thu GTTD siêu ngạch!',
      outcomeDesc: 'Thời gian lao động cần thiết để bù đắp lương giảm xuống chỉ còn 2.5 giờ. Doanh nghiệp bán giá rẻ hơn thị trường nhưng vẫn thu siêu lợi nhuận (+140M), công nhân phấn khởi vì máy móc gánh đỡ việc nặng!',
      philosophicalLens: 'Vận dụng chuẩn xác phương pháp sản xuất GTTD tương đối và siêu ngạch của C. Mác: Tăng năng suất lao động xã hội thông qua cải tiến kỹ thuật là chìa khóa vàng tích lũy tư bản nhân văn và bền vững.'
    },
    {
      id: 's1-opt4',
      tag: 'TÍCH LŨY TƯ BẢN',
      icon: '📈',
      title: 'Tái sản xuất mở rộng: Trích 60% thặng dư tái đầu tư',
      desc: 'Không rút tiền mặt tiêu xài cá nhân, dùng 60% giá trị thặng dư thu được để mua thêm máy móc hiện đại và mở rộng xưởng.',
      isDialectical: true,
      impact: {
        capitalDelta: +180,
        moraleDelta: +20,
        surplusDelta: +40,
        cDelta: +60,
        vDelta: +20
      },
      outcomeTitle: '✓ TÍCH LŨY TƯ BẢN THÀNH CÔNG: Quy mô nhà máy mở rộng gấp đôi!',
      outcomeDesc: 'Quy mô sản xuất mở rộng, tư bản ứng trước tăng trưởng vượt bậc (+180M), tiền đề biến cơ sở tư nhân thành xí nghiệp quy mô lớn!',
      philosophicalLens: 'Đúng bản chất của Tích lũy tư bản: Biến một phần giá trị thặng dư thành tư bản phụ thêm để tái sản xuất mở rộng, chuyển hóa số lượng thành chất lượng phát triển.'
    }
  ];

  // Stage 2 Choices (Chương 4)
  const STAGE_2_CHOICES = [
    {
      id: 's2-opt1',
      tag: 'PHÁ GIÁ CẠNH TRANH',
      icon: '📉',
      title: '"Đốt tiền" bán dưới giá thành để bóp nghẹt đối thủ',
      desc: 'Chấp nhận chịu lỗ 150 triệu để độc chiếm thị phần, ép các cơ sở kinh doanh vừa và nhỏ phá sản rút lui.',
      isDialectical: false,
      impact: {
        capitalDelta: -120,
        moraleDelta: -15,
        surplusDelta: +50,
        cDelta: +80,
        vDelta: 0
      },
      outcomeTitle: '⚠️ Độc chiếm thị phần nhưng tổn thất tài chính và bị tẩy chay!',
      outcomeDesc: 'Các đối thủ nhỏ giải thể nhưng bạn bị điều tra hành vi bán phá giá phản cạnh tranh (-120M), quỹ tiền mặt bị bào mòn nặng nề.',
      philosophicalLens: 'Biểu hiện tiêu cực của cạnh tranh dẫn đến độc quyền: Lạm dụng sức mạnh tư bản để bóp nghẹt cạnh tranh tự do, triệt tiêu động lực đổi mới sáng tạo xã hội.'
    },
    {
      id: 's2-opt2',
      tag: 'TẬP TRUNG TƯ BẢN (M&A)',
      icon: '🤝',
      title: 'Mua lại & Sáp nhập đối thủ công nghệ (M&A)',
      desc: 'Hợp nhất 2 đối thủ cạnh tranh vào tập đoàn, nâng cao cấu tạo hữu cơ của tư bản (c/v), tối ưu chuỗi cung ứng.',
      isDialectical: true,
      impact: {
        capitalDelta: +450,
        moraleDelta: +10,
        surplusDelta: +80,
        cDelta: +150,
        vDelta: +40
      },
      outcomeTitle: '✓ HỢP NHẤT TẬP TRUNG TƯ BẢN: Trở thành Tập đoàn thống lĩnh thị phần!',
      outcomeDesc: 'Quy mô tư bản tăng vọt nhờ tập trung tư bản (+450M). Hệ thống cung ứng được tinh gọn, năng lực cạnh tranh vươn lên dẫn đầu thị trường.',
      philosophicalLens: 'Vận dụng chuẩn xác quy luật: Tự do cạnh tranh tất yếu dẫn đến tích tụ và tập trung sản xuất, sinh ra các tổ chức kinh tế quy mô lớn có sức mạnh công nghệ vượt trội.'
    },
    {
      id: 's2-opt3',
      tag: 'LỢI NHUẬN BÌNH QUÂN',
      icon: '💡',
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
      outcomeDesc: 'Bạn chuyển dịch vốn nhạy bén trước khi tỷ suất lợi nhuận bình quân san phẳng thị trường, gia tăng tích lũy tư bản thần tốc (+550M).',
      philosophicalLens: 'Vận dụng chuẩn xác quy luật di chuyển tự do của tư bản giữa các ngành: Tư bản luôn chảy từ nơi có tỷ suất lợi nhuận thấp sang nơi có tỷ suất cao, hình thành tỷ suất lợi nhuận bình quân.'
    },
    {
      id: 's2-opt4',
      tag: 'GIÁ CẢ ĐỘC QUYỀN',
      icon: '⚖️',
      title: 'Liên minh ngầm áp đặt giá độc quyền cao cho người dùng',
      desc: 'Lợi dụng vị thế thống lĩnh để bắt tay đối thủ tăng giá 40%, ép khách hàng không có lựa chọn nào khác.',
      isDialectical: false,
      impact: {
        capitalDelta: -180,
        moraleDelta: -40,
        surplusDelta: +120,
        cDelta: 0,
        vDelta: 0
      },
      outcomeTitle: '💥 CƠ QUAN QUẢN LÝ PHẠT NẶNG: Bị phạt nặng vì lũng đoạn!',
      outcomeDesc: 'Nhà nước can thiệp theo Luật Cạnh tranh, xử phạt hành vi liên minh thao túng giá cả độc quyền (-180M); khách hàng quay lưng tẩy chay.',
      philosophicalLens: 'Chủ nghĩa tư bản độc quyền sinh ra giá cả độc quyền để chiếm đoạt lợi nhuận độc quyền cao, tất yếu đòi hỏi sự can thiệp điều tiết của Nhà nước để bảo vệ lợi ích nhân dân.'
    }
  ];

  // Stage 3 Choices (Chương 5 & 6)
  const STAGE_3_CHOICES = [
    {
      id: 's3-opt1',
      tag: 'CÔNG NGHIỆP HÓA 4.0',
      icon: '🧠',
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
      outcomeTitle: '✓ BƯỚC NHẢY VỌT 4.0: Năng suất nhảy vọt, không một ai bị bỏ lại!',
      outcomeDesc: 'Doanh nghiệp trở thành hình mẫu tiên phong chuyển đổi số quốc gia (+800M); công nhân làm chủ AI, thu nhập tăng vọt, thương hiệu uy tín vang dội.',
      philosophicalLens: 'Thực hiện chuẩn mực CNH, HĐH thích ứng CMCN 4.0: Phát triển lực lượng sản xuất hiện đại đi đôi với hoàn thiện quan hệ sản xuất tiến bộ, coi con người là trung tâm và chủ thể sáng tạo.'
    },
    {
      id: 's3-opt2',
      tag: 'HỘI NHẬP & CHUẨN XANH ESG',
      icon: '🌍',
      title: 'Chuyển đổi xanh & Đạt chứng chỉ xuất khẩu EU/Mỹ',
      desc: 'Đầu tư hệ thống năng lượng tái tạo, giảm phát thải carbon, truy xuất nguồn gốc minh bạch để mở rộng thị trường toàn cầu.',
      isDialectical: true,
      impact: {
        capitalDelta: +950,
        moraleDelta: +25,
        socialDelta: +35,
        cDelta: +180,
        vDelta: +60
      },
      outcomeTitle: '✓ HỘI NHẬP THẾ HỆ MỚI: Đơn hàng quốc tế bùng nổ sang EU & Bắc Mỹ!',
      outcomeDesc: 'Vượt qua mọi rào cản kỹ thuật khắt khe, doanh nghiệp ký kết các hợp đồng triệu USD (+950M) thông qua các hiệp định thương mại tự do EVFTA và CPTPP.',
      philosophicalLens: 'Vận dụng chuẩn xác phương hướng hội nhập kinh tế quốc tế hiệu quả: Nâng cao năng lực cạnh tranh quốc gia, chủ động đáp ứng các tiêu chuẩn xanh hiện đại để vươn tầm toàn cầu.'
    },
    {
      id: 's3-opt3',
      tag: 'HÀI HÒA LỢI ÍCH XHCN',
      icon: '🏛️',
      title: 'Chia sẻ cổ phần ESOP & Trích lập quỹ phúc lợi xã hội',
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
      outcomeDesc: 'Người lao động cống hiến hết mình vì thấy mình là người làm chủ thực sự (+600M); doanh nghiệp nhận Giải thưởng Doanh nghiệp vì cộng đồng của Chính phủ.',
      philosophicalLens: 'Thể hiện sâu sắc bản chất KTTT định hướng XHCN: Kết hợp hài hòa 3 lợi ích (Cá nhân - Doanh nghiệp - Xã hội), gắn tăng trưởng kinh tế với tiến bộ và công bằng xã hội.'
    },
    {
      id: 's3-opt4',
      tag: 'GIA CÔNG THUẦN TÚY',
      icon: '📦',
      title: 'Từ chối đầu tư công nghệ, tiếp tục gia công giá rẻ thô sơ',
      desc: 'Không chịu chuyển đổi xanh, tiếp tục dùng máy cũ gây ô nhiễm và chỉ nhận đơn hàng gia công chi phí thấp.',
      isDialectical: false,
      impact: {
        capitalDelta: -300,
        moraleDelta: -25,
        socialDelta: -30,
        cDelta: 0,
        vDelta: 0
      },
      outcomeTitle: '💥 RƠI VÀO BẪY THU NHẬP TRUNG BÌNH: Đơn hàng bị hủy hàng loạt!',
      outcomeDesc: 'Thị trường quốc tế áp thuế carbon nặng nề (-300M), đối thủ ứng dụng tự động hóa làm rẻ và nhanh gấp 10 lần khiến doanh nghiệp mất thị phần.',
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
    turnCount++;
    lastEventResult = choice;

    // Apply Impacts
    capital += choice.impact.capitalDelta;
    if (choice.impact.moraleDelta) workerMorale = Math.max(0, Math.min(100, workerMorale + choice.impact.moraleDelta));
    if (choice.impact.socialDelta) socialScore = Math.max(0, Math.min(100, socialScore + choice.impact.socialDelta));
    if (choice.impact.surplusDelta) surplusRate += choice.impact.surplusDelta;
    if (choice.impact.cDelta) constantCapital += choice.impact.cDelta;
    if (choice.impact.vDelta) variableCapital += choice.impact.vDelta;

    // Play Audio & XP
    if (choice.isDialectical) {
      sound.playDialecticalSuccess();
      stateManager.state.xp += 40;
    } else {
      sound.playWarning();
      stateManager.state.xp += 15;
    }

    historyLogs.unshift({
      turn: turnCount - 1,
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
      stageClearedPending = true;
      sound.playFanfare();
    }

    renderView();

    // Auto-scroll gently to the event feedback result
    setTimeout(() => {
      const feedbackEl = container.querySelector('#tycoon-event-feedback');
      if (feedbackEl) {
        feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 100);
  }

  function advanceToNextStage() {
    stageClearedPending = false;
    lastEventResult = null;
    sound.playFanfare();

    if (currentStage === 1) {
      currentStage = 2;
      stateManager.state.xp += 80;
    } else if (currentStage === 2) {
      currentStage = 3;
      stateManager.state.xp += 100;
    } else if (currentStage === 3) {
      currentStage = 'victory';
      stateManager.recordTycoonVictory();
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
    turnCount = 1;
    lastEventResult = null;
    stageClearedPending = false;
    historyLogs = [];
    sound.playClick();
    renderView();
  }

  function renderView() {
    const stageConfig = STAGES.find(s => s.id === (typeof currentStage === 'number' ? currentStage : 3)) || STAGES[0];

    // 1. VICTORY SCREEN
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

    // 2. GAME OVER SCREEN
    if (currentStage === 'gameover') {
      container.innerHTML = `
        <div class="tycoon-container animate-fade-in">
          <div class="tycoon-endgame-modal" style="border-color: var(--accent-crimson);">
            <div class="endgame-trophy">⚠️📉</div>
            <span class="badge-pill" style="background: var(--accent-crimson-light); color: var(--accent-crimson); font-size: 0.95rem; padding: 0.5rem 1.4rem;">
              BÁO ĐỘNG KHỦNG HOẢNG KINH TẾ
            </span>
            <h2 style="font-size: 2.1rem; margin: 1.2rem 0 0.6rem; color: var(--accent-crimson); font-family: var(--font-heading);">
              DOANH NGHIỆP CỦA BẠN ĐÃ RƠI VÀO BẾ TẮC!
            </h2>
            <p style="font-size: 1.05rem; color: var(--text-main); max-width: 640px; margin: 0 auto 1.8rem; line-height: 1.8;">
              ${capital <= 0 
                ? 'Quỹ tiền mặt bị cạn kiệt (dưới 0 VNĐ) do bán phá giá sai lầm hoặc bị xử phạt hành vi lũng đoạn thị trường!' 
                : 'Mức độ hài lòng của công nhân chạm đáy (< 10%) dẫn tới cuộc bãi công toàn diện, xưởng sản xuất tê liệt! Bài học của C. Mác: Lòng tham bóc lột sức lao động không giới hạn tất yếu sinh ra sự kháng cự của giai cấp công nhân!'}
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

    // 3. MAIN GAMEPLAY INTERFACE
    // Compact Stepper Navigation
    let stageNavHTML = '';
    STAGES.forEach(st => {
      let statusClass = 'locked';
      let icon = st.icon;
      if (st.id === currentStage) {
        statusClass = 'active';
      } else if (st.id < currentStage) {
        statusClass = 'completed';
        icon = '✓';
      }

      stageNavHTML += `
        <div class="stage-nav-pill ${statusClass}">
          <span class="stage-pill-icon">${icon}</span>
          <div class="stage-pill-info">
            <span class="stage-pill-tag">Giai đoạn ${st.id}</span>
            <span class="stage-pill-name">${st.id === 1 ? 'Khởi nghiệp GTTD' : st.id === 2 ? 'Cạnh tranh & Độc quyền' : 'KTTT XHCN & 4.0'}</span>
          </div>
        </div>
      `;
    });

    // Capital Target Progress
    const targetCap = stageConfig.targetCapital;
    const progressPercent = Math.min(100, Math.max(0, Math.round((capital / targetCap) * 100)));

    // Active Strategy Choices HTML
    const activeChoices = getActiveChoices();
    let choicesHTML = '';
    activeChoices.forEach((ch, idx) => {
      const isGood = ch.isDialectical;
      choicesHTML += `
        <div class="strategy-card ${isGood ? 'strategy-card-positive' : 'strategy-card-risky'}">
          <div class="strategy-card-top">
            <span class="strategy-tag ${isGood ? 'tag-emerald' : 'tag-amber'}">
              ${ch.icon} ${ch.tag}
            </span>
            <span class="strategy-opt-num">Phương án #${idx + 1}</span>
          </div>

          <h4 class="strategy-title">${ch.title}</h4>
          <p class="strategy-desc">${ch.desc}</p>

          <div class="strategy-impact-row">
            <span class="impact-chip ${ch.impact.capitalDelta >= 0 ? 'pos' : 'neg'}">
              💰 Vốn: ${ch.impact.capitalDelta >= 0 ? '+' : ''}${ch.impact.capitalDelta}M
            </span>
            ${ch.impact.moraleDelta ? `
              <span class="impact-chip ${ch.impact.moraleDelta >= 0 ? 'pos' : 'neg'}">
                👥 Thợ: ${ch.impact.moraleDelta >= 0 ? '+' : ''}${ch.impact.moraleDelta}%
              </span>
            ` : ''}
            ${ch.impact.socialDelta ? `
              <span class="impact-chip ${ch.impact.socialDelta >= 0 ? 'pos' : 'neg'}">
                🏛️ XH: ${ch.impact.socialDelta >= 0 ? '+' : ''}${ch.impact.socialDelta}%
              </span>
            ` : ''}
          </div>

          <!-- BIG OBVIOUS PLAY BUTTON -->
          <button class="btn-execute-strategy ${isGood ? 'btn-exec-green' : 'btn-exec-amber'}" data-choice-id="${ch.id}">
            <span>⚡ CHỌN THI HÀNH PHƯƠNG ÁN NÀY →</span>
          </button>
        </div>
      `;
    });

    // Last Decision Event Feedback Box
    let eventFeedbackHTML = '';
    if (lastEventResult) {
      eventFeedbackHTML = `
        <div id="tycoon-event-feedback" class="event-feedback-box ${lastEventResult.isDialectical ? 'success' : 'warning'}">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.6rem; flex-wrap: wrap; gap: 0.5rem;">
            <h4 style="font-size: 1.15rem; color: ${lastEventResult.isDialectical ? 'var(--accent-emerald-dark)' : 'var(--accent-amber)'}; font-family: var(--font-heading); margin: 0;">
              ${lastEventResult.outcomeTitle}
            </h4>
            <span class="badge-pill" style="background: var(--bg-card); font-size: 0.78rem;">
              ${lastEventResult.isDialectical ? '✓ Chuẩn Biện Chứng (+40 XP)' : '⚠️ Sai Quy Luật (+15 XP)'}
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

    // Stage Cleared Banner (If target reached)
    let stageClearedHTML = '';
    if (stageClearedPending) {
      stageClearedHTML = `
        <div class="stage-cleared-banner animate-fade-in">
          <div class="cleared-icon">🎉✨</div>
          <div style="flex-grow: 1;">
            <div style="font-weight: 800; font-size: 1.15rem; color: #ffffff; font-family: var(--font-heading);">
              XUẤT SẮC! BẠN ĐÃ TÍCH LŨY ĐỦ ${capital} TRIỆU VNĐ!
            </div>
            <div style="font-size: 0.92rem; color: rgba(255,255,255,0.9); margin-top: 0.2rem;">
              Đã hoàn thành xuất sắc mục tiêu của ${stageConfig.badge}. Sẵn sàng nâng cấp doanh nghiệp lên giai đoạn tiếp theo!
            </div>
          </div>
          <button class="btn-advance-stage" id="tycoon-advance-btn">
            <span>🚀 TIẾN LÊN GIAI ĐOẠN ${currentStage + 1} →</span>
          </button>
        </div>
      `;
    }

    container.innerHTML = `
      <div class="tycoon-container animate-fade-in">
        <!-- Compact Top Nav Bar -->
        <div class="tycoon-top-bar">
          <button class="back-to-map-btn" id="tycoon-back-btn">
            <span>← Bản đồ hành trình</span>
          </button>
          <div class="tycoon-title-center">
            <span class="badge-pill" style="background: linear-gradient(135deg, #f59e0b, #ef4444); color: #ffffff; font-weight: 800;">
              🏭 SIMULATOR: CAPITAL TYCOON
            </span>
          </div>
          <button class="nav-btn" id="tycoon-reset-btn" style="border-color: rgba(220, 38, 38, 0.3); color: var(--accent-crimson); padding: 0.35rem 0.85rem; font-size: 0.8rem;">
            <span>↺ Chơi lại</span>
          </button>
        </div>

        <!-- Sleek Stage Stepper -->
        <div class="tycoon-stage-stepper">
          ${stageNavHTML}
        </div>

        <!-- Stage Cleared Notification (If unlocked next stage) -->
        ${stageClearedHTML}

        <!-- Compact Enterprise HUD (Heads-Up Display) -->
        <div class="tycoon-hud-panel">
          <div class="hud-header-row">
            <div class="hud-stage-title">
              <span class="hud-phase-tag">${stageConfig.badge}</span>
              <h3 class="hud-main-title">${stageConfig.title}</h3>
              <p class="hud-sub-desc">${stageConfig.subtitle}</p>
            </div>
            
            <div class="hud-goal-tracker">
              <div class="goal-label-row">
                <span>🎯 TIẾN ĐỘ TÍCH LŨY VỐN:</span>
                <span class="goal-val-highlight">${capital} / ${targetCap}M VNĐ</span>
              </div>
              <div class="tycoon-progress-track">
                <div class="tycoon-progress-fill" style="width: ${progressPercent}%;"></div>
              </div>
              <div class="goal-subtext">
                ${capital >= targetCap ? '✅ Đã hoàn thành mục tiêu!' : `Còn thiếu +${targetCap - capital}M VNĐ để lên giai đoạn kế tiếp`}
              </div>
            </div>
          </div>

          <!-- 5 Vital Metric Cards -->
          <div class="hud-metrics-row">
            <div class="hud-metric-card">
              <div class="hud-m-head">
                <span>💰 TƯ BẢN ỨNG TRƯỚC (K)</span>
              </div>
              <div class="hud-m-val" style="color: var(--accent-gold);">${capital}M</div>
              <div class="hud-m-note">Tích lũy tiền mặt (T')</div>
            </div>

            <div class="hud-metric-card">
              <div class="hud-m-head">
                <span>🏭 BẤT BIẾN (c)</span>
              </div>
              <div class="hud-m-val" style="color: var(--accent-blue);">${constantCapital}M</div>
              <div class="hud-m-note">Máy móc & xưởng</div>
            </div>

            <div class="hud-metric-card">
              <div class="hud-m-head">
                <span>👥 KHẢ BIẾN (v)</span>
              </div>
              <div class="hud-m-val" style="color: var(--accent-emerald);">${variableCapital}M</div>
              <div class="hud-m-note">Quỹ tiền lương</div>
            </div>

            <div class="hud-metric-card">
              <div class="hud-m-head">
                <span>⚡ TỶ SUẤT (m')</span>
              </div>
              <div class="hud-m-val" style="color: var(--accent-crimson);">${surplusRate}%</div>
              <div class="hud-m-note">Tỷ suất GTTD m/v</div>
            </div>

            <div class="hud-metric-card">
              <div class="hud-m-head">
                <span>❤️ TINH THẦN THỢ</span>
              </div>
              <div class="hud-m-val" style="color: ${workerMorale >= 50 ? 'var(--accent-emerald)' : 'var(--accent-crimson)'};">${workerMorale}%</div>
              <div class="hud-m-note">${workerMorale <= 20 ? '⚠️ Nguy cơ bãi công!' : 'Ổn định'}</div>
            </div>
          </div>
        </div>

        <!-- INSTRUCTION BANNER (Prominent call-to-action) -->
        <div class="gameplay-action-header">
          <div class="action-pulse-dot"></div>
          <div>
            <h3 class="action-heading">🎮 BÀN ĐIỀU KHIỂN CHIẾN LƯỢC • LƯỢT ĐIỀU HÀNH #${turnCount}</h3>
            <p class="action-subtext">Hãy bấm chọn 1 trong 4 chiến lược dưới đây để chạy chu kỳ sản xuất (T - H - T') và kiểm tra năng lực quản trị kinh tế chính trị:</p>
          </div>
        </div>

        <!-- Strategy Cards Grid -->
        <div class="strategy-cards-grid">
          ${choicesHTML}
        </div>

        <!-- Event Result & Marx Critique Box -->
        ${eventFeedbackHTML}
      </div>
    `;

    // Event Listeners
    document.getElementById('tycoon-back-btn').addEventListener('click', () => {
      sound.playClick();
      onBackToMap();
    });

    const resetBtn = document.getElementById('tycoon-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', restartGame);

    const advanceBtn = document.getElementById('tycoon-advance-btn');
    if (advanceBtn) advanceBtn.addEventListener('click', advanceToNextStage);

    container.querySelectorAll('.btn-execute-strategy[data-choice-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-choice-id');
        const choice = activeChoices.find(c => c.id === id);
        if (choice) handleDecision(choice);
      });
    });
  }

  renderView();
}
