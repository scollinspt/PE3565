import type { Activity, ModuleId, PathwayId } from './labContent';

export type AdditionalModuleId = Exclude<ModuleId, 1>;

type ActivityTemplate = Omit<Activity, 'context'> & {
  context: Record<PathwayId, string>;
};

const XP_SEQUENCE = [15, 10, 10, 10, 10, 15, 25] as const;

const module2Templates: ActivityTemplate[] = [
  {
    id: 'm2-pathway-case',
    marker: 'Pathway case',
    title: 'Start with purpose and timing',
    context: {
      adventure:
        'An adventure education instructor is planning a navigation unit and needs evidence for placement, coaching, and final readiness decisions.',
      'physical-education':
        'A physical educator is planning a striking unit and needs evidence for baseline grouping, mid-unit feedback, and end-unit reporting.',
      'allied-health':
        'An allied health instructor is planning a functional movement lab and needs evidence for initial status, progress checks, and end-of-block interpretation.',
      'exercise-physiology':
        'An exercise physiology instructor is planning a conditioning block and needs evidence for baseline profiling, adaptation checks, and endpoint summaries.',
    },
    prompt: 'Which sequence best matches preassessment, formative use, summative use, and retention evidence?',
    options: [
      {
        text: 'Collect endpoint results first, then baseline, then use delayed testing only for grading.',
        feedback: 'This reverses logic. Baseline evidence should come before instruction, and retention has a distinct purpose beyond grading alone.',
      },
      {
        text: 'Use baseline first, monitor learning, summarize at endpoint, then check retention later.',
        feedback: 'This sequence aligns timing with distinct decisions across planning, adaptation, reporting, and persistence.',
      },
      {
        text: 'Use one final test for all purposes to keep interpretation consistent across time points.',
        feedback: 'One endpoint measure cannot replace baseline, formative guidance, and delayed retention questions.',
      },
      {
        text: 'Run retention first so later assessments can confirm whether immediate learning happened.',
        feedback: 'Retention requires a planned delay after instruction, so it cannot precede immediate learning checks.',
      },
    ],
    correctIndex: 1,
    hint: 'Match each time point to the decision it can actually support.',
    xp: 15,
  },
  {
    id: 'm2-purpose-check',
    marker: 'Quick check 1',
    title: 'Assessment for, of, and as learning',
    context: {
      adventure: 'Your team receives coaching notes during route-planning rehearsals.',
      'physical-education': 'Students receive movement cues during small-sided game practice.',
      'allied-health': 'Learners get structured feedback while practicing functional task communication.',
      'exercise-physiology': 'Students receive technique and pacing feedback during repeated protocol trials.',
    },
    prompt: 'Which description is the best example of assessment as learning?',
    options: [
      {
        text: 'Instructor scores the final performance to report achieved proficiency at the endpoint.',
        feedback: 'That is primarily assessment of learning because it summarizes endpoint achievement.',
      },
      {
        text: 'Instructor gives corrective feedback during practice so performance can improve immediately.',
        feedback: 'That is assessment for learning because evidence is used to guide next instructional steps.',
      },
      {
        text: 'Program director compares this cohort to last year for program accountability reporting.',
        feedback: 'This is an evaluative reporting use, not a learner-driven monitoring process.',
      },
      {
        text: 'Learners use criteria to monitor their own work, revise plans, and justify adjustments.',
        feedback: 'This is assessment as learning because learners regulate and interpret their own progress using criteria.',
      },
    ],
    correctIndex: 3,
    hint: 'Focus on who is using evidence and for what immediate purpose.',
    xp: 10,
  },
  {
    id: 'm2-timing-check',
    marker: 'Quick check 2',
    title: 'Preassessment interpretation',
    context: {
      adventure: 'A baseline challenge-course trial is completed before formal instruction begins.',
      'physical-education': 'A baseline skill task is completed before the unit starts.',
      'allied-health': 'A baseline functional task is completed before guided practice sessions.',
      'exercise-physiology': 'A baseline submax protocol is completed before the training block begins.',
    },
    prompt: 'Which conclusion is most defensible from a preassessment result alone?',
    options: [
      {
        text: 'It describes a starting point that can guide planning and later comparison.',
        feedback: 'This is the primary purpose of preassessment evidence before instruction or intervention.',
      },
      {
        text: 'It proves the learner cannot improve with targeted practice and feedback.',
        feedback: 'A baseline result does not establish fixed ability or rule out future learning.',
      },
      {
        text: 'It confirms intervention effectiveness because performance was measured early.',
        feedback: 'Effectiveness claims require later comparison points, not baseline evidence alone.',
      },
      {
        text: 'It should be interpreted as a retention measure because no instruction happened yet.',
        feedback: 'Retention concerns maintained learning after instruction and delay, not baseline status.',
      },
    ],
    correctIndex: 0,
    hint: 'Ask what can be known before any planned learning period has occurred.',
    xp: 10,
  },
  {
    id: 'm2-retention-check',
    marker: 'Quick check 3',
    title: 'Retention versus immediate postassessment',
    context: {
      adventure: 'Participants complete a route-choice task immediately after instruction and again three weeks later.',
      'physical-education': 'Students complete a game-skill task after the unit and again after a delay.',
      'allied-health': 'Learners complete a functional communication task at endpoint and again after planned time away.',
      'exercise-physiology': 'Athletes complete a protocol endpoint test and a delayed reassessment after reduced cueing.',
    },
    prompt: 'Why add a planned retention assessment after an immediate postassessment?',
    options: [
      {
        text: 'To replace endpoint interpretation because delayed scores are always more accurate.',
        feedback: 'Retention evidence is useful, but it does not automatically replace all endpoint interpretations.',
      },
      {
        text: 'To increase sample size because repeated scores are independent by default.',
        feedback: 'Repeated scores are related and should not be treated as independent observations by default.',
      },
      {
        text: 'To check whether learning persisted beyond immediate support and recency effects.',
        feedback: 'Retention testing addresses maintenance over time rather than immediate performance only.',
      },
      {
        text: 'To avoid making any instructional decisions until all delayed scores are available.',
        feedback: 'Formative decisions can still be made earlier; retention adds another interpretive lens.',
      },
    ],
    correctIndex: 2,
    hint: 'Think about what immediate performance can hide.',
    xp: 10,
  },
  {
    id: 'm2-approach-check',
    marker: 'Quick check 4',
    title: 'Purpose drives approach',
    context: {
      adventure: 'A coach needs to adjust tomorrow\'s field simulation based on today\'s observations.',
      'physical-education': 'A teacher needs to decide next lesson tasks based on today\'s game performance.',
      'allied-health': 'An instructor needs to adapt upcoming practice tasks based on observed communication breakdowns.',
      'exercise-physiology': 'A lab instructor needs to adjust protocol coaching based on current pacing errors.',
    },
    prompt: 'Which approach best fits this immediate instructional decision?',
    options: [
      {
        text: 'Assessment of learning with endpoint reporting as the primary use of evidence.',
        feedback: 'Endpoint reporting is important, but this scenario centers on immediate instructional adjustment.',
      },
      {
        text: 'Assessment for learning with timely feedback and targeted next steps.',
        feedback: 'This aligns with using current evidence to guide the next instruction cycle.',
      },
      {
        text: 'Norm-referenced reporting to rank participants before planning instruction.',
        feedback: 'Relative ranking is not the key need when adapting next steps for current learners.',
      },
      {
        text: 'Retention testing as the first action before any instructional adjustment is allowed.',
        feedback: 'Retention has value, but waiting for delay data would not match this immediate purpose.',
      },
    ],
    correctIndex: 1,
    hint: 'Choose the approach that supports next-step teaching right now.',
    xp: 10,
  },
  {
    id: 'm2-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer timing logic across fields',
    context: {
      adventure: 'Transfer your timing logic to an exercise physiology lab that tracks adaptation over a month.',
      'physical-education': 'Transfer your timing logic to an allied health class tracking communication skill carryover.',
      'allied-health': 'Transfer your timing logic to a physical education unit tracking tactical retention.',
      'exercise-physiology': 'Transfer your timing logic to adventure education route-planning readiness checks.',
    },
    prompt: 'Which plan best supports both learning adjustment and delayed interpretation?',
    options: [
      {
        text: 'Use only one delayed test because later evidence makes all earlier checks unnecessary.',
        feedback: 'A delayed check cannot replace baseline and formative evidence needed for instruction.',
      },
      {
        text: 'Use baseline and endpoint only, then infer retention from endpoint trends.',
        feedback: 'Retention should be measured directly after delay, not inferred from endpoint alone.',
      },
      {
        text: 'Use daily scores for grading only, without using them for instructional adaptation.',
        feedback: 'Daily evidence can support formative adjustment, not just endpoint grading.',
      },
      {
        text: 'Use baseline, formative checks, endpoint summary, then a delayed retention check.',
        feedback: 'This design supports planning, adaptation, reporting, and persistence claims in sequence.',
      },
    ],
    correctIndex: 3,
    hint: 'A complete plan answers different questions at different times.',
    xp: 15,
  },
  {
    id: 'm2-decision-challenge',
    marker: 'Decision Challenge',
    title: 'Evidence timing and next action',
    context: {
      adventure:
        'Baseline results were low. During instruction, participants improved with coaching. Endpoint scores improved, but delayed retention scores dropped for route adaptation decisions.',
      'physical-education':
        'Baseline mechanics were inconsistent. Mid-unit feedback improved play performance. Endpoint scores rose, but delayed scores show loss under pressure.',
      'allied-health':
        'Baseline functional communication was limited. Formative coaching improved practice tasks. Endpoint results improved, but delayed application became inconsistent.',
      'exercise-physiology':
        'Baseline protocol pacing was uneven. Formative guidance improved sessions. Endpoint metrics rose, but delayed retest consistency declined.',
    },
    prompt: 'Which decision is best supported by this timing pattern?',
    options: [
      {
        text: 'Use targeted relearning and reassess retention before making high-consequence conclusions.',
        feedback: 'This uses the delayed evidence appropriately and keeps the next decision proportional to uncertainty.',
      },
      {
        text: 'Ignore delayed results because endpoint improvement is always the strongest evidence source.',
        feedback: 'Delayed results directly address persistence and should not be ignored when retention is a goal.',
      },
      {
        text: 'Treat the baseline as the most valid score because it was collected before instructional bias.',
        feedback: 'Baseline is useful for starting point interpretation, not final conclusion about current capability.',
      },
      {
        text: 'Issue a permanent final judgment now because mixed timing data means no further evidence helps.',
        feedback: 'Mixed evidence suggests a need for targeted follow-up, not a permanent fixed conclusion.',
      },
    ],
    correctIndex: 0,
    hint: 'Respect what delayed evidence says about persistence before making irreversible calls.',
    xp: 25,
  },
];

