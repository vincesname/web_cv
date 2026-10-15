---
name: Vincent Mangel
description: An editorial, evidence-led visual system for a personal technical portfolio.
colors:
  forest: "#1d4b38"
  forest-deep: "#173a2c"
  forest-light: "#cbd9cb"
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
    fontSize: "clamp(3.4rem, 6.1vw, 5.25rem)"
    fontWeight: 500
    lineHeight: 1.01
    letterSpacing: "-0.055em"
  headline:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.35rem, 4vw, 3.3rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontSize: "25px"
    fontWeight: 500
    letterSpacing: "-0.025em"
  body:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  nav:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 400
  label:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "11px"
    fontWeight: 650
    letterSpacing: "0.1em"
  action:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 600
  summary:
    fontFamily: '"IBM Plex Sans Variable", "IBM Plex Sans", sans-serif'
    fontSize: "14px"
    fontWeight: 630
    lineHeight: 1.4
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

## Colors

The palette pairs forest greens with warm paper and quiet ink, using rust for small points of emphasis.

### Primary
- **Forest Green:** Structures headings, primary actions, and dark section bands; the deeper green supports the strongest text and hover states.

### Secondary
- **Restrained Rust:** Marks numbered indexes and directional cues, and provides hover and keyboard-focus emphasis.

### Neutral
- **Warm Paper:** The main reading canvas.
- **Alternate Paper:** Separates the experience section from the primary canvas.
- **Ink:** Main text color; **Muted Ink** carries dates, supporting copy, and secondary navigation.
- **Pale Forest:** A quiet selection tone.
- **Fine Rule:** Divides navigation, rows, and content groups.
- **White:** High-contrast text on primary green surfaces and actions.

### Named Rules
**The Green Structure Rule.** Forest green establishes hierarchy; rust stays a small directional and focus accent.

## Typography

**Display Font:** Georgia (with Times New Roman, serif fallback)  
**Body Font:** IBM Plex Sans Variable (with IBM Plex Sans and sans-serif fallbacks)  
**Label/Mono Font:** IBM Plex Sans; tabular numerals are used for dates and figures.

**Character:** IBM Plex Sans keeps reading and controls practical and clear. Georgia gives display headings a quieter editorial voice.

### Hierarchy
- **Display** (500, responsive 3.4rem–5.25rem, 1.01 line-height): The hero heading; it tightens at narrower breakpoints.
- **Headline** (500, responsive 2.35rem–3.3rem, 1.08 line-height): Section headings.
- **Title** (500, 23–25px): Georgia subheadings for expertise and company entries.
- **Body** (400, 16px, 1.6 line-height): Default reading text; lead copy may increase to 17px.
- **Label** (650, 11–13px, tracked): Eyebrows, indexes, and small metadata; uppercase is used where the content calls for it.

### Named Rules
**The Two-Voice Rule.** Use IBM Plex Sans for reading and controls; reserve Georgia for display headings and subheadings.

## Layout

The page container caps at 1200px and keeps fluid side gutters. The hero pairs a measured direct headline with a simple vertical three-step timeline and green markers; each content section uses one prominent numbered heading followed by supporting copy where needed. The six proof measures use three columns by two rows and expertise uses three columns, while the career timeline pairs company context with mission details. Below 900px, the proof measures use two columns. At 700px, the hero, expertise, timeline groups, credentials, and contact area become single-column layouts; navigation wraps into a horizontally scrollable row. The layout further reduces outer gutters at 400px.

The recurring spacing increments are 8px, 16px, and 24px. Large section spacing is responsive and section-specific: long-form sections use roughly 96–108px vertically on wide screens and 72px on mobile, while the hero and contact area use their own spacing. The page stays open and content-led, with section labels, white space, and thin separators doing the grouping.

## Elevation & Depth

The system is flat. It uses no box shadows; changes between warm paper and alternate paper, dark green bands, and hairline rules establish depth. Interactive feedback stays brief: color changes on links and actions, a small arrow shift on contact links, and a rotating native disclosure indicator. Reduced-motion preferences remove smooth scrolling and nearly all transition time.

