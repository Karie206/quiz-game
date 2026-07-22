// DOM elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answer-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-question");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// DOM elements mới cho Nhóm 1
const timeLeftSpan = document.getElementById("time-left");
const timerProgress = document.getElementById("timer-progress");
const prevButton = document.getElementById("prev-btn");
const skipButton = document.getElementById("skip-btn");
const reviewContainer = document.getElementById("review-container");

// DOM elements mới cho Nhóm 2
const startHighScore = document.getElementById("start-highscore");
const startLeaderboard = document.getElementById("start-leaderboard");
const selectScreen = document.getElementById("select-screen");
const playerNameInput = document.getElementById("player-name");
const topicGroup = document.getElementById("topic-group");
const difficultyGroup = document.getElementById("difficulty-group");
const selectCount = document.getElementById("select-count");
const backButton = document.getElementById("back-btn");
const playButton = document.getElementById("play-btn");
const highscoreNote = document.getElementById("highscore-note");
const resultLeaderboard = document.getElementById("result-leaderboard");
const statCorrect = document.getElementById("stat-correct");
const statWrong = document.getElementById("stat-wrong");
const statAccuracy = document.getElementById("stat-accuracy");
const statAvgTime = document.getElementById("stat-avgtime");
const chartCorrect = document.getElementById("chart-correct");
const chartWrong = document.getElementById("chart-wrong");

// DOM elements cho màn Cài đặt + modal xác nhận
const gearButton = document.getElementById("gear-btn");
const settingsScreen = document.getElementById("settings-screen");
const soundSwitch = document.getElementById("sound-switch");
const themeSwitch = document.getElementById("theme-switch");
const timeGroup = document.getElementById("time-group");
const settingsDifficultyGroup = document.getElementById("settings-difficulty-group");
const clearDataButton = document.getElementById("clear-data-btn");
const settingsDoneButton = document.getElementById("settings-done-btn");
const confirmModal = document.getElementById("confirm-modal");
const confirmCancelButton = document.getElementById("confirm-cancel");
const confirmClearButton = document.getElementById("confirm-clear");

