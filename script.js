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
const homeButton = document.getElementById("home-btn");
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
const startQuestionCount = document.getElementById("start-question-count");
const startTimeValue = document.getElementById("start-time");
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
const questionCountGroup = document.getElementById("question-count-group");
const settingsTopicGroup = document.getElementById("settings-topic-group");
const shuffleSwitch = document.getElementById("shuffle-switch");
const settingsCloseButton = document.getElementById("settings-close-btn");
const clearDataButton = document.getElementById("clear-data-btn");
const confirmModal = document.getElementById("confirm-modal");
const confirmCancelButton = document.getElementById("confirm-cancel");
const confirmClearButton = document.getElementById("confirm-clear");

// DOM elements cho hộp Tạm dừng (Pause)
const pauseButton = document.getElementById("pause-btn");
const pauseModal = document.getElementById("pause-modal");
const resumeButton = document.getElementById("resume-btn");
const finishButton = document.getElementById("finish-btn");
const quitButton = document.getElementById("quit-btn");
const pauseQuestionSpan = document.getElementById("pause-question");
const pauseTotalSpan = document.getElementById("pause-total");
const pauseScoreSpan = document.getElementById("pause-score");

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
  {
    topic: "History",
    difficulty: "Easy",
    question: "Who was the first man to walk on the Moon?",
    answers: [
      { text: "Buzz Aldrin", correct: false },
      { text: "Neil Armstrong", correct: true },
      { text: "Yuri Gagarin", correct: false },
      { text: "Michael Collins", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "In which year did World War I begin?",
    answers: [
      { text: "1912", correct: false },
      { text: "1914", correct: true },
      { text: "1918", correct: false },
      { text: "1920", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Which wall divided Berlin until 1989?",
    answers: [
      { text: "The Berlin Wall", correct: true },
      { text: "Hadrian's Wall", correct: false },
      { text: "The Great Wall", correct: false },
      { text: "The Iron Gate", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Which explorer reached the Americas in 1492?",
    answers: [
      { text: "Ferdinand Magellan", correct: false },
      { text: "Christopher Columbus", correct: true },
      { text: "Marco Polo", correct: false },
      { text: "Vasco da Gama", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "The Great Wall was built in which country?",
    answers: [
      { text: "Japan", correct: false },
      { text: "India", correct: false },
      { text: "China", correct: true },
      { text: "Korea", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Which ship sank on its maiden voyage in 1912?",
    answers: [
      { text: "Lusitania", correct: false },
      { text: "Titanic", correct: true },
      { text: "Britannic", correct: false },
      { text: "Endurance", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Who led the non-violent independence movement in India?",
    answers: [
      { text: "Jawaharlal Nehru", correct: false },
      { text: "Mahatma Gandhi", correct: true },
      { text: "Subhas Chandra Bose", correct: false },
      { text: "Rabindranath Tagore", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Which ancient civilization built Machu Picchu?",
    answers: [
      { text: "Aztec", correct: false },
      { text: "Maya", correct: false },
      { text: "Inca", correct: true },
      { text: "Olmec", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "In which city is the Eiffel Tower located?",
    answers: [
      { text: "Rome", correct: false },
      { text: "Paris", correct: true },
      { text: "Vienna", correct: false },
      { text: "Brussels", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Easy",
    question: "Which American president led the country during the Civil War?",
    answers: [
      { text: "Andrew Jackson", correct: false },
      { text: "Abraham Lincoln", correct: true },
      { text: "Ulysses S. Grant", correct: false },
      { text: "James Madison", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which country was the first to send a human into space?",
    answers: [
      { text: "United States", correct: false },
      { text: "Soviet Union", correct: true },
      { text: "China", correct: false },
      { text: "Germany", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Who was the last queen of ancient Egypt?",
    answers: [
      { text: "Nefertiti", correct: false },
      { text: "Cleopatra VII", correct: true },
      { text: "Hatshepsut", correct: false },
      { text: "Ankhesenamun", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which war was fought between the North and South of the United States?",
    answers: [
      { text: "The War of 1812", correct: false },
      { text: "The American Civil War", correct: true },
      { text: "The Revolutionary War", correct: false },
      { text: "The Spanish-American War", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Who invented the movable-type printing press in Europe?",
    answers: [
      { text: "Johannes Gutenberg", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Leonardo da Vinci", correct: false },
      { text: "William Caxton", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "In which year did the Berlin Wall fall?",
    answers: [
      { text: "1987", correct: false },
      { text: "1989", correct: true },
      { text: "1991", correct: false },
      { text: "1993", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which empire was ruled by Genghis Khan?",
    answers: [
      { text: "The Mughal Empire", correct: false },
      { text: "The Mongol Empire", correct: true },
      { text: "The Ottoman Empire", correct: false },
      { text: "The Byzantine Empire", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which organization was founded in 1945 to promote world peace?",
    answers: [
      { text: "The League of Nations", correct: false },
      { text: "The United Nations", correct: true },
      { text: "NATO", correct: false },
      { text: "The Red Cross", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "The Renaissance began in which country?",
    answers: [
      { text: "France", correct: false },
      { text: "Italy", correct: true },
      { text: "England", correct: false },
      { text: "Germany", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which pharaoh's tomb was discovered by Howard Carter in 1922?",
    answers: [
      { text: "Ramesses II", correct: false },
      { text: "Tutankhamun", correct: true },
      { text: "Khufu", correct: false },
      { text: "Akhenaten", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Medium",
    question: "Which country did Napoleon Bonaparte rule?",
    answers: [
      { text: "Spain", correct: false },
      { text: "France", correct: true },
      { text: "Austria", correct: false },
      { text: "Portugal", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "In which year did the Western Roman Empire fall?",
    answers: [
      { text: "410 AD", correct: false },
      { text: "476 AD", correct: true },
      { text: "527 AD", correct: false },
      { text: "610 AD", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Which treaty officially ended World War I?",
    answers: [
      { text: "The Treaty of Versailles", correct: true },
      { text: "The Treaty of Utrecht", correct: false },
      { text: "The Treaty of Tordesillas", correct: false },
      { text: "The Treaty of Ghent", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Which battle in 1815 marked the final defeat of Napoleon?",
    answers: [
      { text: "The Battle of Austerlitz", correct: false },
      { text: "The Battle of Waterloo", correct: true },
      { text: "The Battle of Trafalgar", correct: false },
      { text: "The Battle of Leipzig", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "The Black Death swept through Europe mainly in which century?",
    answers: [
      { text: "The 12th century", correct: false },
      { text: "The 14th century", correct: true },
      { text: "The 16th century", correct: false },
      { text: "The 18th century", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Which city was the capital of the Byzantine Empire?",
    answers: [
      { text: "Athens", correct: false },
      { text: "Constantinople", correct: true },
      { text: "Alexandria", correct: false },
      { text: "Antioch", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "In which year did the Russian October Revolution take place?",
    answers: [
      { text: "1905", correct: false },
      { text: "1917", correct: true },
      { text: "1921", correct: false },
      { text: "1924", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Which ancient code of laws was inscribed on a stone stele in Babylon?",
    answers: [
      { text: "The Code of Justinian", correct: false },
      { text: "The Code of Hammurabi", correct: true },
      { text: "The Twelve Tables", correct: false },
      { text: "The Napoleonic Code", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Which conflict was ended by the Peace of Westphalia in 1648?",
    answers: [
      { text: "The Hundred Years' War", correct: false },
      { text: "The Thirty Years' War", correct: true },
      { text: "The War of the Roses", correct: false },
      { text: "The Seven Years' War", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "Which artifact allowed scholars to decipher Egyptian hieroglyphs?",
    answers: [
      { text: "The Dead Sea Scrolls", correct: false },
      { text: "The Rosetta Stone", correct: true },
      { text: "The Behistun Inscription", correct: false },
      { text: "The Palermo Stone", correct: false },
    ],
  },
  {
    topic: "History",
    difficulty: "Hard",
    question: "In which year did the Ottoman Empire capture Constantinople?",
    answers: [
      { text: "1204", correct: false },
      { text: "1453", correct: true },
      { text: "1492", correct: false },
      { text: "1517", correct: false },
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
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which gas do plants absorb from the air for photosynthesis?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon dioxide", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Hydrogen", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "What is the chemical formula of water?",
    answers: [
      { text: "CO2", correct: false },
      { text: "H2O", correct: true },
      { text: "O2", correct: false },
      { text: "NaCl", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which organ pumps blood around the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Lungs", correct: false },
      { text: "Heart", correct: true },
      { text: "Kidney", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "How many legs does an adult insect have?",
    answers: [
      { text: "4", correct: false },
      { text: "6", correct: true },
      { text: "8", correct: false },
      { text: "10", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which planet is closest to the Sun?",
    answers: [
      { text: "Mercury", correct: true },
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mars", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "At what temperature in Celsius does water freeze at sea level?",
    answers: [
      { text: "-10", correct: false },
      { text: "0", correct: true },
      { text: "32", correct: false },
      { text: "100", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which force pulls objects toward the center of the Earth?",
    answers: [
      { text: "Friction", correct: false },
      { text: "Magnetism", correct: false },
      { text: "Gravity", correct: true },
      { text: "Tension", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which part of the plant absorbs water from the soil?",
    answers: [
      { text: "Leaf", correct: false },
      { text: "Root", correct: true },
      { text: "Flower", correct: false },
      { text: "Stem", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "What is the closest star to Earth?",
    answers: [
      { text: "Sirius", correct: false },
      { text: "Polaris", correct: false },
      { text: "The Sun", correct: true },
      { text: "Alpha Centauri", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Easy",
    question: "Which animal group do frogs belong to?",
    answers: [
      { text: "Reptiles", correct: false },
      { text: "Amphibians", correct: true },
      { text: "Mammals", correct: false },
      { text: "Fish", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "Which gas makes up about 78% of Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Argon", correct: false },
      { text: "Carbon dioxide", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "How many bones are there in the adult human body?",
    answers: [
      { text: "186", correct: false },
      { text: "206", correct: true },
      { text: "226", correct: false },
      { text: "246", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "Which blood cells carry oxygen through the body?",
    answers: [
      { text: "White blood cells", correct: false },
      { text: "Red blood cells", correct: true },
      { text: "Platelets", correct: false },
      { text: "Plasma cells", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "What is the largest organ of the human body?",
    answers: [
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Skin", correct: true },
      { text: "Intestine", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "Which scientist proposed the three laws of motion?",
    answers: [
      { text: "Galileo Galilei", correct: false },
      { text: "Isaac Newton", correct: true },
      { text: "Nikola Tesla", correct: false },
      { text: "Niels Bohr", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "What is the chemical symbol for sodium?",
    answers: [
      { text: "So", correct: false },
      { text: "Sn", correct: false },
      { text: "Na", correct: true },
      { text: "Nd", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "Which layer of the atmosphere contains the ozone layer?",
    answers: [
      { text: "Troposphere", correct: false },
      { text: "Stratosphere", correct: true },
      { text: "Mesosphere", correct: false },
      { text: "Thermosphere", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "What is the process by which liquid turns into gas called?",
    answers: [
      { text: "Condensation", correct: false },
      { text: "Evaporation", correct: true },
      { text: "Sublimation", correct: false },
      { text: "Precipitation", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "Which vitamin does the human skin produce from sunlight?",
    answers: [
      { text: "Vitamin A", correct: false },
      { text: "Vitamin C", correct: false },
      { text: "Vitamin D", correct: true },
      { text: "Vitamin K", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Medium",
    question: "What unit is used to measure electrical resistance?",
    answers: [
      { text: "Volt", correct: false },
      { text: "Ohm", correct: true },
      { text: "Ampere", correct: false },
      { text: "Watt", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which particle determines the atomic number of an element?",
    answers: [
      { text: "Neutron", correct: false },
      { text: "Proton", correct: true },
      { text: "Electron", correct: false },
      { text: "Positron", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "What is the name of the molecule that carries genetic instructions in cells?",
    answers: [
      { text: "ATP", correct: false },
      { text: "DNA", correct: true },
      { text: "Lipid", correct: false },
      { text: "Glucose", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which law states that energy cannot be created or destroyed?",
    answers: [
      { text: "The second law of thermodynamics", correct: false },
      { text: "The first law of thermodynamics", correct: true },
      { text: "Hooke's law", correct: false },
      { text: "Boyle's law", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "What is the approximate pH value of pure water at 25 degrees Celsius?",
    answers: [
      { text: "5", correct: false },
      { text: "7", correct: true },
      { text: "9", correct: false },
      { text: "14", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which element has the atomic number 6?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Carbon", correct: true },
      { text: "Nitrogen", correct: false },
      { text: "Helium", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "What is the SI unit of force?",
    answers: [
      { text: "Joule", correct: false },
      { text: "Newton", correct: true },
      { text: "Pascal", correct: false },
      { text: "Hertz", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which type of galaxy is the Milky Way?",
    answers: [
      { text: "Elliptical galaxy", correct: false },
      { text: "Barred spiral galaxy", correct: true },
      { text: "Irregular galaxy", correct: false },
      { text: "Lenticular galaxy", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which process splits a heavy atomic nucleus into lighter ones?",
    answers: [
      { text: "Nuclear fusion", correct: false },
      { text: "Nuclear fission", correct: true },
      { text: "Ionization", correct: false },
      { text: "Oxidation", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "What is the half-life of carbon-14, used for radiocarbon dating?",
    answers: [
      { text: "About 1,200 years", correct: false },
      { text: "About 5,730 years", correct: true },
      { text: "About 12,500 years", correct: false },
      { text: "About 50,000 years", correct: false },
    ],
  },
  {
    topic: "Science",
    difficulty: "Hard",
    question: "Which scientist formulated the theory of general relativity?",
    answers: [
      { text: "Max Planck", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Werner Heisenberg", correct: false },
      { text: "Erwin Schrodinger", correct: false },
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
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<a>", correct: true },
      { text: "<link>", correct: false },
      { text: "<href>", correct: false },
      { text: "<nav>", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which keyword declares a constant value in JavaScript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which CSS property changes the color of text?",
    answers: [
      { text: "text-color", correct: false },
      { text: "font-color", correct: false },
      { text: "color", correct: true },
      { text: "foreground", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which HTML tag creates the largest heading?",
    answers: [
      { text: "<h6>", correct: false },
      { text: "<h1>", correct: true },
      { text: "<head>", correct: false },
      { text: "<big>", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which JavaScript method prints a message to the browser console?",
    answers: [
      { text: "print()", correct: false },
      { text: "console.log()", correct: true },
      { text: "alert()", correct: false },
      { text: "write()", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which file extension is used for JavaScript files?",
    answers: [
      { text: ".java", correct: false },
      { text: ".jsx", correct: false },
      { text: ".js", correct: true },
      { text: ".json", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which HTML attribute specifies the path of an image?",
    answers: [
      { text: "href", correct: false },
      { text: "src", correct: true },
      { text: "link", correct: false },
      { text: "path", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which CSS property sets the background color of an element?",
    answers: [
      { text: "bgcolor", correct: false },
      { text: "background-color", correct: true },
      { text: "color-background", correct: false },
      { text: "back-color", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "In JavaScript, which data type is the value 'true'?",
    answers: [
      { text: "String", correct: false },
      { text: "Number", correct: false },
      { text: "Boolean", correct: true },
      { text: "Symbol", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which HTML tag is used to create an unordered list?",
    answers: [
      { text: "<ol>", correct: false },
      { text: "<ul>", correct: true },
      { text: "<li>", correct: false },
      { text: "<dl>", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "What does 'CPU' stand for?",
    answers: [
      { text: "Central Processing Unit", correct: true },
      { text: "Computer Personal Unit", correct: false },
      { text: "Central Program Utility", correct: false },
      { text: "Control Processing Unit", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which symbol selects an element by its id in CSS?",
    answers: [
      { text: ".", correct: false },
      { text: "#", correct: true },
      { text: "*", correct: false },
      { text: "@", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which HTML element contains the metadata of a web page?",
    answers: [
      { text: "<body>", correct: false },
      { text: "<head>", correct: true },
      { text: "<footer>", correct: false },
      { text: "<main>", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "What does the 'length' property of a JavaScript array return?",
    answers: [
      { text: "The number of elements", correct: true },
      { text: "The last index", correct: false },
      { text: "The memory size in bytes", correct: false },
      { text: "The first element", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which Git command creates a new empty repository?",
    answers: [
      { text: "git start", correct: false },
      { text: "git new", correct: false },
      { text: "git init", correct: true },
      { text: "git create", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "What does 'IDE' stand for in software development?",
    answers: [
      { text: "Integrated Development Environment", correct: true },
      { text: "Internal Data Engine", correct: false },
      { text: "Interactive Design Editor", correct: false },
      { text: "Interface Development Extension", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which HTML tag inserts a single line break?",
    answers: [
      { text: "<hr>", correct: false },
      { text: "<br>", correct: true },
      { text: "<p>", correct: false },
      { text: "<span>", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which JavaScript function converts a string into an integer?",
    answers: [
      { text: "toInt()", correct: false },
      { text: "parseInt()", correct: true },
      { text: "Number.round()", correct: false },
      { text: "intVal()", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which SQL statement is used to read data from a table?",
    answers: [
      { text: "READ", correct: false },
      { text: "GET", correct: false },
      { text: "SELECT", correct: true },
      { text: "OPEN", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Easy",
    question: "Which loop repeats a block of code while a condition stays true?",
    answers: [
      { text: "while", correct: true },
      { text: "switch", correct: false },
      { text: "if", correct: false },
      { text: "try", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "What is the result of 'typeof []' in JavaScript?",
    answers: [
      { text: "'array'", correct: false },
      { text: "'object'", correct: true },
      { text: "'list'", correct: false },
      { text: "'undefined'", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which array method adds an element to the end of an array?",
    answers: [
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
      { text: "push()", correct: true },
      { text: "concat()", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which CSS property controls the space inside an element's border?",
    answers: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "gap", correct: false },
      { text: "outline", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which HTTP method is normally used to create a new resource on a server?",
    answers: [
      { text: "GET", correct: false },
      { text: "POST", correct: true },
      { text: "HEAD", correct: false },
      { text: "OPTIONS", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which SQL keyword removes duplicate rows from a result set?",
    answers: [
      { text: "UNIQUE", correct: false },
      { text: "DISTINCT", correct: true },
      { text: "FILTER", correct: false },
      { text: "GROUP", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "What does the strict equality operator '===' compare in JavaScript?",
    answers: [
      { text: "Only the values", correct: false },
      { text: "Both value and type", correct: true },
      { text: "Only the memory address", correct: false },
      { text: "Only the type", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which Git command sends local commits to a remote repository?",
    answers: [
      { text: "git pull", correct: false },
      { text: "git fetch", correct: false },
      { text: "git push", correct: true },
      { text: "git commit", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which DOM method returns the first element matching a CSS selector?",
    answers: [
      { text: "getElementsByTagName()", correct: false },
      { text: "querySelector()", correct: true },
      { text: "querySelectorAll()", correct: false },
      { text: "getElementsByClassName()", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "What does 'JSON' stand for?",
    answers: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "Java Standard Object Name", correct: false },
      { text: "JavaScript Ordered Nodes", correct: false },
      { text: "Joined Simple Object Notation", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which HTTP status code means 'Not Found'?",
    answers: [
      { text: "200", correct: false },
      { text: "301", correct: false },
      { text: "404", correct: true },
      { text: "500", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which array method returns a new array with every element transformed?",
    answers: [
      { text: "forEach()", correct: false },
      { text: "map()", correct: true },
      { text: "filter()", correct: false },
      { text: "reduce()", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which CSS position value places an element relative to the viewport?",
    answers: [
      { text: "relative", correct: false },
      { text: "absolute", correct: false },
      { text: "fixed", correct: true },
      { text: "static", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "What does 'API' stand for?",
    answers: [
      { text: "Application Programming Interface", correct: true },
      { text: "Applied Program Instruction", correct: false },
      { text: "Automated Process Integration", correct: false },
      { text: "Advanced Protocol Interface", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which SQL clause filters rows before they are grouped?",
    answers: [
      { text: "HAVING", correct: false },
      { text: "WHERE", correct: true },
      { text: "ORDER BY", correct: false },
      { text: "LIMIT", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: true },
      { text: "const", correct: false },
      { text: "def", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which data structure works in LIFO (last-in, first-out) order?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Linked list", correct: false },
      { text: "Heap", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which DOM method registers an event handler on an element?",
    answers: [
      { text: "attachEvent()", correct: false },
      { text: "addEventListener()", correct: true },
      { text: "onEvent()", correct: false },
      { text: "bindEvent()", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "What is the average time complexity of a hash table lookup?",
    answers: [
      { text: "O(1)", correct: true },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which CSS layout module uses 'justify-content' and 'align-items'?",
    answers: [
      { text: "Float layout", correct: false },
      { text: "Flexbox", correct: true },
      { text: "Table layout", correct: false },
      { text: "Inline block", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Medium",
    question: "Which Git command creates a new branch and switches to it at once?",
    answers: [
      { text: "git branch -d new", correct: false },
      { text: "git checkout -b new", correct: true },
      { text: "git merge new", correct: false },
      { text: "git clone new", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "In the JavaScript event loop, which queue is drained first after the current task?",
    answers: [
      { text: "The macrotask queue", correct: false },
      { text: "The microtask queue", correct: true },
      { text: "The animation frame queue", correct: false },
      { text: "The timer queue", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "What does a JavaScript closure capture?",
    answers: [
      { text: "A copy of the outer values", correct: false },
      { text: "A reference to its outer lexical environment", correct: true },
      { text: "The global object only", correct: false },
      { text: "The prototype chain of the caller", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "What is the value of a 'let' variable accessed before its declaration?",
    answers: [
      { text: "undefined", correct: false },
      { text: "null", correct: false },
      { text: "It throws a ReferenceError", correct: true },
      { text: "NaN", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which sorting algorithm has O(n log n) worst-case time and is stable?",
    answers: [
      { text: "Quick sort", correct: false },
      { text: "Merge sort", correct: true },
      { text: "Heap sort", correct: false },
      { text: "Selection sort", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "What is the worst-case time complexity of quick sort?",
    answers: [
      { text: "O(n log n)", correct: false },
      { text: "O(n^2)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(log n)", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "In ACID, what does the letter 'D' stand for?",
    answers: [
      { text: "Distribution", correct: false },
      { text: "Determinism", correct: false },
      { text: "Durability", correct: true },
      { text: "Dependency", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which data structure do most relational database indexes use?",
    answers: [
      { text: "B-tree", correct: true },
      { text: "Linked list", correct: false },
      { text: "Binary heap", correct: false },
      { text: "Trie", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "In JavaScript, what does the bitwise expression 'n & 1' test for?",
    answers: [
      { text: "Whether n is negative", correct: false },
      { text: "Whether n is odd", correct: true },
      { text: "Whether n is a power of two", correct: false },
      { text: "Whether n is zero", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which bitwise trick clears the lowest set bit of an integer n?",
    answers: [
      { text: "n | (n - 1)", correct: false },
      { text: "n & (n - 1)", correct: true },
      { text: "n ^ (n + 1)", correct: false },
      { text: "n >> 1", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "What does 'this' refer to inside an arrow function?",
    answers: [
      { text: "The object that called the function", correct: false },
      { text: "The 'this' of the enclosing lexical scope", correct: true },
      { text: "Always the global object", correct: false },
      { text: "Always undefined", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which value does 'var' hoisting give a variable before its assignment runs?",
    answers: [
      { text: "undefined", correct: true },
      { text: "null", correct: false },
      { text: "0", correct: false },
      { text: "A ReferenceError", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "What is the time complexity of inserting into a binary heap?",
    answers: [
      { text: "O(1)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which HTTP status code tells the client the resource moved permanently?",
    answers: [
      { text: "302", correct: false },
      { text: "301", correct: true },
      { text: "307", correct: false },
      { text: "410", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which header does a browser send to trigger a CORS preflight request?",
    answers: [
      { text: "Referer", correct: false },
      { text: "Origin", correct: true },
      { text: "Host", correct: false },
      { text: "Accept", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which SQL join returns every row of the left table plus matches from the right?",
    answers: [
      { text: "INNER JOIN", correct: false },
      { text: "LEFT JOIN", correct: true },
      { text: "CROSS JOIN", correct: false },
      { text: "RIGHT JOIN", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "In OOP, what does the Liskov Substitution Principle require?",
    answers: [
      { text: "Classes must never be inherited", correct: false },
      { text: "A subtype must be usable wherever its base type is expected", correct: true },
      { text: "Every class needs an interface", correct: false },
      { text: "Objects must be immutable", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "How does JavaScript resolve a property that an object does not own?",
    answers: [
      { text: "It searches the prototype chain", correct: true },
      { text: "It throws a TypeError", correct: false },
      { text: "It copies it from the constructor", correct: false },
      { text: "It looks in the global scope", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which Git command rewrites history by replaying commits onto another base?",
    answers: [
      { text: "git merge", correct: false },
      { text: "git rebase", correct: true },
      { text: "git revert", correct: false },
      { text: "git stash", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which algorithm finds the shortest path in a graph with non-negative weights?",
    answers: [
      { text: "Depth-first search", correct: false },
      { text: "Dijkstra's algorithm", correct: true },
      { text: "Kruskal's algorithm", correct: false },
      { text: "Kadane's algorithm", correct: false },
    ],
  },
  {
    topic: "Programming",
    difficulty: "Hard",
    question: "Which DOM phase runs first when an event is dispatched?",
    answers: [
      { text: "The bubbling phase", correct: false },
      { text: "The capturing phase", correct: true },
      { text: "The target phase", correct: false },
      { text: "The default action phase", correct: false },
    ],
  },
];

// ===== Hằng số cấu hình =====
const BASE_POINTS = 10; // điểm cơ bản khi trả lời đúng
const DEFAULT_QUESTIONS_PER_ROUND = 10; // số câu mỗi lượt khi chưa chỉnh Cài đặt

// Các khóa dùng cho localStorage
const HIGH_SCORE_KEY = "quizHighScore";
const LEADERBOARD_KEY = "quizLeaderboard";
const THEME_KEY = "quizTheme";
const SOUND_KEY = "quizSound";
const TIME_KEY = "quizTime";
const DIFFICULTY_KEY = "quizDifficulty";
const QUESTION_COUNT_KEY = "quizQuestionCount";
const TOPIC_KEY = "quizTopic";
const SHUFFLE_KEY = "quizShuffle";

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
let isPaused = false; // đang mở hộp Paused hay không
let timerWasRunning = false; // đồng hồ có đang chạy lúc bấm Pause không (để Resume đúng)
let questionsPerRound = DEFAULT_QUESTIONS_PER_ROUND; // số câu mỗi lượt: số, hoặc "all" = lấy hết
let shuffleEnabled = true; // có trộn thứ tự câu hỏi hay không

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
homeButton.addEventListener("click", goToHomeFromResult);
prevButton.addEventListener("click", goToPreviousQuestion);
skipButton.addEventListener("click", handleSkipOrNext);

// Cài đặt
gearButton.addEventListener("click", openSettings);
settingsCloseButton.addEventListener("click", closeSettings);
soundSwitch.addEventListener("click", toggleSound);
themeSwitch.addEventListener("click", toggleTheme);
shuffleSwitch.addEventListener("click", toggleShuffle);
clearDataButton.addEventListener("click", openConfirm);
confirmCancelButton.addEventListener("click", closeConfirm);
confirmClearButton.addEventListener("click", clearAllData);

// Tạm dừng
pauseButton.addEventListener("click", openPause);
resumeButton.addEventListener("click", resumeQuiz);
finishButton.addEventListener("click", finishNow);
quitButton.addEventListener("click", quitQuiz);

// Phím Esc: mở hộp Paused khi đang làm bài, bấm lại để chơi tiếp
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (isPaused) {
    resumeQuiz();
  } else {
    openPause();
  }
});

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
  updateStartBadges(); // badge thời gian ở màn Start phải khớp cài đặt
});
setupOptionGroup(settingsDifficultyGroup, function (value) {
  selectedDifficulty = value;
  localStorage.setItem(DIFFICULTY_KEY, value);
  // đồng bộ lựa chọn sang màn Chọn quiz
  selectOption(difficultyGroup, value);
});

// Số câu hỏi mỗi lượt: "10" / "20" / "all"
setupOptionGroup(questionCountGroup, function (value) {
  questionsPerRound = value === "all" ? "all" : Number(value);
  localStorage.setItem(QUESTION_COUNT_KEY, value);
});

// Chủ đề mặc định ở màn Cài đặt (có lưu localStorage)
setupOptionGroup(settingsTopicGroup, function (value) {
  selectedTopic = value;
  localStorage.setItem(TOPIC_KEY, value);
  // đồng bộ lựa chọn sang màn Chọn quiz
  selectOption(topicGroup, value);
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

// Số câu hỏi mỗi lượt (mặc định 10)
const savedQuestionCount = localStorage.getItem(QUESTION_COUNT_KEY);
if (savedQuestionCount !== null) {
  questionsPerRound = savedQuestionCount === "all" ? "all" : Number(savedQuestionCount);
}
selectOption(questionCountGroup, String(questionsPerRound));

// Chủ đề mặc định (mặc định "All")
const savedTopic = localStorage.getItem(TOPIC_KEY);
if (savedTopic !== null) {
  selectedTopic = savedTopic;
}
selectOption(settingsTopicGroup, selectedTopic);
selectOption(topicGroup, selectedTopic);

// Trộn câu hỏi (mặc định bật)
if (localStorage.getItem(SHUFFLE_KEY) === "off") {
  shuffleEnabled = false;
} else {
  shuffleEnabled = true;
}
updateSwitch(shuffleSwitch, shuffleEnabled);

// Hiển thị điểm cao, badge và bảng xếp hạng ở màn start
startHighScore.textContent = getHighScore();
updateStartBadges();
renderLeaderboard(startLeaderboard);

// Cập nhật 2 badge động ở màn Start: tổng số câu hỏi và thời gian mỗi câu
function updateStartBadges() {
  startQuestionCount.textContent = quizQuestions.length;
  startTimeValue.textContent = timePerQuestion;
}

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

// Bật/tắt trộn câu hỏi, cập nhật công tắc và lưu lại
function toggleShuffle() {
  shuffleEnabled = !shuffleEnabled;
  updateSwitch(shuffleSwitch, shuffleEnabled);
  if (shuffleEnabled) {
    localStorage.setItem(SHUFFLE_KEY, "on");
  } else {
    localStorage.setItem(SHUFFLE_KEY, "off");
  }
}

// Lọc câu hỏi theo chủ đề + độ khó, trộn và giới hạn số câu mỗi lượt
function getFilteredQuestions() {
  let filtered = quizQuestions.filter((q) => {
    const topicOk = selectedTopic === "All" || q.topic === selectedTopic;
    const diffOk = selectedDifficulty === "All" || q.difficulty === selectedDifficulty;
    return topicOk && diffOk;
  });

  // Chỉ trộn khi bật "Shuffle questions" ở Cài đặt
  if (shuffleEnabled) {
    filtered = shuffle(filtered);
  }

  // Giới hạn số câu mỗi lượt theo Cài đặt ("all" = lấy hết)
  if (questionsPerRound !== "all" && filtered.length > questionsPerRound) {
    filtered = filtered.slice(0, questionsPerRound);
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
  pauseButton.disabled = false;

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
  timeLeft = timePerQuestion; // câu mới -> đếm lại từ đầu
  updateTimerDisplay();
  runTimer();
}

// Chạy đồng hồ từ số giây còn lại hiện tại
// (dùng chung cho lúc bắt đầu câu mới và lúc bấm Resume)
function runTimer() {
  stopTimer(); // đảm bảo không có 2 đồng hồ chạy song song

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

// Khóa tạm các nút điều hướng trong lúc chờ chuyển câu
function disableNav() {
  skipButton.disabled = true;
  prevButton.disabled = true;
  // Khóa luôn Pause: 1 giây chờ này có setTimeout đang hẹn chuyển câu,
  // nếu cho thoát giữa chừng thì nó sẽ chạy tiếp khi đã rời màn Quiz
  pauseButton.disabled = true;
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

// ===== Tạm dừng bài làm (Paused) =====
// Mở hộp Paused: dừng đồng hồ và hiện tiến độ hiện tại
function openPause() {
  if (isPaused) return; // đang mở rồi
  if (!quizScreen.classList.contains("active")) return; // chỉ dùng khi đang làm bài
  if (pauseButton.disabled) return; // đang chờ chuyển câu -> không cho tạm dừng

  isPaused = true;
  // Nhớ lại đồng hồ có đang chạy không: câu đã trả lời (chế độ xem lại) thì không chạy
  timerWasRunning = timerInterval !== null;
  stopTimer();

  pauseQuestionSpan.textContent = currentQuestionIndex + 1;
  pauseTotalSpan.textContent = activeQuestions.length;
  pauseScoreSpan.textContent = score;

  pauseModal.classList.add("show");
}

// Chơi tiếp: đóng hộp và chạy lại đồng hồ từ số giây còn dở
function resumeQuiz() {
  if (!isPaused) return;

  pauseModal.classList.remove("show");
  isPaused = false;

  if (timerWasRunning) {
    runTimer(); // tiếp tục đếm, không reset về đầu
  }
  timerWasRunning = false;
}

// Kết thúc sớm: sang thẳng màn kết quả, câu chưa làm tính là sai
function finishNow() {
  pauseModal.classList.remove("show");
  isPaused = false;
  timerWasRunning = false;

  showResults();
}

// Bỏ dở: xóa tiến trình, không lưu điểm, quay về màn chọn quiz
function quitQuiz() {
  pauseModal.classList.remove("show");
  isPaused = false;
  timerWasRunning = false;
  stopTimer(); // bắt buộc, nếu không đồng hồ vẫn chạy ngầm sau khi rời màn Quiz

  // Reset trạng thái lượt chơi (không ghi điểm cao, không vào bảng xếp hạng)
  currentQuestionIndex = 0;
  score = 0;
  activeQuestions = [];
  userAnswers = [];
  answersDisabled = true;

  // Dọn giao diện màn Quiz cho lượt sau
  scoreSpan.textContent = 0;
  answersContainer.innerHTML = "";
  progressBar.style.width = "0%";
  timeLeftSpan.textContent = "-";
  timerProgress.style.width = "0%";

  quizScreen.classList.remove("active");
  goToSelectScreen(); // hàm này tự hiện lại nút Cài đặt và cập nhật số câu
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

  // Phần nội dung giữa: ở màn Start nó dùng flex:1 để giãn đầy khung
  const body = document.createElement("div");
  body.classList.add("leaderboard-body");
  container.appendChild(body);

  if (list.length === 0) {
    // Khung rỗng: icon cúp mờ ở giữa + dòng chữ nhỏ gợi ý
    const empty = document.createElement("div");
    empty.classList.add("leaderboard-empty");

    const icon = document.createElement("i");
    icon.className = "ti ti-trophy leaderboard-empty-icon";

    const text = document.createElement("p");
    text.classList.add("leaderboard-empty-text");
    text.textContent = "No scores yet";

    const hint = document.createElement("p");
    hint.classList.add("leaderboard-empty-hint");
    hint.textContent = "Play a round to claim the top spot";

    empty.appendChild(icon);
    empty.appendChild(text);
    empty.appendChild(hint);
    body.appendChild(empty);
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
    body.appendChild(row);
  });
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}

// Từ màn kết quả quay về màn hình chính
function goToHomeFromResult() {
  stopTimer();
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
  setGearVisible(true);
  // làm mới điểm cao và bảng xếp hạng
  startHighScore.textContent = getHighScore();
  renderLeaderboard(startLeaderboard);
}