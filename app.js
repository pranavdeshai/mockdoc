/**
 * NEET-PG Exam Simulator (CBT Mode)
 * Core Application Engine & State Controller
 */

// Embedded default test dataset (20 Questions, 5 Sections, 20 Minutes)
const DEFAULT_TEST_DATA = {
  examTitle: "NEET-PG CBT Mock Exam",
  markingScheme: { correct: 4, incorrect: -1, unattempted: 0 },
  sections: [
    {
      id: "sec_a",
      name: "Section A",
      durationMinutes: 20,
      questions: [
        {
          id: "q_1",
          subject: ["Anatomy", "Orthopedics"],
          system: ["Upper Limb", "Nervous System", "Musculoskeletal System"],
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A 28-year-old motorcyclist sustains a mid-shaft fracture of the humerus. On clinical examination, he is unable to extend his wrist and digits at the metacarpophalangeal joints, with loss of sensation over the first dorsal web space. Which nerve and corresponding artery are most vulnerable to injury at this anatomical location?",
          options: [
            "Radial nerve and profunda brachii artery",
            "Median nerve and brachial artery",
            "Ulnar nerve and superior ulnar collateral artery",
            "Axillary nerve and posterior circumflex humeral artery"
          ],
          correctAnswerIndex: 0,
          explanation: "The radial nerve and profunda brachii artery course together along the spiral (radial) groove on the posterior surface of the mid-shaft of the humerus. Injury causes radial nerve palsy presenting as wrist drop and first dorsal web space sensory loss."
        },
        {
          id: "q_2",
          subject: "Physiology",
          system: "Cardiovascular System",
          format: "One-Liner",
          difficulty: "Easy",
          text: "In a normal cardiac cycle, which phase immediately follows the closure of the atrioventricular (mitral and tricuspid) valves and precedes the opening of the aortic and pulmonary semilunar valves?",
          options: [
            "Isovolumetric contraction phase",
            "Rapid ventricular ejection phase",
            "Isovolumetric relaxation phase",
            "Reduced ventricular filling phase"
          ],
          correctAnswerIndex: 0,
          explanation: "Isovolumetric contraction begins with AV valve closure (producing the S1 heart sound). During this brief phase, all four valves are closed and intraventricular pressure rises steeply until it exceeds aortic/pulmonary diastolic pressure."
        },
        {
          id: "q_3",
          subject: ["Anatomy", "Surgery", "ENT"],
          system: ["Head & Neck", "Endocrine System"],
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "During an elective subtotal thyroidectomy, the surgeon must carefully identify and preserve the external branch of the superior laryngeal nerve. Which muscle is exclusively innervated by this nerve?",
          options: [
            "Cricothyroid muscle",
            "Posterior cricoarytenoid muscle",
            "Lateral cricoarytenoid muscle",
            "Thyroarytenoid muscle"
          ],
          correctAnswerIndex: 0,
          explanation: "The external branch of the superior laryngeal nerve innervates only the cricothyroid muscle (the chief tensor of the vocal folds). All other intrinsic laryngeal muscles are innervated by the recurrent laryngeal nerve."
        },
        {
          id: "q_4",
          subject: "Physiology",
          system: ["Renal System", "Cardiovascular System"],
          format: "One-Liner",
          difficulty: "Medium",
          text: "The macula densa cells of the juxtaglomerular apparatus respond to changes in tubular fluid composition by sensing which of the following parameters?",
          options: [
            "Sodium and chloride concentration in the early distal convoluted tubule",
            "Potassium concentration in the proximal convoluted tubule",
            "Hydrostatic pressure inside Bowman capsule",
            "Osmolality of the medullary collecting duct"
          ],
          correctAnswerIndex: 0,
          explanation: "Macula densa cells located in the wall of the early distal tubule sense luminal NaCl concentration via the NKCC2 cotransporter, modulating renin release by adjacent juxtaglomerular cells through tubuloglomerular feedback."
        }
      ]
    },
    {
      id: "sec_b",
      name: "Section B",
      durationMinutes: 20,
      questions: [
        {
          id: "q_5",
          subject: ["Biochemistry", "Pediatrics"],
          system: ["Metabolic Pathway", "Gastrointestinal System"],
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A 5-month-old infant presents with severe fasting hypoglycemia, lactic acidosis, hyperuricemia, and massive hepatomegaly with doll-like facies. Liver biopsy demonstrates marked intracellular glycogen accumulation with normal glycogen structure. Which enzyme deficiency is responsible?",
          options: [
            "Glucose-6-phosphatase",
            "Liver glycogen phosphorylase",
            "Lysosomal alpha-1,4-glucosidase",
            "Amylo-1,6-glucosidase (debranching enzyme)"
          ],
          correctAnswerIndex: 0,
          explanation: "Von Gierke disease (Glycogen Storage Disease Type Ia) is caused by Glucose-6-phosphatase deficiency. It leads to severe fasting hypoglycemia, hepatomegaly, lactic acidosis, and hyperuricemia."
        },
        {
          id: "q_6",
          subject: ["Pathology", "Medicine"],
          system: ["Hematology & Oncology"],
          format: "One-Liner",
          difficulty: "Easy",
          text: "The reciprocal chromosomal translocation t(9;22)(q34;q11), which forms the BCR-ABL1 chimeric fusion oncogene with constitutive tyrosine kinase activity, is the pathognomonic diagnostic hallmark of:",
          options: [
            "Chronic Myeloid Leukemia (CML)",
            "Burkitt Lymphoma",
            "Acute Promyelocytic Leukemia (APML)",
            "Follicular Lymphoma"
          ],
          correctAnswerIndex: 0,
          explanation: "The Philadelphia chromosome t(9;22)(q34;q11) creates the BCR-ABL1 fusion gene, diagnostic of Chronic Myeloid Leukemia (CML) and responsive to tyrosine kinase inhibitors like Imatinib."
        },
        {
          id: "q_7",
          subject: ["Biochemistry", "Dermatology"],
          system: ["Molecular Genetics", "Integumentary System"],
          format: "One-Liner",
          difficulty: "Medium",
          text: "A 4-year-old child presents with extreme photosensitivity, dry skin, multiple freckles on sun-exposed areas, and early development of basal cell carcinomas. This autosomal recessive disorder involves a defect in which DNA repair mechanism?",
          options: [
            "Nucleotide excision repair",
            "Base excision repair",
            "Mismatch repair",
            "Non-homologous end joining"
          ],
          correctAnswerIndex: 0,
          explanation: "Xeroderma Pigmentosum is caused by inherited defects in nucleotide excision repair (NER), preventing excision of ultraviolet radiation-induced pyrimidine (thymine) dimers."
        },
        {
          id: "q_8",
          subject: ["Pathology", "Medicine", "Rheumatology"],
          system: ["Renal System", "Immune System"],
          format: "Clinical Vignette",
          difficulty: "Hard",
          text: "A 42-year-old woman with systemic lupus erythematosus presents with worsening proteinuria (3.5 g/24h) and hematuria. Renal biopsy shows diffuse global endocapillary proliferation, wire-loop subendothelial immune deposits, and a 'full-house' immunofluorescence pattern. What is the ISN/RPS classification?",
          options: [
            "Class IV Diffuse Lupus Nephritis",
            "Class II Mesangial Proliferative Lupus Nephritis",
            "Class III Focal Lupus Nephritis",
            "Class V Membranous Lupus Nephritis"
          ],
          correctAnswerIndex: 0,
          explanation: "Class IV Diffuse Lupus Nephritis is characterized by involvement of >=50% of glomeruli, prominent wire-loop subendothelial deposits, and extensive IgG, IgA, IgM, C3, and C1q deposition (full-house)."
        }
      ]
    },
    {
      id: "sec_c",
      name: "Section C",
      durationMinutes: 20,
      questions: [
        {
          id: "q_9",
          subject: ["Pharmacology", "Medicine"],
          system: "Cardiovascular System",
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A 58-year-old male with NYHA Class III heart failure with reduced ejection fraction (EF 28%) is switched from Enalapril to Sacubitril/Valsartan. To minimize the risk of life-threatening angioedema, what is the mandatory minimum washout period required before initiating the ARNI?",
          options: [
            "36 hours",
            "12 hours",
            "24 hours",
            "72 hours"
          ],
          correctAnswerIndex: 0,
          explanation: "A strict 36-hour washout period is required when transitioning from an ACE inhibitor to Sacubitril/Valsartan to avoid dual inhibition of bradykinin degradation, which drastically increases angioedema risk."
        },
        {
          id: "q_10",
          subject: ["Microbiology", "Pathology"],
          system: "Infectious Diseases",
          format: "One-Liner",
          difficulty: "Easy",
          text: "Which of the following bacterial exotoxins acts by ADP-ribosylating host Elongation Factor-2 (EF-2), thereby terminating protein translation in eukaryotic cells?",
          options: [
            "Diphtheria toxin",
            "Cholera toxin",
            "Tetanospasmin",
            "Clostridium perfringens Alpha toxin"
          ],
          correctAnswerIndex: 0,
          explanation: "Diphtheria toxin produced by Corynebacterium diphtheriae (and Exotoxin A by Pseudomonas) inactivates EF-2 via ADP-ribosylation, arresting ribosomal peptide synthesis."
        },
        {
          id: "q_11",
          subject: ["Pharmacology", "Psychiatry"],
          system: ["Central Nervous System", "Cardiovascular System"],
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A 32-year-old woman with a history of depression treated with Phenelzine attends a party where she consumes aged red wine and mature cheese. Two hours later, she arrives at the ER with severe throbbing headache, diaphoresis, and a blood pressure of 210/120 mmHg. What is the drug of choice for immediate management of this hypertensive crisis?",
          options: [
            "Phentolamine",
            "Propranolol",
            "Methyldopa",
            "Atropine"
          ],
          correctAnswerIndex: 0,
          explanation: "Tyramine reaction ('cheese reaction') in patients taking non-selective MAO inhibitors causes massive norepinephrine release. The treatment of choice is the reversible, non-selective alpha-adrenergic antagonist Phentolamine."
        },
        {
          id: "q_12",
          subject: "Microbiology",
          system: ["Virology", "Gastrointestinal System"],
          format: "One-Liner",
          difficulty: "Medium",
          text: "Which of the following hepatitis viruses is a single-stranded circular RNA virus that is replication-defective and requires the surface antigen coat of Hepatitis B virus (HBsAg) to assemble infectious virions?",
          options: [
            "Hepatitis D virus (HDV)",
            "Hepatitis C virus (HCV)",
            "Hepatitis E virus (HEV)",
            "Hepatitis A virus (HAV)"
          ],
          correctAnswerIndex: 0,
          explanation: "Hepatitis D (Delta) virus is a defective RNA viroid-like pathogen that depends entirely on HBV to provide HBsAg for packaging its envelope and establishing infection."
        }
      ]
    },
    {
      id: "sec_d",
      name: "Section D",
      durationMinutes: 20,
      questions: [
        {
          id: "q_13",
          subject: "Forensic Medicine",
          system: "Medical Jurisprudence",
          format: "One-Liner",
          difficulty: "Medium",
          text: "Post-mortem lividity (hypostasis or livor mortis) that displays a distinctive bright cherry-red coloration throughout dependent tissues is most characteristic of fatal poisoning by:",
          options: [
            "Carbon monoxide",
            "Hydrogen sulfide",
            "Potassium cyanide",
            "Phosphorus"
          ],
          correctAnswerIndex: 0,
          explanation: "Cherry-red hypostasis is characteristic of carbon monoxide poisoning due to the formation of carboxyhemoglobin. Cyanide causes a brick-pink/bright red discoloration, whereas hydrogen sulfide causes dark bluish-green lividity."
        },
        {
          id: "q_14",
          subject: "PSM / Community Medicine",
          system: "Epidemiology & Biostatistics",
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A newly developed rapid diagnostic serological test for Dengue fever is evaluated against RT-PCR. If the prevalence of Dengue infection decreases in a population while the intrinsic sensitivity and specificity of the test remain constant, what will happen to the Positive Predictive Value (PPV)?",
          options: [
            "PPV will decrease",
            "PPV will increase",
            "PPV will remain completely unchanged",
            "PPV will become 100%"
          ],
          correctAnswerIndex: 0,
          explanation: "Positive Predictive Value (PPV) is directly proportional to disease prevalence. When prevalence decreases in the screened population, the proportion of true positives among all test positives falls, decreasing PPV."
        },
        {
          id: "q_15",
          subject: "Forensic Medicine",
          system: "Traumatology",
          format: "One-Liner",
          difficulty: "Easy",
          text: "The thermal coagulation and heat-induced stiffening of muscles that occurs in bodies exposed to high temperatures, causing characteristic flexion of limbs into a 'boxer's attitude', is termed:",
          options: [
            "Pugilistic attitude (Pugilistic stance)",
            "Cadaveric spasm",
            "Rigor mortis",
            "Heat hyperpyrexia"
          ],
          correctAnswerIndex: 0,
          explanation: "Pugilistic attitude results from heat coagulation and contracture of muscle proteins (flexors being stronger than extensors), giving the body a defensive boxing posture after burns."
        },
        {
          id: "q_16",
          subject: "PSM / Community Medicine",
          system: ["Health Programs & Vaccines", "Pediatrics"],
          format: "One-Liner",
          difficulty: "Easy",
          text: "Under the Universal Immunization Programme (UIP) in India, which of the following vaccines is strictly administered as an intradermal injection at birth over the left upper arm?",
          options: [
            "BCG vaccine",
            "Hepatitis B birth dose",
            "Oral Polio Vaccine (bOPV)",
            "Pentavalent vaccine"
          ],
          correctAnswerIndex: 0,
          explanation: "BCG vaccine is given intradermally at birth (0.05 mL before 1 month, 0.1 mL after) over the left deltoid insertion to ensure uniform scar monitoring."
        }
      ]
    },
    {
      id: "sec_e",
      name: "Section E",
      durationMinutes: 20,
      questions: [
        {
          id: "q_17",
          subject: ["Medicine", "Pulmonology"],
          system: "Respiratory System",
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A 64-year-old man with a 45 pack-year smoking history presents with progressive dyspnea and cough. Spirometry demonstrates post-bronchodilator FEV1/FVC of 0.54 and FEV1 44% predicted. He had two severe hospital admissions for acute exacerbations in the past 10 months. Blood eosinophil count is 380 cells/uL. According to updated GOLD guidelines, which initial maintenance regimen is indicated?",
          options: [
            "Triple Inhaler Therapy (LABA + LAMA + Inhaled Corticosteroid)",
            "Dual Bronchodilation alone (LABA + LAMA)",
            "LAMA monotherapy",
            "SABA as needed plus oral Theophylline"
          ],
          correctAnswerIndex: 0,
          explanation: "Under GOLD Group E (frequent exacerbators), initial Triple Therapy (LABA+LAMA+ICS) is recommended if blood eosinophils are >=300 cells/uL to significantly reduce exacerbations and hospitalization."
        },
        {
          id: "q_18",
          subject: ["Surgery", "Gastroenterology"],
          system: ["Gastrointestinal System", "Hepatobiliary System"],
          format: "Clinical Vignette",
          difficulty: "Medium",
          text: "A 46-year-old female presents with acute severe epigastric pain radiating directly to her back, nausea, and vomiting. Serum lipase is 1,450 U/L. Ultrasound reveals multiple gallstones in the gallbladder and a dilated common bile duct (10 mm) without active cholangitis. What is the cornerstone of early initial management?",
          options: [
            "Targeted intravenous fluid resuscitation with isotonic crystalloids and analgesia",
            "Emergency open cholecystectomy within 6 hours",
            "Routine prophylactic intravenous broad-spectrum carbapenems",
            "Immediate diagnostic percutaneous transhepatic cholangiography"
          ],
          correctAnswerIndex: 0,
          explanation: "Early, goal-directed intravenous hydration with isotonic crystalloids (e.g., Ringer's Lactate) along with multimodal analgesia is the foundation of early acute pancreatitis therapy. Urgent ERCP is reserved for concurrent cholangitis."
        },
        {
          id: "q_19",
          subject: ["Obstetrics & Gynecology", "Pharmacology"],
          system: ["Reproductive System", "Nervous System"],
          format: "Clinical Vignette",
          difficulty: "Hard",
          text: "A 26-year-old primigravida at 34 weeks of gestation presents with blood pressure 170/114 mmHg, severe frontal headache, and hyperreflexia. Intravenous Magnesium Sulfate loading and maintenance infusion are commenced for seizure prophylaxis. Which clinical sign is the earliest reliable indicator of impending hypermagnesemia toxicity?",
          options: [
            "Loss of deep tendon reflexes (patellar reflex)",
            "Respiratory rate dropping below 12 breaths/minute",
            "Complete heart block on electrocardiogram",
            "Oliguria (<20 mL/hour)"
          ],
          correctAnswerIndex: 0,
          explanation: "Loss of deep tendon (patellar) reflexes occurs at serum magnesium levels of 8-10 mg/dL and serves as the earliest warning sign of toxicity before respiratory depression (12 mg/dL) or cardiac arrest."
        },
        {
          id: "q_20",
          subject: ["Pediatrics", "Cardiology"],
          system: "Cardiovascular System",
          format: "One-Liner",
          difficulty: "Easy",
          text: "A 2-day-old cyanotic newborn is diagnosed with ductal-dependent congenital heart disease. Which continuous intravenous medication is required immediately to maintain patency of the ductus arteriosus prior to surgical repair?",
          options: [
            "Prostaglandin E1 (Alprostadil)",
            "Indomethacin",
            "Ibuprofen",
            "Furosemide"
          ],
          correctAnswerIndex: 0,
          explanation: "Prostaglandin E1 (Alprostadil) maintains patency of the ductus arteriosus in ductal-dependent lesions (e.g., Transposition of the Great Arteries, hypoplastic left heart syndrome). NSAIDs like Indomethacin close the ductus."
        }
      ]
    }
  ]
};

