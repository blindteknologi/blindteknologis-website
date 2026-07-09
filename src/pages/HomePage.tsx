import { SEO } from '../components/SEO'
import { AboutSection } from '../components/home/AboutSection'
import { ContactSection } from '../components/home/ContactSection'
import { FeatureCards } from '../components/home/FeatureCards'
import { HeroSection } from '../components/home/HeroSection'
import { PlatformSection } from '../components/home/PlatformSection'

export function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <FeatureCards />
      <PlatformSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
