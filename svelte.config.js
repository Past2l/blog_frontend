import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
  },

  onwarn: (warning, handler) => {
    if (
      ['a11y-click-events-have-key-events', 'a11y-missing-attribute'].includes(
        warning.code,
      )
    )
      return;
    handler(warning);
  },
};

export default config;