// --- Helper: Normalize String or Array values into a flat Array ---
function normalizeToArray(val) {
  if (!val) return [];
  if (Array.isArray(val)) return val.map(v => String(v).trim()).filter(Boolean);
  return [String(val).trim()].filter(Boolean);
}

// --- Global Application State ---
const AppState = {
  theme: localStorage.getItem('neet_theme') || 'dark',
  view: 'home',
  examData: null,
  activeSectionIndex: 0,
  activeQuestionIndex: 0,
  timerInterval: null,
  sectionTimesLeft: {},
  responses: {},
  sectionStatus: {},
  reviewFilters: {
    result: 'all',
    marked: 'all',
    section: 'all',
    subject: 'all',
    system: 'all',
    format: 'all',
    difficulty: 'all'
  },
  reviewActiveTab: 'tab-question-review',
  reviewActiveQuestionId: null
};

// --- DOM References Cache ---
const DOM = {
  html: document.documentElement,
  themeToggleBtn: document.getElementById('theme-toggle-btn'),
  dynamicNavActions: document.getElementById('dynamic-nav-actions'),
  viewHome: document.getElementById('view-home'),
  viewExam: document.getElementById('view-exam'),
  viewReview: document.getElementById('view-review'),

  // Home Elements
  dropZone: document.getElementById('drop-zone'),
  fileInput: document.getElementById('json-file-input'),
  browseBtn: document.getElementById('browse-btn'),
  jsonTextInput: document.getElementById('json-text-input'),
  validationAlert: document.getElementById('validation-alert'),
  validationMsg: document.getElementById('validation-msg'),
  fileNameDisplay: document.getElementById('file-name-display'),
  startExamBtn: document.getElementById('start-exam-btn'),
  loadSampleBtn: document.getElementById('load-sample-btn'),

  // Exam Elements
  sectionsBar: document.getElementById('sections-bar'),
  btnPaletteNavToggle: document.getElementById('btn-palette-nav-toggle'),
  examQNumber: document.getElementById('exam-q-number'),
  examQText: document.getElementById('exam-q-text'),
  examOptionsList: document.getElementById('exam-options-list'),
  btnPrevQ: document.getElementById('btn-prev-q'),
  btnSaveNext: document.getElementById('btn-save-next'),
  btnMarkReview: document.getElementById('btn-mark-review'),
  btnClearResponse: document.getElementById('btn-clear-response'),
  examPaletteGrid: document.getElementById('exam-palette-grid'),
  timerSecLabel: document.getElementById('timer-sec-label'),
  sectionClockDisplay: document.getElementById('section-clock-display'),
  btnSubmitSection: document.getElementById('btn-submit-section'),
  examProgressSidebar: document.getElementById('exam-progress-sidebar'),
  countAnswered: document.getElementById('count-answered'),
  countNotAnswered: document.getElementById('count-not-answered'),
  countNotVisited: document.getElementById('count-not-visited'),
  countMarked: document.getElementById('count-marked'),
  countAnsMarked: document.getElementById('count-ans-marked'),

  // Analytics Elements
  kpiTotalScore: document.getElementById('kpi-total-score'),
  kpiMaxScore: document.getElementById('kpi-max-score'),
  kpiCorrectCount: document.getElementById('kpi-correct-count'),
  kpiCorrectScore: document.getElementById('kpi-correct-score'),
  kpiIncorrectCount: document.getElementById('kpi-incorrect-count'),
  kpiIncorrectScore: document.getElementById('kpi-incorrect-score'),
  kpiUnattemptedCount: document.getElementById('kpi-unattempted-count'),
  kpiUnattemptedRate: document.getElementById('kpi-unattempted-rate'),
  kpiAccuracyPct: document.getElementById('kpi-accuracy-pct'),
  kpiAttemptRate: document.getElementById('kpi-attempt-rate'),
  analyticsTabsNav: document.getElementById('analytics-tabs-nav'),
  tabQuestionReview: document.getElementById('tab-question-review'),
  tabAnalyticsGeneric: document.getElementById('tab-analytics-generic'),
  genericTabTitle: document.getElementById('generic-tab-title'),
  genericTabDesc: document.getElementById('generic-tab-desc'),
  analyticsTable: document.getElementById('analytics-table'),
  analyticsChartContainer: document.getElementById('analytics-chart-container'),
  reviewQNum: document.getElementById('review-q-num'),
  reviewQStatusBadge: document.getElementById('review-q-status-badge'),
  reviewBookmarkIcon: document.getElementById('review-bookmark-icon'),
  btnCopyQuestion: document.getElementById('btn-copy-question'),
  btnReviewPrevQ: document.getElementById('btn-review-prev-q'),
  btnReviewNextQ: document.getElementById('btn-review-next-q'),
  reviewQText: document.getElementById('review-q-text'),
  reviewOptionsList: document.getElementById('review-options-list'),
  reviewExplanationText: document.getElementById('review-explanation-text'),
  reviewTagPills: document.getElementById('review-tag-pills'),
  btnResetFilters: document.getElementById('btn-reset-filters'),
  filterResult: document.getElementById('filter-result'),
  filterMarked: document.getElementById('filter-marked'),
  filterSection: document.getElementById('filter-section'),
  filterSubject: document.getElementById('filter-subject'),
  filterSystem: document.getElementById('filter-system'),
  filterFormat: document.getElementById('filter-format'),
  filterDifficulty: document.getElementById('filter-difficulty'),
  filteredCountDisplay: document.getElementById('filtered-count-display'),
  reviewMiniPalette: document.getElementById('review-mini-palette'),
  btnCopyAllFiltered: document.getElementById('btn-copy-all-filtered'),
  btnDownloadResults: document.getElementById('btn-download-results'),

  // Modal Dialog
  modalContainer: document.getElementById('modal-container'),
  modalTitle: document.getElementById('modal-title'),
  modalBody: document.getElementById('modal-body'),
  modalBtnCancel: document.getElementById('modal-btn-cancel'),
  modalBtnConfirm: document.getElementById('modal-btn-confirm')
};