const module3Templates: ActivityTemplate[] = [
  {
    id: 'm3-pathway-case',
    marker: 'Pathway case',
    title: 'Tool and scoring fit',
    context: {
      adventure:
        'In an adventure rescue scenario, the instructor wants evidence on both completion of safety steps and quality of adaptive leadership communication.',
      'physical-education':
        'In a physical education invasion-game task, the teacher wants evidence on whether key movement cues appear and how well tactical choices are executed.',
      'allied-health':
        'In an allied health functional demonstration, the instructor wants evidence on required procedural steps and quality of learner-facing instruction clarity.',
      'exercise-physiology':
        'In an exercise physiology protocol, the instructor wants evidence on required setup steps and quality of pacing decisions under workload changes.',
    },
    prompt: 'Which design best matches these dual evidence goals?',
    options: [
      {
        text: 'Use a single global score only, because one number is always easiest to interpret.',
        feedback: 'Efficiency helps, but one global score can hide whether steps occurred and where quality varied.',
      },
      {
        text: 'Use only a checklist, because quality judgments are too subjective for educational decisions.',
        feedback: 'A checklist captures occurrence, but quality differences still matter for this intended outcome.',
      },
      {
        text: 'Use a checklist for required elements plus criteria-based quality scoring for performance.',
        feedback: 'This captures both occurrence and quality, matching the stated evidence needs.',
      },
      {
        text: 'Use only norm rankings from previous cohorts to avoid scoring the current performance.',
        feedback: 'Norm rankings do not replace direct evidence of what occurred in this performance.',
      },
    ],
    correctIndex: 2,
    hint: 'Pair tools so each one answers a different evidence question.',
    xp: 15,
  },
  {
    id: 'm3-checklist-check',
    marker: 'Quick check 1',
    title: 'Checklist limits',
    context: {
      adventure: 'Observers mark whether each rope-safety step occurred.',
      'physical-education': 'Observers mark whether each skill cue occurred during performance.',
      'allied-health': 'Observers mark whether each communication step occurred in sequence.',
      'exercise-physiology': 'Observers mark whether each protocol setup action was completed.',
    },
    prompt: 'What is the strongest claim a checklist alone typically supports?',
    options: [
      {
        text: 'Whether specified elements occurred under the defined observation procedure.',
        feedback: 'Correct. Checklists are strongest for presence or absence of defined elements.',
      },
      {
        text: 'Precise quality differences among performers on each observed element.',
        feedback: 'Quality gradation usually requires a rating scale or rubric with clear anchors.',
      },
      {
        text: 'Relative standing compared with a national norm group and percentile rank.',
        feedback: 'Checklist completion data alone does not establish norm-based standing.',
      },
      {
        text: 'Long-term retention of performance quality without repeated follow-up measurement.',
        feedback: 'Retention claims require delayed measurements, not one checklist record.',
      },
    ],
    correctIndex: 0,
    hint: 'Think occurrence versus degree.',
    xp: 10,
  },
  {
    id: 'm3-rubric-check',
    marker: 'Quick check 2',
    title: 'Analytic versus holistic rubric',
    context: {
      adventure: 'A field leadership task includes planning, communication, adaptation, and safety monitoring.',
      'physical-education': 'A game performance task includes spacing, decision quality, execution, and support play.',
      'allied-health': 'A functional coaching task includes clarity, sequencing, adaptation, and confirmation of understanding.',
      'exercise-physiology': 'A lab interpretation task includes setup, pacing logic, response interpretation, and communication.',
    },
    prompt: 'When is an analytic rubric usually preferable to a holistic rubric?',
    options: [
      {
        text: 'When only one overall readiness judgment is needed and detail is unnecessary.',
        feedback: 'That is a common use case for holistic scoring, not a reason for analytic scoring.',
      },
      {
        text: 'When scoring time must be minimized and no dimension-level feedback is needed.',
        feedback: 'Analytic scoring is often slower because each dimension is scored separately.',
      },
      {
        text: 'When norm rank comparisons are the only intended interpretation for stakeholders.',
        feedback: 'Rubric style is about criterion structure, not a direct switch to norm interpretation.',
      },
      {
        text: 'When dimension-level strengths and needs are needed for targeted feedback.',
        feedback: 'Analytic rubrics preserve separate dimension signals for diagnosis and coaching.',
      },
    ],
    correctIndex: 3,
    hint: 'Choose the format that preserves the detail needed for the decision.',
    xp: 10,
  },
  {
    id: 'm3-standardization-check',
    marker: 'Quick check 3',
    title: 'Standardization purpose',
    context: {
      adventure: 'Different groups currently receive different instructions and cueing before assessment.',
      'physical-education': 'Different classes currently use different demonstrations before the same skill task.',
      'allied-health': 'Different lab sections currently use different setup scripts for the same functional assessment.',
      'exercise-physiology': 'Different testers currently use different prompts during the same workload protocol.',
    },
    prompt: 'What is the primary reason to increase standardization here?',
    options: [
      {
        text: 'To guarantee validity for every interpretation and every future population.',
        feedback: 'Standardization helps comparability but cannot guarantee universal validity claims.',
      },
      {
        text: 'To make scores more comparable by reducing irrelevant procedural variation.',
        feedback: 'Consistent procedures reduce unwanted differences that come from administration variation.',
      },
      {
        text: 'To remove all need for scorer training because procedures become self-correcting.',
        feedback: 'Training and calibration are still needed even with standardized procedures.',
      },
      {
        text: 'To ensure every learner receives identical outcomes regardless of actual performance.',
        feedback: 'Standardization concerns procedure fairness, not forcing similar outcomes.',
      },
    ],
    correctIndex: 1,
    hint: 'Distinguish procedural consistency from claims about universal accuracy.',
    xp: 10,
  },
  {
    id: 'm3-authentic-alignment-check',
    marker: 'Quick check 4',
    title: 'Authentic task alignment',
    context: {
      adventure: 'The outcome requires adapting leadership communication during an evolving field problem.',
      'physical-education': 'The outcome requires tactical decision making during dynamic game play.',
      'allied-health': 'The outcome requires adapting functional instructions to learner response changes.',
      'exercise-physiology': 'The outcome requires interpreting protocol responses during changing workload demands.',
    },
    prompt: 'Which option best reflects authentic alignment with the intended outcome?',
    options: [
      {
        text: 'A decontextualized vocabulary quiz focused on terms related to the performance area.',
        feedback: 'Vocabulary can support knowledge checks, but it does not directly sample the performance outcome.',
      },
      {
        text: 'A one-time survey asking participants how confident they feel about future performance.',
        feedback: 'Confidence may matter, but it is not direct evidence of the target performance itself.',
      },
      {
        text: 'A task that reproduces key demands and uses criteria tied to the intended performance.',
        feedback: 'Authentic alignment is strongest when task demands and criteria match the target performance.',
      },
      {
        text: 'A convenience task with easier demands than the target context to reduce scoring effort.',
        feedback: 'Lower-demand proxies can miss critical features of the intended authentic performance.',
      },
    ],
    correctIndex: 2,
    hint: 'Look for fidelity to the demands of the actual target performance.',
    xp: 10,
  },
  {
    id: 'm3-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer tool logic across settings',
    context: {
      adventure: 'Apply your tool-selection logic to a physical education tactical-play assessment.',
      'physical-education': 'Apply your tool-selection logic to an adventure route-adaptation assessment.',
      'allied-health': 'Apply your tool-selection logic to an exercise physiology protocol interpretation assessment.',
      'exercise-physiology': 'Apply your tool-selection logic to an allied health functional communication assessment.',
    },
    prompt: 'Which tool package best supports both comparability and actionable feedback?',
    options: [
      {
        text: 'Use standardized administration with an analytic rubric and clear anchors.',
        feedback: 'This package supports comparability while preserving dimension-level feedback.',
      },
      {
        text: 'Use only a holistic score and remove all criteria to speed scoring decisions.',
        feedback: 'Speed may increase, but removing criteria weakens transparency and feedback quality.',
      },
      {
        text: 'Use only a checklist and infer quality from total element counts.',
        feedback: 'Element counts do not fully represent performance quality differences.',
      },
      {
        text: 'Use open discussion only and avoid recorded scoring to keep interpretation flexible.',
        feedback: 'Discussion can help reflection, but unscored evidence weakens comparability for decisions.',
      },
    ],
    correctIndex: 0,
    hint: 'Do not trade away interpretive quality for convenience when decisions matter.',
    xp: 15,
  },
  {
    id: 'm3-decision-challenge',
    marker: 'Decision Challenge',
    title: 'Scoring design revision',
    context: {
      adventure:
        'Observers agree on whether safety steps occurred, but disagree widely on communication quality because anchors are vague. The program uses one combined score for high-stakes readiness.',
      'physical-education':
        'Teachers agree on cue occurrence, but disagree on tactical quality because descriptors are broad. One combined score drives major reporting decisions.',
      'allied-health':
        'Instructors agree on required steps, but disagree on communication quality due to unclear level descriptors. A single total score drives progression decisions.',
      'exercise-physiology':
        'Raters agree on protocol completion, but disagree on interpretation quality because anchor language is weak. A single score drives advancement decisions.',
    },
    prompt: 'Which revision is most defensible before using these scores for stronger decisions?',
    options: [
      {
        text: 'Keep the existing single score and increase consequences so scorers become more careful.',
        feedback: 'Higher stakes do not fix unclear criteria or improve scorer agreement by themselves.',
      },
      {
        text: 'Remove quality scoring and use only step completion for all readiness conclusions.',
        feedback: 'If quality is part of the construct, removing it underrepresents intended performance.',
      },
      {
        text: 'Replace observation with self-ratings because participant reflections are always more objective.',
        feedback: 'Self-ratings add perspective but do not automatically replace direct performance evidence.',
      },
      {
        text: 'Clarify anchors, train raters, score dimensions separately, and recheck agreement.',
        feedback: 'This directly addresses objectivity and comparability concerns before high-consequence interpretation.',
      },
    ],
    correctIndex: 3,
    hint: 'Fix the source of disagreement before increasing claim strength.',
    xp: 25,
  },
];

