/* ════════════════════════════════
   QUESTIONS  (100 MCQs — 20 per section)
   ════════════════════════════════ */
const questions = [

  /* ── SECTION A — Nursing Foundations  (Q1–Q20, indices 0–19) ── */

  // Q1 — Large ECG image
  { text: "Study the 12-lead ECG tracing below carefully (drag/scroll to view all leads). Based on the rhythm and waveform characteristics, identify the most appropriate immediate nursing action.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/12leadECG.jpg", imageLarge: true,
    options: ["Prepare for immediate defibrillation", "Document as Normal Sinus Rhythm and continue monitoring", "Administer IV Atropine as prescribed", "Elevate head of bed and administer O₂"],
    answer: 1 },

  // Q2
  { text: "The best method to prevent hospital-acquired infection is:",
    options: ["Hand hygiene", "Bed making", "Patient counselling", "Early discharge"], answer: 0 },

  // Q3
  { text: "The first step in the nursing process is:",
    options: ["Planning", "Implementation", "Assessment", "Evaluation"], answer: 2 },

  // Q4
  { text: "The purpose of informed consent is to:",
    options: ["Reduce nursing workload", "Protect patient autonomy", "Increase bed occupancy", "Avoid documentation"], answer: 1 },

  // Q5
  { text: "Normal adult respiratory rate (breaths per minute) is:",
    options: ["8–12", "12–20", "22–28", "30–40"], answer: 1 },

  // Q6
  { text: "Which of the following is the correct duration for a surgical hand scrub?",
    options: ["1 minute", "2–3 minutes", "3–5 minutes", "10 minutes"], answer: 2 },

  // Q7
  { text: "Maslow's hierarchy places which of the following at the base (most basic level)?",
    options: ["Safety needs", "Self-actualisation", "Physiological needs", "Esteem needs"], answer: 2 },

  // Q8
  { text: "Normal adult systolic blood pressure range (mmHg) is:",
    options: ["60–80", "90–100", "100–140", "150–180"], answer: 2 },

  // Q9
  { text: "The correct position for a patient in hypovolaemic shock (while awaiting IV access) is:",
    options: ["High Fowler's", "Prone", "Modified Trendelenburg (legs elevated)", "Left lateral"], answer: 2 },

  // Q10
  { text: "The Glasgow Coma Scale (GCS) maximum score is:",
    options: ["10", "12", "15", "18"], answer: 2 },

  // Q11
  { text: "Normal urine output in an adult is approximately:",
    options: ["10–20 mL/hr", "30–50 mL/hr", "80–100 mL/hr", "120–150 mL/hr"], answer: 1 },

  // Q12 — Chest X-ray image
  { text: "Examine the chest X-ray image shown below. Which clinical finding is most consistent with this radiograph?",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Chest_X-ray_PA_3-8-2010.png", imageLarge: false,
    options: ["Tension pneumothorax", "Bilateral pleural effusion", "Normal chest X-ray", "Cardiomegaly with pulmonary oedema"],
    answer: 2 },

  // Q13
  { text: "Which of the following is a sign of infection at a surgical wound site?",
    options: ["Serous drainage", "Approximated wound edges", "Localised warmth, redness and purulent discharge", "Slight oedema on day 1"],
    answer: 2 },

  // Q14
  { text: "Which electrolyte is the PRIMARY intracellular cation?",
    options: ["Sodium (Na⁺)", "Calcium (Ca²⁺)", "Potassium (K⁺)", "Magnesium (Mg²⁺)"], answer: 2 },

  // Q15
  { text: "A patient rates pain as 8/10 on the Numeric Rating Scale. This indicates:",
    options: ["Mild pain", "Moderate pain", "Severe pain", "No pain"], answer: 2 },

  // Q16
  { text: "Which of the following actions VIOLATES aseptic technique?",
    options: ["Opening sterile packages towards yourself", "Keeping the sterile field above waist level", "Treating the outer inch of a sterile drape as contaminated", "Avoiding reaching across a sterile field"],
    answer: 0 },

  // Q17
  { text: "Which nursing diagnosis is written correctly in NANDA format?",
    options: ["Fever related to infection", "Fluid volume deficit related to vomiting as evidenced by dry mucous membranes", "Patient is dehydrated", "Dehydration due to poor intake"],
    answer: 1 },

  // Q18
  { text: "The primary purpose of nursing documentation is:",
    options: ["Legal protection only", "Communication, continuity of care, legal protection, and quality assurance", "Fulfilling hospital formality", "Billing purposes only"],
    answer: 1 },

  // Q19
  { text: "The ethical principle of 'do no harm' is referred to as:",
    options: ["Beneficence", "Justice", "Non-maleficence", "Autonomy"], answer: 2 },

  // Q20
  { text: "A nurse preparing to administer medication should verify the 'Five Rights'. Which of the following is NOT one of them?",
    options: ["Right patient", "Right dose", "Right diagnosis", "Right route"], answer: 2 },


  /* ── SECTION B — Medical Surgical Nursing  (Q21–Q40, indices 20–39) ── */

  // Q21
  { text: "Which vital sign is most critical to monitor in a patient in circulatory shock?",
    options: ["Temperature", "Blood pressure", "Respiration depth", "Pain score"], answer: 1 },

  // Q22
  { text: "Normal adult resting pulse rate (beats per minute) is:",
    options: ["40–50", "60–100", "110–130", "140–160"], answer: 1 },

  // Q23
  { text: "Which IV solution is isotonic and used for acute volume replacement?",
    options: ["0.9% Normal Saline", "Distilled water", "3% Hypertonic Saline", "50% Dextrose"], answer: 0 },

  // Q24
  { text: "Which position is most appropriate for a patient in acute respiratory distress?",
    options: ["Prone", "Supine", "High Fowler's (90°)", "Left lateral"], answer: 2 },

  // Q25
  { text: "The most common early complication after major abdominal surgery is:",
    options: ["Wound dehiscence", "Deep vein thrombosis", "Paralytic ileus", "Pulmonary embolism"], answer: 2 },

  // Q26
  { text: "First nursing action for a patient with suspected acute myocardial infarction is:",
    options: ["Administer aspirin immediately", "Obtain 12-lead ECG", "Call the physician", "Ensure patent airway, administer O₂, and establish IV access"],
    answer: 3 },

  // Q27
  { text: "A diabetic patient shows trembling, diaphoresis and confusion. The nurse should FIRST:",
    options: ["Administer insulin", "Check blood glucose level", "Call the doctor", "Give IV dextrose immediately without checking"],
    answer: 1 },

  // Q28
  { text: "Which insulin type has the FASTEST onset of action?",
    options: ["NPH insulin", "Glargine (Lantus)", "Regular (soluble) insulin", "Lispro (Humalog)"], answer: 3 },

  // Q29
  { text: "The most common complication of prolonged immobilisation is:",
    options: ["Hypertension", "Pressure ulcer", "Hyperthyroidism", "Polycythaemia"], answer: 1 },

  // Q30
  { text: "The antidote for heparin overdose is:",
    options: ["Vitamin K", "Protamine sulphate", "Naloxone", "Flumazenil"], answer: 1 },

  // Q31
  { text: "Normal serum potassium level (mEq/L) is:",
    options: ["1.5–2.5", "3.5–5.0", "6.0–7.5", "8.0–10.0"], answer: 1 },

  // Q32
  { text: "The preferred site for intramuscular injection in adults is:",
    options: ["Deltoid", "Ventrogluteal", "Dorsogluteal", "Rectus femoris"], answer: 1 },

  // Q33
  { text: "A patient with COPD should receive supplemental oxygen at:",
    options: ["1–2 L/min via nasal cannula", "6–8 L/min via face mask", "10 L/min via non-rebreather mask", "15 L/min via Venturi mask"],
    answer: 0 },

  // Q34
  { text: "Which dressing is recommended for a Stage II pressure ulcer with minimal exudate?",
    options: ["Dry gauze", "Hydrocolloid dressing", "Alginate dressing", "Wet-to-dry dressing"], answer: 1 },

  // Q35
  { text: "Post-mastectomy arm care includes which of the following?",
    options: ["Taking blood pressure on the affected arm", "Wearing tight-fitting jewellery on the affected arm", "Avoiding venipuncture on the affected arm", "Using the affected arm for IV infusion"],
    answer: 2 },

  // Q36
  { text: "A classic sign of fluid overload is:",
    options: ["Dry mucous membranes", "Poor skin turgor", "Bibasal crackles on auscultation and pitting oedema", "Dark concentrated urine"],
    answer: 2 },

  // Q37
  { text: "A patient with chronic renal failure shows peaked T-waves on ECG. The nurse suspects:",
    options: ["Hypokalaemia", "Hyperkalaemia", "Hyponatraemia", "Hypernatraemia"], answer: 1 },

  // Q38
  { text: "Which of the following is NOT a sign of respiratory distress?",
    options: ["Nasal flaring", "Intercostal retractions", "SpO₂ of 99% on room air", "Use of accessory muscles"], answer: 2 },

  // Q39
  { text: "Pre-operative teaching should include:",
    options: ["Post-operative turning, coughing and deep-breathing exercises", "Guaranteeing a successful outcome", "Discouraging patient questions", "Withholding information about possible complications"],
    answer: 0 },

  // Q40
  { text: "After Foley catheter insertion, the balloon should be inflated with:",
    options: ["Air", "Normal saline", "Sterile water as per manufacturer's instruction", "Distilled water mixed with antibiotic"],
    answer: 2 },


  /* ── SECTION C — Child Health Nursing  (Q41–Q60, indices 40–59) ── */

  // Q41
  { text: "Normal birth weight of a full-term neonate is:",
    options: ["1.5–2.0 kg", "2.5–4.0 kg", "4.5–5.5 kg", "5.5–6.5 kg"], answer: 1 },

  // Q42
  { text: "An Apgar score of 7–10 at 5 minutes indicates:",
    options: ["Severe birth asphyxia requiring resuscitation", "Moderate asphyxia", "Good condition — routine care required", "Stillbirth"], answer: 2 },

  // Q43
  { text: "BCG vaccine is administered at:",
    options: ["6 weeks of age", "At birth", "9 months", "18 months"], answer: 1 },

  // Q44
  { text: "The anterior fontanelle normally closes by:",
    options: ["3–6 months", "6–9 months", "12–18 months", "24–30 months"], answer: 2 },

  // Q45
  { text: "Which of the following is an advantage of breastfeeding over formula?",
    options: ["Easier to measure intake", "More convenient for working mothers", "Provides maternal antibodies (secretory IgA)", "Higher caloric density"],
    answer: 2 },

  // Q46
  { text: "Projectile vomiting shortly after feeding in a 3-week-old infant most likely suggests:",
    options: ["Gastroesophageal reflux", "Pyloric stenosis", "Intussusception", "Hirschsprung disease"], answer: 1 },

  // Q47
  { text: "Normal resting respiratory rate for a newborn (breaths per minute) is:",
    options: ["10–15", "20–30", "30–60", "70–90"], answer: 2 },

  // Q48
  { text: "Clark's rule for paediatric dosage calculation uses:",
    options: ["Child's age in years", "Child's weight in pounds (lbs)", "Child's height in cm", "Child's body surface area in m²"],
    answer: 1 },

  // Q49
  { text: "WHO reduced-osmolarity ORS contains sodium at a concentration of:",
    options: ["45 mmol/L", "75 mmol/L", "90 mmol/L", "120 mmol/L"], answer: 1 },

  // Q50
  { text: "Koplik's spots on the buccal mucosa are pathognomonic of:",
    options: ["Chickenpox", "Mumps", "Measles (Rubeola)", "Rubella"], answer: 2 },

  // Q51
  { text: "Normal haemoglobin level in a newborn (g/dL) is:",
    options: ["8–10", "11–13", "14–20", "21–25"], answer: 2 },

  // Q52
  { text: "A child presents with fever, severe headache, photophobia and neck stiffness. The nurse should first suspect:",
    options: ["Encephalitis", "Bacterial meningitis", "Migraine", "Febrile seizure"], answer: 1 },

  // Q53
  { text: "Normal heart rate for an infant (0–12 months) in beats per minute is:",
    options: ["60–80", "80–100", "100–160", "170–200"], answer: 2 },

  // Q54
  { text: "Growth monitoring in children is best performed using:",
    options: ["Chest circumference only", "Head circumference only", "Standardised growth charts (weight-for-age / height-for-age)", "Blood glucose level"],
    answer: 2 },

  // Q55
  { text: "Which of the following is a DANGER sign in a newborn requiring immediate referral?",
    options: ["Physiological jaundice on day 3", "Mild breast engorgement", "Inability to feed / poor suckling", "Slight moulding of head"],
    answer: 2 },

  // Q56
  { text: "DPT vaccine (first dose) is given at:",
    options: ["Birth", "6 weeks of age", "9 months", "12 months"], answer: 1 },

  // Q57
  { text: "The Moro (startle) reflex in a healthy neonate should disappear by:",
    options: ["1 month", "2 months", "3–4 months", "6 months"], answer: 2 },

  // Q58
  { text: "Which of the following is NOT a component of IMNCI classification?",
    options: ["Assess and classify", "Treat and counsel", "Follow up", "Surgical referral for all sick children"], answer: 3 },

  // Q59
  { text: "The most reliable site for measuring core temperature in a small infant is:",
    options: ["Axilla", "Oral", "Rectum", "Skin (forehead)"], answer: 2 },

  // Q60
  { text: "A sterile field is contaminated when:",
    options: ["It is kept dry throughout", "The outer border (1 inch) is treated as clean", "It falls below waist level", "It is opened immediately before use"],
    answer: 2 },


  /* ── SECTION D — Community Health / Mental Health  (Q61–Q80, indices 60–79) ── */

  // Q61
  { text: "The PRIMARY level of health care is provided at:",
    options: ["District hospital", "Medical college hospital", "Community health centre (CHC)", "Sub-centre / primary health centre (PHC)"],
    answer: 3 },

  // Q62
  { text: "Which of the following is a notifiable disease in India?",
    options: ["Common cold", "Chickenpox", "Cholera", "Hypertension"], answer: 2 },

  // Q63
  { text: "The cold chain in immunisation is maintained between:",
    options: ["+2°C to +8°C", "−10°C to −20°C", "0°C to +4°C", "+15°C to +25°C"], answer: 0 },

  // Q64
  { text: "DOTS (Directly Observed Treatment, Short-course) is used for treatment of:",
    options: ["Malaria", "Tuberculosis", "HIV/AIDS", "Leprosy"], answer: 1 },

  // Q65
  { text: "Epidemiology is the study of:",
    options: ["Body organ structure", "Distribution and determinants of disease in populations", "Drug effects on the body", "Individual patient physiology"],
    answer: 1 },

  // Q66
  { text: "The defence mechanism in which unacceptable feelings are attributed to others is:",
    options: ["Repression", "Regression", "Projection", "Rationalisation"], answer: 2 },

  // Q67
  { text: "The HIGHEST risk factor associated with completed suicide is:",
    options: ["Unemployment", "Previous suicide attempt", "Living alone", "Mild depressive episode"], answer: 1 },

  // Q68
  { text: "Electroconvulsive Therapy (ECT) is indicated in:",
    options: ["Schizophrenia without depression", "Severe treatment-resistant depression", "Generalised anxiety disorder", "Personality disorder"],
    answer: 1 },

  // Q69
  { text: "A common extrapyramidal side effect of long-term antipsychotic medication is:",
    options: ["Hypotension", "Tardive dyskinesia", "Weight loss", "Insomnia"], answer: 1 },

  // Q70
  { text: "A patient on a psychiatric ward becomes agitated and attempts to elope. The nurse's FIRST action is:",
    options: ["Restrain the patient immediately", "Call security first", "Use therapeutic communication to de-escalate", "Administer a sedative without discussion"],
    answer: 2 },

  // Q71
  { text: "Mental Status Examination (MSE) includes assessment of:",
    options: ["Renal function only", "Appearance, behaviour, speech, mood, thought, cognition and insight", "Neurological reflexes only", "Blood pressure and pulse"],
    answer: 1 },

  // Q72
  { text: "Which of the following is a POSITIVE symptom of schizophrenia?",
    options: ["Flat affect", "Alogia (poverty of speech)", "Hallucinations", "Avolition"], answer: 2 },

  // Q73
  { text: "Which of the following is an example of PRIMARY prevention?",
    options: ["Chemotherapy for cancer", "Rehabilitation after stroke", "Immunisation against hepatitis B", "Dialysis for renal failure"],
    answer: 2 },

  // Q74
  { text: "Herd immunity is achieved when:",
    options: ["All members of a community are vaccinated", "A sufficient proportion of the population is immune, reducing disease transmission", "Only children are vaccinated", "Natural immunity develops after an epidemic"],
    answer: 1 },

  // Q75
  { text: "The school health programme objective includes:",
    options: ["Treating only communicable diseases", "Health promotion, screening and early intervention in school-age children", "Providing tertiary care in schools", "Replacing primary health centres"],
    answer: 1 },

  // Q76
  { text: "The structure of the eye that regulates the amount of light entering is:",
    options: ["Pupil", "Lens", "Retina", "Sclera"], answer: 0 },

  // Q77
  { text: "Taste buds are mainly present on the:",
    options: ["Tongue", "Pharynx", "Larynx", "Nasal septum"], answer: 0 },

  // Q78
  { text: "The receptor cells for smell are located in the:",
    options: ["Olfactory epithelium", "Eustachian tube", "Ciliary body", "Semicircular canal"], answer: 0 },

  // Q79
  { text: "National Health Mission (NHM) was launched in India in:",
    options: ["2000", "2005", "2013", "2017"], answer: 2 },

  // Q80
  { text: "MCH (Maternal and Child Health) services are primarily delivered at:",
    options: ["National referral hospital", "Sub-centre and PHC level", "District hospital level only", "Private hospital level"],
    answer: 1 },


  /* ── SECTION E — GK & Aptitude  (Q81–Q100, indices 80–99) ── */

  // Q81
  { text: "Photoreceptors of the retina include:",
    options: ["Rods and cones", "Ossicles", "Papillae", "Maculae"], answer: 0 },

  // Q82
  { text: "The white outer protective coat of the eyeball is:",
    options: ["Retina", "Sclera", "Lens", "Conjunctiva"], answer: 1 },

  // Q83
  { text: "The part of the inner ear responsible for equilibrium and balance is:",
    options: ["Cochlea", "Vestibular apparatus (semicircular canals)", "Tympanic membrane", "Malleus"],
    answer: 1 },

  // Q84
  { text: "AIIMS (All India Institute of Medical Sciences), New Delhi was established in:",
    options: ["1947", "1952", "1956", "1960"], answer: 2 },

  // Q85
  { text: "World Health Day is observed on:",
    options: ["1 January", "7 April", "14 November", "12 August"], answer: 1 },

  // Q86
  { text: "Florence Nightingale was born in the year:",
    options: ["1800", "1820", "1835", "1850"], answer: 1 },

  // Q87
  { text: "ICMR stands for:",
    options: ["Indian Council of Medical Research", "International Council of Medical Records", "Indian Commission of Medical Registration", "Integrated Council of Medical Reform"],
    answer: 0 },

  // Q88
  { text: "National Nurses Day in India is celebrated on:",
    options: ["12 May", "12 August", "6 April", "7 April"], answer: 0 },

  // Q89
  { text: "If a nurse works 8 hours/day for 5 days/week, total hours worked in 4 weeks is:",
    options: ["120 hours", "160 hours", "140 hours", "180 hours"], answer: 1 },

  // Q90
  { text: "A ward has 30 patients. If 40% need wound dressing, how many patients need it?",
    options: ["10", "12", "15", "18"], answer: 1 },

  // Q91
  { text: "A doctor prescribes 500 mg of a drug. Available tablets are 250 mg each. How many tablets should the nurse administer?",
    options: ["1", "1.5", "2", "3"], answer: 2 },

  // Q92
  { text: "IV fluid runs at 60 drops/min with a drop factor of 20 drops/mL. Volume infused in 1 hour is:",
    options: ["100 mL", "120 mL", "180 mL", "200 mL"], answer: 2 },

  // Q93
  { text: "The cost of one pair of gloves is ₹25. If a ward orders 8 pairs daily, the monthly cost (30 days) is:",
    options: ["₹4,000", "₹5,000", "₹6,000", "₹6,500"], answer: 2 },

  // Q94
  { text: "Which Article of the Indian Constitution guarantees the Right to Equality?",
    options: ["Article 14", "Article 19", "Article 21", "Article 32"], answer: 0 },

  // Q95
  { text: "Rajya Sabha (Council of States) can have a maximum of how many members?",
    options: ["250", "245", "238", "300"], answer: 0 },

  // Q96
  { text: "Which organisation publishes the International Classification of Diseases (ICD)?",
    options: ["UNICEF", "WHO (World Health Organisation)", "AIIMS", "Indian Nursing Council"], answer: 1 },

  // Q97
  { text: "The Indian Nursing Council Act was enacted in:",
    options: ["1934", "1947", "1952", "1960"], answer: 1 },

  // Q98
  { text: "A patient's temperature is 104°F. In Celsius, this equals:",
    options: ["38°C", "39°C", "40°C", "41°C"], answer: 2 },

  // Q99
  { text: "The sensitive pigmented vascular layer of the eye situated between the retina and sclera is:",
    options: ["Cornea", "Retina", "Choroid", "Iris"], answer: 2 },

  // Q100
  { text: "Which of the following best describes the role of the nurse in a multidisciplinary team?",
    options: ["Following only physician orders", "Coordinating patient care, advocating for the patient and collaborating with all team members", "Performing only technical procedures", "Documenting only"],
    answer: 1 },
];

