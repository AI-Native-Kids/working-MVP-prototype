/**
 * Site configuration — fill these in to "turn on" integrations.
 *
 * Everything here is optional: when a value is empty the site still works and
 * the related feature degrades gracefully (lead form falls back to email,
 * analytics simply doesn't load).
 */
export const config = {
  /** Where lead-form emails go when no form endpoint is set (mailto fallback). */
  contactEmail: 'litao@alumni.purdue.edu',

  /**
   * Form submission endpoint. Create a free form at https://formspree.io
   * (or https://tally.so) and paste the endpoint URL here, e.g.
   * 'https://formspree.io/f/abcdwxyz'. Leave empty to use demo/email fallback.
   */
  formEndpoint: '',

  /**
   * Demo/test mode for the lead form. When true (and no formEndpoint is set),
   * submitting simulates success WITHOUT sending anything: the entry is saved
   * to localStorage under `ai-labs-leads` and logged to the console so you can
   * review test submissions. Set to false to use the real email fallback.
   */
  demoMode: true,

  /**
   * Google Analytics 4 measurement ID, e.g. 'G-XXXXXXXXXX'. Get one at
   * https://analytics.google.com. Leave empty to disable analytics entirely.
   */
  gaMeasurementId: '',

  /** Absolute site URL — used for social-share (Open Graph) image/links. */
  siteUrl: 'https://AI-Native-Kids.github.io/working-MVP-prototype/',
};