const module4Templates: ActivityTemplate[] = [
  {
    id: 'm4-pathway-case',
    marker: 'Pathway case',
    title: 'Describe the pattern first',
    context: {
      adventure:
        'Two adventure groups have the same average route-planning score. One group clusters tightly, while the other has very high and very low performers.',
      'physical-education':
        'Two classes have the same mean game-performance score. One class is tightly grouped, while the other spans a wide range.',
      'allied-health':
        'Two lab sections have the same average functional-instruction score, but one section shows much wider dispersion.',
      'exercise-physiology':
        'Two athlete groups show the same mean protocol score, but one group has much larger score spread.',
    },
    prompt: 'What is the most accurate interpretation?',
    options: [
      {
        text: 'The groups can differ meaningfully in variation even when means are equal.',
        feedback: 'Same means can hide very different distributions and instructional needs.',
      },
      {
        text: 'Equal means imply equal consistency, so no further distribution review is needed.',
        feedback: 'Consistency requires spread information, not means alone.',
      },
      {
        text: 'The group with wider spread must have invalid scores and should be excluded.',
        feedback: 'Wider spread can be real. It does not automatically indicate invalid scoring.',
      },
      {
        text: 'Only the highest score determines which group performed better overall.',
        feedback: 'Single extreme values cannot represent whole-group performance patterns.',
      },
    ],
    correctIndex: 0,
    hint: 'Center and spread answer different descriptive questions.',
    xp: 15,
  },
  {
    id: 'm4-center-check',
    marker: 'Quick check 1',
    title: 'Mean versus median',
    context: {
      adventure: 'One route score is far lower than the rest because of a severe weather disruption day.',
      'physical-education': 'One skill score is far lower after a student missed several classes due to absence.',
      'allied-health': 'One functional score is far lower because of an interrupted test session.',
      'exercise-physiology': 'One protocol score is far lower due to an interrupted trial condition.',
    },
    prompt: 'Which summary is usually less influenced by this single extreme value?',
    options: [
      {
        text: 'Mean, because it equally weights all values and smooths out unusual observations.',
        feedback: 'Equal weighting makes the mean more sensitive to extreme values, not less.',
      },
      {
        text: 'Mode, because it always preserves rank order and represents center robustly.',
        feedback: 'Mode can be informative, but it is not generally the preferred robust center summary.',
      },
      {
        text: 'Median, because midpoint position is less pulled by extremes.',
        feedback: 'Median is often more robust when distributions are skewed by outliers.',
      },
      {
        text: 'Range, because it uses only two values and therefore ignores all outlier effects.',
        feedback: 'Range is directly determined by extremes and is highly sensitive to outliers.',
      },
    ],
    correctIndex: 2,
    hint: 'Think positional center, not arithmetic average.',
    xp: 10,
  },
  {
    id: 'm4-variation-check',
    marker: 'Quick check 2',
    title: 'Interpreting variation and SD',
    context: {
      adventure: 'Group A and Group B have the same mean. Group B has a larger standard deviation.',
      'physical-education': 'Class A and Class B have the same mean. Class B has a larger standard deviation.',
      'allied-health': 'Section A and Section B have the same mean. Section B has a larger standard deviation.',
      'exercise-physiology': 'Team A and Team B have the same mean. Team B has a larger standard deviation.',
    },
    prompt: 'What does the larger standard deviation mainly indicate?',
    options: [
      {
        text: 'Scores in Group B are more valid because variability proves richer information.',
        feedback: 'Spread does not directly establish validity of interpretation.',
      },
      {
        text: 'Scores in Group B are generally spread farther from their mean.',
        feedback: 'Larger standard deviation reflects greater average distance from the mean.',
      },
      {
        text: 'Scores in Group B are necessarily lower on average than Group A.',
        feedback: 'The mean is stated as equal, so lower average cannot be inferred.',
      },
      {
        text: 'Scores in Group B were scored more objectively by default because SD is larger.',
        feedback: 'Objectivity concerns scoring consistency, not simply magnitude of spread.',
      },
    ],
    correctIndex: 1,
    hint: 'SD quantifies spread, not quality of the tool by itself.',
    xp: 10,
  },
  {
    id: 'm4-reference-check',
    marker: 'Quick check 3',
    title: 'Percentile and standardized score claims',
    context: {
      adventure: 'A participant is reported at the 70th percentile on a norm-referenced profile.',
      'physical-education': 'A student is reported at the 70th percentile on a norm-referenced profile.',
      'allied-health': 'A learner is reported at the 70th percentile on a norm-referenced profile.',
      'exercise-physiology': 'An athlete is reported at the 70th percentile on a norm-referenced profile.',
    },
    prompt: 'Which interpretation is correct?',
    options: [
      {
        text: 'The performer answered 70 percent of items correctly on this assessment.',
        feedback: 'Percentile rank is relative standing, not percent correct.',
      },
      {
        text: 'The performer is better than everyone in the reference group except 30 percent.',
        feedback: 'Percentiles reflect relative position at or below, not a strict ranking of all others.',
      },
      {
        text: 'The performer demonstrated criterion mastery because percentile rank exceeded 50.',
        feedback: 'Percentile rank alone does not establish criterion-referenced mastery.',
      },
      {
        text: 'The performer scored at or above about 70 percent of the reference group.',
        feedback: 'This captures percentile meaning as relative standing in a defined group.',
      },
    ],
    correctIndex: 3,
    hint: 'Separate relative standing from criterion mastery and percent correct.',
    xp: 10,
  },
  {
    id: 'm4-visualization-check',
    marker: 'Quick check 4',
    title: 'Visual display without overclaiming',
    context: {
      adventure: 'You are preparing a figure comparing pre, post, and delayed route decision scores.',
      'physical-education': 'You are preparing a figure comparing unit checkpoints across classes.',
      'allied-health': 'You are preparing a figure comparing repeated functional task scores.',
      'exercise-physiology': 'You are preparing a figure comparing repeated protocol outcomes.',
    },
    prompt: 'Which reporting move best avoids overclaiming from visuals?',
    options: [
      {
        text: 'Show center and spread clearly, then state limits of causal inference.',
        feedback: 'This keeps description faithful and avoids implying unsupported causation.',
      },
      {
        text: 'Use a truncated axis to magnify small differences and strengthen the intervention narrative.',
        feedback: 'Truncated axes can exaggerate differences and mislead interpretation.',
      },
      {
        text: 'Hide lower-performing observations so the class trend appears more stable.',
        feedback: 'Omitting data distorts the distribution and weakens trustworthiness.',
      },
      {
        text: 'Use only a trend line and remove all raw points to simplify the figure.',
        feedback: 'Trend lines can help, but removing distribution details can hide important variation.',
      },
    ],
    correctIndex: 0,
    hint: 'Represent pattern and uncertainty, not just a preferred story.',
    xp: 10,
  },
  {
    id: 'm4-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer descriptive reasoning',
    context: {
      adventure: 'Apply your interpretation approach to a PE class with equal means but different score spread.',
      'physical-education': 'Apply your interpretation approach to an allied health lab with skewed repeated scores.',
      'allied-health': 'Apply your interpretation approach to exercise physiology data with equal means and differing SD.',
      'exercise-physiology': 'Apply your interpretation approach to adventure data with outliers and delayed retention scores.',
    },
    prompt: 'Which response best transfers sound descriptive practice?',
    options: [
      {
        text: 'Choose one statistic only and avoid all discussion of distribution shape or spread.',
        feedback: 'Single-statistic summaries can hide key pattern features needed for interpretation.',
      },
      {
        text: 'Treat any increase in mean as proof of meaningful improvement for every individual.',
        feedback: 'Group means do not guarantee individual-level meaningful change.',
      },
      {
        text: 'Describe center, spread, and shape before proposing explanations.',
        feedback: 'This sequence preserves what data show before moving to causes or actions.',
      },
      {
        text: 'Use percentile rank as the only summary for criterion-based instructional decisions.',
        feedback: 'Percentiles are norm-referenced and do not replace criterion-focused evidence.',
      },
    ],
    correctIndex: 2,
    hint: 'Keep the descriptive foundation broad enough to support later decisions.',
    xp: 15,
  },
  {
    id: 'm4-decision-challenge',
    marker: 'Decision Challenge',
    title: 'From description to cautious conclusion',
    context: {
      adventure:
        'A cohort mean improved slightly across field simulations, but variation increased and a few participants regressed on delayed tasks.',
      'physical-education':
        'Class mean game performance rose modestly, but spread widened and delayed checks show uneven persistence.',
      'allied-health':
        'Average functional communication scores improved, but dispersion increased and delayed scores show mixed maintenance.',
      'exercise-physiology':
        'Mean protocol outcomes improved, but standard deviation increased and delayed retests show mixed stability.',
    },
    prompt: 'Which conclusion is most defensible now?',
    options: [
      {
        text: 'The program succeeded uniformly because average results improved from baseline.',
        feedback: 'Mean improvement alone does not support uniform success when spread and delayed results are mixed.',
      },
      {
        text: 'Results suggest improvement for some, with heterogeneity needing targeted follow-up.',
        feedback: 'This respects center and spread evidence while avoiding overgeneralization.',
      },
      {
        text: 'All change is random noise because variation increased across reassessments.',
        feedback: 'Increased variation does not prove all observed change is random.',
      },
      {
        text: 'Delayed regressions can be ignored because immediate post scores are always more valid.',
        feedback: 'Delayed evidence is directly relevant for persistence interpretations and should be integrated.',
      },
    ],
    correctIndex: 1,
    hint: 'Use the full pattern, not just the average shift.',
    xp: 25,
  },
];

