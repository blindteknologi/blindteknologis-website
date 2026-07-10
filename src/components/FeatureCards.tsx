'use client'

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
    <section className="border-t border-zinc-100 bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:gap-8 lg:px-10">
        {features.map((item) => (
          <article key={item.title}>
            <div className="mb-5 inline-flex rounded-full border-2 border-brand-red p-3.5">
              <item.icon size={22} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-sm font-bold tracking-wide text-charcoal uppercase">
              {item.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
