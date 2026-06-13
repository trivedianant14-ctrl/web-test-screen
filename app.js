/* ── Questions ── */
const questions = [
  // Section A — Nursing Foundations (Q1–4)
  { text: "A patient is admitted with severe dehydration. What is the priority nursing action?", options: ["Administer prescribed IV fluids", "Record intake and output", "Encourage oral fluids", "Assess skin turgor"], answer: 0 },
  { text: "The best method to prevent hospital-acquired infection is:", options: ["Hand hygiene", "Bed making", "Patient counselling", "Early discharge"], answer: 0 },
  { text: "The first step in the nursing process is:", options: ["Planning", "Implementation", "Assessment", "Evaluation"], answer: 2 },
  { text: "The purpose of informed consent is to:", options: ["Reduce nursing workload", "Protect patient autonomy", "Increase bed occupancy", "Avoid documentation"], answer: 1 },

  // Section B — Medical Surgical Nursing (Q5–8)
  { text: "Which vital sign is most important to monitor in shock?", options: ["Temperature", "Blood pressure", "Respiration depth", "Pain score"], answer: 1 },
  { text: "Normal adult pulse rate is approximately:", options: ["40–50/min", "60–100/min", "110–130/min", "140–160/min"], answer: 1 },
  { text: "Which solution is commonly used for IV fluid replacement?", options: ["Normal saline", "Distilled water", "Hydrogen peroxide", "Spirit"], answer: 0 },
  { text: "Which position is commonly used for respiratory distress?", options: ["Prone", "Supine", "Fowler's", "Lithotomy"], answer: 2 },

  // Section C — Child Health Nursing (Q9–12)
  { text: "A sterile field is considered contaminated when it is:", options: ["Kept dry", "Below waist level", "Opened just before use", "Touched only with sterile gloves"], answer: 1 },
  { text: "The most reliable site for measuring core body temperature is:", options: ["Axilla", "Oral cavity", "Rectum", "Skin"], answer: 2 },
  { text: "Organ of Corti is concerned with:", options: ["Vision", "Hearing", "Smell", "Taste"], answer: 1 },
  { text: "The auditory ossicles are located in the:", options: ["External ear", "Middle ear", "Internal ear", "Cochlea"], answer: 1 },

  // Section D — Community Health / Mental Health (Q13–16)
  { text: "Which structure regulates the amount of light entering the eye?", options: ["Pupil", "Lens", "Retina", "Sclera"], answer: 0 },
  { text: "The transparent front part of the eye is called:", options: ["Iris", "Cornea", "Choroid", "Retina"], answer: 1 },
  { text: "Taste buds are mainly present on the:", options: ["Tongue", "Pharynx", "Larynx", "Nasal septum"], answer: 0 },
  { text: "The receptor cells for smell are present in the:", options: ["Olfactory epithelium", "Eustachian tube", "Ciliary body", "Semicircular canal"], answer: 0 },

  // Section E — GK & Aptitude (Q17–20)
  { text: "Photoreceptors of the retina are:", options: ["Rods and cones", "Ossicles", "Papillae", "Maculae"], answer: 0 },
  { text: "The white outer coat of the eyeball is:", options: ["Retina", "Sclera", "Lens", "Conjunctiva"], answer: 1 },
  { text: "The part of the inner ear responsible for balance is:", options: ["Cochlea", "Vestibular apparatus", "Tympanic membrane", "Malleus"], answer: 1 },
  { text: "Sensitive pigmented layer of the eye is:", options: ["Cornea", "Retina", "Sclerotic", "Iris"], answer: 1 }
];

const sections = [
  { name: "Section A — Nursing Foundations",           ids: [0, 1, 2, 3] },
  { name: "Section B — Medical Surgical Nursing",       ids: [4, 5, 6, 7] },
  { name: "Section C — Child Health Nursing",           ids: [8, 9, 10, 11] },
  { name: "Section D — Community Health / Mental Health", ids: [12, 13, 14, 15] },
  { name: "Section E — GK & Aptitude",                 ids: [16, 17, 18, 19] }
];