const module5Templates: ActivityTemplate[] = [
  {
    id: 'm5-pathway-case',
    marker: 'Pathway case',
    title: 'Quality and fairness together',
    context: {
      adventure:
        'A field leadership assessment has clear criteria, but raters disagree frequently and some participants face avoidable language barriers in instructions.',
      'physical-education':
        'A game-performance assessment has clear criteria, but scorer disagreement is high and some students face avoidable access barriers.',
      'allied-health':
        'A functional communication assessment has intended criteria, but scoring inconsistency and avoidable access barriers are present.',
      'exercise-physiology':
        'A protocol interpretation assessment has intended criteria, but scorer inconsistency and avoidable access barriers remain.',
    },
    prompt: 'Which action set best addresses objectivity and fairness while preserving construct?',
    options: [
      {
        text: 'Lower standards for selected learners so score distributions become more equal.',
        feedback: 'Changing construct expectations can undermine validity rather than improve fairness.',
      },
      {
        text: 'Keep barriers unchanged and rely on professional intuition to offset inequities.',
        feedback: 'Unremoved irrelevant barriers can bias opportunity to demonstrate intended performance.',
      },
      {
        text: 'Eliminate scoring criteria entirely to avoid disagreement among raters in high-stakes decisions.',
        feedback: 'Removing criteria reduces transparency and can worsen inconsistency.',
      },
      {
        text: 'Clarify anchors, calibrate raters, and remove barriers without changing the target.',
        feedback: 'This supports objectivity and equitable access while preserving what is intended to be measured.',
      },
    ],
    correctIndex: 3,
    hint: 'Fairness removes irrelevant barriers, not the construct itself.',
    xp: 15,
  },
  {
    id: 'm5-reliability-check',
    marker: 'Quick check 1',
    title: 'Reliability interpretation',
    context: {
      adventure: 'Repeated scores show inconsistent fluctuations under similar conditions.',
      'physical-education': 'Repeated class scores fluctuate substantially under similar procedures.',
      'allied-health': 'Repeated section scores fluctuate under comparable administration conditions.',
      'exercise-physiology': 'Repeated protocol scores fluctuate under similar test procedures.',
    },
    prompt: 'What does low reliability most directly threaten?',
    options: [
      {
        text: 'Any possibility of valid interpretation in all contexts forever.',
        feedback: 'Reliability concerns dependability; validity judgments are broader and context-specific.',
      },
      {
        text: 'Interpretive confidence that score differences reflect true performance differences.',
        feedback: 'Low reliability weakens confidence that observed differences are dependable.',
      },
      {
        text: 'Need for fairness considerations, because reliability already captures equity issues fully.',
        feedback: 'Fairness and accessibility remain distinct considerations.',
      },
      {
        text: 'Usefulness of criterion statements, because clear criteria cause random variation by design.',
        feedback: 'Clear criteria usually help reduce, not cause, random inconsistency.',
      },
    ],
    correctIndex: 1,
    hint: 'Ask whether observed differences are stable enough to trust.',
    xp: 10,
  },
  {
    id: 'm5-validity-check',
    marker: 'Quick check 2',
    title: 'Validity as interpretation evidence',
    context: {
      adventure: 'A route-planning score is used to make broad claims about all leadership skills.',
      'physical-education': 'A skill score is used to claim complete game intelligence across contexts.',
      'allied-health': 'A single functional task score is used to claim universal communication competence.',
      'exercise-physiology': 'A single protocol score is used to claim broad performance capacity across all conditions.',
    },
    prompt: 'Which critique best reflects validity reasoning?',
    options: [
      {
        text: 'One score can represent all related abilities when the test has clear administration rules.',
        feedback: 'Administration quality helps, but broad interpretation still needs construct-relevant evidence.',
      },
      {
        text: 'Validity is fixed by design and does not depend on population or decision context.',
        feedback: 'Validity arguments are use-specific and context-sensitive.',
      },
      {
        text: 'Interpretation should stay bounded to what the task and evidence can support.',
        feedback: 'Validity concerns whether evidence supports the intended interpretation and use.',
      },
      {
        text: 'Validity is unnecessary if reliability is high and raters agree closely on scores.',
        feedback: 'Reliable scores can still support weak or overextended interpretations.',
      },
    ],
    correctIndex: 2,
    hint: 'Interpretation scope should not exceed evidence scope.',
    xp: 10,
  },
  {
    id: 'm5-error-check',
    marker: 'Quick check 3',
    title: 'Measurement error and SEM',
    context: {
      adventure: 'Two participants differ by a very small score amount near the expected error band.',
      'physical-education': 'Two students differ by a very small amount close to expected score imprecision.',
      'allied-health': 'Two learners differ by a small amount near anticipated measurement uncertainty.',
      'exercise-physiology': 'Two athletes differ slightly within the expected imprecision range.',
    },
    prompt: 'Which interpretation is most appropriate?',
    options: [
      {
        text: 'The small difference may be within expected error and not dependable.',
        feedback: 'Measurement error limits confidence in very small observed differences.',
      },
      {
        text: 'The higher score proves clearly superior performance with negligible uncertainty.',
        feedback: 'Small differences near expected error should be interpreted cautiously.',
      },
      {
        text: 'Error bands apply only to group means, never to interpretation of individual scores.',
        feedback: 'Uncertainty can be relevant for both individual and group interpretations.',
      },
      {
        text: 'Any uncertainty means the tool should never be used for instructional decisions.',
        feedback: 'All measures include uncertainty; the key is proportional and transparent use.',
      },
    ],
    correctIndex: 0,
    hint: 'Small score gaps near error bands warrant guarded conclusions.',
    xp: 10,
  },
  {
    id: 'm5-fairness-check',
    marker: 'Quick check 4',
    title: 'Fairness, accessibility, accommodation',
    context: {
      adventure: 'Instruction wording includes avoidable jargon unrelated to the targeted leadership construct.',
      'physical-education': 'Task instructions include unnecessary language complexity unrelated to movement construct.',
      'allied-health': 'Assessment directions include avoidable barriers unrelated to communication performance targets.',
      'exercise-physiology': 'Protocol instructions include avoidable barriers unrelated to interpretation construct targets.',
    },
    prompt: 'Which accommodation principle is most defensible?',
    options: [
      {
        text: 'Reduce core construct demands for all learners so outcomes are more evenly distributed.',
        feedback: 'Changing core demands can alter what is being assessed.',
      },
      {
        text: 'Apply no accommodations because equal treatment always guarantees fairness.',
        feedback: 'Fairness is equitable opportunity, not identical conditions regardless of barrier relevance.',
      },
      {
        text: 'Allow any modification requested even if it changes the construct being measured.',
        feedback: 'Accommodation should remove irrelevant barriers, not shift the construct target.',
      },
      {
        text: 'Modify irrelevant delivery barriers while preserving the intended construct demands.',
        feedback: 'This aligns with fairness by supporting equitable access without changing construct target.',
      },
    ],
    correctIndex: 3,
    hint: 'Equitable access and construct preservation must both hold.',
    xp: 10,
  },
  {
    id: 'm5-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer quality reasoning',
    context: {
      adventure: 'Transfer your quality review approach to exercise physiology protocol interpretations.',
      'physical-education': 'Transfer your quality review approach to allied health functional communication tasks.',
      'allied-health': 'Transfer your quality review approach to adventure leadership readiness tasks.',
      'exercise-physiology': 'Transfer your quality review approach to physical education tactical assessments.',
    },
    prompt: 'Which review question best transfers across fields?',
    options: [
      {
        text: 'Are outcomes high enough to skip reliability and fairness checks this term?',
        feedback: 'Strong outcomes do not remove the need for quality and fairness evaluation.',
      },
      {
        text: 'Do scores align with the construct, and what uncertainty limits claims?',
        feedback: 'This integrates validity and measurement error concerns for any field context.',
      },
      {
        text: 'Can one coefficient settle all interpretation and equity concerns permanently?',
        feedback: 'Single metrics cannot settle all quality and fairness questions.',
      },
      {
        text: 'Can we prioritize convenience over comparability when workload is heavy?',
        feedback: 'Convenience should not displace minimum quality checks for consequential decisions.',
      },
    ],
    correctIndex: 1,
    hint: 'A transferable quality check should connect construct, consistency, and uncertainty.',
    xp: 15,
  },
  {
    id: 'm5-decision-challenge',
    marker: 'Decision Challenge',
    title: 'Quality-bound recommendation',
    context: {
      adventure:
        'Recent scores suggest improvement, but rater agreement is moderate, small differences sit near error thresholds, and barriers in task instructions may have affected some participants.',
      'physical-education':
        'Recent scores rose, but scorer consistency is uneven, many differences are near error bands, and avoidable instruction barriers remain.',
      'allied-health':
        'Recent scores improved, but agreement is uneven, small differences are near expected error, and accessibility barriers are still present.',
      'exercise-physiology':
        'Recent scores improved, but scorer agreement varies, many changes are near expected imprecision, and avoidable barriers remain in directions.',
    },
    prompt: 'Which recommendation is most defensible now?',
    options: [
      {
        text: 'Issue irreversible high-stakes decisions immediately because means increased.',
        feedback: 'Quality limits and fairness concerns make irreversible decisions premature.',
      },
      {
        text: 'Discard all evidence and restart the course because uncertainty exists in every measure.',
        feedback: 'Uncertainty is normal; the response should be proportionate, not absolute reset.',
      },
      {
        text: 'Use provisional decisions, improve scoring and access, and reassess key cases.',
        feedback: 'This matches evidence strength and uncertainty while improving fairness and comparability.',
      },
      {
        text: 'Replace performance evidence with attendance and effort ratings for final conclusions.',
        feedback: 'Attendance and effort alone do not represent the target construct sufficiently.',
      },
    ],
    correctIndex: 2,
    hint: 'Action strength should match evidence strength and quality limits.',
    xp: 25,
  },
];

