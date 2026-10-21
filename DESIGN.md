---
name: Vincent Mangel
description: An editorial, evidence-led visual system for a personal technical portfolio.
colors:
  forest: "#1d4b38"
  forest-deep: "#173a2c"
  forest-light: "#cbd9cb"
  forest-night: "#112d22"
  forest-rule: "#9aac98"
  forest-rule-dark: "#577263"
  rust: "#a74931"
  ink: "#202b25"
  muted: "#5c665f"
  paper: "#f7f6f0"
  paper-alt: "#efeee6"
  line: "#d2d5ca"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.75rem, 5vw, 3.75rem)"
    fontWeight: 500
    lineHeight: 1.01
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "24px"
    fontWeight: 500
    letterSpacing: "-0.025em"
  subheading:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "20px"
    fontWeight: 500
  lead:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 600
  label:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "12px"
    fontWeight: 650
    letterSpacing: "0.1em"
  action:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 650
  summary:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
  stat:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.25rem, 4.2vw, 3rem)"
    fontWeight: 500
rounded:
  none: "0px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  nav-links:
    textColor: "{colors.muted}"
    typography: "{typography.nav}"
    padding: "0"
  button-primary:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.forest-deep}"
  proof-band:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.paper}"
    padding: "16px 0"
  approach-summary:
    textColor: "{colors.ink}"
    padding: "15px 0"
    borderLeft: "1px solid #a7b7a6"
    rowBorderTop: "1px solid {colors.line}"
  expertise-column:
    textColor: "{colors.ink}"
    padding: "16px 0 0"
    height: "245px"
  disclosure-summary:
    textColor: "{colors.ink}"
    typography: "{typography.summary}"
    padding: "14px 0"
  contact-link:
    textColor: "{colors.white}"
    typography: "{typography.action}"
    padding: "9px 0"
    height: "61px"
---

# Design System: Vincent Mangel

## Overview

**Creative North Star: "The Editorial Evidence Record"**

The system treats a personal technical portfolio as a clearly edited professional record: hierarchy makes the information easy to scan, typography carries the voice, and fine rules separate entries. Its mood is calm, direct, and evidence-led for recruiters and technical managers. The header stays on the paper background, and the hero uses an unboxed three-step timeline to explain work from scoping through delivery.

Warm paper and forest green anchor the canvas; IBM Plex Sans handles reading and interface text, while Georgia marks display headings. Responsive grids align related content on wide screens and reflow into readable columns on phones. Rust supplies a restrained pointer for arrows, indexes, hover, and keyboard focus.

**Key Characteristics:**
- Forest green carries primary emphasis; rust is a restrained pointer.
- IBM Plex Sans handles reading and controls; Georgia marks display hierarchy.
- Warm paper, ink, and fine rules keep the canvas quiet and legible.
- Open grids and flat section bands provide structure without shadows.
- Regular Straight UIcons mark expertise, AI practices, and contact actions.
- Monochrome technology logos add a compact visual index while keeping their names visible.

## Colors

The palette pairs forest greens with warm paper and quiet ink, using rust for small points of emphasis.

### Primary
- **Forest Green:** Structures headings, primary actions, and dark section bands; the deeper green supports the strongest text and hover states, while forest night anchors the footer.

### Secondary
- **Restrained Rust:** Marks numbered indexes and directional cues, and provides hover and keyboard-focus emphasis.

### Neutral
- **Warm Paper:** The main reading canvas.
- **Alternate Paper:** Separates the experience section from the primary canvas.
- **Ink:** Main text color; **Muted Ink** carries dates, supporting copy, and secondary navigation.
- **Pale Forest:** A quiet selection tone.
- **Fine Rule:** Divides navigation, rows, and content groups. One forest rule is used on paper; a darker forest rule separates content on green surfaces.
- **White:** High-contrast text on primary green surfaces and actions.

### Named Rules
**The Green Structure Rule.** Forest green establishes hierarchy; rust stays a small directional and focus accent.

## Typography

**Display Font:** Georgia (with Times New Roman, serif fallback)  
**Body Font:** IBM Plex Sans Variable (with IBM Plex Sans and sans-serif fallbacks)  
**Label/Mono Font:** IBM Plex Sans; tabular numerals are used for dates and figures.

**Character:** IBM Plex Sans keeps reading and controls practical and clear. Georgia gives display headings a quieter editorial voice.

### Hierarchy
- **Display** (500, responsive 2.75–3.75rem, 1.01 line-height): The hero heading.
- **Headline** (500, responsive 2.25–3rem, 1.08 line-height): Section headings.
- **Title** (500, 24px): Georgia subheadings for expertise and company entries.
- **Subheading** (500, 20px): Compact Georgia headings for search principles and AI practice.
- **Lead** (400, 18px, 1.6 line-height): The hero introduction.
- **Body** (400, 16px, 1.6 line-height): Default reading text.
- **Action and compact copy** (550–650, 14px): Navigation, buttons, summaries, and supporting paragraphs.
- **Label and metadata** (550–650, 12px, tracked where useful): Indexes, dates, captions, and small metadata.
- **Figures** (500, responsive 2.25–3rem): Proof-band values.

