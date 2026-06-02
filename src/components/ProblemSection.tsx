import { problemPoints } from '../data/content';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/** Explains why traditional, syntax-first coding classes fall short today. */
export function ProblemSection() {
  return (
    <section id="problem" className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="The problem"
        title="Coding class as we knew it is outdated"
        subtitle="When AI can write the code, memorizing syntax stops being the point. Students need a higher level of thinking — and a new way to learn."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {problemPoints.map((point) => (
          <div
            key={point.title}
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-card transition-shadow hover:shadow-soft"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-slate-500 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
              <Icon name={point.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold text-slate-900">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
