'use client'

import { motion } from 'framer-motion'
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
    <section className="bg-surface-light py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-10">
        {features.map((item, i) => (
          <motion.article
            key={item.title}
            className="rounded-2xl bg-white p-8 shadow-[0_4px_24px_rgb(0_0_0/0.06)]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <div className="mb-5 inline-flex rounded-full bg-red-50 p-3">
              <item.icon size={22} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h2 className="text-sm font-bold tracking-wide text-charcoal uppercase">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
