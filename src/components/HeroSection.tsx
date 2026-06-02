import { heroStats } from '../data/content';
import { Icon, type IconName } from './Icon';

// Steps shown in the hero preview card (typed so icon names stay valid).
const previewRows: { icon: IconName; label: string; text: string }[] = [
  { icon: 'chat', label: 'Ask AI', text: '“Help me build a fraction game for 4th graders.”' },
  { icon: 'code', label: 'Vibe Coding', text: 'Generating interactive components…' },
  { icon: 'presentation', label: 'Present', text: 'Ready for Demo Day 🎉' },
];

/** Top hero: headline, subtitle, CTAs, a glassy preview card, and quick stats. */
export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-gradient">
      {/* Decorative soft blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-accent-400/30 blur-3xl" />

      <div className="container-page relative grid gap-12 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-20">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            Interdisciplinary AI learning
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build the Future with{' '}
            <span className="bg-gradient-to-r from-brand-600 to-accent-500 bg-clip-text text-transparent">
              Vibe Coding
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            An interdisciplinary AI project-based learning system where students learn coding, subject
            knowledge, problem-solving, and product thinking by building real-world projects.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#labs" className="btn-primary">
              Explore AI Labs
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a href="#projects" className="btn-secondary">
              View Student Projects
            </a>
          </div>

          {/* Quick stats */}
          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-6 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold text-slate-900 sm:text-3xl">{stat.value}</dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: glassy "build loop" preview card */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative rounded-3xl border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur sm:p-8">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-2 text-xs font-medium text-slate-400">my-first-ai-project</span>
            </div>

            <div className="mt-6 space-y-3">
              {previewRows.map((row) => (
                <div
                  key={row.label}
                  className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-card"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={row.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{row.label}</p>
                    <p className="mt-0.5 text-sm text-slate-500">{row.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-500 p-4 text-white">
              <p className="text-sm font-semibold">Project shipped in 16 weeks</p>
              <p className="mt-1 text-xs text-white/80">From idea → MVP → portfolio piece</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
