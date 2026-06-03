import { useI18n } from '../i18n';
import { SectionHeading } from './SectionHeading';

/** Social proof — short quotes from parents, partners, and students. */
export function TestimonialsSection() {
  const { t } = useI18n();

  return (
    <section id="testimonials" className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow={t.testimonials.eyebrow}
        title={t.testimonials.title}
        subtitle={t.testimonials.subtitle}
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {t.testimonials.items.map((item) => (
          <figure
            key={item.name}
            className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
          >
            {/* Quote mark */}
            <span className="text-5xl leading-none text-brand-200" aria-hidden="true">
              “
            </span>
            <blockquote className="-mt-3 flex-1 text-sm leading-relaxed text-slate-700">
              {item.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-slate-100 pt-4">
              <p className="text-sm font-bold text-slate-900">{item.name}</p>
              <p className="text-xs text-slate-500">{item.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
