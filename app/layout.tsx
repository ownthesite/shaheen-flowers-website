import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import WhatsAppButton from '@/components/layout/whatsapp-button'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shaheenflowers.com'),

  title: {
    default: 'Shaheen Flowers LLC - Landscaping & Plant Services UAE',
    template: '%s | Shaheen Flowers LLC',
  },

  description:
    'Premium landscaping, indoor plants, outdoor plants, plant maintenance, and green wall services in UAE. 10+ years of experience serving 300+ clients.',

  keywords: [
    'landscaping UAE',
    'indoor plants UAE',
    'outdoor plants UAE',
    'plant maintenance UAE',
    'green wall UAE',
    'garden services UAE',
  ],

  authors: [{ name: 'Shaheen Flowers LLC' }],
  creator: 'Shaheen Flowers LLC',
  publisher: 'Shaheen Flowers LLC',

  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon-32x32.png',
  },

  manifest: '/site.webmanifest',

  openGraph: {
    title: 'Shaheen Flowers LLC',
    description:
      'Premium landscaping & plant services in UAE. Indoor plants, outdoor plants, and maintenance services.',
    url: 'https://shaheenflowers.com',
    siteName: 'Shaheen Flowers',
    images: [
      {
        url: '/og-image.jpg', // make sure this exists
        width: 1200,
        height: 630,
        alt: 'Shaheen Flowers Landscaping Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Shaheen Flowers LLC',
    description:
      'Premium landscaping & plant services in UAE.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

 

  category: 'business',
}

 export const viewport = {
  themeColor: '#ffffff',
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white">
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
