import { Button } from '../ui/Button'
import { HeroVisualization } from './HeroVisualization'
import { SITE_DESCRIPTION } from '../../lib/site'

export function HeroSection() {
  return (
    <section className="relative border-b border-border pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_0%,rgb(217_20_36/0.06),transparent)]" />

      <div className="section-pad relative mx-auto max-w-7xl !py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in">
            <h1 className="font-display text-4xl leading-[1.08] font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Automotive Service.
              <br />
              Automated.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {SITE_DESCRIPTION}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/contact">Request Early Access</Button>
              <Button to="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="animate-fade-in lg:justify-self-end">
            <HeroVisualization />
          </div>
        </div>
      </div>
    </section>
  )
}
