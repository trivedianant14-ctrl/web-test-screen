const questions = [
  {
    text: "Sensitive pigmented layer of eye is:",
    options: ["Cornea", "Retina", "Sclerotic", "Iris"],
    answer: 1
  },
  {
    text: "The auditory ossicles are located in the:",
    options: ["External ear", "Middle ear", "Internal ear", "Cochlea"],
    answer: 1
  },
  {
    text: "Which structure regulates the amount of light entering the eye?",
    options: ["Pupil", "Lens", "Retina", "Sclera"],
    answer: 0
  },
  {
    text: "Organ of Corti is concerned with:",
    options: ["Vision", "Hearing", "Smell", "Taste"],
    answer: 1
  },
  {
    text: "The transparent front part of the eye is called:",
    options: ["Iris", "Cornea", "Choroid", "Retina"],
    answer: 1
  },
  {
    text: "Taste buds are mainly present on the:",
    options: ["Tongue", "Pharynx", "Larynx", "Nasal septum"],
    answer: 0
  },
  {
    text: "The receptor cells for smell are present in the:",
    options: ["Olfactory epithelium", "Eustachian tube", "Ciliary body", "Semicircular canal"],
    answer: 0
  },
  {
    text: "The part of inner ear responsible for balance is:",
    options: ["Cochlea", "Vestibular apparatus", "Tympanic membrane", "Malleus"],
    answer: 1
  },
  {
    text: "Photoreceptors of the retina are:",
    options: ["Rods and cones", "Ossicles", "Papillae", "Maculae"],
    answer: 0
  },
  {
    text: "The white outer coat of the eyeball is:",
    options: ["Retina", "Sclera", "Lens", "Conjunctiva"],
    answer: 1
  }
];

const state = {
  screen: "general",
  current: 0,
  answers: Array(questions.length).fill(null),
  saved: Array(questions.length).fill(false),
  marked: Array(questions.length).fill(false),
  visited: Array(questions.length).fill(false),
  remainingSeconds: 8 * 60,
  questionSeconds: 0,
  timer: null,
  paused: false,
  submitted: false
};

const el = (id) => document.getElementById(id);

const refs = {
  app: el("app"),
  generalScreen: el("generalScreen"),
  testInfoScreen: el("testInfoScreen"),
  examScreen: el("examScreen"),
  generalNext: el("generalNext"),
  closeGeneral: el("closeGeneral"),
  backToGeneral: el("backToGeneral"),
  beginBtn: el("beginBtn"),
  agreeCheck: el("agreeCheck"),
  languageSelect: el("languageSelect"),
  examTimer: el("examTimer"),
  examActions: el("examActions"),
  timerBox: el("timerBox"),
  fullscreenBtn: el("fullscreenBtn"),
  pauseBtn: el("pauseBtn"),
  questionNo: el("questionNo"),
  questionText: el("questionText"),
  optionList: el("optionList"),
  palette: el("palette"),
  answeredCount: el("answeredCount"),
  markedCount: el("markedCount"),
  notVisitedCount: el("notVisitedCount"),
  markedAnsweredCount: el("markedAnsweredCount"),
  notAnsweredCount: el("notAnsweredCount"),
  saveNextBtn: el("saveNextBtn"),
  markNextBtn: el("markNextBtn"),
  clearBtn: el("clearBtn"),
  submitBtn: el("submitBtn"),
  questionPaperBtn: el("questionPaperBtn"),
  instructionsBtn: el("instructionsBtn"),
  questionTime: el("questionTime"),
  questionLang: el("questionLang"),
  reportBtn: el("reportBtn"),
  sidePanel: el("sidePanel"),
  togglePanel: el("togglePanel"),
  modal: el("modal"),
  modalTitle: el("modalTitle"),
  modalBody: el("modalBody"),
  modalCancel: el("modalCancel"),
  modalOk: el("modalOk")
};

function requestFullScreen() {
  const node = document.documentElement;
  if (!document.fullscreenElement && node.requestFullscreen) {
    node.requestFullscreen().catch(() => {});
  }
}

