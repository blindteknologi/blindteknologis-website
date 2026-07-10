import { Clock, Layers, Target } from 'lucide-react'
import { TextLink } from '../ui/Button'

const features = [
  {
    icon: Clock,
    title: 'Save Hours Every Day',
    description:
      "Administrative work shouldn't consume your most valuable employees. Intelligent automation handles the routine so your team can focus on what matters.",
  },
  {
    icon: Layers,
    title: 'Improve Consistency',
    description:
      'Standardize processes across every advisor, every customer, and every location. Deliver the same premium experience every time.',
  },
  {
    icon: Target,
    title: 'Recover Missed Opportunities',
    description:
      'Automate routine business processes so inspections, follow-ups, and workflow steps are never lost or overlooked.',
  },
]

export function FeatureCards() {
  return (
    <section className="border-b border-border">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-lg border border-border-accent bg-card p-8 transition-colors hover:border-accent/50"
            >
              <div className="mb-6 inline-flex rounded border border-border-accent p-3">
                <Icon size={22} className="text-accent" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h2 className="font-display text-lg font-bold tracking-wide text-white uppercase">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
              <div className="mt-6">
                <TextLink href="#contact">Learn more</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
