# PE3565 Project Studio: Design Specification

## Status

This document records the agreed design direction for a possible PE3565 Project Studio. It is a specification for review, not an implementation plan that has already been approved for release.

No Project Studio functionality should be added to the public site until the question set, matching rules, syllabus language, group worksheet, rubric supports, exports, and privacy disclosures have been reviewed together.

## Purpose

The Project Studio would provide bounded online support for an offline, experiential, group-based course project. Its purpose is to help students:

1. Explore individual interests before groups form.
2. Bring broad project directions into classroom conversation.
3. Negotiate a shared project idea after groups form.
4. Define what project quality could look like through a formative rubric.
5. Export the group's thinking and continue the actual project outside the Studio.

The Studio is a guide to the project, not the project itself. It should help students externalize and examine their thinking without selecting a topic, designing an investigation, interpreting evidence, or making a recommendation for them.

## Pedagogical Boundary

The project is constructed through classroom experience, group negotiation, instructor guidance, peer interaction, investigation, presentation, feedback, and revision. The Studio must support that learning environment rather than attempt to digitize or replace it.

Every proposed feature should be evaluated with these questions:

- Does it begin with learners' experiences, interests, and professional contexts?
- Does it preserve meaningful choice?
- Does it invite questions rather than supply conclusions?
- Does it help learners externalize and examine their reasoning?
- Does it create useful material for dialogue and social negotiation?
- Does it support reflection and revision?
- Does the scaffold recede once a group has a workable direction?
- Does the consequential learning remain in authentic activity, collaboration, feedback, and defense?

The Studio crosses its intended boundary if it:

- Assigns or approves a project topic.
- Recommends a single best project.
- Limits students to a catalog of approved topics or instruments.
- Selects an assessment method for a group.
- Designs measurement procedures.
- Analyzes project data.
- Judges the validity of a group's claims.
- Writes presentation content or a professional recommendation.
- Automatically writes rubric criteria or performance descriptions.
- Tracks assignment completion or calculates grades.
- Replaces instructor, peer, or classroom feedback.

## Relationship To The Syllabus

The current Fall 2026 syllabus source, `PE3565_Collins_Acton_Pobocik.tex`, is the authority for project expectations. Canvas and in-class instructions remain authoritative for deadlines, group instructions, submission requirements, schedule changes, and grading.

The Studio must distinguish four kinds of content:

1. **Syllabus requirement:** an expectation stated for the graded work.
2. **Possible approach named in the syllabus:** an option that may or may not fit a particular project.
3. **Planning prompt:** a question intended to support discussion, not add a requirement.
4. **Group-defined rubric criterion:** the group's own description of project quality, not the instructor's grading criterion.

Student-facing language should state:

> The syllabus, Canvas, and in-class instructions are the authoritative sources for project requirements, deadlines, and grading. Studio prompts support planning and do not add requirements.

### Syllabus-Aligned Project Phases

#### Phase I: Applied Assessment Investigation I

The assignment description requires groups to:

- Identify a meaningful assessment problem related to learning, skill, fitness, or physical performance.
- Select an appropriate assessment method.
- Develop standardized procedures.
- Collect an initial set of data.
- Describe the resulting patterns of performance.
- Present the measurement problem, procedures, data, analysis, and interpretation.
- Respond to questions and incorporate feedback into later work.

The syllabus says analyses **may include** organizing and cleaning data; constructing tables, graphs, and distributions; calculating and interpreting central tendency and variability; interpreting percentiles, standardized scores, and reference values; and comparing individual and group performance. These are possibilities, not universal requirements.

Clarifying the construct early may be a useful planning prompt, but the Phase I assignment description does not explicitly list construct identification as a separate requirement. Construct, population, and context are explicit in the final project expectations.

#### Phase II: Applied Assessment Investigation II

The assignment description requires groups to extend the original investigation by:

