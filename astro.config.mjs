import { defineConfig } from 'astro/config';

// Static site, no adapter needed — `astro build` outputs plain HTML/CSS/JS to dist/.
export default defineConfig({
  site: 'https://iyer.dev',
});