// ==========================================================================
// 1. Initializer & Theme Management
// ==========================================================================
function initApp() {
  applyTheme(AppState.theme);
  DOM.themeToggleBtn.checked = AppState.theme === 'dark';

  attachEventListeners();
  checkPersistedSession();
}

function applyTheme(theme) {
  AppState.theme = theme;
  DOM.html.setAttribute('data-theme', theme);
  localStorage.setItem('neet_theme', theme);
}

function attachEventListeners() {
  // Theme Switcher
  DOM.themeToggleBtn.addEventListener('change', (e) => {
    applyTheme(e.target.checked ? 'dark' : 'light');
  });

  // Home Actions
  DOM.browseBtn.addEventListener('click', () => DOM.fileInput.click());
  DOM.fileInput.addEventListener('change', handleFileSelect);
  DOM.dropZone.addEventListener('dragover', (e) => { e.preventDefault(); DOM.dropZone.classList.add('dragover'); });
  DOM.dropZone.addEventListener('dragleave', () => DOM.dropZone.classList.remove('dragover'));
  DOM.dropZone.addEventListener('drop', handleFileDrop);
  DOM.jsonTextInput.addEventListener('input', () => validateJsonContent(DOM.jsonTextInput.value));
  DOM.loadSampleBtn.addEventListener('click', loadDefaultSample);
  DOM.startExamBtn.addEventListener('click', startExamSession);

  // Exam Actions
  DOM.btnSaveNext.addEventListener('click', handleSaveAndNext);
  DOM.btnMarkReview.addEventListener('click', handleMarkForReviewAndNext);
  DOM.btnClearResponse.addEventListener('click', handleClearResponse);
  DOM.btnPrevQ.addEventListener('click', handlePreviousQuestion);
  DOM.btnSubmitSection.addEventListener('click', () => confirmSubmitSection(false));

  // Mobile Palette Toggle Button (in Navbar)
  DOM.btnPaletteNavToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    DOM.examProgressSidebar.classList.toggle('drawer-open');
  });

  // Dismiss Palette when clicking anywhere outside it
  document.addEventListener('click', (e) => {
    if (DOM.examProgressSidebar.classList.contains('drawer-open')) {
      if (!DOM.examProgressSidebar.contains(e.target) && !DOM.btnPaletteNavToggle.contains(e.target)) {
        DOM.examProgressSidebar.classList.remove('drawer-open');
      }
    }
  });

  // Analytics Actions & Review Navigation Arrows
  DOM.btnReviewPrevQ.addEventListener('click', handleReviewPrevQuestion);
  DOM.btnReviewNextQ.addEventListener('click', handleReviewNextQuestion);
  DOM.analyticsTabsNav.addEventListener('click', handleAnalyticsTabClick);
  DOM.btnResetFilters.addEventListener('click', resetReviewFilters);
  DOM.filterResult.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterMarked.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterSection.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterSubject.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterSystem.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterFormat.addEventListener('change', applyFiltersFromDropdowns);
  DOM.filterDifficulty.addEventListener('change', applyFiltersFromDropdowns);
  DOM.btnCopyQuestion.addEventListener('click', copyActiveReviewQuestion);
  DOM.btnCopyAllFiltered.addEventListener('click', copyAllFilteredQuestions);
  DOM.btnDownloadResults.addEventListener('click', downloadTestResults);

  // Unload warning
  window.addEventListener('beforeunload', (e) => {
    if (AppState.view === 'exam') {
      e.preventDefault();
      e.returnValue = 'An examination is currently in progress. Your unsaved responses might be lost.';
    }
  });
}

