import Link from 'next/link'
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  FileSearch,
  Link2,
  ScanLine,
  Wrench,
} from 'lucide-react'
import { PLATFORM_MODULES } from '@/lib/site'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'Maintenance Intelligence': FileSearch,
  'Technician Story Rewriting': Wrench,
  'Comeback Alerts': AlertTriangle,
  'Shop System Integrations': Link2,
  'VIN Decoding': ScanLine,
  'Future AI Modules': Brain,
}

export function PlatformSection() {
  return (
    <section id="platform" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">
              Our Platform
            </p>
            <h2 className="font-display mt-4 text-3xl leading-[1.08] font-bold tracking-tight text-charcoal uppercase sm:text-[2.35rem]">
              Intelligence That
              <br />
              Powers Your Shop
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              From vehicle data to repair insights, our platform gives your team the clarity and
              confidence to work smarter and win more.
            </p>
            <Link
              href="/products/"
              className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-brand-red uppercase transition-colors hover:text-brand-red-hover"
            >
              Explore the Platform
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            {PLATFORM_MODULES.map((card) => {
              const Icon = iconMap[card.title] ?? FileSearch
              const highlight = 'highlight' in card && card.highlight

              return (
                <article
                  key={card.title}
                  className="group flex min-h-[240px] flex-col rounded-2xl bg-charcoal p-5 text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-charcoal-mid hover:shadow-xl hover:shadow-black/20 sm:min-h-[260px] sm:p-6"
                >
                  <Icon
                    size={26}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      highlight ? 'text-brand-red' : 'text-white'
                    }`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-[11px] font-bold leading-snug tracking-[0.06em] uppercase">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-relaxed text-zinc-400">{card.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
