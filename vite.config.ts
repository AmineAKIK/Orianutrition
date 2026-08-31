import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import { publicBasePath, publicSiteUrl } from './src/config/release'

const publicReleaseHtml = {
  name: 'public-release-html',
  transformIndexHtml(html: string) {
    return html.replaceAll('__PUBLIC_SITE_URL__', publicSiteUrl)
  },
}

export default defineConfig({
  base: publicBasePath,
  plugins: [
    publicReleaseHtml,
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        id: publicBasePath,
        name: 'Oria Nutrition',
        short_name: 'Oria',
        description: 'Nutrition, sommeil et rythmes atypiques',
        lang: 'fr',
        theme_color: '#294a35',
        background_color: '#fbf9f4',
        display: 'standalone',
        start_url: publicBasePath,
        scope: publicBasePath,
        categories: ['health', 'lifestyle'],
        related_applications: [
          {
            platform: 'webapp',
            url: `${publicBasePath}manifest.webmanifest`,
            id: publicBasePath,
          },
        ],
        icons: [
          {
            src: `${publicBasePath}favicon.svg`,
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
})
