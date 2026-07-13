import Link from 'next/link'
import { ArrowRight, Building2, ClipboardCheck, MessagesSquare, ShieldCheck } from 'lucide-react'
import { MotionReveal } from '@/components/MotionReveal'
import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'About',
  description:
    'Blind Teknologis builds TekBox — a knowledge platform that increases the intelligence of automotive repair shop operations.',
  path: '/about/',
})

const principles = [
  {
    icon: ClipboardCheck,
    title: 'Operational Clarity',
    copy: 'Repair teams make better decisions when vehicle and service context is easier to find and easier to trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Honest Uncertainty',
    copy: 'When a fact is unverified, TekBox says UNKNOWN. We do not invent automotive certainty for marketing or product convenience.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear Communication',
    copy: 'Customer experience improves when recommendations and findings are easier to explain without extra manual work.',
  },
  {
    icon: Building2,
    title: 'Vendor-Neutral Core',
    copy: 'TekBox sits on top of shop systems through adapters. We do not replace your SMS — we make it more intelligent.',
  },
] as const

export default function AboutPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="About Us"
          title="Built for the Real Pace of Service Operations"
          description="Blind Teknologis is focused on the day-to-day realities that shape shop performance: missed opportunities, manual process work, inconsistent communication, and the need to move faster without sacrificing customer trust."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell max-w-3xl">
            <MotionReveal>
              <h2 className="section-heading">Why This Work Matters</h2>
              <p className="section-copy mt-5">
                Service teams already know what great customer care looks like. The challenge is
                creating enough time, context, and consistency to deliver it during a busy day.
                Blind Teknologis exists to support that gap through TekBox — a knowledge platform
                for service advisors.
              </p>
              <p className="section-copy mt-4">
                Instead of asking shops to change everything about how they operate, the goal is to
                help existing workflows become clearer, more efficient, and easier to scale — with
                provenance-backed vehicle intelligence and honest data gaps.
              </p>
            </MotionReveal>
          </div>
        </section>

        <section className="bg-surface py-18 sm:py-24">
          <div className="section-shell">
            <MotionReveal className="max-w-2xl">
              <p className="eyebrow">Principles</p>
              <h2 className="section-heading mt-4">What Guides the Product</h2>
            </MotionReveal>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle, index) => (
                <MotionReveal key={principle.title} delay={index * 0.05}>
                  <article className="h-full rounded-[18px] bg-white p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-red/18 bg-red-50 text-brand-red">
                      <principle.icon size={18} aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-charcoal">
                      {principle.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-copy">{principle.copy}</p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell">
            <MotionReveal className="max-w-2xl">
              <p className="eyebrow">Who We Build For</p>
              <h2 className="section-heading mt-4">Shops That Want Better Flow Without More Friction</h2>
              <p className="section-copy mt-5">
                Blind Teknologis is designed for independent repair shops, dealership service
                departments, and multi-location operations that want stronger process consistency,
                clearer communication, and more reliable revenue follow-through — without replacing
                the shop management system they already trust.
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
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
