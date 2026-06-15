/* ── Questions ── */
const questions = [
  // Section A — Nursing Foundations (Q1–4)
  {
    text: "Study the 12-lead ECG tracing shown below carefully (scroll right to view all leads). Based on the rhythm and waveform characteristics observed, identify the most appropriate immediate nursing action.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/12leadECG.jpg",
    imageLarge: true,
    options: ["Prepare for immediate defibrillation", "Document as Normal Sinus Rhythm and continue monitoring", "Administer IV Atropine as prescribed", "Elevate head of bed and administer O₂"],
    answer: 1
  },
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
  {
    text: "Examine the chest X-ray image shown below. Which of the following clinical findings is most consistent with this radiograph?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chest_X-ray_PA_3-8-2010.png",
    imageLarge: false,
    options: ["Tension pneumothorax", "Bilateral pleural effusion", "Normal chest X-ray", "Cardiomegaly with pulmonary oedema"],
    answer: 2
  },

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

const SECTION_DURATION = 20 * 60; // 20 minutes in seconds

const sections = [
  { name: "Section A",  fullName: "Section A — Nursing Foundations",              ids: [0, 1, 2, 3] },
  { name: "Section B",  fullName: "Section B — Medical Surgical Nursing",          ids: [4, 5, 6, 7] },
  { name: "Section C",  fullName: "Section C — Child Health Nursing",              ids: [8, 9, 10, 11] },
  { name: "Section D",  fullName: "Section D — Community Health / Mental Health",  ids: [12, 13, 14, 15] },
  { name: "Section E",  fullName: "Section E — GK & Aptitude",                    ids: [16, 17, 18, 19] }
];

/* ── State ── */
const state = {
  currentQ:       0,
  currentSection: 0,
  answers:        Array(questions.length).fill(null),
  saved:          Array(questions.length).fill(false),
  marked:         Array(questions.length).fill(false),
  visited:        Array(questions.length).fill(false),
  sectionTimers:  Array(sections.length).fill(SECTION_DURATION),
  expired:        Array(sections.length).fill(false),
  timerInterval:  null,
  submitted:      false,
  qpOpen:         false,
  paletteOpen:    true
};

/* ── DOM ── */
const el = id => document.getElementById(id);

const refs = {
  landingScreen:       el("landingScreen"),
  instructionsScreen:  el("instructionsScreen"),
  examScreen:          el("examScreen"),
  startTestBtn:        el("startTestBtn"),
  backToLanding:       el("backToLanding"),
  agreeCheck:          el("agreeCheck"),
  beginBtn:            el("beginBtn"),
  timerDisplay:        el("timerDisplay"),
  sectionTabs:         el("sectionTabs"),
  questionNo:          el("questionNo"),
  questionText:        el("questionText"),
  optionList:          el("optionList"),
  palette:             el("palette"),
  paletteSectionTitle: el("paletteSectionTitle"),
  answeredCount:       el("answeredCount"),
  notAnsweredCount:    el("notAnsweredCount"),
  notVisitedCount:     el("notVisitedCount"),
  markedCount:         el("markedCount"),
  markedAnsweredCount: el("markedAnsweredCount"),
  markNextBtn:         el("markNextBtn"),
  clearBtn:            el("clearBtn"),
  prevBtn:             el("prevBtn"),
  saveNextBtn:         el("saveNextBtn"),
  submitBtn:           el("submitBtn"),
  submitModal:          el("submitModal"),
  summaryBody:          el("summaryBody"),
  summaryFoot:          el("summaryFoot"),
  cancelSubmit:         el("cancelSubmit"),
  confirmSubmit:        el("confirmSubmit"),
  resultModal:          el("resultModal"),
  closeResult:          el("closeResult"),
  qpToggleBtn:          el("qpToggleBtn"),
  qpOverlay:            el("qpOverlay"),
  qpContent:            el("qpContent"),
  closeQP:              el("closeQP"),
  paletteCollapseBtn:   el("paletteCollapseBtn"),
  paletteArrow:         el("paletteArrow"),
  norcetPalette:        el("norcetPalette"),
  questionImageWrap:    el("questionImageWrap")
};

/* ════════════════════════════════
   SCREEN NAVIGATION
   ════════════════════════════════ */
function showScreen(name) {
  refs.landingScreen.classList.toggle("hidden",      name !== "landing");
  refs.instructionsScreen.classList.toggle("hidden", name !== "instructions");
  refs.examScreen.classList.toggle("hidden",         name !== "exam");
}

function requestFullScreen() {
  const doc = document.documentElement;
  if (!document.fullscreenElement && doc.requestFullscreen) {
    doc.requestFullscreen().catch(() => {});
  }
}

/* ════════════════════════════════
   SECTION TIMERS
   ════════════════════════════════ */
function pad(n) { return String(n).padStart(2, "0"); }

function formatSectionTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${pad(m)}:${pad(s)}`;
}

function renderTimerDisplay() {
  const secs = state.sectionTimers[state.currentSection];
  refs.timerDisplay.textContent = formatSectionTime(secs);
  refs.timerDisplay.style.color = secs <= 60 ? "#ff0000" : "#cc0000";
}

function startTimer() {
  clearInterval(state.timerInterval);
  renderTimerDisplay();
  state.timerInterval = setInterval(tick, 1000);
}

function tick() {
  if (state.submitted) return;
  const si = state.currentSection;
  if (state.sectionTimers[si] > 0) {
    state.sectionTimers[si]--;
    renderTimerDisplay();
    renderSectionTabs();
  }
  if (state.sectionTimers[si] === 0 && !state.expired[si]) {
    state.expired[si] = true;
    onSectionExpired(si);
  }
}

function onSectionExpired(si) {
  showToast(`Time up for ${sections[si].name}! Moving to next section…`);
  const nextSi = si + 1;
  if (nextSi < sections.length) {
    goTo(sections[nextSi].ids[0], true); // force cross-section switch
  } else {
    setTimeout(() => autoSubmit(), 1800);
  }
}

function showToast(msg) {
  const div = document.createElement("div");
  div.className = "section-toast";
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => { div.classList.add("fade-out"); setTimeout(() => div.remove(), 600); }, 2400);
}

/* ════════════════════════════════
   QUESTION STATUS
   ════════════════════════════════ */
function qStatus(i) {
  if (!state.visited[i]) return "not-visited";
  if (state.marked[i] && state.saved[i]) return "marked-answered";
  if (state.marked[i]) return "marked";
  if (state.saved[i]) return "answered";
  return "not-answered";
}

/* ════════════════════════════════
   NAVIGATION
   ════════════════════════════════ */
function goTo(index, force = false) {
  const next = Math.max(0, Math.min(questions.length - 1, index));
  const targetSection = sections.findIndex(s => s.ids.includes(next));

  // Block cross-section jumps unless triggered by the timer (force = true)
  if (!force && targetSection !== state.currentSection) return;

  if (!state.saved[state.currentQ] && !state.marked[state.currentQ]) {
    state.visited[state.currentQ] = true;
  }
  state.currentQ = next;
  state.currentSection = targetSection;
  renderAll();
}

/* ════════════════════════════════
   RENDER: SECTION TABS
   ════════════════════════════════ */
function renderSectionTabs() {
  refs.sectionTabs.innerHTML = "";
  sections.forEach((sec, si) => {
    const btn = document.createElement("button");
    const isActive  = si === state.currentSection;
    const isPast    = si < state.currentSection;
    const isFuture  = si > state.currentSection;
    const isExpired = state.expired[si];

    btn.className = [
      "section-tab",
      isActive  ? "active"      : "",
      isPast    ? "sec-past"    : "",
      isFuture  ? "sec-future"  : "",
      isExpired ? "sec-expired" : ""
    ].filter(Boolean).join(" ");

    // Tabs are non-interactive — navigation locked to one direction
    btn.disabled = true;
    btn.title = isActive
      ? "Current section"
      : isPast
        ? "Completed — cannot go back"
        : "Locked — complete current section first";

    const nameSpan = document.createElement("span");
    nameSpan.className = "tab-name";
    nameSpan.textContent = isPast ? `✓ ${sec.name}` : isFuture ? `🔒 ${sec.name}` : sec.name;

    const timeSpan = document.createElement("span");
    timeSpan.className = `tab-time${(isExpired || isPast) ? " expired" : ""}`;
    timeSpan.textContent = isPast ? "Done" : isExpired ? "00:00" : formatSectionTime(state.sectionTimers[si]);

    btn.append(nameSpan, timeSpan);
    refs.sectionTabs.appendChild(btn);
  });
}

/* ════════════════════════════════
   RENDER: QUESTION
   ════════════════════════════════ */
function renderQuestion() {
  const q = questions[state.currentQ];
  refs.questionNo.textContent = String(state.currentQ + 1);
  refs.questionText.textContent = q.text;
  refs.optionList.innerHTML = "";

  // ── Image ──
  const wrap = refs.questionImageWrap;
  if (q.image) {
    wrap.className = q.imageLarge ? "q-image-wrap q-image-large" : "q-image-wrap q-image-normal";
    wrap.innerHTML = "";

    const img = document.createElement("img");
    img.src = q.image;
    img.alt = "Question image";
    img.draggable = false;

    wrap.appendChild(img);

    // Enable mouse-drag scrolling on the large container
    if (q.imageLarge) {
      let isDragging = false, startX = 0, startY = 0, scrollLeft = 0, scrollTop = 0;
      wrap.addEventListener("mousedown", e => {
        isDragging = true;
        startX = e.pageX - wrap.offsetLeft;
        startY = e.pageY - wrap.offsetTop;
        scrollLeft = wrap.scrollLeft;
        scrollTop  = wrap.scrollTop;
        wrap.style.cursor = "grabbing";
      });
      wrap.addEventListener("mouseleave", () => { isDragging = false; wrap.style.cursor = "grab"; });
      wrap.addEventListener("mouseup",    () => { isDragging = false; wrap.style.cursor = "grab"; });
      wrap.addEventListener("mousemove", e => {
        if (!isDragging) return;
        e.preventDefault();
        wrap.scrollLeft = scrollLeft - (e.pageX - wrap.offsetLeft - startX);
        wrap.scrollTop  = scrollTop  - (e.pageY - wrap.offsetTop  - startY);
      });

      // Touch drag support
      let tStartX = 0, tStartY = 0, tScrollLeft = 0, tScrollTop = 0;
      wrap.addEventListener("touchstart", e => {
        tStartX = e.touches[0].pageX; tStartY = e.touches[0].pageY;
        tScrollLeft = wrap.scrollLeft; tScrollTop = wrap.scrollTop;
      }, { passive: true });
      wrap.addEventListener("touchmove", e => {
        wrap.scrollLeft = tScrollLeft - (e.touches[0].pageX - tStartX);
        wrap.scrollTop  = tScrollTop  - (e.touches[0].pageY - tStartY);
      }, { passive: true });
    }

    const note = document.createElement("p");
    note.className = "q-image-note";
    note.textContent = q.imageLarge
      ? "Scroll or drag the image to view all areas."
      : "";
    wrap.after(note);
  } else {
    wrap.className = "q-image-wrap hidden";
    wrap.innerHTML = "";
    // Remove stale note if any
    const staleNote = wrap.nextSibling;
    if (staleNote && staleNote.classList && staleNote.classList.contains("q-image-note")) {
      staleNote.remove();
    }
  }

  // ── Options ──
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

/* ════════════════════════════════
   PALETTE COLLAPSE TOGGLE
   ════════════════════════════════ */
function togglePalette() {
  state.paletteOpen = !state.paletteOpen;
  refs.norcetPalette.classList.toggle("palette-collapsed", !state.paletteOpen);
  refs.paletteArrow.innerHTML = state.paletteOpen ? "&#9664;" : "&#9654;";
}

/* ════════════════════════════════
   RENDER: PALETTE
   ════════════════════════════════ */
function renderPalette() {
  const sec = sections[state.currentSection];
  refs.paletteSectionTitle.textContent = sec.fullName;
  refs.palette.innerHTML = "";

  sec.ids.forEach(qi => {
    const btn = document.createElement("button");
    const status = qStatus(qi);
    btn.className = `palette-btn ${status}${qi === state.currentQ ? " current" : ""}`;
    btn.innerHTML = `<span>${qi + 1}</span>`;
    btn.addEventListener("click", () => goTo(qi));
    refs.palette.appendChild(btn);
  });
}

/* ════════════════════════════════
   RENDER: COUNTS
   ════════════════════════════════ */
function renderCounts() {
  let answered = 0, notAnswered = 0, notVisited = 0, marked = 0, markedAnswered = 0;
  questions.forEach((_, i) => {
    const s = qStatus(i);
    if (s === "answered")           answered++;
    else if (s === "not-answered")  notAnswered++;
    else if (s === "not-visited")   notVisited++;
    else if (s === "marked")        marked++;
    else if (s === "marked-answered") markedAnswered++;
  });
  refs.answeredCount.textContent       = answered;
  refs.notAnsweredCount.textContent    = notAnswered;
  refs.notVisitedCount.textContent     = notVisited;
  refs.markedCount.textContent         = marked;
  refs.markedAnsweredCount.textContent = markedAnswered;
}

function renderAll() {
  renderSectionTabs();
  renderQuestion();
  renderPalette();
  renderCounts();
  renderTimerDisplay();
  if (state.qpOpen) renderQPContent();
}

/* ════════════════════════════════
   SAVE / MARK / CLEAR
   ════════════════════════════════ */
function saveCurrent(markForReview) {
  state.visited[state.currentQ] = true;
  if (state.answers[state.currentQ] !== null) {
    state.saved[state.currentQ] = true;
  }
  state.marked[state.currentQ] = markForReview;

  const sec = sections[state.currentSection];
  const pos = sec.ids.indexOf(state.currentQ);

  if (pos < sec.ids.length - 1) {
    goTo(sec.ids[pos + 1]); // move within same section
  } else {
    // Last question of section — stay here, section switch happens only via timer
    renderAll();
    showToast("Last question of this section. Wait for the timer to unlock the next section.");
  }
}

function clearCurrent() {
  state.answers[state.currentQ] = null;
  state.saved[state.currentQ] = false;
  renderQuestion();
  renderPalette();
  renderCounts();
}

/* ════════════════════════════════
   QUESTION PAPER PANEL
   ════════════════════════════════ */
function openQP() {
  state.qpOpen = true;
  refs.qpOverlay.classList.remove("hidden");
  renderQPContent();
}

function closeQP() {
  state.qpOpen = false;
  refs.qpOverlay.classList.add("hidden");
}

function renderQPContent() {
  refs.qpContent.innerHTML = "";
  sections.forEach((sec, si) => {
    const secDiv = document.createElement("div");
    secDiv.className = "qp-section";

    const titleDiv = document.createElement("div");
    titleDiv.className = "qp-section-title";
    const timeSpan = document.createElement("span");
    timeSpan.className = "qp-section-timer";
    timeSpan.textContent = state.expired[si] ? "Expired" : formatSectionTime(state.sectionTimers[si]);
    titleDiv.textContent = sec.fullName + " ";
    titleDiv.appendChild(timeSpan);
    secDiv.appendChild(titleDiv);

    const isCurrentSection = si === state.currentSection;

    sec.ids.forEach(qi => {
      const row = document.createElement("div");
      const status = qStatus(qi);
      row.className = [
        "qp-q-row",
        qi === state.currentQ ? "qp-current" : "",
        !isCurrentSection    ? "qp-locked"  : ""
      ].filter(Boolean).join(" ");

      const numSpan = document.createElement("span");
      numSpan.className = "qp-num";
      numSpan.textContent = `Q${qi + 1}.`;

      const dot = document.createElement("span");
      dot.className = `qp-dot ${status === "not-visited" ? "" : status}`;

      const txt = document.createElement("span");
      txt.className = "qp-q-text";
      txt.textContent = questions[qi].text.length > 90
        ? questions[qi].text.slice(0, 90) + "…"
        : questions[qi].text;

      row.append(numSpan, dot, txt);

      if (isCurrentSection) {
        row.addEventListener("click", () => { closeQP(); goTo(qi); });
      } else {
        row.title = si < state.currentSection
          ? "This section is closed"
          : "Locked — complete current section first";
      }
      secDiv.appendChild(row);
    });

    refs.qpContent.appendChild(secDiv);
  });
}

/* ════════════════════════════════
   SUBMIT FLOW
   ════════════════════════════════ */
function buildSummary() {
  refs.summaryBody.innerHTML = "";
  refs.summaryFoot.innerHTML = "";
  let tT = 0, tA = 0, tNA = 0, tM = 0, tMA = 0, tNV = 0;

  sections.forEach(sec => {
    let ans = 0, notAns = 0, mark = 0, markAns = 0, notVis = 0;
    sec.ids.forEach(qi => {
      const s = qStatus(qi);
      if (s === "answered")           ans++;
      else if (s === "not-answered")  notAns++;
      else if (s === "marked")        mark++;
      else if (s === "marked-answered") markAns++;
      else                            notVis++;
    });
    const total = sec.ids.length;
    tT += total; tA += ans; tNA += notAns; tM += mark; tMA += markAns; tNV += notVis;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${sec.fullName}</td>
      <td>${total}</td>
      <td class="col-green">${ans}</td>
      <td class="col-red">${notAns}</td>
      <td class="col-purple">${mark}</td>
      <td class="col-purple">${markAns}</td>
      <td class="col-grey">${notVis}</td>`;
    refs.summaryBody.appendChild(tr);
  });

  refs.summaryFoot.innerHTML = `
    <tr>
      <td>Total</td>
      <td>${tT}</td>
      <td class="col-green">${tA}</td>
      <td class="col-red">${tNA}</td>
      <td class="col-purple">${tM}</td>
      <td class="col-purple">${tMA}</td>
      <td class="col-grey">${tNV}</td>
    </tr>`;
}

