import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/orianutrition/',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: '/orianutrition/',
        name: 'Oria Nutrition',
        short_name: 'Oria',
        description: 'Nutrition, sommeil et rythmes atypiques',
        lang: 'fr',
        theme_color: '#294a35',
        background_color: '#fbf9f4',
        display: 'standalone',
        start_url: '/orianutrition/',
        scope: '/orianutrition/',
        categories: ['health', 'lifestyle'],
        icons: [
          {
            src: '/orianutrition/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
