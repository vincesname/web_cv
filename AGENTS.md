# Repository Guidance

Read [PRODUCT.md](PRODUCT.md) before changing the portfolio; it records the approved content, KPI definitions, and owner preferences. Read [DESIGN.md](DESIGN.md) for the visual system.

- Build with `npm run build` before pushing. The build regenerates the tracked `www/` production site.
- Push completed changes directly to `main`; do not create pull requests.
- Keep KPI values and labels aligned with the approved presentation in `PRODUCT.md`. Treat client count as a lower bound and group equivalent job titles before counting role families.
- Use Vincent’s direct, first-person voice where natural. Keep client examples in the experience timeline and list the newest experience first.
- Preserve the forest-green editorial design. Avoid generic HR/commercial copy and generic AI-generated visual patterns.

## Requested Design and Front-end Skills

For future visual or front-end work, inspect the skills actually available in the current environment and read their `SKILL.md` instructions before implementation. The site owner specifically asked that design skills not be skipped.

Preferred workflow when these skills are available:

1. **Impeccable** for design critique, visual polish, and AI-pattern checks: <https://github.com/pbakaus/impeccable>
2. **Anthropic `frontend-design`** for the implementation direction: <https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design>
3. **Addy Osmani Web Quality Skills** for the final accessibility, performance, SEO, and quality review: <https://github.com/addyosmani/web-quality-skills>
4. Use **Claude Design Skills** for deeper information architecture, content design, or accessibility work when the task calls for it: <https://github.com/richhemsley3/claude-design-skills>

Do not say a skill was applied unless it was available and its instructions were actually read. If a requested skill is unavailable, note that limitation and continue using this repository’s `PRODUCT.md` and `DESIGN.md` as the working brief.
