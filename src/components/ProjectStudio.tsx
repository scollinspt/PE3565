import { useEffect, useRef, useState } from 'react';
import {
  assessmentApproachLabels,
  contextLabels,
  decisionLabels,
  evidenceLabels,
  matchProjectDirection,
  matcherOptions,
  methodLabels,
  projectDirections,
  type AssessmentApproachId,
  type ContextId,
  type DecisionId,
  type DirectionId,
  type EvidenceId,
  type InterestId,
  type MatcherAnswers,
  type MatcherOption,
  type MethodId,
  type OpennessId,
  type QuestionInterestId,
} from '../data/projectMatcher';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clipboard,
  ExternalLink,
  Lightbulb,
  LockKeyhole,
  Printer,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

const storageKey = 'pe3565-project-studio-session-v1';

const supportOptions = [
  'Working with quantitative evidence',
  'Working with qualitative evidence',
  'Combining different forms of evidence',
  'Selecting an appropriate method',
  'I am comfortable deciding with my group',
  'I am not sure yet',
] as const;

const inspirationExamples = [
  ['Describe', 'A program wants to understand current participation.', 'What does participation currently look like, and what variation matters?'],
  ['Compare', 'Two settings approach the same learning goal differently.', 'How might performance or experience compare across the settings?'],
  ['Learning', 'Learners practice a new movement or decision skill.', 'What evidence could show how learning develops with practice?'],
  ['Change', 'A training or instructional experience ends.', 'What change might persist or transfer to another situation?'],
  ['Quality', 'People question whether an assessment gives dependable evidence.', 'What could be examined about its consistency or trustworthiness?'],
  ['Relationships', 'Two forms of evidence seem connected.', 'How might the measures relate, and where might they differ?'],
  ['Assessment approach', 'An existing method does not quite fit a context.', 'How might an assessment be adapted or developed without losing its purpose?'],
  ['Open', 'Several classmates bring different interests to a group.', 'What shared assessment problem might emerge through discussion?'],
] as const;

type StudioDraft = {
  answers: MatcherAnswers;
  openingReflection: string;
  support: string[];
  mattersMost: string;
  openToChanging: string;
  selectedDirection?: DirectionId;
  resultNote: string;
  step: number;
  screen: 'intro' | 'questions' | 'result';
};

const emptyDraft: StudioDraft = {
  answers: {},
  openingReflection: '',
  support: [],
  mattersMost: '',
  openToChanging: '',
  resultNote: '',
  step: 0,
  screen: 'intro',
};

type SingleChoiceProps<Id extends string> = {
  name: string;
  options: readonly MatcherOption<Id>[];
  value?: Id;
  onChange: (value: Id) => void;
};

