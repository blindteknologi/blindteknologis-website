import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { PlatformSection } from '@/components/PlatformSection'
import { AboutSection } from '@/components/AboutSection'
import { ProductsSection } from '@/components/ProductsSection'
import { IntegrationsSection } from '@/components/IntegrationsSection'
import { ContactCTA } from '@/components/ContactCTA'
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function HomePage() {
  return (
    <>
      <Header active="Home" />
      <main id="main-content">
        <Hero />
        <FeatureCards />
        <PlatformSection />
        <AboutSection />
        <ProductsSection />
        <IntegrationsSection />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
