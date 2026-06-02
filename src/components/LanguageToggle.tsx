import { useI18n } from '../i18n';
import type { Lang } from '../data/dictionary';

/** Compact EN / 中文 segmented toggle for switching the page language. */
export function LanguageToggle({ className = '' }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const options: { value: Lang; label: string }[] = [
    { value: 'en', label: 'EN' },
    { value: 'zh', label: '中文' },
  ];

  return (
    <div className={`inline-flex rounded-lg border border-slate-200 bg-white p-0.5 ${className}`}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => setLang(opt.value)}
          aria-pressed={lang === opt.value}
          className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
            lang === opt.value ? 'bg-brand-600 text-white' : 'text-slate-500 hover:text-brand-600'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
