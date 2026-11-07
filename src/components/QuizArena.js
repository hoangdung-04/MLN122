import { QUIZ_QUESTIONS } from '../data/quizQuestions.js';
import { stateManager } from '../core/state.js';
import { sound } from '../core/audio.js';

export function renderQuizArena(container, onBackToMap) {
  // Game States: 'lobby' | 'playing' | 'summary'
  let gameState = 'lobby';
  let selectedMode = 'quick'; // 'quick' (10) | 'all' (20) | 'focus' (15)
  let activeQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let maxStreak = 0;
  let correctCount = 0;
  let userAnswers = []; // { question, selectedIndex, isCorrect, timeSpent }

  // Timer & Power-ups
  const TIME_PER_QUESTION = 20; // seconds
  let timeLeft = TIME_PER_QUESTION;
  let timerInterval = null;
  let isTimerFrozen = false;
  let isAnswerSubmitted = false;

  // Lifelines (1 per match)
  let lifelines = {
    fiftyFifty: true,
    freezeTime: true,
    hint: true
  };
  let activeHint = null;
  let hiddenOptionIndices = [];

  // Fisher-Yates shuffle
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function startQuiz() {
    let pool = [...QUIZ_QUESTIONS];
    if (selectedMode === 'focus') {
      pool = QUIZ_QUESTIONS.filter(q => q.chapter === 3 || q.chapter === 5 || q.chapter === 6);
    }
    pool = shuffleArray(pool);

    const count = selectedMode === 'quick' ? 10 : selectedMode === 'focus' ? 15 : 20;
    activeQuestions = pool.slice(0, Math.min(count, pool.length));

    currentIndex = 0;
    score = 0;
    streak = 0;
    maxStreak = 0;
    correctCount = 0;
    userAnswers = [];
    lifelines = { fiftyFifty: true, freezeTime: true, hint: true };
    activeHint = null;
    hiddenOptionIndices = [];
    gameState = 'playing';

    sound.playClick();
    loadQuestion(0);
  }

  function loadQuestion(index) {
    currentIndex = index;
    isAnswerSubmitted = false;
    isTimerFrozen = false;
    activeHint = null;
    hiddenOptionIndices = [];
    timeLeft = TIME_PER_QUESTION;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (!isTimerFrozen && !isAnswerSubmitted) {
        timeLeft--;
        const timerFill = container.querySelector('#quiz-timer-fill');
        const timerNum = container.querySelector('#quiz-timer-num');
        if (timerFill) {
          const percent = (timeLeft / TIME_PER_QUESTION) * 100;
          timerFill.style.width = `${percent}%`;
          if (timeLeft <= 5) {
            timerFill.style.background = 'var(--accent-crimson)';
          } else if (timeLeft <= 10) {
            timerFill.style.background = 'var(--accent-gold)';
          }
        }
        if (timerNum) timerNum.textContent = `${timeLeft}s`;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          handleTimeOut();
        }
      }
    }, 1000);

    renderView();
  }

  function handleAnswer(selectedIndex) {
    if (isAnswerSubmitted) return;
    isAnswerSubmitted = true;
    clearInterval(timerInterval);

    const q = activeQuestions[currentIndex];
    const isCorrect = selectedIndex === q.correctIndex;
    const timeSpent = TIME_PER_QUESTION - timeLeft;

    let pointsGained = 0;
    if (isCorrect) {
      correctCount++;
      streak++;
      if (streak > maxStreak) maxStreak = streak;

      // Quizizz-style dynamic scoring: 1000 base + speed bonus + streak multiplier
      const speedBonus = Math.round((timeLeft / TIME_PER_QUESTION) * 500);
      const streakMultiplier = streak >= 5 ? 2.0 : streak >= 3 ? 1.5 : streak >= 2 ? 1.2 : 1.0;
      pointsGained = Math.round((1000 + speedBonus) * streakMultiplier);
      score += pointsGained;

      sound.playDialecticalSuccess();
      stateManager.state.xp += 25;
    } else {
      streak = 0;
      sound.playWarning();
      stateManager.state.xp += 5;
    }

    userAnswers.push({
      question: q,
      selectedIndex,
      isCorrect,
      timeSpent,
      pointsGained
    });

    renderView();
  }

  function handleTimeOut() {
    if (isAnswerSubmitted) return;
    isAnswerSubmitted = true;
    streak = 0;
    sound.playWarning();

    const q = activeQuestions[currentIndex];
    userAnswers.push({
      question: q,
      selectedIndex: -1, // Timed out
      isCorrect: false,
      timeSpent: TIME_PER_QUESTION,
      pointsGained: 0
    });

    renderView();
  }

  function nextQuestion() {
    if (currentIndex + 1 < activeQuestions.length) {
      loadQuestion(currentIndex + 1);
    } else {
      // Quiz finished
      clearInterval(timerInterval);
      gameState = 'summary';
      sound.playFanfare();
      stateManager.state.xp += Math.round(score / 50);
      renderView();
    }
  }

  // Lifelines
  function useFiftyFifty() {
    if (!lifelines.fiftyFifty || isAnswerSubmitted) return;
    lifelines.fiftyFifty = false;
    sound.playClick();

    const q = activeQuestions[currentIndex];
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== q.correctIndex);
    const shuffledWrong = shuffleArray(wrongIndices);
    hiddenOptionIndices = [shuffledWrong[0], shuffledWrong[1]];
    renderView();
  }

  function useFreezeTime() {
    if (!lifelines.freezeTime || isAnswerSubmitted) return;
    lifelines.freezeTime = false;
    sound.playClick();
    timeLeft = Math.min(TIME_PER_QUESTION, timeLeft + 15);
    renderView();
  }

  function useHint() {
    if (!lifelines.hint || isAnswerSubmitted) return;
    lifelines.hint = false;
    sound.playClick();
    const q = activeQuestions[currentIndex];
    activeHint = q.quote || 'Tập trung vào bản chất quy luật giá trị và vai trò của sức lao động!';
    renderView();
  }

  function renderView() {
    // 1. LOBBY VIEW
    if (gameState === 'lobby') {
      container.innerHTML = `
        <div class="quiz-arena-container animate-fade-in">
          <!-- Top Nav -->
          <div class="quiz-top-bar">
            <button class="back-to-map-btn" id="quiz-lobby-back-btn">
              <span>← Quay lại bản đồ hành trình</span>
            </button>
            <div class="badge-pill" style="background: linear-gradient(135deg, #8b5cf6, #ec4899); color: #ffffff; font-weight: 800;">
              🎮 QUIZIZZ ARENA MLN122
            </div>
          </div>

          <!-- Hero Lobby Banner -->
          <div class="quiz-lobby-card">
            <div class="lobby-badge">ĐẤU TRƯỜNG TRI THỨC 4.0</div>
            <h2 class="lobby-title">ĐẤU TRƯỜNG QUIZ MLN122</h2>
            <p class="lobby-desc">
              Trải nghiệm phong cách đấu trường trắc nghiệm Quizizz sôi động! Trả lời thần tốc, duy trì chuỗi thắng (Streak Combo) và làm chủ toàn diện các quy luật Kinh tế chính trị Mác – Lênin (Chương 1 đến 6).
            </p>

            <!-- Mode Selector -->
            <div class="quiz-mode-grid">
              <div class="quiz-mode-pill ${selectedMode === 'quick' ? 'selected' : ''}" data-mode="quick">
                <div class="mode-icon">⚡</div>
                <div class="mode-info">
                  <strong>Vượt Ải Cấp Tốc</strong>
                  <span>10 câu ngẫu nhiên • 3 phút</span>
                </div>
              </div>

              <div class="quiz-mode-pill ${selectedMode === 'all' ? 'selected' : ''}" data-mode="all">
                <div class="mode-icon">🏆</div>
                <div class="mode-info">
                  <strong>Đấu Trường Toàn Diện</strong>
                  <span>20 câu bao quát 6 chương</span>
                </div>
              </div>

              <div class="quiz-mode-pill ${selectedMode === 'focus' ? 'selected' : ''}" data-mode="focus">
                <div class="mode-icon">🎯</div>
                <div class="mode-info">
                  <strong>Trọng Tâm Chuyên Đề</strong>
                  <span>15 câu Chương 3, 5 & 6</span>
                </div>
              </div>
            </div>

            <!-- Lifeline Intro -->
            <div class="lobby-lifelines-box">
              <span style="font-weight: 800; font-size: 0.85rem; color: var(--text-dim); text-transform: uppercase;">
                3 Quyền trợ giúp đặc quyền Quizizz:
              </span>
              <div class="lobby-lifeline-chips">
                <span class="lifeline-chip">💡 50:50 (Xóa 2 đáp án sai)</span>
                <span class="lifeline-chip">⏳ Đóng băng thời gian (+15s)</span>
                <span class="lifeline-chip">🔍 Soi rọi Lăng kính Mác – Lênin</span>
              </div>
            </div>

            <!-- Start Button -->
            <div style="margin-top: 2rem;">
              <button class="btn-quiz-start" id="quiz-start-btn">
                <span>🚀 BẮT ĐẦU VÀO ĐẤU TRƯỜNG →</span>
              </button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('quiz-lobby-back-btn').addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });

      container.querySelectorAll('.quiz-mode-pill[data-mode]').forEach(pill => {
        pill.addEventListener('click', () => {
          sound.playClick();
          selectedMode = pill.getAttribute('data-mode');
          renderView();
        });
      });

      document.getElementById('quiz-start-btn').addEventListener('click', startQuiz);
      return;
    }

    // 2. PLAYING VIEW
    if (gameState === 'playing') {
      const q = activeQuestions[currentIndex];
      const percentTime = (timeLeft / TIME_PER_QUESTION) * 100;
      const lastAnswer = userAnswers[userAnswers.length - 1];

      // Option styles & letters (Quizizz style)
      const OPTION_STYLES = [
        { letter: '▲', colorClass: 'opt-red' },
        { letter: '◆', colorClass: 'opt-blue' },
        { letter: '●', colorClass: 'opt-yellow' },
        { letter: '■', colorClass: 'opt-green' }
      ];

      let optionsHTML = '';
      q.options.forEach((optText, idx) => {
        const isHidden = hiddenOptionIndices.includes(idx);
        const style = OPTION_STYLES[idx] || OPTION_STYLES[0];

        let stateClass = '';
        if (isAnswerSubmitted) {
          if (idx === q.correctIndex) {
            stateClass = 'opt-correct';
          } else if (lastAnswer && lastAnswer.selectedIndex === idx) {
            stateClass = 'opt-wrong';
          } else {
            stateClass = 'opt-dimmed';
          }
        }

        if (isHidden) {
          optionsHTML += `
            <div class="quiz-option-card opt-hidden">
              <span style="opacity: 0.3;">Đã loại bỏ 50:50</span>
            </div>
          `;
        } else {
          optionsHTML += `
            <button class="quiz-option-card ${style.colorClass} ${stateClass}" data-option-idx="${idx}" ${isAnswerSubmitted ? 'disabled' : ''}>
              <div class="opt-letter-badge">${style.letter}</div>
              <div class="opt-text-label">${optText}</div>
            </button>
          `;
        }
      });

      // Feedback banner when submitted
      let feedbackHTML = '';
      if (isAnswerSubmitted) {
        const isCorrect = lastAnswer && lastAnswer.isCorrect;
        feedbackHTML = `
          <div class="quiz-feedback-box ${isCorrect ? 'correct' : 'wrong'} animate-fade-in">
            <div class="feedback-head-row">
              <div class="feedback-title">
                ${isCorrect ? `🎉 CHÍNH XÁC! +${lastAnswer.pointsGained} Điểm!` : (lastAnswer.selectedIndex === -1 ? '⏰ HẾT THỜI GIAN!' : '❌ CHƯA CHÍNH XÁC!')}
              </div>
              <button class="btn-quiz-next" id="quiz-next-btn">
                <span>CÂU TIẾP THEO →</span>
              </button>
            </div>
            <p class="feedback-explanation">
              <strong>Giải thích:</strong> ${q.explanation}
            </p>
            <div class="feedback-quote">
              📖 <em>${q.quote}</em>
            </div>
          </div>
        `;
      }

      container.innerHTML = `
        <div class="quiz-arena-container animate-fade-in">
          <!-- Top Game HUD Bar -->
          <div class="quiz-play-hud">
            <div class="hud-left-stats">
              <button class="quiz-exit-icon-btn" id="quiz-exit-btn" title="Thoát về bản đồ">✕</button>
              <span class="quiz-q-counter">CÂU ${currentIndex + 1} / ${activeQuestions.length}</span>
            </div>

            <div class="hud-center-score">
              <span class="quiz-score-val">⭐ ${score.toLocaleString()} PTS</span>
              ${streak >= 2 ? `<span class="quiz-streak-pill">🔥 STREAK x${streak}!</span>` : ''}
            </div>

            <!-- Lifeline Buttons -->
            <div class="hud-lifelines">
              <button class="quiz-lifeline-btn ${!lifelines.fiftyFifty ? 'used' : ''}" id="ll-fifty" title="Loại 2 đáp án sai" ${!lifelines.fiftyFifty || isAnswerSubmitted ? 'disabled' : ''}>
                💡 50:50
              </button>
              <button class="quiz-lifeline-btn ${!lifelines.freezeTime ? 'used' : ''}" id="ll-freeze" title="Đóng băng thêm 15 giây" ${!lifelines.freezeTime || isAnswerSubmitted ? 'disabled' : ''}>
                ⏳ +15s
              </button>
              <button class="quiz-lifeline-btn ${!lifelines.hint ? 'used' : ''}" id="ll-hint" title="Gợi ý Mác – Lênin" ${!lifelines.hint || isAnswerSubmitted ? 'disabled' : ''}>
                🔍 Gợi ý
              </button>
            </div>
          </div>

          <!-- Countdown Timer Bar -->
          <div class="quiz-timer-track">
            <div id="quiz-timer-fill" class="quiz-timer-fill" style="width: ${percentTime}%;"></div>
          </div>
          <div class="quiz-timer-sub">
            <span>Thời gian còn lại:</span>
            <strong id="quiz-timer-num">${timeLeft}s</strong>
          </div>

          <!-- Hint Banner if used -->
          ${activeHint ? `
            <div class="quiz-hint-banner animate-fade-in">
              <span>🔍 <strong>Lăng kính Mác – Lênin:</strong> ${activeHint}</span>
            </div>
          ` : ''}

          <!-- Question Prompt Card -->
          <div class="quiz-question-card">
            <div class="quiz-category-tag">${q.chapterTitle} • ${q.category}</div>
            <h3 class="quiz-question-text">${q.question}</h3>
          </div>

          <!-- 4 Quizizz Color Options -->
          <div class="quiz-options-grid">
            ${optionsHTML}
          </div>

          <!-- Post Answer Feedback -->
          ${feedbackHTML}
        </div>
      `;

      // Event Handlers
      document.getElementById('quiz-exit-btn').addEventListener('click', () => {
        if (confirm('Bạn có muốn tạm dừng và quay lại bản đồ không?')) {
          clearInterval(timerInterval);
          onBackToMap();
        }
      });

      const nextBtn = document.getElementById('quiz-next-btn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          sound.playClick();
          nextQuestion();
        });
      }

      const fiftyBtn = document.getElementById('ll-fifty');
      if (fiftyBtn) fiftyBtn.addEventListener('click', useFiftyFifty);

      const freezeBtn = document.getElementById('ll-freeze');
      if (freezeBtn) freezeBtn.addEventListener('click', useFreezeTime);

      const hintBtn = document.getElementById('ll-hint');
      if (hintBtn) hintBtn.addEventListener('click', useHint);

      container.querySelectorAll('.quiz-option-card[data-option-idx]').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-option-idx'), 10);
          handleAnswer(idx);
        });
      });

      return;
    }

    // 3. SUMMARY VIEW (Podium & Review)
    if (gameState === 'summary') {
      const accuracy = Math.round((correctCount / activeQuestions.length) * 100);
      let rankTitle = 'BẬC THẦY KINH TẾ CHÍNH TRỊ MLN122';
      let rankBadge = '🥇 ĐẠI KIỆN TƯỚNG MLN122';
      let rankClass = 'rank-gold';

      if (accuracy < 50) {
        rankTitle = 'CẦN ÔN LUYỆN THÊM KIẾN THỨC SỔ TAY';
        rankBadge = '💡 HỌC VIÊN TIỀM NĂNG';
        rankClass = 'rank-bronze';
      } else if (accuracy < 75) {
        rankTitle = 'HỌC GIẢ KINH TẾ CHÍNH TRỊ ĐẠT CHUẨN';
        rankBadge = '🥉 HỌC GIẢ ĐẠT CHUẨN';
        rankClass = 'rank-silver';
      } else if (accuracy < 90) {
        rankTitle = 'CHUYÊN GIA LÝ LUẬN MÁC – LÊNIN';
        rankBadge = '🥈 CHUYÊN GIA MLN122';
        rankClass = 'rank-silver';
      }

      let reviewHTML = '';
      userAnswers.forEach((ans, i) => {
        const q = ans.question;
        reviewHTML += `
          <div class="review-item-card ${ans.isCorrect ? 'correct' : 'wrong'}">
            <div class="review-item-head">
              <span class="review-num">Câu #${i + 1}</span>
              <span class="review-status">${ans.isCorrect ? '✓ Đúng (+ ' + ans.pointsGained + ' PTS)' : '✕ Sai'}</span>
            </div>
            <div class="review-question">${q.question}</div>
            <div class="review-answer-row">
              <div>
                <strong>Đáp án đúng:</strong> <span style="color: var(--accent-emerald-dark);">${q.options[q.correctIndex]}</span>
              </div>
              ${!ans.isCorrect ? `
                <div style="margin-top: 0.3rem;">
                  <strong>Bạn đã chọn:</strong> <span style="color: var(--accent-crimson);">${ans.selectedIndex >= 0 ? q.options[ans.selectedIndex] : 'Hết thời gian'}</span>
                </div>
              ` : ''}
            </div>
            <p class="review-explanation">${q.explanation}</p>
          </div>
        `;
      });

      container.innerHTML = `
        <div class="quiz-arena-container animate-fade-in">
          <div class="quiz-summary-card">
            <div class="summary-trophy">🏆✨</div>
            <span class="badge-pill ${rankClass}" style="font-size: 0.95rem; padding: 0.5rem 1.4rem; font-weight: 800;">
              ${rankBadge}
            </span>
            <h2 class="summary-title">${rankTitle}</h2>

            <!-- Big Stats Grid -->
            <div class="summary-stats-grid">
              <div class="sum-stat-card">
                <span class="stat-icon">⭐</span>
                <div class="stat-val" style="color: var(--accent-gold);">${score.toLocaleString()}</div>
                <div class="stat-label">Tổng Điểm Trận Đấu</div>
              </div>

              <div class="sum-stat-card">
                <span class="stat-icon">🎯</span>
                <div class="stat-val" style="color: var(--accent-emerald);">${accuracy}%</div>
                <div class="stat-label">Độ Chính Xác (${correctCount}/${activeQuestions.length})</div>
              </div>

              <div class="sum-stat-card">
                <span class="stat-icon">🔥</span>
                <div class="stat-val" style="color: var(--accent-amber);">${maxStreak}</div>
                <div class="stat-label">Chuỗi Đúng Liên Tiếp (Max Streak)</div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin: 2rem 0;">
              <button class="btn-primary" id="quiz-replay-btn" style="padding: 0.85rem 2.2rem; font-size: 1.05rem;">
                <span>↺ CHƠI LẠI TRẬN MỚI</span>
              </button>
              <button class="btn-secondary" id="quiz-summary-exit-btn" style="padding: 0.85rem 2rem; font-size: 1.05rem;">
                <span>🗺️ QUAY LẠI BẢN ĐỒ BÀI HỌC</span>
              </button>
            </div>

            <!-- Collapsible Review List -->
            <div class="summary-review-section">
              <h3 style="font-size: 1.25rem; font-family: var(--font-heading); color: var(--text-heading); margin-bottom: 1.2rem;">
                📋 BẢNG GIẢI CHI TIẾT TỪNG CÂU HỎI (${userAnswers.length} CÂU)
              </h3>
              <div class="review-cards-list">
                ${reviewHTML}
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('quiz-replay-btn').addEventListener('click', () => {
        sound.playClick();
        gameState = 'lobby';
        renderView();
      });

      document.getElementById('quiz-summary-exit-btn').addEventListener('click', () => {
        sound.playClick();
        onBackToMap();
      });

      return;
    }
  }

  renderView();
}

