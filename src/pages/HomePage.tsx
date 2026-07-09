import { SEO } from '../components/SEO'
import { EnterpriseReady } from '../components/home/EnterpriseReady'
import { FeatureCards } from '../components/home/FeatureCards'
import { FinalCta } from '../components/home/FinalCta'
import { HeroSection } from '../components/home/HeroSection'
import { WhySection } from '../components/home/WhySection'

export function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <FeatureCards />
      <WhySection />
      <EnterpriseReady />
      <FinalCta />
    </>
  )
}
