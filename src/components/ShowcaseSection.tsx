import { useI18n } from '../i18n';
import { ProjectCard } from './ProjectCard';
import { SectionHeading } from './SectionHeading';

/** Student project showcase — a grid of example outcomes across the labs. */
export function ShowcaseSection() {
  const { t } = useI18n();

  return (
    <section id="projects" className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow={t.showcase.eyebrow}
        title={t.showcase.title}
        subtitle={t.showcase.subtitle}
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.showcase.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
