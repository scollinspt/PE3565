export type PathwayId = 'adventure' | 'physical-education' | 'allied-health' | 'exercise-physiology';

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

export const frameworkSteps = [
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

export const modules = [
  'Foundations & Alignment',
  'Timing, Purpose & Approach',
  'Tools & Scoring',
  'Describing Performance',
  'Quality & Fairness',
  'Change & Repeated Measurement',
  'Relationships & Transfer',
  'Evidence-Informed Decisions',
];

const pathwayActivities: Record<PathwayId, Activity> = {
  adventure: {
    id: 'pathway-case', marker: 'Your field', title: 'Leadership under observation', xp: 15,
    context: 'An adventure educator wants to assess how well participants lead a group through an unfamiliar challenge-course task.',
    prompt: 'Which evidence is most directly aligned with the intended leadership-performance construct?',
    options: [
      { text: 'Repeated observations of participants planning, communicating, adapting, and supporting the group during unfamiliar tasks', feedback: 'This directly samples leadership behavior across relevant situations rather than relying on a proxy.' },
      { text: 'A written quiz asking participants to recall the program definitions of effective leadership', feedback: 'The quiz could assess leadership knowledge, but knowing the definitions is not direct evidence of leading a group.' },
      { text: 'A self-rating asking participants how confident they feel when taking responsibility for a group', feedback: 'Confidence may matter, but it is a different construct from demonstrated leadership performance.' },
      { text: 'A count of how often each participant volunteers to stand at the front of the group', feedback: 'Volunteering frequency is observable, but it does not adequately represent the quality of leadership.' },
    ], correctIndex: 0,
    hint: 'Look for evidence that samples the performance itself across more than one opportunity.',
  },
  'physical-education': {
    id: 'pathway-case', marker: 'Your field', title: 'Throwing performance', xp: 15,
    context: 'A physical educator wants to know whether students can apply safe and effective overhand-throw mechanics during play.',
    prompt: 'Which evidence is most directly aligned with the intended movement-performance construct?',
    options: [
      { text: 'Structured observations of students using the critical movement elements during several game-like throwing tasks', feedback: 'This samples the intended psychomotor performance in relevant conditions and across several attempts.' },
      { text: 'A written quiz asking students to identify the critical elements of an overhand throw', feedback: 'This measures knowledge of the skill, not the ability to perform it during play.' },
      { text: 'A tally of successful throws completed by each student during one short partner activity', feedback: 'Outcome counts can be useful, but one task may hide technique quality and ordinary performance variation.' },
      { text: 'A survey asking students how confident they feel about throwing during competitive games', feedback: 'Confidence is an affective construct, not direct evidence of throwing mechanics.' },
    ], correctIndex: 0,
    hint: 'Choose the option that directly observes the intended skill in the setting where it should be used.',
  },
  'allied-health': {
    id: 'pathway-case', marker: 'Your field', title: 'Functional balance', xp: 15,
    context: 'An allied health student wants to describe a client’s functional balance while completing a planned mobility task.',
    prompt: 'Which evidence is most directly aligned with the intended functional-performance construct?',
    options: [
      { text: 'Standardized observations of balance control while the client completes relevant mobility tasks under defined conditions', feedback: 'This directly samples functional balance through a consistent procedure in the relevant performance context.' },
      { text: 'A brief interview asking the client to describe situations in which balance feels difficult', feedback: 'Self-report adds useful context, but it is not direct evidence of observed functional balance performance.' },
      { text: 'A measurement of lower-extremity strength collected during an isolated testing procedure', feedback: 'Strength may influence balance, but it is a related construct rather than the intended functional performance.' },
      { text: 'A record of the number of appointments the client attended during the previous month', feedback: 'Attendance may affect opportunity for change but does not measure functional balance.' },
    ], correctIndex: 0,
    hint: 'Separate a direct sample of balance performance from related characteristics and contextual information.',
  },
  'exercise-physiology': {
    id: 'pathway-case', marker: 'Your field', title: 'Aerobic performance', xp: 15,
    context: 'An exercise physiologist wants to assess an athlete’s ability to sustain aerobic work under a defined protocol.',
    prompt: 'Which evidence is most directly aligned with the intended aerobic-performance construct?',
    options: [
      { text: 'Performance and physiological responses collected with a standardized sustained-exercise protocol appropriate to the athlete', feedback: 'This directly samples sustained aerobic work while defining the procedure needed to interpret the result.' },
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
      { text: 'The student’s capacity to maintain postural control', feedback: 'The construct is the underlying characteristic the assessment is intended to represent.' },
      { text: 'The timed single-leg stance procedure', feedback: 'That is the measurement procedure used to gather information about the construct.' },
      { text: 'The recorded time of 22 seconds', feedback: 'That is an observed result produced by the measurement procedure.' },
      { text: 'The decision to add more balance practice', feedback: 'That is a possible action informed by an interpretation of the evidence.' },
    ], correctIndex: 0,
    hint: 'Ask what underlying ability the procedure is intended to represent.',
  },
  {
    id: 'domain-check', marker: 'Quick check 2', title: 'Match the domain', xp: 10,
    context: 'A learner compares two emergency-action plans and explains which one better protects participants in a given setting.',
    prompt: 'Which learning domain is most directly assessed?',
    options: [
      { text: 'Cognitive, because the learner analyzes information and justifies a judgment', feedback: 'The task directly samples analysis and reasoning, both cognitive outcomes.' },
      { text: 'Psychomotor, because emergency response may eventually require coordinated action', feedback: 'The scenario concerns action, but this assessment asks for analysis and justification rather than physical performance.' },
      { text: 'Affective, because safety decisions may reflect responsibility and concern for others', feedback: 'Values may influence the response, but the task directly elicits analysis of plans.' },
      { text: 'Psychomotor, because selecting a plan is an observable response made by the learner', feedback: 'Being observable does not make a response psychomotor; the intended thinking is what matters here.' },
    ], correctIndex: 0,
    hint: 'Focus on what the learner must demonstrate, not the topic being discussed.',
  },
  {
    id: 'evidence-check', marker: 'Quick check 3', title: 'Result or conclusion?', xp: 10,
    context: 'After instruction, a class mean rises from 68 to 78 on a knowledge assessment.',
    prompt: 'Which statement stays closest to the evidence currently available?',
    options: [
      { text: 'The class mean was 10 points higher after instruction, though the cause and meaning of the change require more evidence', feedback: 'This accurately describes the result while keeping causal and practical conclusions appropriately limited.' },
      { text: 'The instruction caused every student to master the intended knowledge', feedback: 'A group mean cannot establish individual mastery or prove that instruction caused the change.' },
      { text: 'The assessment is valid because the class earned a higher score after instruction', feedback: 'Score improvement does not establish that the assessment supports its intended interpretation.' },
      { text: 'The class improved meaningfully because any increase in a group average reflects learning', feedback: 'The size, consistency, cause, and practical importance of the change still need evaluation.' },
    ], correctIndex: 0,
    hint: 'Choose the statement that describes what happened without claiming more than the two means show.',
  },
  {
    id: 'alignment-check', marker: 'Quick check 4', title: 'Find the mismatch', xp: 10,
    context: 'The intended outcome is “demonstrate effective communication while leading a group through an unfamiliar problem.”',
    prompt: 'Which assessment is best aligned with that outcome?',
    options: [
      { text: 'Observe and rate communication during several unfamiliar group problems using explicit performance criteria', feedback: 'The task, setting, evidence, and scoring criteria all align with the intended performance.' },
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
      { text: 'Observe movement decisions during several small-sided games using criteria for timing, position, and response to play', feedback: 'The construct is sampled directly in the context where tactical movement must be used.' },
      { text: 'Ask students to label open spaces on a static court diagram after the lesson', feedback: 'This measures recognition on a diagram, not the ability to create space dynamically during play.' },
      { text: 'Record each student’s running speed during an isolated sprint test', feedback: 'Speed may affect play but is distinct from tactical movement decisions.' },
      { text: 'Ask teammates which student appears most athletic during games', feedback: 'A global impression of athleticism is not defined evidence of creating space.' },
    ], correctIndex: 0, hint: 'The professional setting changed, but direct alignment still requires sampling the intended performance.',
  },
  'physical-education': {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From the gym to adventure education', xp: 15,
    context: 'An adventure educator wants to assess how participants adapt a route plan when weather and group capacity change.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Present changing field information and evaluate how participants revise and justify a workable route plan', feedback: 'The task directly elicits adaptive planning under the conditions named in the outcome.' },
      { text: 'Ask participants to recall the original route plan from memory before departing', feedback: 'Recall of the original plan does not demonstrate adaptation to changing conditions.' },
      { text: 'Time how quickly participants can pack required equipment into their bags', feedback: 'Packing speed is a separate performance and does not represent adaptive route planning.' },
      { text: 'Count the number of prior trips each participant has completed with the program', feedback: 'Experience may affect performance, but it is not evidence of the intended adaptive decision-making.' },
    ], correctIndex: 0, hint: 'Preserve the principle: the assessment should require the same kind of thinking or performance as the outcome.',
  },
  'allied-health': {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From function to exercise physiology', xp: 15,
    context: 'An exercise physiologist wants to assess whether students can interpret an athlete’s response to a standardized workload.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Provide workload and response data, then ask students to interpret the pattern and justify a bounded conclusion', feedback: 'The evidence directly samples interpretation of a physiological response, including its limits.' },
      { text: 'Ask students to list the names of common laboratory instruments from memory', feedback: 'Instrument recall is useful knowledge but does not demonstrate interpretation of response data.' },
      { text: 'Grade students according to how closely their own fitness resembles the athlete’s fitness', feedback: 'A student’s fitness is irrelevant to the intended interpretation outcome.' },
      { text: 'Count the number of data values students can enter into a spreadsheet in one minute', feedback: 'Data-entry speed does not represent the quality of physiological interpretation.' },
    ], correctIndex: 0, hint: 'Look for a task that requires students to perform the interpretation named in the outcome.',
  },
  'exercise-physiology': {
    id: 'transfer-check', marker: 'Cross-field transfer', title: 'From the laboratory to allied health', xp: 15,
    context: 'An allied health educator wants to assess whether students communicate accessible instructions for a functional task.',
    prompt: 'Which choice best transfers the alignment principle from your pathway?',
    options: [
      { text: 'Have students deliver instructions to varied learners and evaluate clarity, adaptation, and confirmation of understanding', feedback: 'The performance directly samples accessible communication and adaptation in a relevant context.' },
      { text: 'Ask students to identify communication terms on a written vocabulary quiz', feedback: 'Terminology knowledge does not establish the ability to communicate accessibly with a learner.' },
      { text: 'Measure how loudly each student can repeat a standard set of task instructions', feedback: 'Volume alone does not represent clarity, adaptation, or confirmation of understanding.' },
      { text: 'Record whether each student attended the lecture about accessible communication', feedback: 'Attendance indicates opportunity to learn, not demonstrated communication performance.' },
    ], correctIndex: 0, hint: 'Direct evidence should require the student to demonstrate accessible communication, not merely know about it.',
  },
};

