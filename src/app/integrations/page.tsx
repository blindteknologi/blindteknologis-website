import Link from 'next/link'
import { ArrowRight, Cable, Shield, Workflow } from 'lucide-react'
import { MotionReveal } from '@/components/MotionReveal'
import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { CONTACT_EMAILS, buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Integrations',
  description:
    'Blind Teknologis is executing Tekmetric API access as the first shop-system integration path for TekBox.',
  path: '/integrations/',
})

const principles = [
  {
    icon: Workflow,
    title: 'Sit On Top, Do Not Replace',
    copy: 'TekBox is a knowledge platform. Shop management systems remain the system of record for jobs, customers, and billing.',
  },
  {
    icon: Cable,
    title: 'Adapter Interface Layer',
    copy: 'Vendor-specific mapping stays in adapters. Core intelligence stays vendor-neutral so the platform can expand without rewriting business logic.',
  },
  {
    icon: Shield,
    title: 'Honest Status Only',
    copy: 'We do not publish partner logo walls or claim live integrations that are not operational. Tekmetric is the active first path.',
  },
] as const

export default function IntegrationsPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Integrations"
          title="Tekmetric Is the First Execution Path"
          description="Blind Teknologis is applying for Tekmetric API access to connect TekBox intelligence to real shop workflows. This is an active program — not a speculative partner grid."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell max-w-3xl">
            <MotionReveal>
              <h2 className="section-heading">Current Integration Focus</h2>
              <p className="section-copy mt-5">
                <strong className="text-charcoal">Tekmetric</strong> is the priority shop management
                system for first production connectivity. The goal is to map vehicle, job, and
                workflow context into TekBox through a clean adapter — so advisors get better
                intelligence without abandoning the tools they already use.
              </p>
              <p className="section-copy mt-4">
                Other shop systems may follow after Tekmetric connectivity is proven. Until an
                integration is live and verified, it will not appear as a completed partnership on
                this site.
              </p>
              <div className="mt-8 rounded-[18px] border border-black/8 bg-surface p-6">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-brand-red">
                  Partner / API Contact
                </p>
                <a
                  href={`mailto:${CONTACT_EMAILS.api}`}
                  className="mt-3 inline-block text-lg font-semibold text-charcoal hover:text-brand-red"
                >
                  {CONTACT_EMAILS.api}
                </a>
                <p className="mt-3 text-sm leading-6 text-copy">
                  Use this address for Tekmetric API application follow-up, technical diligence, and
                  integration scoping.
                </p>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section className="bg-surface py-18 sm:py-24">
          <div className="section-shell grid gap-4 lg:grid-cols-3">
            {principles.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.05}>
                <article className="h-full rounded-[18px] bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-red/18 bg-red-50 text-brand-red">
                    <item.icon size={18} aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-charcoal">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-copy">{item.copy}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell">
            <MotionReveal className="max-w-2xl">
              <p className="eyebrow">Next Step</p>
              <h2 className="section-heading mt-4">Need Diligence Materials?</h2>
              <p className="section-copy mt-5">
                For Tekmetric partner review, privacy questions, or technical architecture
                discussion, contact the addresses below. Product vision and feature scope are
                published on the Products page.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${CONTACT_EMAILS.api}`}
                  className="pill-button bg-brand-red text-white hover:bg-brand-red-strong"
                >
                  Email API Team
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
                <Link
                  href="/products/"
                  className="pill-button border border-black/10 bg-white text-charcoal hover:bg-surface"
                >
                  View TekBox Features
                </Link>
              </div>
            </MotionReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
