import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} | Shop Intelligence for Modern Service Operations`,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'automotive service software',
    'repair shop software',
    'service advisor efficiency',
    'digital inspections',
    'shop workflow automation',
    'missed revenue recovery',
  ],
  applicationName: SITE_NAME,
  category: 'business',
  icons: {
    icon: '/favicon.png',
    apple: '/logo.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Shop Intelligence for Modern Service Operations`,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: absoluteUrl('/images/hero-visual.png'),
        width: 1536,
        height: 1024,
        alt: `${SITE_NAME} platform preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Shop Intelligence for Modern Service Operations`,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl('/images/hero-visual.png')],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl('/logo.png'),
  email: 'info@blindteknologis.com',
  description: DEFAULT_DESCRIPTION,
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-charcoal"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="min-h-screen px-0 md:px-4 md:py-5 lg:px-6">{children}</div>
      </body>
    </html>
  )
}
