import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SITE_NAME, SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Automotive Service Intelligence`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Intelligent software for automotive repair shops. Recover missed revenue, save advisor time, and deliver better customer experiences — powered by AI.',
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Automotive Service Intelligence`,
    description:
      'Intelligent software for automotive repair shops. Recover missed revenue, save advisor time, and deliver better customer experiences — powered by AI.',
    images: [{ url: '/images/hero-visual.png', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Automotive Service Intelligence`,
    description:
      'Intelligent software for automotive repair shops. Recover missed revenue, save advisor time, and deliver better customer experiences.',
    images: ['/images/hero-visual.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-page-bg">
        {/*
          Floating white card container.
          overflow: clip clips rounded corners without creating a scroll container,
          so sticky positioning on the header still works correctly.
        */}
        <div
          className="mx-auto max-w-[1600px] bg-white overflow-clip
                     sm:my-6 sm:rounded-[22px]
                     sm:shadow-[0_4px_40px_rgba(0,0,0,0.10),0_1px_4px_rgba(0,0,0,0.06)]"
        >
          {children}
        </div>
      </body>
    </html>
  )
}
