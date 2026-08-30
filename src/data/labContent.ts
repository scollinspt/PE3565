import { getAdditionalModuleActivities } from './additionalModuleContent';

export type PathwayId = 'adventure' | 'physical-education' | 'allied-health' | 'exercise-physiology';
export type ModuleId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type Pathway = {
  id: PathwayId;
  label: string;
  shortLabel: string;
  description: string;
  accent: string;
};

export type Activity = {
  id: string;
  marker: string;
  title: string;
  context: string;
  prompt: string;
  options: Array<{ text: string; feedback: string }>;
  correctIndex: number;
  hint: string;
  xp: number;
};

export type ConceptStep = {
  number: string;
  title: string;
  summary: string;
  detail: string;
};

export type LabModule = {
  id: ModuleId;
  title: string;
  timing: string;
  project: string;
  exam: string;
  headline: string;
  description: string;
  conceptLabel: string;
  conceptTitle: string;
  conceptIntro: string;
  concepts: ConceptStep[];
  accomplishment: string;
};

export const pathways: Pathway[] = [
  {
    id: 'adventure',
    label: 'Adventure Education',
    shortLabel: 'Adventure Ed',
    description: 'Leadership, risk judgment, technical skills, and group learning in field settings.',
    accent: '#2f6b45',
  },
  {
    id: 'physical-education',
    label: 'Physical Education',
    shortLabel: 'Physical Ed',
    description: 'Learning, movement skill, participation, and instruction across cognitive, psychomotor, and affective domains.',
    accent: '#126b78',
  },
  {
    id: 'allied-health',
    label: 'Allied Health',
    shortLabel: 'Allied Health',
    description: 'Functional performance, repeated measurement, accessibility, and meaningful change.',
    accent: '#9a4f35',
  },
  {
    id: 'exercise-physiology',
    label: 'Exercise & Sport Physiology',
    shortLabel: 'Exercise Phys',
    description: 'Fitness testing, physiological performance, reference values, and training decisions.',
    accent: '#315da8',
  },
];

export const frameworkSteps: ConceptStep[] = [
  {
    number: '01',
    title: 'What is being assessed?',
    summary: 'Name the intended construct before choosing a tool.',
    detail: 'Ask whether the intended outcome is cognitive, psychomotor, affective, or a clearly defined performance construct.',
  },
  {
    number: '02',
    title: 'When and why?',
    summary: 'Define when evidence is needed and what decision it will support.',
    detail: 'Pre-, post-, and retention timing answer different questions. Formative, summative, and checking-for-understanding uses also differ.',
  },
  {
    number: '03',
    title: 'How is evidence collected?',
    summary: 'Select a tool and approach that fit the intended outcome.',
    detail: 'A checklist, rating scale, rubric, test, or authentic task reveals different aspects of learning and performance.',
  },
  {
    number: '04',
    title: 'How are results interpreted?',
    summary: 'Choose a reference frame and examine the pattern of results.',
    detail: 'Criteria, norms, distributions, variation, standardized scores, relationships, and change each support different interpretations.',
  },
  {
    number: '05',
    title: 'What supports a sound decision?',
    summary: 'Judge whether the evidence is trustworthy, meaningful, fair, and usable.',
    detail: 'Reliability, validity, objectivity, error, fairness, feasibility, and professional judgment limit what a result can justify.',
  },
];

export const reasoningChain = [
  { label: 'Construct', question: 'What matters?', detail: 'The knowledge, skill, ability, disposition, or performance characteristic you want to understand.' },
  { label: 'Indicator', question: 'What could reveal it?', detail: 'An observable behavior, response, product, or performance that could represent the construct.' },
  { label: 'Measurement', question: 'How will it be assessed?', detail: 'The task, instrument, procedure, and scoring method used to collect information.' },
  { label: 'Result', question: 'What was observed?', detail: 'The recorded score, rating, response, or pattern produced by the measurement procedure.' },
  { label: 'Interpretation', question: 'What does it support?', detail: 'A claim about what the result means, bounded by the quality and relevance of the evidence.' },
  { label: 'Decision', question: 'What happens next?', detail: 'An instructional or professional action integrating evidence, purpose, context, and judgment.' },
];