### Type Scale
Use the shared CSS tokens `--text-label` (12px), `--text-sm` (14px), `--text-base` (16px), `--text-lg` (18px), `--text-xl` (20px), and `--text-2xl` (24px). Section headings scale from 36px to 48px, display headings from 44px to 60px, and proof figures from 36px to 48px. Keep these roles stable at every breakpoint; responsive size changes come from the heading tokens rather than per-component overrides.

Visible copy uses a plain hyphen for sentence breaks and date ranges.

### Named Rules
**The Two-Voice Rule.** Use IBM Plex Sans for reading and controls; reserve Georgia for display headings and subheadings.

## Layout

The page container caps at 1200px and keeps fluid side gutters. The hero pairs a measured direct headline with a simple vertical three-step timeline and green markers. The career timeline follows the six-indicator proof band so client work stays high in the reading order; role preferences, expertise, and AI practice follow. Each content section uses one prominent numbered heading followed by supporting copy where needed. The six proof measures use three columns by two rows and expertise uses three columns, while the career timeline pairs company context with mission details. Below 900px, the proof measures use two columns. At 700px, the hero, expertise, timeline groups, credentials, and contact area become single-column layouts; navigation wraps into a horizontally scrollable row. The layout further reduces outer gutters at 400px.

The recurring spacing increments are 8px, 16px, and 24px. Large section spacing is responsive and section-specific: long-form sections use roughly 96–108px vertically on wide screens and 72px on mobile, while the hero and contact area use their own spacing. The page stays open and content-led, with section labels, white space, and thin separators doing the grouping.

## Elevation & Depth

The system is flat. It uses no box shadows; changes between warm paper and alternate paper, dark green bands, and hairline rules establish depth. Interactive feedback stays brief: color changes on links and actions, a small arrow shift on contact links, and a rotating native disclosure indicator. Reduced-motion preferences remove smooth scrolling and nearly all transition time.

### Named Rules
**The Paper-Plane Rule.** Paper shifts and fine rules define planes; no shadow treatment is part of the current system.

## Shapes

Components have square corners, with no radius scale beyond the observed zero-radius form. One-pixel rules separate adjacent items within repeated groups; the first item has no top rule and the final item has no bottom rule. Distinct page sections keep their structural boundary rules, and a mobile layout may add one rule between groups when stacking them. The approach summary uses a single vertical timeline rule. Links use underline treatments for emphasis. Keyboard focus uses a visible rust outline with a 3px stroke and 4px offset. There are no form fields, chips, or card surfaces in the current implementation.

## Components

### Section Headings
- **Character:** One numbered uppercase title names each content section, avoiding a separate index and a second title that repeat the same subject.
- **Type and spacing:** The title uses the existing Georgia section-heading style; supporting context sits directly beneath it.
- **Responsive behavior:** Long titles wrap naturally on narrow screens. The contact heading uses the same type scale, serif face, and numbered format on its dark background.

### Search Section
- **Character:** The search facts list role, contract, notice period, location, and preferred project engagement beside a closer crop of the Lyon map.
- **Shape and spacing:** Open editorial columns. Criteria rows have fine rules only between adjacent rows, with no rule before the first or after the last; the map is a flat illustration without a shadow or rounded frame.
- **Type and color:** Existing numbered Georgia section heading, IBM Plex Sans details, forest green labels, warm paper canvas, and a quiet green map treatment.
- **Responsive behavior:** The map and criteria stack on phones; all search details remain visible without interaction. Principle rows gain separators only between adjacent items when they stack.

### Education and Profile
- **Character:** Two equal columns use unnumbered headings: diplomas on the left, then certifications, languages, and combined knowledge-sharing and interests on the right.
- **Type and spacing:** Use a thin divider only between consecutive rows within each column. Leave the first row without a top divider and the last row without a bottom divider; headings sit directly above their first row.
- **Responsive behavior:** The columns stack on phones. Add a divider between the two stacked groups where needed, while keeping the first row of the first group and the final row of the last group free of outer dividers.

### Buttons
- **Character:** Direct, compact text actions with a clear primary choice.
- **Shape:** Square corners (0px radius); the primary action has a 48px minimum height.
- **Primary:** Forest background, white label, 15px semibold type, and 20px horizontal padding.
- **Hover / Focus:** Hover deepens the green. Keyboard focus receives the shared rust outline; color feedback transitions in 150ms.
- **Header CV:** A compact forest button labeled `CV`.
- **Text action:** The secondary CV action is an underlined text link, not a filled control.