const module6Templates: ActivityTemplate[] = [
  {
    id: 'm6-pathway-case',
    marker: 'Pathway case',
    title: 'Repeated measurement logic',
    context: {
      adventure:
        'Route-adaptation scores improved modestly across two field sessions, but weather differed and participants reported fatigue on the second day.',
      'physical-education':
        'Game-skill scores improved slightly across two class checks, but schedule timing differed and students reported fatigue on retest day.',
      'allied-health':
        'Functional communication scores rose slightly across two checks, but setting conditions differed and learners reported fatigue at reassessment.',
      'exercise-physiology':
        'Protocol outcomes improved slightly across two tests, but testing conditions differed and athletes reported fatigue on retest.',
    },
    prompt: 'Which interpretation is most defensible before claiming true change?',
    options: [
      {
        text: 'Any increase confirms true change, even with condition and state differences.',
        feedback: 'Condition shifts and fatigue can influence observed scores apart from true change.',
      },
      {
        text: 'Hold conditions comparable and evaluate whether change exceeds expected variation.',
        feedback: 'Comparable conditions and uncertainty thresholds are central for repeated-measure interpretation.',
      },
      {
        text: 'Ignore participant state because fatigue effects are irrelevant to repeated measurement.',
        feedback: 'Fatigue can meaningfully affect reassessment scores and interpretation.',
      },
      {
        text: 'Use only the better score because it is likely closest to true capability.',
        feedback: 'Selecting a favorable single score can bias interpretation.',
      },
    ],
    correctIndex: 1,
    hint: 'Before concluding change, reduce alternative explanations tied to conditions.',
    xp: 15,
  },
  {
    id: 'm6-comparability-check',
    marker: 'Quick check 1',
    title: 'Comparable conditions',
    context: {
      adventure: 'Session A used clear scripted prompts; Session B used open coaching during the assessment.',
      'physical-education': 'Class A used one demonstration script; Class B used a different cueing style during scoring.',
      'allied-health': 'Lab A used one standardized setup script; Lab B used ad hoc prompting while scoring.',
      'exercise-physiology': 'Test A used one protocol script; Test B used different pacing prompts during measurement.',
    },
    prompt: 'Why is this a concern for interpreting score change?',
    options: [
      {
        text: 'Procedural differences can create score differences unrelated to true change.',
        feedback: 'Non-comparable administration introduces alternative explanations for observed changes.',
      },
      {
        text: 'Different prompts mainly affect fairness, not repeated-measure interpretation.',
        feedback: 'Fairness matters, and comparability directly affects change interpretation too.',
      },
      {
        text: 'Prompt differences are acceptable if endpoint mean scores still increase.',
        feedback: 'Mean increases do not remove comparability concerns in repeated measurement.',
      },
      {
        text: 'Procedure differences always inflate scores, so decline can be ignored as random noise.',
        feedback: 'Direction and magnitude of effect are not guaranteed and must be interpreted cautiously.',
      },
    ],
    correctIndex: 0,
    hint: 'If procedure changes, score changes can reflect procedure rather than learning.',
    xp: 10,
  },
  {
    id: 'm6-variation-check',
    marker: 'Quick check 2',
    title: 'Ordinary variation and error',
    context: {
      adventure: 'A participant\'s score changed by a very small margin between similar sessions.',
      'physical-education': 'A student\'s score changed minimally between comparable class checks.',
      'allied-health': 'A learner\'s score shifted slightly between comparable functional checks.',
      'exercise-physiology': 'An athlete\'s score shifted minimally across comparable tests.',
    },
    prompt: 'Which statement best reflects ordinary variation reasoning?',
    options: [
      {
        text: 'Any nonzero change confirms intervention success for this individual.',
        feedback: 'Nonzero differences can occur from ordinary variation and error.',
      },
      {
        text: 'Error concepts apply only to population studies, not individual repeated scores.',
        feedback: 'Error and uncertainty can matter in individual repeated interpretation.',
      },
      {
        text: 'Small changes can reflect expected fluctuation and not dependable true change.',
        feedback: 'Observed differences may sit within expected noise, so caution is appropriate.',
      },
      {
        text: 'A slight decline always disproves learning regardless of comparability evidence.',
        feedback: 'Single small declines can occur even when learning occurred; context matters.',
      },
    ],
    correctIndex: 2,
    hint: 'Dependable change asks whether difference rises above expected noise.',
    xp: 10,
  },
  {
    id: 'm6-practice-fatigue-check',
    marker: 'Quick check 3',
    title: 'Practice and fatigue effects',
    context: {
      adventure: 'Participants repeat the same scenario within a short interval and report tiredness on trial two.',
      'physical-education': 'Students repeat the same task quickly and show signs of fatigue on retest.',
      'allied-health': 'Learners repeat a functional assessment quickly and report fatigue by the second attempt.',
      'exercise-physiology': 'Athletes repeat protocol exposure in close sequence and report fatigue on second trial.',
    },
    prompt: 'How should practice and fatigue be treated in interpretation?',
    options: [
      {
        text: 'Practice effects matter only for cognitive tests, while fatigue affects only endurance tests.',
        feedback: 'Both effects can appear across many performance domains and procedures.',
      },
      {
        text: 'Practice and fatigue cancel each other by default, so no adjustment is needed.',
        feedback: 'Their effects are not guaranteed to cancel and can vary across individuals and tasks.',
      },
      {
        text: 'Any improvement after retest must be true learning because repeat exposure controls error.',
        feedback: 'Repeat exposure can itself change scores without true construct change.',
      },
      {
        text: 'Both can affect scores independently of underlying change and should be considered.',
        feedback: 'Repeated testing itself can shift observed scores through familiarity or fatigue effects.',
      },
    ],
    correctIndex: 3,
    hint: 'Repeated exposure can alter performance for reasons besides real change.',
    xp: 10,
  },
  {
    id: 'm6-mdc-mid-check',
    marker: 'Quick check 4',
    title: 'MDC versus MID',
    context: {
      adventure: 'Observed change exceeds expected error threshold but stakeholders debate practical importance.',
      'physical-education': 'Score change exceeds measurement error threshold but practical value remains uncertain.',
      'allied-health': 'Change exceeds dependable-change threshold but meaningful impact is still debated.',
      'exercise-physiology': 'Change exceeds detectability threshold while practical relevance is still questioned.',
    },
    prompt: 'Which statement correctly distinguishes MDC and MID?',
    options: [
      {
        text: 'MDC and MID are interchangeable labels for the same practical-change decision rule.',
        feedback: 'They are related but not interchangeable constructs.',
      },
      {
        text: 'MDC asks whether change exceeds expected error; MID asks whether it matters in practice.',
        feedback: 'These thresholds answer different questions and can disagree in the same case.',
      },
      {
        text: 'MID is always smaller than MDC because meaningfulness requires less evidence than detectability.',
        feedback: 'Relative size can vary by context and decision consequences.',
      },
      {
        text: 'MDC establishes causation, while MID establishes fairness and accessibility directly.',
        feedback: 'Neither threshold by itself establishes causation or fairness.',
      },
    ],
    correctIndex: 1,
    hint: 'One threshold is about dependable signal; the other is about practical significance.',
    xp: 10,
  },
  {
    id: 'm6-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer repeated-measure logic',
    context: {
      adventure: 'Apply repeated-measure reasoning to allied health communication change data.',
      'physical-education': 'Apply repeated-measure reasoning to exercise physiology protocol change data.',
      'allied-health': 'Apply repeated-measure reasoning to physical education tactical performance data.',
      'exercise-physiology': 'Apply repeated-measure reasoning to adventure leadership adaptation data.',
    },
    prompt: 'Which plan best supports a defensible change claim?',
    options: [
      {
        text: 'Use comparable conditions, check practice or fatigue effects, and compare to thresholds.',
        feedback: 'This plan addresses core threats to repeated-measure interpretation across settings.',
      },
      {
        text: 'Use whichever trial is highest because it likely reflects best true ability across contexts.',
        feedback: 'Cherry-picking the best score can misrepresent dependable change.',
      },
      {
        text: 'Use group averages only and avoid individual uncertainty discussions for simplicity.',
        feedback: 'Individual uncertainty can matter for individual-level decisions.',
      },
      {
        text: 'Ignore delayed checks because immediate post changes are sufficient for all decisions.',
        feedback: 'Delayed evidence can be essential for persistence and transfer interpretations.',
      },
    ],
    correctIndex: 0,
    hint: 'The strongest transfer plan controls conditions and interprets uncertainty explicitly.',
    xp: 15,
  },
  {
    id: 'm6-decision-challenge',
    marker: 'Decision Challenge',
    title: 'Dependable versus meaningful change',
    context: {
      adventure:
        'A participant improved modestly under comparable conditions. The change is near the detectability threshold and may not yet alter field readiness decisions.',
      'physical-education':
        'A student improved modestly under comparable checks. The change is near detectability and may not yet alter readiness decisions.',
      'allied-health':
        'A learner improved slightly under comparable checks. The change is near dependable threshold and practical significance is uncertain.',
      'exercise-physiology':
        'An athlete improved modestly under comparable tests. The change is near detectability and practical impact remains uncertain.',
    },
    prompt: 'Which next step is most defensible?',
    options: [
      {
        text: 'Declare full success immediately because any improvement proves meaningful change.',
        feedback: 'Meaningfulness requires contextual judgment, not any nonzero improvement.',
      },
      {
        text: 'Declare no change permanently because one threshold was not clearly exceeded.',
        feedback: 'One ambiguous result should not force a permanent conclusion.',
      },
      {
        text: 'Use a provisional call, continue targeted practice, and reassess under comparable conditions.',
        feedback: 'This balances uncertainty with action and seeks stronger evidence before stronger claims.',
      },
      {
        text: 'Switch to a different construct so larger score changes can be shown more easily to stakeholders.',
        feedback: 'Changing construct to force larger differences undermines assessment integrity.',
      },
    ],
    correctIndex: 2,
    hint: 'When detectability and meaningfulness are uncertain, keep decisions proportionate and transparent.',
    xp: 25,
  },
];