export const modules: LabModule[] = [
  {
    id: 1, title: 'Foundations & Alignment', timing: 'Aug. 31-Sept. 9', project: 'Project foundation', exam: 'Midterm + final',
    headline: 'Make the path from evidence to decision explicit.',
    description: 'Practice the distinctions that make assessment results fair, meaningful, and professionally useful.',
    conceptLabel: 'Assessment framework', conceptTitle: 'Five questions organize the work.',
    conceptIntro: 'Assessment is the gathering and interpretation of evidence to support decisions. Select each question to inspect its role.',
    concepts: frameworkSteps, accomplishment: 'Alignment Analyst',
  },
  {
    id: 2, title: 'Timing, Purpose & Approach', timing: 'Sept. 14-23', project: 'Investigation I', exam: 'Midterm + final',
    headline: 'Collect evidence when it can answer the decision.',
    description: 'Connect baseline, formative, summative, and retention assessment to the distinct decisions each can support.',
    conceptLabel: 'Assessment design', conceptTitle: 'Timing and purpose change the meaning of evidence.',
    conceptIntro: 'The same procedure can serve different purposes. Begin with the decision, then choose when and how to collect evidence.',
    concepts: [
      { number: '01', title: 'Baseline or preassessment', summary: 'Establish the starting point.', detail: 'Evidence collected before instruction or intervention describes initial performance and can guide planning.' },
      { number: '02', title: 'Formative assessment', summary: 'Improve learning while it is developing.', detail: 'Evidence gathered during learning supports feedback, adaptation, and another opportunity to perform.' },
      { number: '03', title: 'Summative assessment', summary: 'Judge performance at a defined endpoint.', detail: 'End-point evidence summarizes achievement for a reporting, grading, readiness, or program decision.' },
      { number: '04', title: 'Retention and transfer', summary: 'Test whether performance lasts or travels.', detail: 'Delayed or changed-context assessment addresses persistence and application beyond the original learning conditions.' },
      { number: '05', title: 'Assessment approach', summary: 'Match the approach to the intended use.', detail: 'Assessment of learning summarizes achievement; assessment for learning guides next steps; assessment as learning develops self-monitoring.' },
    ], accomplishment: 'Purpose Planner',
  },
  {
    id: 3, title: 'Tools & Scoring', timing: 'Sept. 21-30', project: 'Investigation I', exam: 'Midterm + final',
    headline: 'Choose a tool that can represent the intended performance.',
    description: 'Distinguish checklists, rating scales, rubrics, tests, and authentic tasks by the evidence and scoring they produce.',
    conceptLabel: 'Tools and scoring', conceptTitle: 'The tool shapes what can be observed and claimed.',
    conceptIntro: 'Select the procedure and scoring method together so that the recorded result preserves the qualities that matter.',
    concepts: [
      { number: '01', title: 'Checklist', summary: 'Record whether defined elements occur.', detail: 'Checklists support consistent observation of presence or absence but do not by themselves describe quality.' },
      { number: '02', title: 'Rating scale', summary: 'Represent ordered levels of performance.', detail: 'Rating scales add gradation, but each level needs clear anchors to reduce ambiguous judgments.' },
      { number: '03', title: 'Analytic rubric', summary: 'Score important dimensions separately.', detail: 'Analytic criteria preserve a performance profile and support dimension-specific feedback.' },
      { number: '04', title: 'Holistic rubric', summary: 'Judge the performance as an integrated whole.', detail: 'A holistic score is efficient for an overall judgment but provides less diagnostic detail.' },
      { number: '05', title: 'Standardization', summary: 'Make results meaningfully comparable.', detail: 'Consistent instructions, conditions, observation, and scoring reduce unwanted variation in the procedure.' },
    ], accomplishment: 'Evidence Designer',
  },
  {
    id: 4, title: 'Describing Performance', timing: 'Apply Sept. 28-30 · Study Oct. 26', project: 'Investigations I-II', exam: 'Final; midterm if announced',
    headline: 'Describe the pattern before explaining it.',
    description: 'Use distributions, centers, spread, standardized scores, and visual displays without extending beyond the observed data.',
    conceptLabel: 'Describing results', conceptTitle: 'A useful summary preserves the pattern that matters.',
    conceptIntro: 'No single statistic tells the whole story. Choose summaries and displays that fit the distribution and the comparison being made.',
    concepts: [
      { number: '01', title: 'Distribution', summary: 'Inspect the full pattern of results.', detail: 'Shape, clusters, gaps, and unusual values can matter even when two groups have the same average.' },
      { number: '02', title: 'Center', summary: 'Locate a typical or central value.', detail: 'The mean uses every value; the median identifies the midpoint and is less influenced by extreme scores.' },
      { number: '03', title: 'Spread', summary: 'Describe how much results vary.', detail: 'Range, interquartile range, and standard deviation address different aspects of variability.' },
      { number: '04', title: 'Standardized score', summary: 'Express position relative to a reference distribution.', detail: 'A standardized score reports relative location in standard-deviation units; it does not establish mastery or cause.' },
      { number: '05', title: 'Visualization', summary: 'Choose a view that reveals the needed comparison.', detail: 'Tables and graphs are representations of results. Scale, grouping, and omitted observations can change the impression they create.' },
    ], accomplishment: 'Performance Interpreter',
  },
  {
    id: 5, title: 'Quality & Fairness', timing: 'Oct. 19-21', project: 'Investigation II', exam: 'Final',
    headline: 'Judge the evidence before trusting the decision.',
    description: 'Evaluate reliability, validity, objectivity, error, accessibility, and fairness as limits on interpretation and use.',
    conceptLabel: 'Assessment quality', conceptTitle: 'Trustworthy scores require defensible interpretation and use.',
    conceptIntro: 'Quality is not a property established by one coefficient or label. It depends on the evidence, context, population, and decision.',
    concepts: [
      { number: '01', title: 'Reliability', summary: 'Examine consistency for the intended use.', detail: 'Reliable results limit random inconsistency, but consistency alone does not show that the intended construct was assessed.' },
      { number: '02', title: 'Validity', summary: 'Evaluate the interpretation supported by evidence.', detail: 'Validity concerns whether evidence and theory support a particular interpretation and use of scores.' },
      { number: '03', title: 'Objectivity', summary: 'Limit scorer-dependent variation.', detail: 'Clear criteria, training, and agreement checks can make judgments less dependent on who scores the performance.' },
      { number: '04', title: 'Error', summary: 'Recognize uncertainty in every observed score.', detail: 'Observed results include the intended signal and sources of error; precision should match the evidence available.' },
      { number: '05', title: 'Fairness and access', summary: 'Remove irrelevant barriers without changing the construct.', detail: 'Accessible procedures support equitable opportunity to demonstrate the intended outcome while preserving what is being assessed.' },
    ], accomplishment: 'Quality Reviewer',
  },
  {
    id: 6, title: 'Change & Repeated Measurement', timing: 'Oct. 12-28', project: 'Investigation II', exam: 'Final',
    headline: 'Separate observed change from dependable change.',
    description: 'Interpret repeated results using comparable conditions, expected variation, measurement error, and practical importance.',
    conceptLabel: 'Repeated measurement', conceptTitle: 'A difference between scores is a starting point, not a conclusion.',
    conceptIntro: 'Change claims require comparable measurements and a judgment about whether the difference exceeds expected noise and matters in context.',
    concepts: [
      { number: '01', title: 'Comparable conditions', summary: 'Hold irrelevant influences as stable as possible.', detail: 'Changes in instructions, equipment, setting, scorer, or participant state can compete with the explanation of real change.' },
      { number: '02', title: 'Measurement error', summary: 'Expect some score fluctuation without true change.', detail: 'Repeated results vary. A small difference may reflect ordinary imprecision rather than a dependable shift.' },
      { number: '03', title: 'Practice and fatigue', summary: 'Consider effects of repeated testing itself.', detail: 'Familiarity can improve a result and fatigue can reduce it even when the underlying construct has not changed.' },
      { number: '04', title: 'Dependable change', summary: 'Ask whether the difference exceeds expected variation.', detail: 'Statistical or measurement thresholds can strengthen a change claim but still require contextual interpretation.' },
      { number: '05', title: 'Meaningful change', summary: 'Connect magnitude to professional importance.', detail: 'A dependable difference may be too small to matter, while a valued change may remain uncertain when measurement is imprecise.' },
    ], accomplishment: 'Change Analyst',
  },
  {
    id: 7, title: 'Relationships & Transfer', timing: 'Nov. 16', project: 'Investigation II + final', exam: 'Final',
    headline: 'Use relationships carefully and test performance beyond practice.',
    description: 'Interpret association without claiming causation, and distinguish near transfer, far transfer, and generalization across settings.',
    conceptLabel: 'Relationships and transfer', conceptTitle: 'Covariation and transfer answer different questions.',
    conceptIntro: 'A relationship describes how variables vary together. Transfer asks whether learning is expressed under changed tasks, settings, or time.',
    concepts: [
      { number: '01', title: 'Association', summary: 'Describe how two variables vary together.', detail: 'Direction and strength summarize a pattern; neither establishes that one variable caused the other.' },
      { number: '02', title: 'Third variables', summary: 'Consider competing explanations.', detail: 'A shared cause, selection process, or contextual factor can produce or distort an observed relationship.' },
      { number: '03', title: 'Generalizability', summary: 'Bound conclusions to people and conditions represented.', detail: 'Evidence from one sample, task, or setting may not support the same inference elsewhere.' },
      { number: '04', title: 'Near transfer', summary: 'Apply learning in a similar situation.', detail: 'Near-transfer tasks change some features while preserving much of the original structure and demands.' },
      { number: '05', title: 'Far transfer', summary: 'Apply a principle in a substantially different context.', detail: 'Far transfer requires recognizing the underlying idea when surface features and professional conditions change.' },
    ], accomplishment: 'Transfer Reasoner',
  },
  {
    id: 8, title: 'Evidence-Informed Decisions', timing: 'Nov. 9-Dec. 9', project: 'Final project', exam: 'Cumulative final',
    headline: 'Integrate evidence without surrendering professional judgment.',
    description: 'Combine results, quality limits, context, values, feasibility, and consequences into a transparent, bounded recommendation.',
    conceptLabel: 'Decision integration', conceptTitle: 'A defensible decision makes its reasoning inspectable.',
    conceptIntro: 'Evidence informs rather than dictates action. State what is known, what remains uncertain, and why the proposed next step is proportionate.',
    concepts: [
      { number: '01', title: 'Relevant evidence', summary: 'Use each source for the construct it represents.', detail: 'Performance, knowledge, self-report, contextual, and reference evidence contribute differently and should not be collapsed.' },
      { number: '02', title: 'Quality and uncertainty', summary: 'Weight evidence by its strengths and limits.', detail: 'A decision should become more cautious when alignment, reliability, validity, precision, or representativeness is weak.' },
      { number: '03', title: 'Context and values', summary: 'Include goals, resources, access, and stakeholder priorities.', detail: 'Professional decisions occur in real settings where benefits, burdens, feasibility, and values legitimately matter.' },
      { number: '04', title: 'Proportional action', summary: 'Match the consequence to confidence in the evidence.', detail: 'High-stakes or irreversible actions generally require stronger and more convergent support than low-risk formative steps.' },
      { number: '05', title: 'Transparent rationale', summary: 'Make the inferential path open to review.', detail: 'A defensible recommendation names the evidence, assumptions, uncertainty, alternatives, and plan for reassessment.' },
    ], accomplishment: 'Assessment Decision Maker',
  },
];

