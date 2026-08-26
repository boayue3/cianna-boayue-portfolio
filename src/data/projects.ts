// Stand-in content — names, employers, and metrics are invented and must be replaced.
export type ProjectType = 'Work project' | 'Side project' | 'School project';

export interface ProcessStep {
  label: string; // e.g. "01 — Research"
  kind: 'statement' | 'quote' | 'explorations' | 'stats' | 'text' | 'testimonials' | 'insights' | 'comparison' | 'gallery' | 'image' | 'video' | 'list' | 'quotelist' | 'evidence' | 'reflection';
  statement?: string;
  paragraph?: string;
  quote?: string;
  explorations?: { caption: string; verdict: string; shipped?: boolean }[];
  stats?: { figure: string; caption: string }[];
  testimonials?: { name: string; role: string; quote: string }[];
  insightGroups?: { title: string; points: string[] }[];
  comparisons?: { name: string; description: string; highlight?: boolean }[];
  gallery?: { caption: string }[];
  image?: { src: string; caption?: string };
  video?: { src: string; poster?: string; caption?: string };
  ordered?: boolean; // for 'list' — defaults to numbered (true)
  listItems?: { title?: string; body: string; subitems?: { title: string; body: string }[] }[];
  quoteList?: { context: string; quotes: string[] }[];
  evidenceRows?: { title: string; body: string }[];
  worked?: string[];
  openQuestions?: string[];
}

export interface Project {
  slug: string;
  index: string; // "01"
  year: string;
  title: string;
  description: string;
  type?: ProjectType;
  tags?: string[];
  coverImage?: string;
  comingSoon?: boolean;
  caseStudy?: {
    number: string; // "Case study 01"
    readTime: string;
    standfirst: string;
    fact: { role: string; team: string; span: string; result: string };
    factLabels?: { role?: string; team?: string; span?: string; result?: string };
    heroCaption: string;
    steps: ProcessStep[];
  };
}

