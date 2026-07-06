import { SEO } from '../components/SEO'
import { HeroSection } from '../components/hero/HeroSection'
import { ArchitectureSection } from '../components/sections/ArchitectureSection'
import { OutcomesSection } from '../components/sections/OutcomesSection'
import { PartnerAccessSection } from '../components/sections/PartnerAccessSection'
import { SimulationPanel } from '../components/sections/SimulationPanel'

export function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <SimulationPanel />
      <OutcomesSection />
      <ArchitectureSection />
      <PartnerAccessSection />
    </>
  )
}
