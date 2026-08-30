# PE3565 Assessment Lab: Design Brief

## Purpose

PE3565 Assessment Lab is a public, interactive companion to Measurement & Assessment in Physical Education. It helps students practice selecting, interpreting, and defending assessment decisions across Adventure Education, Physical Education, Allied Health, and Exercise & Sport Physiology.

## Audience

Students enter from four pathways:

- Adventure Education
- Physical Education
- Allied Health
- Exercise & Sport Physiology

The conceptual standards remain common across pathways. Examples, roles, equipment, settings, and professional consequences adapt to a student's selected pathway. Cross-field challenges deliberately develop transfer.

## Experience Direction

The experience is professional with visible progression. It uses realistic cases, restrained visual rewards, clear progress, and immediate feedback without becoming cartoonish.

The site may use:

- Experience points for meaningful learning actions
- Module and competency progress
- Accomplishments tied to demonstrated skills
- Hints and consequence-free retries
- Decision Challenges that integrate concepts
- Spaced review in later versions

The site will not use public leaderboards, speed rewards, punitive streak loss, or rewards for indiscriminate question volume.

## Intellectual and Visual Identity

The Lab reflects Sean Collins's broader work on making the path from observations and measurements to evidence-informed judgment more explicit. Student-facing attribution links to [Sean Collins's professional site](https://scollinspt.github.io/) without turning the learning experience into a portfolio.

The visual language has a family resemblance to the professional site through teal, green, copper, warm white, Literata headings, DM Sans interface text, ruled structure, and strong accessibility affordances. The Lab retains its own denser, task-focused identity through persistent progress, pathway controls, and explicit interaction states.

The high-resolution course graphic is used as the primary course image. Visual motifs from the Fall 2026 syllabus, including green section labels and an evidence-to-decision structure, inform the interface. The syllabus itself is not reproduced publicly because it contains contact and course-administration information.

## Core Learning Loop

1. Encounter a concise concept explanation.
2. Apply the idea in a pathway-specific case.
3. Receive immediate explanatory feedback.
4. Revise reasoning when needed.
5. Apply the concept in another professional field.
6. Complete an integrated Decision Challenge.

## Conceptual Commitments

The Lab makes a disciplined reasoning chain visible:

```text
Construct
→ observable indicator
→ measurement procedure
→ observed result
→ interpretation
→ professional decision
```

Activities and feedback reinforce that:

- A construct is not its measurement.
- A score is not automatically evidence of the intended construct.
- Evidence is not the conclusion drawn from it.
- Association is not causation.
- Reliability does not establish validity.
- Population or reference-group evidence informs but does not determine an individual decision.
- A visualization is a view of evidence, not the evidence itself.
- Technology can support professional judgment but does not replace human responsibility.

These commitments are conceptually aligned with Models4PT but remain educationally and technically independent from that research project.

## Feedback and Uncertainty

Feedback traces the student's reasoning through five questions:

1. **Construct:** What are we trying to understand?
2. **Evidence:** What did the assessment actually reveal?
3. **Fit:** How well does that evidence represent the construct?
4. **Limits:** What remains uncertain or unsupported?
5. **Decision:** What action is justified now?

Early activities use clearly best answers to establish distinctions. Later Decision Challenges may introduce incomplete evidence, competing explanations, or conclusions that must be limited to what the evidence supports. Hints prompt reconsideration rather than disclose an answer.

## Course Structure

1. Assessment Foundations and Alignment
2. Assessment Timing, Purpose, and Approach
3. Assessment Tools and Scoring
4. Interpreting and Describing Performance
5. Assessment Quality and Fairness
6. Change and Repeated Measurement
7. Relationships, Generalizability, and Transfer
8. Evidence-Informed Assessment Decisions

## Initial Vertical Prototype

The first release tests whether the learning loop is useful and engaging. It includes:

- Welcome and pathway selection
- A five-part interactive assessment framework
- One module on constructs, outcomes, and alignment
- A pathway-specific case
- Four quick checks with feedback and retries
- A cross-field transfer check
- An integrated Decision Challenge
- Browser-saved pathway, XP, and completion state

## Progress Rules

- Correct responses earn XP once; retries support learning but cannot be farmed for additional XP.
- Hints support progress and do not create permanent penalties.
- Completion represents attempted and understood learning activities, not time spent on the site.
- Students may change pathways without losing conceptual progress.
- Progress is stored in the current browser for the prototype and is not an official grade record.

## Accessibility and Privacy

- All interactions must be keyboard operable and visibly focused.
- Meaning cannot depend on color alone.
- Motion respects reduced-motion preferences.
- Text and controls must remain usable on mobile and at browser zoom.
- The prototype collects no names, accounts, grades, or analytics.
- Students can reset locally stored progress.
- First-visit onboarding explains that progress is browser-local, does not sync across devices, and is not a Canvas grade or official course record.
- A persistent footer disclosure explains what is not collected, when progress may be lost, and the educational boundary for Allied Health cases.

## Public Content Boundary

The public repository may contain explanations, practice items, parallel examples, and formative feedback. It must not contain reviewed midterm or final examination items. Public activities can assess the same constructs while using distinct scenarios and wording.

The Lab is an educational environment, not clinical decision support. It does not provide patient-specific diagnosis, prognosis, treatment recommendations, or individualized prediction. Models4PT and the Assessment Lab share selected conceptual commitments but do not share code, data, or operational dependencies.

## Technical Approach

- Astro for static content and GitHub Pages output
- React for the interactive lab experience
- Structured TypeScript data for pathway variants and activities
- Browser `localStorage` for prototype progress
- Official Astro GitHub Action for deployment

## Prototype Success Criteria

The prototype succeeds if students can:

- Select and later change a professional pathway
- Explain the difference between a construct, tool, and observed evidence
- Trace an assessment decision from construct through measurement, evidence, interpretation, and action
- Choose evidence aligned with an intended outcome
- Recognize a conclusion that extends beyond the available evidence
- Apply the same concept in a second professional context
- Complete the module using keyboard or touch input
- Leave and return without losing progress in the same browser

Instructor review should also confirm that public practice content is accurate, professionally authentic, and distinct from secure examination items.