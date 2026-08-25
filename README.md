# Handoff: Typewriter Portfolio (Aanya Iyer)

## Overview
Personal portfolio site for a backend/full-stack engineer pivoting into product design. Six views are mocked: home/landing, a full-process case study, about, résumé, 404, and mobile versions of home + case study. The visual concept is "typewriter": monospace type only, paper-and-ink palette, a violet accent, a live typing animation for the role line, and a hover-revealed name pronunciation.

## About the Design Files
The file in this bundle (`Portfolio Mockups.dc.html`) is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's environment** (Next.js, Astro, plain HTML+CSS, whatever the project uses) with its established patterns. If no codebase exists yet, pick the most appropriate framework — for a static portfolio, Astro or Next.js with static export is a good default — and implement there.

Note on the reference file: all styling is inline and each design option lives inside a canvas wrapper (`.dv-turn` / `.dv-opt` sections, with visible id badges like `2a`). Those wrappers are presentation scaffolding for review — **do not port them**. Only the inner card contents are the design.

Option ids in the file:
- `2a` — Home (desktop) ← current direction
- `2b` — Case study, full process (desktop)
- `2c` — About (desktop)
- `2d` — Résumé (desktop)
- `2e` — 404
- `2f` — Mobile home + mobile case study, 390px
- `1a`–`1d` — earlier exploration, burgundy accent. **Superseded, ignore.**

## Fidelity
**High-fidelity.** Colors, type sizes, weights, line-heights, and spacing are final and should be matched closely. Two caveats:
- All imagery is a dashed placeholder box labelled `[ image ]`. Real photography/screenshots are not yet supplied.
- All copy is realistic stand-in text, not the user's final words. Names, projects, employers, and metrics are invented and must be replaced.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Paper | `#f0ede4` | Page background |
| Paper raised | `#f4f1ea` | Stat cells, cards on paper |
| Paper sunken | `#e9e5da` | Image placeholders, pull quotes |
| Paper alt | `#eae6db` | Sidebar, quote background |
| Ink | `#1c1a17` | Primary text, buttons, rules |
| Ink 80 | `#3b3630` | Body paragraphs |
| Ink 60 | `#57524a` | Secondary text, nav, captions |
| Ink 40 | `#8a8377` | Tertiary / meta text |
| Ink 25 | `#a8a196` | Placeholder input text |
| Accent (violet) | `#6E44FF` | Numbers, labels, active nav, caret, primary chip, links |

Hairlines are `rgba(28,26,23,.14)` (row dividers), `rgba(28,26,23,.16)`–`.2` (section borders), `rgba(28,26,23,.22)` (secondary chip border), `rgba(28,26,23,.35)`–`.4` (dashed placeholders, dotted underline). Heavy rules are `2px solid #1c1a17`.

### Typography
Two Google fonts, nothing else:
- **Space Mono** — 400 and 700 — display: names, headlines, project titles, stat figures.
- **JetBrains Mono** — 300, 400, 500, 700 — everything else: body, nav, labels, chips, meta.

```
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet">
```

Scale as used (desktop):
| Role | Font | Size / line-height | Weight | Tracking |
|---|---|---|---|---|
| Hero name | Space Mono | 62px / 1.06 | 700 | -0.035em |
| Page H1 | Space Mono | 40–42px / 1.2 | 700 | -0.025em |
| Section H1 (about, résumé, contact) | Space Mono | 30px / 1.3–1.35 | 700 | -0.02em |
| Typed role line | JetBrains Mono | 22px / 1.2 | 400 | — |
| Lead paragraph | Space Mono | 19px / 1.7 | 400 | — |
| Project title (grid) | Space Mono | 17px / 1.3 | 400 | — |
| Process step heading | Space Mono | 17px / 1.55 | 400 | — |
| Stat figure | Space Mono | 26–30px / 1 | 700 | — |
| Body | JetBrains Mono | 13–15px / 1.9–1.95 | 300 | — |
| Meta / nav | JetBrains Mono | 11–12.5px / 1–1.75 | 400 | — |
| Eyebrow label | JetBrains Mono | 10–11px / 1 | 400 | 0.12–0.2em, uppercase |
| Chip | JetBrains Mono | 10px / 1 | 400 | — |

Mobile (390px) drops the hero name to 34px/1.12, page H1 to 26px/1.24, typed role to 15px/1.2, body to 12.5px/1.85.

### Spacing
Effectively an 8px-ish rhythm, used loosely: 6, 9, 12, 14, 20, 22, 26, 34, 40, 56, 64, 72px. Desktop page gutters 88px (home/case study) or 60–62px (about/résumé/404); mobile gutter 22px. Section separations are 56–72px on desktop.

### Other
- **Border radius: 0 everywhere.** Nothing is rounded. This is load-bearing to the typewriter feel.
- **No shadows** inside the designs (the review canvas has one on the card frame; that is scaffolding).
- Chips: `padding: 6px 9px`, 1px border, no radius, `white-space: nowrap` (required — two-word labels overflow otherwise).