const module7Templates: ActivityTemplate[] = [
  {
    id: 'm7-pathway-case',
    marker: 'Pathway case',
    title: 'Relationship claims and limits',
    context: {
      adventure:
        'In field data, participants with higher planning scores also tend to have better route outcomes. Some instructors want to claim planning score causes route success.',
      'physical-education':
        'In class data, students with higher tactical quiz scores tend to perform better in game tasks. Some want to claim quiz scores cause game performance.',
      'allied-health':
        'In lab data, learners with better communication ratings tend to show better functional task outcomes. Some want to claim one score causes the other.',
      'exercise-physiology':
        'In testing data, athletes with higher conditioning profiles tend to score better on protocol outcomes. Some want to claim direct causation.',
    },
    prompt: 'Which interpretation is most defensible?',
    options: [
      {
        text: 'Causation is confirmed when relationship strength is moderate or higher.',
        feedback: 'Strength of association does not prove causal mechanism or direction.',
      },
      {
        text: 'No interpretation is possible unless correlation equals exactly plus one or minus one.',
        feedback: 'Useful interpretation exists across many strengths; perfect relationships are not required.',
      },
      {
        text: 'Association is present, but causation is not established by correlation alone.',
        feedback: 'Correlation describes covariation and does not by itself establish causal direction.',
      },
      {
        text: 'Correlation and agreement are equivalent, so either can justify causal claims.',
        feedback: 'Agreement and correlation are distinct concepts and neither alone proves causation.',
      },
    ],
    correctIndex: 2,
    hint: 'Covariation can inform interpretation without proving cause.',
    xp: 15,
  },
  {
    id: 'm7-direction-strength-check',
    marker: 'Quick check 1',
    title: 'Direction and strength',
    context: {
      adventure: 'As planning-quality scores rise, route error counts generally fall.',
      'physical-education': 'As tactical awareness scores rise, turnover counts generally fall.',
      'allied-health': 'As instruction-clarity ratings rise, communication error counts generally fall.',
      'exercise-physiology': 'As pacing-control scores rise, protocol error counts generally fall.',
    },
    prompt: 'How is this relationship direction best described?',
    options: [
      {
        text: 'Positive, because both variables move in opposite numeric directions.',
        feedback: 'Opposite movement direction indicates negative association, not positive.',
      },
      {
        text: 'Curvilinear only, because any decrease in one variable rules out a linear relation pattern.',
        feedback: 'A decreasing trend can still be linear and interpretable as negative correlation.',
      },
      {
        text: 'No relationship, because one variable is a count rather than a continuous score.',
        feedback: 'Counts can still be part of interpretable relationships when assumptions are considered.',
      },
      {
        text: 'Negative, because higher values in one measure pair with lower values in the other.',
        feedback: 'This is the defining pattern of a negative relationship direction.',
      },
    ],
    correctIndex: 3,
    hint: 'Watch whether variables tend to move together or in opposite directions.',
    xp: 10,
  },
  {
    id: 'm7-third-variable-check',
    marker: 'Quick check 2',
    title: 'Third-variable reasoning',
    context: {
      adventure: 'Participants with more prior field hours score higher on both planning and route outcomes.',
      'physical-education': 'Students with more prior club experience score higher on both quiz and game outcomes.',
      'allied-health': 'Learners with more prior practicum exposure score higher on both communication and task outcomes.',
      'exercise-physiology': 'Athletes with longer training history score higher on both conditioning and protocol outcomes.',
    },
    prompt: 'What is the most plausible third-variable caution?',
    options: [
      {
        text: 'The relationship must be causal because both measures improved in the same direction.',
        feedback: 'Shared direction can still arise from a third variable affecting both measures.',
      },
      {
        text: 'Prior experience may partly explain the association between the two measures.',
        feedback: 'Shared prior experience can create or inflate observed relationships.',
      },
      {
        text: 'Third variables matter only when correlation is exactly zero.',
        feedback: 'Third-variable concerns are important at many nonzero relationship strengths.',
      },
      {
        text: 'Third-variable reasoning is irrelevant once sample size exceeds twenty participants.',
        feedback: 'Larger samples improve precision but do not remove confounding concerns.',
      },
    ],
    correctIndex: 1,
    hint: 'Ask what else could influence both variables at the same time.',
    xp: 10,
  },
  {
    id: 'm7-generalizability-check',
    marker: 'Quick check 3',
    title: 'Generalizability bounds',
    context: {
      adventure: 'Evidence comes from one cohort in one terrain type with one instructor team.',
      'physical-education': 'Evidence comes from one grade level in one school with one teacher team.',
      'allied-health': 'Evidence comes from one lab section in one program with one instructional setup.',
      'exercise-physiology': 'Evidence comes from one training group under one protocol and staff team.',
    },
    prompt: 'Which claim best respects generalizability limits?',
    options: [
      {
        text: 'Findings are useless outside this exact group and should never inform future work.',
        feedback: 'Findings can inform future work cautiously without universal claims.',
      },
      {
        text: 'Findings support cautious use in similar contexts, with replication needed for wider claims.',
        feedback: 'This bounds claims to represented conditions and calls for broader evidence.',
      },
      {
        text: 'Findings are universal across all settings, tasks, and populations by default.',
        feedback: 'Scope should be bounded by represented samples, tasks, and conditions.',
      },
      {
        text: 'Generalizability is guaranteed when average scores improve over time.',
        feedback: 'Average improvement does not establish broad external applicability.',
      },
    ],
    correctIndex: 0,
    hint: 'Scope of inference should mirror scope of evidence.',
    xp: 10,
  },
  {
    id: 'm7-transfer-check',
    marker: 'Quick check 4',
    title: 'Near versus far transfer',
    context: {
      adventure: 'Learners apply route-planning principles in a similar trail network, then in an unfamiliar winter context.',
      'physical-education': 'Students apply tactical principles in a similar game format, then in a different sport context.',
      'allied-health': 'Learners apply communication principles in similar tasks, then in substantially different settings.',
      'exercise-physiology': 'Athletes apply pacing principles in a similar protocol, then in a different performance context.',
    },
    prompt: 'Which statement best distinguishes near and far transfer?',
    options: [
      {
        text: 'Near transfer uses identical tasks; far transfer means no shared principles are present between contexts.',
        feedback: 'Near transfer includes similar but not identical contexts; far transfer still uses shared principles.',
      },
      {
        text: 'Far transfer is proven whenever scores improve after any amount of delay.',
        feedback: 'Delay relates to retention; transfer concerns application across contexts or tasks.',
      },
      {
        text: 'Near transfer applies learning in similar contexts; far transfer applies it in different ones.',
        feedback: 'This captures the core distinction while preserving common underlying principles.',
      },
      {
        text: 'Near and far transfer are interchangeable labels for repeated measurement only.',
        feedback: 'Transfer concerns cross-context application, not just repeated measurement timing.',
      },
    ],
    correctIndex: 2,
    hint: 'Focus on similarity of context and demands, not just timing.',
    xp: 10,
  },
  {
    id: 'm7-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer relationship caution',
    context: {
      adventure: 'Apply relationship reasoning to allied health functional data with modest correlation.',
      'physical-education': 'Apply relationship reasoning to exercise physiology data with strong association.',
      'allied-health': 'Apply relationship reasoning to physical education tactical-performance data.',
      'exercise-physiology': 'Apply relationship reasoning to adventure leadership and route data.',
    },
    prompt: 'Which inference best transfers sound reasoning across fields?',
    options: [
      {
        text: 'Strong correlation makes confounding concerns unnecessary in applied interpretation.',
        feedback: 'Confounding concerns remain relevant even with strong relationships.',
      },
      {
        text: 'Weak correlation means both measures are invalid and should be abandoned immediately.',
        feedback: 'Weak association does not automatically imply invalidity of either measure.',
      },
      {
        text: 'Prediction from relationship data should be interpreted as exact certainty for individuals.',
        feedback: 'Prediction carries uncertainty and should be treated as estimate, not certainty.',
      },
      {
        text: 'Association strength can inform prediction, but causal claims need more than correlation.',
        feedback: 'This is transferable reasoning across domains and measurement settings.',
      },
    ],
    correctIndex: 3,
    hint: 'Transfer the distinction between association, prediction, and causation.',
    xp: 15,
  },
  {
    id: 'm7-decision-challenge',
    marker: 'Decision Challenge',
    title: 'Using relationship data responsibly',
    context: {
      adventure:
        'A strong association appears between planning ratings and route outcomes in one cohort. The team is considering a high-stakes policy that uses planning score alone.',
      'physical-education':
        'A strong association appears between tactical quiz scores and game outcomes in one class. The team considers using the quiz alone for high-stakes placement.',
      'allied-health':
        'A strong association appears between communication ratings and task outcomes in one section. The team considers single-score high-stakes decisions.',
      'exercise-physiology':
        'A strong association appears between conditioning scores and protocol outcomes in one group. The team considers single-score high-stakes decisions.',
    },
    prompt: 'Which policy response is most defensible?',
    options: [
      {
        text: 'Use planning score alone because strong correlation proves it causes future performance.',
        feedback: 'Correlation alone does not prove causation or justify one-measure high-stakes policy.',
      },
      {
        text: 'Integrate multiple construct-relevant measures and monitor policy effects over time.',
        feedback: 'This supports stronger decisions while respecting uncertainty and generalizability limits.',
      },
      {
        text: 'Reject all relationship data because associations are never useful in applied settings.',
        feedback: 'Relationship evidence can inform prediction and planning when interpreted carefully.',
      },
      {
        text: 'Apply the policy universally across all contexts because one cohort showed strong association.',
        feedback: 'Generalizability beyond represented settings requires additional evidence.',
      },
    ],
    correctIndex: 1,
    hint: 'Use relationship evidence as one input, not a single deterministic rule.',
    xp: 25,
  },
];

