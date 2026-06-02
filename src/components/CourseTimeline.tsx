import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/** Featured 16-week AI Startup Lab course, shown as a vertical timeline. */
export function CourseTimeline() {
  const { t } = useI18n();
  const tl = t.timeline;

  return (
    <section id="curriculum" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow={tl.eyebrow} title={tl.title} subtitle={tl.subtitle} />

        <div className="mx-auto mt-14 max-w-3xl">
          <ol className="relative border-l-2 border-brand-100 pl-8">
            {tl.modules.map((module, i) => (
              <li key={module.title} className="relative mb-8 last:mb-0">
                {/* Node on the line */}
                <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-xs font-bold text-white shadow-soft">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-card">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900">{module.title}</h3>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-600">
                      {module.weeks}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{module.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Outcome footer */}
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-brand-600 to-accent-500 p-5 text-white">
            <Icon name="presentation" className="h-6 w-6 shrink-0" />
            <p className="text-sm font-semibold">{tl.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
