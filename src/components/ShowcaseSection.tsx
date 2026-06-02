import { projects } from '../data/content';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

/** Student project showcase — a grid of example outcomes across the labs. */
export function ShowcaseSection() {
  return (
    <section id="projects" className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="Student project showcase"
        title="Real projects, ready for a portfolio"
        subtitle="A snapshot of what students build across the AI Labs — the kind of work that stands out on school and program applications."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
