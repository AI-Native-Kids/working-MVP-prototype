/**
 * Static mock data for the AI Labs prototype.
 *
 * Everything the page renders comes from these arrays — there are no API calls.
 * To add a lab, project, level, etc., just edit the relevant array below; the
 * UI components map over them automatically.
 */

import type { IconName } from '../components/Icon';

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: 'The Model', href: '#model' },
  { label: 'AI Labs', href: '#labs' },
  { label: 'Learning Path', href: '#path' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Demo Cases', href: '#cases' },
  { label: 'Projects', href: '#projects' },
  { label: 'For Parents', href: '#parents' },
];

/* ------------------------------------------------------------------ */
/* Problem section — what's wrong with traditional coding classes      */
/* ------------------------------------------------------------------ */

export interface ProblemPoint {
  icon: IconName;
  title: string;
  description: string;
}

export const problemPoints: ProblemPoint[] = [
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
];

/* ------------------------------------------------------------------ */
/* New learning model — the 4-step loop                                */
/* ------------------------------------------------------------------ */

export interface ModelStep {
  step: string;
  icon: IconName;
  title: string;
  description: string;
}

export const modelSteps: ModelStep[] = [
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
    description:
      'Test, polish and present a finished, real-world project students are proud to show.',
  },
];

/* ------------------------------------------------------------------ */
/* AI Labs course system                                               */
/* ------------------------------------------------------------------ */

export interface Lab {
  id: string;
  name: string;
  icon: IconName;
  tagline: string;
  description: string;
  projects: string[];
  skills: string[];
  /** Tailwind gradient classes for the card accent */
  gradient: string;
}

export const labs: Lab[] = [
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
];

/* ------------------------------------------------------------------ */
/* Learning path — 4 levels                                            */
/* ------------------------------------------------------------------ */

export interface Level {
  level: string;
  title: string;
  ages: string;
  description: string;
  icon: IconName;
}

export const levels: Level[] = [
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
];

/* ------------------------------------------------------------------ */
/* Sample 16-week course (AI Startup Lab)                              */
/* ------------------------------------------------------------------ */

export interface TimelineModule {
  weeks: string;
  title: string;
  description: string;
}

export const timeline: TimelineModule[] = [
  {
    weeks: 'Weeks 1–2',
    title: 'Problem Discovery',
    description: 'Find a real problem worth solving and validate that it matters.',
  },
  {
    weeks: 'Weeks 3–4',
    title: 'Product Design',
    description: 'Define the user, the solution, and what the product should do.',
  },
  {
    weeks: 'Weeks 5–6',
    title: 'AI Prompting & Planning',
    description: 'Learn to plan the build and collaborate effectively with AI.',
  },
  {
    weeks: 'Weeks 7–10',
    title: 'Vibe Coding MVP Build',
    description: 'Build a working minimum viable product with AI-assisted coding.',
  },
  {
    weeks: 'Weeks 11–12',
    title: 'Testing & Feedback',
    description: 'Put the MVP in front of real users and gather honest feedback.',
  },
  {
    weeks: 'Weeks 13–14',
    title: 'Improvement & Polish',
    description: 'Refine features, fix issues, and improve the experience.',
  },
  {
    weeks: 'Weeks 15–16',
    title: 'Final Demo Day',
    description: 'Present the finished product to parents, peers and partners.',
  },
];

/* ------------------------------------------------------------------ */
/* Student project showcase                                            */
/* ------------------------------------------------------------------ */

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Project {
  title: string;
  category: string;
  description: string;
  skills: string[];
  difficulty: Difficulty;
  icon: IconName;
  gradient: string;
}

export const projects: Project[] = [
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
];

/* ------------------------------------------------------------------ */
/* Why parents care                                                    */
/* ------------------------------------------------------------------ */

export interface ParentBenefit {
  icon: IconName;
  title: string;
  description: string;
}

export const parentBenefits: ParentBenefit[] = [
  {
    icon: 'sparkles',
    title: 'Real AI literacy',
    description: 'Students learn to use AI as a creative tool, not just a shortcut — a skill for every future career.',
  },
  {
    icon: 'brain',
    title: 'Problem-solving ability',
    description: 'Every project starts with a real problem, building the thinking skills schools value most.',
  },
  {
    icon: 'folder',
    title: 'Portfolio-ready projects',
    description: 'Students finish with real, shareable products for school and program applications.',
  },
  {
    icon: 'book',
    title: 'Academics meet technology',
    description: 'Math, science, history and finance come alive through hands-on building.',
  },
  {
    icon: 'rocket',
    title: 'Future-ready preparation',
    description: 'Prepares students for the schools, programs and careers of an AI-driven world.',
  },
];

