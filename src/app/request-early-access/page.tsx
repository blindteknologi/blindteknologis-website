import { CheckCircle2 } from 'lucide-react'
import { EarlyAccessForm } from '@/components/EarlyAccessForm'
import { MotionReveal } from '@/components/MotionReveal'
import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Request Early Access',
  description:
    'Request early access to Blind Teknologis and share how your shop wants to improve workflow, communication, and revenue recovery.',
  path: '/request-early-access/',
})

const benefits = [
  'Share the workflow pain points your shop wants to improve first.',
  'Tell the team which systems are already part of your daily operation.',
  'Start with the modules that best fit your current shop needs.',
] as const

export default function RequestEarlyAccessPage() {
  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Request Early Access"
          title="Bring Blind Teknologis Into Your Shop Planning"
          description="Early access conversations are focused on how your operation works today, where time is being lost, and which revenue and communication gaps matter most to solve first."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell grid gap-12 lg:grid-cols-[430px_minmax(0,1fr)] lg:items-start">
            <MotionReveal>
              <p className="eyebrow">What to Expect</p>
              <h2 className="section-heading mt-4">A Focused Conversation Around Shop Fit</h2>
              <p className="section-copy mt-5">
                The goal is not a generic software demo. It is a practical conversation about your
                current operation, how your team communicates, and where stronger intelligence could
                save time or recover missed work.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm leading-6 text-copy-dark">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </MotionReveal>

            <MotionReveal delay={0.08}>
              <EarlyAccessForm />
            </MotionReveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