- Collecting repeated measurements, examining related variables, or otherwise evaluating whether observed differences or changes are trustworthy and meaningful.
- Evaluating measurement quality.
- Interpreting variation and change.
- Communicating limitations.
- Defending conclusions.
- Incorporating feedback into the final project.

The syllabus says analyses **may include** measurement error, sources of variation, reliability, consistency, correlation, agreement, regression to the mean, standard error of measurement, minimal detectable change, and minimal important difference. The Studio must not imply that every project must use every analysis or conduct a formal reliability study.

The syllabus currently uses two Phase II subtitles:

- The grading table says **Assessment Quality and Meaningful Change**.
- The assignment heading says **Reliability and Meaningful Change**.

The broader **Assessment Quality and Meaningful Change** wording is preferred for future normalization because it includes reliability without implying that reliability analysis is required for every project. The assignment text also contains one reference to "Applied Measurement Investigation I" that should be normalized to "Applied Assessment Investigation I" in the syllabus source before the Studio imports or reproduces titles automatically.

#### Phase III: Assessment and Decision Project

The final integrated presentation is expected to include:

- A clearly defined measurement problem and intended professional decision.
- Identification of the construct, population, and context being assessed.
- Justification of selected assessment methods.
- Description of standardized measurement procedures.
- Clear visualization and interpretation of collected data.
- Evaluation of measurement quality, meaningful change, fairness, feasibility, and limitations.
- A defensible evidence-informed recommendation.

Groups revise and integrate the earlier investigations. Their presentation and defense also demonstrate measurement reasoning, analysis, interpretation, communication, recommendation, meaningful contribution, and individual understanding.

## Scope

The Studio has two separate entry choices:

1. **Explore Your Ideas**
2. **Develop Your Group's Project Idea**

The individual activity does not automatically flow into the group activity. A deliberate classroom pause separates them:

> Bring your ideas to class. Discuss them with your classmates and form a group before developing a shared project idea.

The site should not technologically prevent someone from opening either activity. The boundary is pedagogical, not a locked progression.

## Entry And Integration

The Studio should be implemented, if approved, as a separate `/project/` route with:

- Its own React component and styles.
- Its own temporary browser-session state.
- No dependency on the selected Assessment Lab pathway.
- No changes to Lab activities, XP, module progress, or Glossary Cards state.
- No project content sent to a server.

The existing main-page three-phase project overview should remain. Integration should occur only after the Studio works independently. One restrained **Explore the Project Studio** link should be added to the existing project section. No additional persistent header control is currently proposed.

## Part One: Explore Your Ideas

### Use In Class

The individual activity should take approximately 8-12 minutes. It is an ungraded thinking activity, not an assignment or submission.

Students may:

- Complete it interactively and discuss the result.
- Write down the result.
- Copy a compact summary.
- Print or save a one-page concept brief.
- Choose not to save, print, copy, or share anything.

The site does not collect results for the instructor and does not determine group placement.

### Interaction Pattern

The individual activity should use a short, one-step-at-a-time sequence. Students can move backward, revise responses, and skip questions.

Response controls include:

- Radio buttons for current priorities.
- Checkboxes where interests can coexist.
- Optional free-text fields.
- Explicit open, unsure, or other choices where appropriate.

No question is technically required. If too little focused information is available, the student can review unanswered questions or knowingly continue to an open result.

### Opening Context Reflection

This optional, unscored prompt appears before the matched questions:

> **Think about contexts you know or want to explore.**
>
> Where have you encountered questions about learning, skill, fitness, health, participation, or physical performance?

The response appears in the concept brief but is not interpreted or scored.

### Matcher Question 1: Current Interest

> **What interests you most right now?**

Single-choice options:

- Knowledge and understanding
- Motor skill acquisition
- Immediate skill performance
- Retention of learning
- Transfer of learning
- Affective learning and development
- Fitness or physical capacity
- Health behavior or participation
- Readiness for an activity or professional decision
- Measurement or assessment methods themselves
- Open to several possibilities
- Something else

