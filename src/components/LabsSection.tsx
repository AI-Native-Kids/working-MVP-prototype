import { useI18n } from '../i18n';
import { LabCard } from './LabCard';
import { SectionHeading } from './SectionHeading';

/** The AI Labs course system — a responsive grid of all six labs. */
export function LabsSection() {
  const { t } = useI18n();

  return (
    <section id="labs" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow={t.labs.eyebrow} title={t.labs.title} subtitle={t.labs.subtitle} />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.labs.items.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  );
}