## Screens / Views

### 1. Home (`2a` desktop / `2f` mobile)
**Purpose:** establish who she is, name the pivot, and route to three projects.

**Layout (desktop, 900px card, 64px top / 88px side padding):**
1. **Top bar** — flex, space-between, baseline-aligned, 14px bottom padding, 1px bottom border. Left: `PORTFOLIO · 2026` (11px, 0.2em, uppercase, Ink 60). Right: nav row, `gap: 24px`, 12px — `Work`, `About`, `Résumé` (active, violet).
2. **Hero** — 64px below the bar. Name as an H1, 62px Space Mono 700, with a `2px dotted rgba(28,26,23,.35)` bottom border and `cursor: help`. Wrapped in a `position: relative; display: inline-block` container that owns the pronunciation tooltip. **The H1 needs `white-space: nowrap`** — the shrink-to-fit box otherwise breaks the name across two lines under font fallback and the dotted rule lands mid-name.
3. **Typed role line** — 22px below the name. Flex row, `gap: 12px`, `min-height: 30px` (never a fixed height). `CURRENTLY` eyebrow in violet, then the animating role text (nowrap), then the caret: an 11×22px violet block that blinks.
4. **Intro paragraph** — 40px below, `max-width: 560px`, 15px/1.95 JetBrains 300, `text-wrap: pretty`.
5. **Work grid** — 72px below. Section header row: `WORK` eyebrow, a dotted-leader rule filling the gap (`flex: 1; border-bottom: 1px dotted #b6afa3`), then the count. Below it a `grid-template-columns: repeat(3, 1fr); gap: 22px`. Each cell is a `flex column, gap: 13px`:
   - Image placeholder, `height: 190px`, dashed border, sunken paper, target ratio 1200×900.
   - Meta row: index (`01`, violet) left, year (Ink 40) right.
   - Title, 17px Space Mono.
   - One-line description, 11.5px/1.75 JetBrains 300, Ink 60.
   - Chip row, `flex-wrap; gap: 6px`. **First chip is the project type in violet** (`Work project` / `Side project` / `School project`); remaining chips are skills/tech with the grey border.
6. **Footer** — 56px below. Flex, space-between, baseline. Left: email + availability line. Right: `GitHub` / `Résumé ↓` (violet) / `Email`, `gap: 18px`.

**Mobile (390px):** status bar row, then the same sequence stacked; work grid becomes a single column, `gap: 26px`, image height 170px, and the nav collapses to `Menu ≡`. The pronunciation is tap-triggered, with a `tap for pronunciation` hint under the name.

### 2. Case study (`2b` desktop / second frame of `2f` mobile)
**Purpose:** full process narrative for one project.

Sequence: back-link bar (`← Aanya Iyer` violet, `01 / 03 · 9 min read` Ink 40) → `CASE STUDY 01` eyebrow → 42px H1 → 15px/1.9 standfirst (max 580px) → **fact strip** (4-up grid, 20px gap, 1px rules top and bottom, 20px vertical padding: Role / Team / Span / Result, each a 10px uppercase label over a 12.5px value) → 330px hero image placeholder → **process steps**.

Each process step is a `grid-template-columns: 180px 1fr; gap: 36px`, 34px vertical padding, 1px top rule. Left column is a violet uppercase step label (`01 — Research`, `02 — Framing`, `03 — Explorations`, `04 — Build`, `05 — Results`, `06 — What I'd change`). Right column, max 520px, holds:
- Research: a 17px Space Mono statement line, then a 13.5px/1.95 paragraph.
- Framing: paragraph plus a pull quote — `border-left: 2px solid #6E44FF`, `padding: 16px 18px`, `background: #eae6db`, 12.5px/1.8.
- Explorations: intro line, then three equal columns of 150px placeholders with a one-line verdict caption each. **The shipped option's placeholder uses a solid violet border and violet caption**; rejected ones stay dashed/grey.
- Results: a 3-up stat grid, 1px gaps over a `rgba(28,26,23,.18)` background so the gaps read as rules, each cell 20px padding, 26px Space Mono 700 figure over a 10.5px caption.
Footer: `2px solid #1c1a17` top rule, `NEXT` label left, next project title 21px Space Mono 700 with a violet arrow, right.

### 3. About (`2c`, 640px card)
Eyebrow → 30px H1 → 14px/1.95 paragraph → **timeline**: rows of `grid-template-columns: 74px 1fr; gap: 20px`, 15px vertical padding, 1px top rule, year in violet, role/school in ink. Then a two-column split (`1fr 1fr; gap: 26px`) of `DESIGN` and `CODE` skill lists as dot-separated 12px/1.9 runs. Ends with a 180px photo placeholder (1200×640).

### 4. Résumé (`2d`, 720px card)
Header: name (30px Space Mono 700, nowrap) with the three roles beneath as a static 12px line, and a right-aligned contact block; separated by a `2px solid #1c1a17` rule. A right-aligned `Download PDF ↓` outlined-violet button sits below it.

