import { Button } from '../ui/Button'
import { HeroVisualization } from './HeroVisualization'
import { SITE_DESCRIPTION } from '../../lib/site'

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgb(229_9_20/0.06),transparent)]" />

      <div className="section-pad relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="font-display text-5xl leading-[1.05] font-semibold tracking-tight text-white md:text-6xl lg:text-7xl">
              Automotive Service.
              <br />
              Automated.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-secondary">
              {SITE_DESCRIPTION}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('partner-access')}>
                Request Enterprise Access
              </Button>
              <Button variant="secondary" onClick={() => scrollTo('architecture')}>
                Learn More
              </Button>
            </div>
          </div>

          <HeroVisualization />
        </div>
      </div>
    </section>
  )
}
