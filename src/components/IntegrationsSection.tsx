import Link from 'next/link'
import { ArrowRight, Link2 } from 'lucide-react'
import { INTEGRATIONS } from '@/lib/site'

export function IntegrationsSection() {
  return (
    <section id="integrations" className="bg-surface-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">
            Integrations
          </p>
          <h2 className="font-display mt-4 text-3xl leading-[1.08] font-bold tracking-tight text-charcoal uppercase sm:text-[2.25rem]">
            Works With Your
            <br />
            Existing Systems
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-muted">
            Blind Teknologis connects with the tools your shop already uses — so you get more
            intelligence without changing how you work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {INTEGRATIONS.map((name) => (
            <article
              key={name}
              className="group flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-lg hover:shadow-zinc-200/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-light transition-colors group-hover:bg-red-50">
                <Link2 size={18} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-charcoal">{name}</span>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/integrations/"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-brand-red uppercase transition-colors hover:text-brand-red-hover"
          >
            Explore Integrations
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