export const projectStages = [
  {
    number: '01',
    title: 'Describe and compare performance',
    timing: 'Plan Sept. 28-30 · Present Oct. 5-7',
    modules: 'Modules 1-3 + early Module 4 application',
    detail: 'Define a meaningful assessment problem, select and standardize a method, collect initial data, and communicate patterns in performance.',
    result: 'Applied Assessment Investigation I · 15 points',
  },
  {
    number: '02',
    title: 'Evaluate quality and meaningful change',
    timing: 'Develop Oct. 12-28 · Present Nov. 2-4',
    modules: 'Modules 4-6; Module 7 extends this work',
    detail: 'Extend the same investigation with repeated measurements or related variables, then judge variation, reliability, relationships, and meaningful change.',
    result: 'Applied Assessment Investigation II · 15 points',
  },
  {
    number: '03',
    title: 'Make and defend a decision',
    timing: 'Workshops Nov. 16-Dec. 2 · Present Dec. 2-9',
    modules: 'All modules, especially Module 8',
    detail: 'Revise and integrate both investigations, evaluate limitations and fairness, and defend an evidence-informed professional recommendation.',
    result: 'Assessment and Decision Project · 30 points',
  },
];

const pathwayActivities: Record<PathwayId, Activity> = {
  adventure: {
    id: 'pathway-case', marker: 'Your field', title: 'Leadership under observation', xp: 15,
    context: 'An adventure educator wants to assess how well participants lead a group through an unfamiliar challenge-course task.',
    prompt: 'Which evidence is most directly aligned with the intended leadership-performance construct?',
    options: [
      { text: 'A written quiz asking participants to recall the program definitions of effective leadership', feedback: 'The quiz could assess leadership knowledge, but knowing the definitions is not direct evidence of leading a group.' },
      { text: 'A self-rating asking participants how confident they feel when taking responsibility for a group', feedback: 'Confidence may matter, but it is a different construct from demonstrated leadership performance.' },
      { text: 'Observations of planning, communication, adaptation, and group support across unfamiliar tasks', feedback: 'This directly samples leadership behavior across relevant situations rather than relying on a proxy.' },
      { text: 'A count of how often each participant volunteers to stand at the front of the group', feedback: 'Volunteering frequency is observable, but it does not adequately represent the quality of leadership.' },
    ], correctIndex: 2,
    hint: 'Look for evidence that samples the performance itself across more than one opportunity.',
  },
  'physical-education': {
    id: 'pathway-case', marker: 'Your field', title: 'Throwing performance', xp: 15,
    context: 'A physical educator wants to know whether students can apply safe and effective overhand-throw mechanics during play.',
    prompt: 'Which evidence is most directly aligned with the intended movement-performance construct?',
    options: [
      { text: 'A written quiz asking students to identify the critical elements of an overhand throw', feedback: 'This measures knowledge of the skill, not the ability to perform it during play.' },
      { text: 'Observations of critical throwing elements across several game-like tasks', feedback: 'This samples the intended psychomotor performance in relevant conditions and across several attempts.' },
      { text: 'A tally of successful throws completed by each student during one short partner activity', feedback: 'Outcome counts can be useful, but one task may hide technique quality and ordinary performance variation.' },
      { text: 'A survey asking students how confident they feel about throwing during competitive games', feedback: 'Confidence is an affective construct, not direct evidence of throwing mechanics.' },
    ], correctIndex: 1,
    hint: 'Choose the option that directly observes the intended skill in the setting where it should be used.',
  },
  'allied-health': {
    id: 'pathway-case', marker: 'Your field', title: 'Functional balance', xp: 15,
    context: 'An allied health student wants to describe a client’s functional balance while completing a planned mobility task.',
    prompt: 'Which evidence is most directly aligned with the intended functional-performance construct?',
    options: [
      { text: 'A brief interview asking the client to describe situations in which balance feels difficult', feedback: 'Self-report adds useful context, but it is not direct evidence of observed functional balance performance.' },
      { text: 'A measurement of lower-extremity strength collected during an isolated testing procedure', feedback: 'Strength may influence balance, but it is a related construct rather than the intended functional performance.' },
      { text: 'A record of the number of appointments the client attended during the previous month', feedback: 'Attendance may affect opportunity for change but does not measure functional balance.' },
      { text: 'Standardized balance observations during relevant mobility tasks under set conditions', feedback: 'This directly samples functional balance through a consistent procedure in the relevant performance context.' },
    ], correctIndex: 3,
    hint: 'Separate a direct sample of balance performance from related characteristics and contextual information.',
  },
  'exercise-physiology': {
    id: 'pathway-case', marker: 'Your field', title: 'Aerobic performance', xp: 15,
    context: 'An exercise physiologist wants to assess an athlete’s ability to sustain aerobic work under a defined protocol.',
    prompt: 'Which evidence is most directly aligned with the intended aerobic-performance construct?',
    options: [
      { text: 'A standardized sustained-exercise test with relevant performance and physiological measures', feedback: 'This directly samples sustained aerobic work while defining the procedure needed to interpret the result.' },
      { text: 'The athlete’s description of how fit they currently feel compared with teammates', feedback: 'Perceived fitness can provide context, but it is not a direct measurement of aerobic performance.' },
      { text: 'A single resting heart-rate value recorded immediately after the athlete enters the laboratory', feedback: 'Resting heart rate is a measurement, but by itself it does not directly represent sustained aerobic performance.' },
      { text: 'The total number of training sessions the athlete completed during the previous month', feedback: 'Training exposure may help explain performance, but it does not measure the performance construct itself.' },
    ], correctIndex: 0,
    hint: 'Look for a procedure that directly elicits the performance you want to understand.',
  },
};