// ==========================================================================
// 2. JSON Validation & Sample Loading
// ==========================================================================
function handleFileSelect(e) {
  const file = e.target.files[0];
  if (file) readFile(file);
}

function handleFileDrop(e) {
  e.preventDefault();
  DOM.dropZone.classList.remove('dragover');
  const file = e.dataTransfer.files[0];
  if (file && file.name.endsWith('.json')) readFile(file);
}

function readFile(file) {
  DOM.fileNameDisplay.textContent = file.name;
  const reader = new FileReader();
  reader.onload = (event) => {
    DOM.jsonTextInput.value = event.target.result;
    validateJsonContent(event.target.result);
  };
  reader.readAsText(file);
}

function validateJsonContent(rawText) {
  if (!rawText.trim()) {
    hideValidationAlert();
    DOM.startExamBtn.disabled = true;
    return;
  }

  try {
    const parsed = JSON.parse(rawText);
    if (!parsed.sections || !Array.isArray(parsed.sections) || parsed.sections.length === 0) {
      throw new Error("Missing 'sections' array in root JSON.");
    }

    parsed.sections.forEach((sec, sIdx) => {
      if (!sec.id || !sec.name || !Array.isArray(sec.questions)) {
        throw new Error(`Section at index ${sIdx} is missing required fields (id, name, questions).`);
      }
      sec.questions.forEach((q, qIdx) => {
        if (!q.id || !q.text || !Array.isArray(q.options) || q.options.length !== 4 || typeof q.correctAnswerIndex !== 'number') {
          throw new Error(`Question ${qIdx + 1} in '${sec.name}' must contain id, text, exactly 4 options, and correctAnswerIndex.`);
        }
      });
    });

    hideValidationAlert();
    DOM.startExamBtn.disabled = false;
    AppState.examData = parsed;
  } catch (err) {
    showValidationAlert(err.message);
    DOM.startExamBtn.disabled = true;
    AppState.examData = null;
  }
}

function showValidationAlert(message) {
  DOM.validationMsg.textContent = message;
  DOM.validationAlert.classList.remove('hidden');
}

function hideValidationAlert() {
  DOM.validationAlert.classList.add('hidden');
}

async function loadDefaultSample() {
  try {
    const res = await fetch('questions.json');
    if (!res.ok) throw new Error();
    const text = await res.text();
    DOM.jsonTextInput.value = text;
    DOM.fileNameDisplay.textContent = 'questions.json (sample)';
    validateJsonContent(text);
  } catch (e) {
    const jsonStr = JSON.stringify(DEFAULT_TEST_DATA, null, 2);
    DOM.jsonTextInput.value = jsonStr;
    DOM.fileNameDisplay.textContent = 'Sample Test Set (20 Questions, 5 Sections)';
    validateJsonContent(jsonStr);
  }
}

// ==========================================================================
// 3. Exam State Controller & Navigation
// ==========================================================================
function startExamSession() {
  if (!AppState.examData) return;

  AppState.responses = {};
  AppState.sectionTimesLeft = {};
  AppState.sectionStatus = {};

  AppState.examData.sections.forEach((sec) => {
    AppState.sectionStatus[sec.id] = 'pending';
    AppState.sectionTimesLeft[sec.id] = (sec.durationMinutes || 20) * 60;

    sec.questions.forEach((q) => {
      AppState.responses[q.id] = {
        selectedOption: null,
        status: 'not_visited',
        marked: false,
        timeSpent: 0,
        switchCount: 0,
        switchHistory: []
      };
    });
  });

  AppState.activeSectionIndex = 0;
  AppState.activeQuestionIndex = 0;

  switchView('exam');
  renderSectionTabs();
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
  startActiveSectionTimer();
  persistExamState();
}

function switchView(viewName) {
  AppState.view = viewName;
  DOM.viewHome.classList.toggle('active', viewName === 'home');
  DOM.viewHome.classList.toggle('hidden', viewName !== 'home');
  DOM.viewExam.classList.toggle('active', viewName === 'exam');
  DOM.viewExam.classList.toggle('hidden', viewName !== 'exam');
  DOM.viewReview.classList.toggle('active', viewName === 'review');
  DOM.viewReview.classList.toggle('hidden', viewName !== 'review');

  renderHeaderNavActions();
}

