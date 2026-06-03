import { createContext, useContext, useState, type ReactNode } from 'react';
import { config } from '../config';
import { useI18n } from '../i18n';
import { trackEvent } from '../analytics';
import { Icon } from './Icon';

/** Which CTA opened the form — used to title the modal. */
type Intent = 'join' | 'curriculum';

interface LeadContextValue {
  open: (intent?: Intent) => void;
}
const LeadContext = createContext<LeadContextValue | null>(null);

/** Open the lead modal from any component (e.g. a CTA button). */
export function useLead() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error('useLead must be used within LeadModalProvider');
  return ctx;
}

type Status = 'idle' | 'sending' | 'success';

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  const lead = t.lead;
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<Intent>('join');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const open = (next: Intent = 'join') => {
    setIntent(next);
    setStatus('idle');
    setError('');
    setIsOpen(true);
    trackEvent('lead_open', { intent: next });
  };
  const close = () => setIsOpen(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    if (!data.name?.trim() || !data.contact?.trim()) {
      setError(lead.required);
      return;
    }
    setError('');
    const payload = { ...data, intent };

    // Preferred path: POST to a configured form endpoint (Formspree/Tally/etc).
    if (config.formEndpoint) {
      try {
        setStatus('sending');
        await fetch(config.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        setStatus('success');
        trackEvent('lead_submit', { intent, method: 'endpoint' });
      } catch {
        // Network failed — fall back to email so the lead is never lost.
        openMailto(payload);
      }
      return;
    }

    // Demo/test mode: simulate success and keep the entry locally for review.
    if (config.demoMode) {
      saveDemoLead(payload);
      setStatus('success');
      trackEvent('lead_submit', { intent, method: 'demo' });
      return;
    }

    // Fallback: open the user's email client pre-filled.
    openMailto(payload);
    setStatus('success');
    trackEvent('lead_submit', { intent, method: 'mailto' });
  }

  /** Stores a test submission in localStorage and logs it (no network). */
  function saveDemoLead(data: Record<string, string>) {
    const entry = { ...data, submittedAt: new Date().toISOString() };
    try {
      const key = 'ai-labs-leads';
      const existing = JSON.parse(window.localStorage.getItem(key) || '[]');
      existing.push(entry);
      window.localStorage.setItem(key, JSON.stringify(existing));
    } catch {
      /* ignore storage errors */
    }
    // eslint-disable-next-line no-console
    console.log('[AI Labs] Demo lead captured (not sent):', entry);
  }

  function openMailto(data: Record<string, string>) {
    const subject = `AI Labs — ${intent === 'join' ? lead.titleJoin : lead.titleCurriculum}`;
    const body = [
      `${lead.name}: ${data.name}`,
      `${lead.contact}: ${data.contact}`,
      `${lead.role}: ${data.role}`,
      `${lead.childAge}: ${data.childAge || '-'}`,
      `${lead.message}: ${data.message || '-'}`,
    ].join('\n');
    window.location.href = `mailto:${config.contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <LeadContext.Provider value={{ open }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-900/50 p-4 backdrop-blur-sm sm:items-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-extrabold text-slate-900">
                {intent === 'join' ? lead.titleJoin : lead.titleCurriculum}
              </h3>
              <button
                type="button"
                onClick={close}
                aria-label={lead.close}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            {status === 'success' ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon name="check" className="h-7 w-7" />
                </div>
                <p className="mt-4 text-lg font-bold text-slate-900">{lead.successTitle}</p>
                <p className="mt-1 text-sm text-slate-600">{lead.successBody}</p>
                <button type="button" onClick={close} className="btn-primary mt-6">
                  {lead.close}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-2">
                <p className="text-sm text-slate-500">{lead.subtitle}</p>

                <div className="mt-5 space-y-3">
                  <Field label={lead.name}>
                    <input name="name" required className={inputCls} autoComplete="name" />
                  </Field>
                  <Field label={lead.contact}>
                    <input name="contact" required placeholder={lead.contactPh} className={inputCls} />
                  </Field>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label={lead.role}>
                      <select name="role" className={inputCls} defaultValue={lead.roles.parent}>
                        <option>{lead.roles.parent}</option>
                        <option>{lead.roles.school}</option>
                        <option>{lead.roles.franchise}</option>
                        <option>{lead.roles.other}</option>
                      </select>
                    </Field>
                    <Field label={lead.childAge}>
                      <input name="childAge" placeholder={lead.childAgePh} className={inputCls} />
                    </Field>
                  </div>
                  <Field label={lead.message}>
                    <textarea name="message" rows={2} placeholder={lead.messagePh} className={inputCls} />
                  </Field>
                </div>

                {error && <p className="mt-3 text-sm font-medium text-rose-600">{error}</p>}

                <button type="submit" disabled={status === 'sending'} className="btn-primary mt-5 w-full">
                  {status === 'sending' ? lead.sending : lead.submit}
                </button>
                {!config.formEndpoint && !config.demoMode && (
                  <p className="mt-3 text-center text-xs text-slate-400">{lead.mailtoNote}</p>
                )}
              </form>
            )}
          </div>
        </div>
      )}
    </LeadContext.Provider>
  );
}

const inputCls =
  'w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition-colors focus:border-brand-400 focus:ring-2 focus:ring-brand-100';

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-slate-500">{label}</span>
      {children}
    </label>
  );
}