The distinctions among skill acquisition, immediate performance, retention, and transfer are intentional. The Studio must not imply that immediate performance necessarily demonstrates learning.

### Matcher Question 2: Kind Of Question

> **What kind of question are you most interested in?**
>
> Choose the closest. You can remain open to other directions.

Single-choice options:

- What does current performance, knowledge, behavior, or capacity look like?
- How do people, groups, conditions, or methods compare?
- Does learning or skill develop with instruction or practice?
- Does a change persist after time has passed?
- Does learning or performance transfer to another situation?
- Are measurements consistent or trustworthy?
- How are two or more measures related?
- What evidence could support a professional decision?
- How could an assessment method be created or improved?
- Open to several kinds of questions
- Something else

This response usually anchors the primary project direction.

### Matcher Question 3: Possible Decision

> **What might you want the evidence to help someone do?**
>
> Choose the closest possibility for now.

Single-choice options:

- Understand current performance, learning, behavior, or capacity
- Plan or adjust instruction, practice, training, or support
- Give useful feedback
- Judge readiness for an activity, task, or progression
- Monitor improvement or change
- Compare possible assessment methods or approaches
- Support a participation, safety, or performance decision
- Support a program or organizational decision
- I am not sure yet
- I am open to several possibilities
- Something else

The choice is provisional and does not commit the student or group to the final professional decision.

### Matcher Question 4: Possible Evidence

> **What kinds of evidence might interest you?**
>
> Choose any that seem worth exploring. You do not need to know the exact assessment yet.

Multiple-choice options:

- Physical measurements such as time, distance, repetitions, workload, or physiological responses
- Scores from a test or established assessment
- Checklists, rating scales, or rubric scores
- Direct observation or video of performance or behavior
- Written or spoken responses showing knowledge or understanding
- Experiences, perceptions, interviews, or reflections
- Existing records or previously collected data
- More than one kind of evidence
- I am not sure yet
- I am open to any of these
- Something else

Evidence choices primarily produce additional characteristics. They should have little or no power to override the student's kind-of-question response.

### Matcher Question 5: Project Context

> **In what context or contexts might you like to explore a project?**
>
> Choose any that interest you. The project does not have to match your academic program or intended profession.

Multiple-choice options:

- Physical education
- Health education
- Adventure or outdoor education
- Exercise, fitness, or physical conditioning
- Sport, coaching, or athletic performance
- Allied health or rehabilitation
- Community recreation or physical activity
- Workplace, occupational, or tactical performance
- A cross-approach project connecting more than one context
- Another physical-performance or learning context
- I am not sure yet
- I am open to any context

Context is a project characteristic, not a student classification. The Studio must not ask "What pathway are you?" or automatically reuse the pathway selected elsewhere in the Lab.

### Matcher Question 6: Assessment Approach

> **How might you approach the assessment method?**
>
> Choose the closest possibility for now. You are not selecting a specific instrument.

Single-choice options:

- Use an established assessment or instrument
- Adapt an established assessment for a different context or purpose
- Create an original assessment, scoring method, or measurement approach
- Combine established and original components
- I am not sure yet
- I am open to any of these
- Something else

"Use an established assessment" means identify an appropriate method from any credible source. The Studio must not supply a closed catalog of instruments.

### Matcher Question 7: Method Direction

> **Which method directions would you be willing to explore?**
>
> Choose any that interest you. The project question and evidence should ultimately guide the choice.

Multiple-choice options:

- **Quantitative:** working primarily with numerical measurements, scores, counts, or statistical comparisons
- **Qualitative:** working primarily with observations, descriptions, experiences, explanations, or meanings
- **Mixed methods:** intentionally combining quantitative and qualitative evidence
- I am not sure yet
- I am open to any approach

Method direction is an additional characteristic, not a primary project direction. A method preference must not override the construct, question, evidence needs, or intended decision.

