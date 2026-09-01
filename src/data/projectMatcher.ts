export type DirectionId =
  | 'describe'
  | 'compare'
  | 'learning'
  | 'change'
  | 'quality'
  | 'relationships'
  | 'assessment-approach'
  | 'open';

export type InterestId =
  | 'knowledge'
  | 'motor-skill-acquisition'
  | 'immediate-skill-performance'
  | 'retention'
  | 'transfer'
  | 'affective-learning'
  | 'fitness-capacity'
  | 'health-participation'
  | 'readiness'
  | 'assessment-methods'
  | 'open'
  | 'other';

export type QuestionInterestId =
  | 'describe'
  | 'compare'
  | 'learning'
  | 'retention'
  | 'transfer'
  | 'quality'
  | 'relationships'
  | 'professional-decision'
  | 'assessment-approach'
  | 'open'
  | 'other';

export type DecisionId =
  | 'understand'
  | 'plan-adjust'
  | 'feedback'
  | 'readiness'
  | 'monitor-change'
  | 'compare-methods'
  | 'participation-safety-performance'
  | 'program-organization'
  | 'unsure'
  | 'open'
  | 'other';

export type EvidenceId =
  | 'physical-measurements'
  | 'assessment-scores'
  | 'ratings-rubrics'
  | 'observation-video'
  | 'knowledge-responses'
  | 'experiences-reflections'
  | 'existing-records'
  | 'multiple'
  | 'unsure'
  | 'open'
  | 'other';

export type ContextId =
  | 'physical-education'
  | 'health-education'
  | 'adventure-outdoor'
  | 'exercise-fitness'
  | 'sport-coaching'
  | 'allied-health'
  | 'community-recreation'
  | 'occupational-tactical'
  | 'cross-approach'
  | 'other'
  | 'unsure'
  | 'open';

export type AssessmentApproachId = 'established' | 'adapt' | 'original' | 'combined' | 'unsure' | 'open' | 'other';
export type MethodId = 'quantitative' | 'qualitative' | 'mixed' | 'unsure' | 'open';
export type OpennessId = 'fairly-clear' | 'few-directions' | 'many-directions' | 'almost-anything' | 'no-direction';

export type MatcherAnswers = {
  interest?: InterestId;
  questionInterest?: QuestionInterestId;
  decision?: DecisionId;
  evidence?: EvidenceId[];
  contexts?: ContextId[];
  assessmentApproach?: AssessmentApproachId;
  methods?: MethodId[];
  openness?: OpennessId;
};

export type ProjectDirection = {
  id: DirectionId;
  label: string;
  description: string;
};

export type MatchResult = {
  primary: ProjectDirection;
  alternatives: ProjectDirection[];
  characteristics: string[];
  explanation: string[];
};

export type MatcherOption<Id extends string> = {
  id: Id;
  label: string;
};

export const projectDirections: ProjectDirection[] = [
  { id: 'describe', label: 'Describe current performance, learning, behavior, or capacity', description: 'Focus on understanding what is happening now.' },
  { id: 'compare', label: 'Compare performance, groups, conditions, or methods', description: 'Focus on similarities, differences, or relative performance.' },
  { id: 'learning', label: 'Examine learning or skill development', description: 'Focus on knowledge, motor skill acquisition, affective development, or another form of learning.' },
  { id: 'change', label: 'Examine change, retention, or transfer', description: 'Focus on what changes, whether it persists, or whether it applies in another context.' },
  { id: 'quality', label: 'Evaluate measurement quality or consistency', description: 'Focus on whether evidence is sufficiently trustworthy and what may influence it.' },
  { id: 'relationships', label: 'Investigate relationships among measures', description: 'Focus on how two or more variables, assessments, or forms of evidence relate.' },
  { id: 'assessment-approach', label: 'Develop or adapt an assessment approach', description: 'Focus on creating, adapting, or examining a method used to collect or interpret evidence.' },
  { id: 'open', label: 'Stay open while forming a group', description: 'Your responses support several directions or intentionally remain broad.' },
];

type FocusedDirectionId = Exclude<DirectionId, 'open'>;
type Weights = Partial<Record<FocusedDirectionId, number>>;

const directionById = Object.fromEntries(projectDirections.map((direction) => [direction.id, direction])) as Record<DirectionId, ProjectDirection>;
const focusedDirectionIds = projectDirections.filter((direction) => direction.id !== 'open').map((direction) => direction.id as FocusedDirectionId);

