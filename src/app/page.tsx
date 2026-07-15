import Link from 'next/link'
import { FileCheck2, PlugZap, ShieldCheck, Wrench } from 'lucide-react'
import { MotionReveal } from '@/components/MotionReveal'
import { HomeHero } from '@/components/HomeHero'
import { SectionBackdrop } from '@/components/SectionBackdrop'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { ENGINEERING_PRINCIPLES, FEATURE_STRIP, buildMetadata } from '@/lib/site'
import { ArrowRight, Clock3, Target, Users, BarChart3 } from 'lucide-react'

export const metadata = buildMetadata({
  path: '/',
})

const featureIcons = [Clock3, Target, Users, BarChart3]
const principleIcons = [ShieldCheck, FileCheck2, PlugZap, Wrench]

export default function HomePage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        {/* Block 1 — hero image background */}
        <HomeHero />

        {/* Block 2 — white */}
        <section className="bg-white py-10 sm:py-12">
          <div className="section-shell grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {FEATURE_STRIP.map((feature, index) => {
              const Icon = featureIcons[index]

              return (
                <MotionReveal key={feature.title} delay={index * 0.05}>
                  <article>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-red/25 bg-white text-brand-red">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h2 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-charcoal">
                      {feature.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-copy">{feature.description}</p>
                  </article>
                </MotionReveal>
              )
            })}
          </div>
        </section>

        {/* Block 3 — hero image background (content-width aligned) */}
        <section id="about" className="bg-white py-6 sm:py-8 [scroll-margin-top:92px]">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[10px] bg-charcoal px-6 py-14 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
              <SectionBackdrop tone="dark" />
              <div className="relative grid gap-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start">
                <MotionReveal>
                  <p className="eyebrow">How We Build</p>
                  <h2 className="font-display mt-4 text-[2.55rem] leading-[0.96] font-semibold uppercase tracking-[0.01em] text-white sm:text-[3rem]">
                    Software Built
                    <br />
                    Like Infrastructure
                  </h2>
                  <p className="mt-5 max-w-sm text-[0.95rem] leading-7 text-white/70">
                    Blind Teknologis designs software for automotive service operations. Our first
                    product, TekBox, is in active development — we&apos;ll share a full walkthrough
                    with real screenshots as it nears completion.
                  </p>
                  <Link
                    href="/about/"
                    className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red transition-colors hover:text-white"
                  >
                    Learn Our Approach
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </MotionReveal>

                <div className="grid gap-4 sm:grid-cols-2">
                  {ENGINEERING_PRINCIPLES.map((principle, index) => {
                    const Icon = principleIcons[index]

                    return (
                      <MotionReveal key={principle.title} delay={index * 0.04}>
                        <Link
                          href={principle.href}
                          className="group flex h-full min-h-[190px] flex-col rounded-[18px] bg-black/45 px-5 py-5 text-white backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1"
                        >
                          <Icon
                            size={18}
                            className={
                              'highlight' in principle && principle.highlight
                                ? 'text-brand-red'
                                : 'text-white/88'
                            }
                            aria-hidden="true"
                          />
                          <h3 className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
                            {principle.title}
                          </h3>
                          <p className="mt-3 text-sm leading-6 text-white/58">
                            {principle.description}
                          </p>
                        </Link>
                      </MotionReveal>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Block 4 — white */}
        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell max-w-3xl">
            <MotionReveal>
              <p className="eyebrow">About Us</p>
              <h2 className="section-heading mt-4">
                Built for the
                <br />
                Shop Floor
              </h2>
              <p className="section-copy mt-5">
                Blind Teknologis is focused on the operational reality of service departments: missed
                revenue, manual paperwork, inconsistent communication, and the pressure to move
                faster without cutting corners.
              </p>
              <p className="section-copy mt-4">
                TekBox does not replace your shop management system. It increases the intelligence of
                the tools you already use — starting with Tekmetric — so advisors make better
                recommendations with honest, provenance-backed vehicle context.
              </p>
              <Link
                href="/about/"
                className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red transition-colors hover:text-brand-red-strong"
              >
                Learn More About Us
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </MotionReveal>
          </div>
        </section>

        {/* Block 5 — white, company-level product framing (feature-by-feature detail lives on /products/) */}
        <section id="products" className="bg-white py-18 sm:py-24 [scroll-margin-top:92px]">
          <div className="section-shell max-w-3xl">
            <MotionReveal>
              <p className="eyebrow">Products</p>
              <h2 className="section-heading mt-4">
                TekBox Is In
                <br />
                Active Development
              </h2>
              <p className="section-copy mt-5">
                TekBox is our first product — a knowledge platform for automotive service
                operations, built around vehicle intelligence, maintenance context, and honest
                handling of what is and isn&apos;t yet known about a vehicle.
              </p>
              <p className="section-copy mt-4">
                We&apos;re holding the full product tour until it&apos;s ready to show properly,
                with real screenshots of the running system rather than a speculative feature
                list. The name TekBox itself may change before that day comes.
              </p>
              <Link
                href="/products/"
                className="mt-8 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red transition-colors hover:text-brand-red-strong"
              >
                Current Product Notes
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </MotionReveal>
          </div>
        </section>

        {/* Block 6 — white */}
        <section id="integrations" className="bg-white py-18 sm:py-24 [scroll-margin-top:92px]">
          <div className="section-shell max-w-3xl">
            <MotionReveal>
              <p className="eyebrow">Integrations</p>
              <h2 className="section-heading mt-4">
                Tekmetric First.
                <br />
                Vendor-Neutral Core.
              </h2>
              <p className="section-copy mt-5">
                Blind Teknologis is applying for Tekmetric API access as an active execution path —
                not a speculative partner grid. TekBox is designed as an intelligence layer that
                maps into shop systems through adapters, without embedding vendor-specific business
                logic in the core platform.
              </p>
              <p className="section-copy mt-4">
                Additional shop-system adapters will be evaluated after Tekmetric connectivity is
                proven. We do not list unverified partner logos or claim live integrations that are
                not yet operational.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/integrations/"
                  className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-red transition-colors hover:text-brand-red-strong"
                >
                  Integration Approach
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
                <a
                  href="mailto:api@blindteknologis.com"
                  className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-copy transition-colors hover:text-charcoal"
                >
                  api@blindteknologis.com
                </a>
              </div>
            </MotionReveal>
          </div>
        </section>

        <section id="contact" className="bg-[#1a1a1a] py-10 [scroll-margin-top:92px] sm:py-12">
          <div className="section-shell">
            <div className="relative overflow-hidden rounded-[10px] bg-charcoal px-6 py-14 text-center sm:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,39,38,0.22),transparent_28%),linear-gradient(135deg,rgba(26,26,26,0.96),rgba(26,26,26,0.82))]" />
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage: 'url(/images/hero-visual.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="relative mx-auto max-w-2xl">
                <MotionReveal>
                  <h2 className="font-display text-[2.7rem] leading-[0.95] font-semibold uppercase tracking-[0.01em] text-white sm:text-[3.6rem]">
                    Ready to Modernize
                    <br />
                    Your Shop?
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                    Request early access to follow TekBox development, or contact us about Tekmetric
                    and shop-system integration planning.
                  </p>
                  <Link
                    href="/request-early-access/"
                    className="pill-button mt-8 bg-brand-red text-white hover:bg-brand-red-strong"
                  >
                    Request Early Access
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </MotionReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