### Optional Support Reflection

This unscored reflection follows method direction:

> **Where might you want support or practice?**

- Working with quantitative evidence
- Working with qualitative evidence
- Combining different forms of evidence
- Selecting an appropriate method
- I am comfortable deciding with my group
- I am not sure yet

Interest and confidence are separate. A student can be interested in quantitative work and need support. The Studio must not assign a remedial project based on self-reported confidence.

### Matcher Question 8: Openness

> **How settled are your project interests right now?**

Single-choice options:

- I have a fairly clear interest or question, but the details can change
- I am deciding among a few possible directions
- I am interested in many directions and would like to see what emerges in a group
- I am open to almost anything
- I do not have a direction yet

This response contributes directly to whether the open result takes precedence.

### Optional Closing Reflections

These answers appear verbatim in the concept brief and are not interpreted:

> **What part of your thinking matters most to you?**

> **What are you most open to changing when you join a group?**

## Need Inspiration

One consistent **Need inspiration?** control should be available throughout the individual activity and remain closed by default.

When opened, it may show content relevant to the current question and allow browsing the broader project-pattern catalog. Inspiration should be organized primarily by project pattern rather than professional context.

Each example should include only:

- A brief starting situation.
- An open measurement or assessment question.

Examples may represent varied contexts and explicit cross-approach possibilities, but they must not provide:

- A named or required assessment instrument.
- A prescribed method.
- A project procedure.
- An expected result.
- A professional recommendation.
- A control that automatically adopts or prepopulates the example.

## Deterministic Matching Model

The matcher is a transparent, static algorithm. It does not use generative AI, transmit responses, or interpret free text.

### Student-Facing Result Label

Use:

> **A project direction to discuss**

Do not use language suggesting diagnosis, assignment, approval, or a best match.

### Eight Predefined Directions

1. **Describe current performance, learning, behavior, or capacity**

   Focus on understanding what is happening now.

2. **Compare performance, groups, conditions, or methods**

   Focus on similarities, differences, or relative performance.

3. **Examine learning or skill development**

   Focus on knowledge, motor skill acquisition, affective development, or another form of learning.

4. **Examine change, retention, or transfer**

   Focus on what changes, whether it persists, or whether it applies in another context.

5. **Evaluate measurement quality or consistency**

   Focus on whether evidence is sufficiently trustworthy and what may influence it.

6. **Investigate relationships among measures**

   Focus on how two or more variables, assessments, or forms of evidence relate.

7. **Develop or adapt an assessment approach**

   Focus on creating, adapting, or examining a method used to collect or interpret evidence.

8. **Stay open while forming a group**

   The student's responses support several directions or intentionally remain broad.

Evidence-informed professional decision making is not a separate direction because every final project must culminate in a professional decision and recommendation.

### Additional Characteristics

The result may display characteristics without multiplying them into separate project types:

- Knowledge and understanding
- Motor skill acquisition
- Immediate skill performance
- Retention
- Transfer
- Affective learning and development
- Fitness or physical capacity
- Health behavior or participation
- Possible professional decision
- Professional context or contexts
- Cross-approach perspective
- Established assessment method
- Original or adapted assessment method
- Quantitative, qualitative, or mixed-method direction
- Possible evidence types
- Support or practice the student may want

### Influence Rules

- The kind-of-question response has the strongest influence and usually anchors the primary direction.
- Current interest and possible decision provide moderate support.
- Assessment approach provides moderate support for developing or adapting an assessment approach.
- Evidence choices primarily generate characteristics and may provide limited support for alternatives.
- Context and method direction generate characteristics only.
- Free text is never interpreted or scored.
- Openness is evaluated explicitly rather than inferred from arbitrary missing data alone.

Exact numerical weights and thresholds remain to be specified and tested before implementation.

### Open Result Rules

**Stay open while forming a group** becomes primary when:

