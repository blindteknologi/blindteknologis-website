import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Link2, RefreshCw, Shield, Zap } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { INTEGRATIONS } from '@/lib/site'

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
            <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">
              Integrations
            </p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight uppercase sm:text-5xl">
              Works With Your Systems
            </h1>
            <p className="mt-6 text-base leading-relaxed text-zinc-300">
              Blind Teknologis connects with the tools your shop already uses — so you get more
              intelligence without changing how you work.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {INTEGRATIONS.map((name) => (
                <article
                  key={name}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-light">
                    <Link2 size={18} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="text-sm font-semibold text-charcoal">{name}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-light py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:grid-cols-2 sm:px-8">
            {benefits.map((item) => (
              <article key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                <div className="mb-4 inline-flex rounded-full border-2 border-brand-red p-3">
                  <item.icon size={22} className="text-brand-red" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h2 className="text-sm font-bold tracking-[0.06em] text-charcoal uppercase">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-xl px-5 text-center sm:px-8">
            <p className="text-sm text-muted">Want to discuss integration options for your shop?</p>
            <Link
              href="/contact/"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              Contact Us
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
