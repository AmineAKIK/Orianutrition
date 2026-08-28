import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Orianutrition/',
  plugins: [react(), tailwindcss(), VitePWA({ registerType: 'autoUpdate', manifest: { name: 'Oria Nutrition', short_name: 'Oria', description: 'Nutrition, sommeil et rythmes atypiques', theme_color: '#294a35', background_color: '#fbf9f4', display: 'standalone', start_url: '/Orianutrition/', scope: '/Orianutrition/' } })],
})
