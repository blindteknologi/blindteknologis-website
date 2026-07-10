'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, FileSearch, Link2, ScanLine, Wrench } from 'lucide-react'

const cards = [
  {
    icon: FileSearch,
    title: 'Maintenance Intelligence',
    description:
      'Surface maintenance context and service requirements with clarity and confidence.',
  },
  {
    icon: Wrench,
    title: 'Technician Story Rewriting',
    description:
      'Help technicians communicate repairs clearly and consistently to every customer.',
  },
  {
    icon: AlertTriangle,
    title: 'Comeback Alerts',
    description:
      'Identify patterns and flag potential comebacks before they impact customer trust.',
    highlight: true,
  },
  {
    icon: Link2,
    title: 'Shop System Integrations',
    description:
      'Connect with the systems your team already uses without disrupting workflows.',
  },
  {
    icon: ScanLine,
    title: 'Extensive VIN Decoding',
    description:
      'Decode vehicle identity data to ground every service interaction in accurate context.',
  },
]

export function PlatformSection() {
  return (
    <section className="bg-surface-light py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-bold tracking-[0.22em] text-brand-red uppercase">
              Our Platform
            </p>
            <h2 className="font-display mt-3 text-3xl leading-[1.1] font-bold tracking-tight text-charcoal uppercase sm:text-4xl">
              Intelligence That
              <br />
              Powers Your Shop
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              From vehicle data to repair insights, our platform gives your team the clarity and
              confidence to work smarter and win more.
            </p>
            <Link
              href="/products/"
              className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-wide text-brand-red uppercase transition-colors hover:text-brand-red-hover"
            >
              Explore the Platform
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </motion.div>

          <div className="flex gap-3 overflow-x-auto pb-2 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible">
            {cards.map((card, i) => (
              <motion.article
                key={card.title}
                className="min-w-[148px] flex-1 rounded-xl bg-charcoal p-4 text-white lg:min-w-0"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <card.icon
                  size={20}
                  className={card.highlight ? 'text-brand-red' : 'text-white'}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-3 text-[10px] font-bold leading-snug tracking-wide uppercase sm:text-[11px]">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-[9px] leading-relaxed text-zinc-400 sm:text-[10px]">
                  {card.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
