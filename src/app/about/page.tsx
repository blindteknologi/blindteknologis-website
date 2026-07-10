import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Blind Teknologis and our mission to transform automotive service operations.',
}

export default function AboutPage() {
  return (
    <>
      <Header active="About" />
      <main>
        <section className="bg-charcoal py-20 text-white">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase">About Us</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Built for the Shop Floor
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Blind Teknologis builds intelligent software for automotive service operations. We
              help repair shops recover missed opportunities, reduce comebacks, and deliver
              experiences that keep customers coming back.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
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

            <div className="mt-12 rounded-2xl bg-surface-light p-8 text-center">
              <p className="text-sm text-muted">Interested in learning more?</p>
              <Link
                href="/contact/"
                className="mt-4 inline-flex rounded-lg bg-brand-red px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
              >
                Request Early Access
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