const commonActivities: Activity[] = [
  {
    id: 'construct-check', marker: 'Quick check 1', title: 'Name the construct', xp: 10,
    context: 'A student completes a timed single-leg stance while an observer records seconds until balance is lost.',
    prompt: 'Which part of this example is the construct?',
    options: [
      { text: 'The timed single-leg stance procedure', feedback: 'That is the measurement procedure used to gather information about the construct.' },
      { text: 'Capacity to maintain postural control', feedback: 'The construct is the underlying characteristic the assessment is intended to represent.' },
      { text: 'The recorded time of 22 seconds', feedback: 'That is an observed result produced by the measurement procedure.' },
      { text: 'The decision to add more balance practice', feedback: 'That is a possible action informed by an interpretation of the evidence.' },
    ], correctIndex: 1,
    hint: 'Ask what underlying ability the procedure is intended to represent.',
  },
  {
    id: 'domain-check', marker: 'Quick check 2', title: 'Match the domain', xp: 10,
    context: 'A learner compares two emergency-action plans and explains which one better protects participants in a given setting.',
    prompt: 'Which learning domain is most directly assessed?',
    options: [
      { text: 'Psychomotor, because emergency response may eventually require coordinated action', feedback: 'The scenario concerns action, but this assessment asks for analysis and justification rather than physical performance.' },
      { text: 'Affective, because safety decisions may reflect responsibility and concern for others', feedback: 'Values may influence the response, but the task directly elicits analysis of plans.' },
      { text: 'Psychomotor, because selecting a plan is an observable response made by the learner', feedback: 'Being observable does not make a response psychomotor; the intended thinking is what matters here.' },
      { text: 'Cognitive, because the learner analyzes information and justifies a judgment', feedback: 'The task directly samples analysis and reasoning, both cognitive outcomes.' },
    ], correctIndex: 3,
    hint: 'Focus on what the learner must demonstrate, not the topic being discussed.',
  },
  {
    id: 'evidence-check', marker: 'Quick check 3', title: 'Result or conclusion?', xp: 10,
    context: 'After instruction, a class mean rises from 68 to 78 on a knowledge assessment.',
    prompt: 'Which statement stays closest to the evidence currently available?',
    options: [
      { text: 'The instruction caused every student to master the intended knowledge', feedback: 'A group mean cannot establish individual mastery or prove that instruction caused the change.' },
      { text: 'The assessment is valid because the class earned a higher score after instruction', feedback: 'Score improvement does not establish that the assessment supports its intended interpretation.' },
      { text: 'The class mean rose 10 points; the cause and meaning of that change remain uncertain', feedback: 'This accurately describes the result while keeping causal and practical conclusions appropriately limited.' },
      { text: 'The class improved meaningfully because any increase in a group average reflects learning', feedback: 'The size, consistency, cause, and practical importance of the change still need evaluation.' },
    ], correctIndex: 2,
    hint: 'Choose the statement that describes what happened without claiming more than the two means show.',
  },
  {
    id: 'alignment-check', marker: 'Quick check 4', title: 'Find the mismatch', xp: 10,
    context: 'The intended outcome is “demonstrate effective communication while leading a group through an unfamiliar problem.”',
    prompt: 'Which assessment is best aligned with that outcome?',
    options: [
      { text: 'Rate communication in unfamiliar group problems using explicit criteria', feedback: 'The task, setting, evidence, and scoring criteria all align with the intended performance.' },
      { text: 'Ask learners to define effective communication on a multiple-choice quiz', feedback: 'This efficiently assesses recognition of knowledge, not communication performance while leading.' },
      { text: 'Count how many times each learner speaks during one familiar group activity', feedback: 'Speaking frequency is too narrow a proxy, and one familiar task provides limited evidence.' },
      { text: 'Let group members select the person they most enjoyed working with', feedback: 'Preference and likability should not substitute for evidence of the intended communication construct.' },
    ], correctIndex: 0,
    hint: 'Match the action verb, performance context, and intended quality in the outcome.',
  },
];