function showScreen(name) {
  state.screen = name;
  refs.generalScreen.classList.toggle("hidden", name !== "general");
  refs.testInfoScreen.classList.toggle("hidden", name !== "info");
  refs.examScreen.classList.toggle("hidden", name !== "exam");
  refs.examTimer.classList.toggle("hidden", name !== "exam");
  refs.examActions.classList.toggle("hidden", name !== "exam");
}

function formatTimer(seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map((value) => String(value).padStart(2, "0"));
}

function renderTimer() {
  const [h, m, s] = formatTimer(state.remainingSeconds);
  refs.timerBox.innerHTML = `<span>${h}</span> : <span>${m}</span> : <span>${s}</span>`;
}

function renderQuestionTime() {
  const m = Math.floor(state.questionSeconds / 60);
  const s = state.questionSeconds % 60;
  refs.questionTime.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(state.timer);
  renderTimer();
  renderQuestionTime();
  state.timer = setInterval(() => {
    if (state.paused || state.submitted) return;
    state.remainingSeconds = Math.max(0, state.remainingSeconds - 1);
    state.questionSeconds += 1;
    renderTimer();
    renderQuestionTime();
    if (state.remainingSeconds === 0) submitTest(true);
  }, 1000);
}

function questionStatus(index) {
  if (!state.visited[index]) return "not-visited";
  if (state.marked[index] && state.saved[index]) return "marked-answered";
  if (state.marked[index]) return "marked";
  if (state.saved[index]) return "answered";
  return "not-answered";
}

function goToQuestion(index) {
  const next = Math.max(0, Math.min(questions.length - 1, index));
  if (state.screen === "exam" && next !== state.current && !state.saved[state.current] && !state.marked[state.current]) {
    state.visited[state.current] = true;
  }
  state.current = next;
  state.questionSeconds = 0;
  renderQuestion();
  renderPalette();
  renderCounts();
}

function renderQuestion() {
  const q = questions[state.current];
  refs.questionNo.textContent = String(state.current + 1);
  refs.questionText.textContent = q.text;
  refs.optionList.innerHTML = "";

  q.options.forEach((option, index) => {
    const id = `q${state.current}-option${index}`;
    const label = document.createElement("label");
    label.className = "option-row";
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.id = id;
    input.checked = state.answers[state.current] === index;
    input.addEventListener("change", () => {
      state.answers[state.current] = index;
      state.visited[state.current] = true;
      renderPalette();
      renderCounts();
    });

    const span = document.createElement("span");
    span.textContent = option;
    label.append(input, span);
    refs.optionList.appendChild(label);
  });
}

function renderPalette() {
  refs.palette.innerHTML = "";
  questions.forEach((_, index) => {
    const button = document.createElement("button");
    const status = questionStatus(index);
    button.className = `palette-btn ${status}`;
    if (index === state.current) button.classList.add("current");
    button.textContent = String(index + 1);
    button.addEventListener("click", () => goToQuestion(index));
    refs.palette.appendChild(button);
  });
}

function renderCounts() {
  const counts = {
    answered: 0,
    marked: 0,
    "not-visited": 0,
    "marked-answered": 0,
    "not-answered": 0
  };
  questions.forEach((_, index) => {
    counts[questionStatus(index)] += 1;
  });
  refs.answeredCount.textContent = counts.answered;
  refs.markedCount.textContent = counts.marked;
  refs.notVisitedCount.textContent = counts["not-visited"];
  refs.markedAnsweredCount.textContent = counts["marked-answered"];
  refs.notAnsweredCount.textContent = counts["not-answered"];
}

function saveCurrent(markForReview = false) {
  state.visited[state.current] = true;
  if (state.answers[state.current] !== null) {
    state.saved[state.current] = true;
  }
  state.marked[state.current] = markForReview;
  if (state.current < questions.length - 1) {
    goToQuestion(state.current + 1);
  } else {
    renderQuestion();
    renderPalette();
    renderCounts();
  }
}

function clearCurrent() {
  state.answers[state.current] = null;
  state.saved[state.current] = false;
  renderQuestion();
  renderPalette();
  renderCounts();
}

