import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { MotionReveal } from '@/components/MotionReveal'
import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { TEKBOX_FEATURES, buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Products',
  description:
    'TekBox is in development. See the real Blind Teknologis product features for automotive service advisor intelligence.',
  path: '/products/',
})

export default function ProductsPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Products"
          title="TekBox Is In Active Development"
          description="TekBox is the Blind Teknologis knowledge platform for automotive repair shops. It is not a shop management system replacement. It is an intelligence layer designed to sit on top of systems like Tekmetric."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell max-w-3xl">
            <MotionReveal>
              <h2 className="section-heading">Product Status</h2>
              <p className="section-copy mt-5">
                TekBox is under active development. The features listed below are real capabilities
                represented in the product codebase — VIN intelligence, maintenance evaluation,
                evidence honesty, service history, and a Service Advisor Dashboard. We do not publish
                fictional module catalogs or unverified performance statistics.
              </p>
              <p className="section-copy mt-4">
                Live shop-system connectivity (including Tekmetric) is an execution milestone, not a
                completed claim. Early access partners will help validate workflows against real
                service operations.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="bg-surface py-18 sm:py-24">
          <div className="section-shell">
            <MotionReveal className="max-w-3xl">
              <p className="eyebrow">TekBox Capabilities</p>
              <h2 className="section-heading mt-4">What We Are Building</h2>
              <p className="section-copy mt-5">
                These are the real product surfaces of TekBox. Each item is grounded in implemented
                product work — not speculative marketing cards.
              </p>
            </MotionReveal>

            <ol className="mt-12 grid gap-4 lg:grid-cols-2">
              {TEKBOX_FEATURES.map((feature, index) => (
                <MotionReveal key={feature.title} delay={index * 0.03}>
                  <li className="flex h-full gap-4 rounded-[18px] bg-white p-6">
                    <span className="font-display text-2xl font-semibold text-brand-red tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-charcoal">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-copy">{feature.description}</p>
                    </div>
                  </li>
                </MotionReveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell">
            <MotionReveal className="max-w-2xl">
              <p className="eyebrow">Next Step</p>
              <h2 className="section-heading mt-4">Follow Development or Talk Integrations</h2>
              <p className="section-copy mt-5">
                Request early access to stay close to TekBox milestones, or contact our API team
                about Tekmetric and shop-system integration planning.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/request-early-access/"
                  className="pill-button bg-brand-red text-white hover:bg-brand-red-strong"
                >
                  Request Early Access
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <Link
                  href="/integrations/"
                  className="pill-button border border-black/10 bg-white text-charcoal hover:bg-surface"
                >
                  Integration Approach
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