export const interestLabels: Record<InterestId, string> = {
  knowledge: 'Knowledge and understanding',
  'motor-skill-acquisition': 'Motor skill acquisition',
  'immediate-skill-performance': 'Immediate skill performance',
  retention: 'Retention of learning',
  transfer: 'Transfer of learning',
  'affective-learning': 'Affective learning and development',
  'fitness-capacity': 'Fitness or physical capacity',
  'health-participation': 'Health behavior or participation',
  readiness: 'Readiness for an activity or professional decision',
  'assessment-methods': 'Measurement or assessment methods themselves',
  open: 'Open to several possibilities',
  other: 'Something else',
};

export const questionLabels: Record<QuestionInterestId, string> = {
  describe: 'What does current performance, knowledge, behavior, or capacity look like?',
  compare: 'How do people, groups, conditions, or methods compare?',
  learning: 'Does learning or skill develop with instruction or practice?',
  retention: 'Does a change persist after time has passed?',
  transfer: 'Does learning or performance transfer to another situation?',
  quality: 'Are measurements consistent or trustworthy?',
  relationships: 'How are two or more measures related?',
  'professional-decision': 'What evidence could support a professional decision?',
  'assessment-approach': 'How could an assessment method be created or improved?',
  open: 'Open to several kinds of questions',
  other: 'Something else',
};

export const decisionLabels: Record<DecisionId, string> = {
  understand: 'Understand current performance, learning, behavior, or capacity',
  'plan-adjust': 'Plan or adjust instruction, practice, training, or support',
  feedback: 'Give useful feedback',
  readiness: 'Judge readiness for an activity, task, or progression',
  'monitor-change': 'Monitor improvement or change',
  'compare-methods': 'Compare possible assessment methods or approaches',
  'participation-safety-performance': 'Support a participation, safety, or performance decision',
  'program-organization': 'Support a program or organizational decision',
  unsure: 'I am not sure yet',
  open: 'I am open to several possibilities',
  other: 'Something else',
};

export const evidenceLabels: Record<EvidenceId, string> = {
  'physical-measurements': 'Physical measurements such as time, distance, repetitions, workload, or physiological responses',
  'assessment-scores': 'Scores from a test or established assessment',
  'ratings-rubrics': 'Checklists, rating scales, or rubric scores',
  'observation-video': 'Direct observation or video of performance or behavior',
  'knowledge-responses': 'Written or spoken responses showing knowledge or understanding',
  'experiences-reflections': 'Experiences, perceptions, interviews, or reflections',
  'existing-records': 'Existing records or previously collected data',
  multiple: 'More than one kind of evidence',
  unsure: 'I am not sure yet',
  open: 'I am open to any of these',
  other: 'Something else',
};

export const contextLabels: Record<ContextId, string> = {
  'physical-education': 'Physical education',
  'health-education': 'Health education',
  'adventure-outdoor': 'Adventure or outdoor education',
  'exercise-fitness': 'Exercise, fitness, or physical conditioning',
  'sport-coaching': 'Sport, coaching, or athletic performance',
  'allied-health': 'Allied health or rehabilitation',
  'community-recreation': 'Community recreation or physical activity',
  'occupational-tactical': 'Workplace, occupational, or tactical performance',
  'cross-approach': 'A cross-approach project connecting more than one context',
  other: 'Another physical-performance or learning context',
  unsure: 'I am not sure yet',
  open: 'I am open to any context',
};

export const assessmentApproachLabels: Record<AssessmentApproachId, string> = {
  established: 'Use an established assessment or instrument',
  adapt: 'Adapt an established assessment for a different context or purpose',
  original: 'Create an original assessment, scoring method, or measurement approach',
  combined: 'Combine established and original components',
  unsure: 'I am not sure yet',
  open: 'I am open to any of these',
  other: 'Something else',
};

export const methodLabels: Record<MethodId, string> = {
  quantitative: 'Quantitative: working primarily with numerical measurements, scores, counts, or statistical comparisons',
  qualitative: 'Qualitative: working primarily with observations, descriptions, experiences, explanations, or meanings',
  mixed: 'Mixed methods: intentionally combining quantitative and qualitative evidence',
  unsure: 'I am not sure yet',
  open: 'I am open to any approach',
};

export const opennessLabels: Record<OpennessId, string> = {
  'fairly-clear': 'I have a fairly clear interest or question, but the details can change',
  'few-directions': 'I am deciding among a few possible directions',
  'many-directions': 'I am interested in many directions and would like to see what emerges in a group',
  'almost-anything': 'I am open to almost anything',
  'no-direction': 'I do not have a direction yet',
};

function optionsFromLabels<Id extends string>(labels: Record<Id, string>): MatcherOption<Id>[] {
  return Object.entries(labels).map(([id, label]) => ({ id: id as Id, label: label as string }));
}

