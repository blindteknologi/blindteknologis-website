import { Clock, Layers, Target } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Save Hours Every Day',
    description:
      "Administrative work shouldn't consume your most valuable employees.",
  },
  {
    icon: Layers,
    title: 'Consistency At Scale',
    description:
      'Standardize processes across every advisor, every customer, every location.',
  },
  {
    icon: Target,
    title: 'Recover Missed Opportunities',
    description:
      'Automate routine business processes so opportunities are never lost.',
  },
]

export function FeatureCards() {
  return (
    <section className="border-b border-border bg-surface-secondary">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="card rounded-2xl p-8 md:p-10">
              <div className="mb-6 inline-flex rounded-lg border border-border p-3">
                <Icon size={22} className="text-accent" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h2 className="font-display text-xl font-semibold tracking-tight text-white">
                {title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
