import { Button } from '../ui/Button'
import { PlatformVisual } from './PlatformVisual'

export function PlatformSection() {
  return (
    <section className="border-b border-border bg-elevated">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid items-center gap-12 rounded-lg border border-border bg-card p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Enterprise Platform
            </p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white uppercase md:text-5xl">
              Blind <span className="text-accent">Core</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              A secure automation layer built for automotive service operations. Blind Core
              processes complex workflows in the background while your teams continue using
              the systems they already trust.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Enterprise-grade architecture designed for scale, consistency, and operational
              control—without disrupting existing business processes.
            </p>
            <div className="mt-8">
              <Button href="#contact" variant="outline">
                Request Access
              </Button>
            </div>
          </div>

          <PlatformVisual />
        </div>
      </div>
    </section>
  )
}
