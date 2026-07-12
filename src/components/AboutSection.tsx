import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ABOUT_STATS } from '@/lib/site'
import { FadeIn } from '@/components/FadeIn'

export function AboutSection() {
  return (
    <section id="about" className="bg-surface-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <FadeIn>
            <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">
              About Us
            </p>
            <h2 className="font-display mt-4 text-3xl leading-[1.08] font-bold tracking-tight text-charcoal uppercase sm:text-[2.25rem]">
              Built for the
              <br />
              Shop Floor
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Blind Teknologis builds intelligent software for automotive service operations. We
              help repair shops recover missed opportunities, reduce comebacks, and deliver
              experiences that keep customers coming back.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              Every repair shop deserves tools that work as hard as the people behind the counter.
              We surface the right information at the right time — so advisors spend less time
              searching and more time serving customers.
            </p>
            <Link
              href="/about/"
              className="mt-7 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-brand-red uppercase transition-colors hover:text-brand-red-hover"
            >
              Learn More About Us
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200/60"
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-brand-red sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-bold tracking-[0.08em] text-charcoal uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.sub}</p>
                </article>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
