import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotel Garni Zum Grauen Bären | Bregenz am Bodensee',
  description: 'Ihr Wohlfühlhotel in Bregenz, nur wenige Schritte vom Bodensee entfernt. Genießen Sie komfortable Zimmer, ein reichhaltiges Frühstück und alpine Gastlichkeit in Vorarlberg.',
  keywords: 'Hotel Bregenz, Garni Hotel Bodensee, Übernachtung Bregenz, Hotel Vorarlberg, Bodensee Hotel',
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
