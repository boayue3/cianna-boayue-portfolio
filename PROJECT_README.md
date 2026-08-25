# Aanya Iyer — Portfolio (Astro)

Static site built from `Portfolio Mockups.dc.html` per `README.md` (the original design handoff).

## Run it

```
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/data/` — all copy and content (site info, projects/case studies, about, résumé). Edit these files to change text without touching markup.
- `src/components/` — `TopBar`, `NamePronunciation` (hover/tap tooltip), `TypedRole` (typing animation), `ProjectCard`, `Footer`.
- `src/pages/` — `index.astro` (home), `about.astro`, `resume.astro`, `work/[slug].astro` (case studies, one static page per project in `src/data/projects.ts`), `404.astro`.
- `src/styles/global.css` — design tokens (color, type, chips, print rules) as CSS custom properties.

## Still needed before shipping (per the original handoff)

- Replace all placeholder copy, names, and metrics in `src/data/*.ts` — currently invented stand-ins.
- Supply real imagery for the `[ image ]` placeholders (work grid 1200×900, case-study hero 1600×900, exploration thumbnails, about portrait 1200×640) and drop them into `public/` or an `src/assets/` folder, then swap the `placeholder-image` divs for `<img>`/`<Image>`.
- Replace `public/aanya-iyer-resume.pdf` — it's currently a one-line placeholder PDF — with the real résumé, and point `site.resumePdf` in `src/data/site.ts` at it if the filename changes.
- Consider self-hosting Space Mono / JetBrains Mono (`@fontsource/*`) instead of the Google Fonts CDN link in `src/styles/global.css`, per the handoff's note on layout stability.
- Case study 01 ("Queue you can actually read") has full process content transcribed from the mock. Case studies 02 and 03 have plausible stand-in process copy in the same structure — replace with the real narratives.
