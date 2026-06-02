import type { Difficulty, Project } from '../data/dictionary';
import { useI18n } from '../i18n';
import { Icon } from './Icon';

// Color mapping for the difficulty badge (keyed by the canonical English value).
const difficultyStyles: Record<Difficulty, string> = {
  Beginner: 'bg-emerald-50 text-emerald-700',
  Intermediate: 'bg-amber-50 text-amber-700',
  Advanced: 'bg-rose-50 text-rose-700',
};

/** Student showcase project card: title, lab category, description, skills, difficulty. */
export function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
      {/* Gradient "thumbnail" with the lab icon */}
      <div className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
        <Icon name={project.icon} className="h-10 w-10 text-white/90" />
        <span
          className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${difficultyStyles[project.difficulty]}`}
        >
          {t.showcase.difficultyLabels[project.difficulty]}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {project.category}
        </span>
        <h3 className="mt-1 text-lg font-bold text-slate-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

        <div className="mt-auto pt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {t.showcase.skillsLabel}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
