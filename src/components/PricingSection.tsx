import { useI18n } from '../i18n';
import { useLead } from './LeadModal';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/** Pricing / enrollment plans. CTAs open the lead modal with the right intent. */
export function PricingSection() {
  const { t } = useI18n();
  const { open } = useLead();
  const pricing = t.pricing;

  return (
    <section id="pricing" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow={pricing.eyebrow} title={pricing.title} subtitle={pricing.subtitle} />

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {pricing.plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-7 shadow-card ${
                plan.highlighted
                  ? 'border-transparent bg-gradient-to-br from-brand-600 to-accent-500 text-white shadow-soft lg:-mt-2'
                  : 'border-slate-100 bg-white'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-600 shadow-card">
                  {pricing.popular}
                </span>
              )}

              <h3 className={`text-lg font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? 'text-white/80' : 'text-slate-400'}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${plan.highlighted ? 'text-white/85' : 'text-slate-600'}`}>
                {plan.description}
              </p>

              <ul className="mt-5 flex-1 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Icon
                      name="check"
                      className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlighted ? 'text-white' : 'text-brand-500'}`}
                    />
                    <span className={plan.highlighted ? 'text-white/90' : 'text-slate-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => open(plan.intent)}
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? 'bg-white text-brand-700 shadow-soft'
                    : 'bg-gradient-to-r from-brand-600 to-accent-500 text-white shadow-soft'
                }`}
              >
                {plan.cta}
                <Icon name="arrow-right" className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">{pricing.note}</p>
      </div>
    </section>
  );
}