const module8Templates: ActivityTemplate[] = [
  {
    id: 'm8-pathway-case',
    marker: 'Pathway case',
    title: 'Evidence-informed integration',
    context: {
      adventure:
        'You must recommend whether participants are ready for a complex field task using performance observations, knowledge checks, and contextual constraints.',
      'physical-education':
        'You must recommend next instructional placement using game observations, knowledge checks, and class-context constraints.',
      'allied-health':
        'You must recommend next learning progression using functional observations, communication checks, and contextual constraints.',
      'exercise-physiology':
        'You must recommend next training progression using protocol outcomes, interpretation checks, and contextual constraints.',
    },
    prompt: 'Which decision process is most evidence-informed?',
    options: [
      {
        text: 'Integrate relevant evidence, state uncertainty, and align action with consequence level.',
        feedback: 'This reflects transparent, proportional, and construct-aligned decision making.',
      },
      {
        text: 'Select the highest score available and treat it as decisive because it shows peak capability.',
        feedback: 'Single favorable scores can overstate confidence and ignore conflicting evidence.',
      },
      {
        text: 'Use only contextual constraints and avoid score interpretation to reduce bias risk.',
        feedback: 'Context matters, but ignoring assessment evidence weakens decision defensibility.',
      },
      {
        text: 'Use one preferred metric and omit uncertainty language to increase stakeholder confidence.',
        feedback: 'Omitting uncertainty can create false certainty and weak transparency.',
      },
    ],
    correctIndex: 0,
    hint: 'A strong rationale names both evidence and limits.',
    xp: 15,
  },
  {
    id: 'm8-source-integration-check',
    marker: 'Quick check 1',
    title: 'Construct-relevant source integration',
    context: {
      adventure: 'You have field observations, a brief knowledge quiz, and self-reflection logs.',
      'physical-education': 'You have game observations, a tactical quiz, and student reflections.',
      'allied-health': 'You have functional observations, communication checks, and learner reflections.',
      'exercise-physiology': 'You have protocol outcomes, interpretation checks, and athlete reflections.',
    },
    prompt: 'Which integration rule is strongest?',
    options: [
      {
        text: 'Treat all sources as measuring exactly the same construct and average them directly.',
        feedback: 'Different sources often represent different constructs and should not be collapsed blindly.',
      },
      {
        text: 'Weight each source by construct relevance and quality for the specific decision.',
        feedback: 'Evidence integration should reflect what each source can support for this decision.',
      },
      {
        text: 'Use only self-reflection because learner voice should replace all observed evidence.',
        feedback: 'Learner voice adds value, but it usually complements rather than replaces direct evidence.',
      },
      {
        text: 'Use only direct observation and ignore all contextual or reflective evidence.',
        feedback: 'Context and reflection can inform interpretation when bounded appropriately.',
      },
    ],
    correctIndex: 1,
    hint: 'Different evidence types contribute differently to a decision.',
    xp: 10,
  },
  {
    id: 'm8-uncertainty-check',
    marker: 'Quick check 2',
    title: 'Quality and uncertainty communication',
    context: {
      adventure: 'Scores indicate progress, but agreement is moderate and sample size is limited.',
      'physical-education': 'Scores improved, but measurement precision is moderate and evidence is mixed.',
      'allied-health': 'Scores improved, but uncertainty remains due to moderate precision and mixed indicators.',
      'exercise-physiology': 'Scores improved, but uncertainty remains due to moderate reliability and mixed signals.',
    },
    prompt: 'Which reporting statement is best?',
    options: [
      {
        text: 'Results prove the decision with complete certainty and no need for follow-up review.',
        feedback: 'This overstates certainty and ignores known quality limits.',
      },
      {
        text: 'Results are too uncertain to use at all, so no action should be taken.',
        feedback: 'Uncertainty does not always require inaction; proportional action can still be justified.',
      },
      {
        text: 'Results should be reported without uncertainty language to avoid confusing stakeholders.',
        feedback: 'Transparent uncertainty language is part of defensible professional communication.',
      },
      {
        text: 'Results suggest a direction, with uncertainty that should guide action and follow-up.',
        feedback: 'This communicates usable evidence while preserving transparency about limits.',
      },
    ],
    correctIndex: 3,
    hint: 'Communicate both what is supported and what remains uncertain.',
    xp: 10,
  },
  {
    id: 'm8-context-values-check',
    marker: 'Quick check 3',
    title: 'Context, values, and feasibility',
    context: {
      adventure: 'A recommended action has high potential benefit but substantial resource and schedule demands.',
      'physical-education': 'A recommended action has instructional benefit but notable time and staffing limits.',
      'allied-health': 'A recommended action has likely value but practical limits in time and resources.',
      'exercise-physiology': 'A recommended action has possible gain but feasibility limits in staffing and schedule.',
    },
    prompt: 'How should context and values be handled?',
    options: [
      {
        text: 'Ignore context and values because only score data should drive professional decisions.',
        feedback: 'Evidence-informed decisions integrate evidence with context, values, and feasibility.',
      },
      {
        text: 'Use context only when evidence quality is perfect and uncertainty is zero.',
        feedback: 'Context matters in all applied decisions, not only ideal measurement situations.',
      },
      {
        text: 'Integrate context, values, feasibility, and evidence while preserving the construct.',
        feedback: 'This aligns with bounded professional judgment in real settings.',
      },
      {
        text: 'Prioritize convenience over evidence whenever implementation is challenging.',
        feedback: 'Feasibility matters, but convenience alone should not override evidence relevance.',
      },
    ],
    correctIndex: 2,
    hint: 'Professional judgment combines evidence with practical context.',
    xp: 10,
  },
  {
    id: 'm8-proportional-action-check',
    marker: 'Quick check 4',
    title: 'Proportional action principle',
    context: {
      adventure: 'Evidence is promising but mixed for a decision with substantial consequences.',
      'physical-education': 'Evidence is encouraging but mixed for a higher-consequence placement decision.',
      'allied-health': 'Evidence is directionally positive but mixed for a consequential progression decision.',
      'exercise-physiology': 'Evidence is favorable but mixed for a consequential training progression decision.',
    },
    prompt: 'Which action best follows proportionality?',
    options: [
      {
        text: 'Take no action at all until evidence is perfect and contradiction-free.',
        feedback: 'Perfect evidence is rare; proportionate interim action can still be warranted.',
      },
      {
        text: 'Take a reversible step, monitor response, and schedule reassessment.',
        feedback: 'This aligns decision consequence with current confidence level.',
      },
      {
        text: 'Take the most irreversible action now to signal confidence in the assessment process.',
        feedback: 'Irreversible action may exceed what mixed evidence can justify.',
      },
      {
        text: 'Delegate the choice entirely to one metric so rationale discussion is unnecessary.',
        feedback: 'Single-metric delegation weakens transparency and can ignore conflicting evidence.',
      },
    ],
    correctIndex: 0,
    hint: 'Match decision risk to confidence in the evidence base.',
    xp: 10,
  },
  {
    id: 'm8-cross-field-transfer',
    marker: 'Cross-field transfer',
    title: 'Transfer decision transparency',
    context: {
      adventure: 'Apply your decision framework to exercise physiology progression planning.',
      'physical-education': 'Apply your decision framework to allied health functional progression planning.',
      'allied-health': 'Apply your decision framework to adventure readiness planning.',
      'exercise-physiology': 'Apply your decision framework to physical education placement planning.',
    },
    prompt: 'Which rationale structure best transfers across fields?',
    options: [
      {
        text: 'State one preferred conclusion first, then select only evidence that supports it.',
        feedback: 'Selective evidence use undermines transparency and increases confirmation bias risk.',
      },
      {
        text: 'Document evidence sources, quality limits, alternatives, and reassessment plan.',
        feedback: 'This structure keeps reasoning inspectable and supports professional accountability.',
      },
      {
        text: 'Use expert intuition only and avoid documenting uncertainty to keep messaging simple.',
        feedback: 'Professional judgment should be explicit about uncertainty and evidence boundaries.',
      },
      {
        text: 'Prioritize stakeholder preference alone when it conflicts with construct-relevant evidence.',
        feedback: 'Stakeholder values matter, but construct-relevant evidence must remain central.',
      },
    ],
    correctIndex: 1,
    hint: 'Transferable decisions are inspectable decisions.',
    xp: 15,
  },
  {
    id: 'm8-decision-challenge',
    marker: 'Decision Challenge',
    title: 'Integrated, bounded recommendation',
    context: {
      adventure:
        'Evidence sources partly converge on readiness, but quality limitations and contextual constraints remain. Stakeholders request an immediate all-or-nothing decision.',
      'physical-education':
        'Evidence partly converges on readiness, but uncertainty and contextual limits remain. Stakeholders request immediate final placement.',
      'allied-health':
        'Evidence partly converges on progression, but quality and feasibility limits remain. Stakeholders request immediate irreversible action.',
      'exercise-physiology':
        'Evidence partly converges on progression, but uncertainty and context limits remain. Stakeholders request immediate irreversible progression.',
    },
    prompt: 'Which recommendation is most defensible?',
    options: [
      {
        text: 'Approve irreversible action now because partial convergence is enough for certainty.',
        feedback: 'Partial convergence with known limits does not justify certainty-level claims.',
      },
      {
        text: 'Reject any action because uncertainty means evidence cannot inform practice decisions.',
        feedback: 'Evidence can still inform proportionate and reversible action under uncertainty.',
      },
      {
        text: 'Follow stakeholder urgency only and defer all evidence review to a later date.',
        feedback: 'Urgency matters, but bypassing evidence review weakens defensibility.',
      },
      {
        text: 'Take a reversible step, state rationale clearly, and reassess on schedule.',
        feedback: 'This integrates evidence, uncertainty, feasibility, and accountability in a defensible way.',
      },
    ],
    correctIndex: 3,
    hint: 'When evidence is mixed, choose reversible action with explicit rationale and follow-up.',
    xp: 25,
  },
];