export const projects: Project[] = [
  {
    slug: 'homesafe-ride-coordination',
    index: '01',
    year: '2024',
    title: 'HomeSafe — Ride Coordination App',
    description: 'Helping Columbia & Barnard students split a ride home and never travel alone late at night.',
    type: 'School project',
    tags: ['UX Research', 'Product Design'],
    coverImage: '/work/homesafe-cover.jpg',
    caseStudy: {
      number: 'Case study 01',
      readTime: '8 min read',
      standfirst:
        'HomeSafe is a ride-coordination app that helps Columbia & Barnard students find a travel buddy after a night out — splitting the cost of an Uber and making sure no one heads home alone, especially late at night.',
      fact: { role: 'UX Researcher, Product Designer', team: '3 designers', span: '14 weeks', result: 'Concept' },
      factLabels: { span: 'Timeline', result: 'Status' },
      heroCaption: 'HomeSafe — image placeholder',
      steps: [
        {
          label: '01 — The problem',
          kind: 'statement',
          statement: 'For students heading downtown for a night out, the trip home is often the hardest part of the night.',
          paragraph:
            'An Uber back to Morningside Heights from the Lower East Side or Brooklyn can run $40–$70, and the subway, while cheap, can feel unsafe late at night — especially for someone traveling alone, intoxicated, or in revealing clothing.',
        },
        {
          label: '02 — The solution',
          kind: 'text',
          paragraph:
            'HomeSafe connects students who are heading toward the same place at the same time so they can split an Uber or ride the train back together, turning a stressful, expensive solo trip into a shared, affordable, and safer one.',
        },
        {
          label: '03 — Audience & method',
          kind: 'text',
          paragraph:
            "Our primary users are students at Columbia and Barnard who frequent bars and clubs downtown; the app also serves the wider student body for shared rides to airports, concerts, and other off-campus destinations. We shadowed and interviewed students on real nights out — at jazz bars in the Lower East Side, clubs in Queens, and on the walk back to campus — then ran an affinity diagramming session to find patterns across everything we'd heard.",
        },
        {
          label: '04 — Voices from the field',
          kind: 'testimonials',
          testimonials: [
            {
              name: 'Jojo',
              role: 'Student @ Barnard',
              quote:
                'I know on Sidechat people ask about splitting Ubers to airports at specific times. There should be one for trains and Ubers too.',
            },
            {
              name: 'Dani',
              role: 'Student @ Columbia',
              quote:
                "If I go out alone, I'd just pay for the Uber alone — from Queens to Manhattan that's roughly $40, but double after 4am.",
            },
            {
              name: 'Diya',
              role: 'Student @ Barnard',
              quote:
                "I don't feel safe alone on the subway drunk and in revealing clothes — if I'm taking it home, I go with a friend.",
            },
            {
              name: 'Julia',
              role: 'Student @ Columbia',
              quote:
                'The wait for trains gets really long, and I feel unsafe waiting alone on deserted platforms — more than I do on the train itself.',
            },
          ],
        },
        {
          label: '05 — Affinity diagram',
          kind: 'image',
          paragraph:
            'We grouped everything we heard into an affinity diagram, which sorted into two clear clusters: personal safety concerns and financial & logistical constraints.',
          image: { src: '/work/homesafe-affinity-diagram.jpg', caption: 'Affinity diagram — personal safety & financial/logistical clusters' },
        },
        {
          label: '06 — Research insights',
          kind: 'insights',
          insightGroups: [
            {
              title: 'Personal safety',
              points: [
                'Traveling alone late at night feels far less safe than with company — especially while intoxicated.',
                'Transferring trains alone, or waiting on empty platforms, was repeatedly described as scary.',
                'Revealing clothing after a night out heightened feelings of vulnerability on transit.',
                "Many students said they'd rather wait and leave with another woman than go alone, sober or not.",
              ],
            },
            {
              title: 'Financial & logistical',
              points: [
                'Ubers from popular nightlife areas (Brooklyn, Queens, downtown) are a real financial strain.',
                'Surge pricing pushes prices well past what students consider affordable.',
                'Students consistently said they\'d prefer to go home with other women if given the option.',
                'Friends often leave at different times, leaving someone to figure out the trip home solo.',
              ],
            },
          ],
        },
        {
          label: '07 — Competitive analysis',
          kind: 'comparison',
          paragraph:
            'Two services already address pieces of this puzzle — but each leaves a gap that HomeSafe was designed to fill.',
          comparisons: [
            {
              name: 'Uber',
              description:
                'Splits fares with a stranger heading the same direction — but the savings are often marginal. A shared ride from Morningside Heights to the Upper East Side was $17.52 versus $21.94 for a private UberX, a difference of just a few dollars.',
            },
            {
              name: 'Columbia Evening Shuttle',
              description:
                'Free rides within a campus radius, but waits often exceed 20 minutes, service runs only 6pm–3am, and it never reaches downtown Manhattan, Queens, or Brooklyn — exactly where our users are going out.',
            },
            {
              name: 'Our solution: HomeSafe',
              description:
                "Combines the cost-sharing of Uber Share with the safety and community of the Evening Shuttle. Students coordinate with people already heading their way — no time window, no service-area limit, and a shorter wait than a scheduled shuttle since it's an on-demand car.",
              highlight: true,
            },
          ],
        },
        {
          label: '08 — Lofi prototypes',
          kind: 'gallery',
          gallery: [{ caption: 'lofi wireframes' }],
        },
        {
          label: '09 — Hifi prototypes',
          kind: 'gallery',
          gallery: [
            { caption: 'onboarding' },
            { caption: 'create a ride' },
            { caption: 'home page' },
            { caption: 'profile page' },
          ],
        },
        {
          label: '10 — Demo video',
          kind: 'video',
          paragraph: 'A walkthrough of the hi-fi prototype in action.',
          video: { src: '/work/homesafe-demo.mp4', caption: 'HomeSafe prototype demo' },
        },
        {
          label: '11 — Reflection',
          kind: 'reflection',
          paragraph:
            'Our design hypothesis: a platform like HomeSafe would provide a reliable, cost-effective way to get home safely, reducing the cost of expensive Uber rides. Our small-scale prototype test supported that — but also surfaced real open questions.',
          worked: [
            'The group-chat format felt natural and unforced — participants used it without prompting once it was time to leave.',
            'Splitting a $57 taxi from Queens down to $14.25 per person validated the core value proposition.',
            'Ranking-driven wireframes made the jump to a polished hi-fi prototype much faster.',
          ],
          openQuestions: [
            'How do we build critical mass — and promote the app — without a large existing user base?',
            'Would users feel comfortable sharing real-time location at scale, beyond a small trusted group?',
            'How should the UI feel less like "messaging strangers" and more like the original group chat?',
            "What's the right way to incentivize early prototype testers given limited go-out windows (Thu–Sun)?",
          ],
        },
      ],
    },
  },
  {
    slug: 'depop-fit-confidence',
    index: '02',
    year: '2026',
    title: 'Depop Fit Confidence',
    description: 'Fixing fit trust on Depop — verified measurements and a "fits like" signal buyers can trust.',
    type: 'Side project',
    tags: ['Redesign', 'UX Research', 'Product Design'],
    caseStudy: {
      number: 'Case study 02',
      readTime: '9 min read',
      standfirst:
        'The "Depop cinch" fakes a smaller waist than a garment actually has, and sizing is often buried in free text or missing entirely. I designed a fit-confidence system so buyers can trust what they\'re buying before sales-final purchase.',
      fact: { role: 'UX Researcher, Product Designer', team: 'Solo', span: '6 weeks', result: 'Concept' },
      factLabels: { span: 'Timeline', result: 'Status' },
      heroCaption: 'Depop Fit Confidence — image placeholder',
      steps: [
        {
          label: '01 — Overview',
          kind: 'statement',
          statement: 'The "Depop cinch" fakes a smaller waist than a garment actually has.',
          paragraph:
            'Sizing measurements are often buried in free-text descriptions, inconsistent, or missing entirely — and vintage sizing frequently doesn\'t match modern sizing anyway. Sales are final, so buyers can\'t reliably tell how an item will fit, which costs both buyers (regret purchases, hesitation to buy at all) and sellers (lost sales, disputes) confidence in the platform.',
        },
        {
          label: '02 — The solution',
          kind: 'text',
          paragraph:
            'I designed a "fit confidence" system with three parts: a standardized measurement input for sellers with structured fields and guided photo prompts, a "fits like" comparison tool for buyers that checks listings against their saved measurements, and a trust signal surfaced directly on the listing card — not buried in the description.',
        },
        {
          label: '03 — Problem statement',
          kind: 'quote',
          paragraph: 'I framed the core problem as:',
          quote:
            'Depop buyers can\'t verify how an item will actually fit before buying, because sizing information is inconsistent, hidden in free text, or visually distorted by styling — and because sales are final, this erodes buyer confidence and costs sellers sales.',
        },
        {
          label: '04 — How I found it',
          kind: 'list',
          ordered: false,
          listItems: [
            {
              body: 'I noticed this through my own experience using Depop. I ran into this friction repeatedly while shopping, but assumed it was just my own bad luck, and it eventually discouraged me from using the app for a while.',
            },
            {
              body: 'I later came across a TikTok poking fun at the "cinch" trend. Reading through the comments, I realized the frustration was widely shared, not just my own experience.',
            },
          ],
        },
        {
          label: '05 — Evidence from existing listings',
          kind: 'evidence',
          paragraph: 'Four real listings show the pattern clearly.',
          evidenceRows: [
            {
              title: 'Guess tank top / cami',
              body: 'Cinching unnatural to how the shirt actually flows; no measurements listed, only one photo of the item.',
            },
            {
              title: 'B Darlin dress',
              body: 'Description is written around how the item fits a specific height; sizing is inconsistent between the post (labeled a size 3) and the free-text description (labeled 3/4).',
            },
            {
              title: 'Guess t-shirt',
              body: 'Unnatural cinching not at the natural waistline; no measurements provided.',
            },
            {
              title: 'New York & Company blouse',
              body: 'Cinched photo; measurements are included but don\'t specify what was measured (e.g. no label for pit-to-pit vs. total width).',
            },
          ],
        },
        {
          label: '06 — Voices from a TikTok thread',
          kind: 'quotelist',
          paragraph:
            'Reactions gathered from a TikTok comment thread on the cinching trend consistently pointed to the same frustrations.',
          quoteList: [
            {
              context:
                'Buyers can\'t tell whether a garment is boxy or fitted once it\'s been cinched — the shape shown in photos doesn\'t reflect the true cut.',
              quotes: [
                'oh my god yes. i want to see how the shirt is shaped 😭 but i cant ever see because of that stupid scrunch. is the shirt boxy or is it made to be tight around the sides?? guess we\'ll never know! even worse when the scrunch is insanely exaggerated and the waist is like an inch wide',
              ],
            },
            {
              context:
                'Several buyers said the cinch reads as aesthetic staging (a "Pinterest board" look) rather than an honest product photo, and that they\'d scroll past a cinched listing rather than purchase.',
              quotes: [
                'Yes, it looks nice, but in a pinterest board kind of way. As a listing to purchase i would scroll right by, if it\'s a boxy t shirt i would rather it look like a boxy t shirt. If you really like the dynamic shape, maybe modeling it or putting it on a mannequin bust could give it something while still showing the true fit.',
                'i dont like it tbh because that isn\'t my body shape it\'s hard to determine what it\'ll look like on and is automatically skewed perception from the cinching. i think having both is a good option!',
              ],
            },
            {
              context:
                'Multiple people suggested flat, unscrunched photos should still be included even if a seller wants to also post a styled shot.',
              quotes: [
                'at least use the "aesthetic" scrunched photo for the cover and include an unscrunched photo so people can actually see what it looks like if you\'re that attached to the scrunch lol',
              ],
            },
            {
              context:
                'One person noted cinching can also conceal flaws, stains, or wear, since the fabric is bunched rather than laid flat.',
              quotes: ['I feel like cinching some items could easily hide flaws / stains / heavy use in the pictures.'],
            },
            {
              context:
                'One seller admitted to using the cinch despite disliking it themselves, because it visibly performs better and drives more engagement than a flat photo.',
              quotes: [
                'i agree but i\'m a sellout and a poser so i did the depop scrunch on one of my tops and it has had more traction than anything else',
              ],
            },
            {
              context: 'Several comments tied the trend to broader platform pressure to stand out.',
              quotes: [
                'Trendy hashtags, cool backdrops, "editing" the clothes into more desirable shapes or poses. whether it\'s scrunching them up or an XS model wearing an M-L top that\'s been tied up on the back, everyone\'s trying to make their account stand out and be the coolest',
              ],
            },
          ],
        },
        {
          label: '07 — Secondary research: buyer interviews',
          kind: 'testimonials',
          testimonials: [
            {
              name: 'Amelia',
              role: 'Depop buyer, 23',
              quote: 'But normally I don\'t pay attention to much so I have bought quite a lot of clothes that don\'t fit.',
            },
            {
              name: 'Milly',
              role: 'Depop buyer, 23',
              quote: 'I gamble lol.',
            },
            {
              name: 'Enshalla',
              role: 'Depop buyer, 23',
              quote:
                'I just hope lol... I\'ve gotten burned a lot but i just eye the item and pray it\'ll fit. Yes, I would check measurements if listed — I just also don\'t know what some mean. If it\'s US sizes I\'m good, but like Italian sizes, French sizes, I don\'t really know.',
            },
            {
              name: 'Kat',
              role: 'Depop buyer, 24',
              quote:
                'i look at the image and measurements (if available) and i try to determine based off that. If the image is scrunched and measurements aren\'t listed — well i dont buy it then bc i dont trust it.',
            },
          ],
        },
        {
          label: '08 — Root causes',
          kind: 'list',
          listItems: [
            {
              title: 'Cinching persists because it works.',
              body: 'Buyers engage more with styled, cinched photos, and sellers have noticed listings gain more traction when styled this way compared to flat photos. This creates an incentive to keep using a technique that actively works against buyer trust.',
            },
            {
              title: 'There\'s no standardized, required way to communicate fit.',
              body: 'Measurements are optional, free-text, and inconsistently labeled, so even well-intentioned sellers produce listings buyers can\'t reliably interpret. Over time, buyers either disengage from measurements entirely (treating purchases as a gamble) or abandon purchases they\'d otherwise want to make.',
            },
          ],
        },
        {
          label: "09 — Who's affected",
          kind: 'insights',
          insightGroups: [
            {
              title: 'Primary user — Buyers',
              points: [
                'Lose confidence in purchasing because they can\'t reliably predict fit, leading to both regretted purchases and abandoned ones.',
              ],
            },
            {
              title: 'Secondary user — Sellers',
              points: [
                'Face a dilemma between using a technique that drives engagement (cinching) and one that builds buyer trust (flat, accurate photos and measurements) — and currently have no structured way to do both well.',
              ],
            },
          ],
        },
        {
          label: '10 — Opportunity',
          kind: 'quote',
          quote:
            'If fit information were standardized, verified, and visible where buyers actually make decisions, buyers would be able to purchase with confidence instead of guessing.',
        },
        {
          label: "11 — What I'm not solving",
          kind: 'text',
          paragraph:
            'Whether sellers continue to use cinched or styled photos. That\'s a valid creative and marketing choice, and the data shows it genuinely drives engagement, so I\'m not trying to eliminate it — the goal is ensuring accurate fit information exists alongside it, not replacing it.',
        },
        {
          label: '12 — Design principles',
          kind: 'list',
          listItems: [
            {
              title: 'Standardized measurement input for sellers',
              body: '— structured fields (not free text) with guided photo prompts (flat, on-body, tag). Lives on the "list an item" page under item info; could be optional but strongly incentivized.',
            },
            {
              title: '"Fits like" comparison tool for buyers',
              body: '— buyers save their own measurements under a personalization/sizes setting, and every listing can be checked against them.',
            },
            {
              title: 'Trust signal on the listing card itself',
              body: '— visible in the scroll/grid view, not buried in the description; can be toggled on or off.',
            },
          ],
        },
        {
          label: '13 — Design choices',
          kind: 'list',
          listItems: [
            {
              body: 'Depop\'s "sell an item" flow already renders a different size-input template depending on category (shirts vs. shoes vs. accessories). I extended that same pattern for measurements — fields need to be required for the system to work, but a required "waist" field makes no sense for someone selling a bag.',
            },
            {
              body: 'Rather than a small tweak per category, I scoped this into three distinct input branches: flat garments, shoes, and accessories.',
            },
            {
              body: 'Within each branch, I had to decide what\'s required vs. optional. Depop\'s core weakness is that free-text measurements are easy to skip, which can discourage sellers or create loopholes for anyone trying to avoid filling them in.',
            },
            {
              body: 'Making key fields required, paired with guided measurement diagrams (showing sellers exactly where to measure), is the strongest fix — stronger than just adding more fields.',
            },
            {
              body: 'For shoes, I included a width field in addition to standard sizing, since resale shoe fit complaints are often about width, not just length. I also added a heel-height option.',
            },
            {
              body: 'As a secondary trust signal for shoes, I considered letting sellers add insole length (cm/in), since vintage and vintage-adjacent shoe sizing runs inconsistent.',
            },
            {
              title: 'For the buyer-facing trust signal, I chose a "fits like" badge system over a fit-confidence percentage/score.',
              body: 'A percentage score can feel gimmicky unless it\'s backed by real data; "fits like" feels grounded in the buyer\'s own input instead of an opaque algorithm.',
              subitems: [
                {
                  title: 'Fits like you',
                  body: 'measurements match the buyer\'s saved profile within a reasonable tolerance; the primary trust signal.',
                },
                {
                  title: 'Runs bigger',
                  body: 'a graduated variant rather than a flat pass/fail; tells the buyer to size down or check details before buying.',
                },
                {
                  title: 'Add sizes',
                  body: 'shown when the buyer hasn\'t saved measurements yet; doubles as a CTA nudging them to complete their profile, which is what feeds this whole feature.',
                },
                {
                  title: 'No measurements',
                  body: 'shown when the seller never filled in structured data; acts as a visual penalty for unverified listings and an implicit nudge for sellers to complete the form.',
                },
              ],
            },
            {
              body: 'Process note: used Claude to help sketch and iterate on screen ideations on iPad, then used Replit to convert those into lo-fi wireframes.',
            },
          ],
        },
        {
          label: '14 — Lofi wireframes',
          kind: 'gallery',
          gallery: [{ caption: 'lofi wireframes' }],
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
  {
    slug: 'coming-soon',
    index: '04',
    year: '—',
    title: 'Next case study',
    description: 'A new project is in the works — check back soon.',
    comingSoon: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug && p.caseStudy);
}

export function getNextProject(slug: string) {
  const withCaseStudy = projects.filter((p) => p.caseStudy);
  const i = withCaseStudy.findIndex((p) => p.slug === slug);
  return withCaseStudy[(i + 1) % withCaseStudy.length];
}