Then four sections, each `grid-template-columns: 120px 1fr; gap: 30px` with a 1px top rule and a violet uppercase label in the left column: **Summary**, **Experience**, **Skills**, **Education**. Experience entries are a title (15px Space Mono) / date (11px, nowrap) baseline row, an employer line, then bullets as `grid-template-columns: 14px 1fr; gap: 6px` with a violet `·`. Skills is a chip cloud, first chip violet. Closes with a 10.5px `Updated August 2026 · references on request` line.

Print intent: this page should fit one Letter/A4 page when printed. If implemented for real, give it a print stylesheet or render it through a paged-document component.

### 5. 404 (`2e`, 640px card)
Centered, 78px vertical padding. `4Ø4` at 76px Space Mono 700 in violet (note the slashed zero — a typewriter tell). `The page jammed.` at 17px/1.7. A 340px-max explanatory paragraph. Then a **fake typed URL** in a dashed box, left-aligned text, showing a plausible typo (`/work/qveue`) with the blinking caret after it. Two buttons: filled ink `← Back to work`, outlined `Home`.

## Interactions & Behavior

### Role typing animation (home, desktop + mobile)
The only substantive JS in the design.
- Roles, in order: `Product Designer`, `Full-Stack Developer`, `Freelancer`.
- A single interval at **62ms** drives it. State: current index `i`, visible length `len`, and a `del` (deleting) flag.
- Per tick: if typing and `len < full.length`, increment `len`. When fully typed, hold for **16 ticks (~1s)**, then set `del`. While deleting, decrement `len` to 0, then advance `i` (wrapping) and clear `del`.
- The rendered text is `role.slice(0, len)`.
- The caret is a separate block element, always visible, blinking independently: `@keyframes cursorBlink { 0%,49% { opacity: 1 } 50%,100% { opacity: 0 } }`, `1.05s step-end infinite`. `step-end` matters — no fade.
- Clear the interval on unmount.
- Respect `prefers-reduced-motion`: fall back to the first role rendered statically with a non-blinking caret.

### Name pronunciation
Hovering the hero name reveals a tooltip: `position: absolute; left: 0; top: -40px`, ink background, paper text, `padding: 7px 11px`, 12px JetBrains, 0.04em tracking, `white-space: nowrap`, `pointer-events: none`. Content: `/ AHN-yuh EYE-yer / · she/her`. Transition is `opacity .22s ease` between 0 and 1 — driven by opacity, not mount/unmount, so it does not reflow. Trigger is `mouseenter`/`mouseleave` on the wrapper; on touch, make it tap-to-toggle (the mobile mock advertises this with a hint line). Add `aria-label` or a visually-hidden pronunciation string for screen readers.

### Everything else
Static in the mock. Implement as expected: nav links navigate, project cells link to their case study, `Download PDF ↓` serves a file, buttons on 404 route home / to work. Motion level is deliberately **subtle** — no page transitions, no scroll animation, no parallax. If anything is added, keep it to a short opacity fade.

### Responsive
Two breakpoints are designed: desktop (~900px content) and 390px mobile. Between them: collapse the 3-up work grid to 1 column, drop the case-study `180px 1fr` process grid to a single stacked column (label above content), drop the 4-up fact strip to 2-up, and collapse the résumé's `120px 1fr` to stacked. Reduce page gutters from 88px to 22px.

## State Management
Minimal. Home needs: `roleIndex`, `visibleLength`, `isDeleting`, and `pronunciationVisible`. Nothing else is stateful; no data fetching. Content (projects, résumé entries, timeline) should come from local data files or a CMS rather than being hardcoded in markup — the work grid and résumé experience list are obvious candidates for arrays.

## Assets
**None supplied.** Every image is a dashed placeholder. Needed:
- 3 project images for the work grid, 1200×900 (4:3).
- 1 case-study hero, 1600×900.
- 3 exploration thumbnails per case study, roughly 4:3.
- 1 portrait for the about page, 1200×640.
- A résumé PDF for the download button.
Fonts are Google-hosted (Space Mono, JetBrains Mono) — self-host them if the project cares about layout stability, since the mock has already hit two font-fallback wrapping bugs.

## Known constraints carried from the mock
- Chips and any short two-word label need `white-space: nowrap`; the design's 1px-border, zero-radius chips overflow visibly if a label wraps.
- The typed role line and the hero name must both be `nowrap` with `min-height` rather than a fixed `height`, or the longest role clips and the caret detaches.
- All copy and all names/companies/metrics are placeholders and must be replaced before this ships.

## Files
- `Portfolio Mockups.dc.html` — all six views. Look inside `<section class="dv-turn" id="t2">`; option ids `2a`–`2f` are labelled inline. Turn 1 (`1a`–`1d`) is a superseded earlier exploration in a burgundy accent — ignore it.
