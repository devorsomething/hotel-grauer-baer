import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotel Garni Zum Grauen Bären | Bregenz am Bodensee',
  description: 'Ihr Wohlfühlhotel in Bregenz, nur wenige Schritte vom Bodensee entfernt. Genießen Sie komfortable Zimmer, ein reichhaltiges Frühstück und alpine Gastlichkeit in Vorarlberg.',
  keywords: 'Hotel Bregenz, Garni Hotel Bodensee, Übernachtung Bregenz, Hotel Vorarlberg, Bodensee Hotel',
  openGraph: {
    title: 'Hotel Garni Zum Grauen Bären Bregenz',
    description: 'Gemütliches Hotel am Bodensee — Komfortable Zimmer, Frühstück inklusive',
    images: [
      {
        url: '/og?name=Hotel%20Garni%20Zum%20Grauen%20B%C3%A4ren&tagline=Gem%C3%BCtlichkeit%20am%20Bodensee&color=%232D5016',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hotel Garni Zum Grauen Bären Bregenz',
    description: 'Gemütliches Hotel am Bodensee — Komfortable Zimmer, Frühstück inklusive',
    images: ['/og'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
