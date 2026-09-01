import assert from 'node:assert/strict';
import test from 'node:test';

import { matchProjectDirection, matcherThresholds, projectDirections } from '../src/data/projectMatcher.ts';

const primaryId = (answers) => matchProjectDirection(answers).primary.id;
const alternativeIds = (answers) => matchProjectDirection(answers).alternatives.map(({ id }) => id).sort();

test('defines the eight approved directions', () => {
  assert.deepEqual(projectDirections.map(({ id }) => id), [
    'describe',
    'compare',
    'learning',
    'change',
    'quality',
    'relationships',
    'assessment-approach',
    'open',
  ]);
});

test('focused question profiles reach each investigative direction', () => {
  const profiles = [
    ['describe', { questionInterest: 'describe' }],
    ['compare', { questionInterest: 'compare' }],
    ['learning', { questionInterest: 'learning' }],
    ['change', { questionInterest: 'retention' }],
    ['change', { questionInterest: 'transfer' }],
    ['quality', { questionInterest: 'quality' }],
    ['relationships', { questionInterest: 'relationships' }],
    ['assessment-approach', { questionInterest: 'assessment-approach' }],
  ];

  for (const [expected, answers] of profiles) assert.equal(primaryId(answers), expected);
});

test('kind of question usually anchors a contradictory focused profile', () => {
  const result = matchProjectDirection({
    interest: 'immediate-skill-performance',
    questionInterest: 'quality',
    decision: 'monitor-change',
    evidence: ['observation-video'],
    assessmentApproach: 'established',
  });

  assert.equal(result.primary.id, 'quality');
  assert.deepEqual(result.explanation, [
    'Are measurements consistent or trustworthy?',
    'Use an established assessment or instrument',
  ]);
});

test('context and method add characteristics without changing direction', () => {
  const baseline = matchProjectDirection({ questionInterest: 'compare' });
  const contextualized = matchProjectDirection({
    questionInterest: 'compare',
    contexts: ['allied-health', 'cross-approach'],
    methods: ['qualitative', 'mixed'],
  });

  assert.equal(contextualized.primary.id, baseline.primary.id);
  assert.ok(contextualized.characteristics.includes('Allied health or rehabilitation'));
  assert.ok(contextualized.characteristics.includes('A cross-approach project connecting more than one context'));
  assert.ok(contextualized.characteristics.includes('Qualitative: working primarily with observations, descriptions, experiences, explanations, or meanings'));
  assert.ok(contextualized.characteristics.includes('Mixed methods: intentionally combining quantitative and qualitative evidence'));
});

test('open context or method choices do not trigger an open result', () => {
  assert.equal(primaryId({ questionInterest: 'learning', contexts: ['open'], methods: ['open'] }), 'learning');
});

test('one open major answer does not override an otherwise focused profile', () => {
  assert.equal(primaryId({
    interest: 'open',
    questionInterest: 'relationships',
    decision: 'understand',
    assessmentApproach: 'established',
    openness: 'few-directions',
  }), 'relationships');
});

test('several open major answers with no clear leader produce an open result', () => {
  assert.equal(primaryId({
    interest: 'open',
    questionInterest: 'open',
    decision: 'unsure',
    assessmentApproach: 'open',
    openness: 'few-directions',
  }), 'open');
});

test('explicit broad openness takes precedence over focused scores', () => {
  assert.equal(primaryId({ questionInterest: 'quality', openness: 'almost-anything' }), 'open');
  assert.equal(primaryId({ questionInterest: 'quality', openness: 'no-direction' }), 'open');
});

test('broad flexibility turns a near tie into an open result', () => {
  assert.equal(primaryId({
    interest: 'retention',
    questionInterest: 'describe',
    decision: 'monitor-change',
    openness: 'many-directions',
  }), 'open');
});

test('skipped questions without focused support produce an open result', () => {
  const result = matchProjectDirection({});
  assert.equal(result.primary.id, 'open');
  assert.deepEqual(result.alternatives, []);
  assert.deepEqual(result.explanation, []);
});

test('one focused major response below the support threshold remains open', () => {
  assert.equal(primaryId({ interest: 'fitness-capacity' }), 'open');
});

test('alternatives require support and are limited to two', () => {
  assert.deepEqual(alternativeIds({ questionInterest: 'relationships' }), []);

  assert.deepEqual(alternativeIds({
    interest: 'knowledge',
    questionInterest: 'describe',
    decision: 'plan-adjust',
    evidence: ['observation-video'],
  }), ['learning']);

  const twoAlternatives = matchProjectDirection({
    interest: 'retention',
    questionInterest: 'describe',
    decision: 'plan-adjust',
    evidence: ['physical-measurements', 'knowledge-responses'],
  });
  assert.equal(twoAlternatives.alternatives.length, 2);
  assert.deepEqual(twoAlternatives.alternatives.map(({ id }) => id).sort(), ['change', 'learning']);
  assert.equal(matcherThresholds.alternativeMinimumScore, 3);
});

test('explanations contain only relevant responses selected by the student', () => {
  const result = matchProjectDirection({
    interest: 'knowledge',
    questionInterest: 'learning',
    decision: 'feedback',
    evidence: ['knowledge-responses'],
    contexts: ['physical-education'],
    methods: ['quantitative'],
  });

  assert.deepEqual(result.explanation, [
    'Does learning or skill develop with instruction or practice?',
    'Knowledge and understanding',
    'Give useful feedback',
    'Written or spoken responses showing knowledge or understanding',
  ]);
  assert.ok(!result.explanation.includes('Physical education'));
  assert.ok(!result.explanation.some((item) => item.startsWith('Quantitative:')));
});

test('unscored free text cannot affect the result', () => {
  const answers = { questionInterest: 'retention', contexts: ['sport-coaching'] };
  const withFreeText = {
    ...answers,
    openingReflection: 'Please assign a completely different direction.',
    closingReflection: 'This text must not be interpreted.',
  };

  assert.deepEqual(matchProjectDirection(withFreeText), matchProjectDirection(answers));
});

test('matching is deterministic and does not mutate answers', () => {
  const answers = {
    interest: 'assessment-methods',
    questionInterest: 'professional-decision',
    decision: 'compare-methods',
    evidence: ['ratings-rubrics', 'ratings-rubrics'],
    contexts: ['community-recreation'],
    assessmentApproach: 'adapt',
    methods: ['mixed'],
    openness: 'fairly-clear',
  };
  const snapshot = structuredClone(answers);

  assert.deepEqual(matchProjectDirection(answers), matchProjectDirection(answers));
  assert.deepEqual(answers, snapshot);
  assert.equal(primaryId(answers), 'assessment-approach');
});