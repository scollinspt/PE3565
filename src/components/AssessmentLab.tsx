import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  Check,
  ChevronRight,
  Compass,
  ExternalLink,
  Eye,
  Gauge,
  Lightbulb,
  LockKeyhole,
  RotateCcw,
  Route,
  Target,
} from 'lucide-react';
import {
  frameworkSteps,
  getActivities,
  modules,
  pathways,
  reasoningChain,
  type Activity,
  type PathwayId,
} from '../data/labContent';

type StoredProgress = {
  pathway: PathwayId | null;
  completed: string[];
  xp: number;
};

const STORAGE_KEY = 'pe3565-assessment-lab-progress-v1';
const initialProgress: StoredProgress = { pathway: null, completed: [], xp: 0 };

function PathwayChooser({ onChoose }: { onChoose: (pathway: PathwayId) => void }) {
  return (
    <section className="onboarding" aria-labelledby="welcome-title">
      <div className="onboarding-copy">
        <p className="section-label">PE3565 · Fall 2026</p>
        <h1 id="welcome-title">Assessment decisions begin with context.</h1>
        <p className="lede">Choose the professional pathway closest to your work. The concepts stay shared; the cases, roles, and consequences adapt.</p>
        <p className="privacy-note"><Eye size={17} aria-hidden="true" /> Your choice and progress remain in this browser.</p>
      </div>
      <div className="course-art">
        <img src={`${import.meta.env.BASE_URL}images/pe3565-course-graphic.png`} alt="Measurement and Assessment course graphic connecting performance testing, data analysis, improvement, quantitative analysis, collaborative interpretation, assessment, and measurement" />
      </div>
      <div className="pathway-grid" aria-label="Choose a professional pathway">
        {pathways.map((pathway, index) => (
          <button
            className="pathway-option"
            key={pathway.id}
            onClick={() => onChoose(pathway.id)}
            style={{ '--pathway-accent': pathway.accent } as React.CSSProperties}
          >
            <span className="pathway-index">0{index + 1}</span>
            <strong>{pathway.label}</strong>
            <span>{pathway.description}</span>
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}

function QuestionActivity({
  activity,
  isComplete,
  onComplete,
}: {
  activity: Activity;
  isComplete: boolean;
  onComplete: (activity: Activity) => void;
}) {
  const [selected, setSelected] = useState<number | null>(isComplete ? activity.correctIndex : null);
  const [submitted, setSubmitted] = useState(isComplete);
  const [showHint, setShowHint] = useState(false);
  const correct = submitted && selected === activity.correctIndex;

  useEffect(() => {
    setSelected(isComplete ? activity.correctIndex : null);
    setSubmitted(isComplete);
    setShowHint(false);
  }, [activity.id, isComplete]);

  function submit() {
    if (selected === null) return;
    setSubmitted(true);
    if (selected === activity.correctIndex) onComplete(activity);
  }

  return (
    <article className="activity" aria-labelledby={`${activity.id}-title`}>
      <div className="activity-heading">
        <div>
          <p className="section-label">{activity.marker}</p>
          <h3 id={`${activity.id}-title`}>{activity.title}</h3>
        </div>
        <span className="xp-value">+{activity.xp} XP</span>
      </div>
      <p className="case-context">{activity.context}</p>
      <fieldset disabled={correct || isComplete}>
        <legend>{activity.prompt}</legend>
        <div className="answer-list">
          {activity.options.map((option, index) => {
            const optionState = submitted && index === selected
              ? index === activity.correctIndex ? 'correct' : 'incorrect'
              : submitted && index === activity.correctIndex ? 'answer' : undefined;
            return (
              <label className="answer-option" data-state={optionState} key={option.text}>
                <input
                  type="radio"
                  name={activity.id}
                  checked={selected === index}
                  onChange={() => { setSelected(index); setSubmitted(false); }}
                />
                <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                <span>{option.text}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      {submitted && selected !== null && (
        <div className={`feedback ${correct ? 'feedback-correct' : 'feedback-revise'}`} role="status">
          <strong>{correct ? 'Reasoning aligned' : 'Revise the inference'}</strong>
          <p>{activity.options[selected].feedback}</p>
          {!correct && <p className="feedback-prompt">Return to the construct and ask what the selected evidence directly represents.</p>}
        </div>
      )}

      {showHint && !correct && <p className="hint" role="note"><Lightbulb size={18} aria-hidden="true" /> {activity.hint}</p>}

      <div className="activity-actions">
        {!correct && !isComplete && (
          <button className="primary-button" onClick={submit} disabled={selected === null}>
            Check reasoning <ChevronRight size={18} aria-hidden="true" />
          </button>
        )}
        {!correct && !isComplete && (
          <button className="text-button" onClick={() => setShowHint((value) => !value)}>
            <Lightbulb size={17} aria-hidden="true" /> {showHint ? 'Hide hint' : 'Use a hint'}
          </button>
        )}
        {(correct || isComplete) && <span className="complete-label"><Check size={18} aria-hidden="true" /> Complete</span>}
      </div>
    </article>
  );
}

export default function AssessmentLab() {
  const [progress, setProgress] = useState<StoredProgress>(initialProgress);
  const [hydrated, setHydrated] = useState(false);
  const [frameworkIndex, setFrameworkIndex] = useState(0);
  const [chainIndex, setChainIndex] = useState(0);
  const [showPathways, setShowPathways] = useState(false);
  const [displayedActivityId, setDisplayedActivityId] = useState<string | null>(null);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress({ ...initialProgress, ...JSON.parse(stored) });
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress, hydrated]);

  if (!hydrated) return <div className="loading-state">Preparing the lab…</div>;

  function choosePathway(pathway: PathwayId) {
    setProgress((current) => ({ ...current, pathway }));
    setDisplayedActivityId(null);
    setShowPathways(false);
  }

  if (!progress.pathway) return <PathwayChooser onChoose={choosePathway} />;

  const pathway = pathways.find((item) => item.id === progress.pathway)!;
  const activities = getActivities(progress.pathway);
  const completedCount = activities.filter((activity) => progress.completed.includes(activity.id)).length;
  const currentIndex = activities.findIndex((activity) => !progress.completed.includes(activity.id));
  const recommendedIndex = currentIndex === -1 ? activities.length - 1 : currentIndex;
  const activeActivity = activities.find((activity) => activity.id === displayedActivityId) ?? activities[recommendedIndex];
  const activeIndex = activities.findIndex((activity) => activity.id === activeActivity.id);
  const percent = Math.round((completedCount / activities.length) * 100);
  const level = Math.min(4, Math.floor(progress.xp / 35) + 1);

  function completeActivity(activity: Activity) {
    setDisplayedActivityId(activity.id);
    setProgress((current) => {
      if (current.completed.includes(activity.id)) return current;
      return { ...current, completed: [...current.completed, activity.id], xp: current.xp + activity.xp };
    });
  }

  function resetProgress() {
    if (window.confirm('Reset pathway, XP, and completed activities in this browser?')) {
      setProgress(initialProgress);
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  return (
    <div className="lab-shell" style={{ '--pathway-accent': pathway.accent } as React.CSSProperties}>
      <a className="skip-link" href="#main-content">Skip to learning activity</a>
      <header className="lab-header">
        <a className="lab-brand" href={`${import.meta.env.BASE_URL}`} aria-label="PE3565 Assessment Lab home">
          <span>PE</span><strong>Assessment Lab</strong>
        </a>
        <div className="header-progress" aria-label={`Level ${level}, ${progress.xp} experience points`}>
          <span>Level {level}</span>
          <div className="xp-track"><span style={{ width: `${Math.min(100, (progress.xp % 35) / 35 * 100)}%` }} /></div>
          <strong>{progress.xp} XP</strong>
        </div>
        <button className="pathway-button" onClick={() => setShowPathways((value) => !value)} aria-expanded={showPathways}>
          <Compass size={18} aria-hidden="true" /> {pathway.shortLabel}
        </button>
      </header>

      {showPathways && (
        <div className="pathway-switcher" role="region" aria-label="Change professional pathway">
          <p>Your progress follows the concept, not the pathway.</p>
          <div>
            {pathways.map((item) => (
              <button key={item.id} onClick={() => choosePathway(item.id)} aria-pressed={item.id === pathway.id}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <main id="main-content">
        <section className="lab-intro" aria-labelledby="lab-title">
          <div className="intro-copy">
            <p className="section-label">Module 01 · Foundations & Alignment</p>
            <h1 id="lab-title">Make the path from evidence to decision explicit.</h1>
            <p>Practice the distinctions that make assessment results fair, meaningful, and professionally useful in {pathway.label}.</p>
            <a className="primary-button" href="#current-activity">Continue module <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="intro-art">
            <img src={`${import.meta.env.BASE_URL}images/pe3565-course-graphic.png`} alt="The course model linking measurement, assessment, performance testing, data analysis, improvement, quantitative analysis, and collaborative interpretation" />
            <figcaption>Measurement · evidence · interpretation · decision</figcaption>
          </figure>
        </section>

        <section className="status-band" aria-label="Module progress">
          <div><Gauge size={22} aria-hidden="true" /><span>Module progress</span><strong>{percent}%</strong></div>
          <div className="module-track"><span style={{ width: `${percent}%` }} /></div>
          <div><Target size={22} aria-hidden="true" /><span>Activities</span><strong>{completedCount}/{activities.length}</strong></div>
          <div><Award size={22} aria-hidden="true" /><span>Accomplishment</span><strong>{percent === 100 ? 'Alignment Analyst' : 'In progress'}</strong></div>
        </section>

        <section className="framework-section" aria-labelledby="framework-title">
          <div className="section-heading">
            <p className="section-label">Assessment framework</p>
            <h2 id="framework-title">Five questions organize the work.</h2>
            <p>Assessment is the gathering and interpretation of evidence to support decisions. Select each question to inspect its role.</p>
          </div>
          <div className="framework-layout">
            <div className="framework-nav" role="tablist" aria-label="Assessment framework steps">
              {frameworkSteps.map((step, index) => (
                <button
                  key={step.number}
                  role="tab"
                  aria-selected={frameworkIndex === index}
                  aria-controls="framework-detail"
                  onClick={() => setFrameworkIndex(index)}
                >
                  <span>{step.number}</span>{step.title}
                </button>
              ))}
            </div>
            <div className="framework-detail" id="framework-detail" role="tabpanel">
              <span className="detail-number">{frameworkSteps[frameworkIndex].number}</span>
              <h3>{frameworkSteps[frameworkIndex].summary}</h3>
              <p>{frameworkSteps[frameworkIndex].detail}</p>
            </div>
          </div>
        </section>

        <section className="reasoning-section" aria-labelledby="reasoning-title">
          <div className="section-heading">
            <p className="section-label">The reasoning chain</p>
            <h2 id="reasoning-title">Do not collapse the steps.</h2>
            <p>A score does not speak for itself. Move from what matters to what the available evidence can justify.</p>
          </div>
          <div className="chain" aria-label="Construct to professional decision">
            {reasoningChain.map((step, index) => (
              <button key={step.label} className={chainIndex === index ? 'active' : ''} onClick={() => setChainIndex(index)}>
                <span>{index + 1}</span><strong>{step.label}</strong><small>{step.question}</small>
              </button>
            ))}
          </div>
          <div className="chain-detail" role="status">
            <Route size={25} aria-hidden="true" />
            <div><strong>{reasoningChain[chainIndex].label}</strong><p>{reasoningChain[chainIndex].detail}</p></div>
          </div>
        </section>

        <section className="practice-section" id="current-activity" aria-labelledby="practice-title">
          <div className="practice-sidebar">
            <p className="section-label">Practice sequence</p>
            <h2 id="practice-title">Build the reasoning one decision at a time.</h2>
            <ol>
              {activities.map((activity, index) => {
                const done = progress.completed.includes(activity.id);
                return (
                  <li key={activity.id} data-state={done ? 'complete' : index === activeIndex ? 'current' : 'queued'}>
                    <span>{done ? <Check size={15} aria-hidden="true" /> : index + 1}</span>
                    <div><strong>{activity.marker}</strong><small>{done ? 'Complete' : index === activeIndex ? 'Current' : 'Up next'}</small></div>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="activity-column">
            {percent === 100 && (
              <div className="achievement" role="status">
                <Award size={30} aria-hidden="true" />
                <div><p className="section-label">Accomplishment earned</p><h3>Alignment Analyst</h3><p>You traced evidence from a defined construct to a bounded professional decision across fields.</p></div>
              </div>
            )}
            <QuestionActivity activity={activeActivity} isComplete={progress.completed.includes(activeActivity.id)} onComplete={completeActivity} />
            {progress.completed.includes(activeActivity.id) && activeIndex < activities.length - 1 && (
              <button className="primary-button continue-button" onClick={() => setDisplayedActivityId(activities[activeIndex + 1].id)}>
                Continue to next activity <ArrowRight size={18} aria-hidden="true" />
              </button>
            )}
          </div>
        </section>

        <section className="module-map" aria-labelledby="module-map-title">
          <div className="section-heading">
            <p className="section-label">Course progression</p>
            <h2 id="module-map-title">Eight modules, one connected practice.</h2>
          </div>
          <ol>
            {modules.map((module, index) => (
              <li key={module} className={index === 0 ? 'available' : ''}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{module}</strong>
                {index === 0 ? <span className="module-state">Available</span> : <LockKeyhole size={16} aria-label="Planned" />}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="lab-footer">
        <div>
          <p className="footer-title">PE3565 Assessment Lab</p>
          <p>An interactive companion for professional reasoning about measurement and assessment.</p>
        </div>
        <div>
          <p>Created by <a href="https://scollinspt.github.io/">Sean M. Collins, PT, ScD <ExternalLink size={14} aria-hidden="true" /></a></p>
          <p>Plymouth State University · Educational use, not clinical decision support.</p>
        </div>
        <button className="text-button reset-button" onClick={resetProgress}><RotateCcw size={16} aria-hidden="true" /> Reset progress</button>
      </footer>
    </div>
  );
}