/* ════════════════════════════════
   SECTIONS  (5 × 20 questions, 18 min each)
   ════════════════════════════════ */
const SECTION_DURATION = 18 * 60; // 18 minutes in seconds

const sections = [
  { name: "Section A", fullName: "Section A — Nursing Foundations",               ids: Array.from({ length: 20 }, (_, i) => i) },
  { name: "Section B", fullName: "Section B — Medical Surgical Nursing",           ids: Array.from({ length: 20 }, (_, i) => i + 20) },
  { name: "Section C", fullName: "Section C — Child Health Nursing",               ids: Array.from({ length: 20 }, (_, i) => i + 40) },
  { name: "Section D", fullName: "Section D — Community Health / Mental Health",   ids: Array.from({ length: 20 }, (_, i) => i + 60) },
  { name: "Section E", fullName: "Section E — GK & Aptitude",                     ids: Array.from({ length: 20 }, (_, i) => i + 80) },
];

/* ════════════════════════════════
   STATE
   ════════════════════════════════ */
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
  paletteOpen:    true,
};

/* ════════════════════════════════
   DOM REFS
   ════════════════════════════════ */
const el = id => document.getElementById(id);

const refs = {
  landingScreen:        el("landingScreen"),
  instructionsScreen:   el("instructionsScreen"),
  examScreen:           el("examScreen"),
  startTestBtn:         el("startTestBtn"),
  backToLanding:        el("backToLanding"),
  agreeCheck:           el("agreeCheck"),
  beginBtn:             el("beginBtn"),
  timerDisplay:         el("timerDisplay"),
  sectionTabs:          el("sectionTabs"),
  questionNo:           el("questionNo"),
  questionText:         el("questionText"),
  questionImageWrap:    el("questionImageWrap"),
  optionList:           el("optionList"),
  palette:              el("palette"),
  paletteSectionTitle:  el("paletteSectionTitle"),
  answeredCount:        el("answeredCount"),
  notAnsweredCount:     el("notAnsweredCount"),
  notVisitedCount:      el("notVisitedCount"),
  markedCount:          el("markedCount"),
  markedAnsweredCount:  el("markedAnsweredCount"),
  markNextBtn:          el("markNextBtn"),
  clearBtn:             el("clearBtn"),
  prevBtn:              el("prevBtn"),
  saveNextBtn:          el("saveNextBtn"),
  submitBtn:            el("submitBtn"),
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
};

