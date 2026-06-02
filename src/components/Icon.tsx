/**
 * Lightweight inline-SVG icon set so the prototype has zero icon dependencies.
 * All icons inherit `currentColor` and a 1.8 stroke for a consistent look.
 * Add a new icon by adding an entry to the `paths` map and the IconName union.
 */

export type IconName =
  | 'code'
  | 'sparkles'
  | 'brain'
  | 'rocket'
  | 'book'
  | 'chat'
  | 'presentation'
  | 'function'
  | 'beaker'
  | 'chart'
  | 'globe'
  | 'gamepad'
  | 'compass'
  | 'blocks'
  | 'folder'
  | 'check'
  | 'arrow-right'
  | 'menu'
  | 'close';

interface IconProps {
  name: IconName;
  className?: string;
}

// Each value is the inner markup of a 24x24 stroke icon.
const paths: Record<IconName, JSX.Element> = {
  code: (
    <>
      <path d="m16 18 6-6-6-6" />
      <path d="m8 6-6 6 6 6" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3v4M12 17v4M5 12H1M23 12h-4" />
      <path d="m6.3 6.3 2.4 2.4M15.3 15.3l2.4 2.4M17.7 6.3l-2.4 2.4M8.7 15.3l-2.4 2.4" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 2a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 5 7a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 .5 4.5A2.5 2.5 0 0 0 9.5 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
      <path d="M14.5 2a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 19 7a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1-.5 4.5A2.5 2.5 0 0 1 14.5 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </>
  ),
  presentation: (
    <>
      <path d="M2 3h20M3 3v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V3" />
      <path d="m12 15 4 6M12 15l-4 6M12 9v3" />
    </>
  ),
  function: (
    <>
      <path d="M9 4H7.5A2.5 2.5 0 0 0 5 6.5v1A2.5 2.5 0 0 1 2.5 10 2.5 2.5 0 0 1 5 12.5v1A2.5 2.5 0 0 0 7.5 16H9" />
      <path d="M15 4h1.5A2.5 2.5 0 0 1 19 6.5v1A2.5 2.5 0 0 0 21.5 10 2.5 2.5 0 0 0 19 12.5v1a2.5 2.5 0 0 1-2.5 2.5H15" />
    </>
  ),
  beaker: (
    <>
      <path d="M9 3h6M10 3v6.5L5 18a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-8.5V3" />
      <path d="M7 14h10" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="m7 14 3-4 3 3 4-6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </>
  ),
  gamepad: (
    <>
      <path d="M6 12h4M8 10v4M15 11h.01M18 13h.01" />
      <rect x="2" y="6" width="20" height="12" rx="4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.2 7.8-2.9 6.3-6.3 2.9 2.9-6.3 6.3-2.9Z" />
    </>
  ),
  blocks: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
    </>
  ),
  folder: (
    <>
      <path d="M4 4h5l2 2.5h9A1.5 1.5 0 0 1 21.5 8v9.5A1.5 1.5 0 0 1 20 19H4a1.5 1.5 0 0 1-1.5-1.5v-12A1.5 1.5 0 0 1 4 4Z" />
    </>
  ),
  check: <path d="m5 12 5 5 9-11" />,
  'arrow-right': (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
};

export function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
