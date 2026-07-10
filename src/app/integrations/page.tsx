import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Link2, RefreshCw, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Blind Teknologis integrates with the shop systems you already use.',
}

const benefits = [
  {
    icon: Link2,
    title: 'Connect Your Stack',
    description:
      'Our platform is designed to work alongside the management systems, diagnostic tools, and workflows your team relies on every day.',
  },
  {
    icon: RefreshCw,
    title: 'Minimal Disruption',
    description:
      'Integration is built for adoption — not overhaul. Your team keeps working the way they know while gaining new intelligence.',
  },
  {
    icon: Zap,
    title: 'Real-Time Context',
    description:
      'Vehicle and service data flows into the platform so advisors and technicians always have current, accurate information.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description:
      'Data handling follows industry best practices. Your shop information stays protected throughout every integration.',
  },
]

export default function IntegrationsPage() {
  return (
    <>
      <Header active="Integrations" />
      <main>
        <section className="bg-charcoal py-20 text-white">
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase">Integrations</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-4xl">
              Works With Your Systems
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Blind Teknologis connects with the tools your shop already uses — so you get more
              intelligence without changing how you work.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2 sm:px-8">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-surface-light p-8"
              >
                <div className="mb-4 inline-flex rounded-full bg-white p-3 shadow-sm">
                  <item.icon size={22} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-sm font-bold tracking-wide text-charcoal uppercase">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl px-5 text-center sm:px-8">
            <p className="text-sm text-muted">
              Want to discuss integration options for your shop?
            </p>
            <Link
              href="/contact/"
              className="mt-4 inline-flex rounded-lg bg-brand-red px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