export const matcherOptions = {
  interest: optionsFromLabels(interestLabels),
  questionInterest: optionsFromLabels(questionLabels),
  decision: optionsFromLabels(decisionLabels),
  evidence: optionsFromLabels(evidenceLabels),
  contexts: optionsFromLabels(contextLabels),
  assessmentApproach: optionsFromLabels(assessmentApproachLabels),
  methods: optionsFromLabels(methodLabels),
  openness: optionsFromLabels(opennessLabels),
} as const;

const interestWeights: Record<InterestId, Weights> = {
  knowledge: { learning: 3, describe: 1 },
  'motor-skill-acquisition': { learning: 3, change: 1 },
  'immediate-skill-performance': { describe: 3, compare: 1 },
  retention: { change: 3, learning: 1 },
  transfer: { change: 3, learning: 1 },
  'affective-learning': { learning: 3, describe: 1 },
  'fitness-capacity': { describe: 2, change: 1, compare: 1 },
  'health-participation': { describe: 2, change: 1 },
  readiness: { describe: 2, compare: 1 },
  'assessment-methods': { 'assessment-approach': 3, quality: 1 },
  open: {},
  other: {},
};

const questionWeights: Record<QuestionInterestId, Weights> = {
  describe: { describe: 6 },
  compare: { compare: 6, describe: 1 },
  learning: { learning: 6, change: 1 },
  retention: { change: 6, learning: 2 },
  transfer: { change: 6, learning: 2 },
  quality: { quality: 6 },
  relationships: { relationships: 6 },
  'professional-decision': {},
  'assessment-approach': { 'assessment-approach': 6 },
  open: {},
  other: {},
};

const decisionWeights: Record<DecisionId, Weights> = {
  understand: { describe: 2 },
  'plan-adjust': { learning: 2, change: 1 },
  feedback: { learning: 2, describe: 1 },
  readiness: { describe: 2, compare: 1 },
  'monitor-change': { change: 2 },
  'compare-methods': { 'assessment-approach': 2, quality: 1, compare: 1 },
  'participation-safety-performance': { describe: 1, quality: 1 },
  'program-organization': { describe: 1, compare: 1 },
  unsure: {},
  open: {},
  other: {},
};

const evidenceWeights: Record<EvidenceId, Weights> = {
  'physical-measurements': { describe: 1, change: 1 },
  'assessment-scores': { describe: 1, compare: 1 },
  'ratings-rubrics': { 'assessment-approach': 1, describe: 1 },
  'observation-video': { learning: 1, describe: 1 },
  'knowledge-responses': { learning: 1 },
  'experiences-reflections': { describe: 1 },
  'existing-records': { describe: 1, change: 1 },
  multiple: {},
  unsure: {},
  open: {},
  other: {},
};

const assessmentApproachWeights: Record<AssessmentApproachId, Weights> = {
  established: { quality: 1 },
  adapt: { 'assessment-approach': 3 },
  original: { 'assessment-approach': 4 },
  combined: { 'assessment-approach': 3 },
  unsure: {},
  open: {},
  other: {},
};

const majorOpenValues = new Set<string>(['open', 'other', 'unsure']);
export const matcherThresholds = {
  alternativeMinimumScore: 3,
  alternativeMaximumGap: 4,
  broadFlexibilityTieGap: 1,
} as const;

function addWeights(scores: Record<FocusedDirectionId, number>, weights: Weights) {
  for (const [direction, weight] of Object.entries(weights) as Array<[FocusedDirectionId, number]>) {
    scores[direction] += weight;
  }
}

function rankDirections(answers: MatcherAnswers) {
  const scores = Object.fromEntries(focusedDirectionIds.map((id) => [id, 0])) as Record<FocusedDirectionId, number>;
  if (answers.interest) addWeights(scores, interestWeights[answers.interest]);
  if (answers.questionInterest) addWeights(scores, questionWeights[answers.questionInterest]);
  if (answers.decision) addWeights(scores, decisionWeights[answers.decision]);
  if (answers.assessmentApproach) addWeights(scores, assessmentApproachWeights[answers.assessmentApproach]);
  for (const evidence of new Set(answers.evidence ?? [])) addWeights(scores, evidenceWeights[evidence]);

  return focusedDirectionIds
    .map((id, order) => ({ id, score: scores[id], order }))
    .sort((left, right) => right.score - left.score || left.order - right.order);
}

function isOpenValue(answer: string | undefined) {
  return answer !== undefined && majorOpenValues.has(answer);
}

