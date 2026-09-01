# PE3565 Assessment Lab

An interactive learning environment for Measurement & Assessment across Adventure Education, Physical Education, Allied Health, and Exercise & Sport Physiology.

Created by [Sean M. Collins, PT, ScD](https://scollinspt.github.io/) at Plymouth State University. The Lab shares an emphasis on explicit, inspectable reasoning with Sean's broader work while remaining an independent educational project.

## Current Release

The Lab includes eight self-paced modules spanning assessment foundations through evidence-informed decisions. Each module provides concept review, pathway-adapted cases, four quick checks, a cross-field transfer activity, and an integrated Decision Challenge. Module selection, completion, and XP persist in the current browser.

The release also includes Glossary Cards at `/glossary/` and the individual Project Studio at `/project/`. The Project Studio helps students explore a direction for classroom discussion through a deterministic, explainable matcher. Open-ended responses are preserved verbatim for the student's concept brief but are never interpreted or scored. Studio work uses separate, temporary `sessionStorage`; it is not transmitted or added to Lab progress.

```sh
npm install
npm run dev
```

Create a production build with `npm run build`. Run the Project Studio matcher tests with `npm run test:matcher`. The site is configured for publication at `https://scollinspt.github.io/PE3565/` through GitHub Pages.

See [docs/DESIGN-BRIEF.md](docs/DESIGN-BRIEF.md) for the learning and product design. The Project Studio's staged design, implemented individual experience, and planned group-work stages are specified in [docs/PROJECT-STUDIO-SPEC.md](docs/PROJECT-STUDIO-SPEC.md).

## Content Boundary

This public repository contains practice and learning content only. Secure midterm and final examination banks are maintained outside the repository.
