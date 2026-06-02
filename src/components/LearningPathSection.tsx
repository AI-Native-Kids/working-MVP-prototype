import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/** 4-level progression from AI Explorer to AI Founder, shown as a connected ladder. */
export function LearningPathSection() {
  const { t } = useI18n();
  const path = t.path;

  return (
    <section id="path" className="container-page py-20 sm:py-24">
      <SectionHeading eyebrow={path.eyebrow} title={path.title} subtitle={path.subtitle} />

      <div className="relative mt-14">
        {/* Connecting line behind the cards (desktop) */}
        <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-accent-400 lg:block" />

        <div className="grid gap-6 lg:grid-cols-4">
          {path.levels.map((level, i) => (
            <div key={level.title} className="relative">
              {/* Numbered node */}
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-soft">
                <Icon name={level.icon} className="h-6 w-6" />
              </div>
              <div className="mt-5 rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-card">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-600">
                  {level.level}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900">{level.title}</h3>
                <span className="mt-1 inline-block rounded-full bg-slate-50 px-3 py-0.5 text-xs font-medium text-slate-500">
                  {level.ages}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{level.description}</p>
              </div>
              <span className="sr-only">Step {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
