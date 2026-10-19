# Repository Guidance

Read [PRODUCT.md](PRODUCT.md) before changing the portfolio; it records the approved content, KPI definitions, and owner preferences. Read [DESIGN.md](DESIGN.md) for the visual system.

- Build with `npm run build` before pushing. The build regenerates the tracked `www/` production site.
- Push completed changes directly to `main`; do not create pull requests.
- Keep KPI values and labels aligned with the approved presentation in `PRODUCT.md`. Treat client count as a lower bound and group equivalent job titles before counting role families.
- Use Vincent’s direct, first-person voice where natural. Keep client examples in the experience timeline and list the newest experience first.
- Preserve the forest-green editorial design. Avoid generic HR/commercial copy and generic AI-generated visual patterns.

## Design and Front-end Skills

Open-licensed design guidance is versioned under `.agents/skills/`. Read the relevant `SKILL.md` instructions before implementation; the site owner asked that design guidance not be skipped.

1. **Impeccable** (`.agents/skills/impeccable/SKILL.md`) for design critique, visual polish, and typography.
2. **Anthropic Frontend Design** is linked to its official plugin source. Its terms reserve rights, so its text is not redistributed in this repository.
3. **Web Quality Skills** (`.agents/skills/web-quality-audit/SKILL.md`, with focused guidance in `accessibility/`, `performance/`, `core-web-vitals/`, `seo/`, and `best-practices/`) for the final quality review.
4. **Claude Design Skills** under `.agents/skills/` for deeper information architecture, content design, or accessibility work when the task calls for it.

Source repository URLs, pinned revisions, and license files are recorded in `.agents/skills/SOURCES.md` and `.agents/skills/licenses/`.

Do not say a skill was applied unless its instructions were actually read. Continue to use `PRODUCT.md` and `DESIGN.md` as the approved project brief.
