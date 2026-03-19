import type { Metadata, Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { PayoutToastProvider } from '@/components/payout-toast'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'GigShield AI | Parametric Insurance for India\'s Gig Workers',
  description: 'AI-powered parametric insurance protecting India\'s 450M+ gig workers from disruptions. Instant claims, no paperwork.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'GigShield AI',
    description: 'Parametric insurance for gig workers',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FF5722',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <PayoutToastProvider />
        <Analytics />
      </body>
    </html>
  )
}