// Mỗi câu hỏi có thêm 2 thuộc tính: topic (chủ đề) và difficulty (độ khó)
// topic: "History" | "Science" | "Programming"
// difficulty: "Easy" | "Medium" | "Hard"
const quizQuestions = [
  // ===== History =====
  {
    topic: "History",
    difficulty: "Easy",
    question: "Which country gifted the Statue of Liberty to the USA?",
    answers: [
      { text: "France", correct: true },
      { text: "United Kingdom", correct: false },
      { text: "Spain", correct: false },
      { text: "Italy", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "In which year did World War II end?",
    answers: [
      { text: "1943", correct: false },
      { text: "1944", correct: false },
      { text: "1945", correct: true },
      { text: "1946", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Who was the first President of the United States?",
    answers: [
      { text: "Thomas Jefferson", correct: false },
      { text: "George Washington", correct: true },
      { text: "Abraham Lincoln", correct: false },
      { text: "John Adams", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Claude Monet", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "The ancient pyramids of Giza are located in which country?",
    answers: [
      { text: "Mexico", correct: false },
      { text: "Egypt", correct: true },
      { text: "Greece", correct: false },
      { text: "Iraq", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which empire built the Colosseum?",
    answers: [
      { text: "Greek Empire", correct: false },
      { text: "Ottoman Empire", correct: false },
      { text: "Roman Empire", correct: true },
      { text: "Persian Empire", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "In which year did the French Revolution begin?",
    answers: [
      { text: "1776", correct: false },
      { text: "1789", correct: true },
      { text: "1804", correct: false },
      { text: "1815", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Who was the first Emperor of a unified China?",
    answers: [
      { text: "Kublai Khan", correct: false },
      { text: "Qin Shi Huang", correct: true },
      { text: "Sun Tzu", correct: false },
      { text: "Confucius", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "In which year was the Magna Carta signed?",
    answers: [
      { text: "1066", correct: false },
      { text: "1215", correct: true },
      { text: "1348", correct: false },
      { text: "1492", correct: false },
    ],
  },

  // ===== Science =====
  {
    topic: "Science",
    difficulty: "Easy",
    question: "What is the largest mammal in the world?",
    answers: [
      { text: "African Elephant", correct: false },
      { text: "Giraffe", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Polar Bear", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "How many continents are there on Earth?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "What is the powerhouse of the cell?",
    answers: [
      { text: "Nucleus", correct: false },
      { text: "Ribosome", correct: false },
      { text: "Mitochondria", correct: true },
      { text: "Golgi apparatus", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "Which planet has the most moons?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: true },
      { text: "Neptune", correct: false },
      { text: "Uranus", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "What is the hardest natural substance on Earth?",
    answers: [
      { text: "Gold", correct: false },
      { text: "Iron", correct: false },
      { text: "Diamond", correct: true },
      { text: "Quartz", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which subatomic particle carries a negative charge?",
    answers: [
      { text: "Proton", correct: false },
      { text: "Neutron", correct: false },
      { text: "Electron", correct: true },
      { text: "Photon", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "The speed of light is approximately how many km per second?",
    answers: [
      { text: "3,000", correct: false },
      { text: "30,000", correct: false },
      { text: "300,000", correct: true },
      { text: "3,000,000", correct: false },
    ],
  },

  // ===== Programming =====
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "What does 'HTML' stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "HighText Machine Language", correct: false },
      { text: "Hyperlink Text Markup Language", correct: false },
      { text: "HomeTool Markup Language", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which company originally developed the JavaScript language?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Apple", correct: false },
      { text: "Google", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which symbol starts a single-line comment in JavaScript?",
    answers: [
      { text: "#", correct: false },
      { text: "//", correct: true },
      { text: "<!--", correct: false },
      { text: "--", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which language is often called the 'mother of all languages'?",
    answers: [
      { text: "C", correct: true },
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Assembly", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Who is known as the father of computer science?",
    answers: [
      { text: "Albert Einstein", correct: false },
      { text: "Alan Turing", correct: true },
      { text: "Isaac Newton", correct: false },
      { text: "Charles Babbage", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "What does 'CSS' stand for?",
    answers: [
      { text: "Computer Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Creative Style System", correct: false },
      { text: "Colorful Style Sheets", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n^2)", correct: false },
      { text: "O(1)", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "In OOP, which concept means hiding internal details of an object?",
    answers: [
      { text: "Inheritance", correct: false },
      { text: "Polymorphism", correct: false },
      { text: "Encapsulation", correct: true },
      { text: "Abstraction", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which data structure works in FIFO (first-in, first-out) order?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false },
    ],
  },
];

// ===== Hằng số cấu hình =====
const BASE_POINTS = 10; // điểm cơ bản khi trả lời đúng
const MAX_QUESTIONS_PER_ROUND = 10; // số câu tối đa mỗi lượt chơi

// Các khóa dùng cho localStorage
const HIGH_SCORE_KEY = "quizHighScore";
const LEADERBOARD_KEY = "quizLeaderboard";
const THEME_KEY = "quizTheme";
const SOUND_KEY = "quizSound";
const TIME_KEY = "quizTime";
const DIFFICULTY_KEY = "quizDifficulty";

// ===== Biến trạng thái =====
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let activeQuestions = []; // danh sách câu hỏi đã trộn cho lượt chơi hiện tại
let userAnswers = []; // lưu kết quả từng câu để xem lại
let timePerQuestion = 15; // số giây mỗi câu (đọc từ Cài đặt)
let timeLeft = timePerQuestion;
let timerInterval = null;
let soundEnabled = true; // trạng thái bật/tắt âm thanh
let audioContext = null; // Web Audio API context (tạo khi cần)
let previousScreen = null; // màn hình trước khi mở Cài đặt (để quay lại)

// Lựa chọn ở màn chọn chủ đề/độ khó
let selectedTopic = "All";
let selectedDifficulty = "All";
let playerName = "Anonymous";

// Điểm tối đa mỗi câu phụ thuộc thời gian đang cài đặt
function getMaxPointsPerQuestion() {
  return BASE_POINTS + timePerQuestion;
}

// ===== Event listeners =====
startButton.addEventListener("click", goToSelectScreen);
backButton.addEventListener("click", goToStartScreen);
playButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
prevButton.addEventListener("click", goToPreviousQuestion);
skipButton.addEventListener("click", handleSkipOrNext);

// Cài đặt
gearButton.addEventListener("click", openSettings);
settingsDoneButton.addEventListener("click", closeSettings);
soundSwitch.addEventListener("click", toggleSound);
themeSwitch.addEventListener("click", toggleTheme);
clearDataButton.addEventListener("click", openConfirm);
confirmCancelButton.addEventListener("click", closeConfirm);
confirmClearButton.addEventListener("click", clearAllData);

// Nhóm nút chọn chủ đề / độ khó ở màn Chọn quiz
setupOptionGroup(topicGroup, function (value) {
  selectedTopic = value;
  updateSelectCount();
});
setupOptionGroup(difficultyGroup, function (value) {
  selectedDifficulty = value;
  updateSelectCount();
});

// Nhóm nút thời gian / độ khó mặc định ở màn Cài đặt (có lưu localStorage)
setupOptionGroup(timeGroup, function (value) {
  timePerQuestion = Number(value);
  localStorage.setItem(TIME_KEY, value);
});
setupOptionGroup(settingsDifficultyGroup, function (value) {
  selectedDifficulty = value;
  localStorage.setItem(DIFFICULTY_KEY, value);
  // đồng bộ lựa chọn sang màn Chọn quiz
  selectOption(difficultyGroup, value);
});

// ===== Khởi tạo khi tải trang: đọc cài đặt từ localStorage =====
// Âm thanh (mặc định bật)
if (localStorage.getItem(SOUND_KEY) === "off") {
  soundEnabled = false;
} else {
  soundEnabled = true;
}
updateSwitch(soundSwitch, soundEnabled);

// Theme (mặc định sáng)
if (localStorage.getItem(THEME_KEY) === "dark") {
  applyTheme("dark");
} else {
  applyTheme("light");
}

// Thời gian mỗi câu (mặc định 15s)
const savedTime = localStorage.getItem(TIME_KEY);
if (savedTime !== null) {
  timePerQuestion = Number(savedTime);
}
selectOption(timeGroup, String(timePerQuestion));

// Độ khó mặc định (mặc định "All")
const savedDifficulty = localStorage.getItem(DIFFICULTY_KEY);
if (savedDifficulty !== null) {
  selectedDifficulty = savedDifficulty;
}
selectOption(settingsDifficultyGroup, selectedDifficulty);
selectOption(difficultyGroup, selectedDifficulty);

// Hiển thị điểm cao và bảng xếp hạng ở màn start
startHighScore.textContent = getHighScore();
renderLeaderboard(startLeaderboard);

// ===== Hàm trộn mảng (thuật toán Fisher–Yates) =====
function shuffle(array) {
  const result = array.slice(); // copy để không đụng vào mảng gốc
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

// ===== Âm thanh bằng Web Audio API =====
// Tạo tiếng "beep" ngắn, không cần file ngoài
function playSound(isCorrect) {
  if (!soundEnabled) return;

  // Tạo context lần đầu (trình duyệt yêu cầu phải có tương tác người dùng trước)
  if (audioContext === null) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  if (isCorrect) {
    // đúng: nốt cao, nghe vui
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
  } else {
    // sai: nốt trầm, báo lỗi
    oscillator.type = "square";
    oscillator.frequency.value = 200;
  }

  // giảm âm lượng dần cho tiếng nghe mượt
  gain.gain.setValueAtTime(0.2, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.3);
}

// Bật/tắt âm thanh, cập nhật công tắc và lưu lại
function toggleSound() {
  soundEnabled = !soundEnabled;
  updateSwitch(soundSwitch, soundEnabled);
  if (soundEnabled) {
    localStorage.setItem(SOUND_KEY, "on");
  } else {
    localStorage.setItem(SOUND_KEY, "off");
  }
}

// Lọc câu hỏi theo chủ đề + độ khó, trộn và giới hạn số câu mỗi lượt
function getFilteredQuestions() {
  let filtered = quizQuestions.filter((q) => {
    const topicOk = selectedTopic === "All" || q.topic === selectedTopic;
    const diffOk = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
    return topicOk && diffOk;
  });

  filtered = shuffle(filtered);

  // Giới hạn số câu tối đa mỗi lượt
  if (filtered.length > MAX_QUESTIONS_PER_ROUND) {
    filtered = filtered.slice(0, MAX_QUESTIONS_PER_ROUND);
  }

  return filtered;
}

function startQuiz() {
  // Lấy tên người chơi (mặc định "Anonymous" nếu để trống)
  playerName = playerNameInput.value.trim();
  if (playerName === "") {
    playerName = "Anonymous";
  }

  const filtered = getFilteredQuestions();
  // An toàn: không có câu nào thì không bắt đầu
  if (filtered.length === 0) {
    return;
  }

  // reset trạng thái
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  // Trộn đáp án trong từng câu (thứ tự câu đã được trộn khi lọc)
  activeQuestions = filtered.map((q) => {
    return {
      question: q.question,
      answers: shuffle(q.answers),
    };
  });

  // Mảng lưu kết quả, ban đầu chưa trả lời câu nào (null)
  userAnswers = new Array(activeQuestions.length).fill(null);

  // Cập nhật tổng số câu và điểm tối đa theo bộ câu đã lọc
  totalQuestionsSpan.textContent = activeQuestions.length;
  maxScoreSpan.textContent = getMaxPointsPerQuestion() * activeQuestions.length;

  startScreen.classList.remove("active");
  selectScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  stopTimer(); // dừng đồng hồ của câu trước (nếu còn)
  setGearVisible(false); // ẩn nút Cài đặt khi đang làm bài

  const currentQuestion = activeQuestions[currentQuestionIndex];
  const savedAnswer = userAnswers[currentQuestionIndex]; // null nếu chưa trả lời

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  // Thanh tiến trình tổng
  const progressPercent = (currentQuestionIndex / activeQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  // Render các nút đáp án
  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.dataset.index = index; // lưu vị trí để nhận biết đáp án đã chọn
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });

  // Nút "Previous" chỉ bật khi không phải câu đầu tiên
  if (currentQuestionIndex > 0) {
    prevButton.disabled = false;
  } else {
    prevButton.disabled = true;
  }

  skipButton.disabled = false;

  if (savedAnswer === null) {
    // Câu chưa trả lời -> cho làm bài và chạy đồng hồ
    answersDisabled = false;
    skipButton.innerHTML = 'Skip <i class="ti ti-player-skip-forward"></i>';
    startTimer();
  } else {
    // Câu đã trả lời -> khóa lại, chỉ xem, tô màu đúng/sai
    answersDisabled = true;
    showLockedAnswer(savedAnswer);
    skipButton.innerHTML = 'Next <i class="ti ti-arrow-right"></i>';
    // Ẩn đồng hồ khi xem lại
    timeLeftSpan.textContent = "-";
    timerProgress.style.width = "0%";
  }
}

// Tô màu đáp án cho câu đã trả lời (chế độ khóa/xem lại)
function showLockedAnswer(savedAnswer) {
  Array.from(answersContainer.children).forEach((button) => {
    const index = Number(button.dataset.index);
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (index === savedAnswer.selectedIndex) {
      button.classList.add("incorrect");
    }
  });
}

// ===== Đồng hồ đếm ngược =====
function startTimer() {
  timeLeft = timePerQuestion;
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  timeLeftSpan.textContent = timeLeft;

  const percent = (timeLeft / timePerQuestion) * 100;
  timerProgress.style.width = percent + "%";

  // Đổi màu cảnh báo theo thời gian còn lại
  timerProgress.classList.remove("warning", "danger");
  if (timeLeft <= 3) {
    timerProgress.classList.add("danger");
  } else if (timeLeft <= 7) {
    timerProgress.classList.add("warning");
  }
}

// Hết giờ -> tính là sai
function handleTimeout() {
  answersDisabled = true;
  disableNav();

  // Lưu kết quả: không chọn gì, sai, 0 điểm
  userAnswers[currentQuestionIndex] = {
    selectedIndex: -1,
    correct: false,
    points: 0,
    timeSpent: timePerQuestion - timeLeft,
  };

  // Hiện đáp án đúng cho người chơi biết
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  playSound(false);
  goToNextAfterDelay();
}

function selectAnswer(event) {
  if (answersDisabled) return;

  answersDisabled = true;
  stopTimer();
  disableNav();

  const selectedButton = event.target;
  const selectedIndex = Number(selectedButton.dataset.index);
  const isCorrect = selectedButton.dataset.correct === "true";

  // Tính điểm theo tốc độ: đúng = điểm cơ bản + số giây còn lại
  let points = 0;
  if (isCorrect) {
    points = BASE_POINTS + timeLeft;
    score += points;
    scoreSpan.textContent = score;
  }

  // Lưu kết quả để xem lại (timeSpent = thời gian đã dùng cho câu này)
  userAnswers[currentQuestionIndex] = {
    selectedIndex: selectedIndex,
    correct: isCorrect,
    points: points,
    timeSpent: timePerQuestion - timeLeft,
  };

  // Tô màu đúng/sai
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  playSound(isCorrect);
  goToNextAfterDelay();
}

// Bấm nút bên phải: "Skip" nếu câu chưa trả lời, "Next" nếu đã trả lời
function handleSkipOrNext() {
  const savedAnswer = userAnswers[currentQuestionIndex];

  if (savedAnswer === null) {
    // Chưa trả lời -> bỏ qua, tính là sai
    skipQuestion();
  } else {
    // Đã trả lời -> chuyển sang câu tiếp ngay (không chờ)
    goToNextQuestion();
  }
}

// Bỏ qua câu hiện tại -> tính là sai
function skipQuestion() {
  if (answersDisabled) return;

  answersDisabled = true;
  stopTimer();
  disableNav();

  userAnswers[currentQuestionIndex] = {
    selectedIndex: -1,
    correct: false,
    points: 0,
    timeSpent: timePerQuestion - timeLeft,
  };

  // Hiện đáp án đúng cho người chơi biết
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
  });

  playSound(false);
  goToNextAfterDelay();
}

// Quay lại câu trước (chỉ để xem lại, không cho tính điểm lại)
function goToPreviousQuestion() {
  if (currentQuestionIndex === 0) return;
  stopTimer();
  currentQuestionIndex--;
  showQuestion();
}

// Chuyển sang câu tiếp theo (hoặc kết thúc nếu đã hết câu)
function goToNextQuestion() {
  stopTimer();
  currentQuestionIndex++;
  if (currentQuestionIndex < activeQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

// Tự chuyển sang câu tiếp sau 1 giây (để người chơi kịp thấy đáp án)
function goToNextAfterDelay() {
  setTimeout(goToNextQuestion, 1000);
}

// Khóa tạm 2 nút điều hướng trong lúc chờ chuyển câu
function disableNav() {
  skipButton.disabled = true;
  prevButton.disabled = true;
}

function showResults() {
  stopTimer();
  progressBar.style.width = "100%";
  setGearVisible(true); // hiện lại nút Cài đặt

  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const totalQuestions = activeQuestions.length;
  const maxScore = getMaxPointsPerQuestion() * totalQuestions;
  const percentage = (score / maxScore) * 100;

  if (percentage >= 90) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 70) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 50) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 30) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }

  // ===== Tính thống kê cuối bài =====
  let correctCount = 0;
  let totalTime = 0;
  userAnswers.forEach((answer) => {
    if (answer !== null && answer.correct) {
      correctCount++;
    }
    if (answer !== null) {
      totalTime += answer.timeSpent;
    }
  });

  const wrongCount = totalQuestions - correctCount;
  const accuracy = Math.round((correctCount / totalQuestions) * 100);
  const avgTime = (totalTime / totalQuestions).toFixed(1);

  statCorrect.textContent = correctCount;
  statWrong.textContent = wrongCount;
  statAccuracy.textContent = accuracy + "%";
  statAvgTime.textContent = avgTime + "s";

  // Biểu đồ cột: chiều cao tỉ lệ theo số câu đúng/sai
  chartCorrect.style.height = (correctCount / totalQuestions) * 100 + "%";
  chartWrong.style.height = (wrongCount / totalQuestions) * 100 + "%";

  // ===== Điểm cao & bảng xếp hạng =====
  if (score > getHighScore()) {
    saveHighScore(score);
    highscoreNote.textContent = "🎉 New high score!";
  } else {
    highscoreNote.textContent = "";
  }

  addToLeaderboard(playerName, score);
  renderLeaderboard(resultLeaderboard);

  buildReview();
}

// Dựng danh sách xem lại từng câu ở màn kết quả
function buildReview() {
  reviewContainer.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = "Review your answers";
  reviewContainer.appendChild(title);

  activeQuestions.forEach((question, qIndex) => {
    const answer = userAnswers[qIndex];

    const item = document.createElement("div");
    item.classList.add("review-item");

    // Câu hỏi
    const qText = document.createElement("p");
    qText.classList.add("review-question");
    qText.textContent = qIndex + 1 + ". " + question.question;
    item.appendChild(qText);

    // Tìm đáp án đúng
    const correctAnswer = question.answers.find((a) => a.correct === true);

    // Đáp án người chơi đã chọn
    const yourLine = document.createElement("p");
    yourLine.classList.add("review-your");
    if (answer === null || answer.selectedIndex === -1) {
      yourLine.textContent = "Your answer: (skipped / no answer)";
      yourLine.classList.add("wrong");
    } else if (answer.correct) {
      yourLine.textContent = "Your answer: " + question.answers[answer.selectedIndex].text;
      yourLine.classList.add("right");
    } else {
      yourLine.textContent = "Your answer: " + question.answers[answer.selectedIndex].text;
      yourLine.classList.add("wrong");
    }
    item.appendChild(yourLine);

    // Chỉ hiện đáp án đúng khi người chơi trả lời sai hoặc bỏ qua
    if (answer === null || answer.correct === false) {
      const correctLine = document.createElement("p");
      correctLine.classList.add("review-correct");
      correctLine.textContent = "Correct answer: " + correctAnswer.text;
      item.appendChild(correctLine);
    }

    reviewContainer.appendChild(item);
  });
}

// ===== Điều hướng màn hình chọn =====
function goToSelectScreen() {
  startScreen.classList.remove("active");
  selectScreen.classList.add("active");
  setGearVisible(true);
  updateSelectCount();
}

function goToStartScreen() {
  selectScreen.classList.remove("active");
  startScreen.classList.add("active");
  setGearVisible(true);
  // làm mới điểm cao và bảng xếp hạng
  startHighScore.textContent = getHighScore();
  renderLeaderboard(startLeaderboard);
}

// Gắn sự kiện cho một nhóm nút chọn (chỉ 1 nút được chọn tại một thời điểm)
function setupOptionGroup(group, onSelect) {
  const buttons = group.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      onSelect(btn.dataset.value);
    });
  });
}

// Hiện số câu sẽ chơi theo lựa chọn hiện tại
function updateSelectCount() {
  const count = getFilteredQuestions().length;
  if (count === 0) {
    selectCount.textContent = "No questions for this combination.";
    playButton.disabled = true;
  } else {
    selectCount.textContent = count + " question(s) in this quiz.";
    playButton.disabled = false;
  }
}

// ===== Chế độ sáng / tối =====
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
    updateSwitch(themeSwitch, true);
  } else {
    document.body.classList.remove("dark");
    updateSwitch(themeSwitch, false);
  }
}

function toggleTheme() {
  let theme;
  if (document.body.classList.contains("dark")) {
    theme = "light";
  } else {
    theme = "dark";
  }
  applyTheme(theme);
  localStorage.setItem(THEME_KEY, theme); // lưu lựa chọn
}

// ===== Màn hình Cài đặt =====
function openSettings() {
  // ghi nhớ màn hình đang mở để quay lại
  previousScreen = document.querySelector(".screen.active");
  if (previousScreen !== null) {
    previousScreen.classList.remove("active");
  }
  settingsScreen.classList.add("active");
  setGearVisible(false);
}

function closeSettings() {
  settingsScreen.classList.remove("active");
  if (previousScreen !== null) {
    previousScreen.classList.add("active");
    // nếu quay lại màn Chọn quiz thì cập nhật lại số câu (có thể vừa đổi độ khó)
    if (previousScreen === selectScreen) {
      updateSelectCount();
    }
  }
  setGearVisible(true);
}

// Ẩn/hiện nút bánh răng (ẩn trong lúc đang làm bài)
function setGearVisible(visible) {
  if (visible) {
    gearButton.classList.remove("hidden");
  } else {
    gearButton.classList.add("hidden");
  }
}

// Bật/tắt trạng thái công tắc
function updateSwitch(switchElement, on) {
  if (on) {
    switchElement.classList.add("on");
  } else {
    switchElement.classList.remove("on");
  }
}

// Chọn 1 nút trong nhóm theo giá trị (dùng để đồng bộ giao diện)
function selectOption(group, value) {
  const buttons = group.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    if (btn.dataset.value === value) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });
}

// ===== Hộp xác nhận xóa dữ liệu =====
function openConfirm() {
  confirmModal.classList.add("show");
}

function closeConfirm() {
  confirmModal.classList.remove("show");
}

// Xóa điểm cao + bảng xếp hạng và cập nhật lại giao diện
function clearAllData() {
  localStorage.removeItem(HIGH_SCORE_KEY);
  localStorage.removeItem(LEADERBOARD_KEY);

  startHighScore.textContent = getHighScore();
  renderLeaderboard(startLeaderboard);
  renderLeaderboard(resultLeaderboard);

  closeConfirm();
}

// ===== Điểm cao nhất (localStorage) =====
function getHighScore() {
  const value = localStorage.getItem(HIGH_SCORE_KEY);
  if (value === null) {
    return 0;
  }
  return Number(value);
}

function saveHighScore(newScore) {
  localStorage.setItem(HIGH_SCORE_KEY, newScore);
}

// ===== Bảng xếp hạng (localStorage) =====
function getLeaderboard() {
  const value = localStorage.getItem(LEADERBOARD_KEY);
  if (value === null) {
    return [];
  }
  return JSON.parse(value);
}

function saveLeaderboard(list) {
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(list));
}

// Thêm lượt chơi mới, sắp xếp giảm dần và chỉ giữ top 5
function addToLeaderboard(name, points) {
  const list = getLeaderboard();
  list.push({ name: name, score: points });
  list.sort((a, b) => b.score - a.score);
  const top = list.slice(0, 5);
  saveLeaderboard(top);
}

// Vẽ bảng xếp hạng vào một khu vực cho trước
function renderLeaderboard(container) {
  const list = getLeaderboard();
  container.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = "Leaderboard";
  container.appendChild(title);

  if (list.length === 0) {
    const empty = document.createElement("p");
    empty.classList.add("leaderboard-empty");
    empty.textContent = "No scores yet. Be the first!";
    container.appendChild(empty);
    return;
  }

  list.forEach((entry, index) => {
    const row = document.createElement("div");
    row.classList.add("leaderboard-row");

    // cột trái: hạng + tên người chơi
    const left = document.createElement("span");
    const rank = document.createElement("span");
    rank.classList.add("leaderboard-rank");
    rank.textContent = "#" + (index + 1);
    const nameSpan = document.createElement("span");
    nameSpan.textContent = entry.name; // dùng textContent để an toàn
    left.appendChild(rank);
    left.appendChild(nameSpan);

    // cột phải: điểm
    const right = document.createElement("span");
    right.textContent = entry.score;

    row.appendChild(left);
    row.appendChild(right);
    container.appendChild(row);
  });
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}