/* ── State ── */
const state = {
  currentQ: 0,
  currentSection: 0,
  answers:  Array(questions.length).fill(null),
  saved:    Array(questions.length).fill(false),
  marked:   Array(questions.length).fill(false),
  visited:  Array(questions.length).fill(false),
  remainingSeconds: 90 * 60,
  timerInterval: null,
  submitted: false,
  language: "English"
};

/* ── DOM helpers ── */
const el = (id) => document.getElementById(id);

const refs = {
  landingScreen:      el("landingScreen"),
  instructionsScreen: el("instructionsScreen"),
  examScreen:         el("examScreen"),
  startTestBtn:       el("startTestBtn"),
  backToLanding:      el("backToLanding"),
  languageSelect:     el("languageSelect"),
  agreeCheck:         el("agreeCheck"),
  beginBtn:           el("beginBtn"),
  timerDisplay:       el("timerDisplay"),
  sectionTabs:        el("sectionTabs"),
  questionNo:         el("questionNo"),
  questionText:       el("questionText"),
  optionList:         el("optionList"),
  palette:            el("palette"),
  paletteSectionTitle: el("paletteSectionTitle"),
  answeredCount:      el("answeredCount"),
  notAnsweredCount:   el("notAnsweredCount"),
  notVisitedCount:    el("notVisitedCount"),
  markedCount:        el("markedCount"),
  markedAnsweredCount: el("markedAnsweredCount"),
  markNextBtn:        el("markNextBtn"),
  clearBtn:           el("clearBtn"),
  prevBtn:            el("prevBtn"),
  saveNextBtn:        el("saveNextBtn"),
  submitBtn:          el("submitBtn"),
  questionLang:       el("questionLang"),
  submitModal:        el("submitModal"),
  summaryBody:        el("summaryBody"),
  summaryFoot:        el("summaryFoot"),
  cancelSubmit:       el("cancelSubmit"),
  confirmSubmit:      el("confirmSubmit"),
  resultModal:        el("resultModal"),
  closeResult:        el("closeResult")
};

/* ── Screen navigation ── */
function showScreen(name) {
  refs.landingScreen.classList.toggle("hidden", name !== "landing");
  refs.instructionsScreen.classList.toggle("hidden", name !== "instructions");
  refs.examScreen.classList.toggle("hidden", name !== "exam");
}

/* ── Full screen ── */
function requestFullScreen() {
  const doc = document.documentElement;
  if (!document.fullscreenElement && doc.requestFullscreen) {
    doc.requestFullscreen().catch(() => {});
  }
}

