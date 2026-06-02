import { navLinks } from '../data/content';
import { Icon } from './Icon';

/** Simple footer with brand, nav, audience note, and prototype disclaimer. */
export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                <Icon name="sparkles" className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                AI<span className="text-brand-600">Labs</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              An interdisciplinary AI project-based learning system for K-12 students — built for
              parents, schools, and franchise partners.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} AI Labs. All rights reserved.</p>
          <p>Static prototype — for presentation purposes only.</p>
        </div>
      </div>
    </footer>
  );
}