function renderHeaderNavActions() {
  DOM.dynamicNavActions.innerHTML = '';
  if (AppState.view === 'exam') {
    const exitBtn = document.createElement('button');
    exitBtn.className = 'btn btn-outline btn-danger';
    exitBtn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </svg>
      Exit Test
    `;
    exitBtn.onclick = confirmExitTest;
    DOM.dynamicNavActions.appendChild(exitBtn);
  } else if (AppState.view === 'review') {
    const newTestBtn = document.createElement('button');
    newTestBtn.className = 'btn btn-primary';
    newTestBtn.innerHTML = `
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="1 4 1 10 7 10"></polyline>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
      </svg>
      Start New Test
    `;
    newTestBtn.onclick = () => {
      localStorage.removeItem('neet_exam_session');
      location.reload();
    };
    DOM.dynamicNavActions.appendChild(newTestBtn);
  }
}

// ==========================================================================
// 4. CBT Exam Mode Logic & Rendering
// ==========================================================================
function renderSectionTabs() {
  DOM.sectionsBar.innerHTML = '';
  AppState.examData.sections.forEach((sec, idx) => {
    const btn = document.createElement('button');
    btn.className = `sec-tab-btn ${idx === AppState.activeSectionIndex ? 'active' : ''} ${AppState.sectionStatus[sec.id] === 'submitted' ? 'submitted' : ''}`;

    const stats = getSectionStats(sec.id);

    btn.innerHTML = `
      <span>${sec.name}</span>
      <span class="sec-info-icon-wrapper">
        <svg class="sec-info-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="9.5"></circle>
          <line x1="12" y1="16.5" x2="12" y2="11.5"></line>
          <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none"></circle>
        </svg>
      </span>
      <div class="sec-tooltip">
        <div class="tooltip-row">
          <span class="symbol-badge symbol-answered">${stats.answered}</span>
          <span class="legend-text">Answered</span>
        </div>
        <div class="tooltip-row">
          <span class="symbol-badge symbol-not-answered">${stats.notAnswered}</span>
          <span class="legend-text">Not Answered</span>
        </div>
        <div class="tooltip-row">
          <span class="symbol-badge symbol-not-visited">${stats.notVisited}</span>
          <span class="legend-text">Not Visited</span>
        </div>
        <div class="tooltip-row">
          <span class="symbol-badge symbol-marked">${stats.marked}</span>
          <span class="legend-text">Marked for Review</span>
        </div>
        <div class="tooltip-row">
          <span class="symbol-badge symbol-ans-marked">${stats.ansMarked}</span>
          <span class="legend-text">Ans &amp; Marked</span>
        </div>
      </div>
    `;

    btn.onclick = () => {
      if (AppState.sectionStatus[sec.id] === 'submitted') {
        alert("This section has already been submitted and cannot be revisited.");
        return;
      }
      if (idx !== AppState.activeSectionIndex) {
        alert("Please complete or submit the active section to proceed.");
      }
    };

    DOM.sectionsBar.appendChild(btn);
  });
}

function getSectionStats(sectionId) {
  const section = AppState.examData.sections.find(s => s.id === sectionId);
  let answered = 0, notAnswered = 0, notVisited = 0, marked = 0, ansMarked = 0;
  if (section) {
    section.questions.forEach(q => {
      const resp = AppState.responses[q.id];
      if (resp) {
        if (resp.status === 'answered') answered++;
        else if (resp.status === 'not_answered') notAnswered++;
        else if (resp.status === 'marked') marked++;
        else if (resp.status === 'answered_marked') ansMarked++;
        else notVisited++;
      }
    });
  }
  return { answered, notAnswered, notVisited, marked, ansMarked };
}

function loadQuestion(secIdx, qIdx) {
  const currentSec = AppState.examData.sections[secIdx];
  const question = currentSec.questions[qIdx];
  const resp = AppState.responses[question.id];

  if (resp.status === 'not_visited') {
    resp.status = 'not_answered';
  }

  DOM.examQNumber.textContent = `Question No. ${qIdx + 1}`;
  DOM.examQText.textContent = question.text;

  // Render 4 Options
  DOM.examOptionsList.innerHTML = '';
  question.options.forEach((optText, optIdx) => {
    const isSelected = resp.selectedOption === optIdx;
    const row = document.createElement('div');
    row.className = `option-row ${isSelected ? 'selected' : ''}`;
    row.innerHTML = `
      <div class="option-radio-custom"></div>
      <span class="option-label">${String.fromCharCode(65 + optIdx)}. ${optText}</span>
    `;

    row.onclick = () => selectOption(question.id, optIdx);
    DOM.examOptionsList.appendChild(row);
  });

  const isLastSection = secIdx === AppState.examData.sections.length - 1;
  DOM.btnSubmitSection.textContent = isLastSection ? 'Submit Test' : 'Submit Section';
  DOM.timerSecLabel.textContent = currentSec.name;

  updatePaletteGrid();
  updatePaletteSummaryCounters();
  renderSectionTabs();
  persistExamState();
}

function selectOption(qId, optIdx) {
  const resp = AppState.responses[qId];
  if (resp.selectedOption !== null && resp.selectedOption !== optIdx) {
    resp.switchCount = (resp.switchCount || 0) + 1;
    resp.switchHistory.push({ from: resp.selectedOption, to: optIdx, timestamp: Date.now() });
  }
  resp.selectedOption = optIdx;
  resp.status = resp.marked ? 'answered_marked' : 'answered';
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handleSaveAndNext() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  if (resp.selectedOption !== null) {
    resp.status = resp.marked ? 'answered_marked' : 'answered';
  } else {
    if (!resp.marked) resp.status = 'not_answered';
  }

  AppState.activeQuestionIndex = (AppState.activeQuestionIndex + 1) % curSec.questions.length;
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handleMarkForReviewAndNext() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  resp.marked = true;
  resp.status = resp.selectedOption !== null ? 'answered_marked' : 'marked';

  AppState.activeQuestionIndex = (AppState.activeQuestionIndex + 1) % curSec.questions.length;
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handleClearResponse() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  const question = curSec.questions[AppState.activeQuestionIndex];
  const resp = AppState.responses[question.id];

  resp.selectedOption = null;
  resp.marked = false;
  resp.status = 'not_answered';

  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function handlePreviousQuestion() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  if (AppState.activeQuestionIndex > 0) {
    AppState.activeQuestionIndex--;
  } else {
    AppState.activeQuestionIndex = curSec.questions.length - 1;
  }
  loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
}

function updatePaletteGrid() {
  DOM.examPaletteGrid.innerHTML = '';
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];

  curSec.questions.forEach((q, idx) => {
    const resp = AppState.responses[q.id];
    const btn = document.createElement('button');
    btn.className = `palette-btn symbol-${getPaletteClass(resp.status)} ${idx === AppState.activeQuestionIndex ? 'active-q' : ''}`;
    btn.textContent = idx + 1;
    btn.onclick = () => {
      AppState.activeQuestionIndex = idx;
      loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
      if (window.innerWidth <= 768) {
        DOM.examProgressSidebar.classList.remove('drawer-open');
      }
    };
    DOM.examPaletteGrid.appendChild(btn);
  });
}

function getPaletteClass(status) {
  switch (status) {
    case 'answered': return 'answered';
    case 'not_answered': return 'not-answered';
    case 'marked': return 'marked';
    case 'answered_marked': return 'ans-marked';
    default: return 'not-visited';
  }
}

function updatePaletteSummaryCounters() {
  let ans = 0, notAns = 0, notVis = 0, marked = 0, ansMarked = 0;
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];

  curSec.questions.forEach(q => {
    const resp = AppState.responses[q.id];
    if (resp.status === 'answered') ans++;
    else if (resp.status === 'not_answered') notAns++;
    else if (resp.status === 'marked') marked++;
    else if (resp.status === 'answered_marked') ansMarked++;
    else notVis++;
  });

  DOM.countAnswered.textContent = ans;
  DOM.countNotAnswered.textContent = notAns;
  DOM.countNotVisited.textContent = notVis;
  DOM.countMarked.textContent = marked;
  DOM.countAnsMarked.textContent = ansMarked;
}

// ==========================================================================
// 5. Timer & Section Flow
// ==========================================================================
function startActiveSectionTimer() {
  if (AppState.timerInterval) clearInterval(AppState.timerInterval);

  const activeSecId = AppState.examData.sections[AppState.activeSectionIndex].id;

  AppState.timerInterval = setInterval(() => {
    if (AppState.sectionTimesLeft[activeSecId] > 0) {
      AppState.sectionTimesLeft[activeSecId]--;

      const curSec = AppState.examData.sections[AppState.activeSectionIndex];
      const curQ = curSec.questions[AppState.activeQuestionIndex];
      if (curQ && AppState.responses[curQ.id]) {
        AppState.responses[curQ.id].timeSpent = (AppState.responses[curQ.id].timeSpent || 0) + 1;
      }

      updateTimerDisplay(AppState.sectionTimesLeft[activeSecId]);
      if (AppState.sectionTimesLeft[activeSecId] % 10 === 0) persistExamState();
    } else {
      clearInterval(AppState.timerInterval);
      handleSectionAutoSubmit();
    }
  }, 1000);
}

function updateTimerDisplay(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  DOM.sectionClockDisplay.textContent = `${h}:${m}:${s}`;
}

function handleSectionAutoSubmit() {
  showModal(
    "Section Time Elapsed",
    "Time for this section has expired. Submitting responses and proceeding...",
    () => executeSectionSubmission(),
    false
  );
}

function confirmSubmitSection(isAuto) {
  const isLast = AppState.activeSectionIndex === AppState.examData.sections.length - 1;
  const title = isLast ? "Submit Complete Examination?" : "Submit Current Section?";
  const msg = isLast
    ? "Are you sure you want to finish the exam? You will not be able to change any responses."
    : "Once submitted, you cannot reopen this section. Do you wish to continue?";

  showModal(title, msg, () => executeSectionSubmission());
}

function executeSectionSubmission() {
  const curSec = AppState.examData.sections[AppState.activeSectionIndex];
  AppState.sectionStatus[curSec.id] = 'submitted';

  if (AppState.activeSectionIndex < AppState.examData.sections.length - 1) {
    AppState.activeSectionIndex++;
    AppState.activeQuestionIndex = 0;
    renderSectionTabs();
    loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
    startActiveSectionTimer();
  } else {
    if (AppState.timerInterval) clearInterval(AppState.timerInterval);
    finishTestAndShowAnalytics();
  }
}

function confirmExitTest() {
  showModal(
    "Exit Examination",
    "Are you sure you want to terminate this test session? Unsubmitted answers will be evaluated as-is.",
    () => {
      if (AppState.timerInterval) clearInterval(AppState.timerInterval);
      finishTestAndShowAnalytics();
    }
  );
}

// ==========================================================================
// 6. Performance Analytics & Question Review
// ==========================================================================
function finishTestAndShowAnalytics() {
  localStorage.removeItem('neet_exam_session');
  switchView('review');
  populateFilterDropdowns();
  calculateAndRenderKPIs();
  renderFilteredReviewQuestions();
  updateResetFilterState();
}

function calculateAndRenderKPIs() {
  const scheme = AppState.examData.markingScheme || { correct: 4, incorrect: -1, unattempted: 0 };
  let correct = 0, incorrect = 0, unattempted = 0, totalQuestions = 0;

  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      totalQuestions++;
      const resp = AppState.responses[q.id];
      if (!resp || resp.selectedOption === null) {
        unattempted++;
      } else if (resp.selectedOption === q.correctAnswerIndex) {
        correct++;
      } else {
        incorrect++;
      }
    });
  });

  const totalScore = (correct * scheme.correct) + (incorrect * scheme.incorrect) + (unattempted * scheme.unattempted);
  const maxScore = totalQuestions * scheme.correct;
  const accuracy = (correct + incorrect) > 0 ? ((correct / (correct + incorrect)) * 100).toFixed(1) : "0.0";
  const attemptRate = totalQuestions > 0 ? (((correct + incorrect) / totalQuestions) * 100).toFixed(1) : "0.0";

  DOM.kpiTotalScore.textContent = totalScore;
  DOM.kpiMaxScore.textContent = `Max: ${maxScore}`;
  DOM.kpiCorrectCount.textContent = correct;
  DOM.kpiCorrectScore.textContent = `+${correct * scheme.correct} Marks`;
  DOM.kpiIncorrectCount.textContent = incorrect;
  DOM.kpiIncorrectScore.textContent = `${incorrect * scheme.incorrect} Marks`;
  DOM.kpiUnattemptedCount.textContent = unattempted;
  DOM.kpiUnattemptedRate.textContent = `${((unattempted / totalQuestions) * 100).toFixed(1)}% of Test`;
  DOM.kpiAccuracyPct.textContent = `${accuracy}%`;
  DOM.kpiAttemptRate.textContent = `Attempt Rate: ${attemptRate}%`;
}

function populateFilterDropdowns() {
  const sections = new Set();
  const subjects = new Set();
  const systems = new Set();
  const formats = new Set();
  const difficulties = new Set();

  AppState.examData.sections.forEach(sec => {
    sections.add(sec.name);
    sec.questions.forEach(q => {
      normalizeToArray(q.subject).forEach(s => subjects.add(s));
      normalizeToArray(q.system).forEach(sys => systems.add(sys));
      if (q.format) formats.add(q.format);
      if (q.difficulty) difficulties.add(q.difficulty);
    });
  });

  fillSelect(DOM.filterSection, sections);
  fillSelect(DOM.filterSubject, subjects);
  fillSelect(DOM.filterSystem, systems);
  fillSelect(DOM.filterFormat, formats);
  fillSelect(DOM.filterDifficulty, difficulties);
}

function fillSelect(selectElement, setValues) {
  selectElement.innerHTML = selectElement.options[0].outerHTML;
  setValues.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.textContent = val;
    selectElement.appendChild(opt);
  });
}

function applyFiltersFromDropdowns() {
  AppState.reviewFilters.result = DOM.filterResult.value;
  AppState.reviewFilters.marked = DOM.filterMarked.value;
  AppState.reviewFilters.section = DOM.filterSection.value;
  AppState.reviewFilters.subject = DOM.filterSubject.value;
  AppState.reviewFilters.system = DOM.filterSystem.value;
  AppState.reviewFilters.format = DOM.filterFormat.value;
  AppState.reviewFilters.difficulty = DOM.filterDifficulty.value;

  updateFilterHighlights();
  updateResetFilterState();
  renderFilteredReviewQuestions();
}

function updateFilterHighlights() {
  const filterElements = [
    { el: DOM.filterResult, key: 'result' },
    { el: DOM.filterMarked, key: 'marked' },
    { el: DOM.filterSection, key: 'section' },
    { el: DOM.filterSubject, key: 'subject' },
    { el: DOM.filterSystem, key: 'system' },
    { el: DOM.filterFormat, key: 'format' },
    { el: DOM.filterDifficulty, key: 'difficulty' }
  ];

  filterElements.forEach(({ el, key }) => {
    el.classList.toggle('filter-active', AppState.reviewFilters[key] !== 'all');
  });
}

function updateResetFilterState() {
  const hasActiveFilters = Object.values(AppState.reviewFilters).some(v => v !== 'all');
  DOM.btnResetFilters.disabled = !hasActiveFilters;
  DOM.btnResetFilters.classList.toggle('disabled', !hasActiveFilters);
}

function resetReviewFilters() {
  DOM.filterResult.value = 'all';
  DOM.filterMarked.value = 'all';
  DOM.filterSection.value = 'all';
  DOM.filterSubject.value = 'all';
  DOM.filterSystem.value = 'all';
  DOM.filterFormat.value = 'all';
  DOM.filterDifficulty.value = 'all';
  applyFiltersFromDropdowns();
}

function getFilteredQuestionsList() {
  const filtered = [];
  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach((q, idx) => {
      const resp = AppState.responses[q.id] || {};
      const isCorrect = resp.selectedOption === q.correctAnswerIndex;
      const isUnattempted = resp.selectedOption === null || resp.selectedOption === undefined;
      const isIncorrect = !isUnattempted && !isCorrect;

      const qSubjects = normalizeToArray(q.subject);
      const qSystems = normalizeToArray(q.system);

      if (AppState.reviewFilters.section !== 'all' && sec.name !== AppState.reviewFilters.section) return;
      if (AppState.reviewFilters.subject !== 'all' && !qSubjects.includes(AppState.reviewFilters.subject)) return;
      if (AppState.reviewFilters.system !== 'all' && !qSystems.includes(AppState.reviewFilters.system)) return;
      if (AppState.reviewFilters.format !== 'all' && q.format !== AppState.reviewFilters.format) return;
      if (AppState.reviewFilters.difficulty !== 'all' && q.difficulty !== AppState.reviewFilters.difficulty) return;

      if (AppState.reviewFilters.result === 'correct' && !isCorrect) return;
      if (AppState.reviewFilters.result === 'incorrect' && !isIncorrect) return;
      if (AppState.reviewFilters.result === 'unattempted' && !isUnattempted) return;

      if (AppState.reviewFilters.marked === 'marked' && !resp.marked) return;
      if (AppState.reviewFilters.marked === 'not_marked' && resp.marked) return;

      filtered.push({ question: q, section: sec, indexInSection: idx + 1, isCorrect, isIncorrect, isUnattempted, resp });
    });
  });
  return filtered;
}

// Groups filtered items into section rows with attached bookmark badges
function renderFilteredReviewQuestions() {
  const filtered = getFilteredQuestionsList();
  DOM.filteredCountDisplay.textContent = filtered.length;
  DOM.reviewMiniPalette.innerHTML = '';

  if (filtered.length === 0) {
    DOM.reviewQNum.textContent = "No Questions Match Current Filters";
    DOM.reviewQText.textContent = "Try clearing or adjusting filters to review questions.";
    DOM.reviewOptionsList.innerHTML = '';
    DOM.reviewExplanationText.textContent = '';
    DOM.reviewTagPills.innerHTML = '';
    DOM.reviewBookmarkIcon.classList.remove('active');
    return;
  }

  const activeExists = filtered.some(f => f.question.id === AppState.reviewActiveQuestionId);
  if (!activeExists) {
    AppState.reviewActiveQuestionId = filtered[0].question.id;
  }

  // Group questions by section
  const sectionMap = new Map();
  filtered.forEach(item => {
    const secKey = item.section.id || item.section.name;
    if (!sectionMap.has(secKey)) {
      sectionMap.set(secKey, { section: item.section, items: [] });
    }
    sectionMap.get(secKey).items.push(item);
  });

  sectionMap.forEach(({ section, items }) => {
    const row = document.createElement('div');
    row.className = 'mini-palette-section-row';

    const label = document.createElement('span');
    label.className = 'mini-palette-sec-label';
    const shortName = section.name.replace(/Section\s*/i, '').trim() || section.name.charAt(0);
    label.textContent = shortName;
    row.appendChild(label);

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'mini-palette-buttons-track';

    items.forEach(item => {
      const btn = document.createElement('button');
      let statusClass = 'symbol-not-answered';
      if (item.isCorrect) statusClass = 'symbol-answered';
      else if (item.isUnattempted) statusClass = 'symbol-not-visited';

      btn.className = `mini-palette-btn ${statusClass} ${item.question.id === AppState.reviewActiveQuestionId ? 'active-review' : ''}`;
      btn.textContent = item.indexInSection;

      if (item.resp && item.resp.marked) {
        const bookmarkIndicator = document.createElement('span');
        bookmarkIndicator.className = 'mini-palette-bookmark-tag';
        bookmarkIndicator.title = 'Marked for Review';
        bookmarkIndicator.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
        `;
        btn.appendChild(bookmarkIndicator);
      }

      btn.onclick = () => {
        AppState.reviewActiveQuestionId = item.question.id;
        renderActiveReviewCard(item);
        renderFilteredReviewQuestions();
      };
      buttonsContainer.appendChild(btn);
    });

    row.appendChild(buttonsContainer);
    DOM.reviewMiniPalette.appendChild(row);
  });

  const activeItem = filtered.find(f => f.question.id === AppState.reviewActiveQuestionId) || filtered[0];
  renderActiveReviewCard(activeItem);
}

