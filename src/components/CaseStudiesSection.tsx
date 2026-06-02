import { caseStudies } from '../data/content';
import { CaseStudyCard } from './CaseStudyCard';
import { SectionHeading } from './SectionHeading';

/** Real demo case studies — detailed, concrete examples of finished student builds. */
export function CaseStudiesSection() {
  return (
    <section id="cases" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Real demo case studies"
          title="See exactly what students build"
          subtitle="Five real project walkthroughs — the problem, the build, the features, and the journey from idea to a portfolio-ready product."
        />

        <div className="mt-14 space-y-8">
          {caseStudies.map((cs, i) => (
            // Alternate layout direction for visual rhythm.
            <CaseStudyCard key={cs.id} data={cs} flip={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
