import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { FeatureCards } from '@/components/FeatureCards'
import { PlatformSection } from '@/components/PlatformSection'

export default function HomePage() {
  return (
    <>
      <Header active="Home" />
      <main>
        <Hero />
        <FeatureCards />
        <PlatformSection />
      </main>
      <Footer />
    </>
  )
}
