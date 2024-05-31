import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/CubeTimer/',
  server: {
    host: '0.0.0.0', // Allow access from local network
  },
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
        start_url: '/CubeTimer/',
        short_name: "CubeTimer",
        description: "Timer for cubing",
        name: "CubeTimer",
        icons: [
          {
            src: 'logo192.png', // Path and file names as per your project structure
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'logo256.png',
            sizes: '256x256',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'logo384.png',
            sizes: '384x384',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'logo512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
      },
    }),
  ],
});

