import { useEffect } from 'react';
import { config } from './config';

/**
 * Loads Google Analytics 4 only when a measurement ID is configured.
 * No ID → nothing is injected and no requests are made (privacy-friendly default).
 */
export function useAnalytics() {
  useEffect(() => {
    const id = config.gaMeasurementId;
    if (!id) return;

    // Inject the gtag loader script.
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script);

    // Initialize gtag.
    const w = window as unknown as { dataLayer: unknown[]; gtag?: (...args: unknown[]) => void };
    w.dataLayer = w.dataLayer || [];
    function gtag(...args: unknown[]) {
      w.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', id);
    w.gtag = gtag;

    return () => {
      script.remove();
    };
  }, []);
}

/** Fire a custom analytics event (no-op when analytics isn't loaded). */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  const w = window as unknown as { gtag?: (...args: unknown[]) => void };
  w.gtag?.('event', name, params);
}
