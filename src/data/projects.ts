// Stand-in content — names, employers, and metrics are invented and must be replaced.
export type ProjectType = 'Work project' | 'Side project' | 'School project';

export interface ProcessStep {
  label: string; // e.g. "01 — Research"
  kind: 'statement' | 'quote' | 'explorations' | 'stats' | 'text';
  statement?: string;
  paragraph?: string;
  quote?: string;
  explorations?: { caption: string; verdict: string; shipped?: boolean }[];
  stats?: { figure: string; caption: string }[];
}

export interface Project {
  slug: string;
  index: string; // "01"
  year: string;
  title: string;
  description: string;
  type: ProjectType;
  tags: string[];
  caseStudy: {
    number: string; // "Case study 01"
    readTime: string;
    standfirst: string;
    fact: { role: string; team: string; span: string; result: string };
    heroCaption: string;
    steps: ProcessStep[];
  };
}

export const projects: Project[] = [
  {
    slug: 'queue-you-can-actually-read',
    index: '01',
    year: '2026',
    title: 'Queue you can actually read',
    description: 'Triage for 400 tickets a day, designed and shipped end to end.',
    type: 'Work project',
    tags: ['Product design', 'Go'],
    caseStudy: {
      number: 'Case study 01',
      readTime: '9 min read',
      standfirst:
        'Support engineers were triaging 400 tickets a day in a table with 19 columns. I designed and shipped the replacement.',
      fact: { role: 'Design + backend', team: 'Me, 1 frontend', span: '11 weeks', result: '−38% handle time' },
      heroCaption: 'final triage view — 1600×900',
      steps: [
        {
          label: '01 — Research',
          kind: 'statement',
          statement: 'I sat with six agents for a full shift each.',
          paragraph:
            "Every one of them had built the same private workaround: sort by age, ignore twelve columns, keep a paper list of the accounts that matter. The table wasn't slow. It was undecidable.",
        },
        {
          label: '02 — Framing',
          kind: 'quote',
          paragraph:
            'Reframed the job from "show all ticket data" to "answer one question: what do I open next?" Everything else became progressive disclosure.',
          quote: '"I don\'t need more information. I need permission to ignore most of it." — agent, week 2',
        },
        {
          label: '03 — Explorations',
          kind: 'explorations',
          paragraph: 'Three directions, tested as clickable prototypes over two weeks.',
          explorations: [
            { caption: 'A — kanban', verdict: 'Died on volume.' },
            { caption: 'B — one at a time', verdict: 'Fast, but no overview.' },
            { caption: 'C — shipped', verdict: 'Ranked list + peek.', shipped: true },
          ],
        },
        {
          label: '04 — Build',
          kind: 'text',
          paragraph:
            'The ranking needed a service that didn\'t exist, so I wrote it: a scoring endpoint in Go that folded SLA risk, account tier and reopen count into one number. Designing it and owning the query plan turned out to be the same job.',
        },
        {
          label: '05 — Results',
          kind: 'stats',
          stats: [
            { figure: '−38%', caption: 'median handle time' },
            { figure: '19→4', caption: 'columns on screen' },
            { figure: '0', caption: 'paper lists left' },
          ],
        },
        {
          label: "06 — What I'd change",
          kind: 'text',
          paragraph:
            'I shipped the ranking as a black box. Agents trusted it for a month, then stopped when it got one call wrong. Next time the score explains itself on the row.',
        },
      ],
    },
  },
  {
    slug: 'splitwise-for-housemates',
    index: '02',
    year: '2025',
    title: 'Splitwise for housemates',
    description: 'Shared bills without the monthly argument. Built for four of us.',
    type: 'Side project',
    tags: ['React', 'Postgres'],
    caseStudy: {
      number: 'Case study 02',
      readTime: '6 min read',
      standfirst:
        'Four housemates, one spreadsheet, endless arguments about who owed what. I built a small app that settles up automatically.',
      fact: { role: 'Design + full-stack', team: 'Solo', span: '4 weeks', result: '0 spreadsheets left' },
      heroCaption: 'settle-up view — 1600×900',
      steps: [
        {
          label: '01 — Research',
          kind: 'statement',
          statement: 'The spreadsheet had a tab called "who\'s wrong."',
          paragraph:
            'Nobody trusted the running total because nobody could see how it was calculated. The fix wasn\'t a better spreadsheet — it was showing the math.',
        },
        {
          label: '02 — Framing',
          kind: 'quote',
          paragraph: 'Every balance needed to be traceable to the receipts behind it, in one tap.',
          quote: '"I just want to know if I can trust the number." — housemate, week 1',
        },
        {
          label: '03 — Build',
          kind: 'text',
          paragraph:
            'A Postgres-backed ledger with an idempotent settle-up endpoint, and a React front end that shows the receipt trail behind every balance.',
        },
        {
          label: '04 — Results',
          kind: 'stats',
          stats: [
            { figure: '4', caption: 'housemates onboarded' },
            { figure: '0', caption: 'spreadsheets left' },
            { figure: '100%', caption: 'balances traceable' },
          ],
        },
      ],
    },
  },
  {
    slug: 'docs-for-an-api-nobody-read',
    index: '03',
    year: '2024',
    title: 'Docs for an API nobody read',
    description: 'A rewrite that cut support questions in half.',
    type: 'School project',
    tags: ['Writing', 'UX'],
    caseStudy: {
      number: 'Case study 03',
      readTime: '5 min read',
      standfirst:
        'A capstone API had thorough docs and almost no readers. I rewrote them around the tasks people actually came to do.',
      fact: { role: 'UX writing + design', team: 'Solo', span: '3 weeks', result: '−50% support questions' },
      heroCaption: 'rewritten reference page — 1600×900',
      steps: [
        {
          label: '01 — Research',
          kind: 'statement',
          statement: 'Every question in the support channel had already been "answered."',
          paragraph:
            'The docs were complete and organized by endpoint, not by task. People didn\'t know which endpoint they needed, so they asked instead of reading.',
        },
        {
          label: '02 — Build',
          kind: 'text',
          paragraph:
            'Restructured the docs around six common tasks, each with a copyable working example first and the reference detail below it.',
        },
        {
          label: '03 — Results',
          kind: 'stats',
          stats: [
            { figure: '−50%', caption: 'support questions' },
            { figure: '6', caption: 'task-first guides' },
            { figure: '2×', caption: 'docs page views' },
          ],
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
