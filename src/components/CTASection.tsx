import { Icon } from './Icon';

/** Closing call-to-action band with gradient background. */
export function CTASection() {
  return (
    <section id="cta" className="container-page py-20 sm:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 px-6 py-16 text-center text-white shadow-soft sm:px-12 sm:py-20">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Start Building Real Projects with AI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Give students the skills, confidence, and portfolio to thrive in an AI-driven world.
            Join AI Labs or request a full curriculum overview for your school or program.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-semibold text-brand-700 shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Join AI Labs
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              Request Curriculum Overview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
