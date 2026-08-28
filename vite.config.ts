import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { brand } from './src/config/site'

export default defineConfig({
  base: `/${brand.repositoryName}/`,
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [],
      manifest: {
        name: brand.name,
        short_name: brand.shortName,
        description: brand.description,
        start_url: `/${brand.repositoryName}/`,
        scope: `/${brand.repositoryName}/`,
        display: 'standalone',
        background_color: '#fbf9f4',
        theme_color: '#294a35'
      }
    })
  ]
})