/* ════════════════════════════════
   SCREEN NAVIGATION
   ════════════════════════════════ */
function showScreen(name) {
  refs.landingScreen.classList.toggle("hidden",       name !== "landing");
  refs.instructionsScreen.classList.toggle("hidden",  name !== "instructions");
  refs.examScreen.classList.toggle("hidden",          name !== "exam");
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
  refs.timerDisplay.style.fontWeight = secs <= 60 ? "900" : "700";
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
  showToast(`⏱ Time up for ${sections[si].name}! Moving to next section…`);
  const nextSi = si + 1;
  if (nextSi < sections.length) {
    goTo(sections[nextSi].ids[0], true);
  } else {
    setTimeout(() => autoSubmit(), 2000);
  }
}

function showToast(msg) {
  const div = document.createElement("div");
  div.className = "section-toast";
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => { div.classList.add("fade-out"); setTimeout(() => div.remove(), 600); }, 2800);
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
   NAVIGATION  (locked to current section)
   ════════════════════════════════ */
function goTo(index, force = false) {
  const next = Math.max(0, Math.min(questions.length - 1, index));
  const targetSection = sections.findIndex(s => s.ids.includes(next));

  // Block cross-section jumps unless forced by the timer
  if (!force && targetSection !== state.currentSection) return;

  if (!state.saved[state.currentQ] && !state.marked[state.currentQ]) {
    state.visited[state.currentQ] = true;
  }
  state.currentQ = next;
  state.currentSection = targetSection;
  renderAll();
}

