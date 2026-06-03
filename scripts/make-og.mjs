/**
 * Generates public/og-image.png (1200x630) from an inline SVG.
 * Run with: node scripts/make-og.mjs
 * Re-run whenever you want to change the social-share card.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public');
mkdirSync(out, { recursive: true });

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4f46e5"/>
      <stop offset="0.55" stop-color="#6366f1"/>
      <stop offset="1" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="chip" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.18"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.08"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <circle cx="120" cy="90" r="220" fill="#ffffff" opacity="0.07"/>
  <circle cx="1080" cy="560" r="260" fill="#ffffff" opacity="0.06"/>

  <!-- Logo -->
  <g transform="translate(90,88)">
    <rect width="60" height="60" rx="16" fill="#ffffff" opacity="0.18"/>
    <text x="30" y="40" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#ffffff" text-anchor="middle">AI</text>
    <text x="80" y="40" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="800" fill="#ffffff">AI Labs</text>
  </g>

  <!-- Eyebrow chip -->
  <g transform="translate(90,210)">
    <rect width="430" height="44" rx="22" fill="url(#chip)"/>
    <text x="24" y="29" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600" fill="#e0e7ff" letter-spacing="1">K-12 · INTERDISCIPLINARY AI</text>
  </g>

  <!-- Headline -->
  <text x="88" y="330" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Build the Future</text>
  <text x="88" y="418" font-family="Inter, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">with <tspan fill="#a5f3fc">Vibe Coding</tspan></text>

  <!-- Subtitle -->
  <text x="90" y="486" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="500" fill="#e0e7ff">学生通过真实项目学习编程、学科知识与产品思维</text>
  <text x="90" y="524" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="400" fill="#c7d2fe" opacity="0.9">An AI project-based learning system for K-12 students</text>

  <!-- Step pills -->
  <g font-family="Inter, Arial, sans-serif" font-size="20" font-weight="600" fill="#ffffff">
    <g transform="translate(90,560)">
      <rect width="170" height="44" rx="22" fill="#ffffff" opacity="0.16"/>
      <text x="24" y="29">Discover</text>
    </g>
    <g transform="translate(276,560)">
      <rect width="150" height="44" rx="22" fill="#ffffff" opacity="0.16"/>
      <text x="24" y="29">Ask AI</text>
    </g>
    <g transform="translate(442,560)">
      <rect width="190" height="44" rx="22" fill="#ffffff" opacity="0.16"/>
      <text x="24" y="29">Vibe Code</text>
    </g>
    <g transform="translate(648,560)">
      <rect width="160" height="44" rx="22" fill="#ffffff" opacity="0.16"/>
      <text x="24" y="29">Present</text>
    </g>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(join(out, 'og-image.png'), png);
console.log('Wrote public/og-image.png (1200x630)');
