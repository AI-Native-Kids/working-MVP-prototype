/**
 * Bilingual content dictionary for the AI Labs prototype.
 *
 * All page copy lives here, keyed by language ('en' | 'zh'). Components read the
 * active dictionary through the i18n context (see src/i18n.tsx). To edit content,
 * change the matching field in BOTH `en` and `zh`. Structural fields that are not
 * language-dependent (icon, gradient, id, mockup, href, difficulty key, numeric
 * stat values) are intentionally kept identical across both languages.
 */

import type { IconName } from '../components/Icon';

export type Lang = 'en' | 'zh';

/* ----------------------------- Shared types ----------------------------- */

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type MockupKind = 'planner' | 'fractions' | 'rocket' | 'stocks' | 'rome';

export interface NavLink {
  label: string;
  href: string;
}
export interface HeroStat {
  value: string;
  label: string;
}
export interface PreviewRow {
  icon: IconName;
  label: string;
  text: string;
}
export interface ProblemPoint {
  icon: IconName;
  title: string;
  description: string;
}
export interface ModelStep {
  step: string;
  icon: IconName;
  title: string;
  description: string;
}
export interface Lab {
  id: string;
  name: string;
  icon: IconName;
  tagline: string;
  description: string;
  projects: string[];
  skills: string[];
  gradient: string;
}
export interface Level {
  level: string;
  title: string;
  ages: string;
  description: string;
  icon: IconName;
}
export interface TimelineModule {
  weeks: string;
  title: string;
  description: string;
}
export interface Project {
  title: string;
  category: string;
  description: string;
  skills: string[];
  difficulty: Difficulty;
  icon: IconName;
  gradient: string;
}
export interface ParentBenefit {
  icon: IconName;
  title: string;
  description: string;
}
export interface ComparisonRow {
  traditional: string;
  aiLabs: string;
}
export interface CaseStudy {
  id: string;
  projectTitle: string;
  lab: string;
  ageRange: string;
  problem: string;
  builds: string;
  features: string[];
  skills: string[];
  outcome: string;
  icon: IconName;
  gradient: string;
  mockup: MockupKind;
}