function handleReviewPrevQuestion() {
  const list = getFilteredQuestionsList();
  if (list.length === 0) return;
  const curIdx = list.findIndex(item => item.question.id === AppState.reviewActiveQuestionId);
  const prevIdx = curIdx <= 0 ? list.length - 1 : curIdx - 1;
  AppState.reviewActiveQuestionId = list[prevIdx].question.id;
  renderFilteredReviewQuestions();
}

function handleReviewNextQuestion() {
  const list = getFilteredQuestionsList();
  if (list.length === 0) return;
  const curIdx = list.findIndex(item => item.question.id === AppState.reviewActiveQuestionId);
  const nextIdx = (curIdx + 1) % list.length;
  AppState.reviewActiveQuestionId = list[nextIdx].question.id;
  renderFilteredReviewQuestions();
}

function renderActiveReviewCard(item) {
  const { question, section, indexInSection, isCorrect, isIncorrect, resp } = item;

  DOM.reviewQNum.textContent = `${section.name} - Question No. ${indexInSection}`;

  if (isCorrect) {
    DOM.reviewQStatusBadge.className = 'badge badge-correct';
    DOM.reviewQStatusBadge.textContent = 'Correct';
  } else if (isIncorrect) {
    DOM.reviewQStatusBadge.className = 'badge badge-incorrect';
    DOM.reviewQStatusBadge.textContent = 'Incorrect';
  } else {
    DOM.reviewQStatusBadge.className = 'badge badge-unattempted';
    DOM.reviewQStatusBadge.textContent = 'Unattempted';
  }

  DOM.reviewBookmarkIcon.classList.toggle('active', !!resp.marked);
  DOM.reviewQText.textContent = question.text;

  // Options
  DOM.reviewOptionsList.innerHTML = '';
  question.options.forEach((optText, optIdx) => {
    const row = document.createElement('div');
    const isThisCorrect = optIdx === question.correctAnswerIndex;
    const isUserChosen = resp.selectedOption === optIdx;

    let rowClass = 'review-opt-row';
    let statusBadge = '';

    if (isThisCorrect) {
      rowClass += ' correct-answer';
      statusBadge = `<span class="opt-status-tag">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Correct Answer
      </span>`;
    } else if (isUserChosen && !isThisCorrect) {
      rowClass += ' user-incorrect';
      statusBadge = `<span class="opt-status-tag">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        Your Choice
      </span>`;
    }

    row.className = rowClass;
    row.innerHTML = `
      <span>${String.fromCharCode(65 + optIdx)}. ${optText}</span>
      ${statusBadge}
    `;
    DOM.reviewOptionsList.appendChild(row);
  });

  DOM.reviewExplanationText.textContent = question.explanation || "No extended commentary provided.";

  // Bare Tag Pills (values only & one-off filter click)
  DOM.reviewTagPills.innerHTML = '';
  const tags = [];

  tags.push({ label: section.name, key: 'section', val: section.name });

  normalizeToArray(question.subject).forEach(subj => {
    tags.push({ label: subj, key: 'subject', val: subj });
  });

  normalizeToArray(question.system).forEach(sys => {
    tags.push({ label: sys, key: 'system', val: sys });
  });

  if (question.format) {
    tags.push({ label: question.format, key: 'format', val: question.format });
  }

  if (question.difficulty) {
    tags.push({ label: question.difficulty, key: 'difficulty', val: question.difficulty });
  }

  tags.forEach(t => {
    const pill = document.createElement('span');
    pill.className = 'pill pill-interactive';
    pill.textContent = t.label;
    pill.onclick = () => {
      const selectKey = `filter${t.key.charAt(0).toUpperCase() + t.key.slice(1)}`;
      if (DOM[selectKey]) {
        // One-off filter: reset all other filters first
        DOM.filterResult.value = 'all';
        DOM.filterMarked.value = 'all';
        DOM.filterSection.value = 'all';
        DOM.filterSubject.value = 'all';
        DOM.filterSystem.value = 'all';
        DOM.filterFormat.value = 'all';
        DOM.filterDifficulty.value = 'all';

        DOM[selectKey].value = t.val;
        applyFiltersFromDropdowns();
      }
    };
    DOM.reviewTagPills.appendChild(pill);
  });
}

