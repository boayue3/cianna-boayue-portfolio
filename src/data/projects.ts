// Stand-in content — names, employers, and metrics are invented and must be replaced.
export type ProjectType = 'Work project' | 'Side project' | 'School project';

export interface ProcessStep {
  label: string; // e.g. "01 — Research"
  kind: 'statement' | 'quote' | 'explorations' | 'stats' | 'text' | 'testimonials' | 'insights' | 'comparison' | 'gallery' | 'image' | 'video' | 'list' | 'quotelist' | 'evidence' | 'carousel' | 'screens' | 'reflection' | 'personas';
  statement?: string;
  paragraph?: string;
  quote?: string;
  explorations?: { caption: string; verdict: string; shipped?: boolean; src?: string }[];
  stats?: { figure: string; caption: string }[];
  testimonials?: { name: string; role: string; quote: string }[];
  insightGroups?: { title: string; points: string[] }[];
  comparisons?: { name: string; description: string; highlight?: boolean; items?: { lead: string; rest: string }[] }[];
  gallery?: { caption: string; src?: string }[];
  galleryLayout?: 'grid' | 'sketch'; // 'sketch': first image tall on the left, remaining stacked on the right
  image?: { src: string; caption?: string };
  screenFlows?: { label: string; shots: string[]; note?: string }[];
  video?: { src: string; poster?: string; caption?: string; loop?: boolean };
  ordered?: boolean; // for 'list' — defaults to numbered (true)
  listItems?: { title?: string; body: string; subitems?: { title: string; body: string }[] }[];
  quoteList?: { context: string; quotes: string[] }[];
  evidenceRows?: { title: string; body: string; images?: string[] }[];
  carousel?: {
    src: string;
    caption: string;
    annotations?: { title?: string; body: string; items?: { title: string; body: string }[] }[];
  }[];
  worked?: string[];
  openQuestions?: string[];
  personas?: {
    name: string;
    basedOn?: string;
    context: string;
    goals?: string[];
    frustrations?: string[];
    behaviors?: string[];
    painPoint?: string;
    quotes?: string[];
    needs: string;
  }[];
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
  coverImageFit?: 'cover' | 'contain';
  coverImageBg?: string;
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
      fact: { role: 'UX Researcher, Product Designer', team: '3 designers', span: '14 weeks', result: 'Figma, Balsamiq Wireframes, Miro, Slack, React, JavaScript, HTML/CSS' },
      factLabels: { span: 'Timeline', result: 'Tools' },
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
          label: '04 — Demo video',
          kind: 'video',
          paragraph: 'A walkthrough of the hi-fi prototype in action.',
          video: { src: '/work/homesafe-demo.mp4', poster: '/work/homesafe-demo-poster.jpg', caption: 'HomeSafe prototype demo', loop: true },
        },
        {
          label: '05 — Voices from the field',
          kind: 'testimonials',
          testimonials: [
            {
              name: 'Jojo',
              role: 'Student @ Barnard',
              quote:
                'I know on Sidechat people ask about splitting Ubers to airports at specific times. There should be one for trains and Ubers too.',
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
          label: '06 — User personas',
          kind: 'personas',
          personas: [
            {
              name: 'Diya — The Safety-First Rider',
              context: 'Barnard student, sophomore.',
              quotes: [
                '"I don\'t feel safe alone on the subway drunk and in revealing clothing — if I\'m taking it home, I go with a friend."',
              ],
              behaviors: [
                'Goes out 2–3 times a month, mostly downtown or in Brooklyn.',
                'Will wait an extra 15–20 minutes rather than travel home alone.',
                'Default plan is "leave with a friend" — HomeSafe needs to replace that friend, not just save money.',
                'Distrustful of ride-splitting with strangers unless there\'s some way to vet who she\'s riding with.',
              ],
              needs:
                "Needs from HomeSafe: visible verification (.edu-only), the ability to filter or see who's asking to ride, and a sense of a match before she commits to leaving with them.",
            },
            {
              name: 'Dani — The Budget-Conscious Rider',
              context: 'Columbia student, junior.',
              quotes: [
                '"If I go out alone, I\'d just pay for the Uber alone — from Queens to Manhattan that\'s roughly $40, but double after 4am."',
              ],
              behaviors: [
                'Goes out most weekends, often from further-out neighborhoods (Queens, Bushwick).',
                'Price-sensitive, especially post-surge; has skipped nights out over the cost of the ride home.',
                'Less worried about traveling alone than Diya, more worried about the bill.',
                "Wants speed — doesn't want to wait around for a match if it costs her more time than it saves her money.",
              ],
              needs:
                "Needs from HomeSafe: a fast, low-friction way to see who's already heading her direction, with the price split visible up front.",
            },
          ],
        },
        {
          label: '07 — Affinity diagram',
          kind: 'image',
          paragraph:
            'We grouped everything we heard into an affinity diagram, which sorted into two clear clusters: personal safety concerns and financial & logistical constraints.',
          image: { src: '/work/homesafe-affinity-diagram.jpg', caption: 'Affinity diagram — personal safety & financial/logistical clusters' },
        },
        {
          label: '08 — Research insights',
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
          label: '09 — Competitive analysis',
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
          label: '10 — Lofi prototypes',
          kind: 'image',
          paragraph:
            'Balsamiq wireframes covering the full flow — destination search with buddy filters, the potential-buddy feed, direct messages, reviews and verification, profile sharing, account settings, and saved destinations.',
          image: {
            src: '/work/homesafe-lofi-wireframes.jpg',
            caption: 'Lo-fi wireframes — search & match, messaging, reviews, profile, and saved destinations',
          },
        },
        {
          label: '11 — Hifi prototypes',
          kind: 'screens',
          paragraph:
            'Four core flows, built in Figma: onboarding and .edu verification, posting a ride, the rider home feed, and the profile other students see.',
          screenFlows: [
            {
              label: 'Onboarding',
              shots: [
                '/work/homesafe-hifi-ob-1-loading.png',
                '/work/homesafe-hifi-ob-2-app.png',
                '/work/homesafe-hifi-ob-3-email.png',
                '/work/homesafe-hifi-ob-4-code.png',
                '/work/homesafe-hifi-ob-5-profile.png',
                '/work/homesafe-hifi-ob-6-safety.png',
                '/work/homesafe-hifi-ob-7-location.png',
              ],
            },
            {
              label: 'Create a ride',
              shots: [
                '/work/homesafe-hifi-par-where-when.png',
                '/work/homesafe-hifi-par-who-riding.png',
                '/work/homesafe-hifi-par-add-note.png',
                '/work/homesafe-hifi-par-your-ride.png',
              ],
            },
            {
              label: 'Home page',
              shots: ['/work/homesafe-hifi-home.png', '/work/homesafe-hifi-riders.png'],
            },
            {
              label: 'Profile page',
              shots: ['/work/homesafe-hifi-profile.png', '/work/homesafe-hifi-how-others-see-you.png'],
            },
          ],
        },
        {
          label: '12 — Reflection & Results',
          kind: 'reflection',
          paragraph:
            'Our design hypothesis: a platform like HomeSafe would provide a reliable, cost-effective way to get home safely, reducing the cost of expensive Uber rides. Our small-scale prototype test supported that — but also surfaced real open questions.',
          worked: [
            'HomeSafe won Best App Idea for the semester in UI Design, selected from 25 teams by the professor and TAs.',
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
    slug: 'someday-accountability',
    index: '02',
    year: '2026',
    title: 'Someday — Turning Saved Content Into Action',
    coverImage: '/work/someday-cover.png',
    coverImageFit: 'contain',
    coverImageBg: '#b0c99d',
    description:
      'Consolidating saved inspiration from TikTok, Instagram, and Pinterest — and designing accountability without the guilt-driven notifications that make similar apps easy to abandon.',
    type: 'Side project',
    tags: ['UX Research', 'Product Design', 'Concept'],
    caseStudy: {
      number: 'Case study 02',
      readTime: '10 min read',
      standfirst:
        'A concept for consolidating saved inspiration across TikTok, Instagram, and Pinterest into a single place — and helping people actually follow through on it, without relying on the guilt-driven notification tactics that make similar apps easy to abandon.',
      fact: { role: 'UX Researcher, Product Designer', team: 'Solo', span: '6 weeks', result: 'Figma, Notion, Miro' },
      factLabels: { span: 'Timeline', result: 'Tools' },
      heroCaption: 'Final polished screen or wordmark treatment',
      steps: [
        {
          label: '01 — The problem',
          kind: 'quote',
          quote:
            "Push notifications drive users away from an app more often than they pull them back in. This project designs an accountability tool that gathers saved inspiration from multiple platforms into one place, and helps people follow through — without leaning on the guilt-driven pressure that makes tools like Duolingo easy to resent and delete.",
        },
        {
          label: '02 — Target audience',
          kind: 'text',
          paragraph:
            'People who consistently save inspiration across social platforms but rarely act on it — not due to lack of interest, but due to a mix of skill uncertainty, inconsistent structure needs, and past experiences with app notifications that made them disengage entirely.',
        },
        {
          label: '03 — The solution',
          kind: 'text',
          paragraph:
            'Someday consolidates saved inspiration from TikTok, Instagram, and Pinterest into one place, then helps people actually act on it: due dates chosen per save, never required; opt-in AI help for ideas that feel too big to start; pull-first notifications instead of push-heavy nagging; and a triage flow that treats an old save as a decision to revisit, not a failure to fix.',
        },
        {
          label: '04 — Competitive analysis',
          kind: 'comparison',
          paragraph:
            'I audited existing save-consolidation apps against the follow-through problem specifically — not just organization, which they already solve well.',
          comparisons: [
            {
              name: 'ARCHV / Saver / CentralSave',
              description:
                'Pull saves from TikTok, Instagram, and Pinterest into one place via a share extension, and solve organization well. None of them touch the psychological gap between saving and doing.',
            },
            {
              name: 'Pocket Places',
              description:
                "Goes one step further, turning travel saves into map-based trip plans — but only because travel inherently maps to an itinerary. A hairstyle, a recipe, or a hobby doesn't have that built-in structure, which is exactly the gap this project targets.",
            },
            {
              name: 'Someday',
              description:
                'Solves the same consolidation problem, then adds the piece the others skip: optional due dates, opt-in AI planning for "unsure how to start" saves, and pull-first, triage-based accountability instead of guilt-driven push notifications.',
              highlight: true,
            },
          ],
        },
        {
          label: '05 — Notification teardown',
          kind: 'comparison',
          paragraph:
            'I ran a focused teardown of how six existing products handle notifications — Pinterest, Duolingo, Urban Outfitters, Snapchat, Instagram/Messenger, and Headspace — looking at permission timing, channel behavior, settings reliability, and tone.',
          comparisons: [
            {
              name: 'Duolingo — the anti-pattern',
              description:
                'Guilt-driven copy and mascot tone, with no user control over notification volume. Users reported disabling notifications entirely because of how the app made them feel.',
            },
            {
              name: 'Headspace — the positive model',
              description:
                'Recommendation notifications default to off. Reminder timing is fully user-chosen. Notifications are reframed as "sleep nudges" or "breathe nudges" rather than generic alerts.',
              highlight: true,
            },
          ],
        },
        {
          label: '06 — User personas',
          kind: 'personas',
          personas: [
            {
              name: 'Persona 1: The Time-Dependent Doer',
              basedOn: 'Noelle, 23, Philadelphia',
              context:
                'Hobbyist — beginner knitter, home cook, into skincare/juice content. Saves inspiration casually via screenshots across TikTok and Instagram; organizes "when in the mood" rather than consistently.',
              goals: [
                'Act on saved ideas when she has real, uninterrupted time (a long weekend, an open afternoon)',
                "Try recipes and crafts she's genuinely curious about, without a rigid system getting in the way",
                "Keep her phone's notification footprint small and intentional",
              ],
              frustrations: [
                'Ambitious projects with unclear or missing instructions cause her to give up early',
                "Existing routines (like skipping workouts) are hard to break even when she's saved motivation for them",
                'Due dates and planners don\'t match how she actually operates — she acts immediately or not at all',
              ],
              behaviors: [
                'Screenshots content casually; rarely revisits saves methodically',
                'When she does revisit old saves, reacts with a mix of nostalgia ("cute") and cringe ("tacky")',
                'Keeps notifications on for only a small, consistent set of apps she actually uses',
              ],
              quotes: [
                "\"If I let it sit for next week, I would've never done it.\"",
                "\"It wouldn't help — I have to do it right away or I'll talk myself out of it.\"",
                '"I looked it up and there was no pattern... I just gave up after that. I haven\'t bought a thing of yarn yet."',
                '"I\'d get the notif, I\'d check — there\'s so many apps I don\'t use, but I have the same consistent five."',
              ],
              needs:
                "What she needs from Someday: due dates that are fully optional, never a barrier to a spontaneous save. Opt-in help on vague or advanced projects, so a missing pattern doesn't mean giving up entirely. Notifications that earn a place among her small, trusted set of active apps rather than adding to the noise.",
            },
            {
              name: 'Persona 2: The Structured Planner',
              basedOn: 'Mina, 23, knitter, NYC',
              context:
                'Experienced organizer — heavy user of Pinterest boards and TikTok folders, keeps a physical planner/date book for personal goals and hobbies, not just work.',
              goals: [
                'Turn saved inspiration into scheduled, committed action the way her planner already does for other parts of her life',
                'Browse and collect broadly before committing to one project',
                'Keep her phone free of notification clutter while still tracking what matters to her personally',
              ],
              frustrations: [
                "Advanced patterns she's not yet skilled enough for stall out indefinitely (waited a full year for a creator to publish a pattern she wanted)",
                'General notification clutter on her home screen',
                'Guilt-driven app tactics — deleted Duolingo over its messaging',
              ],
              behaviors: [
                'Meticulous folder/board organizer across platforms',
                "Writes hobby projects and required materials directly into her planner's notes section — without that step, she says she wouldn't follow through",
                "Deletes saves she's outgrown, but treats categories differently (quick to delete fashion saves that no longer fit her taste; slower to delete food saves)",
              ],
              quotes: [
                '"If I actually want to do something, I write it in my notes section... otherwise I never would\'ve done it."',
                '"I knew how to do it technically, but not well enough that I feel comfortable doing it."',
                '"I dislike notifications — I don\'t have them turned on for any app, only the essentials."',
                '"I deleted Duolingo — it kept saying things like \'we really miss you,\' and it got to be too much."',
              ],
              needs:
                "What she needs from Someday: due dates and structured planning as a real, easy-to-reach option — not buried or discouraged. The same opt-in AI help as anyone else for advanced projects she's not yet confident tackling. Full, granular control over notifications, defaulting toward minimal rather than asking her to opt out repeatedly.",
            },
          ],
        },
        {
          label: '07 — Lofi Sketches',
          kind: 'gallery',
          galleryLayout: 'sketch',
          gallery: [
            { caption: 'Boards and saves view, home feed, and the pull-first check-in queue', src: '/work/someday-lofi-sketch-boards.jpg' },
            { caption: 'Task detail and board detail, with materials/notes and status states', src: '/work/someday-lofi-sketch-detail.jpg' },
            { caption: 'Check-in flow, notification settings, and onboarding', src: '/work/someday-lofi-sketch-onboarding.jpg' },
          ],
        },
        {
          label: '08 — Hi-fi screens',
          kind: 'screens',
          paragraph: 'Final polished screens across the core flow, built in Figma.',
          screenFlows: [
            {
              label: 'Onboarding',
              shots: [
                '/work/someday-hifi-ob-1-splash.png',
                '/work/someday-hifi-ob-2-goal.png',
                '/work/someday-hifi-ob-3-notifications.png',
              ],
              note:
                'A soft permission ask before the system prompt. Since declining the OS notification dialog makes re-prompting difficult, a custom screen explains the value first and only leads into the system prompt if the user opts in. It only appears for users who said they want to actually follow through during onboarding.',
            },
            {
              label: 'Save & file within the app using the extension',
              shots: ['/work/someday-hifi-save-sheet.png'],
              note:
                'Due dates are optional, chosen per save — not a required step. Because participants split evenly on whether due dates help, forcing one at save time would alienate roughly half of them. The choice lives with the user, not a fixed app-wide setting.',
            },
            {
              label: 'Home & boards',
              shots: ['/work/someday-hifi-home.png', '/work/someday-hifi-board-crochet.png'],
            },
            {
              label: 'Task & AI plan',
              shots: ['/work/someday-hifi-task-detail.png', '/work/someday-hifi-ai-plan.png'],
              note:
                'AI-assisted planning is opt-in, never automatic. When a saved idea sits in "unsure how to start," the app never generates a plan unprompted — it\'s a visible action the user taps ("Help me build a plan"). Every suggested step is editable and framed as a suggestion, and the screen discloses plainly when source material is incomplete.',
            },
            {
              label: 'Check-in & settings',
              shots: ['/work/someday-hifi-checkin.png', '/work/someday-hifi-notifications-settings.png'],
              note:
                'Triage, not tracking. Old, untouched saves resurface with a simple question — "still want this?" — with three honest outcomes: keep it, let it go, or defer the decision. Notifications are pull-first by default, with real user control: given the near-universal Duolingo backlash in interviews, the default experience favors in-app check-ins over push. Where push exists, it\'s a single either/or choice with in-app — not stacked with email — and recommendation-style notifications default to off.',
            },
          ],
        },
        {
          label: '09 — Design alternatives considered',
          kind: 'explorations',
          paragraph: 'The road not taken — alternatives explored before arriving at the final direction.',
          explorations: [
            {
              caption: 'Check-in: inline card',
              verdict: 'Triage buttons ("Still want it / Let it go / Not sure") sitting directly on the saved item\'s own full video-style card vs. the shipped check-in screen\'s small thumbnail-plus-text layout — kept the content front and center, but crowded out room for the queue count and settings shown together on the shipped screen.',
              src: '/work/someday-alt-checkin-card.png',
            },
            {
              caption: 'Check-in: full-screen queue',
              verdict: 'A dedicated, TikTok-attributed question screen ("Five months ago you saved this...") with settings kept separate, vs. the shipped version, which folds the same "X more waiting" queue and the item into one compact card alongside check-in settings — less ceremony per prompt.',
              src: '/work/someday-alt-checkin-batch.png',
            },
            {
              caption: 'Save sheet: auto-guess & one-tap',
              verdict: 'An auto-guessed board with an instant one-tap save and collapsed details vs. the shipped flow, which keeps board choice, due date, and the inspiration-only toggle expanded and visible by default — speed lost to keeping real choices in view.',
              src: '/work/someday-alt-save-minimal.png',
            },
            {
              caption: 'Save sheet: intent toggle',
              verdict: '"Just looking" vs. "want to do it" as two equal, explained buttons vs. the shipped version, which folds the same choice into a single low-emphasis "just for inspiration" toggle so it doesn\'t compete with the due-date and Save action.',
              src: '/work/someday-alt-save-intent.png',
            },
            {
              caption: 'AI plan: stepwise reveal',
              verdict: 'One current step at a time ("Start here," with a "swap this" option) vs. the shipped full-plan-at-once view — lower commitment per step, but hid how much was left and what the AI was unsure about.',
              src: '/work/someday-alt-plan-stepwise.png',
            },
            {
              caption: 'AI plan: itemized unknowns',
              verdict: 'An earlier full-plan pass with a dashed-border step and a separate "still unknown" list (yarn amount, finished size) vs. the shipped version\'s single disclosure line — itemizing every gap read as more caveat than plan, so it was condensed down to one honest sentence.',
              src: '/work/someday-alt-plan-full.png',
            },
          ],
        },
        {
          label: '10 — Trade-offs',
          kind: 'comparison',
          comparisons: [
            {
              name: 'Pull-first notifications vs. engagement',
              description:
                "A pull-first model almost certainly means lower day-to-day engagement than a push-heavy competitor — that's the point, but it's a real cost if this were a product with growth targets. I'm accepting lower engagement as the price of not becoming Duolingo.",
            },
            {
              name: 'Optional due dates vs. structure for people who need it',
              description:
                'Making due dates optional protects the half of my sample who found them pressuring — but the other half get a weaker default experience unless they opt in. A different designer could reasonably bet the other way.',
            },
            {
              name: 'Opt-in AI assistance vs. usage',
              description:
                "Requiring a tap rather than surfacing help automatically means some people who'd benefit most — stuck and unsure — might never discover it.",
            },
            {
              name: 'Single delivery channel vs. reach',
              description:
                'Restricting push and email to an either/or choice reduces the odds any single reminder reaches the user — the trade-off for solving the channel-crowding complaint from research.',
            },
            {
              name: 'Small, hobbyist-skewed research sample vs. generalizability',
              description:
                "Three of four interview participants shared a craft/hobbyist context, which shaped flows like \"unsure how to start\" in ways that may not generalize. I'm treating this as a real limitation, not a settled finding.",
            },
          ],
        },
        {
          label: '11 — Key flows',
          kind: 'text',
          paragraph:
            'The core flow runs onboarding → soft permission moment → share-extension save → home confirmation → board detail → task detail → AI-assisted plan-building (opt-in) → triage → notification settings.',
        },
        {
          label: '12 — Hypothesis & Testing',
          kind: 'quote',
          paragraph: 'Hypothesis:',
          quote:
            'We believe pull-first triage (vs. push reminders) will increase saved-task completion without increasing notification opt-outs, because it removes guilt-driven pressure.',
          comparisons: [
            {
              name: "What I'd measure",
              description: '',
              items: [
                {
                  lead: 'Saved-task completion rate',
                  rest: '— the percentage of saves that move to "in progress" or "completed" within a given window, the core metric for whether the accountability model works at all.',
                },
                {
                  lead: 'Notification opt-out rate',
                  rest: '— the percentage of users who disable check-ins after enabling them.',
                },
                {
                  lead: 'Time-to-first-action after a triage session',
                  rest: '— how quickly a user acts after a check-in prompt, versus how often stale saves are simply ignored again.',
                },
                {
                  lead: '"Let go" rate vs. silent abandonment',
                  rest: '— how often users actively release a save versus letting it sit untouched indefinitely.',
                },
                {
                  lead: 'A/B comparison against a push-reminder control group',
                  rest: '— holding everything else constant.',
                },
              ],
            },
            {
              name: 'What would prove this wrong',
              description:
                'If the pull-first cohort showed lower completion than the push cohort, that would suggest some users need to be pushed toward action more than this design assumes — mapping back to the due-date and notification-preference split already found in interviews.',
            },
          ],
        },
        {
          label: '13 — Usability testing',
          kind: 'list',
          ordered: false,
          paragraph: "What I'd test:",
          listItems: [
            { body: 'Save an item via the share extension and file it into a board.' },
            { body: 'Locate a specific saved item and change its state.' },
            { body: 'Use "unsure how to start" to generate and edit an AI-assisted plan — watching whether it feels trustworthy, generic, or off-base.' },
            { body: 'Go through a triage/check-in prompt — watching whether "still want this?" feels supportive or still reads as pressure.' },
            { body: 'Adjust notification settings (type, delivery channel, quiet hours).' },
          ],
        },
        {
          label: '14 — Reflection',
          kind: 'text',
          paragraph:
            "The most useful shift in this project happened when the research disagreed with my starting assumption — I expected due dates to universally help, and half my participants told me otherwise. Building the due-date decision around that disagreement, instead of picking a side, produced a better design than either extreme would have.",
        },
      ],
    },
  },
  {
    slug: 'depop-fit-confidence',
    index: '03',
    year: '2026',
    title: 'Depop Fit Confidence',
    description: 'Fixing fit trust on Depop — verified measurements and a "fits like" signal buyers can trust.',
    type: 'Side project',
    tags: ['Redesign', 'UX Research', 'Product Design'],
    coverImage: '/work/depop-cover.jpg',
    caseStudy: {
      number: 'Case study 03',
      readTime: '9 min read',
      standfirst:
        'The "Depop cinch" fakes a smaller waist than a garment actually has, and sizing is often buried in free text or missing entirely. I designed a fit-confidence system so buyers can trust what they\'re buying before sales-final purchase.',
      fact: { role: 'UX Researcher, Product Designer', team: 'Solo', span: '4 weeks', result: 'Figma, Notion, Claude' },
      factLabels: { span: 'Timeline', result: 'Tools' },
      heroCaption: 'Depop splash screen and the "fits like" detail view, on iPhone mockups',
      steps: [
        {
          label: '01 — Overview',
          kind: 'statement',
          statement: 'The "Depop cinch" fakes a smaller waist than a garment actually has.',
          paragraph:
            'Sizing measurements are often buried in free-text descriptions, inconsistent, or missing entirely — and vintage sizing frequently doesn\'t match modern sizing anyway. Sales are final, so buyers can\'t reliably tell how an item will fit, which costs both buyers (regret purchases, hesitation to buy at all) and sellers (lost sales, disputes) confidence in the platform.',
        },
        {
          label: '02 — Problem statement',
          kind: 'quote',
          paragraph: 'I framed the core problem as:',
          quote:
            'Depop buyers can\'t verify how an item will actually fit before buying, because sizing information is inconsistent, hidden in free text, or visually distorted by styling — and because sales are final, this erodes buyer confidence and costs sellers sales.',
        },
        {
          label: '03 — Target audience',
          kind: 'insights',
          insightGroups: [
            {
              title: 'Primary user — Buyers',
              points: [
                'Buyers who hesitate or back out of purchases because they can\'t trust how an item will actually fit — whether that\'s from missing measurements, cinched photos that distort shape, or sizing formats they don\'t understand.',
              ],
            },
            {
              title: 'Secondary user — Sellers',
              points: [
                'Sellers caught between what performs well (styled, cinched photos) and what builds buyer trust (accurate, structured fit information) — with no easy way to do both at once.',
              ],
            },
          ],
        },
        {
          label: '04 — The solution',
          kind: 'text',
          paragraph:
            'I designed a "fit confidence" system with three parts: a standardized measurement input for sellers with structured fields and guided photo prompts, a "fits like" comparison tool for buyers that checks listings against their saved measurements, and a trust signal surfaced directly on the listing card — not buried in the description.',
        },
        {
          label: '05 — How I found it',
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
          label: '06 — Evidence from existing listings',
          kind: 'evidence',
          paragraph: 'Three real listings show the pattern clearly.',
          evidenceRows: [
            {
              title: 'Guess tank top / cami',
              body: 'Cinching unnatural to how the shirt actually flows; no measurements listed, only one photo of the item.',
              images: ['/work/depop-evidence-guess-tank.jpg', '/work/depop-evidence-guess-tank-description.jpg'],
            },
            {
              title: 'B Darlin dress',
              body: 'Description is written around how the item fits a specific height; sizing is inconsistent between the post (labeled a size 3) and the free-text description (labeled 3/4).',
              images: ['/work/depop-evidence-bdarlin-dress.jpg', '/work/depop-evidence-bdarlin-description.jpg'],
            },
            {
              title: 'Guess t-shirt',
              body: 'Unnatural cinching not at the natural waistline; no measurements provided.',
              images: ['/work/depop-evidence-guess-tshirt.jpg'],
            },
          ],
        },
        {
          label: '07 — Affinity diagram: voices from Reddit threads',
          kind: 'image',
          paragraph:
            'Reactions gathered from Reddit threads on the cinching trend sorted into two clusters: fit can\'t be judged, and trust & platform pressure.',
          image: {
            src: '/work/depop-affinity-diagram.jpg',
            caption: 'Affinity diagram — clustering Reddit reactions to the Depop cinch',
          },
        },
        {
          label: '08 — User personas',
          kind: 'personas',
          personas: [
            {
              name: 'Katherine',
              context: '24, regular Depop buyer — checks measurements and photos before buying when info is available.',
              behaviors: [
                'Cross-references photos and any listed measurements to estimate fit, but currently has no personal saved sizing to check against — everything is manual guesswork done fresh on each listing.',
              ],
              painPoint:
                "When a photo is cinched and no measurements are listed, she doesn't buy — she doesn't trust the listing enough to gamble.",
              needs:
                'What she needs from this redesign: a fast way to know a listing matches her actual size without doing mental math on every scroll — this is exactly what the "fits like you" badge solves for her.',
            },
            {
              name: 'Enshalla',
              context: 'Buys secondhand often but treats fit as a gamble — has been "burned" by purchases that didn\'t fit.',
              behaviors: [
                "Doesn't consistently check measurements, partly because she doesn't always understand sizing formats (mentioned confusion with Italian/French sizing).",
              ],
              painPoint:
                "Even when measurements exist, they're not always usable to her — the raw numbers don't translate to a confident decision.",
              needs:
                'What she needs from this redesign: not just the presence of measurements, but a translated, comparative signal — this is why the "compare to your sizes" table and the plain-language badge matter more for her than raw numbers would, and it\'s the strongest argument for personalization over just "add more data."',
            },
            {
              name: 'Jamie',
              context: 'Sells regularly on Depop, aware that cinched/styled photos get more traction and engagement.',
              behaviors: [
                'Torn between using cinching because it performs better, and knowing it undermines buyer trust.',
              ],
              quotes: ['"I\'m a sellout and a poser... it has had more traction than anything else."'],
              painPoint:
                'No structured, low-friction way to provide trustworthy fit info without sacrificing the styled photo that drives engagement.',
              needs:
                "What they need from this redesign: a way to have both — the styled cover photo and a fast, structured measurement flow that doesn't feel like extra work. This is why guided fields and diagrams matter: they lower the friction enough that accuracy isn't a trade-off against engagement.",
            },
          ],
        },
        {
          label: '09 — Root causes',
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
          label: '13 — Hifi screens',
          kind: 'carousel',
          paragraph: 'Click through the hi-fi screens — each slide carries callouts on the key design decisions behind it.',
          carousel: [
            {
              src: '/work/depop-hifi-slide-sell-item.png',
              caption: 'Sell an item → Measurements → guided diagram',
              annotations: [
                {
                  title: 'Category-specific measurement input',
                  body: 'Depop\'s "sell an item" flow already renders a different size-input template depending on category (shirts vs. shoes vs. accessories). I extended that same pattern for measurements — fields need to be required for the system to work, but a required "waist" field makes no sense for someone selling a bag.',
                },
                {
                  title: 'Guided diagrams over more fields',
                  body: 'Making key fields required, paired with guided measurement diagrams (showing sellers exactly where to measure), is the strongest fix — stronger than just adding more fields.',
                },
              ],
            },
            {
              src: '/work/depop-hifi-slide-personalization.png',
              caption: 'Personalization → my measurements → onboarding',
            },
            {
              src: '/work/depop-hifi-slide-fits-like.png',
              caption: 'Listing badge → "fits like" detail sheet',
              annotations: [
                {
                  title: 'A "fits like" badge, not a percentage score',
                  body: 'A percentage score can feel gimmicky unless it\'s backed by real data; "fits like" feels grounded in the buyer\'s own input instead of an opaque algorithm.',
                  items: [
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
                      body: 'shown when the buyer hasn\'t saved measurements yet; doubles as a CTA nudging them to complete their profile.',
                    },
                    {
                      title: 'No measurements',
                      body: 'shown when the seller never filled in structured data; a visual penalty for unverified listings.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: '14 — Usability testing',
          kind: 'list',
          ordered: false,
          paragraph: 'Validates the design before it ships — does the "fits like" system make sense, and can people actually use it correctly, before measuring impact at scale.',
          listItems: [
            {
              title: 'Goal:',
              body: 'Does the "fits like" system make sense, and can people actually use it correctly — before you\'d ever measure impact at scale.',
            },
            {
              title: 'Method:',
              body: 'Moderated 1-on-1 sessions, 5–6 participants (enough to catch most usability issues per standard research practice), using a clickable prototype.',
            },
            {
              title: 'Tasks to test:',
              body: '',
              subitems: [
                {
                  title: '"Find an item you think would fit you."',
                  body: 'Tests whether the badge is noticed and understood at a glance in the scroll view.',
                },
                {
                  title: '"Add your measurements to your profile."',
                  body: 'Tests whether the sizing-input flow is clear enough that people complete it — the step the whole feature depends on.',
                },
                {
                  title: '"You found a top marked \'runs bigger.\' What would you do next?"',
                  body: 'Tests whether the graduated signal (not just pass/fail) is actually interpretable, not just noticed.',
                },
                {
                  title: '"You\'re listing a jacket for sale. Add its measurements."',
                  body: 'Tests the seller-side guided input flow.',
                },
              ],
            },
            {
              title: 'What to measure:',
              body: '',
              subitems: [
                { title: 'Task success rate', body: 'Did they complete it without help.' },
                { title: 'Time on task', body: 'Especially for the seller measurement flow, since friction here is the biggest risk.' },
                {
                  title: 'Comprehension checks',
                  body: 'After seeing the badge, ask "what do you think this means?" before explaining it — catches misread icons/labels.',
                },
                { title: 'Think-aloud notes', body: 'On hesitation points.' },
              ],
            },
          ],
        },
        {
          label: '15 — A/B testing (proposed)',
          kind: 'comparison',
          paragraph:
            "This validates impact, framed as a hypothesis since there's no real traffic to test against. Worth being upfront in the case study that this is a proposed test, not a run one — that's honest and still shows strategic thinking.",
          comparisons: [
            {
              name: 'Test 1: Does the trust badge change buying behavior?',
              description: '',
              items: [
                { lead: 'A (control):', rest: 'Current Depop listing card, no badge.' },
                { lead: 'B (variant):', rest: 'Listing card with "fits like you" / "runs bigger" / "add sizes" badge.' },
                { lead: 'Primary metric:', rest: 'Click-through rate from card to full listing, purchase completion rate.' },
                {
                  lead: 'Secondary metric:',
                  rest: 'Return/dispute rate tied to sizing complaints — ties directly back to the original research problem.',
                },
              ],
            },
            {
              name: 'Test 2: Does requiring structured measurements change seller behavior?',
              description: '',
              items: [
                { lead: 'A (control):', rest: 'Current free-text description field.' },
                { lead: 'B (variant):', rest: 'Structured required fields with a guided diagram.' },
                { lead: 'Primary metric:', rest: '% of listings with complete, structured measurement data.' },
                {
                  lead: 'Secondary metric:',
                  rest: 'Listing completion rate — does the added friction cause sellers to abandon the listing flow? Worth naming honestly as the real risk of this design.',
                },
              ],
            },
          ],
        },
      ],
    },
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