- The student selects **I am open to almost anything** or **I do not have a direction yet** on the final openness question.
- Several major questions receive open or unsure answers and no focused direction clearly leads.
- Several directions are nearly tied and the student indicates broad flexibility.
- Too few focused responses are available and the student knowingly continues to an open result.

Open does not automatically become primary when:

- One answer is open but the overall response pattern is focused.
- The student is open about context or method but has a clear investigative question.

An open result is valid, not an error or deficit.

### Primary And Alternative Directions

- Show one primary direction.
- Show up to two alternatives only when they receive meaningful support.
- Alternatives are unordered.
- Do not add alternatives merely to fill the interface.
- Do not display scores, rankings, confidence percentages, or pseudo-precision.

### Match Explanation

Use a simple selected-response summary:

> **Why this direction appeared**
>
> Your selections included:

Then list relevant selected responses verbatim. Do not assemble a personalized narrative that implies semantic interpretation.

### Student Override

The result screen should state:

> This is one way to interpret your selections, not a project assignment. If another direction fits your thinking better, choose it.

Students may:

- Keep the suggested direction.
- Choose one of the supported alternatives.
- View and choose any of the eight directions.
- Choose **Stay open while forming a group**.
- Keep the result and record disagreement.

The concept brief should preserve both **Direction suggested by the matcher** and **Direction I want to discuss** when the student chooses a different direction.

## Individual Concept Brief

The Studio formats student responses; it does not synthesize them intellectually. The brief should preserve selected options and free text under clear headings rather than force answers into generated prose.

The one-page brief may include:

- Context reflection
- Matcher-suggested direction
- Student-selected discussion direction, if different
- Supported alternative directions
- Additional characteristics
- Possible decision
- Evidence interests
- Project contexts and cross-approach interests
- Assessment and method directions
- Support or practice reflection
- What matters most
- What the student is open to changing

The brief is a conversation starter. It is not submitted, collected, approved, or used by the website to form groups.

Available controls:

- Copy compact summary
- Print / Save concept brief
- Return and revise responses
- Clear this session

## Classroom Handoff

The individual activity ends with a clear pause:

> Bring this thinking into conversation. Discuss your ideas in class and form your group before developing a shared project idea.

Students do not need to share their brief. They may use it privately, write down selected parts, or share any portion they choose.

## Part Two: Develop Your Group's Project Idea

### Use In Class

The group activity supports one or two class periods of discussion and project formation. The Studio is not intended to occupy the entire period or replace group conversation.

A likely rhythm is:

1. Group members discuss individual interests and possible connections away from the screen.
2. The group records a provisional direction.
3. Members challenge and revise the idea through conversation.
4. The group consults planning prompts at useful moments.
5. The group creates a formative project-quality rubric.
6. The group exports its plan and rubric.
7. The project continues through real-world class activity outside the Studio.

### Flexible Worksheet

All group prompts should be available together rather than enforced as a wizard. Group development is nonlinear; groups must be able to move among sections and revise any response.

Suggested expandable sections:

1. **Shared interests and possible context**
2. **Problem, construct, population, and intended decision**
3. **Possible evidence and assessment approaches**
4. **Cross-approach contributions**
5. **Feasibility and unresolved questions**
6. **Create your project rubric**

### Open Discussion Prompts

The worksheet may ask:

- What interests or questions connect the group?
- What possible project context or contexts are emerging?
- What meaningful assessment problem might the group investigate?
- What construct, capability, learning, behavior, or performance might matter?
- What population and setting might be relevant?
- What professional decision could the evidence support?
- What evidence might be useful?
- Might the group use an established assessment, create or adapt something, or combine approaches?
- What would each professional perspective contribute?
- How would cross-approach contributions be integrated rather than placed side by side?
- What important questions remain unresolved?
- What practical constraints involving access, people, time, equipment, facilities, resources, or ethics need discussion?

The worksheet must not score, match, interpret, approve, or complete these responses.

