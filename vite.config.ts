import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// `base: './'` makes all asset URLs relative so the build works when served
// from a GitHub Pages project subpath (e.g. /working-MVP-prototype/).
export default defineConfig({
  base: './',
  plugins: [react()],
});
