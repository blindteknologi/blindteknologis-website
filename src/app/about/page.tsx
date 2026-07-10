import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ABOUT_STATS } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Blind Teknologis and our mission to transform automotive service operations.',
}

export default function AboutPage() {
  return (
    <>
      <Header active="About" />
      <main>
        <section className="relative overflow-hidden bg-hero py-24 text-white sm:py-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: 'url(/images/metallic-textures.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">About Us</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-5xl">
              Built for the Shop Floor
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Blind Teknologis builds intelligent software for automotive service operations. We
              help repair shops recover missed opportunities, reduce comebacks, and deliver
              experiences that keep customers coming back.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal uppercase">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Every repair shop deserves tools that work as hard as the people behind the counter.
              We build software that surfaces the right information at the right time — so advisors
              spend less time searching and more time serving customers.
            </p>

            <h2 className="font-display mt-12 text-2xl font-bold tracking-tight text-charcoal uppercase">
              What We Believe
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-muted">
              <li>Technology should reduce friction, not add it.</li>
              <li>Accurate vehicle context is the foundation of great service.</li>
              <li>Shops that communicate clearly win more business.</li>
              <li>Profitability and customer trust go hand in hand.</li>
            </ul>
          </div>
        </section>

        <section className="bg-surface-light py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {ABOUT_STATS.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-6 text-center"
                >
                  <p className="font-display text-3xl font-bold text-brand-red">{stat.value}</p>
                  <p className="mt-2 text-xs font-bold tracking-[0.08em] text-charcoal uppercase">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.sub}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-xl px-5 text-center sm:px-8">
            <p className="text-sm text-muted">Interested in learning more?</p>
            <Link
              href="/contact/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              Request Early Access
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
