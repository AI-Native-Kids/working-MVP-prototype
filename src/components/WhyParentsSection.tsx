import { parentBenefits } from '../data/content';
import { Icon } from './Icon';

/**
 * Parent-facing benefits. Two-column layout: a sticky pitch on the left and a
 * list of benefit cards on the right.
 */
export function WhyParentsSection() {
  return (
    <section id="parents" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        {/* Left pitch */}
        <div className="lg:sticky lg:top-24">
          <span className="eyebrow mb-4">Why parents care</span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            More than coding — preparation for what's next
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            AI Labs blends academic subjects with the AI and product skills that schools, programs,
            and future careers increasingly look for.
          </p>
          <a href="#cta" className="btn-primary mt-8">
            Request curriculum overview
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>

        {/* Right benefits list */}
        <div className="grid gap-4 sm:grid-cols-2">
          {parentBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Icon name={benefit.icon} className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-base font-bold text-slate-900">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