// ==========================================================================
// 7. Generic Analytics Subtabs
// ==========================================================================
function handleAnalyticsTabClick(e) {
  const btn = e.target.closest('.tab-btn');
  if (!btn) return;

  document.querySelectorAll('.analytics-tabs-list .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const tabId = btn.getAttribute('data-tab');
  AppState.reviewActiveTab = tabId;

  if (tabId === 'tab-question-review') {
    DOM.tabQuestionReview.classList.remove('hidden');
    DOM.tabAnalyticsGeneric.classList.add('hidden');
  } else {
    DOM.tabQuestionReview.classList.add('hidden');
    DOM.tabAnalyticsGeneric.classList.remove('hidden');
    renderGenericAnalyticsTab(tabId);
  }
}

function renderGenericAnalyticsTab(tabId) {
  let groupKey = 'subject';
  let title = 'Subject Analysis';
  let desc = 'Comparative breakdown across distinct clinical subjects.';

  switch (tabId) {
    case 'tab-section-analysis':
      groupKey = 'section'; title = 'Section Analysis'; desc = 'Performance, pacing and accuracy across test sections.'; break;
    case 'tab-subject-analysis':
      groupKey = 'subject'; title = 'Subject Analysis'; desc = 'Accuracy and weightage distribution across MBBS subjects.'; break;
    case 'tab-system-analysis':
      groupKey = 'system'; title = 'Organ System Analysis'; desc = 'Integrated physiological and pathology organ system breakdown.'; break;
    case 'tab-difficulty-analysis':
      groupKey = 'difficulty'; title = 'Difficulty Analysis'; desc = 'Performance segmented by item difficulty rating.'; break;
    case 'tab-format-analysis':
      groupKey = 'format'; title = 'Question Format Analysis'; desc = 'Clinical Vignettes vs One-Liners and image-based queries.'; break;
    case 'tab-time-analysis':
      renderTimeAnalysisTab(); return;
    case 'tab-behavior-analysis':
      renderBehaviorAnalysisTab(); return;
  }

  DOM.genericTabTitle.textContent = title;
  DOM.genericTabDesc.textContent = desc;

  const groups = {};
  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      let keys = [];
      if (groupKey === 'section') {
        keys = [sec.name];
      } else if (groupKey === 'subject') {
        keys = normalizeToArray(q.subject);
        if (keys.length === 0) keys = ['Uncategorized'];
      } else if (groupKey === 'system') {
        keys = normalizeToArray(q.system);
        if (keys.length === 0) keys = ['Uncategorized'];
      } else {
        keys = [q[groupKey] || 'Uncategorized'];
      }

      keys.forEach(gName => {
        if (!groups[gName]) groups[gName] = { total: 0, correct: 0, incorrect: 0, unattempted: 0, key: groupKey };
        groups[gName].total++;

        const resp = AppState.responses[q.id];
        if (!resp || resp.selectedOption === null) groups[gName].unattempted++;
        else if (resp.selectedOption === q.correctAnswerIndex) groups[gName].correct++;
        else groups[gName].incorrect++;
      });
    });
  });

  const tableHead = DOM.analyticsTable.querySelector('thead');
  const tableBody = DOM.analyticsTable.querySelector('tbody');
  tableHead.innerHTML = `
    <tr>
      <th>Category</th>
      <th>Total</th>
      <th>Correct</th>
      <th>Incorrect</th>
      <th>Unattempted</th>
      <th>Accuracy</th>
    </tr>
  `;
  tableBody.innerHTML = '';
  DOM.analyticsChartContainer.innerHTML = '';

  Object.entries(groups).forEach(([name, data]) => {
    const accuracy = (data.correct + data.incorrect) > 0
      ? ((data.correct / (data.correct + data.incorrect)) * 100).toFixed(1) + '%'
      : '0.0%';

    const row = document.createElement('tr');
    row.className = 'clickable-row';
    row.innerHTML = `
      <td class="bold-text">${name}</td>
      <td>${data.total}</td>
      <td style="color: var(--nord14)">${data.correct}</td>
      <td style="color: var(--nord11)">${data.incorrect}</td>
      <td style="color: var(--text-muted)">${data.unattempted}</td>
      <td><strong>${accuracy}</strong></td>
    `;
    row.onclick = () => filterReviewByTag(data.key, name);
    tableBody.appendChild(row);

    const correctPct = (data.correct / data.total) * 100;
    const incorrectPct = (data.incorrect / data.total) * 100;
    const unattemptedPct = (data.unattempted / data.total) * 100;

    const barItem = document.createElement('div');
    barItem.className = 'bar-chart-item';
    barItem.innerHTML = `
      <div class="bar-label-group">
        <span>${name}</span>
        <span>${accuracy} Accuracy</span>
      </div>
      <div class="bar-track">
        <div class="bar-segment-correct" style="width: ${correctPct}%"></div>
        <div class="bar-segment-incorrect" style="width: ${incorrectPct}%"></div>
        <div class="bar-segment-unattempted" style="width: ${unattemptedPct}%"></div>
      </div>
    `;
    barItem.onclick = () => filterReviewByTag(data.key, name);
    DOM.analyticsChartContainer.appendChild(barItem);
  });
}

