import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/CubeTimer/',
  plugins: [
    react(),
    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg}'], // Now including jpg in the glob patterns
      },
      manifest: {
        theme_color: '#f69435',
        background_color: '#f69435',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: "CubeTimer",
        description: "Timer for cubing",
        name: "CubeTimer",
        icons: [
          {
            src: '/logo192.jpg', // Path and file names as per your project structure
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: '/logo256.jpg',
            sizes: '256x256',
            type: 'image/jpeg'
          },
          {
            src: '/logo384.jpg',
            sizes: '384x384',
            type: 'image/jpeg'
          },
          {
            src: '/logo512.jpg',
            sizes: '512x512',
            type: 'image/jpeg'
          }
        ],
      },
    }),
  ],
});