function showSubmitModal() {
  buildSummary();
  refs.submitModal.classList.remove("hidden");
}

function autoSubmit() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerInterval);
  refs.submitModal.classList.add("hidden");
  refs.qpOverlay.classList.add("hidden");
  refs.resultModal.classList.remove("hidden");
}

function confirmSubmit() {
  if (state.submitted) return;
  state.submitted = true;
  clearInterval(state.timerInterval);
  refs.submitModal.classList.add("hidden");
  refs.resultModal.classList.remove("hidden");
}

/* ════════════════════════════════
   EVENT BINDINGS
   ════════════════════════════════ */
function bindEvents() {
  // Landing → Instructions
  refs.startTestBtn.addEventListener("click", () => {
    requestFullScreen();
    showScreen("instructions");
  });

  refs.backToLanding.addEventListener("click", () => showScreen("landing"));

  // Enable begin when checkbox checked
  refs.agreeCheck.addEventListener("change", () => {
    refs.beginBtn.disabled = !refs.agreeCheck.checked;
  });

  // Begin exam
  refs.beginBtn.addEventListener("click", () => {
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
      goTo(sec.ids[pos - 1]); // within same section only
    }
    // No cross-section back navigation
  });

  refs.submitBtn.addEventListener("click", showSubmitModal);
  refs.cancelSubmit.addEventListener("click", () => refs.submitModal.classList.add("hidden"));
  refs.confirmSubmit.addEventListener("click", confirmSubmit);
  refs.closeResult.addEventListener("click", () => refs.resultModal.classList.add("hidden"));

  // Question Paper panel
  refs.qpToggleBtn.addEventListener("click", () => state.qpOpen ? closeQP() : openQP());
  refs.closeQP.addEventListener("click", closeQP);
  refs.qpOverlay.addEventListener("click", e => { if (e.target === refs.qpOverlay) closeQP(); });

  // Palette collapse strip
  refs.paletteCollapseBtn.addEventListener("click", togglePalette);

  // Keyboard shortcuts
  document.addEventListener("keydown", e => {
    const tag = document.activeElement.tagName;
    const inInput = tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA";
    if (inInput) return;
    if (refs.examScreen.classList.contains("hidden")) return;

    // Question Paper panel: → or Q
    if (e.key === "ArrowRight" || e.key === "q" || e.key === "Q") {
      state.qpOpen ? closeQP() : openQP();
    }
    // Close QP: ← or Esc
    if ((e.key === "Escape" || e.key === "ArrowLeft") && state.qpOpen) {
      closeQP();
    }
    // Palette toggle: P
    if (e.key === "p" || e.key === "P") {
      togglePalette();
    }
  });

  // Warn on accidental navigation
  window.addEventListener("beforeunload", e => {
    if (!state.submitted && !refs.examScreen.classList.contains("hidden")) {
      e.preventDefault();
      e.returnValue = "";
    }
  });
}

/* ════════════════════════════════
   INIT
   ════════════════════════════════ */
bindEvents();
showScreen("landing");