/* ════════════════════════════════
   SECTION TABS
   ════════════════════════════════ */
function renderSectionTabs() {
  refs.sectionTabs.innerHTML = "";
  sections.forEach((sec, si) => {
    const isActive  = si === state.currentSection;
    const isPast    = si < state.currentSection;
    const isFuture  = si > state.currentSection;
    const isExpired = state.expired[si];

    const btn = document.createElement("button");
    btn.className = [
      "section-tab",
      isActive  ? "active"     : "",
      isPast    ? "sec-past"   : "",
      isFuture  ? "sec-future" : "",
      isExpired ? "sec-expired": "",
    ].filter(Boolean).join(" ");
    btn.disabled = true;
    btn.title = isActive
      ? "Current section — attempt all questions"
      : isPast
        ? "Expired — this section is permanently closed"
        : "Locked — complete the current section first";

    const nameSpan = document.createElement("span");
    nameSpan.className = "tab-name";
    nameSpan.textContent = isPast ? `✓ ${sec.name}` : isFuture ? `🔒 ${sec.name}` : sec.name;

    const timeSpan = document.createElement("span");
    timeSpan.className = `tab-time${isPast || isExpired ? " expired" : ""}`;
    timeSpan.textContent = isPast ? "Closed" : isExpired ? "00:00" : formatSectionTime(state.sectionTimers[si]);

    btn.append(nameSpan, timeSpan);
    refs.sectionTabs.appendChild(btn);
  });
}