function buildQuestionPaper() {
  return questions.map((q, index) => {
    const answer = state.answers[index] === null ? "Not answered" : q.options[state.answers[index]];
    return `<p><strong>Q${index + 1}.</strong> ${q.text}<br><span>${q.options.join(" / ")}</span><br><em>Selected: ${answer}</em></p>`;
  }).join("");
}

function showModal(title, body, onOk, okText = "OK", showCancel = true) {
  refs.modalTitle.textContent = title;
  refs.modalBody.innerHTML = body;
  refs.modalOk.textContent = okText;
  refs.modalCancel.classList.toggle("hidden", !showCancel);
  refs.modal.classList.remove("hidden");

  refs.modalOk.onclick = () => {
    refs.modal.classList.add("hidden");
    if (onOk) onOk();
  };
  refs.modalCancel.onclick = () => refs.modal.classList.add("hidden");
}

function submitTest(auto = false) {
  if (state.submitted) return;
  const answered = state.saved.filter(Boolean).length;
  const markedAnswered = state.marked.filter((marked, index) => marked && state.saved[index]).length;
  const body = `
    <p>${auto ? "Time is over. Your test has been submitted automatically." : "Are you sure you want to submit the test?"}</p>
    <p><strong>Answered:</strong> ${answered}</p>
    <p><strong>Marked and answered:</strong> ${markedAnswered}</p>
    <p><strong>Not visited:</strong> ${questions.filter((_, i) => !state.visited[i]).length}</p>
  `;

  const finish = () => {
    state.submitted = true;
    clearInterval(state.timer);
    showModal("Test Submitted", "<p>Your NPrep CBT practice test has been submitted.</p>", null, "Close", false);
  };

  if (auto) {
    finish();
  } else {
    showModal("Submit Test", body, finish, "Submit Test", true);
  }
}

function bindEvents() {
  document.addEventListener("click", requestFullScreen, { once: true });

  refs.generalNext.addEventListener("click", () => showScreen("info"));
  refs.closeGeneral.addEventListener("click", () => showScreen("info"));
  refs.backToGeneral.addEventListener("click", () => showScreen("general"));

  const checkBegin = () => {
    refs.beginBtn.disabled = !(refs.agreeCheck.checked && refs.languageSelect.value);
  };
  refs.agreeCheck.addEventListener("change", checkBegin);
  refs.languageSelect.addEventListener("change", checkBegin);

  refs.beginBtn.addEventListener("click", () => {
    requestFullScreen();
    showScreen("exam");
    goToQuestion(0);
    startTimer();
  });

  refs.fullscreenBtn.addEventListener("click", requestFullScreen);
  refs.pauseBtn.addEventListener("click", () => {
    state.paused = !state.paused;
    refs.pauseBtn.textContent = state.paused ? "Resume" : "Pause";
  });

  refs.saveNextBtn.addEventListener("click", () => saveCurrent(false));
  refs.markNextBtn.addEventListener("click", () => saveCurrent(true));
  refs.clearBtn.addEventListener("click", clearCurrent);
  refs.submitBtn.addEventListener("click", () => submitTest(false));

  refs.questionPaperBtn.addEventListener("click", () => {
    showModal("Question Paper", buildQuestionPaper(), null, "Close", false);
  });
  refs.instructionsBtn.addEventListener("click", () => {
    showModal("Instructions", "<p>Use Save & Next to save an answer. Use Mark for Review & Next when you want to revisit a question. Answered questions marked for review are considered for evaluation.</p>", null, "Close", false);
  });
  refs.reportBtn.addEventListener("click", () => {
    showModal("Report Question", "<p>This question has been reported for review in the prototype.</p>", null, "Close", false);
  });

  refs.togglePanel.addEventListener("click", () => {
    const hidden = refs.sidePanel.classList.toggle("hidden");
    refs.togglePanel.textContent = hidden ? "<" : ">";
    refs.togglePanel.style.right = hidden ? "0" : "";
    document.querySelector(".question-main").style.width = hidden ? "100%" : "";
  });
}

bindEvents();
renderTimer();

const preview = new URLSearchParams(window.location.search).get("preview");
if (["general", "info", "exam"].includes(preview)) {
  showScreen(preview);
  if (preview === "exam") {
    goToQuestion(0);
    startTimer();
  }
}
