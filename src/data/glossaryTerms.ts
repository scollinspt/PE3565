export type GlossaryTerm = {
  id: string;
  term: string;
  part: 1 | 2;
  section: number;
  definition: string;
  application: string;
  example: string;
  commonConfusion: string;
  relatedTerms: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    "id": "criterion-referenced-assessment",
    "term": "Criterion-Referenced Assessment",
    "part": 1,
    "section": 1,
    "definition": "An assessment interpreted by comparing performance with a predetermined standard, criterion, or learning outcome. A student's result does not depend on how other students perform.",
    "application": "It indicates whether a learner has demonstrated an intended level of knowledge, skill, or performance and is therefore useful for instructional decisions and standards-based grading.",
    "example": "A student meets the criterion for an overhand throw by demonstrating four specified critical elements, regardless of classmates' scores.",
    "commonConfusion": "Criterion-referenced does not mean easy, pass/fail, or free from professional judgment. The criterion must still be appropriate and clearly defined.",
    "relatedTerms": [
      "Norm-Referenced Assessment",
      "Checklist",
      "Rubric",
      "Summative Assessment"
    ]
  },
  {
    "id": "norm-referenced-assessment",
    "term": "Norm-Referenced Assessment",
    "part": 1,
    "section": 1,
    "definition": "An assessment interpreted by comparing a person's score with the scores of a defined reference group. Results are commonly reported as ranks, percentiles, or standardized scores.",
    "application": "It helps describe relative standing and can identify unusually high or low performance, but it does not by itself show whether a learner has met a specific instructional objective.",
    "example": "A student's fitness score is reported at the 70th percentile compared with students of the same age and sex in the test's norm group.",
    "commonConfusion": "The reference group matters. A percentile is meaningful only in relation to the group and procedures used to create the norms.",
    "relatedTerms": [
      "Criterion-Referenced Assessment",
      "Standardized Score",
      "Percentile"
    ]
  },
  {
    "id": "pre-assessment",
    "term": "Pre-Assessment",
    "part": 1,
    "section": 2,
    "definition": "An assessment administered before instruction, practice, or an intervention to establish initial knowledge, skill, readiness, or performance.",
    "application": "It helps teachers identify starting points, plan instruction, form groups, and create a baseline for evaluating later change.",
    "example": "Before a volleyball unit, students complete a brief rules quiz and demonstrate an underhand serve.",
    "commonConfusion": "A pre-assessment is not automatically diagnostic or ungraded. Its purpose and use must be specified.",
    "relatedTerms": [
      "Post-Assessment",
      "Formative Assessment",
      "Diagnostic Use"
    ]
  },
  {
    "id": "post-assessment",
    "term": "Post-Assessment",
    "part": 1,
    "section": 2,
    "definition": "An assessment administered after instruction, practice, or an intervention to determine current performance and examine change from an earlier point.",
    "application": "It provides evidence about learning or performance after a defined experience and can inform grading, feedback, or program evaluation.",
    "example": "At the end of a health unit, students analyze a new nutrition label using the same criteria applied in the pre-assessment.",
    "commonConfusion": "A higher post-score does not automatically prove that instruction caused the improvement. Practice effects, maturation, and measurement error may also contribute.",
    "relatedTerms": [
      "Pre-Assessment",
      "Summative Assessment",
      "Change Score",
      "Retention Test"
    ]
  },
  {
    "id": "retention-test",
    "term": "Retention Test",
    "part": 1,
    "section": 2,
    "definition": "An assessment given after a delay following instruction or practice to determine how well learning or skill has been maintained.",
    "application": "Immediate post-performance may reflect temporary support, recent practice, or short-term memory. Retention testing provides stronger evidence that learning has persisted.",
    "example": "Students are reassessed on CPR sequence and decision making three weeks after completing the instructional unit.",
    "commonConfusion": "A retention test is not simply another post-test. The planned delay is essential to its purpose.",
    "relatedTerms": [
      "Post-Assessment",
      "Learning",
      "Transfer",
      "Meaningful Change"
    ]
  },
  {
    "id": "checklist",
    "term": "Checklist",
    "part": 1,
    "section": 3,
    "definition": "A list of observable behaviors, features, or steps marked as present or absent, completed or not completed, or yes or no.",
    "application": "Checklists support efficient observation and consistent recording when the primary question is whether specific elements occurred.",
    "example": "During a squat, the observer records whether the student maintains heel contact, knee alignment, trunk control, and the required depth.",
    "commonConfusion": "A checklist records occurrence, not quality. If degree or quality matters, a rating scale or rubric may be more appropriate.",
    "relatedTerms": [
      "Rating Scale",
      "Analytic Rubric",
      "Psychomotor Assessment"
    ]
  },
  {
    "id": "rating-scale",
    "term": "Rating Scale",
    "part": 1,
    "section": 3,
    "definition": "A tool used to judge the degree, frequency, or quality of a behavior or performance along an ordered set of categories or numbers.",
    "application": "It captures more information than a checklist when performance can vary in quality or consistency.",
    "example": "A student's defensive positioning is rated from 1 (rarely maintains appropriate position) to 4 (consistently anticipates and adjusts position).",
    "commonConfusion": "Numbers do not make ratings objective. Clear anchors, observer training, and consistent procedures are still needed.",
    "relatedTerms": [
      "Checklist",
      "Rubric",
      "Objectivity",
      "Reliability"
    ]
  },
  {
    "id": "rubric",
    "term": "Rubric",
    "part": 1,
    "section": 3,
    "definition": "A scoring guide that identifies the criteria used to judge a product or performance and describes expected levels of quality.",
    "application": "Rubrics make expectations visible, support feedback, and help scorers apply criteria more consistently.",
    "example": "A health-promotion presentation is scored for accuracy, use of evidence, audience appropriateness, organization, and delivery.",
    "commonConfusion": "A rubric is not merely a point sheet. Its defining feature is the description of performance criteria and levels.",
    "relatedTerms": [
      "Analytic Rubric",
      "Holistic Rubric",
      "Rating Scale",
      "Criterion-Referenced Assessment"
    ]
  },
  {
    "id": "analytic-rubric",
    "term": "Analytic Rubric",
    "part": 1,
    "section": 3,
    "definition": "A rubric that scores several dimensions or criteria separately before the scores are combined or interpreted. The faculty source uses the label \"Analytical.\"",
    "application": "Separate scores show specific strengths and needs and support targeted feedback or instructional decisions.",
    "example": "A basketball layup is scored separately for approach, takeoff, ball control, use of the backboard, and balance on landing.",
    "commonConfusion": "More criteria do not automatically make a rubric better. Each criterion should represent a meaningful and observable part of the intended performance.",
    "relatedTerms": [
      "Holistic Rubric",
      "Checklist",
      "Feedback"
    ]
  },
  {
    "id": "holistic-rubric",
    "term": "Holistic Rubric",
    "part": 1,
    "section": 3,
    "definition": "A rubric that assigns one overall judgment or score based on the total quality of a performance or product.",
    "application": "It is efficient when an overall judgment is more useful than separate scores for each component.",
    "example": "A student's small-sided game performance receives one overall rating based on decision making, movement, skill execution, and contribution to team play.",
    "commonConfusion": "Holistic scoring is not impressionistic scoring. The performance levels still require clear descriptions and consistent application.",
    "relatedTerms": [
      "Analytic Rubric",
      "Rating Scale",
      "Summative Assessment"
    ]
  },
  {
    "id": "formal-assessment",
    "term": "Formal Assessment",
    "part": 1,
    "section": 4,
    "definition": "A planned assessment administered through defined procedures, tasks, scoring rules, or documentation.",
    "application": "Formal assessments can provide systematic evidence for grading, reporting, placement, or program decisions.",
    "example": "All students complete the same written health assessment under the same time limit using a prepared scoring key.",
    "commonConfusion": "Formal does not necessarily mean standardized, high stakes, written, or summative.",
    "relatedTerms": [
      "Informal Assessment",
      "Standardization",
      "Summative Assessment"
    ]
  },
  {
    "id": "informal-assessment",
    "term": "Informal Assessment",
    "part": 1,
    "section": 4,
    "definition": "Evidence gathered during ordinary instruction or interaction without a highly structured testing procedure.",
    "application": "It allows teachers to notice understanding, misconceptions, effort, readiness, and performance while instruction is occurring.",
    "example": "A teacher listens to student explanations during partner work and adjusts the next task after hearing a recurring misconception.",
    "commonConfusion": "Informal does not mean careless or unimportant. Useful informal assessment still requires attention to what is observed and how it will guide action.",
    "relatedTerms": [
      "Formal Assessment",
      "Formative Assessment",
      "Checking for Understanding"
    ]
  },
  {
    "id": "formative-assessment",
    "term": "Formative Assessment",
    "part": 1,
    "section": 4,
    "definition": "Assessment evidence gathered and used during learning to decide what should happen next in instruction, feedback, or practice.",
    "application": "Its value comes from using evidence to improve ongoing learning rather than merely recording performance.",
    "example": "After observing passing errors, the teacher gives specific feedback and changes the next practice task before reassessing.",
    "commonConfusion": "An assessment is formative because of how its evidence is used, not because it is brief, informal, or ungraded.",
    "relatedTerms": [
      "Summative Assessment",
      "Feedback",
      "Checking for Understanding",
      "Pre-Assessment"
    ]
  },
  {
    "id": "summative-assessment",
    "term": "Summative Assessment",
    "part": 1,
    "section": 4,
    "definition": "Assessment used to summarize achievement or performance at the end of a defined period of instruction, practice, or program activity.",
    "application": "It supports decisions such as grading, reporting, certification, selection, or evaluation of outcomes.",
    "example": "At the end of a fitness-planning unit, students submit and defend a complete personal training plan using a rubric.",
    "commonConfusion": "Summative does not mean traditional or written. A performance demonstration can be summative.",
    "relatedTerms": [
      "Formative Assessment",
      "Post-Assessment",
      "Formal Assessment"
    ]
  },
  {
    "id": "checking-for-understanding-cfu",
    "term": "Checking for Understanding (CFU)",
    "part": 1,
    "section": 4,
    "definition": "A deliberate process of gathering quick evidence during instruction to determine what students currently understand and what needs clarification or adjustment.",
    "application": "CFU helps prevent teachers from moving forward based only on silence, compliance, or a few volunteer responses.",
    "example": "Students hold up response cards identifying which energy system predominates in several short activity scenarios, and the teacher addresses the pattern of errors immediately.",
    "commonConfusion": "Asking \"Does everyone understand?\" is not adequate CFU because it produces little usable evidence.",
    "relatedTerms": [
      "Formative Assessment",
      "Informal Assessment",
      "Feedback"
    ]
  },
  {
    "id": "traditional-assessment",
    "term": "Traditional Assessment",
    "part": 1,
    "section": 5,
    "definition": "Assessment that typically asks students to select, recall, or produce answers under controlled conditions, often through written tests, quizzes, or isolated tasks.",
    "application": "Traditional methods can assess knowledge efficiently and may be appropriate when the intended outcome is factual understanding, recognition, or application in a constrained format.",
    "example": "Students complete a multiple-choice quiz on exercise safety principles and signs of heat illness.",
    "commonConfusion": "Traditional does not mean invalid or inferior. Appropriateness depends on the intended learning outcome and decision.",
    "relatedTerms": [
      "Alternative Assessment",
      "Authentic Assessment",
      "Cognitive Assessment"
    ]
  },
  {
    "id": "alternative-assessment",
    "term": "Alternative Assessment",
    "part": 1,
    "section": 5,
    "definition": "A broad category of assessment methods used instead of, or in addition to, conventional selected-response tests. These methods commonly require students to construct, demonstrate, explain, or apply learning.",
    "application": "Alternative methods can provide evidence of outcomes that are difficult to capture through conventional written testing alone.",
    "example": "Students design an inclusive warm-up, explain their choices, and revise it after peer feedback.",
    "commonConfusion": "Alternative and authentic are related but not identical. An alternative task may still be artificial or disconnected from real professional use.",
    "relatedTerms": [
      "Traditional Assessment",
      "Authentic Assessment",
      "Performance Assessment"
    ]
  },
  {
    "id": "authentic-assessment",
    "term": "Authentic Assessment",
    "part": 1,
    "section": 5,
    "definition": "Assessment that asks learners to apply knowledge and skill to a meaningful task resembling the way competence is used in real life, professional practice, or a realistic performance context.",
    "application": "It can show whether students can integrate and use learning rather than only recall isolated information.",
    "example": "Students analyze a school's physical-activity data and present an evidence-informed recommendation to improve participation.",
    "commonConfusion": "A task is not authentic merely because it is hands-on or complicated. The task, context, and judgment should reflect meaningful use of the learning.",
    "relatedTerms": [
      "Alternative Assessment",
      "Performance Assessment",
      "Transfer"
    ]
  },
  {
    "id": "cognitive-assessment",
    "term": "Cognitive Assessment",
    "part": 1,
    "section": 6,
    "definition": "Assessment of knowledge and thinking, including recall, comprehension, application, analysis, judgment, and problem solving.",
    "application": "Physical education and health education require students to understand principles, make decisions, interpret information, and explain reasoning in addition to performing skills.",
    "example": "Students compare two training plans and justify which is safer and better aligned with a client's goals.",
    "commonConfusion": "Cognitive assessment is not limited to written tests. Discussion, explanation, concept mapping, and decision tasks can also assess thinking.",
    "relatedTerms": [
      "Psychomotor Assessment",
      "Affective Assessment",
      "Traditional Assessment"
    ]
  },
  {
    "id": "psychomotor-assessment-skill",
    "term": "Psychomotor Assessment (Skill)",
    "part": 1,
    "section": 6,
    "definition": "Assessment of movement, motor skill, physical performance, or the execution of a task requiring coordinated action.",
    "application": "It provides direct evidence of what a learner can perform, not merely what the learner knows about the performance.",
    "example": "A student performs a sequence of balance, travel, and object-control skills while the teacher uses an analytic rubric.",
    "commonConfusion": "Outcome alone may not represent skill quality. A successful result can occur despite poor technique, and good technique may not always produce a successful outcome on one attempt.",
    "relatedTerms": [
      "Checklist",
      "Rating Scale",
      "Analytic Rubric",
      "Authentic Assessment"
    ]
  },
  {
    "id": "affective-assessment",
    "term": "Affective Assessment",
    "part": 1,
    "section": 6,
    "definition": "Assessment of attitudes, values, motivation, confidence, responsibility, cooperation, self-management, or other dispositions related to learning and participation.",
    "application": "These outcomes influence engagement and behavior, but they require careful definition because they are often inferred rather than directly observed.",
    "example": "Students complete a structured reflection using evidence from class to evaluate how consistently they supported equitable participation in group activities.",
    "commonConfusion": "Compliance, athletic ability, personality, and likability should not be treated as interchangeable with affective learning. The intended construct and evidence must be explicit.",
    "relatedTerms": [
      "Cognitive Assessment",
      "Psychomotor Assessment",
      "Self-Assessment",
      "Bias"
    ]
  },
  {
    "id": "reliability",
    "term": "Reliability",
    "part": 2,
    "section": 7,
    "definition": "The extent to which assessment scores are consistent across repeated measurements, occasions, tasks, items, or scorers when the attribute being measured has not meaningfully changed.",
    "application": "Reliability helps determine how much confidence can be placed in differences among scores or changes over time. More reliable measurements contain less random error and provide a stronger basis for instructional and professional decisions.",
    "example": "Students complete the same balance assessment on two occasions under similar conditions. If their scores are reasonably consistent across the two occasions, the assessment demonstrates evidence of test-retest reliability.",
    "commonConfusion": "Reliability does not mean that every repeated score will be identical, and a reliable assessment is not automatically valid. An assessment may produce highly consistent scores while measuring the wrong construct.",
    "relatedTerms": [
      "Measurement Error",
      "Standard Error of Measurement",
      "Objectivity",
      "Validity",
      "Minimal Detectable Change"
    ]
  },
  {
    "id": "validity",
    "term": "Validity",
    "part": 2,
    "section": 7,
    "definition": "The degree to which evidence and reasoning support the interpretation and use of assessment scores for a particular purpose, population, and context.",
    "application": "Validity is considered when deciding whether an assessment provides appropriate evidence for the conclusion or decision being made. This requires alignment among the intended construct, assessment task, procedures, scoring, interpretation, and professional use.",
    "example": "A written test about the critical elements of an overhand throw may provide useful evidence of students' knowledge, but it does not by itself provide valid evidence that students can perform the skill.",
    "commonConfusion": "Validity is not simply a permanent property of a test. A test may support one interpretation or use but not another, and high reliability alone does not establish validity.",
    "relatedTerms": [
      "Reliability",
      "Construct",
      "Alignment",
      "Fairness",
      "Evidence-Informed Decision Making"
    ]
  },
  {
    "id": "objectivity",
    "term": "Objectivity",
    "part": 2,
    "section": 7,
    "definition": "The extent to which an assessment result is independent of the individual who administers, observes, or scores it. Objectivity is reflected in agreement among qualified scorers applying the same procedures and criteria.",
    "application": "Objectivity is especially important when assessments require observation or professional judgment. Clear criteria, explicit scoring rules, scorer training, and opportunities to practice applying the criteria can reduce unwanted differences among scorers.",
    "example": "Two teachers independently use the same analytic rubric to score recorded volleyball serves. Similar ratings across the two teachers provide evidence of scorer objectivity.",
    "commonConfusion": "An assessment is not objective merely because it produces a number. Rating scales, rubrics, timing procedures, and automated devices can still involve judgment, ambiguity, or procedural inconsistency.",
    "relatedTerms": [
      "Reliability",
      "Inter-Rater Agreement",
      "Rating Scale",
      "Rubric",
      "Standardization"
    ]
  },
  {
    "id": "measurement-error",
    "term": "Measurement Error",
    "part": 2,
    "section": 7,
    "definition": "The difference between an observed score and the value that would be obtained if the attribute could be measured perfectly under the intended conditions. Measurement error may arise from the person, task, observer, instrument, environment, or measurement procedure.",
    "application": "Recognizing measurement error prevents small score differences from being treated automatically as genuine differences in knowledge, skill, fitness, or performance. Identifying likely sources of error can also improve assessment procedures.",
    "example": "A student's sprint time may vary because of timing error, fatigue, motivation, surface conditions, starting technique, or ordinary fluctuations in performance, even when the student's underlying ability has not meaningfully changed.",
    "commonConfusion": "Measurement error does not necessarily mean that someone made a mistake. Some variation is expected whenever a characteristic is measured, even when procedures are followed carefully.",
    "relatedTerms": [
      "Reliability",
      "Standard Error of Measurement",
      "Observed Score",
      "True Score",
      "Minimal Detectable Change"
    ]
  },
  {
    "id": "standard-error-of-measurement-sem",
    "term": "Standard Error of Measurement (SEM)",
    "part": 2,
    "section": 7,
    "definition": "An estimate of the typical amount of random measurement error associated with an individual's observed score, expressed in the same units as the assessment.",
    "application": "The SEM helps describe the precision of an individual score and can be used to construct a range of plausible values around that score. It also contributes to calculations of minimal detectable change.",
    "example": "If a fitness assessment has an SEM of 2 repetitions, an observed score of 30 repetitions should not be interpreted as perfectly precise. Small differences of one or two repetitions may reflect ordinary measurement error rather than a genuine performance difference.",
    "commonConfusion": "The SEM is not the same as the standard deviation or the standard error of the mean. Standard deviation describes variation among scores, whereas the SEM estimates uncertainty in an individual's observed score.",
    "relatedTerms": [
      "Measurement Error",
      "Reliability",
      "Standard Deviation",
      "Confidence Interval",
      "Minimal Detectable Change"
    ]
  },
  {
    "id": "minimal-detectable-change-mdc",
    "term": "Minimal Detectable Change (MDC)",
    "part": 2,
    "section": 7,
    "definition": "The smallest change between repeated scores that is expected to exceed measurement error at a specified level of confidence.",
    "application": "The MDC helps determine whether an observed change is likely to represent a real change rather than ordinary variation in measurement. It is useful when interpreting pre-assessment and post-assessment scores or repeated performance measures.",
    "example": "If the MDC for a balance assessment is 4 points, an improvement from 20 to 22 points may not be distinguishable from measurement error, whereas an improvement from 20 to 25 points exceeds the MDC.",
    "commonConfusion": "Exceeding the MDC indicates that a change is probably larger than measurement error; it does not establish that the change is important, beneficial, caused by an intervention, or meaningful in practice.",
    "relatedTerms": [
      "Standard Error of Measurement",
      "Measurement Error",
      "Reliability",
      "Change Score",
      "Minimal Important Difference"
    ]
  },
  {
    "id": "minimal-important-difference-mid",
    "term": "Minimal Important Difference (MID)",
    "part": 2,
    "section": 7,
    "definition": "The smallest difference or change in an assessment result considered meaningful for learners, teachers, clients, or other relevant decision makers in a particular context. In some fields, the related term Minimal Clinically Important Difference (MCID) is used.",
    "application": "The MID helps determine whether the size of an observed change is important enough to influence instruction, participation, intervention, goal setting, or another professional decision. Its value depends on the construct, population, context, and consequences of the decision.",
    "example": "A one-second improvement in a running assessment may exceed measurement error, but whether it represents an important improvement depends on the learner's initial performance, goals, context, and the decision being considered.",
    "commonConfusion": "The MID and MDC answer different questions. The MDC asks whether a change is larger than measurement error; the MID asks whether the change is important in practice. A change may exceed one threshold without exceeding the other.",
    "relatedTerms": [
      "Minimal Detectable Change",
      "Meaningful Change",
      "Professional Decision",
      "Change Score",
      "Practical Significance"
    ]
  },
  {
    "id": "regression-to-the-mean",
    "term": "Regression to the Mean",
    "part": 2,
    "section": 7,
    "definition": "The statistical tendency for an unusually high or unusually low score to be followed by a score closer to the group's typical value when measurement is repeated.",
    "application": "Regression to the mean should be considered when people are selected for attention because of extreme initial scores. Some apparent improvement or decline may occur even without a meaningful change in the underlying attribute.",
    "example": "Students with the lowest scores on an initial fitness assessment are selected for additional support. On reassessment, some scores improve partly because unusually low first performances are likely to be followed by less extreme scores.",
    "commonConfusion": "Regression to the mean is not evidence that everyone becomes average, and it does not mean that an intervention had no effect. It is one possible explanation for change that must be considered alongside instruction, practice, maturation, motivation, and measurement error.",
    "relatedTerms": [
      "Pre-Assessment",
      "Post-Assessment",
      "Measurement Error",
      "Change Score",
      "Repeated Measurement"
    ]
  },
  {
    "id": "distribution",
    "term": "Distribution",
    "part": 2,
    "section": 8,
    "definition": "The overall pattern of scores within a group, including their center, spread, and shape.",
    "application": "Examining the distribution helps determine whether scores are clustered, widely dispersed, symmetric, or influenced by unusually high or low values before selecting summary statistics or interpreting performance.",
    "example": "Most students score between 80 and 90 on a fitness knowledge quiz, with only a few much lower scores. The distribution indicates generally high performance with a small number of lower-performing students.",
    "commonConfusion": "A distribution describes the pattern of all scores, not the performance of any one individual.",
    "relatedTerms": [
      "Mean",
      "Median",
      "Mode",
      "Variation",
      "Standard Deviation"
    ]
  },
  {
    "id": "mean",
    "term": "Mean",
    "part": 2,
    "section": 8,
    "definition": "The arithmetic average obtained by adding all scores and dividing by the number of scores.",
    "application": "The mean summarizes the typical performance of a group and is commonly used when scores are approximately symmetric and not heavily influenced by extreme values.",
    "example": "If five students score 70, 75, 80, 85, and 90, the mean score is 80.",
    "commonConfusion": "The mean is sensitive to unusually high or low scores and does not necessarily represent the score earned by any individual.",
    "relatedTerms": [
      "Median",
      "Mode",
      "Distribution",
      "Standard Deviation"
    ]
  },
  {
    "id": "median",
    "term": "Median",
    "part": 2,
    "section": 8,
    "definition": "The middle score when observations are arranged in order from lowest to highest.",
    "application": "The median is useful when distributions are skewed or contain extreme values because it is less affected by outliers than the mean.",
    "example": "In the ordered scores 60, 68, 74, 81, and 99, the median is 74.",
    "commonConfusion": "The median is the middle position in an ordered list, not necessarily the most common score.",
    "relatedTerms": [
      "Mean",
      "Mode",
      "Distribution"
    ]
  },
  {
    "id": "mode",
    "term": "Mode",
    "part": 2,
    "section": 8,
    "definition": "The score or value that occurs most frequently within a dataset.",
    "application": "The mode identifies the most common outcome and is especially useful for categorical data or when repeated values are of interest.",
    "example": "If assessment scores are 8, 8, 9, 10, and 10, the dataset has two modes: 8 and 10.",
    "commonConfusion": "A dataset may have one mode, multiple modes, or no repeated values at all.",
    "relatedTerms": [
      "Mean",
      "Median",
      "Distribution"
    ]
  },
  {
    "id": "range",
    "term": "Range",
    "part": 2,
    "section": 8,
    "definition": "The difference between the highest and lowest scores in a dataset.",
    "application": "The range provides a simple measure of how widely scores are spread, although it is strongly influenced by extreme values.",
    "example": "If scores range from 62 to 94, the range is 32 points.",
    "commonConfusion": "The range considers only the highest and lowest scores and ignores how all other scores are distributed.",
    "relatedTerms": [
      "Variation",
      "Standard Deviation",
      "Distribution"
    ]
  },
  {
    "id": "variation",
    "term": "Variation",
    "part": 2,
    "section": 8,
    "definition": "The extent to which scores differ from one another within a dataset. Greater variation indicates that scores are more spread out, whereas less variation indicates that scores are more similar.",
    "application": "Understanding variation helps teachers determine whether students are performing similarly or whether substantial differences exist that may require differentiated instruction or further investigation.",
    "example": "Two classes may have the same average fitness score, but one class has very similar scores while the other includes both very high- and very low-performing students. The second class demonstrates greater variation.",
    "commonConfusion": "Variation is a general concept describing spread. Statistics such as the range and standard deviation are specific methods used to quantify variation.",
    "relatedTerms": [
      "Range",
      "Standard Deviation",
      "Distribution"
    ]
  },
  {
    "id": "standard-deviation",
    "term": "Standard Deviation",
    "part": 2,
    "section": 8,
    "definition": "A statistic that describes the average distance of scores from the mean. Larger standard deviations indicate greater variation among scores, whereas smaller values indicate that scores cluster more closely around the mean.",
    "application": "Standard deviation helps teachers judge whether student performances are relatively consistent or highly variable and provides important context when interpreting individual scores.",
    "example": "Two classes both have an average score of 80. A standard deviation of 3 indicates that most students performed similarly, whereas a standard deviation of 12 indicates much greater differences among students.",
    "commonConfusion": "Standard deviation measures the spread of scores around the mean, not the accuracy or quality of the assessment itself.",
    "relatedTerms": [
      "Variation",
      "Mean",
      "Distribution",
      "Standard Error of Measurement"
    ]
  },
  {
    "id": "percentile",
    "term": "Percentile",
    "part": 2,
    "section": 8,
    "definition": "A score indicating the percentage of individuals in a reference group who scored at or below a particular score.",
    "application": "Percentiles allow teachers to compare an individual's performance with that of a larger reference population rather than only with classmates.",
    "example": "A student at the 75th percentile on a fitness assessment performed as well as or better than 75% of individuals in the comparison group.",
    "commonConfusion": "A percentile is not the percentage of questions answered correctly or the percentage earned on an assessment.",
    "relatedTerms": [
      "Norm-Referenced Assessment",
      "Standardized Score"
    ]
  },
  {
    "id": "standardized-score",
    "term": "Standardized Score",
    "part": 2,
    "section": 8,
    "definition": "A score that has been transformed to a common scale to allow meaningful comparisons across individuals, assessments, or populations. Examples include z-scores, T-scores, and standard scores reported by many standardized assessments.",
    "application": "Standardized scores allow teachers to compare performances measured on different scales and to interpret an individual's standing relative to a reference population.",
    "example": "A student's raw score on a physical fitness assessment is converted to a z-score, allowing comparison with students of the same age and sex.",
    "commonConfusion": "A standardized score is not the same as a standardized test. A standardized score is a transformed value; a standardized test refers to an assessment administered and scored using standardized procedures.",
    "relatedTerms": [
      "Percentile",
      "Norm-Referenced Assessment",
      "Distribution"
    ]
  },
  {
    "id": "correlation",
    "term": "Correlation",
    "part": 2,
    "section": 9,
    "definition": "A statistical measure describing the strength and direction of the relationship between two variables. Correlation coefficients range from -1 to +1, where values closer to ±1 indicate stronger relationships and values near zero indicate little or no linear relationship.",
    "application": "Correlation is used to evaluate whether two assessments produce similar patterns of scores or whether one characteristic tends to increase or decrease as another changes.",
    "example": "Students with higher aerobic fitness scores also tend to perform better on a distance run, producing a strong positive correlation between the two measures.",
    "commonConfusion": "Correlation does not demonstrate that one variable causes changes in another. Two variables may be strongly correlated for many reasons, including shared underlying factors.",
    "relatedTerms": [
      "Association",
      "Prediction",
      "Validity"
    ]
  },
  {
    "id": "agreement",
    "term": "Agreement",
    "part": 2,
    "section": 9,
    "definition": "The extent to which two or more measurements, raters, or assessment methods produce the same or nearly the same results for the same individuals.",
    "application": "Agreement is important when determining whether different teachers, observers, or assessment methods can be used interchangeably or consistently.",
    "example": "Two physical education teachers independently score a student's overhand throw using the same rubric and assign nearly identical ratings, demonstrating good agreement.",
    "commonConfusion": "Agreement is not the same as correlation. Two methods can be highly correlated while consistently producing different scores.",
    "relatedTerms": [
      "Objectivity",
      "Reliability",
      "Correlation"
    ]
  },
  {
    "id": "association",
    "term": "Association",
    "part": 2,
    "section": 9,
    "definition": "A general term describing whether two variables are related in some way. Association may refer to linear or non-linear relationships and does not imply a specific statistical measure.",
    "application": "Association provides a broad description of relationships before selecting an appropriate statistical method to quantify them.",
    "example": "Students who participate more frequently in physical activity tend to demonstrate higher cardiorespiratory fitness, indicating an association between activity level and fitness.",
    "commonConfusion": "Association is a broader concept than correlation. Correlation is one specific method for quantifying certain types of associations.",
    "relatedTerms": [
      "Correlation",
      "Prediction"
    ]
  },
  {
    "id": "prediction",
    "term": "Prediction",
    "part": 2,
    "section": 9,
    "definition": "The process of estimating an unknown value or future outcome using information from one or more measured variables.",
    "application": "Prediction models are used to estimate performance, fitness, or future outcomes from existing assessment data. The accuracy of a prediction depends on the quality of the underlying relationship and the amount of unexplained variation.",
    "example": "Performance on a submaximal exercise test is used to estimate an individual's maximal aerobic capacity (VO₂ max).",
    "commonConfusion": "Prediction does not imply certainty. Even strong predictive relationships contain error, and predicted values should be interpreted as estimates rather than exact values.",
    "relatedTerms": [
      "Correlation",
      "Association",
      "Validity"
    ]
  },
  {
    "id": "construct",
    "term": "Construct",
    "part": 2,
    "section": 10,
    "definition": "The underlying knowledge, skill, ability, or characteristic that an assessment is intended to measure. Constructs cannot be observed directly but are inferred from performance on assessment tasks.",
    "application": "Clearly identifying the construct helps ensure that assessment tasks measure the intended learning outcome rather than unrelated factors.",
    "example": "A dribbling assessment should measure ball-control skill, not reading ability or cardiovascular endurance.",
    "commonConfusion": "A construct is the characteristic being measured, not the assessment tool itself.",
    "relatedTerms": [
      "Validity",
      "Evidence",
      "Learning Outcome"
    ]
  },
  {
    "id": "evidence",
    "term": "Evidence",
    "part": 2,
    "section": 10,
    "definition": "Information collected through assessment that supports conclusions about student learning, performance, or achievement. Evidence may include observations, performances, written work, test scores, or other demonstrations of learning.",
    "application": "Professional decisions should be based on multiple sources of evidence rather than a single assessment whenever possible.",
    "example": "A teacher combines skill observations, peer assessments, and a written rules quiz to evaluate a student's understanding of volleyball.",
    "commonConfusion": "Evidence is the information collected, not the conclusion drawn from it.",
    "relatedTerms": [
      "Assessment",
      "Construct",
      "Evidence-Informed Decision Making"
    ]
  },
  {
    "id": "evidence-informed-decision-making",
    "term": "Evidence-Informed Decision Making",
    "part": 2,
    "section": 10,
    "definition": "The process of making instructional or assessment decisions by integrating assessment evidence with professional expertise, educational goals, and contextual factors.",
    "application": "Teachers use evidence to identify learning needs, modify instruction, provide feedback, and make defensible grading decisions.",
    "example": "After reviewing assessment results, a teacher decides to spend additional time practicing throwing mechanics because most students have not yet demonstrated proficiency.",
    "commonConfusion": "Evidence informs professional judgment but does not replace it. Effective decisions also require consideration of context and educational purpose.",
    "relatedTerms": [
      "Evidence",
      "Professional Judgment",
      "Formative Assessment"
    ]
  },
  {
    "id": "fairness",
    "term": "Fairness",
    "part": 2,
    "section": 10,
    "definition": "The principle that assessments should provide all learners with an equitable opportunity to demonstrate their knowledge and skills without being disadvantaged by irrelevant factors.",
    "application": "Fair assessments reduce unnecessary barriers, provide appropriate accommodations when needed, and evaluate only the intended construct.",
    "example": "A teacher provides visual demonstrations before a skill assessment so that language proficiency does not unnecessarily affect performance.",
    "commonConfusion": "Fairness does not require identical treatment for every student; it requires equitable opportunities to demonstrate learning.",
    "relatedTerms": [
      "Bias",
      "Validity",
      "Accessibility"
    ]
  },
  {
    "id": "bias",
    "term": "Bias",
    "part": 2,
    "section": 10,
    "definition": "A systematic influence that unfairly advantages or disadvantages certain individuals or groups, leading assessment results to reflect factors unrelated to the intended construct.",
    "application": "Teachers should evaluate assessments for potential sources of bias that may distort interpretation or reduce fairness.",
    "example": "A written assessment containing unnecessary cultural references may disadvantage students unfamiliar with those experiences despite having mastered the intended learning outcomes.",
    "commonConfusion": "Bias refers to systematic unfairness in assessment, not simply differences in student performance.",
    "relatedTerms": [
      "Fairness",
      "Validity",
      "Construct"
    ]
  },
  {
    "id": "feasibility",
    "term": "Feasibility",
    "part": 2,
    "section": 10,
    "definition": "The practicality of implementing an assessment given available time, equipment, facilities, personnel, and resources.",
    "application": "Even highly valid assessments may be unsuitable if they cannot be administered efficiently within normal teaching conditions.",
    "example": "A teacher selects a shuttle-run test because it can be completed with an entire class during a single lesson using available equipment.",
    "commonConfusion": "The most feasible assessment is not necessarily the highest-quality assessment; practical considerations must be balanced with measurement quality.",
    "relatedTerms": [
      "Validity",
      "Reliability",
      "Standardization"
    ]
  },
  {
    "id": "standardization",
    "term": "Standardization",
    "part": 2,
    "section": 10,
    "definition": "The use of consistent procedures for administering, scoring, and interpreting an assessment so that results are comparable across students, settings, and occasions.",
    "application": "Standardization minimizes unwanted variation caused by inconsistent testing procedures and improves confidence in assessment results.",
    "example": "Every student receives the same instructions, warm-up, equipment, scoring criteria, and testing time during a fitness assessment.",
    "commonConfusion": "Standardization refers to consistent administration procedures, not whether an assessment is commercially standardized or norm-referenced.",
    "relatedTerms": [
      "Reliability",
      "Objectivity",
      "Standardized Test"
    ]
  },
  {
    "id": "generalizability",
    "term": "Generalizability",
    "part": 2,
    "section": 10,
    "definition": "The extent to which assessment results accurately represent performance across similar tasks, settings, occasions, or populations beyond the specific assessment that was administered.",
    "application": "Teachers should consider whether assessment evidence reflects stable learning or only performance under one specific set of conditions.",
    "example": "A student's successful performance in one modified basketball drill may not generalize to full game play unless additional evidence supports that conclusion.",
    "commonConfusion": "Generalizability concerns the applicability of assessment results beyond the observed situation, not whether results can be generalized to every learner.",
    "relatedTerms": [
      "Validity",
      "Reliability",
      "Transfer"
    ]
  },
  {
    "id": "transfer",
    "term": "Transfer",
    "part": 2,
    "section": 10,
    "definition": "The application of knowledge, skills, or strategies learned in one context to a different task, setting, or situation.",
    "application": "One goal of assessment is to determine whether students can transfer learning beyond isolated practice activities into authentic performance situations.",
    "example": "A student who learns proper passing technique during practice successfully applies the same skill during competitive game play.",
    "commonConfusion": "Transfer reflects the application of learning in new contexts, not simply repeating a practiced task under identical conditions.",
    "relatedTerms": [
      "Generalizability",
      "Construct",
      "Authentic Assessment"
    ]
  }
];