### Navigation
- **Style:** Brand, section links, and a compact CV button sit on the paper background above a fine bottom rule.
- **Type and color:** 14px semibold IBM Plex Sans links use deep forest ink and turn rust with a stronger underline on hover.
- **Information order:** Experience, role search, expertise, AI, then contact.
- **Responsive behavior:** At 700px and below, the section links move to a second horizontally scrollable row.
- **Focus:** All links retain the visible rust keyboard outline.

### Proof Band
- **Character:** A flat, full-width forest measure band with six career indicators: lower-bound client missions, a lower-bound client count, experience, role families, and front-end/back-end and infrastructure skills.
- **Shape and spacing:** No radius; three columns by two rows on wide screens, with fine separators and 16px vertical padding. Below 900px it uses two columns.
- **Type and color:** Large Georgia figures sit above their short labels; paper tones provide contrast against deep forest.
- **Responsive behavior:** Two columns remain at tablet and phone widths. The band contains only figures and labels, without supporting notes or a methodology footnote.

### Approach Summary
- **Character:** A short three-step summary of how I work, from scoping through design and implementation to delivery. Specific client missions stay in the experience timeline.
- **Shape and spacing:** Three open rows sit on the paper background beside a thin vertical rule. Each row has one small forest-green circular marker, with no card surface, shadow, or ornament.
- **Type and color:** A compact forest heading introduces sans-serif step titles and concise muted descriptions.
- **Responsive behavior:** The timeline follows the hero copy on narrow screens and keeps a readable measure.

### Expertise Columns
- **Character:** Three open, unnumbered columns present parallel areas of expertise without enclosing rules.
- **Spacing and type:** A small Regular Straight icon and Georgia heading lead the description and a supporting skills line.
- **Responsive behavior:** The columns stack at 700px and below, with fine separators between adjacent items only; the first and last items have no outer rule.

### Core Technology Grid
- **Character:** A compact, static technology index follows the expertise columns, grouping nine representative technologies under front-end, back-end and data, and cloud and DevOps.
- **Visual treatment:** The title is followed by a short note identifying full-stack development and a front-end preference. Brand marks render as monochrome forest-green masks beside visible names. Open spacing and a fine top rule keep the group aligned with the editorial layout.
- **Responsive behavior:** The three groups sit in columns on wide screens and stack on phones. All technologies stay visible without a carousel or hidden state.

### AI Practice Grid
- **Character:** Six AI and research practices use open editorial rows rather than cards, with one small Regular Straight icon beside each heading.
- **Structure:** Philosophy, prompt engineering, agentic workflows and skills, model selection, vibecoding or SDD, and research into alternative language models remain readable as text at every breakpoint. Fine rules separate adjacent rows only; there is no rule before the first or after the final row. French copy uses infinitive verbs; English copy uses natural first-person statements.
- **Responsive behavior:** Two columns on wide screens; one column on phones.

### Native Disclosure
- **Character:** Each experience item uses the browser's native `details` and `summary` structure.
- **Type, shape, and color:** A fine rule separates each assignment from the previous row; there is no outer rule before the first or after the final assignment. The role and mission summary use 14px sans-serif type; dates and stack metadata use 12px. The title uses ink and dates use muted ink, with a forest plus indicator.
- **Behavior:** Opening the row reveals detail and environment text; the plus rotates 45 degrees. Summary remains keyboard operable with the shared focus outline. Assignment dividers separate adjacent rows only; the first and last rows have no outer divider.

### Contact Links
- **Character:** The numbered “Échangeons” heading and its supporting paragraph lead into full-width links in the dark section, each led by a Regular Straight icon with the destination visible, including a CV download. The LinkedIn destination uses the Flaticon brand icon. Icons are decorative to screen readers; each link has a localized accessible name.
- **Shape and spacing:** Rows use green-tinted hairlines only between adjacent links, with no outer top or bottom rule, and have a 61px minimum height.
- **Behavior:** Hover underlines the destination; keyboard focus uses a light outline for contrast on the dark background.
- **Attribution:** The footer links to Flaticon, with the credit shown in the active page language.

## Do's and Don'ts

### Do:
- **Do** use forest green for primary emphasis and actions, with rust reserved for small directional and focus cues.
- **Do** let warm paper, ink, whitespace, and fine rules organize reading surfaces.
- **Do** place repeated-item dividers between adjacent items only; leave each group open at the first item’s top and the last item’s bottom. Keep distinct section boundaries and add a separator between groups when mobile stacking needs one.
- **Do** keep IBM Plex Sans on reading and interface text, with Georgia for display hierarchy.
- **Do** keep keyboard focus visible and respect reduced-motion settings.
- **Do** use small Regular Straight UIcons for expertise, AI practices, and contact actions; keep destinations understandable without the decorative glyphs.
- **Do** pair monochrome technology marks with visible text labels, and keep the full assignment-specific stacks in the experience details.

### Don't:
- **Don't** add rounded corners to the primary action or the current row patterns.
- **Don't** treat shadows as an existing depth token; the implementation uses tonal shifts and rules instead.
- **Don't** use rust as a broad surface color; it is an accent in the current palette.