/* ------------------------------------------------------------------ */
/* Comparison table                                                    */
/* ------------------------------------------------------------------ */

export interface ComparisonRow {
  traditional: string;
  aiLabs: string;
}

export const comparison: ComparisonRow[] = [
  { traditional: 'Syntax-first', aiLabs: 'Project-first' },
  { traditional: 'Teacher-led', aiLabs: 'AI-assisted' },
  { traditional: 'Small exercises', aiLabs: 'Real products' },
  { traditional: 'Limited subject connection', aiLabs: 'Interdisciplinary' },
  { traditional: 'Hard to show real-world value', aiLabs: 'Portfolio-ready outcomes' },
];

/* ------------------------------------------------------------------ */
/* Hero stats                                                          */
/* ------------------------------------------------------------------ */

export const heroStats = [
  { value: '6', label: 'AI Labs' },
  { value: '4', label: 'Skill levels' },
  { value: '16', label: 'Weeks per course' },
  { value: 'K-12', label: 'Ages 8+' },
];

/* ------------------------------------------------------------------ */
/* Real demo case studies                                              */
/* ------------------------------------------------------------------ */

/**
 * The "Student Build Journey" is the same five steps for every case study,
 * so it's defined once here and reused by every card.
 */
export const buildJourney = [
  'Discover Problem',
  'Plan with AI',
  'Build with Vibe Coding',
  'Test & Improve',
  'Present Final Product',
];

/**
 * `mockup` selects which placeholder UI block the card renders to visually
 * represent the finished student project (see MockScreen.tsx).
 */
export type MockupKind = 'planner' | 'fractions' | 'rocket' | 'stocks' | 'rome';

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

export const caseStudies: CaseStudy[] = [
  {
    id: 'homework-planner',
    projectTitle: 'AI Homework Planner',
    lab: 'AI Startup Lab',
    ageRange: 'Ages 12–15',
    problem: 'Students often forget assignments, deadlines, and study plans.',
    builds:
      'A simple web app where students enter homework tasks, due dates, difficulty level, and available study time. The app uses AI to suggest a daily study plan.',
    features: [
      'Add homework tasks',
      'Set due dates',
      'AI-generated study schedule',
      'Priority ranking',
      'Simple dashboard',
    ],
    skills: [
      'Product thinking',
      'Prompt writing',
      'Basic frontend development',
      'Time management logic',
      'User testing',
    ],
    outcome:
      'A working study-planning app that can be shown to parents, teachers, and school clubs.',
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
    builds:
      'A simple game where players compare, add, and simplify fractions to win points.',
    features: [
      'Visual fraction bars',
      'Multiple-choice answers',
      'Score system',
      'Level progression',
      'Instant feedback',
    ],
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
    problem:
      'Students often learn physics formulas but do not see how motion works visually.',
    builds:
      'A simulation where users adjust rocket fuel, launch angle, and gravity to see how far the rocket travels.',
    features: [
      'Input sliders',
      'Animated rocket launch',
      'Distance calculation',
      'Gravity comparison',
      'Result explanation',
    ],
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
    features: [
      'Company profile cards',
      'Revenue and profit charts',
      'Risk score',
      'AI-generated company summary',
      'Portfolio simulator',
    ],
    skills: [
      'Financial literacy',
      'Data analysis',
      'Chart design',
      'Risk thinking',
      'AI-assisted explanation',
    ],
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
    problem:
      'History is often memorized instead of understood as a system of decisions and consequences.',
    builds:
      'An interactive simulation where users act as a Roman emperor and make choices about taxes, army spending, trade, and public welfare.',
    features: [
      'Decision cards',
      'Empire stability score',
      'Population happiness',
      'Treasury balance',
      'Historical event outcomes',
    ],
    skills: [
      'Historical reasoning',
      'Systems thinking',
      'Cause and effect',
      'Decision-making logic',
      'Interactive storytelling',
    ],
    outcome:
      'A historical simulation game that turns history into an interactive learning experience.',
    icon: 'globe',
    gradient: 'from-rose-500 to-pink-500',
    mockup: 'rome',
  },
];