const decisionActivities: Record<PathwayId, Activity> = {
  adventure: {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'A defensible readiness decision', xp: 25,
    context: 'Before a multi-day field experience, participants explain emergency procedures accurately. During two simulations, however, several fail to communicate changing conditions or adjust the plan. The instructor must decide what happens next.',
    prompt: 'Which decision is best supported by the available evidence?',
    options: [
      { text: 'Provide targeted practice in communication and adaptation, then reassess those performances before making the readiness decision', feedback: 'This distinguishes procedural knowledge from demonstrated performance and uses the current evidence formatively before a consequential decision.' },
      { text: 'Approve readiness because accurate explanations establish that participants understand the emergency procedures', feedback: 'Knowledge is relevant, but the observed performance shows that understanding has not yet transferred reliably to simulation.' },
      { text: 'Deny readiness permanently because two unsuccessful simulations prove the participants cannot adapt in the field', feedback: 'The evidence identifies a current performance need but does not justify a permanent or global conclusion.' },
      { text: 'Ignore the simulations because artificial tasks cannot contribute useful evidence about field performance', feedback: 'Simulations have limitations, but relevant standardized observations can still contribute evidence when interpreted cautiously.' },
    ], correctIndex: 0, hint: 'Separate what participants know from what they demonstrated, then choose an action proportionate to the evidence.',
  },
  'physical-education': {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'Instruction from mixed evidence', xp: 25,
    context: 'Students accurately identify the critical elements of an overhand throw. In repeated game-like observations, many use the elements during unopposed practice but lose them under defensive pressure.',
    prompt: 'Which instructional decision is best supported by the evidence?',
    options: [
      { text: 'Use progressively pressured practice with focused feedback, then reassess mechanics across comparable game-like attempts', feedback: 'The evidence locates the difficulty in applying known mechanics under pressure and supports targeted instruction followed by comparable reassessment.' },
      { text: 'Move to a new unit because the knowledge results show that students have mastered the throwing outcome', feedback: 'Knowledge of critical elements does not establish consistent psychomotor performance under the intended conditions.' },
      { text: 'Lower every student’s grade because pressured performance is the only evidence that has educational value', feedback: 'The pressured observations matter, but the available evidence should guide learning before being reduced to a blanket grading decision.' },
      { text: 'Repeat the same written quiz because greater knowledge precision will resolve the performance inconsistency', feedback: 'A more precise knowledge score would not directly address transfer of mechanics into pressured performance.' },
    ], correctIndex: 0, hint: 'Identify where performance changes, then match the next learning task and reassessment to that condition.',
  },
  'allied-health': {
    id: 'decision-challenge', marker: 'Decision Challenge', title: 'A bounded functional conclusion', xp: 25,
    context: 'A client reports greater confidence with mobility. A standardized task score improves slightly, but the difference is within the assessment’s expected measurement error. Observations show better strategy use on one task but not another.',
    prompt: 'Which conclusion is best supported at this point?',
    options: [
      { text: 'The evidence suggests improved confidence and task-specific strategy use, while a dependable overall performance change has not yet been established', feedback: 'This integrates multiple sources, respects measurement error, and limits the conclusion to the pattern actually observed.' },
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
      { text: 'Treat the result as provisional, consider fatigue and expected variation, and collect comparable evidence before changing the training conclusion', feedback: 'This recognizes the observed improvement without treating one uncertain result as a settled change in aerobic performance.' },
      { text: 'Conclude that aerobic capacity improved because the protocol and scoring procedure were standardized', feedback: 'Standardization supports comparability but does not eliminate ordinary variation or establish meaningful change from one result.' },
      { text: 'Conclude that the training failed because the athlete reported fatigue during the reassessment', feedback: 'Fatigue may affect interpretation, but one report does not establish that the training failed.' },
      { text: 'Increase training load immediately because any better standardized result justifies progression', feedback: 'The result is not yet sufficiently trustworthy or contextualized to justify that stronger decision.' },
    ], correctIndex: 0, hint: 'Ask whether one result near expected variation can support a confident change in the training conclusion.',
  },
};

export function getActivities(pathwayId: PathwayId): Activity[] {
  return [pathwayActivities[pathwayId], ...commonActivities, transferActivities[pathwayId], decisionActivities[pathwayId]];
}