### Syllabus Reference

Include a collapsible **Check the project expectations** reference. It remains closed unless opened and:

- Uses wording drawn from the authoritative syllabus source.
- Shows all three graded phases and presentation expectations.
- Distinguishes requirements from analyses that "may include."
- Reminds students that Canvas and in-class instructions remain authoritative.
- Provides context for the formative rubric without becoming a compliance checklist.

## Formative Project-Quality Rubric

### Purpose

Every group creates a formative rubric to examine and revise the quality of its own project work. This is separate from any rubric, checklist, rating scale, test, instrument, or other method used **within** the investigation.

The formative project-quality rubric:

- Helps the group decide what success looks like across the three project phases.
- Supports self-assessment, peer discussion, rehearsal, and revision.
- Does not replace the instructor's grading criteria.
- Does not determine the official grade.
- Leaves the Studio with the group after export.

The project's own measurement approach must fit its construct and decision. A teaching project might use a rubric to assess knowledge or skill, while an aerobic-capacity project might appropriately use an established physiological or performance assessment instead. The Studio must never imply that every project requires a rubric as its measurement method.

### Choosing Criteria

Groups choose from a visible list of syllabus-derived starter criteria rather than receiving a nearly completed rubric.

Suggested starter criteria:

- Measurement problem and intended professional decision
- Construct, population, and context
- Assessment method and standardized procedures
- Data presentation, analysis, and interpretation
- Measurement quality, meaningful change, and limitations
- Fairness and feasibility
- Evidence-informed recommendation
- Professional communication and defense

Each starter should include a short explanation and identify its syllabus connection. Groups can:

- Select any relevant starters.
- Rename criteria.
- Combine criteria.
- Remove criteria.
- Reorder criteria.
- Add criteria in their own words.

No minimum number is enforced.

### Performance Levels

Provide three editable starter labels:

- Strong
- Developing
- Needs Revision

Groups may rename, add, remove, or reorder levels. Performance descriptions remain blank for the group to write.

Primary instruction:

> Describe what the group's work must include at each level.

An optional **Need help writing descriptions?** control reveals:

- What must be present for work to meet this level?
- What is present here that is missing or incomplete at the next level?
- Could a classmate use this description to review the project?
- Have you described the work instead of only calling it good, clear, or thorough?

An optional neutral example may demonstrate observable distinctions, but it must not provide descriptions for the group's selected project criteria.

### Gentle, Non-Blocking Checks

The Studio may make possible omissions visible without preventing export. Checks may identify:

- Very few selected criteria.
- Empty level descriptions.
- Identical or nearly identical descriptions across levels.
- Criteria not connected to any project phase.
- No group-defined criterion when selected starters may not fully represent the project.

Checks must be phrased as considerations, not validation judgments. The Studio must not declare a rubric valid, reliable, fair, complete, or approved.

## Session Recovery And Privacy

### Storage Model

Use a dedicated `sessionStorage` key for temporary recovery. Do not use the Lab or Glossary Cards `localStorage` keys, accounts, cloud storage, or server persistence.

Temporary session recovery:

- Protects against some accidental refreshes in the same tab.
- Is not transmitted anywhere.
- Is not a reliable project archive.
- May be lost when a tab or browser session closes, browser settings intervene, private browsing ends, site data is cleared, or the student changes devices.
- Should never be described as permanent saving.

Because browser session restoration varies, the site must not promise an exact deletion time.

### Student-Facing Disclosure

Before students begin, explain:

> Your responses stay only in this browser tab so an accidental refresh may not erase your work. Nothing is sent to your instructor or stored by the website. Browser settings, private browsing, closing the tab, ending the browser session, clearing site data, or changing devices may remove your responses. Print, save, or copy anything you want to keep before leaving.

When recovery occurs, display:

> Recovered from this browser session.

Provide **Clear this session** with confirmation.

## Handoff And Exports