function SingleChoice<Id extends string>({ name, options, value, onChange }: SingleChoiceProps<Id>) {
  return (
    <div className="studio-options">
      {options.map((option) => (
        <label className="studio-option" data-selected={value === option.id} key={option.id}>
          <input type="radio" name={name} value={option.id} checked={value === option.id} onChange={() => onChange(option.id)} />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

type MultipleChoiceProps<Id extends string> = {
  options: readonly MatcherOption<Id>[];
  values?: Id[];
  onChange: (value: Id) => void;
};

function MultipleChoice<Id extends string>({ options, values = [], onChange }: MultipleChoiceProps<Id>) {
  return (
    <div className="studio-options">
      {options.map((option) => (
        <label className="studio-option" data-selected={values.includes(option.id)} key={option.id}>
          <input type="checkbox" value={option.id} checked={values.includes(option.id)} onChange={() => onChange(option.id)} />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function Inspiration() {
  return (
    <details className="studio-inspiration">
      <summary><Lightbulb size={18} aria-hidden="true" /> Need inspiration?</summary>
      <div>
        <p>Browse possible question patterns. These are starting points, not topics to adopt or procedures to follow.</p>
        <ul>
          {inspirationExamples.map(([pattern, situation, question]) => (
            <li key={pattern}>
              <strong>{pattern}</strong>
              <span>{situation}</span>
              <p>{question}</p>
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function ProjectStudio() {
  const [draft, setDraft] = useState<StudioDraft>(emptyDraft);
  const [hydrated, setHydrated] = useState(false);
  const [recovered, setRecovered] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const questionHeadingRef = useRef<HTMLParagraphElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const copyStatusTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(storageKey);
      if (saved) {
        setDraft({ ...emptyDraft, ...JSON.parse(saved) as StudioDraft });
        setRecovered(true);
      }
    } catch {
      sessionStorage.removeItem(storageKey);
    }
    setHydrated(true);
    return () => window.clearTimeout(copyStatusTimerRef.current);
  }, []);

  useEffect(() => {
    if (hydrated) sessionStorage.setItem(storageKey, JSON.stringify(draft));
  }, [draft, hydrated]);

  useEffect(() => {
    if (draft.screen === 'questions') questionHeadingRef.current?.focus();
    if (draft.screen === 'result') resultHeadingRef.current?.focus();
  }, [draft.screen, draft.step]);

  const setAnswer = <Key extends keyof MatcherAnswers>(key: Key, value: MatcherAnswers[Key]) => {
    setDraft((current) => ({ ...current, answers: { ...current.answers, [key]: value } }));
  };

  const toggleAnswer = (key: 'evidence' | 'contexts' | 'methods', value: EvidenceId | ContextId | MethodId) => {
    setDraft((current) => {
      const selected = (current.answers[key] ?? []) as string[];
      const next = selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value];
      return { ...current, answers: { ...current.answers, [key]: next } };
    });
  };

  const toggleSupport = (value: string) => {
    setDraft((current) => ({
      ...current,
      support: current.support.includes(value) ? current.support.filter((item) => item !== value) : [...current.support, value],
    }));
  };

  const showResult = () => {
    const result = matchProjectDirection(draft.answers);
    setDraft((current) => ({ ...current, screen: 'result', selectedDirection: result.primary.id }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSession = () => {
    if (!window.confirm('Clear every Project Studio response from this browser tab?')) return;
    sessionStorage.removeItem(storageKey);
    setDraft(emptyDraft);
    setRecovered(false);
    setCopyStatus('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const result = matchProjectDirection(draft.answers);
  const selectedDirection = projectDirections.find((direction) => direction.id === (draft.selectedDirection ?? result.primary.id)) ?? result.primary;

  const linesFor = (labels: string[]) => labels.length > 0 ? labels.map((label) => `- ${label}`).join('\n') : '- No response selected';
  const compactSummary = [
    'PE3565 Project Studio - Individual Concept Brief',
    '',
    `Direction suggested by the matcher: ${result.primary.label}`,
    `Direction I want to discuss: ${selectedDirection.label}`,
    draft.resultNote ? `My note about the result: ${draft.resultNote}` : '',
    '',
    'Why this direction appeared:',
    linesFor(result.explanation),
    '',
    'Supported alternatives:',
    linesFor(result.alternatives.map(({ label }) => label)),
    '',
    'Additional characteristics:',
    linesFor(result.characteristics),
    '',
    draft.openingReflection ? `Context reflection:\n${draft.openingReflection}` : '',
    draft.answers.decision ? `Possible decision:\n- ${decisionLabels[draft.answers.decision]}` : '',
    draft.answers.evidence ? `Evidence interests:\n${linesFor(draft.answers.evidence.map((id) => evidenceLabels[id]))}` : '',
    draft.answers.contexts ? `Project contexts:\n${linesFor(draft.answers.contexts.map((id) => contextLabels[id]))}` : '',
    draft.answers.assessmentApproach ? `Assessment approach:\n- ${assessmentApproachLabels[draft.answers.assessmentApproach]}` : '',
    draft.answers.methods ? `Method directions:\n${linesFor(draft.answers.methods.map((id) => methodLabels[id]))}` : '',
    draft.support.length > 0 ? `Support or practice:\n${linesFor(draft.support)}` : '',
    draft.mattersMost ? `What matters most:\n${draft.mattersMost}` : '',
    draft.openToChanging ? `What I am open to changing:\n${draft.openToChanging}` : '',
  ].filter(Boolean).join('\n');

  const copySummary = async () => {
    setCopyStatus('Copying concept brief...');
    try {
      await navigator.clipboard.writeText(compactSummary);
      setCopyStatus('Concept brief copied.');
    } catch {
      setCopyStatus('Copy was unavailable. Use Print / Save instead.');
    }
    window.clearTimeout(copyStatusTimerRef.current);
    copyStatusTimerRef.current = window.setTimeout(() => setCopyStatus(''), 4000);
  };

  const steps = [
    {
      label: 'Context reflection',
      content: (
        <fieldset>
          <legend>Think about contexts you know or want to explore.</legend>
          <p className="studio-instruction">Where have you encountered questions about learning, skill, fitness, health, participation, or physical performance?</p>
          <textarea value={draft.openingReflection} onChange={(event) => setDraft((current) => ({ ...current, openingReflection: event.target.value }))} rows={7} placeholder="Optional reflection" />
        </fieldset>
      ),
    },
    {
      label: 'Current interest',
      content: <fieldset><legend>What interests you most right now?</legend><SingleChoice name="interest" options={matcherOptions.interest} value={draft.answers.interest} onChange={(value: InterestId) => setAnswer('interest', value)} /></fieldset>,
    },
    {
      label: 'Kind of question',
      content: <fieldset><legend>What kind of question are you most interested in?</legend><p className="studio-instruction">Choose the closest. You can remain open to other directions.</p><SingleChoice name="question-interest" options={matcherOptions.questionInterest} value={draft.answers.questionInterest} onChange={(value: QuestionInterestId) => setAnswer('questionInterest', value)} /></fieldset>,
    },
    {
      label: 'Possible decision',
      content: <fieldset><legend>What might you want the evidence to help someone do?</legend><p className="studio-instruction">Choose the closest possibility for now.</p><SingleChoice name="decision" options={matcherOptions.decision} value={draft.answers.decision} onChange={(value: DecisionId) => setAnswer('decision', value)} /></fieldset>,
    },
    {
      label: 'Possible evidence',
      content: <fieldset><legend>What kinds of evidence might interest you?</legend><p className="studio-instruction">Choose any that seem worth exploring. You do not need to know the exact assessment yet.</p><MultipleChoice options={matcherOptions.evidence} values={draft.answers.evidence} onChange={(value: EvidenceId) => toggleAnswer('evidence', value)} /></fieldset>,
    },
    {
      label: 'Project context',
      content: <fieldset><legend>In what context or contexts might you like to explore a project?</legend><p className="studio-instruction">Choose any that interest you. The project does not have to match your academic program or intended profession.</p><MultipleChoice options={matcherOptions.contexts} values={draft.answers.contexts} onChange={(value: ContextId) => toggleAnswer('contexts', value)} /></fieldset>,
    },
    {
      label: 'Assessment approach',
      content: <fieldset><legend>How might you approach the assessment method?</legend><p className="studio-instruction">Choose the closest possibility for now. You are not selecting a specific instrument.</p><SingleChoice name="assessment-approach" options={matcherOptions.assessmentApproach} value={draft.answers.assessmentApproach} onChange={(value: AssessmentApproachId) => setAnswer('assessmentApproach', value)} /></fieldset>,
    },
    {
      label: 'Method direction',
      content: (
        <>
          <fieldset><legend>Which method directions would you be willing to explore?</legend><p className="studio-instruction">Choose any that interest you. The project question and evidence should ultimately guide the choice.</p><MultipleChoice options={matcherOptions.methods} values={draft.answers.methods} onChange={(value: MethodId) => toggleAnswer('methods', value)} /></fieldset>
          <fieldset className="studio-followup"><legend>Where might you want support or practice?</legend><p className="studio-instruction">This optional reflection does not affect your match.</p><div className="studio-options">{supportOptions.map((option) => <label className="studio-option" data-selected={draft.support.includes(option)} key={option}><input type="checkbox" checked={draft.support.includes(option)} onChange={() => toggleSupport(option)} /><span>{option}</span></label>)}</div></fieldset>
        </>
      ),
    },
    {
      label: 'Openness',
      content: <fieldset><legend>How settled are your project interests right now?</legend><SingleChoice name="openness" options={matcherOptions.openness} value={draft.answers.openness} onChange={(value: OpennessId) => setAnswer('openness', value)} /></fieldset>,
    },
    {
      label: 'Closing reflection',
      content: (
        <div className="studio-reflections">
          <label><strong>What part of your thinking matters most to you?</strong><textarea value={draft.mattersMost} onChange={(event) => setDraft((current) => ({ ...current, mattersMost: event.target.value }))} rows={5} placeholder="Optional reflection" /></label>
          <label><strong>What are you most open to changing when you join a group?</strong><textarea value={draft.openToChanging} onChange={(event) => setDraft((current) => ({ ...current, openToChanging: event.target.value }))} rows={5} placeholder="Optional reflection" /></label>
        </div>
      ),
    },
  ];

  if (!hydrated) return <main className="studio-loading">Opening Project Studio...</main>;

  return (
    <div className="project-studio">
      <a className="skip-link" href="#studio-main">Skip to Project Studio</a>
      <header className="studio-header">
        <a className="studio-brand" href={import.meta.env.BASE_URL}><span>PE</span><strong>Project Studio</strong></a>
        <a className="studio-return" href={import.meta.env.BASE_URL}>Return to Assessment Lab <ExternalLink size={15} aria-hidden="true" /></a>
      </header>

      <main id="studio-main">
        <p className="sr-only" role="status">
          {draft.screen === 'questions' ? `Step ${draft.step + 1} of ${steps.length}: ${steps[draft.step].label}` : ''}
          {draft.screen === 'result' ? `Result ready: ${result.primary.label}` : ''}
        </p>
        {recovered && <p className="studio-recovered" role="status"><Check size={17} aria-hidden="true" /> Recovered from this browser session.</p>}

        {draft.screen === 'intro' && (
          <section className="studio-intro" aria-labelledby="studio-title">
            <div>
              <p className="section-label">Individual idea exploration</p>
              <h1 id="studio-title">Bring a direction worth discussing.</h1>
              <p className="lede">Explore what interests you, consider possible evidence, and leave with a compact concept brief for conversation in class.</p>
              <button className="primary-button" onClick={() => setDraft((current) => ({ ...current, screen: 'questions' }))}>Explore your ideas <ArrowRight size={18} aria-hidden="true" /></button>
            </div>
            <aside className="studio-privacy" aria-label="Privacy and classroom handoff">
              <LockKeyhole size={25} aria-hidden="true" />
              <div>
                <h2>Your thinking stays with you.</h2>
                <p>Your responses stay only in this browser tab so an accidental refresh may not erase your work. Nothing is sent to your instructor or stored by the website.</p>
                <p>Browser settings, private browsing, closing the tab, ending the browser session, clearing site data, or changing devices may remove your responses. Print, save, or copy anything you want to keep before leaving.</p>
              </div>
            </aside>
            <div className="studio-handoff">
              <Sparkles size={22} aria-hidden="true" />
              <p><strong>This does not assign a project or form a group.</strong> Bring your ideas to class. Discuss them with your classmates and form a group before developing a shared project idea.</p>
            </div>
          </section>
        )}

        {draft.screen === 'questions' && (
          <section className="studio-workspace" aria-labelledby="step-title">
            <aside className="studio-progress">
              <p className="section-label">Explore your ideas</p>
              <p><strong>Step {draft.step + 1} of {steps.length}</strong></p>
              <div className="studio-progress-track" aria-hidden="true"><span style={{ width: `${((draft.step + 1) / steps.length) * 100}%` }} /></div>
              <ol>{steps.map((step, index) => <li key={step.label} data-state={index === draft.step ? 'current' : index < draft.step ? 'visited' : 'upcoming'}><button onClick={() => setDraft((current) => ({ ...current, step: index }))}><span>{index < draft.step ? <Check size={13} aria-hidden="true" /> : index + 1}</span>{step.label}</button></li>)}</ol>
            </aside>
            <div className="studio-question">
              <p className="studio-step-heading" id="step-title" ref={questionHeadingRef} tabIndex={-1}>Step {draft.step + 1} · {steps[draft.step].label}</p>
              <p className="studio-optional">All responses are optional. Skip anything you do not want to answer.</p>
              <div>{steps[draft.step].content}</div>
              <Inspiration />
              <div className="studio-question-actions">
                <button className="text-button" disabled={draft.step === 0} onClick={() => setDraft((current) => ({ ...current, step: current.step - 1 }))}><ArrowLeft size={18} aria-hidden="true" /> Back</button>
                {draft.step < steps.length - 1 ? (
                  <button className="primary-button" onClick={() => setDraft((current) => ({ ...current, step: current.step + 1 }))}>Continue <ArrowRight size={18} aria-hidden="true" /></button>
                ) : (
                  <button className="primary-button" onClick={showResult}>See a direction to discuss <ArrowRight size={18} aria-hidden="true" /></button>
                )}
              </div>
            </div>
          </section>
        )}

        {draft.screen === 'result' && (
          <section className="studio-result" aria-labelledby="result-title">
            <div className="studio-result-heading">
              <p className="section-label">A project direction to discuss</p>
              <h1 id="result-title" ref={resultHeadingRef} tabIndex={-1}>{result.primary.label}</h1>
              <p className="lede">{result.primary.description}</p>
              <dl className="studio-print-directions">
                <div><dt>Direction suggested by the matcher</dt><dd>{result.primary.label}</dd></div>
                <div><dt>Direction I want to discuss</dt><dd>{selectedDirection.label}</dd></div>
              </dl>
            </div>

            <div className="studio-result-layout">
              <div className="studio-brief">
                <section>
                  <h2>Why this direction appeared</h2>
                  <p>Your selections included:</p>
                  {result.explanation.length > 0 ? <ul>{result.explanation.map((item) => <li key={item}>{item}</li>)}</ul> : <p>You left too little focused information for one direction to lead.</p>}
                </section>
                {result.alternatives.length > 0 && <section><h2>Other supported directions</h2><ul>{result.alternatives.map((direction) => <li key={direction.id}><strong>{direction.label}</strong><span>{direction.description}</span></li>)}</ul></section>}
                {result.characteristics.length > 0 && <section><h2>Additional characteristics</h2><ul className="studio-characteristics">{result.characteristics.map((item) => <li key={item}>{item}</li>)}</ul></section>}
                {(draft.openingReflection || draft.support.length > 0 || draft.mattersMost || draft.openToChanging || draft.resultNote) && (
                  <section className="studio-notes">
                    <h2>Your notes</h2>
                    {draft.openingReflection && <div><strong>Context reflection</strong><p>{draft.openingReflection}</p></div>}
                    {draft.support.length > 0 && <div><strong>Support or practice</strong><ul>{draft.support.map((item) => <li key={item}>{item}</li>)}</ul></div>}
                    {draft.mattersMost && <div><strong>What matters most</strong><p>{draft.mattersMost}</p></div>}
                    {draft.openToChanging && <div><strong>What I am open to changing</strong><p>{draft.openToChanging}</p></div>}
                    {draft.resultNote && <div><strong>Disagreement or qualification</strong><p>{draft.resultNote}</p></div>}
                  </section>
                )}
              </div>

              <aside className="studio-override">
                <h2>Your direction, your call.</h2>
                <p>This is one way to interpret your selections, not a project assignment. If another direction fits your thinking better, choose it.</p>
                <fieldset>
                  <legend>Direction I want to discuss</legend>
                  <div className="studio-direction-options">
                    {projectDirections.map((direction) => <label data-selected={selectedDirection.id === direction.id} key={direction.id}><input type="radio" name="chosen-direction" checked={selectedDirection.id === direction.id} onChange={() => setDraft((current) => ({ ...current, selectedDirection: direction.id }))} /><span>{direction.label}</span></label>)}
                  </div>
                </fieldset>
                <label className="studio-result-note"><strong>Want to record a disagreement or qualification?</strong><textarea value={draft.resultNote} onChange={(event) => setDraft((current) => ({ ...current, resultNote: event.target.value }))} rows={4} placeholder="Optional note" /></label>
              </aside>
            </div>

            <div className="studio-export" aria-label="Concept brief actions">
              <div><p className="section-label">Take your thinking with you</p><h2>Bring this into conversation.</h2><p>Discuss your ideas in class and form your group before developing a shared project idea.</p></div>
              <div className="studio-export-actions">
                <button className="primary-button" onClick={copySummary}><Clipboard size={18} aria-hidden="true" /> Copy compact summary</button>
                <button className="studio-secondary-button" onClick={() => window.print()}><Printer size={18} aria-hidden="true" /> Print / Save concept brief</button>
                <button className="text-button" onClick={() => setDraft((current) => ({ ...current, screen: 'questions' }))}><ArrowLeft size={18} aria-hidden="true" /> Return and revise</button>
              </div>
              {copyStatus && <p className="studio-copy-status" role="status">{copyStatus}</p>}
            </div>
          </section>
        )}
      </main>

      <footer className="studio-footer">
        <p>This website does not receive or store your work. Print, save, or copy anything you want to keep before leaving.</p>
        <button className="text-button" onClick={clearSession}><RotateCcw size={16} aria-hidden="true" /> Clear this session</button>
      </footer>
    </div>
  );
}

export default ProjectStudio;