const transferActivities: Record<PathwayId, Activity> = {
  adventure: {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From fieldwork to physical education', xp: 15,
    context: 'A physical educator wants to assess whether students can create space during a small-sided game.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Ask students to label open spaces on a static court diagram after the lesson', feedback: 'This measures recognition on a diagram, not the ability to create space dynamically during play.' },
      { text: 'Record each student’s running speed during an isolated sprint test', feedback: 'Speed may affect play but is distinct from tactical movement decisions.' },
      { text: 'Ask teammates which student appears most athletic during games', feedback: 'A global impression of athleticism is not defined evidence of creating space.' },
      { text: 'Rate timing, position, and responses during several small-sided games', feedback: 'The construct is sampled directly in the context where tactical movement must be used.' },
    ], correctIndex: 3, hint: 'The professional setting changed, but direct alignment still requires sampling the intended performance.',
  },
  'physical-education': {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From the gym to adventure education', xp: 15,
    context: 'An adventure educator wants to assess how participants adapt a route plan when weather and group capacity change.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Ask participants to recall the original route plan from memory before departing', feedback: 'Recall of the original plan does not demonstrate adaptation to changing conditions.' },
      { text: 'Time how quickly participants can pack required equipment into their bags', feedback: 'Packing speed is a separate performance and does not represent adaptive route planning.' },
      { text: 'Assess revised route plans as field conditions change', feedback: 'The task directly elicits adaptive planning under the conditions named in the outcome.' },
      { text: 'Count the number of prior trips each participant has completed with the program', feedback: 'Experience may affect performance, but it is not evidence of the intended adaptive decision-making.' },
    ], correctIndex: 2, hint: 'Preserve the principle: the assessment should require the same kind of thinking or performance as the outcome.',
  },
  'allied-health': {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From function to exercise physiology', xp: 15,
    context: 'An exercise physiologist wants to assess whether students can interpret an athlete’s response to a standardized workload.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Ask students to list the names of common laboratory instruments from memory', feedback: 'Instrument recall is useful knowledge but does not demonstrate interpretation of response data.' },
      { text: 'Provide response data and assess each interpretation and bounded conclusion', feedback: 'The evidence directly samples interpretation of a physiological response, including its limits.' },
      { text: 'Grade students according to how closely their own fitness resembles the athlete’s fitness', feedback: 'A student’s fitness is irrelevant to the intended interpretation outcome.' },
      { text: 'Count the number of data values students can enter into a spreadsheet in one minute', feedback: 'Data-entry speed does not represent the quality of physiological interpretation.' },
    ], correctIndex: 1, hint: 'Look for a task that requires students to perform the interpretation named in the outcome.',
  },
  'exercise-physiology': {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From the laboratory to allied health', xp: 15,
    context: 'An allied health educator wants to assess whether students communicate accessible instructions for a functional task.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Ask students to identify communication terms on a written vocabulary quiz', feedback: 'Terminology knowledge does not establish the ability to communicate accessibly with a learner.' },
      { text: 'Measure how loudly each student can repeat a standard set of task instructions', feedback: 'Volume alone does not represent clarity, adaptation, or confirmation of understanding.' },
      { text: 'Record whether each student attended the lecture about accessible communication', feedback: 'Attendance indicates opportunity to learn, not demonstrated communication performance.' },
      { text: 'Assess how students adapt instructions and confirm learner understanding', feedback: 'The performance directly samples accessible communication and adaptation in a relevant context.' },
    ], correctIndex: 3, hint: 'Direct evidence should require the student to demonstrate accessible communication, not merely know about it.',
  },
};