The Studio has a firm endpoint: develop the idea, create the rubric, export the work, and leave the Studio.

It is not a project-management system, portfolio, submission portal, or long-term group workspace.

### Individual Export

- Print / Save concept brief
- Copy compact summary as editable text

### Group Interim Export

Groups may export an interim project plan after the first class period and continue from that document during a later period.

- Print / Save interim project plan
- Copy interim project plan as editable text

The Studio does not promise that browser responses will remain available between class periods. A downloadable Studio draft/import system is outside the initial scope.

### Final Group Exports

Provide two separate outputs:

1. **Standalone formative rubric**
   - Print / Save rubric
   - Copy rubric as an editable table

2. **Broader project-planning document containing the rubric**
   - Print / Save project plan
   - Copy project plan as editable text, including a table representation of the rubric

Copied content should paste as a usable table where supported and degrade to readable structured text elsewhere. The site does not prescribe Google Docs, Microsoft Word, Canvas, or another destination.

Before leaving the final screen, repeat:

> This website does not receive or store your work. Before leaving, print, save, or copy anything your group wants to keep.

Once exported, the rubric and project plan belong to the group. Later revision occurs in the group's own documents and classroom work, not in the Studio.

## Accessibility And Interaction Requirements

- Every control must be keyboard operable and visibly focused.
- Radio groups and checkbox groups require meaningful legends and instructions.
- Step changes and recovered-session messages require appropriate status announcements.
- Color cannot be the only indicator of selection, warning, phase, or rubric state.
- Text areas and rubric cells must remain usable at browser zoom and on mobile.
- Rubric tables require a mobile representation that does not create unreadable columns or page-wide horizontal overflow.
- Printing must preserve headings, criteria, level labels, descriptions, and page breaks.
- Copy actions must confirm success without relying only on color.
- Motion must respect reduced-motion preferences.
- Students must be able to review and revise answers before generating a result or export.

## Technical Design Principles

- Astro provides the static `/project/` route and page metadata.
- React manages the interactive individual and group activities.
- Structured TypeScript data stores questions, answer options, direction definitions, characteristics, syllabus references, inspiration examples, rubric starters, and matching weights.
- A pure deterministic function maps structured answers to a primary direction, supported alternatives, characteristics, and selected-response explanation.
- Free-text responses bypass the matcher and remain unmodified except for safe rendering and whitespace handling.
- `sessionStorage` provides temporary recovery under a versioned, Studio-specific key.
- Browser print styles produce PDF/print outputs without a server dependency.
- Clipboard APIs provide editable text and table exports with a fallback when rich clipboard support is unavailable.
- No custom analytics events should contain responses, directions, rubric content, or project content.

## Matcher Validation Before UI Work

The matching model should be implemented and tested as a pure function before building the visible activity.

At minimum, test synthetic profiles for:

- Strong current-description interest.
- Strong comparison interest.
- Knowledge learning and assessment.
- Motor skill acquisition with immediate performance.
- Retention and transfer.
- Fitness or physical-capacity change.
- Measurement quality and consistency.
- Relationships among measures.
- Original or adapted assessment development.
- Quantitative, qualitative, and mixed-method characteristics.
- Single-context and cross-approach characteristics.
- Focused question with open method/context choices.
- One open answer within an otherwise focused profile.
- Several open answers with no clear direction.
- Explicitly open to almost anything.
- No direction yet.
- Skipped questions and insufficient information.
- A single supported alternative.
- Two supported alternatives.
- No supported alternatives.
- Student override of the suggested result.

Assertions should verify:

- The kind-of-question answer usually anchors the primary direction.
- Context and method direction do not override the primary pattern.
- Open context or method choices do not automatically trigger an open primary result.
- Explicit broad openness can trigger the open primary result.
- Alternatives appear only with meaningful support.
- Alternatives are limited to two and treated as unordered.
- Free text does not enter scoring.
- Explanations contain only actual selected responses.
- The same answer set always produces the same result.