function renderTimeAnalysisTab() {
  DOM.genericTabTitle.textContent = "Time & Pacing Analysis";
  DOM.genericTabDesc.textContent = "Inspection of time spent per section and average question velocity.";

  const tableHead = DOM.analyticsTable.querySelector('thead');
  const tableBody = DOM.analyticsTable.querySelector('tbody');
  tableHead.innerHTML = `
    <tr>
      <th>Section</th>
      <th>Allocated</th>
      <th>Time Used</th>
      <th>Avg Time / Q</th>
      <th>Pacing Index</th>
    </tr>
  `;
  tableBody.innerHTML = '';
  DOM.analyticsChartContainer.innerHTML = '';

  AppState.examData.sections.forEach(sec => {
    const allocatedSec = (sec.durationMinutes || 20) * 60;
    const timeUsed = allocatedSec - (AppState.sectionTimesLeft[sec.id] || 0);
    const avgPerQ = sec.questions.length > 0 ? (timeUsed / sec.questions.length).toFixed(1) : 0;
    const pacing = avgPerQ > 60 ? 'Slow' : avgPerQ < 35 ? 'Fast' : 'Optimal';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td class="bold-text">${sec.name}</td>
      <td>${Math.floor(allocatedSec / 60)}m</td>
      <td>${Math.floor(timeUsed / 60)}m ${timeUsed % 60}s</td>
      <td>${avgPerQ}s</td>
      <td><span class="pill">${pacing}</span></td>
    `;
    tableBody.appendChild(row);
  });
}

function renderBehaviorAnalysisTab() {
  DOM.genericTabTitle.textContent = "Behavioural & Option Switch Analysis";
  DOM.genericTabDesc.textContent = "Evaluation of second-guessing patterns during the exam.";

  let totalSwitches = 0, switchCorrect = 0, switchIncorrect = 0;

  AppState.examData.sections.forEach(sec => {
    sec.questions.forEach(q => {
      const resp = AppState.responses[q.id];
      if (resp && resp.switchCount > 0) {
        totalSwitches += resp.switchCount;
        if (resp.selectedOption === q.correctAnswerIndex) switchCorrect++;
        else switchIncorrect++;
      }
    });
  });

  const tableHead = DOM.analyticsTable.querySelector('thead');
  const tableBody = DOM.analyticsTable.querySelector('tbody');
  tableHead.innerHTML = `
    <tr>
      <th>Metric</th>
      <th>Observed Count</th>
      <th>Outcome Insight</th>
    </tr>
  `;
  tableBody.innerHTML = `
    <tr>
      <td class="bold-text">Total Option Switches</td>
      <td>${totalSwitches}</td>
      <td>Frequency of altered choices</td>
    </tr>
    <tr>
      <td class="bold-text">Switch Resulted in Correct</td>
      <td style="color: var(--nord14)">${switchCorrect}</td>
      <td>Second-guess improved score</td>
    </tr>
    <tr>
      <td class="bold-text">Switch Resulted in Incorrect</td>
      <td style="color: var(--nord11)">${switchIncorrect}</td>
      <td>Changed away from correct response</td>
    </tr>
  `;
  DOM.analyticsChartContainer.innerHTML = '';
}

function filterReviewByTag(key, value) {
  document.querySelector('.tab-btn[data-tab="tab-question-review"]').click();
  const selectKey = `filter${key.charAt(0).toUpperCase() + key.slice(1)}`;
  if (DOM[selectKey]) {
    // One-off filter: reset all other filters first
    DOM.filterResult.value = 'all';
    DOM.filterMarked.value = 'all';
    DOM.filterSection.value = 'all';
    DOM.filterSubject.value = 'all';
    DOM.filterSystem.value = 'all';
    DOM.filterFormat.value = 'all';
    DOM.filterDifficulty.value = 'all';

    DOM[selectKey].value = value;
    applyFiltersFromDropdowns();
  }
}

// ==========================================================================
// 8. Clipboard & JSON Export
// ==========================================================================
function copyActiveReviewQuestion() {
  const item = getFilteredQuestionsList().find(f => f.question.id === AppState.reviewActiveQuestionId);
  if (!item) return;

  const text = formatQuestionPlaintext(item.question, item.resp);
  navigator.clipboard.writeText(text).then(() => {
    alert("Question details copied to clipboard in clean plain text.");
  });
}

function copyAllFilteredQuestions() {
  const list = getFilteredQuestionsList();
  if (list.length === 0) {
    alert("No questions match current filter.");
    return;
  }

  const fullText = list.map((item, idx) => `--- Item ${idx + 1} ---\n` + formatQuestionPlaintext(item.question, item.resp)).join("\n\n");
  navigator.clipboard.writeText(fullText).then(() => {
    alert(`Copied ${list.length} filtered questions to clipboard.`);
  });
}

function formatQuestionPlaintext(q, resp) {
  const chosenOpt = resp && resp.selectedOption !== null && resp.selectedOption !== undefined
    ? `${String.fromCharCode(65 + resp.selectedOption)}. ${q.options[resp.selectedOption]}`
    : "Unattempted";
  const correctOpt = `${String.fromCharCode(65 + q.correctAnswerIndex)}. ${q.options[q.correctAnswerIndex]}`;

  return `Question: ${q.text}\n\nOptions:\nA. ${q.options[0]}\nB. ${q.options[1]}\nC. ${q.options[2]}\nD. ${q.options[3]}\n\nMy Response: ${chosenOpt}\nCorrect Answer: ${correctOpt}\n\nExplanation:\n${q.explanation || 'N/A'}`;
}

function downloadTestResults() {
  const exportPayload = {
    examTitle: AppState.examData.examTitle || 'NEET-PG CBT Simulation',
    exportedAt: new Date().toISOString(),
    markingScheme: AppState.examData.markingScheme,
    sections: AppState.examData.sections.map(sec => ({
      id: sec.id,
      name: sec.name,
      timeRemainingSeconds: AppState.sectionTimesLeft[sec.id] || 0,
      questions: sec.questions.map(q => {
        const resp = AppState.responses[q.id] || {};
        return {
          id: q.id,
          text: q.text,
          subject: q.subject,
          system: q.system,
          format: q.format,
          difficulty: q.difficulty,
          selectedOptionIndex: resp.selectedOption,
          correctAnswerIndex: q.correctAnswerIndex,
          isCorrect: resp.selectedOption === q.correctAnswerIndex,
          markedForReview: !!resp.marked,
          timeSpentSeconds: resp.timeSpent || 0,
          optionSwitchCount: resp.switchCount || 0
        };
      })
    }))
  };

  const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `NEET_PG_Result_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

// ==========================================================================
// 9. Modals & Persistence
// ==========================================================================
function showModal(title, message, onConfirm, showCancel = true) {
  DOM.modalTitle.textContent = title;
  DOM.modalBody.textContent = message;
  DOM.modalBtnCancel.style.display = showCancel ? 'inline-flex' : 'none';
  DOM.modalContainer.classList.remove('hidden');

  DOM.modalBtnConfirm.onclick = () => {
    DOM.modalContainer.classList.add('hidden');
    if (onConfirm) onConfirm();
  };
  DOM.modalBtnCancel.onclick = () => {
    DOM.modalContainer.classList.add('hidden');
  };
}

function persistExamState() {
  if (AppState.view !== 'exam') return;
  const payload = {
    examData: AppState.examData,
    activeSectionIndex: AppState.activeSectionIndex,
    activeQuestionIndex: AppState.activeQuestionIndex,
    sectionTimesLeft: AppState.sectionTimesLeft,
    responses: AppState.responses,
    sectionStatus: AppState.sectionStatus
  };
  localStorage.setItem('neet_exam_session', JSON.stringify(payload));
}

function checkPersistedSession() {
  const raw = localStorage.getItem('neet_exam_session');
  if (!raw) return;

  try {
    const data = JSON.parse(raw);
    if (data && data.examData && data.responses) {
      showModal(
        "Resume Active Exam",
        "An unfinished CBT session was found. Would you like to resume where you left off?",
        () => {
          AppState.examData = data.examData;
          AppState.activeSectionIndex = data.activeSectionIndex || 0;
          AppState.activeQuestionIndex = data.activeQuestionIndex || 0;
          AppState.sectionTimesLeft = data.sectionTimesLeft || {};
          AppState.responses = data.responses || {};
          AppState.sectionStatus = data.sectionStatus || {};

          switchView('exam');
          renderSectionTabs();
          loadQuestion(AppState.activeSectionIndex, AppState.activeQuestionIndex);
          startActiveSectionTimer();
        },
        true
      );
    }
  } catch (e) {
    localStorage.removeItem('neet_exam_session');
  }
}

document.addEventListener('DOMContentLoaded', initApp);
