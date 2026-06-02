import { useI18n } from '../i18n';
import { CaseStudyCard } from './CaseStudyCard';
import { SectionHeading } from './SectionHeading';

/** Real demo case studies — detailed, concrete examples of finished student builds. */
export function CaseStudiesSection() {
  const { t } = useI18n();

  return (
    <section id="cases" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow={t.cases.eyebrow}
          title={t.cases.title}
          subtitle={t.cases.subtitle}
        />

        <div className="mt-14 space-y-8">
          {t.cases.items.map((cs, i) => (
            // Alternate layout direction for visual rhythm.
            <CaseStudyCard key={cs.id} data={cs} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
