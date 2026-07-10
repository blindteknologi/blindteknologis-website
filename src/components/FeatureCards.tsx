import { BarChart3, Clock, Target, Users } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Save Hours Daily',
    description:
      'Automate documentation and repetitive tasks so your team gets hours back every day.',
  },
  {
    icon: Target,
    title: 'Improve Accuracy',
    description:
      'Surface the right information at the right time to reduce comebacks and boost repair quality.',
  },
  {
    icon: Users,
    title: 'Deliver Better Experiences',
    description:
      'Communicate clearly, set expectations, and keep customers coming back.',
  },
  {
    icon: BarChart3,
    title: 'Increase Profitability',
    description:
      "Turn missed opportunities into real revenue and grow your shop's bottom line.",
  },
]

export function FeatureCards() {
  return (
    <section id="features" className="border-t border-zinc-100 bg-surface-light py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-10 lg:px-10">
        {features.map((item) => (
          <article
            key={item.title}
            className="group transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 inline-flex rounded-full border-2 border-brand-red p-4 transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-brand-red/15">
              <item.icon size={24} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-sm font-bold tracking-[0.08em] text-charcoal uppercase">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
