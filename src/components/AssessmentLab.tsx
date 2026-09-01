import { useEffect, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  Check,
  ChevronRight,
  Compass,
  ExternalLink,
  Eye,
  Gauge,
  GraduationCap,
  Lightbulb,
  Layers3,
  RotateCcw,
  Route,
  Target,
} from 'lucide-react';
import {
  getActivities,
  modules,
  pathways,
  projectStages,
  reasoningChain,
  type Activity,
  type ModuleId,
  type PathwayId,
} from '../data/labContent';

type StoredProgress = {
  pathway: PathwayId | null;
  completed: string[];
  xp: number;
  currentModuleId: ModuleId;
  moduleProgress: Partial<Record<ModuleId, string[]>>;
};

const STORAGE_KEY = 'pe3565-assessment-lab-progress-v1';
const initialProgress: StoredProgress = { pathway: null, completed: [], xp: 0, currentModuleId: 1, moduleProgress: {} };

function isModuleId(value: unknown): value is ModuleId {
  return Number.isInteger(value) && Number(value) >= 1 && Number(value) <= 8;
}

function restoreProgress(saved: Partial<StoredProgress>): StoredProgress {
  const legacyCompleted = Array.isArray(saved.completed) ? saved.completed : [];
  const moduleProgress = saved.moduleProgress && typeof saved.moduleProgress === 'object' ? saved.moduleProgress : {};
  const moduleOneCompleted = Array.from(new Set([...(moduleProgress[1] ?? []), ...legacyCompleted]));

  return {
    pathway: saved.pathway ?? null,
    completed: legacyCompleted,
    xp: typeof saved.xp === 'number' ? saved.xp : 0,
    currentModuleId: isModuleId(saved.currentModuleId) ? saved.currentModuleId : 1,
    moduleProgress: { ...moduleProgress, 1: moduleOneCompleted },
  };
}

function PrivacyDetails({ footer = false }: { footer?: boolean }) {
  return (
    <details className={`privacy-details${footer ? ' footer-privacy' : ''}`}>
      <summary>Privacy and progress details</summary>
      <div>
        <ul>
          <li>The Lab does not collect names, email addresses, course accounts, grades, answers, pathway choices, XP, or individual progress.</li>
          <li>Cloudflare Web Analytics collects cookie-free, aggregate traffic and performance information, such as page views, referrers, general location, and browser or device category.</li>
          <li>Aggregate analytics are not connected to a student identity or course record.</li>
          <li>No progress information is sent to your instructor.</li>
          <li>Progress does not sync across devices or browsers.</li>
          <li>Private browsing or clearing site data may remove progress.</li>
          <li>You can change pathways without losing conceptual progress.</li>
        </ul>
        <p>This is a practice environment, not an official course record. Allied Health cases are educational and do not provide clinical guidance.</p>
      </div>
    </details>
  );
}

