import { buildJourney, type CaseStudy } from '../data/content';
import { Icon } from './Icon';
import { MockScreen } from './MockScreen';

/**
 * Large demo case-study card. Alternates the mockup left/right on desktop
 * (controlled by `flip`) so the long list reads like a showcase, not a column.
 */
export function CaseStudyCard({ data, flip }: { data: CaseStudy; flip?: boolean }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card">
      <div className={`grid gap-0 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Content side */}
        <div className="p-6 sm:p-8 lg:p-10">
          {/* Header: lab badge, icon, title, age */}
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${data.gradient} text-white`}
            >
              <Icon name={data.icon} className="h-5 w-5" />
            </span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                {data.lab}
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">{data.projectTitle}</h3>
            </div>
            <span className="ml-auto shrink-0 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              {data.ageRange}
            </span>
          </div>

          {/* Real-world problem */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              The real-world problem
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{data.problem}</p>
          </div>

          {/* What they build */}
          <div className="mt-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              What the student builds
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-700">{data.builds}</p>
          </div>

          {/* Key features + skills, side by side */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Key features
              </p>
              <ul className="mt-2 space-y-1.5">
                {data.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <Icon name="check" className="h-4 w-4 shrink-0 text-brand-500" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Skills learned
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {data.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio outcome */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-50 p-4">
            <Icon name="folder" className="h-5 w-5 shrink-0 text-brand-600" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Portfolio outcome
              </p>
              <p className="mt-0.5 text-sm font-medium text-slate-700">{data.outcome}</p>
            </div>
          </div>
        </div>

        {/* Visual side: mockup screenshot + build journey */}
        <div className="border-t border-slate-100 bg-slate-50 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <MockScreen kind={data.mockup} />

          {/* Student Build Journey timeline */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Student build journey
            </p>
            <ol className="mt-3 space-y-2.5">
              {buildJourney.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
