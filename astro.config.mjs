import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://horsewriter-blog.netlify.app',
  integrations: [mdx(), tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  }
});
