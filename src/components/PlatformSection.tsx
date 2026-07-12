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
import { PLATFORM_FUTURE_MODULE, PLATFORM_HERO_MODULES } from '@/lib/site'
import { FadeIn } from '@/components/FadeIn'
import type { LucideIcon } from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  'Maintenance Intelligence': FileSearch,
  'Technician Story Rewriting': Wrench,
  'Comeback Alerts': AlertTriangle,
  'Shop System Integrations': Link2,
  'VIN Decoding': ScanLine,
  'Future AI Modules': Brain,
}

function PlatformCard({
  title,
  description,
  highlight = false,
  compact = false,
}: {
  title: string
  description: string
  highlight?: boolean
  compact?: boolean
}) {
  const Icon = iconMap[title] ?? FileSearch

  return (
    <article
      className={`group flex flex-col rounded-2xl bg-charcoal text-white transition-all duration-300 hover:-translate-y-1.5 hover:bg-charcoal-mid hover:shadow-xl hover:shadow-black/20 ${
        compact
          ? 'min-h-0 flex-row items-center gap-4 p-4 sm:p-5'
          : 'min-h-[220px] p-5 sm:min-h-[240px] sm:p-6 lg:min-h-[260px]'
      }`}
    >
      <Icon
        size={compact ? 22 : 26}
        className={`shrink-0 transition-transform duration-300 group-hover:scale-110 ${
          highlight ? 'text-brand-red' : 'text-white'
        }`}
        strokeWidth={1.5}
        aria-hidden="true"
      />
      <div className={compact ? 'min-w-0' : undefined}>
        <h3
          className={`font-bold leading-snug tracking-[0.06em] uppercase ${
            compact ? 'text-[10px]' : 'mt-5 text-[11px]'
          }`}
        >
          {title}
        </h3>
        <p
          className={`leading-relaxed text-zinc-400 ${
            compact ? 'mt-1 text-[10px]' : 'mt-3 text-[11px]'
          }`}
        >
          {description}
        </p>
      </div>
    </article>
  )
}

export function PlatformSection() {
  const future = PLATFORM_FUTURE_MODULE

  return (
    <section id="platform" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-12">
          <FadeIn>
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
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {PLATFORM_HERO_MODULES.map((card) => (
                <PlatformCard
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  highlight={'highlight' in card && card.highlight}
                />
              ))}
            </div>
            <div className="mt-3 lg:max-w-md">
              <PlatformCard title={future.title} description={future.description} compact />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
