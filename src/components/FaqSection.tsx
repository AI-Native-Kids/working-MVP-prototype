import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/** FAQ accordion using native <details> so it needs no extra state. */
export function FaqSection() {
  const { t } = useI18n();

  return (
    <section id="faq" className="container-page py-20 sm:py-24">
      <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} subtitle={t.faq.subtitle} />

      <div className="mx-auto mt-12 max-w-3xl space-y-3">
        {t.faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-card [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-900">{item.q}</span>
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-transform group-open:rotate-45 group-open:bg-brand-50 group-open:text-brand-600">
                <Icon name="close" className="h-3.5 w-3.5 rotate-45" />
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
