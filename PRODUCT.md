# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and technical managers assessing Vincent Mangel for a Tech Lead or software architect role. This audience was confirmed by the site owner. Engineering clients and business decision-makers are a secondary audience.

## Product Purpose

A public CV and portfolio that lets visitors understand Vincent's experience, review concrete assignments, download the PDF CV, and contact him about a role or mission.

## Positioning

The profile combines hands-on full-stack development with technical leadership and software architecture. Evidence includes application modernization, target architecture, data migration, team guidance, and a front-end lead role on an internal agentic Private GPT platform.

Vincent works across the full stack and has a preference for front-end development.

## Current Search Focus

- Vincent is actively seeking a software architect role in Lyon, under a permanent CDI contract, with a three-month notice period.
- For project work, Vincent prefers a forfait engagement to régie, with a shared objective and room to grow with the company and support its teams over time.
- He wants to keep learning and sharing knowledge, while accounting for both technical constraints and the people who use and build the solutions.

## Operating Context

Visitors typically scan the first screen, look for role fit and relevant client work, then choose whether to read the full career history or contact Vincent. The site offers a downloadable PDF, email, phone, calendar, and LinkedIn links.

## Capabilities and Constraints

- Static React, TypeScript, and Vite site. The production build is committed in `www/` and served by OVH.
- Push completed changes directly to `main`; do not create pull requests.
- Run `npm run build` before pushing site changes; this regenerates the tracked production site in `www/`.
- Keep the site responsive, keyboard usable, and readable without interaction. Expandable mission details may remain progressive disclosure.
- Preserve the scope of the Private GPT assignment: front-end architecture and delivery; another team owned back-end and infrastructure.
- Use recruiter and commercial terminology only when it describes evidenced work. Do not invent outcomes, testimonials, client names, or measurements.

## Approved KPI Presentation

Show these six figures in a 2×3 grid, in this order: **10+ client missions**, **8+ clients**, **11 years of experience**, **5 distinct role families**, **10+ front-end skills**, and **15+ back-end and infrastructure skills**. Keep each cell to its figure and label; do not add per-cell explanations or a methodology footnote.

The mission figure is a lower bound: eight client organizations are named in the site's career history, and Ayming covered three separate projects. Exclude the internal Private GPT project and unnamed work from the minimum. The two PDF copies in `public/` and `www/` are identical; that CV names seven client groups and describes further missions without numbering them. Counting Ayming's three projects separately gives nine explicit client projects in that PDF, so it cannot establish an exact career total by itself. SMERRA and INDESO appear in the broader site history, which supports the site's 10+ lower bound. The client figure is also a lower bound: the history mentions assignments for unnamed clients, so do not present eight as the exact career total. The role count groups similar titles into five families: technical leadership, architecture, software development, technical analysis, and project management. The “10+” and “15+” skill figures are lower bounds supplied by the site owner.

## Editorial Preferences

- Write site descriptions in Vincent’s first-person voice where natural; keep the copy direct and grounded in the CV.
- Use the supplied black-and-white portrait in the hero, with named client examples in the experience timeline.
- Combine section numbers and titles in a single heading, such as `01 / EXPERTISES`.
- List experience newest first.
- Do not number the three expertise columns; those categories are parallel areas, not a sequence.
- Keep forest green as the primary color. Keep the header on the paper background; the hero should not use a large solid-color card.
- Pair the introduction with the supplied portrait, replacing the former three-step approach summary. Keep the hero headline moderate in size and the portrait compact (up to 210px wide on desktop, 60-80px on mobile). Center it horizontally in the right-hand column on desktop; keep it beside the role and aligned to the right on mobile.
- Keep the jury role readable without making it the largest copy in its section; make the interests and knowledge in art, exhibitions, creative workshops, marketing, video games, and communication equally legible.
- Label the header download button `CV`; keep a clearly named PDF download in the contact links and omit it from the footer.
- Use a simple white `VM` monogram on a forest-green favicon background.
- Avoid sales clichés and unsupported claims.
- Use the standard hyphen for visible sentence breaks and date ranges; avoid long dash characters in site copy.

## Brand Commitments

Use direct, professional language that can speak to recruiters and commercial decision-makers. Avoid generic claims and decorative copy.

## Evidence on Hand

- `public/CV_Vincent_Mangel.pdf` is the supplied CV.
- The career history starts in September 2015; as of October 2026 it represents 11 years of experience.
- Three ESN employers are listed: Exakis-Nelite, Apollo SSC, and Exo Partners.
- At least eight named client organizations appear in the assignments: Watts, Legrand, CNR, Ayming, Stanley Security France, Groupe APICIL, SMERRA, and INDESO. The career history also refers to other client assignments without naming each organization, so the exact total is unknown. The internal Private GPT project is not counted as a client.
- Five role families appear across the missions: technical leadership, architecture, software development, technical analysis, and project management. Similar titles such as “Tech Lead” and “Lead Developer” are grouped together.
- The site shows at least 10 front-end skills and 15 back-end and infrastructure skills, based on the CV and mission history.
- The Ayming assignment covered three projects in parallel.
- The Private GPT assignment was an agentic platform front-end rewrite from Blazor to React.
- The site owner supplied the black-and-white portrait stored in `src/assets/vincent-mangel.jpg`. No client logos, product screenshots, quantified business outcomes, or testimonial assets are present in the repository.
- The site owner prefers forest green as the primary color, a paper-colored header, and no large green hero card. They chose their portrait to replace the three-step approach summary in the hero, keeping the smaller headline that describes work from scoping to delivery. They prefer direct implementation rather than a mockup approval stage.

## Product Principles

- Put role fit and evidenced project work ahead of generic positioning language.
- Make the client count and concrete modernization work easy to find.
- Keep facts tied to the supplied CV and project history.
- Make the next step to contact or download the CV obvious.