### Named Rules
**The Paper-Plane Rule.** Paper shifts and fine rules define planes; no shadow treatment is part of the current system.

## Shapes

Components have square corners, with no radius scale beyond the observed zero-radius form. One-pixel rules create edges around sections and rows; the approach summary uses a single vertical rule. Links use underline treatments for emphasis. Keyboard focus uses a visible rust outline with a 3px stroke and 4px offset. There are no form fields, chips, or card surfaces in the current implementation.

## Components

### Section Headings
- **Character:** One numbered uppercase title names each content section, avoiding a separate index and a second title that repeat the same subject.
- **Type and spacing:** The title uses the existing Georgia section-heading style; supporting context sits directly beneath it.
- **Responsive behavior:** Long titles wrap naturally on narrow screens. The contact area keeps its short index alongside its separate call-to-action heading.

### Search Section
- **Character:** A concise statement of the target role, location, preferred project engagement, and working principles. A small schematic Lyon map makes the location easy to scan.
- **Shape and spacing:** Open editorial columns with fine rules; the map is a flat SVG illustration without a shadow or rounded frame.
- **Type and color:** Existing numbered Georgia section heading, IBM Plex Sans details, forest green labels, warm paper canvas, and a quiet green map treatment.
- **Responsive behavior:** The map and criteria stack on phones; all search details remain visible without interaction.

### Personal Note
- **Character:** A full-width editorial callout highlights professional transmission and personal interests beneath education and credentials.
- **Type and spacing:** A small forest label sits beside a moderate Georgia statement, followed by similarly readable supporting copy; a fine top rule anchors the row without a card surface.
- **Responsive behavior:** The label moves above the statement on narrow screens.

### Buttons
- **Character:** Direct, compact text actions with a clear primary choice.
- **Shape:** Square corners (0px radius); the primary action has a 48px minimum height.
- **Primary:** Forest background, white label, 15px semibold type, and 20px horizontal padding.
- **Hover / Focus:** Hover deepens the green. Keyboard focus receives the shared rust outline; color feedback transitions in 150ms.
- **Header CV:** A compact forest button labeled `CV`.
- **Text action:** The secondary CV action is an underlined text link, not a filled control.

### Navigation
- **Style:** Brand, section links, and a compact CV button sit on the paper background above a fine bottom rule.
- **Type and color:** 15px semibold IBM Plex Sans links use deep forest ink and turn rust with a stronger underline on hover.
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
- **Character:** Three open columns with one short rule across each top edge.
- **Spacing and type:** A Georgia heading leads the description, evidence line, and supporting skills; the columns have no individual numbers because they are parallel areas, not a sequence.
- **Responsive behavior:** The columns stack at 700px and below; there is no tab or hidden state.

### Native Disclosure
- **Character:** Each experience item uses the browser's native `details` and `summary` structure.
- **Shape and color:** A top and bottom hairline frame the row; the title and date use ink and muted ink, with a forest plus indicator.
- **Behavior:** Opening the row reveals detail and environment text; the plus rotates 45 degrees. Summary remains keyboard operable with the shared focus outline.

### Contact Links
- **Character:** Full-width text links in the dark contact section, arranged as label and destination, including a CV download.
- **Shape and spacing:** Rows use top and bottom green-tinted hairlines and a 61px minimum height.
- **Behavior:** Hover underlines the destination; keyboard focus uses the rust outline.

## Do's and Don'ts

### Do:
- **Do** use forest green for primary emphasis and actions, with rust reserved for small directional and focus cues.
- **Do** let warm paper, ink, whitespace, and fine rules organize reading surfaces.
- **Do** keep IBM Plex Sans on reading and interface text, with Georgia for display hierarchy.
- **Do** keep keyboard focus visible and respect reduced-motion settings.

### Don't:
- **Don't** add rounded corners to the primary action or the current row patterns.
- **Don't** treat shadows as an existing depth token; the implementation uses tonal shifts and rules instead.
- **Don't** use rust as a broad surface color; it is an accent in the current palette.