function PathwayChooser({ onChoose }: { onChoose: (pathway: PathwayId) => void }) {
  return (
    <section className="onboarding" aria-labelledby="welcome-title">
      <div className="onboarding-copy">
        <p className="section-label">PE3565 · Fall 2026</p>
        <h1 id="welcome-title">Assessment decisions begin with context.</h1>
        <p className="lede">Choose the pathway closest to your professional interests. You can change it later without losing conceptual progress.</p>
        <div className="privacy-note">
          <Eye size={19} aria-hidden="true" />
          <p><strong>About your progress</strong>Your pathway, completed activities, and XP are saved only in this browser. Progress does not sync across devices or count as a Canvas grade.</p>
        </div>
        <PrivacyDetails />
        <a className="glossary-entry-link" href={`${import.meta.env.BASE_URL}/glossary/`}>
          <Layers3 size={18} aria-hidden="true" /> Study with Glossary Cards <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="course-art">
        <img src={`${import.meta.env.BASE_URL}/images/pe3565-course-graphic.png`} alt="Measurement and Assessment course graphic connecting performance testing, data analysis, improvement, quantitative analysis, collaborative interpretation, assessment, and measurement" />
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
        setProgress(restoreProgress(JSON.parse(stored)));
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
  const currentModule = modules.find((module) => module.id === progress.currentModuleId)!;
  const activities = getActivities(progress.pathway, currentModule.id);
  const completedActivities = progress.moduleProgress[currentModule.id] ?? [];
  const completedCount = activities.filter((activity) => completedActivities.includes(activity.id)).length;
  const currentIndex = activities.findIndex((activity) => !completedActivities.includes(activity.id));
  const recommendedIndex = currentIndex === -1 ? activities.length - 1 : currentIndex;
  const activeActivity = activities.find((activity) => activity.id === displayedActivityId) ?? activities[recommendedIndex];
  const activeIndex = activities.findIndex((activity) => activity.id === activeActivity.id);
  const nextActivity = activities[activeIndex + 1];
  const percent = Math.round((completedCount / activities.length) * 100);
  const level = Math.min(8, Math.floor(progress.xp / 95) + 1);

  function selectModule(moduleId: ModuleId) {
    setProgress((current) => ({ ...current, currentModuleId: moduleId }));
    setDisplayedActivityId(null);
    setFrameworkIndex(0);
    requestAnimationFrame(() => document.getElementById('module-intro')?.scrollIntoView());
  }

  function completeActivity(activity: Activity) {
    setDisplayedActivityId(activity.id);
    setProgress((current) => {
      const moduleCompleted = current.moduleProgress[currentModule.id] ?? [];
      if (moduleCompleted.includes(activity.id)) return current;
      return {
        ...current,
        completed: currentModule.id === 1 ? [...current.completed, activity.id] : current.completed,
        xp: current.xp + activity.xp,
        moduleProgress: {
          ...current.moduleProgress,
          [currentModule.id]: [...moduleCompleted, activity.id],
        },
      };
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
        <div className="lab-primary-nav">
          <a className="lab-brand" href={`${import.meta.env.BASE_URL}`} aria-label="PE3565 Assessment Lab home">
            <span>PE</span><strong>Assessment Lab</strong>
          </a>
          <a className="glossary-header-link" href={`${import.meta.env.BASE_URL}/glossary/`}>
            <Layers3 size={17} aria-hidden="true" /> Glossary Cards
          </a>
        </div>
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
        <section className="course-orientation" id="module-intro" aria-labelledby="orientation-title">
          <div className="orientation-intro">
            <BookOpen size={24} aria-hidden="true" />
            <div>
              <p className="section-label">Start here</p>
              <h2 id="orientation-title">Learn the idea. Test the reasoning. Use it in your project.</h2>
              <p>Review each concept, complete seven case-based activities, use the feedback to revise, and finish with a professional Decision Challenge.</p>
            </div>
          </div>
          <div className="orientation-course-link">
            <CalendarDays size={21} aria-hidden="true" />
            <p><strong>In class: {currentModule.timing}</strong>Module {currentModule.id} supports {currentModule.project.toLowerCase()} and {currentModule.exam.toLowerCase()} preparation.</p>
          </div>
          <div className="orientation-actions" aria-label="Assessment Lab guide links">
            <a href="#current-activity">{percent > 0 ? 'Continue' : 'Start'} Module {currentModule.id}</a>
            <a href="#course-roadmap">Choose module</a>
            <a href="#project-guide">Project guide</a>
            <PrivacyDetails />
          </div>
          <div className="exam-readiness">
            <GraduationCap size={22} aria-hidden="true" />
            <p><strong>Build exam readiness.</strong> The Lab practices the interpretation and application used on the midterm and final. Consistent success here strengthens preparation; it does not guarantee an exam grade because exams also draw on class activities, investigations, presentations, readings, and discussions.</p>
          </div>
        </section>

        <section className="lab-intro" aria-labelledby="lab-title">
          <div className="intro-copy">
            <p className="section-label">Module {String(currentModule.id).padStart(2, '0')} · {currentModule.title}</p>
            <h1 id="lab-title">{currentModule.headline}</h1>
            <p>{currentModule.description} Apply the ideas in {pathway.label}.</p>
            <a className="primary-button" href="#current-activity">Continue module <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <figure className="intro-art">
            <img src={`${import.meta.env.BASE_URL}/images/pe3565-course-graphic.png`} alt="The course model linking measurement, assessment, performance testing, data analysis, improvement, quantitative analysis, and collaborative interpretation" />
            <figcaption>Measurement · evidence · interpretation · decision</figcaption>
          </figure>
        </section>

        <section className="status-band" aria-label="Module progress">
          <div><Gauge size={22} aria-hidden="true" /><span>Module progress</span><strong>{percent}%</strong></div>
          <div className="module-track"><span style={{ width: `${percent}%` }} /></div>
          <div><Target size={22} aria-hidden="true" /><span>Activities</span><strong>{completedCount}/{activities.length}</strong></div>
          <div><Award size={22} aria-hidden="true" /><span>Accomplishment</span><strong>{percent === 100 ? currentModule.accomplishment : 'In progress'}</strong></div>
        </section>

        <section className="framework-section" aria-labelledby="framework-title">
          <div className="section-heading">
            <p className="section-label">{currentModule.conceptLabel}</p>
            <h2 id="framework-title">{currentModule.conceptTitle}</h2>
            <p>{currentModule.conceptIntro}</p>
          </div>
          <div className="framework-layout">
            <div className="framework-nav" role="tablist" aria-label="Assessment framework steps">
              {currentModule.concepts.map((step, index) => (
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
              <span className="detail-number">{currentModule.concepts[frameworkIndex].number}</span>
              <h3>{currentModule.concepts[frameworkIndex].summary}</h3>
              <p>{currentModule.concepts[frameworkIndex].detail}</p>
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
                const done = completedActivities.includes(activity.id);
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
            <QuestionActivity activity={activeActivity} isComplete={completedActivities.includes(activeActivity.id)} onComplete={completeActivity} />
            {completedActivities.includes(activeActivity.id) && nextActivity && (
              <div className="next-step-panel">
                <div>
                  <p className="section-label">Activity {activeIndex + 1} of {activities.length} complete</p>
                  <h3>Next: {nextActivity.marker}</h3>
                  <p>{nextActivity.title}</p>
                </div>
                <button className="primary-button" onClick={() => setDisplayedActivityId(nextActivity.id)}>
                  Start activity {activeIndex + 2} <ArrowRight size={18} aria-hidden="true" />
                </button>
              </div>
            )}
            {completedActivities.includes(activeActivity.id) && !nextActivity && (
              <div className="module-complete-panel" role="status">
                <Award size={30} aria-hidden="true" />
                <div>
                  <p className="section-label">Module {currentModule.id} complete · 7 of 7 activities</p>
                  <h3>{currentModule.accomplishment}</h3>
                  <p>You completed {currentModule.title}. Your progress is saved in this browser.</p>
                  {currentModule.id < 8 ? (
                    <button className="primary-button" onClick={() => selectModule((currentModule.id + 1) as ModuleId)}>
                      Start Module {currentModule.id + 1}: {modules[currentModule.id].title} <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  ) : (
                    <p>You completed all eight Assessment Lab modules.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="project-guide" id="project-guide" aria-labelledby="project-guide-title">
          <div className="section-heading">
            <p className="section-label">Semester project guide</p>
            <h2 id="project-guide-title">One investigation, developed in three stages.</h2>
            <p>The Lab modules supply the reasoning tools for each stage. Your group keeps the same assessment problem, incorporates feedback, and makes a progressively stronger claim.</p>
          </div>
          <ol className="project-stages">
            {projectStages.map((stage) => (
              <li key={stage.number}>
                <div className="project-stage-heading"><span>{stage.number}</span><small>{stage.timing}</small></div>
                <h3>{stage.title}</h3>
                <p>{stage.detail}</p>
                <div className="project-stage-meta"><span>{stage.modules}</span><strong>{stage.result}</strong></div>
              </li>
            ))}
          </ol>
          <div className="project-studio-entry">
            <div>
              <p className="section-label">Before forming your group</p>
              <h3>Explore a project direction to discuss.</h3>
              <p>Use the individual Project Studio to clarify interests and leave with a compact concept brief for class conversation.</p>
            </div>
            <a className="primary-button" href={`${import.meta.env.BASE_URL}/project/`}>Explore the Project Studio <ArrowRight size={18} aria-hidden="true" /></a>
          </div>
          <p className="schedule-note">Dates follow the tentative Fall 2026 syllabus. Canvas and in-class announcements are the official source for schedule changes and submission instructions.</p>
        </section>

        <section className="module-map" id="course-roadmap" aria-labelledby="module-map-title">
          <div className="section-heading">
            <p className="section-label">Course progression</p>
            <h2 id="module-map-title">Eight modules, one connected practice.</h2>
            <p>All modules are available for self-paced practice. Select any module to begin or continue; syllabus windows show when each topic is emphasized in class.</p>
          </div>
          <ol>
            {modules.map((module) => {
              const moduleActivities = getActivities(progress.pathway!, module.id);
              const moduleCompleted = progress.moduleProgress[module.id] ?? [];
              const moduleDone = moduleActivities.every((activity) => moduleCompleted.includes(activity.id));
              const current = module.id === currentModule.id;
              return (
              <li key={module.title} className={current ? 'current' : ''}>
                <button className="module-select" onClick={() => selectModule(module.id)} aria-current={current ? 'step' : undefined}>
                  <span>{String(module.id).padStart(2, '0')}</span>
                  <small>{module.timing}</small>
                  <strong>{module.title}</strong>
                  <span className="module-project">{module.project}</span>
                  <span className="module-exam">{module.exam}</span>
                  <span className="module-state">{moduleDone ? 'Complete' : current ? 'Current' : moduleCompleted.length > 0 ? 'Continue' : 'Open'}</span>
                </button>
              </li>
              );
            })}
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
        <div className="footer-actions">
          <PrivacyDetails footer />
          <button className="text-button reset-button" onClick={resetProgress}><RotateCcw size={16} aria-hidden="true" /> Reset progress</button>
        </div>
      </footer>
    </div>
  );
}