// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Inglés en la raíz (/), español bajo /es/
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    server: {
      // Permite exponer el dev server a través de túneles ngrok (subdominio cambia cada sesión)
      allowedHosts: [".ngrok-free.app"],
    },
  },
});
