import { defineConfig, fontProviders } from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: 'static',

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono"
    }
  ],

  integrations: [icon()]
});
