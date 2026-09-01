import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronLeft,
  ChevronRight,
  Layers3,
  RefreshCw,
  RotateCcw,
} from 'lucide-react';
import { glossaryTerms } from '../data/glossaryTerms';

type Direction = 'term-first' | 'information-first';
type Order = 'glossary' | 'shuffle';

type StoredCardProgress = {
  selectedIds: string[];
  direction: Direction;
  order: Order;
  knownIds: string[];
  reviewIds: string[];
};

const STORAGE_KEY = 'pe3565-glossary-cards-v1';
const allIds = glossaryTerms.map((term) => term.id);
const sectionNames = [
  'Interpreting Performance',
  'Timing and Change',
  'Assessment Tools',
  'Assessment Purpose and Structure',
  'Approaches to Assessment',
  'Domains of Learning',
  'Assessment Quality and Meaningful Change',
  'Describing and Interpreting Data',
  'Relationships Among Measures',
  'Professional Decision Making',
];

function shuffle(ids: string[]) {
  const shuffled = [...ids];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function validIds(ids: unknown) {
  return Array.isArray(ids) ? ids.filter((id): id is string => typeof id === 'string' && allIds.includes(id)) : [];
}

export default function GlossaryCards() {
  const [selectedIds, setSelectedIds] = useState(allIds);
  const [direction, setDirection] = useState<Direction>('term-first');
  const [order, setOrder] = useState<Order>('shuffle');
  const [sequence, setSequence] = useState<string[]>(allIds);
  const [knownIds, setKnownIds] = useState<string[]>([]);
  const [reviewIds, setReviewIds] = useState<string[]>([]);
  const [reviewOnly, setReviewOnly] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const saved = JSON.parse(stored) as Partial<StoredCardProgress>;
        const restoredSelected = validIds(saved.selectedIds);
        const restoredDirection = saved.direction === 'information-first' ? saved.direction : 'term-first';
        const restoredOrder = saved.order === 'glossary' ? saved.order : 'shuffle';
        setSelectedIds(restoredSelected);
        setDirection(restoredDirection);
        setOrder(restoredOrder);
        setSequence(restoredOrder === 'shuffle' ? shuffle(restoredSelected) : restoredSelected);
        setKnownIds(validIds(saved.knownIds));
        setReviewIds(validIds(saved.reviewIds));
      } catch {
        window.localStorage.removeItem(STORAGE_KEY);
        setSequence(shuffle(allIds));
      }
    } else {
      setSequence(shuffle(allIds));
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const progress: StoredCardProgress = { selectedIds, direction, order, knownIds, reviewIds };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [selectedIds, direction, order, knownIds, reviewIds, hydrated]);

  const selectedSet = new Set(selectedIds);
  const reviewSet = new Set(reviewIds);
  const activeSequence = sequence.filter((id) => selectedSet.has(id) && (!reviewOnly || reviewSet.has(id)));
  const safeIndex = activeSequence.length === 0 ? 0 : Math.min(currentIndex, activeSequence.length - 1);
  const currentTerm = glossaryTerms.find((term) => term.id === activeSequence[safeIndex]);
  const knownInSet = selectedIds.filter((id) => knownIds.includes(id)).length;
  const reviewInSet = selectedIds.filter((id) => reviewIds.includes(id)).length;

  function updateSelection(ids: string[]) {
    const orderedIds = allIds.filter((id) => ids.includes(id));
    setSelectedIds(orderedIds);
    setSequence(order === 'shuffle' ? shuffle(orderedIds) : orderedIds);
    setReviewOnly(false);
    setCurrentIndex(0);
    setFlipped(false);
  }

  function selectPart(part: 1 | 2) {
    updateSelection(glossaryTerms.filter((term) => term.part === part).map((term) => term.id));
  }

  function toggleSection(section: number) {
    const sectionIds = glossaryTerms.filter((term) => term.section === section).map((term) => term.id);
    const sectionIsSelected = sectionIds.every((id) => selectedSet.has(id));
    updateSelection(sectionIsSelected
      ? selectedIds.filter((id) => !sectionIds.includes(id))
      : [...selectedIds, ...sectionIds]);
  }

  function toggleTerm(id: string) {
    updateSelection(selectedSet.has(id) ? selectedIds.filter((selectedId) => selectedId !== id) : [...selectedIds, id]);
  }

  function changeOrder(nextOrder: Order) {
    setOrder(nextOrder);
    setSequence(nextOrder === 'shuffle' ? shuffle(selectedIds) : [...selectedIds]);
    setCurrentIndex(0);
    setFlipped(false);
  }

  function move(offset: number) {
    if (activeSequence.length === 0) return;
    setCurrentIndex((safeIndex + offset + activeSequence.length) % activeSequence.length);
    setFlipped(false);
  }

  function rateCurrent(rating: 'known' | 'review') {
    if (!currentTerm) return;
    if (rating === 'known') {
      setKnownIds((ids) => Array.from(new Set([...ids, currentTerm.id])));
      setReviewIds((ids) => ids.filter((id) => id !== currentTerm.id));
    } else {
      setReviewIds((ids) => Array.from(new Set([...ids, currentTerm.id])));
      setKnownIds((ids) => ids.filter((id) => id !== currentTerm.id));
    }
    move(1);
  }

  function resetCardProgress() {
    if (!window.confirm('Reset glossary selections and Know / Review Later progress in this browser?')) return;
    setSelectedIds(allIds);
    setDirection('term-first');
    setOrder('shuffle');
    setSequence(shuffle(allIds));
    setKnownIds([]);
    setReviewIds([]);
    setReviewOnly(false);
    setCurrentIndex(0);
    setFlipped(false);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  if (!hydrated) return <div className="glossary-loading">Preparing glossary cards…</div>;

  return (
    <div className="glossary-shell">
      <a className="skip-link" href="#study-card">Skip to study card</a>
      <header className="glossary-header">
        <a className="lab-brand" href={import.meta.env.BASE_URL} aria-label="Return to PE3565 Assessment Lab">
          <span>PE</span><strong>Assessment Lab</strong>
        </a>
        <span className="glossary-page-title"><Layers3 size={18} aria-hidden="true" /> Glossary Cards</span>
        <a className="header-return" href={import.meta.env.BASE_URL}><ArrowLeft size={17} aria-hidden="true" /> Return to Lab</a>
      </header>

      <main>
        <section className="glossary-intro" aria-labelledby="glossary-title">
          <div>
            <p className="section-label">PE3565 study guide</p>
            <h1 id="glossary-title">Build fluency, one term at a time.</h1>
          </div>
          <p>Select the concepts you want to practice, choose which side appears first, and turn each card over to confirm your recall. Your study choices stay in this browser and do not affect Lab progress or grades.</p>
        </section>

        <section className="glossary-workspace" aria-label="Glossary card study tool">
          <aside className="set-builder" aria-labelledby="set-builder-title">
            <div className="set-builder-heading">
              <div>
                <p className="section-label">Practice set</p>
                <h2 id="set-builder-title">Choose terms</h2>
              </div>
              <strong>{selectedIds.length}<span> of {glossaryTerms.length}</span></strong>
            </div>

            <div className="preset-controls" aria-label="Practice set presets">
              <button onClick={() => updateSelection(allIds)}>All</button>
              <button onClick={() => selectPart(1)}>Part I</button>
              <button onClick={() => selectPart(2)}>Part II</button>
              <button onClick={() => updateSelection([])}>Clear</button>
            </div>

            <div className="section-selector">
              {sectionNames.map((name, index) => {
                const section = index + 1;
                const terms = glossaryTerms.filter((term) => term.section === section);
                const selectedCount = terms.filter((term) => selectedSet.has(term.id)).length;
                return (
                  <details key={name} open={selectedCount > 0 && selectedCount < terms.length}>
                    <summary>
                      <label onClick={(event) => event.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={selectedCount === terms.length}
                          ref={(input) => { if (input) input.indeterminate = selectedCount > 0 && selectedCount < terms.length; }}
                          onChange={() => toggleSection(section)}
                        />
                        <span><small>{String(section).padStart(2, '0')} · Part {section <= 6 ? 'I' : 'II'}</small>{name}</span>
                      </label>
                      <span>{selectedCount}/{terms.length}</span>
                    </summary>
                    <div className="term-selector">
                      {terms.map((term) => (
                        <label key={term.id}>
                          <input type="checkbox" checked={selectedSet.has(term.id)} onChange={() => toggleTerm(term.id)} />
                          <span>{term.term}</span>
                        </label>
                      ))}
                    </div>
                  </details>
                );
              })}
            </div>
          </aside>

          <div className="study-area">
            <div className="study-toolbar">
              <div>
                <span>Show first</span>
                <div className="segmented-control">
                  <button aria-pressed={direction === 'term-first'} onClick={() => { setDirection('term-first'); setFlipped(false); }}>Term</button>
                  <button aria-pressed={direction === 'information-first'} onClick={() => { setDirection('information-first'); setFlipped(false); }}>Information</button>
                </div>
              </div>
              <div>
                <span>Card order</span>
                <div className="segmented-control">
                  <button aria-pressed={order === 'shuffle'} onClick={() => changeOrder('shuffle')}>Shuffle</button>
                  <button aria-pressed={order === 'glossary'} onClick={() => changeOrder('glossary')}>Glossary</button>
                </div>
              </div>
              <button className="icon-command" onClick={() => { setSequence(shuffle(selectedIds)); setCurrentIndex(0); setFlipped(false); }} disabled={selectedIds.length < 2} title="Reshuffle cards">
                <RefreshCw size={19} aria-hidden="true" /><span>Reshuffle</span>
              </button>
            </div>

            <div className="study-status" aria-live="polite">
              <span>{reviewOnly ? 'Review Later pile' : 'Current practice set'}</span>
              <strong>{activeSequence.length === 0 ? 0 : safeIndex + 1} / {activeSequence.length}</strong>
              <div><span className="known-count"><Check size={14} aria-hidden="true" /> {knownInSet} know</span><span className="review-count"><RotateCcw size={14} aria-hidden="true" /> {reviewInSet} review later</span></div>
            </div>

            {currentTerm ? (
              <>
                <button
                  className={`study-card${flipped ? ' is-flipped' : ''}`}
                  id="study-card"
                  onClick={() => setFlipped((value) => !value)}
                  aria-label={flipped
                    ? `Hide answer for ${currentTerm.term}`
                    : direction === 'term-first'
                      ? `Reveal information for ${currentTerm.term}`
                      : 'Reveal the term for this information'}
                >
                  <span className="card-context">Part {currentTerm.part} · Section {currentTerm.section} · {sectionNames[currentTerm.section - 1]}</span>
                  {!flipped && direction === 'term-first' && <strong className="card-term">{currentTerm.term}</strong>}
                  {!flipped && direction === 'information-first' && (
                    <span className="card-information card-prompt-information">
                      <span><b>Definition</b>{currentTerm.definition}</span>
                      <span><b>Application</b>{currentTerm.application}</span>
                    </span>
                  )}
                  {flipped && (
                    <span className="card-information">
                      <strong>{currentTerm.term}</strong>
                      <span><b>Definition</b>{currentTerm.definition}</span>
                      <span><b>Application</b>{currentTerm.application}</span>
                      <span><b>Example</b>{currentTerm.example}</span>
                      <span><b>Common confusion</b>{currentTerm.commonConfusion}</span>
                      <span><b>Related terms</b>{currentTerm.relatedTerms.join(' · ')}</span>
                    </span>
                  )}
                  <span className="flip-cue"><RefreshCw size={16} aria-hidden="true" /> {flipped ? 'Show prompt' : direction === 'term-first' ? 'Reveal information' : 'Reveal term'}</span>
                </button>

                <div className="card-actions">
                  <button className="card-nav-button" onClick={() => move(-1)} aria-label="Previous card"><ChevronLeft size={22} aria-hidden="true" /></button>
                  <button className="review-button" onClick={() => rateCurrent('review')}><RotateCcw size={18} aria-hidden="true" /> Review later</button>
                  <button className="know-button" onClick={() => rateCurrent('known')}><Check size={18} aria-hidden="true" /> Know</button>
                  <button className="card-nav-button" onClick={() => move(1)} aria-label="Next card"><ChevronRight size={22} aria-hidden="true" /></button>
                </div>
              </>
            ) : (
              <div className="empty-study-state" id="study-card">
                <BookOpen size={34} aria-hidden="true" />
                <h2>{reviewOnly ? 'Your Review Later pile is empty.' : 'Choose at least one glossary term.'}</h2>
                <p>{reviewOnly ? 'Return to the full practice set or mark cards for later review.' : 'Use the practice-set controls to select a part, section, or individual term.'}</p>
              </div>
            )}

            <div className="review-tools">
              <button onClick={() => { setReviewOnly((value) => !value); setCurrentIndex(0); setFlipped(false); }} disabled={reviewIds.length === 0 && !reviewOnly}>
                {reviewOnly ? 'Return to practice set' : `Practice Review Later pile (${reviewInSet})`} <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button className="text-button reset-button" onClick={resetCardProgress}><RotateCcw size={16} aria-hidden="true" /> Reset card progress</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="glossary-footer">
        <p><strong>PE3565 Glossary Cards</strong> Interactive study support for Measurement &amp; Assessment in Physical Education.</p>
        <a href={import.meta.env.BASE_URL}>Return to Assessment Lab <ArrowRight size={15} aria-hidden="true" /></a>
      </footer>
    </div>
  );
}