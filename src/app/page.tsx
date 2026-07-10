import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { PlatformSection } from '@/components/PlatformSection'
import { AboutSection } from '@/components/AboutSection'
import { ProductsSection } from '@/components/ProductsSection'
import { IntegrationsSection } from '@/components/IntegrationsSection'
import { ContactCTA } from '@/components/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Header active="Home" />
      <main>
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