/* ── Timer ── */
function formatTime(secs) {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = secs % 60;
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

function pad(n) { return String(n).padStart(2, "0"); }

function startTimer() {
  clearInterval(state.timerInterval);
  refs.timerDisplay.textContent = formatTime(state.remainingSeconds);
  state.timerInterval = setInterval(() => {
    if (state.submitted) return;
    state.remainingSeconds = Math.max(0, state.remainingSeconds - 1);
    refs.timerDisplay.textContent = formatTime(state.remainingSeconds);
    if (state.remainingSeconds <= 0) autoSubmit();
  }, 1000);
}

/* ── Question status ── */
function qStatus(i) {
  if (!state.visited[i]) return "not-visited";
  if (state.marked[i] && state.saved[i]) return "marked-answered";
  if (state.marked[i]) return "marked";
  if (state.saved[i]) return "answered";
  return "not-answered";
}

/* ── Navigate to question ── */
function goTo(index) {
  const next = Math.max(0, Math.min(questions.length - 1, index));
  if (!state.saved[state.currentQ] && !state.marked[state.currentQ]) {
    state.visited[state.currentQ] = true;
  }
  state.currentQ = next;
  state.currentSection = sections.findIndex(s => s.ids.includes(next));
  renderAll();
}

/* ── Section tabs ── */
function renderSectionTabs() {
  refs.sectionTabs.innerHTML = "";
  sections.forEach((sec, si) => {
    const btn = document.createElement("button");
    btn.className = "section-tab" + (si === state.currentSection ? " active" : "");
    btn.innerHTML = `<span>${sec.name}</span>`;
    btn.addEventListener("click", () => {
      goTo(sec.ids[0]);
    });
    refs.sectionTabs.appendChild(btn);
  });
}

/* ── Question render ── */
function renderQuestion() {
  const q = questions[state.currentQ];
  refs.questionNo.textContent = String(state.currentQ + 1);
  refs.questionText.textContent = q.text;
  refs.optionList.innerHTML = "";

  q.options.forEach((opt, oi) => {
    const id = `opt-${state.currentQ}-${oi}`;
    const label = document.createElement("label");
    label.className = "option-row";
    label.htmlFor = id;

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.id = id;
    radio.checked = state.answers[state.currentQ] === oi;
    radio.addEventListener("change", () => {
      state.answers[state.currentQ] = oi;
      state.visited[state.currentQ] = true;
      renderPalette();
      renderCounts();
    });

    const span = document.createElement("span");
    span.textContent = `(${String.fromCharCode(65 + oi)})  ${opt}`;

    label.append(radio, span);
    refs.optionList.appendChild(label);
  });
}

/* ── Palette render ── */
function renderPalette() {
  const sec = sections[state.currentSection];
  refs.paletteSectionTitle.textContent = sec.name;
  refs.palette.innerHTML = "";

  sec.ids.forEach((qi) => {
    const btn = document.createElement("button");
    const status = qStatus(qi);
    btn.className = `palette-btn ${status}${qi === state.currentQ ? " current" : ""}`;
    btn.innerHTML = `<span>${qi + 1}</span>`;
    btn.addEventListener("click", () => goTo(qi));
    refs.palette.appendChild(btn);
  });
}

/* ── Status counts ── */
function renderCounts() {
  let answered = 0, notAnswered = 0, notVisited = 0, marked = 0, markedAnswered = 0;
  questions.forEach((_, i) => {
    const s = qStatus(i);
    if (s === "answered")        answered++;
    else if (s === "not-answered") notAnswered++;
    else if (s === "not-visited")  notVisited++;
    else if (s === "marked")       marked++;
    else if (s === "marked-answered") markedAnswered++;
  });
  refs.answeredCount.textContent        = answered;
  refs.notAnsweredCount.textContent     = notAnswered;
  refs.notVisitedCount.textContent      = notVisited;
  refs.markedCount.textContent          = marked;
  refs.markedAnsweredCount.textContent  = markedAnswered;
}

/* ── Render all ── */
function renderAll() {
  renderSectionTabs();
  renderQuestion();
  renderPalette();
  renderCounts();
}

/* ── Save & Next / Mark for Review ── */
function saveCurrent(markForReview) {
  state.visited[state.currentQ] = true;
  if (state.answers[state.currentQ] !== null) {
    state.saved[state.currentQ] = true;
  }
  state.marked[state.currentQ] = markForReview;

  const sec = sections[state.currentSection];
  const posInSection = sec.ids.indexOf(state.currentQ);

  if (posInSection < sec.ids.length - 1) {
    goTo(sec.ids[posInSection + 1]);
  } else if (state.currentSection < sections.length - 1) {
    goTo(sections[state.currentSection + 1].ids[0]);
  } else {
    renderAll();
  }
}

/* ── Clear response ── */
function clearCurrent() {
  state.answers[state.currentQ] = null;
  state.saved[state.currentQ] = false;
  renderQuestion();
  renderPalette();
  renderCounts();
}

/* ── Build summary table ── */
function buildSummary() {
  refs.summaryBody.innerHTML = "";
  refs.summaryFoot.innerHTML = "";

  let totTotal = 0, totAns = 0, totNotAns = 0, totMark = 0, totMarkAns = 0, totNotVis = 0;

  sections.forEach((sec) => {
    let ans = 0, notAns = 0, mark = 0, markAns = 0, notVis = 0;
    sec.ids.forEach((qi) => {
      const s = qStatus(qi);
      if (s === "answered")          ans++;
      else if (s === "not-answered") notAns++;
      else if (s === "marked")       mark++;
      else if (s === "marked-answered") markAns++;
      else                           notVis++;
    });
    const total = sec.ids.length;
    totTotal += total; totAns += ans; totNotAns += notAns;
    totMark += mark; totMarkAns += markAns; totNotVis += notVis;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${sec.name}</td>
      <td>${total}</td>
      <td class="col-green">${ans}</td>
      <td class="col-red">${notAns}</td>
      <td class="col-purple">${mark}</td>
      <td class="col-purple">${markAns}</td>
      <td class="col-grey">${notVis}</td>
    `;
    refs.summaryBody.appendChild(tr);
  });

  refs.summaryFoot.innerHTML = `
    <tr>
      <td>Total</td>
      <td>${totTotal}</td>
      <td class="col-green">${totAns}</td>
      <td class="col-red">${totNotAns}</td>
      <td class="col-purple">${totMark}</td>
      <td class="col-purple">${totMarkAns}</td>
      <td class="col-grey">${totNotVis}</td>
    </tr>
  `;
}

/* ── Show submit modal ── */
function showSubmitModal() {
  buildSummary();
  refs.submitModal.classList.remove("hidden");
}

/* ── Auto-submit on time up ── */
function autoSubmit() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerInterval);
  refs.submitModal.classList.add("hidden");
  refs.resultModal.classList.remove("hidden");
}

/* ── Confirm submit ── */
function confirmSubmit() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerInterval);
  refs.submitModal.classList.add("hidden");
  refs.resultModal.classList.remove("hidden");
}

/* ── Events ── */
function bindEvents() {
  // Landing → Instructions
  refs.startTestBtn.addEventListener("click", () => {
    requestFullScreen();
    showScreen("instructions");
  });

  // Instructions → Landing (back)
  refs.backToLanding.addEventListener("click", () => showScreen("landing"));

  // Enable begin button only when both language and checkbox are set
  const checkBegin = () => {
    refs.beginBtn.disabled = !(refs.agreeCheck.checked && refs.languageSelect.value);
  };
  refs.agreeCheck.addEventListener("change", checkBegin);
  refs.languageSelect.addEventListener("change", (e) => {
    state.language = e.target.value;
    checkBegin();
  });

  // Begin test
  refs.beginBtn.addEventListener("click", () => {
    if (refs.questionLang) {
      refs.questionLang.value = state.language;
    }
    requestFullScreen();
    showScreen("exam");
    goTo(0);
    startTimer();
  });

  // Exam controls
  refs.saveNextBtn.addEventListener("click", () => saveCurrent(false));
  refs.markNextBtn.addEventListener("click", () => saveCurrent(true));
  refs.clearBtn.addEventListener("click", clearCurrent);
  refs.prevBtn.addEventListener("click", () => {
    const sec = sections[state.currentSection];
    const pos = sec.ids.indexOf(state.currentQ);
    if (pos > 0) {
      goTo(sec.ids[pos - 1]);
    } else if (state.currentSection > 0) {
      const prevSec = sections[state.currentSection - 1];
      goTo(prevSec.ids[prevSec.ids.length - 1]);
    }
  });

  refs.submitBtn.addEventListener("click", showSubmitModal);

  // Submit modal
  refs.cancelSubmit.addEventListener("click", () => refs.submitModal.classList.add("hidden"));
  refs.confirmSubmit.addEventListener("click", confirmSubmit);

  // Result close
  refs.closeResult.addEventListener("click", () => refs.resultModal.classList.add("hidden"));

  // Prevent accidental navigation out during exam
  window.addEventListener("beforeunload", (e) => {
    if (!state.submitted && refs.examScreen && !refs.examScreen.classList.contains("hidden")) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
}

/* ── Init ── */
bindEvents();
showScreen("landing");