export interface Dictionary {
  header: { cta: string };
  nav: NavLink[];
  hero: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    titlePost: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: HeroStat[];
    preview: PreviewRow[];
    chat: string;
    previewFooterTitle: string;
    previewFooterSub: string;
  };
  problem: { eyebrow: string; title: string; subtitle: string; points: ProblemPoint[] };
  model: { eyebrow: string; title: string; subtitle: string; steps: ModelStep[] };
  labs: { eyebrow: string; title: string; subtitle: string; projectsLabel: string; items: Lab[] };
  path: { eyebrow: string; title: string; subtitle: string; levels: Level[] };
  timeline: { eyebrow: string; title: string; subtitle: string; outcome: string; modules: TimelineModule[] };
  showcase: {
    eyebrow: string;
    title: string;
    subtitle: string;
    skillsLabel: string;
    difficultyLabels: Record<Difficulty, string>;
    projects: Project[];
  };
  cases: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: { problem: string; builds: string; features: string; skills: string; outcome: string; journey: string };
    buildJourney: string[];
    items: CaseStudy[];
  };
  parents: { eyebrow: string; title: string; subtitle: string; cta: string; benefits: ParentBenefit[] };
  comparison: {
    eyebrow: string;
    title: string;
    subtitle: string;
    traditionalHead: string;
    aiLabsHead: string;
    rows: ComparisonRow[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { quote: string; name: string; role: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
    popular: string;
    plans: {
      name: string;
      price: string;
      period: string;
      description: string;
      features: string[];
      cta: string;
      intent: 'join' | 'curriculum';
      highlighted: boolean;
    }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  cta: { title: string; subtitle: string; primary: string; secondary: string };
  lead: {
    titleJoin: string;
    titleCurriculum: string;
    subtitle: string;
    name: string;
    contact: string;
    contactPh: string;
    role: string;
    roles: { parent: string; school: string; franchise: string; other: string };
    childAge: string;
    childAgePh: string;
    message: string;
    messagePh: string;
    submit: string;
    sending: string;
    successTitle: string;
    successBody: string;
    close: string;
    mailtoNote: string;
    required: string;
  };
  footer: { tagline: string; rights: string; prototype: string };
  mock: {
    browser: string;
    planner: { title: string; addTask: string; tasks: { name: string; due: string }[]; aiLabel: string; plan: string };
    fractions: { level: string; score: string; question: string };
    rocket: { title: string; distance: string; fuel: string; angle: string; gravity: string };
    stocks: { company: string; sub: string; risk: string; aiLabel: string; summary: string };
    rome: { header: string; stability: string; happiness: string; treasury: string; question: string; yes: string; no: string };
    skillsLabel: string;
    featuresLabel: string;
  };
}

/* =============================== ENGLISH =============================== */

const en: Dictionary = {
  header: { cta: 'Join AI Labs' },
  nav: [
    { label: 'The Model', href: '#model' },
    { label: 'AI Labs', href: '#labs' },
    { label: 'Learning Path', href: '#path' },
    { label: 'Curriculum', href: '#curriculum' },
    { label: 'Demo Cases', href: '#cases' },
    { label: 'Projects', href: '#projects' },
    { label: 'For Parents', href: '#parents' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  hero: {
    eyebrow: 'Interdisciplinary AI learning',
    titlePre: 'Build the Future with ',
    titleHighlight: 'Vibe Coding',
    titlePost: '',
    subtitle:
      'An interdisciplinary AI project-based learning system where students learn coding, subject knowledge, problem-solving, and product thinking by building real-world projects.',
    ctaPrimary: 'Explore AI Labs',
    ctaSecondary: 'View Student Projects',
    stats: [
      { value: '6', label: 'AI Labs' },
      { value: '4', label: 'Skill levels' },
      { value: '16', label: 'Weeks per course' },
      { value: 'K-12', label: 'Ages 8+' },
    ],
    preview: [
      { icon: 'chat', label: 'Ask AI', text: '“Help me build a fraction game for 4th graders.”' },
      { icon: 'code', label: 'Vibe Coding', text: 'Generating interactive components…' },
      { icon: 'presentation', label: 'Present', text: 'Ready for Demo Day 🎉' },
    ],
    chat: '',
    previewFooterTitle: 'Project shipped in 16 weeks',
    previewFooterSub: 'From idea → MVP → portfolio piece',
  },
  problem: {
    eyebrow: 'The problem',
    title: 'Coding class as we knew it is outdated',
    subtitle:
      'When AI can write the code, memorizing syntax stops being the point. Students need a higher level of thinking — and a new way to learn.',
    points: [
      {
        icon: 'code',
        title: 'Too much focus on syntax',
        description:
          'Traditional coding classes spend most of their time memorizing syntax and language rules instead of building real things.',
      },
      {
        icon: 'sparkles',
        title: 'AI can already write code',
        description:
          'AI now generates working code in seconds. Memorizing syntax is no longer the skill that sets students apart.',
      },
      {
        icon: 'brain',
        title: 'Students need higher-level skills',
        description:
          'The valuable abilities are now problem discovery, design thinking, and knowing how to direct AI toward a goal.',
      },
      {
        icon: 'rocket',
        title: 'Learning should reach the real world',
        description:
          'Future-ready learning centers on discovering problems, designing products, collaborating with AI, and delivering real results.',
      },
    ],
  },
  model: {
    eyebrow: 'A new learning model',
    title: 'Subject Knowledge + AI Tools + Vibe Coding + Real Delivery',
    subtitle: 'Every project follows the same powerful loop — the way real builders work.',
    steps: [
      {
        step: '01',
        icon: 'book',
        title: 'Learn the context',
        description:
          'Start with real subject knowledge — math, science, history or finance — to understand the problem deeply.',
      },
      {
        step: '02',
        icon: 'chat',
        title: 'Ask AI',
        description:
          'Students learn to prompt, question and collaborate with AI to research, plan and unblock their ideas.',
      },
      {
        step: '03',
        icon: 'code',
        title: 'Build with Vibe Coding',
        description:
          'Turn ideas into working apps and simulations using AI-assisted Vibe Coding — describe it, build it, refine it.',
      },
      {
        step: '04',
        icon: 'presentation',
        title: 'Present the final product',
        description: 'Test, polish and present a finished, real-world project students are proud to show.',
      },
    ],
  },
  labs: {
    eyebrow: 'The AI Labs course system',
    title: 'Six labs. One way of learning.',
    subtitle:
      'Each lab is an interdisciplinary studio where students apply a school subject, collaborate with AI, and ship a real project with Vibe Coding.',
    projectsLabel: 'Example projects',
    items: [
      {
        id: 'math',
        name: 'AI Math Lab',
        icon: 'function',
        tagline: 'Make abstract math concrete',
        description:
          'Students build interactive tools that visualize math concepts and turn abstract ideas into things they can see and play with.',
        projects: ['Fraction Game', 'Probability Simulator', 'Function Visualizer'],
        skills: ['Math reasoning', 'Data visualization', 'Interactive design'],
        gradient: 'from-indigo-500 to-blue-500',
      },
      {
        id: 'science',
        name: 'AI Science Lab',
        icon: 'beaker',
        tagline: 'Simulate the natural world',
        description:
          'Students use AI and coding to simulate scientific systems and run experiments that would be impossible in a classroom.',
        projects: ['Rocket Launch Simulator', 'Ecosystem Simulator', 'Weather Prediction App'],
        skills: ['Scientific thinking', 'Simulation', 'Data analysis'],
        gradient: 'from-emerald-500 to-teal-500',
      },
      {
        id: 'finance',
        name: 'AI Finance Lab',
        icon: 'chart',
        tagline: 'Build financial literacy',
        description:
          'Students learn financial literacy by building AI-powered analysis tools that model real markets and decisions.',
        projects: ['Stock Analysis Dashboard', 'Personal Portfolio Simulator', 'AI Trading Strategy Simulator'],
        skills: ['Financial thinking', 'Statistics', 'Risk management'],
        gradient: 'from-amber-500 to-orange-500',
      },
      {
        id: 'history',
        name: 'AI History Lab',
        icon: 'globe',
        tagline: 'Turn history into systems',
        description:
          'Students turn history into interactive simulations and decision-making systems that reveal cause and effect.',
        projects: ['Roman Empire Simulator', 'World War Strategy Simulator', 'Historical Timeline Explorer'],
        skills: ['Historical reasoning', 'Systems thinking', 'Decision analysis'],
        gradient: 'from-rose-500 to-pink-500',
      },
      {
        id: 'startup',
        name: 'AI Startup Lab',
        icon: 'rocket',
        tagline: 'From problem to MVP',
        description:
          'Students identify a real-world problem, design a product, build an MVP, and present it like a real founder.',
        projects: ['Campus Helper App', 'AI Study Assistant', 'Local Business Website Generator'],
        skills: ['Entrepreneurship', 'Product design', 'AI collaboration', 'Presentation'],
        gradient: 'from-violet-500 to-fuchsia-500',
      },
      {
        id: 'game',
        name: 'AI Game Lab',
        icon: 'gamepad',
        tagline: 'Play, then build the game',
        description:
          'Students create AI-powered games and interactive experiences that blend storytelling, logic and design.',
        projects: ['AI NPC Adventure Game', 'Math Battle Game', 'Story Generator Game'],
        skills: ['Game design', 'Storytelling', 'Logic', 'Coding'],
        gradient: 'from-cyan-500 to-sky-500',
      },
    ],
  },
  path: {
    eyebrow: 'The learning path',
    title: 'A journey that grows with your child',
    subtitle:
      'Students progress through four levels — from guided exploration to building startup-style products on their own.',
    levels: [
      {
        level: 'Level 1',
        title: 'AI Explorer',
        ages: 'Ages 8–10',
        description: 'Build simple interactive projects with AI guidance and discover how creating with code feels.',
        icon: 'compass',
      },
      {
        level: 'Level 2',
        title: 'AI Builder',
        ages: 'Ages 10–12',
        description: 'Build subject-based apps and simulations that connect to what students learn in school.',
        icon: 'blocks',
      },
      {
        level: 'Level 3',
        title: 'AI Creator',
        ages: 'Ages 12–15',
        description: 'Build complete products and dashboards with real data, design, and user experience.',
        icon: 'sparkles',
      },
      {
        level: 'Level 4',
        title: 'AI Founder',
        ages: 'Ages 14+',
        description: 'Build startup-style MVPs and portfolio projects ready for school and career applications.',
        icon: 'rocket',
      },
    ],
  },
  timeline: {
    eyebrow: 'Sample 16-week course',
    title: 'Inside the AI Startup Lab',
    subtitle:
      'A full term that takes students from a real-world problem all the way to a polished product on Demo Day.',
    outcome: 'The result: a working product and a presentation students are proud to show.',
    modules: [
      { weeks: 'Weeks 1–2', title: 'Problem Discovery', description: 'Find a real problem worth solving and validate that it matters.' },
      { weeks: 'Weeks 3–4', title: 'Product Design', description: 'Define the user, the solution, and what the product should do.' },
      { weeks: 'Weeks 5–6', title: 'AI Prompting & Planning', description: 'Learn to plan the build and collaborate effectively with AI.' },
      { weeks: 'Weeks 7–10', title: 'Vibe Coding MVP Build', description: 'Build a working minimum viable product with AI-assisted coding.' },
      { weeks: 'Weeks 11–12', title: 'Testing & Feedback', description: 'Put the MVP in front of real users and gather honest feedback.' },
      { weeks: 'Weeks 13–14', title: 'Improvement & Polish', description: 'Refine features, fix issues, and improve the experience.' },
      { weeks: 'Weeks 15–16', title: 'Final Demo Day', description: 'Present the finished product to parents, peers and partners.' },
    ],
  },
  showcase: {
    eyebrow: 'Student project showcase',
    title: 'Real projects, ready for a portfolio',
    subtitle:
      'A snapshot of what students build across the AI Labs — the kind of work that stands out on school and program applications.',
    skillsLabel: 'Skills learned',
    difficultyLabels: { Beginner: 'Beginner', Intermediate: 'Intermediate', Advanced: 'Advanced' },
    projects: [
      {
        title: 'AI Homework Planner',
        category: 'AI Startup Lab',
        description: 'A smart planner that breaks assignments into tasks and suggests a study schedule.',
        skills: ['Product design', 'AI collaboration', 'UX'],
        difficulty: 'Intermediate',
        icon: 'rocket',
        gradient: 'from-violet-500 to-fuchsia-500',
      },
      {
        title: 'Fraction Battle Game',
        category: 'AI Math Lab',
        description: 'A two-player game where students race to solve fractions and level up.',
        skills: ['Math reasoning', 'Game logic', 'Interactive design'],
        difficulty: 'Beginner',
        icon: 'function',
        gradient: 'from-indigo-500 to-blue-500',
      },
      {
        title: 'Rocket Simulation App',
        category: 'AI Science Lab',
        description: 'Simulate rocket launches by adjusting thrust, mass and gravity in real time.',
        skills: ['Physics', 'Simulation', 'Data visualization'],
        difficulty: 'Advanced',
        icon: 'beaker',
        gradient: 'from-emerald-500 to-teal-500',
      },
      {
        title: 'Stock Insight Dashboard',
        category: 'AI Finance Lab',
        description: 'An AI dashboard that analyzes stock trends and explains them in plain language.',
        skills: ['Financial thinking', 'Statistics', 'Dashboards'],
        difficulty: 'Advanced',
        icon: 'chart',
        gradient: 'from-amber-500 to-orange-500',
      },
      {
        title: 'Roman Empire Decision Game',
        category: 'AI History Lab',
        description: 'Make the choices of a Roman leader and watch how history responds.',
        skills: ['Historical reasoning', 'Systems thinking', 'Decision analysis'],
        difficulty: 'Intermediate',
        icon: 'globe',
        gradient: 'from-rose-500 to-pink-500',
      },
      {
        title: 'AI Story Game',
        category: 'AI Game Lab',
        description: 'An interactive adventure where AI generates the story based on player choices.',
        skills: ['Storytelling', 'Game design', 'Coding'],
        difficulty: 'Beginner',
        icon: 'gamepad',
        gradient: 'from-cyan-500 to-sky-500',
      },
    ],
  },
  cases: {
    eyebrow: 'Real demo case studies',
    title: 'See exactly what students build',
    subtitle:
      'Five real project walkthroughs — the problem, the build, the features, and the journey from idea to a portfolio-ready product.',
    labels: {
      problem: 'The real-world problem',
      builds: 'What the student builds',
      features: 'Key features',
      skills: 'Skills learned',
      outcome: 'Portfolio outcome',
      journey: 'Student build journey',
    },
    buildJourney: ['Discover Problem', 'Plan with AI', 'Build with Vibe Coding', 'Test & Improve', 'Present Final Product'],
    items: [
      {
        id: 'homework-planner',
        projectTitle: 'AI Homework Planner',
        lab: 'AI Startup Lab',
        ageRange: 'Ages 12–15',
        problem: 'Students often forget assignments, deadlines, and study plans.',
        builds:
          'A simple web app where students enter homework tasks, due dates, difficulty level, and available study time. The app uses AI to suggest a daily study plan.',
        features: ['Add homework tasks', 'Set due dates', 'AI-generated study schedule', 'Priority ranking', 'Simple dashboard'],
        skills: ['Product thinking', 'Prompt writing', 'Basic frontend development', 'Time management logic', 'User testing'],
        outcome: 'A working study-planning app that can be shown to parents, teachers, and school clubs.',
        icon: 'rocket',
        gradient: 'from-violet-500 to-fuchsia-500',
        mockup: 'planner',
      },
      {
        id: 'fraction-battle',
        projectTitle: 'Fraction Battle Game',
        lab: 'AI Math Lab',
        ageRange: 'Ages 8–11',
        problem: 'Many students struggle to understand fractions visually.',
        builds: 'A simple game where players compare, add, and simplify fractions to win points.',
        features: ['Visual fraction bars', 'Multiple-choice answers', 'Score system', 'Level progression', 'Instant feedback'],
        skills: ['Fraction concepts', 'Game logic', 'Interactive UI', 'Math visualization'],
        outcome: 'An educational math game that younger students can play.',
        icon: 'function',
        gradient: 'from-indigo-500 to-blue-500',
        mockup: 'fractions',
      },
      {
        id: 'rocket-simulator',
        projectTitle: 'Rocket Launch Simulator',
        lab: 'AI Science Lab',
        ageRange: 'Ages 10–13',
        problem: 'Students often learn physics formulas but do not see how motion works visually.',
        builds: 'A simulation where users adjust rocket fuel, launch angle, and gravity to see how far the rocket travels.',
        features: ['Input sliders', 'Animated rocket launch', 'Distance calculation', 'Gravity comparison', 'Result explanation'],
        skills: ['Physics concepts', 'Variables', 'Simulation thinking', 'Data visualization'],
        outcome: 'An interactive science simulation demonstrating motion and force.',
        icon: 'beaker',
        gradient: 'from-emerald-500 to-teal-500',
        mockup: 'rocket',
      },
      {
        id: 'stock-dashboard',
        projectTitle: 'Stock Insight Dashboard',
        lab: 'AI Finance Lab',
        ageRange: 'Ages 13–16',
        problem: 'Students hear about stocks but do not understand how to analyze companies.',
        builds: 'A mock stock analysis dashboard using sample company data.',
        features: ['Company profile cards', 'Revenue and profit charts', 'Risk score', 'AI-generated company summary', 'Portfolio simulator'],
        skills: ['Financial literacy', 'Data analysis', 'Chart design', 'Risk thinking', 'AI-assisted explanation'],
        outcome: 'A beginner-friendly financial analysis dashboard.',
        icon: 'chart',
        gradient: 'from-amber-500 to-orange-500',
        mockup: 'stocks',
      },
      {
        id: 'roman-empire',
        projectTitle: 'Roman Empire Decision Simulator',
        lab: 'AI History Lab',
        ageRange: 'Ages 11–15',
        problem: 'History is often memorized instead of understood as a system of decisions and consequences.',
        builds:
          'An interactive simulation where users act as a Roman emperor and make choices about taxes, army spending, trade, and public welfare.',
        features: ['Decision cards', 'Empire stability score', 'Population happiness', 'Treasury balance', 'Historical event outcomes'],
        skills: ['Historical reasoning', 'Systems thinking', 'Cause and effect', 'Decision-making logic', 'Interactive storytelling'],
        outcome: 'A historical simulation game that turns history into an interactive learning experience.',
        icon: 'globe',
        gradient: 'from-rose-500 to-pink-500',
        mockup: 'rome',
      },
    ],
  },
  parents: {
    eyebrow: 'Why parents care',
    title: "More than coding — preparation for what's next",
    subtitle:
      'AI Labs blends academic subjects with the AI and product skills that schools, programs, and future careers increasingly look for.',
    cta: 'Request curriculum overview',
    benefits: [
      { icon: 'sparkles', title: 'Real AI literacy', description: 'Students learn to use AI as a creative tool, not just a shortcut — a skill for every future career.' },
      { icon: 'brain', title: 'Problem-solving ability', description: 'Every project starts with a real problem, building the thinking skills schools value most.' },
      { icon: 'folder', title: 'Portfolio-ready projects', description: 'Students finish with real, shareable products for school and program applications.' },
      { icon: 'book', title: 'Academics meet technology', description: 'Math, science, history and finance come alive through hands-on building.' },
      { icon: 'rocket', title: 'Future-ready preparation', description: 'Prepares students for the schools, programs and careers of an AI-driven world.' },
    ],
  },
  comparison: {
    eyebrow: 'The difference',
    title: 'AI Labs vs. a traditional coding class',
    subtitle: 'Same goal of teaching technology — a completely different experience and outcome.',
    traditionalHead: 'Traditional Coding Class',
    aiLabsHead: 'AI Labs',
    rows: [
      { traditional: 'Syntax-first', aiLabs: 'Project-first' },
      { traditional: 'Teacher-led', aiLabs: 'AI-assisted' },
      { traditional: 'Small exercises', aiLabs: 'Real products' },
      { traditional: 'Limited subject connection', aiLabs: 'Interdisciplinary' },
      { traditional: 'Hard to show real-world value', aiLabs: 'Portfolio-ready outcomes' },
    ],
  },
  testimonials: {
    eyebrow: 'What families say',
    title: 'Loved by parents and students',
    subtitle: 'Real reactions from families and partners in the AI Labs program.',
    items: [
      {
        quote:
          'My daughter went from “I’m not a coder” to demoing her own study-planner app at dinner. The confidence is the real win.',
        name: 'Jennifer L.',
        role: 'Parent of a 13-year-old',
      },
      {
        quote:
          'Finally a program where the kids build something real. The projects connect straight back to what they learn at school.',
        name: 'Mr. Chen',
        role: 'Middle school STEM coordinator',
      },
      {
        quote:
          'I built a game my little brother actually plays. I learned more in 16 weeks than a whole year of tutorials.',
        name: 'Marcus, age 14',
        role: 'AI Founder track student',
      },
    ],
  },
  pricing: {
    eyebrow: 'Plans & enrollment',
    title: 'Simple plans for every learner',
    subtitle: 'Start with a single lab or commit to the full path. School and franchise partners get custom packages.',
    note: 'Illustrative pricing for this prototype. Contact us for current rates and scholarships.',
    popular: 'Most popular',
    plans: [
      {
        name: 'Single Lab',
        price: '$390',
        period: '/ 8-week lab',
        description: 'Try one AI Lab and ship a first real project.',
        features: ['1 AI Lab of your choice', 'Weekly live sessions', '1 portfolio project', 'Demo Day showcase'],
        cta: 'Join AI Labs',
        intent: 'join',
        highlighted: false,
      },
      {
        name: 'Full Path',
        price: '$1,290',
        period: '/ 16-week term',
        description: 'The complete AI Startup Lab journey from idea to MVP.',
        features: ['Full 16-week curriculum', 'Small-group mentoring', 'Portfolio-ready MVP', '1:1 project feedback', 'Demo Day with parents'],
        cta: 'Join AI Labs',
        intent: 'join',
        highlighted: true,
      },
      {
        name: 'School / Partner',
        price: 'Custom',
        period: '',
        description: 'Bring AI Labs to your school or open a franchise.',
        features: ['Full curriculum license', 'Teacher training', 'Co-branded materials', 'Ongoing support'],
        cta: 'Request curriculum overview',
        intent: 'curriculum',
        highlighted: false,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Frequently asked questions',
    subtitle: 'Everything parents and partners usually want to know.',
    items: [
      {
        q: 'Does my child need prior coding experience?',
        a: 'No. Students start by describing ideas in plain language and collaborating with AI. We meet every learner at their level — from total beginners to advanced builders.',
      },
      {
        q: 'What ages is AI Labs for?',
        a: 'Ages 8 and up. Our four levels (Explorer → Builder → Creator → Founder) match content and difficulty to each age group.',
      },
      {
        q: 'What exactly is “Vibe Coding”?',
        a: 'It’s building software by describing what you want in natural language and refining it with AI — so students focus on problem-solving, design and product thinking instead of memorizing syntax.',
      },
      {
        q: 'What will my child have at the end?',
        a: 'A finished, working project they present on Demo Day — plus a portfolio piece they can show for school and program applications.',
      },
      {
        q: 'Is AI Labs online or in person?',
        a: 'Both options are available depending on your location. Request a curriculum overview and we’ll share the formats near you.',
      },
      {
        q: 'How do schools or franchise partners get started?',
        a: 'Use “Request curriculum overview” and tell us about your school or organization. We’ll follow up with licensing, training and co-branding details.',
      },
    ],
  },
  cta: {
    title: 'Start Building Real Projects with AI',
    subtitle:
      'Give students the skills, confidence, and portfolio to thrive in an AI-driven world. Join AI Labs or request a full curriculum overview for your school or program.',
    primary: 'Join AI Labs',
    secondary: 'Request Curriculum Overview',
  },
  lead: {
    titleJoin: 'Join AI Labs',
    titleCurriculum: 'Request curriculum overview',
    subtitle: "Tell us a little about you and we'll be in touch shortly.",
    name: 'Your name',
    contact: 'Email or phone',
    contactPh: 'you@example.com',
    role: 'I am a',
    roles: { parent: 'Parent', school: 'School partner', franchise: 'Franchise partner', other: 'Other' },
    childAge: "Child's age (optional)",
    childAgePh: 'e.g. 11',
    message: 'Message (optional)',
    messagePh: 'Anything you’d like us to know…',
    submit: 'Send',
    sending: 'Sending…',
    successTitle: 'Thank you! 🎉',
    successBody: "We've received your request and will get back to you soon.",
    close: 'Close',
    mailtoNote: 'This opens your email app to send us the details.',
    required: 'Please fill in your name and contact.',
  },
  footer: {
    tagline:
      'An interdisciplinary AI project-based learning system for K-12 students — built for parents, schools, and franchise partners.',
    rights: 'All rights reserved.',
    prototype: 'Static prototype — for presentation purposes only.',
  },
  mock: {
    browser: 'student-demo.app',
    planner: {
      title: 'My Homework',
      addTask: '+ Add task',
      tasks: [
        { name: 'Math worksheet', due: 'Today' },
        { name: 'History essay', due: 'Fri' },
        { name: 'Science reading', due: 'Mon' },
      ],
      aiLabel: '🤖 AI study plan',
      plan: '4:00 Math · 4:45 break · 5:00 History essay draft',
    },
    fractions: { level: 'Level 3', score: 'Score 120', question: 'Which fraction is larger?' },
    rocket: { title: 'Rocket Launch Simulator', distance: '1,240 m', fuel: 'Fuel', angle: 'Launch angle', gravity: 'Gravity' },
    stocks: {
      company: 'NovaTech Inc.',
      sub: 'Sample data · NVT',
      risk: 'Risk: Medium',
      aiLabel: '🤖 AI summary',
      summary: 'Revenue grew steadily; profit margins are stable with moderate risk.',
    },
    rome: {
      header: 'Year 117 AD · Emperor',
      stability: 'Stability',
      happiness: 'Happiness',
      treasury: 'Treasury',
      question: 'Raise taxes to fund the army?',
      yes: 'Yes',
      no: 'No',
    },
    skillsLabel: 'Skills learned',
    featuresLabel: 'Key features',
  },
};

/* =============================== 中文 =============================== */

const zh: Dictionary = {
  header: { cta: '加入 AI Labs' },
  nav: [
    { label: '学习模式', href: '#model' },
    { label: 'AI 实验室', href: '#labs' },
    { label: '学习路径', href: '#path' },
    { label: '课程安排', href: '#curriculum' },
    { label: '案例演示', href: '#cases' },
    { label: '学生作品', href: '#projects' },
    { label: '致家长', href: '#parents' },
    { label: '价格', href: '#pricing' },
    { label: '常见问题', href: '#faq' },
  ],
  hero: {
    eyebrow: '跨学科 AI 学习',
    titlePre: '用 ',
    titleHighlight: 'Vibe Coding',
    titlePost: ' 创造未来',
    subtitle:
      '一套跨学科的 AI 项目制学习系统:学生通过构建真实项目,同时掌握编程、学科知识、问题解决能力与产品思维。',
    ctaPrimary: '探索 AI Labs',
    ctaSecondary: '查看学生作品',
    stats: [
      { value: '6', label: 'AI 实验室' },
      { value: '4', label: '能力阶段' },
      { value: '16', label: '每门课周数' },
      { value: 'K-12', label: '8 岁以上' },
    ],
    preview: [
      { icon: 'chat', label: '向 AI 提问', text: '“帮我做一个给四年级学生的分数游戏。”' },
      { icon: 'code', label: 'Vibe Coding', text: '正在生成交互组件…' },
      { icon: 'presentation', label: '展示成果', text: '准备好 Demo Day 🎉' },
    ],
    chat: '',
    previewFooterTitle: '16 周完成一个完整项目',
    previewFooterSub: '从创意 → MVP → 作品集',
  },
  problem: {
    eyebrow: '面临的问题',
    title: '我们熟悉的那种编程课已经过时',
    subtitle: '当 AI 已经能写代码,死记语法就失去了意义。学生需要更高层次的思维能力,以及全新的学习方式。',
    points: [
      { icon: 'code', title: '过度关注语法', description: '传统编程课把大量时间花在背诵语法和语言规则上,而不是真正动手做东西。' },
      { icon: 'sparkles', title: 'AI 已经会写代码', description: 'AI 几秒钟就能生成可用的代码。背语法早已不再是让学生脱颖而出的能力。' },
      { icon: 'brain', title: '学生需要更高阶的能力', description: '真正有价值的,是发现问题、设计思维,以及懂得如何指挥 AI 去达成目标。' },
      { icon: 'rocket', title: '学习应当抵达真实世界', description: '面向未来的学习,核心是发现问题、设计产品、与 AI 协作,并交付真实成果。' },
    ],
  },
  model: {
    eyebrow: '全新的学习模式',
    title: '学科知识 + AI 工具 + Vibe Coding + 真实交付',
    subtitle: '每个项目都遵循同一个强大的闭环 —— 这正是真正的创造者工作的方式。',
    steps: [
      { step: '01', icon: 'book', title: '理解背景', description: '从真实的学科知识出发 —— 数学、科学、历史或金融 —— 深入理解问题本身。' },
      { step: '02', icon: 'chat', title: '向 AI 提问', description: '学生学会提示、追问并与 AI 协作,用来做调研、做规划、突破思路瓶颈。' },
      { step: '03', icon: 'code', title: '用 Vibe Coding 构建', description: '用 AI 辅助的 Vibe Coding 把想法变成可运行的应用与模拟 —— 描述它、构建它、打磨它。' },
      { step: '04', icon: 'presentation', title: '展示最终成果', description: '测试、打磨,并展示一个完整的、能让学生引以为傲的真实项目。' },
    ],
  },
  labs: {
    eyebrow: 'AI Labs 课程体系',
    title: '六大实验室,一种学习方式。',
    subtitle: '每个实验室都是一个跨学科工作室:学生运用一门学科知识,与 AI 协作,并用 Vibe Coding 交付一个真实项目。',
    projectsLabel: '示例项目',
    items: [
      {
        id: 'math',
        name: 'AI 数学实验室',
        icon: 'function',
        tagline: '让抽象数学变得具体',
        description: '学生构建交互式工具,把数学概念可视化,把抽象的想法变成看得见、玩得到的东西。',
        projects: ['分数游戏', '概率模拟器', '函数可视化工具'],
        skills: ['数学推理', '数据可视化', '交互设计'],
        gradient: 'from-indigo-500 to-blue-500',
      },
      {
        id: 'science',
        name: 'AI 科学实验室',
        icon: 'beaker',
        tagline: '模拟自然世界',
        description: '学生用 AI 与编程模拟科学系统,运行那些在普通课堂里无法完成的实验。',
        projects: ['火箭发射模拟器', '生态系统模拟器', '天气预测应用'],
        skills: ['科学思维', '系统模拟', '数据分析'],
        gradient: 'from-emerald-500 to-teal-500',
      },
      {
        id: 'finance',
        name: 'AI 金融实验室',
        icon: 'chart',
        tagline: '培养财商素养',
        description: '学生通过构建 AI 驱动的分析工具来学习金融素养,模拟真实的市场与决策。',
        projects: ['股票分析仪表盘', '个人投资组合模拟器', 'AI 交易策略模拟器'],
        skills: ['金融思维', '统计', '风险管理'],
        gradient: 'from-amber-500 to-orange-500',
      },
      {
        id: 'history',
        name: 'AI 历史实验室',
        icon: 'globe',
        tagline: '把历史变成系统',
        description: '学生把历史转化为交互式模拟与决策系统,揭示其中的因果关系。',
        projects: ['罗马帝国模拟器', '世界大战策略模拟器', '历史时间线探索器'],
        skills: ['历史推理', '系统思维', '决策分析'],
        gradient: 'from-rose-500 to-pink-500',
      },
      {
        id: 'startup',
        name: 'AI 创业实验室',
        icon: 'rocket',
        tagline: '从问题到 MVP',
        description: '学生发现一个真实问题,设计产品,构建 MVP,并像真正的创业者一样进行展示。',
        projects: ['校园助手应用', 'AI 学习助手', '本地商家网站生成器'],
        skills: ['创业能力', '产品设计', 'AI 协作', '演讲展示'],
        gradient: 'from-violet-500 to-fuchsia-500',
      },
      {
        id: 'game',
        name: 'AI 游戏实验室',
        icon: 'gamepad',
        tagline: '先玩,再亲手做游戏',
        description: '学生创作 AI 驱动的游戏与互动体验,融合叙事、逻辑与设计。',
        projects: ['AI NPC 冒险游戏', '数学对战游戏', '故事生成游戏'],
        skills: ['游戏设计', '叙事', '逻辑', '编程'],
        gradient: 'from-cyan-500 to-sky-500',
      },
    ],
  },
  path: {
    eyebrow: '学习路径',
    title: '与孩子一同成长的进阶之路',
    subtitle: '学生沿着四个阶段进阶 —— 从有引导的探索,到独立打造创业级产品。',
    levels: [
      { level: '第一阶段', title: 'AI 探索者', ages: '8–10 岁', description: '在 AI 引导下构建简单的交互项目,感受用代码创造的乐趣。', icon: 'compass' },
      { level: '第二阶段', title: 'AI 构建者', ages: '10–12 岁', description: '构建与校内学科相关联的应用与模拟。', icon: 'blocks' },
      { level: '第三阶段', title: 'AI 创造者', ages: '12–15 岁', description: '用真实数据、设计与用户体验,构建完整的产品与仪表盘。', icon: 'sparkles' },
      { level: '第四阶段', title: 'AI 创始人', ages: '14 岁以上', description: '构建创业级 MVP 与作品集项目,可用于升学与求职申请。', icon: 'rocket' },
    ],
  },
  timeline: {
    eyebrow: '16 周课程示例',
    title: '走进 AI 创业实验室',
    subtitle: '完整的一学期,带学生从一个真实问题,一路走到 Demo Day 上打磨完成的产品。',
    outcome: '最终成果:一个可运行的产品,和一场让学生引以为傲的展示。',
    modules: [
      { weeks: '第 1–2 周', title: '发现问题', description: '找到一个值得解决的真实问题,并验证它确实重要。' },
      { weeks: '第 3–4 周', title: '产品设计', description: '明确用户、解决方案,以及产品应该做什么。' },
      { weeks: '第 5–6 周', title: 'AI 提示与规划', description: '学会规划构建过程,并与 AI 高效协作。' },
      { weeks: '第 7–10 周', title: 'Vibe Coding 构建 MVP', description: '借助 AI 辅助编程,做出一个可运行的最小可行产品。' },
      { weeks: '第 11–12 周', title: '测试与反馈', description: '把 MVP 交到真实用户手中,收集真诚的反馈。' },
      { weeks: '第 13–14 周', title: '改进与打磨', description: '优化功能、修复问题,提升使用体验。' },
      { weeks: '第 15–16 周', title: '最终 Demo Day', description: '向家长、同伴与合作伙伴展示完成的产品。' },
    ],
  },
  showcase: {
    eyebrow: '学生作品展示',
    title: '真实项目,直接进作品集',
    subtitle: '一组 AI Labs 学生作品的缩影 —— 这类成果在升学和项目申请中格外亮眼。',
    skillsLabel: '收获的能力',
    difficultyLabels: { Beginner: '入门', Intermediate: '进阶', Advanced: '高级' },
    projects: [
      {
        title: 'AI 作业规划助手',
        category: 'AI 创业实验室',
        description: '一个智能规划工具,把作业拆解成任务,并给出学习时间表建议。',
        skills: ['产品设计', 'AI 协作', '用户体验'],
        difficulty: 'Intermediate',
        icon: 'rocket',
        gradient: 'from-violet-500 to-fuchsia-500',
      },
      {
        title: '分数对战游戏',
        category: 'AI 数学实验室',
        description: '双人游戏,学生比拼解分数题的速度并升级闯关。',
        skills: ['数学推理', '游戏逻辑', '交互设计'],
        difficulty: 'Beginner',
        icon: 'function',
        gradient: 'from-indigo-500 to-blue-500',
      },
      {
        title: '火箭模拟应用',
        category: 'AI 科学实验室',
        description: '实时调整推力、质量与重力,模拟火箭发射过程。',
        skills: ['物理', '系统模拟', '数据可视化'],
        difficulty: 'Advanced',
        icon: 'beaker',
        gradient: 'from-emerald-500 to-teal-500',
      },
      {
        title: '股票洞察仪表盘',
        category: 'AI 金融实验室',
        description: '一个 AI 仪表盘,分析股票趋势并用通俗语言加以解释。',
        skills: ['金融思维', '统计', '仪表盘设计'],
        difficulty: 'Advanced',
        icon: 'chart',
        gradient: 'from-amber-500 to-orange-500',
      },
      {
        title: '罗马帝国决策游戏',
        category: 'AI 历史实验室',
        description: '扮演罗马领袖做出抉择,观察历史如何随之回应。',
        skills: ['历史推理', '系统思维', '决策分析'],
        difficulty: 'Intermediate',
        icon: 'globe',
        gradient: 'from-rose-500 to-pink-500',
      },
      {
        title: 'AI 故事游戏',
        category: 'AI 游戏实验室',
        description: '一场互动冒险,AI 会根据玩家的选择实时生成剧情。',
        skills: ['叙事', '游戏设计', '编程'],
        difficulty: 'Beginner',
        icon: 'gamepad',
        gradient: 'from-cyan-500 to-sky-500',
      },
    ],
  },
  cases: {
    eyebrow: '真实案例演示',
    title: '看看学生具体能做出什么',
    subtitle: '五个真实项目的完整走查 —— 问题、构建、功能,以及从创意到可进作品集成果的全过程。',
    labels: {
      problem: '真实问题',
      builds: '学生要做什么',
      features: '核心功能',
      skills: '收获的能力',
      outcome: '作品集成果',
      journey: '学生构建历程',
    },
    buildJourney: ['发现问题', '用 AI 规划', '用 Vibe Coding 构建', '测试与改进', '展示最终成果'],
    items: [
      {
        id: 'homework-planner',
        projectTitle: 'AI 作业规划助手',
        lab: 'AI 创业实验室',
        ageRange: '12–15 岁',
        problem: '学生常常忘记作业、截止日期和学习计划。',
        builds:
          '一个简单的网页应用,学生可以录入作业任务、截止日期、难度等级和可用学习时间,应用会用 AI 生成每日学习计划。',
        features: ['添加作业任务', '设置截止日期', 'AI 生成学习时间表', '优先级排序', '简洁仪表盘'],
        skills: ['产品思维', '提示词写作', '前端开发基础', '时间管理逻辑', '用户测试'],
        outcome: '一个可运行的学习规划应用,可以展示给家长、老师和学校社团。',
        icon: 'rocket',
        gradient: 'from-violet-500 to-fuchsia-500',
        mockup: 'planner',
      },
      {
        id: 'fraction-battle',
        projectTitle: '分数对战游戏',
        lab: 'AI 数学实验室',
        ageRange: '8–11 岁',
        problem: '许多学生难以直观地理解分数。',
        builds: '一个简单的游戏,玩家通过比较、相加和约分分数来赢得积分。',
        features: ['可视化分数条', '多选题作答', '积分系统', '关卡进阶', '即时反馈'],
        skills: ['分数概念', '游戏逻辑', '交互界面', '数学可视化'],
        outcome: '一款可供低年级学生游玩的教育数学游戏。',
        icon: 'function',
        gradient: 'from-indigo-500 to-blue-500',
        mockup: 'fractions',
      },
      {
        id: 'rocket-simulator',
        projectTitle: '火箭发射模拟器',
        lab: 'AI 科学实验室',
        ageRange: '10–13 岁',
        problem: '学生往往学会了物理公式,却看不到运动到底是怎么发生的。',
        builds: '一个模拟器,用户可以调整火箭燃料、发射角度和重力,观察火箭能飞多远。',
        features: ['输入滑块', '火箭发射动画', '距离计算', '重力对比', '结果解释'],
        skills: ['物理概念', '变量', '模拟思维', '数据可视化'],
        outcome: '一个演示运动与力的交互式科学模拟。',
        icon: 'beaker',
        gradient: 'from-emerald-500 to-teal-500',
        mockup: 'rocket',
      },
      {
        id: 'stock-dashboard',
        projectTitle: '股票洞察仪表盘',
        lab: 'AI 金融实验室',
        ageRange: '13–16 岁',
        problem: '学生听说过股票,却不懂得如何分析一家公司。',
        builds: '一个使用示例公司数据的模拟股票分析仪表盘。',
        features: ['公司资料卡', '营收与利润图表', '风险评分', 'AI 生成的公司摘要', '投资组合模拟器'],
        skills: ['金融素养', '数据分析', '图表设计', '风险思维', 'AI 辅助解释'],
        outcome: '一个适合初学者的财务分析仪表盘。',
        icon: 'chart',
        gradient: 'from-amber-500 to-orange-500',
        mockup: 'stocks',
      },
      {
        id: 'roman-empire',
        projectTitle: '罗马帝国决策模拟器',
        lab: 'AI 历史实验室',
        ageRange: '11–15 岁',
        problem: '历史常常被死记硬背,而不是被理解为一连串决策与后果构成的系统。',
        builds:
          '一个交互式模拟,用户扮演罗马皇帝,就税收、军费、贸易和民生福利做出抉择。',
        features: ['决策卡牌', '帝国稳定度', '民众幸福度', '国库余额', '历史事件结果'],
        skills: ['历史推理', '系统思维', '因果关系', '决策逻辑', '互动叙事'],
        outcome: '一款把历史变成互动学习体验的历史模拟游戏。',
        icon: 'globe',
        gradient: 'from-rose-500 to-pink-500',
        mockup: 'rome',
      },
    ],
  },
  parents: {
    eyebrow: '家长为何选择我们',
    title: '不只是编程 —— 更是为未来做准备',
    subtitle: 'AI Labs 把学科知识与 AI、产品能力相结合,而这些正是学校、项目和未来职业越来越看重的。',
    cta: '索取课程介绍',
    benefits: [
      { icon: 'sparkles', title: '真正的 AI 素养', description: '学生学会把 AI 当作创作工具,而不只是走捷径 —— 这是面向任何未来职业的能力。' },
      { icon: 'brain', title: '问题解决能力', description: '每个项目都从一个真实问题开始,锤炼学校最看重的思维能力。' },
      { icon: 'folder', title: '可进作品集的项目', description: '学生最终收获真实、可分享的成果,用于升学和项目申请。' },
      { icon: 'book', title: '学科与技术结合', description: '数学、科学、历史与金融,在动手构建中变得鲜活。' },
      { icon: 'rocket', title: '面向未来的准备', description: '为孩子迎接 AI 驱动世界中的学校、项目与职业做好准备。' },
    ],
  },
  comparison: {
    eyebrow: '差异对比',
    title: 'AI Labs 对比传统编程课',
    subtitle: '同样是教技术 —— 体验和成果却截然不同。',
    traditionalHead: '传统编程课',
    aiLabsHead: 'AI Labs',
    rows: [
      { traditional: '语法优先', aiLabs: '项目优先' },
      { traditional: '老师主导', aiLabs: 'AI 辅助' },
      { traditional: '零碎练习', aiLabs: '真实产品' },
      { traditional: '与学科关联有限', aiLabs: '跨学科融合' },
      { traditional: '难以体现真实价值', aiLabs: '可进作品集的成果' },
    ],
  },
  testimonials: {
    eyebrow: '家长怎么说',
    title: '深受家长与学生喜爱',
    subtitle: '来自 AI Labs 项目中家长与合作伙伴的真实反馈。',
    items: [
      {
        quote: '我女儿从「我不是搞编程的料」,到在饭桌上给我们演示自己做的学习规划应用。这份自信才是最大的收获。',
        name: 'Jennifer L.',
        role: '13 岁孩子的家长',
      },
      {
        quote: '终于有一个让孩子真正动手做出东西的项目。这些项目能直接对应到他们在学校学的内容。',
        name: '陈老师',
        role: '初中 STEM 教研负责人',
      },
      {
        quote: '我做了一个我弟弟真的会玩的游戏。这 16 周学到的,比看一整年教程还多。',
        name: 'Marcus,14 岁',
        role: 'AI 创始人阶段学员',
      },
    ],
  },
  pricing: {
    eyebrow: '价格与报名',
    title: '适合每位学习者的简单方案',
    subtitle: '可以先从单个实验室开始,也可以选择完整学习路径。学校与加盟伙伴提供定制方案。',
    note: '本原型中的价格仅为示例,具体费用与奖学金请联系我们。',
    popular: '最受欢迎',
    plans: [
      {
        name: '单个实验室',
        price: '¥2,800',
        period: ' / 8 周课程',
        description: '体验一个 AI 实验室,完成第一个真实项目。',
        features: ['任选 1 个 AI 实验室', '每周直播课', '1 个作品集项目', 'Demo Day 展示'],
        cta: '加入 AI Labs',
        intent: 'join',
        highlighted: false,
      },
      {
        name: '完整路径',
        price: '¥9,200',
        period: ' / 16 周学期',
        description: '完整的 AI 创业实验室旅程,从创意到 MVP。',
        features: ['完整 16 周课程', '小班导师辅导', '可进作品集的 MVP', '一对一项目反馈', '家长参与的 Demo Day'],
        cta: '加入 AI Labs',
        intent: 'join',
        highlighted: true,
      },
      {
        name: '学校 / 合作',
        price: '定制',
        period: '',
        description: '把 AI Labs 引入你的学校,或开设加盟。',
        features: ['完整课程授权', '师资培训', '联合品牌物料', '持续支持'],
        cta: '索取课程介绍',
        intent: 'curriculum',
        highlighted: false,
      },
    ],
  },
  faq: {
    eyebrow: '常见问题',
    title: '常见问题解答',
    subtitle: '家长与合作伙伴通常关心的问题,都在这里。',
    items: [
      {
        q: '孩子需要有编程基础吗?',
        a: '不需要。学生从用日常语言描述想法、与 AI 协作开始。我们会根据每个孩子的水平因材施教 —— 从零基础到进阶都可以。',
      },
      {
        q: 'AI Labs 适合什么年龄?',
        a: '8 岁及以上。四个阶段(探索者 → 构建者 → 创造者 → 创始人)会根据年龄匹配相应的内容与难度。',
      },
      {
        q: '“Vibe Coding”到底是什么?',
        a: '就是用自然语言描述你想要的功能,再借助 AI 不断打磨来构建软件 —— 让学生专注于问题解决、设计与产品思维,而不是死记语法。',
      },
      {
        q: '课程结束后孩子能得到什么?',
        a: '一个在 Demo Day 上展示的、完整可运行的项目 —— 以及一份可用于升学和项目申请的作品集成果。',
      },
      {
        q: 'AI Labs 是线上还是线下?',
        a: '两种形式都有,取决于你所在的地区。索取课程介绍,我们会告诉你附近可选的上课形式。',
      },
      {
        q: '学校或加盟伙伴如何开始合作?',
        a: '点击「索取课程介绍」,告诉我们你的学校或机构情况。我们会就授权、培训与联合品牌等细节与你联系。',
      },
    ],
  },
  cta: {
    title: '开始用 AI 打造真实项目',
    subtitle:
      '让孩子拥有在 AI 时代脱颖而出的能力、自信与作品集。加入 AI Labs,或为你的学校 / 项目索取完整课程介绍。',
    primary: '加入 AI Labs',
    secondary: '索取课程介绍',
  },
  lead: {
    titleJoin: '加入 AI Labs',
    titleCurriculum: '索取课程介绍',
    subtitle: '留下你的信息,我们会尽快与你联系。',
    name: '你的称呼',
    contact: '邮箱或电话',
    contactPh: 'you@example.com',
    role: '我是',
    roles: { parent: '家长', school: '学校合作方', franchise: '加盟伙伴', other: '其他' },
    childAge: '孩子年龄(选填)',
    childAgePh: '例如 11',
    message: '留言(选填)',
    messagePh: '想让我们了解的任何信息…',
    submit: '提交',
    sending: '提交中…',
    successTitle: '感谢你! 🎉',
    successBody: '我们已收到你的信息,会尽快与你联系。',
    close: '关闭',
    mailtoNote: '这会打开你的邮件应用,把信息发送给我们。',
    required: '请填写称呼和联系方式。',
  },
  footer: {
    tagline: '一套面向 K-12 学生的跨学科 AI 项目制学习系统 —— 为家长、学校与加盟伙伴而打造。',
    rights: '保留所有权利。',
    prototype: '静态原型 —— 仅用于演示展示。',
  },
  mock: {
    browser: 'student-demo.app',
    planner: {
      title: '我的作业',
      addTask: '+ 添加任务',
      tasks: [
        { name: '数学练习', due: '今天' },
        { name: '历史论文', due: '周五' },
        { name: '科学阅读', due: '周一' },
      ],
      aiLabel: '🤖 AI 学习计划',
      plan: '16:00 数学 · 16:45 休息 · 17:00 历史论文初稿',
    },
    fractions: { level: '第 3 关', score: '得分 120', question: '哪个分数更大?' },
    rocket: { title: '火箭发射模拟器', distance: '1,240 米', fuel: '燃料', angle: '发射角度', gravity: '重力' },
    stocks: {
      company: 'NovaTech 公司',
      sub: '示例数据 · NVT',
      risk: '风险:中等',
      aiLabel: '🤖 AI 摘要',
      summary: '营收稳步增长;利润率稳定,风险适中。',
    },
    rome: {
      header: '公元 117 年 · 皇帝',
      stability: '稳定度',
      happiness: '幸福度',
      treasury: '国库',
      question: '加税以供养军队?',
      yes: '是',
      no: '否',
    },
    skillsLabel: '收获的能力',
    featuresLabel: '核心功能',
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, zh };