const decisionActivities: Record<PathwayId, Activity> = {
  adventure: {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'A defensible readiness decision', xp: 25,
    context: 'Before a multi-day field experience, participants explain emergency procedures accurately. During two simulations, however, several fail to communicate changing conditions or adjust the plan. The instructor must decide what happens next.',
    prompt: 'Which decision is best supported by the available evidence?',
    options: [
      { text: 'Approve readiness because accurate explanations establish that participants understand the emergency procedures', feedback: 'Knowledge is relevant, but the observed performance shows that understanding has not yet transferred reliably to simulation.' },
      { text: 'Practice communication and adaptation, then reassess both before deciding readiness', feedback: 'This distinguishes procedural knowledge from demonstrated performance and uses the current evidence formatively before a consequential decision.' },
      { text: 'Deny readiness permanently because two unsuccessful simulations prove the participants cannot adapt in the field', feedback: 'The evidence identifies a current performance need but does not justify a permanent or global conclusion.' },
      { text: 'Ignore the simulations because artificial tasks cannot contribute useful evidence about field performance', feedback: 'Simulations have limitations, but relevant standardized observations can still contribute evidence when interpreted cautiously.' },
    ], correctIndex: 1, hint: 'Separate what participants know from what they demonstrated, then choose an action proportionate to the evidence.',
  },
  'physical-education': {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'Instruction from mixed evidence', xp: 25,
    context: 'Students accurately identify the critical elements of an overhand throw. In repeated game-like observations, many use the elements during unopposed practice but lose them under defensive pressure.',
    prompt: 'Which instructional decision is best supported by the evidence?',
    options: [
      { text: 'Move to a new unit because the knowledge results show that students have mastered the throwing outcome', feedback: 'Knowledge of critical elements does not establish consistent psychomotor performance under the intended conditions.' },
      { text: 'Lower every student’s grade because pressured performance is the only evidence that has educational value', feedback: 'The pressured observations matter, but the available evidence should guide learning before being reduced to a blanket grading decision.' },
      { text: 'Repeat the same written quiz because greater knowledge precision will resolve the performance inconsistency', feedback: 'A more precise knowledge score would not directly address transfer of mechanics into pressured performance.' },
      { text: 'Use pressured practice with focused feedback, then reassess mechanics under comparable conditions', feedback: 'The evidence locates the difficulty in applying known mechanics under pressure and supports targeted instruction followed by comparable reassessment.' },
    ], correctIndex: 3, hint: 'Identify where performance changes, then match the next learning task and reassessment to that condition.',
  },
  'allied-health': {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'A bounded functional conclusion', xp: 25,
    context: 'A client reports greater confidence with mobility. A standardized task score improves slightly, but the difference is within the assessment’s expected measurement error. Observations show better strategy use on one task but not another.',
    prompt: 'Which conclusion is best supported at this point?',
    options: [
      { text: 'Confidence and strategy use improved; overall performance change is not yet established', feedback: 'This integrates multiple sources, respects measurement error, and limits the conclusion to the pattern actually observed.' },
      { text: 'Functional performance has clearly improved because self-reported confidence increased after practice', feedback: 'Confidence is meaningful but distinct from observed functional performance, and the score change remains within expected error.' },
      { text: 'No learning occurred because the standardized score did not exceed expected measurement error', feedback: 'The score does not establish dependable overall change, but observed strategy use and confidence provide other, appropriately limited evidence.' },
      { text: 'The assessment is invalid because the score and the client’s confidence changed by different amounts', feedback: 'Different constructs can change differently; disagreement alone does not establish invalidity.' },
    ], correctIndex: 0, hint: 'Integrate all evidence while keeping each source tied to the construct it actually represents.',
  },
  'exercise-physiology': {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'Interpreting a performance change', xp: 25,
    context: 'After a training block, an athlete completes a standardized aerobic protocol with a modestly better result. The test conditions were comparable, but the change is close to ordinary day-to-day variation and the athlete reports unusual fatigue.',
    prompt: 'Which decision is best supported by the available evidence?',
    options: [
      { text: 'Conclude that aerobic capacity improved because the protocol and scoring procedure were standardized', feedback: 'Standardization supports comparability but does not eliminate ordinary variation or establish meaningful change from one result.' },
      { text: 'Conclude that the training failed because the athlete reported fatigue during the reassessment', feedback: 'Fatigue may affect interpretation, but one report does not establish that the training failed.' },
      { text: 'Treat the result as provisional and collect another comparable performance measure', feedback: 'This recognizes the observed improvement without treating one uncertain result as a settled change in aerobic performance.' },
      { text: 'Increase training load immediately because any better standardized result justifies progression', feedback: 'The result is not yet sufficiently trustworthy or contextualized to justify that stronger decision.' },
    ], correctIndex: 2, hint: 'Ask whether one result near expected variation can support a confident change in the training conclusion.',
  },
};

export function getActivities(pathwayId: PathwayId, moduleId: ModuleId = 1): Activity[] {
  if (moduleId !== 1) return getAdditionalModuleActivities(moduleId, pathwayId);

  return [pathwayActivities[pathwayId], ...commonActivities, transferActivities[pathwayId], decisionActivities[pathwayId]];
}