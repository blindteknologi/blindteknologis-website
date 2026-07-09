import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { HeroVisual } from './HeroVisual'
import { HERO_BODY } from '../../lib/site'

const bullets = [
  'Built for operational excellence at enterprise scale.',
  'Designed for the future of automotive service.',
]

export function HeroSection() {
  return (
    <section id="home" className="relative border-b border-border pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_0%,rgb(217_20_36/0.05),transparent)]" />

      <div className="section-pad relative mx-auto max-w-7xl !py-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="font-display text-4xl leading-[1.05] font-bold tracking-tight uppercase sm:text-5xl lg:text-[3.25rem]">
              Automotive Service.
              <br />
              <span className="text-accent">Automated.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{HERO_BODY}</p>

            <ul className="mt-6 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted">
                  <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#contact">Request Early Access</Button>
              <Button href="#contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
