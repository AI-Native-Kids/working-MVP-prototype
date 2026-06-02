import { labs } from '../data/content';
import { LabCard } from './LabCard';
import { SectionHeading } from './SectionHeading';

/** The AI Labs course system — a responsive grid of all six labs. */
export function LabsSection() {
  return (
    <section id="labs" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="The AI Labs course system"
          title="Six labs. One way of learning."
          subtitle="Each lab is an interdisciplinary studio where students apply a school subject, collaborate with AI, and ship a real project with Vibe Coding."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>
      </div>
    </section>
  );
}