## Staged Implementation And Review

### Stage 1: Specify And Test The Matcher

- Finalize exact question data.
- Define the scoring matrix and thresholds.
- Define open-result precedence.
- Define alternative-support thresholds.
- Add pure-function tests for focused, mixed, contradictory, skipped, and open profiles.
- Review outputs before any visible route is introduced.

### Stage 2: Build Individual Exploration In Isolation

- Add the separate `/project/` route.
- Implement questions, navigation, inspiration, temporary session recovery, result override, concept brief, copy, and print.
- Review locally without linking from the existing Lab.
- Test keyboard, mobile, zoom, print, refresh recovery, and no-network behavior.

### Stage 3: Add The Group Worksheet

- Add open, nonlinear planning sections.
- Add the collapsible authoritative syllabus reference.
- Add interim copy and print exports.
- Verify that no matcher or generated interpretation is applied to group responses.

### Stage 4: Add The Rubric Builder

- Add starter-criterion selection and custom criteria.
- Add editable levels and student-written descriptions.
- Add optional writing support and gentle checks.
- Add standalone and combined copy/print outputs.

### Stage 5: Integrate Last

- Run the full production build and editor diagnostics.
- Browser-test the Lab, Glossary Cards, and Project Studio independently.
- Verify that existing Lab and Glossary storage remains unchanged.
- Verify that the Studio works without choosing a Lab pathway.
- Add one link from the existing project section.
- Re-run desktop, mobile, keyboard, print, and production-route checks.
- Deploy only after local review and explicit approval.

## Non-Goals For The Initial Release

- Accounts or authentication
- Instructor dashboard
- Collection of student ideas
- Automatic group formation
- Cloud synchronization
- Long-term project storage
- Shared real-time editing
- Draft-file import/export
- Canvas submission
- Topic approval
- Instrument catalog
- Generated project proposals
- Generated assessment methods
- Automated rubric writing
- Automated rubric validity or quality judgments
- Data analysis
- Presentation generation
- Recommendation generation
- Grading or completion tracking

## Open Design Work

The following items remain intentionally unresolved:

- Exact numerical matcher weights.
- Threshold for a meaningfully supported alternative.
- Tie threshold that contributes to an open result.
- Full inspiration-example set for all eight directions and varied contexts.
- Neutral rubric-writing example.
- Exact copy formats for rich table and plain-text fallback.
- Print layout and pagination behavior.
- Mobile rubric-editing interaction.
- Whether the group worksheet should show all sections expanded initially or remember expansion within the session.
- Final student-facing names for the route, page title, and main-page link.

These should be resolved through content review, algorithm test cases, and local prototypes rather than assumed during implementation.

## Initial Release Success Criteria

The Studio would be ready for release only if:

- Students can complete individual exploration without entering identifying information.
- The matcher produces deterministic, explainable, non-prescriptive results.
- Open students receive a meaningful open result.
- Students can disagree with and replace the suggested discussion direction.
- Inspiration remains hidden unless requested and does not populate answers.
- Context options support cross-approach work without classifying students by pathway.
- Quantitative, qualitative, and mixed-method interests remain characteristics rather than imposed project types.
- Group work remains open, nonlinear, and discussion-based.
- Syllabus requirements and optional analyses are clearly distinguished.
- Groups create rubric criteria and descriptions rather than receiving a completed rubric.
- Checks remain formative and never block export.
- Students can copy editable materials and print or save both agreed group outputs.
- Temporary recovery is accurately explained and does not imply durable storage.
- No project response or content is transmitted through analytics or another service.
- Existing Lab activities, XP, pathway state, module progress, Glossary Cards, and deployed routes continue to behave exactly as before.

## Central Design Commitment

The Studio should help students arrive in class with something worth discussing and help groups leave with something worth testing. It must stop before the website begins doing the experiential, collaborative, interpretive work that belongs to the students and the classroom.