const moduleTemplates: Record<AdditionalModuleId, ActivityTemplate[]> = {
  2: module2Templates,
  3: module3Templates,
  4: module4Templates,
  5: module5Templates,
  6: module6Templates,
  7: module7Templates,
  8: module8Templates,
};

function validateModuleTemplates(): void {
  const expectedIds = new Set<AdditionalModuleId>([2, 3, 4, 5, 6, 7, 8]);
  for (const moduleId of expectedIds) {
    const templates = moduleTemplates[moduleId];
    if (templates.length !== 7) {
      throw new Error(`Module ${moduleId} must include exactly 7 activities.`);
    }

    const totalXp = templates.reduce((sum, item) => sum + item.xp, 0);
    if (totalXp !== 95) {
      throw new Error(`Module ${moduleId} must total 95 XP.`);
    }

    const ids = new Set<string>();
    const indexValues = new Set<number>();
    for (let i = 0; i < templates.length; i += 1) {
      const template = templates[i];
      if (!template.id.startsWith(`m${moduleId}-`)) {
        throw new Error(`Activity ${template.id} must use m${moduleId}- prefix.`);
      }
      if (template.xp !== XP_SEQUENCE[i]) {
        throw new Error(`Module ${moduleId} activity index ${i} has unexpected XP value.`);
      }
      if (template.correctIndex < 0 || template.correctIndex > 3) {
        throw new Error(`Module ${moduleId} activity ${template.id} has out-of-range correctIndex.`);
      }
      if (ids.has(template.id)) {
        throw new Error(`Module ${moduleId} has duplicate id: ${template.id}`);
      }
      ids.add(template.id);
      indexValues.add(template.correctIndex);
    }

    if (indexValues.size < 4) {
      throw new Error(`Module ${moduleId} should represent A-D as correct answers across its activity set.`);
    }
  }
}

validateModuleTemplates();

export function getAdditionalModuleActivities(moduleId: AdditionalModuleId, pathwayId: PathwayId): Activity[] {
  return moduleTemplates[moduleId].map((template) => ({
    ...template,
    options: template.options.map((option) => ({ ...option })),
    context: template.context[pathwayId],
  }));
}