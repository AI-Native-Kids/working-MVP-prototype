import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { dictionaries, type Dictionary, type Lang } from './data/dictionary';

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Active dictionary for the current language. */
  t: Dictionary;
}

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = 'ai-labs-lang';

// Pick the initial language: saved choice → browser preference → English.
function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'zh') return saved;
  return navigator.language?.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  // Persist the choice and keep <html lang> in sync for accessibility/SEO.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  const value: I18nValue = {
    lang,
    setLang: setLangState,
    toggle: () => setLangState((l) => (l === 'en' ? 'zh' : 'en')),
    t: dictionaries[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

/** Access the active language and dictionary. Must be used within LanguageProvider. */
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider');
  return ctx;
}
