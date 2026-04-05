import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Galya Player - IPTV Streaming App',
  description:
    'Watch live TV, movies, and series with your own IPTV subscription. Galya Player supports Xtream API, M3U playlists, downloads, voice search, and more.',
  keywords: 'IPTV player, live TV, streaming, Xtream, M3U, Android',
  openGraph: {
    title: 'Galya Player',
    description: 'Your personal IPTV streaming player for Android.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
