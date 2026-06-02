import { useI18n } from '../i18n';
import { Icon } from './Icon';

/** The new learning model: a 4-step loop shown as connected cards on a dark band. */
export function LearningModelSection() {
  const { t } = useI18n();
  const model = t.model;

  return (
    <section id="model" className="bg-slate-900 py-20 text-white sm:py-24">
      <div className="container-page">
        <div className="text-center">
          <span className="eyebrow mb-4 bg-white/10 text-brand-200">{model.eyebrow}</span>
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
            {model.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {model.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {model.steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:bg-white/10"
            >
              {/* Connector arrow between cards on large screens */}
              {i < model.steps.length - 1 && (
                <span className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-white lg:flex">
                  <Icon name="arrow-right" className="h-3.5 w-3.5" />
                </span>
              )}
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                  <Icon name={step.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-bold text-white/30">{step.step}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
