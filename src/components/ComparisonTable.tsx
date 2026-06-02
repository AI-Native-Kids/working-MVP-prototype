import { useI18n } from '../i18n';
import { Icon } from './Icon';
import { SectionHeading } from './SectionHeading';

/** Side-by-side comparison: traditional coding class vs. AI Labs. */
export function ComparisonTable() {
  const { t } = useI18n();
  const cmp = t.comparison;

  return (
    <section id="comparison" className="container-page py-20 sm:py-24">
      <SectionHeading eyebrow={cmp.eyebrow} title={cmp.title} subtitle={cmp.subtitle} />

      <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-slate-100 shadow-card">
        {/* Header row */}
        <div className="grid grid-cols-2 text-sm font-bold">
          <div className="bg-slate-100 px-5 py-4 text-slate-500 sm:px-8">{cmp.traditionalHead}</div>
          <div className="bg-gradient-to-r from-brand-600 to-accent-500 px-5 py-4 text-white sm:px-8">
            {cmp.aiLabsHead}
          </div>
        </div>

        {/* Comparison rows */}
        {cmp.rows.map((row, i) => (
          <div
            key={row.aiLabs}
            className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}
          >
            <div className="flex items-center gap-2 px-5 py-4 text-sm text-slate-500 sm:px-8">
              <Icon name="close" className="h-4 w-4 shrink-0 text-slate-300" />
              {row.traditional}
            </div>
            <div className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-slate-800 sm:px-8">
              <Icon name="check" className="h-4 w-4 shrink-0 text-emerald-500" />
              {row.aiLabs}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