/* ════════════════════════════════
   QUESTION RENDER (with image support)
   ════════════════════════════════ */
function renderQuestion() {
  const q = questions[state.currentQ];
  refs.questionNo.textContent = String(state.currentQ + 1);
  refs.questionText.textContent = q.text;
  refs.optionList.innerHTML = "";

  // Remove stale image note if present
  const staleNote = refs.questionImageWrap.nextSibling;
  if (staleNote && staleNote.classList && staleNote.classList.contains("q-image-note")) {
    staleNote.remove();
  }

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

    // Mouse-drag scrolling for large images
    if (q.imageLarge) {
      let dragging = false, sx = 0, sy = 0, sl = 0, st = 0;
      wrap.addEventListener("mousedown", e => {
        dragging = true; sx = e.pageX; sy = e.pageY; sl = wrap.scrollLeft; st = wrap.scrollTop;
        wrap.style.cursor = "grabbing";
      });
      const stopDrag = () => { dragging = false; wrap.style.cursor = "grab"; };
      wrap.addEventListener("mouseleave", stopDrag);
      wrap.addEventListener("mouseup", stopDrag);
      wrap.addEventListener("mousemove", e => {
        if (!dragging) return;
        e.preventDefault();
        wrap.scrollLeft = sl - (e.pageX - sx);
        wrap.scrollTop  = st - (e.pageY - sy);
      });
      let tsx = 0, tsy = 0, tsl = 0, tst = 0;
      wrap.addEventListener("touchstart", e => {
        tsx = e.touches[0].pageX; tsy = e.touches[0].pageY;
        tsl = wrap.scrollLeft; tst = wrap.scrollTop;
      }, { passive: true });
      wrap.addEventListener("touchmove", e => {
        wrap.scrollLeft = tsl - (e.touches[0].pageX - tsx);
        wrap.scrollTop  = tst - (e.touches[0].pageY - tsy);
      }, { passive: true });
    }

    if (q.imageLarge) {
      const note = document.createElement("p");
      note.className = "q-image-note";
      note.textContent = "Drag or scroll inside the image to view all areas.";
      wrap.after(note);
    }
  } else {
    wrap.className = "q-image-wrap hidden";
    wrap.innerHTML = "";
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
   PALETTE
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
   STATUS COUNTS
   ════════════════════════════════ */
function renderCounts() {
  let answered = 0, notAnswered = 0, notVisited = 0, marked = 0, markedAnswered = 0;
  questions.forEach((_, i) => {
    const s = qStatus(i);
    if (s === "answered")            answered++;
    else if (s === "not-answered")   notAnswered++;
    else if (s === "not-visited")    notVisited++;
    else if (s === "marked")         marked++;
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
  if (state.answers[state.currentQ] !== null) state.saved[state.currentQ] = true;
  state.marked[state.currentQ] = markForReview;

  const sec = sections[state.currentSection];
  const pos = sec.ids.indexOf(state.currentQ);
  if (pos < sec.ids.length - 1) {
    goTo(sec.ids[pos + 1]);
  } else {
    renderAll();
    showToast("Last question in this section. Wait for the timer to advance to the next section.");
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
   PALETTE COLLAPSE TOGGLE
   ════════════════════════════════ */
function togglePalette() {
  state.paletteOpen = !state.paletteOpen;
  refs.norcetPalette.classList.toggle("palette-collapsed", !state.paletteOpen);
  refs.paletteArrow.innerHTML = state.paletteOpen ? "&#9664;" : "&#9654;";
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
    const isExpired = state.expired[si];
    const isCurrent = si === state.currentSection;
    const isFuture  = si > state.currentSection;

    const secDiv = document.createElement("div");
    secDiv.className = "qp-section";

    // Section title row
    const titleDiv = document.createElement("div");
    titleDiv.className = "qp-section-title";

    if (isExpired) {
      titleDiv.innerHTML = `${sec.fullName}&nbsp;<span class="qp-expired-badge">⛔ Expired</span>`;
      secDiv.appendChild(titleDiv);

      const msg = document.createElement("p");
      msg.className = "qp-access-msg";
      msg.textContent = "This section has permanently closed. Questions are no longer accessible per exam rules.";
      secDiv.appendChild(msg);

    } else if (isFuture) {
      titleDiv.innerHTML = `${sec.fullName}&nbsp;<span class="qp-locked-badge">🔒 Locked</span>`;
      secDiv.appendChild(titleDiv);

      const msg = document.createElement("p");
      msg.className = "qp-access-msg";
      msg.textContent = `Unlocks after ${sec.name === sections[si - 1]?.name ? "the current" : "previous"} section's timer expires.`;
      secDiv.appendChild(msg);

    } else {
      // Current section — show all questions
      const timeSpan = document.createElement("span");
      timeSpan.className = "qp-section-timer";
      timeSpan.textContent = formatSectionTime(state.sectionTimers[si]);
      titleDiv.textContent = sec.fullName + "  ";
      titleDiv.appendChild(timeSpan);
      secDiv.appendChild(titleDiv);

      sec.ids.forEach(qi => {
        const row = document.createElement("div");
        const status = qStatus(qi);
        row.className = `qp-q-row${qi === state.currentQ ? " qp-current" : ""}`;

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
        row.addEventListener("click", () => { closeQP(); goTo(qi); });
        secDiv.appendChild(row);
      });
    }

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
      if (s === "answered")            ans++;
      else if (s === "not-answered")   notAns++;
      else if (s === "marked")         mark++;
      else if (s === "marked-answered") markAns++;
      else                             notVis++;
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
  refs.startTestBtn.addEventListener("click", () => { requestFullScreen(); showScreen("instructions"); });
  refs.backToLanding.addEventListener("click", () => showScreen("landing"));

  refs.agreeCheck.addEventListener("change", () => {
    refs.beginBtn.disabled = !refs.agreeCheck.checked;
  });

  refs.beginBtn.addEventListener("click", () => {
    requestFullScreen();
    showScreen("exam");
    goTo(0);
    startTimer();
  });

  refs.saveNextBtn.addEventListener("click", () => saveCurrent(false));
  refs.markNextBtn.addEventListener("click", () => saveCurrent(true));
  refs.clearBtn.addEventListener("click", clearCurrent);

  refs.prevBtn.addEventListener("click", () => {
    const sec = sections[state.currentSection];
    const pos = sec.ids.indexOf(state.currentQ);
    if (pos > 0) goTo(sec.ids[pos - 1]);
  });

  refs.submitBtn.addEventListener("click", showSubmitModal);
  refs.cancelSubmit.addEventListener("click", () => refs.submitModal.classList.add("hidden"));
  refs.confirmSubmit.addEventListener("click", confirmSubmit);
  refs.closeResult.addEventListener("click", () => refs.resultModal.classList.add("hidden"));

  refs.qpToggleBtn.addEventListener("click", () => state.qpOpen ? closeQP() : openQP());
  refs.closeQP.addEventListener("click", closeQP);
  refs.qpOverlay.addEventListener("click", e => { if (e.target === refs.qpOverlay) closeQP(); });

  refs.paletteCollapseBtn.addEventListener("click", togglePalette);

  document.addEventListener("keydown", e => {
    const tag = document.activeElement.tagName;
    if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;
    if (refs.examScreen.classList.contains("hidden")) return;

    if (e.key === "ArrowRight" || e.key === "q" || e.key === "Q") {
      state.qpOpen ? closeQP() : openQP();
    }
    if ((e.key === "Escape" || e.key === "ArrowLeft") && state.qpOpen) closeQP();
    if (e.key === "p" || e.key === "P") togglePalette();
  });

  window.addEventListener("beforeunload", e => {
    if (!state.submitted && !refs.examScreen.classList.contains("hidden")) {
      e.preventDefault(); e.returnValue = "";
    }
  });
}

/* ════════════════════════════════
   INIT
   ════════════════════════════════ */
bindEvents();
showScreen("landing");
