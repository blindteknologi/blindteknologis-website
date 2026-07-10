'use client'

import Link from 'next/link'
import { ArrowRight, AlertTriangle, FileSearch, Link2, ScanLine, Wrench } from 'lucide-react'

const cards = [
  {
    icon: FileSearch,
    title: 'Maintenance Intelligence',
    description: 'Pull history, get recommendations, and show customers with clarity.',
  },
  {
    icon: Wrench,
    title: 'Technician Story Rewriting',
    description: 'Transform technician notes into clear, customer-friendly summaries.',
  },
  {
    icon: AlertTriangle,
    title: 'Comeback Alerts',
    description: 'Get ahead of potential comebacks before they impact your shop.',
    highlight: true,
  },
  {
    icon: Link2,
    title: 'Shop System Integrations',
    description: 'Seamlessly connect with your shop management systems.',
  },
  {
    icon: ScanLine,
    title: 'Extensive VIN Decoding',
    description: 'Decode more data points and uncover what others miss.',
  },
]

export function PlatformSection() {
  return (
    <section className="bg-[#f3f4f6] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start lg:gap-10">
          <div>
            <p className="text-[11px] font-bold tracking-[0.22em] text-brand-red uppercase">
              Our Platform
            </p>
            <h2 className="font-display mt-4 text-3xl leading-[1.08] font-bold tracking-tight text-charcoal uppercase sm:text-[2.25rem]">
              Intelligence That
              <br />
              Powers Your Shop
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              From vehicle data to repair insights, our platform gives your team the clarity and
              confidence to work smarter and win more.
            </p>
            <Link
              href="/products/"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-wide text-brand-red uppercase transition-colors hover:text-brand-red-hover"
            >
              Explore the Platform
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[260px] flex-col rounded-2xl bg-charcoal p-5 text-white"
              >
                <card.icon
                  size={24}
                  className={card.highlight ? 'text-brand-red' : 'text-white'}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-[11px] font-bold leading-snug tracking-wide uppercase">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[10px] leading-relaxed text-zinc-400">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
