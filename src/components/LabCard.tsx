import type { Lab } from '../data/content';
import { Icon } from './Icon';

/** Single AI Lab card: icon header, description, example projects, and skill tags. */
export function LabCard({ lab }: { lab: Lab }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-soft">
      {/* Gradient header strip */}
      <div className={`bg-gradient-to-r ${lab.gradient} p-6 text-white`}>
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
          <Icon name={lab.icon} className="h-6 w-6" />
        </span>
        <h3 className="mt-4 text-xl font-bold">{lab.name}</h3>
        <p className="mt-1 text-sm text-white/85">{lab.tagline}</p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-slate-600">{lab.description}</p>

        {/* Example projects */}
        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Example projects
        </p>
        <ul className="mt-2 space-y-1.5">
          {lab.projects.map((project) => (
            <li key={project} className="flex items-center gap-2 text-sm text-slate-700">
              <Icon name="check" className="h-4 w-4 shrink-0 text-brand-500" />
              {project}
            </li>
          ))}
        </ul>

        {/* Skill tags */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {lab.skills.map((skill) => (
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