function shouldUseOpenPrimary(answers: MatcherAnswers, ranked: ReturnType<typeof rankDirections>) {
  if (answers.openness === 'almost-anything' || answers.openness === 'no-direction') return true;

  const majorAnswers = [answers.interest, answers.questionInterest, answers.decision, answers.assessmentApproach];
  const focusedAnswerCount = majorAnswers.filter((answer) => answer !== undefined && !isOpenValue(answer)).length;
  const openAnswerCount = majorAnswers.filter(isOpenValue).length;
  if (focusedAnswerCount <= 1 && ranked[0].score < matcherThresholds.alternativeMinimumScore) return true;
  if (openAnswerCount >= 3 && ranked[0].score < 6) return true;

  const nearlyTied = ranked[0].score > 0 && ranked[0].score - ranked[1].score <= matcherThresholds.broadFlexibilityTieGap;
  return answers.openness === 'many-directions' && nearlyTied;
}

function getCharacteristics(answers: MatcherAnswers) {
  const characteristics: string[] = [];
  if (answers.interest && !isOpenValue(answers.interest)) characteristics.push(interestLabels[answers.interest]);
  for (const context of new Set(answers.contexts ?? [])) {
    if (!isOpenValue(context)) characteristics.push(contextLabels[context]);
  }
  if (answers.assessmentApproach && !isOpenValue(answers.assessmentApproach)) characteristics.push(assessmentApproachLabels[answers.assessmentApproach]);
  for (const method of new Set(answers.methods ?? [])) {
    if (!isOpenValue(method)) characteristics.push(methodLabels[method]);
  }
  for (const evidence of new Set(answers.evidence ?? [])) {
    if (!isOpenValue(evidence)) characteristics.push(evidenceLabels[evidence]);
  }
  if (answers.decision && !isOpenValue(answers.decision)) characteristics.push(decisionLabels[answers.decision]);
  return Array.from(new Set(characteristics));
}

function getExplanation(answers: MatcherAnswers, primaryId: DirectionId) {
  if (primaryId === 'open') {
    const openSelections = [
      answers.interest && isOpenValue(answers.interest) ? interestLabels[answers.interest] : undefined,
      answers.questionInterest && isOpenValue(answers.questionInterest) ? questionLabels[answers.questionInterest] : undefined,
      answers.decision && isOpenValue(answers.decision) ? decisionLabels[answers.decision] : undefined,
      answers.assessmentApproach && isOpenValue(answers.assessmentApproach) ? assessmentApproachLabels[answers.assessmentApproach] : undefined,
      answers.openness === 'many-directions' ? 'I am interested in many directions and would like to see what emerges in a group' : undefined,
      answers.openness === 'almost-anything' ? 'I am open to almost anything' : undefined,
      answers.openness === 'no-direction' ? 'I do not have a direction yet' : undefined,
    ].filter((label): label is string => Boolean(label));
    return openSelections.length > 0 ? Array.from(new Set(openSelections)) : [];
  }

  const relevantSelections: string[] = [];
  if (answers.questionInterest && (questionWeights[answers.questionInterest][primaryId] ?? 0) > 0) relevantSelections.push(questionLabels[answers.questionInterest]);
  if (answers.interest && (interestWeights[answers.interest][primaryId] ?? 0) > 0) relevantSelections.push(interestLabels[answers.interest]);
  if (answers.decision && (decisionWeights[answers.decision][primaryId] ?? 0) > 0) relevantSelections.push(decisionLabels[answers.decision]);
  if (answers.assessmentApproach && (assessmentApproachWeights[answers.assessmentApproach][primaryId] ?? 0) > 0) relevantSelections.push(assessmentApproachLabels[answers.assessmentApproach]);
  for (const evidence of new Set(answers.evidence ?? [])) {
    if ((evidenceWeights[evidence][primaryId] ?? 0) > 0) relevantSelections.push(evidenceLabels[evidence]);
  }
  return Array.from(new Set(relevantSelections));
}

export function matchProjectDirection(answers: MatcherAnswers): MatchResult {
  const ranked = rankDirections(answers);
  const primaryId: DirectionId = shouldUseOpenPrimary(answers, ranked) ? 'open' : ranked[0].id;
  const alternatives = ranked
    .filter(({ id, score }) => id !== primaryId && score >= matcherThresholds.alternativeMinimumScore && ranked[0].score - score <= matcherThresholds.alternativeMaximumGap)
    .slice(0, 2)
    .map(({ id }) => directionById[id]);

  return {
    primary: directionById[primaryId],
    alternatives,
    characteristics: getCharacteristics(answers),
    explanation: getExplanation(answers, primaryId),
  };
}