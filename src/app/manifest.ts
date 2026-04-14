import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Advait',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#0EA5E9',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
