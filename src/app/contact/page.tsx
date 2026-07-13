import { Mail, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { MotionReveal } from '@/components/MotionReveal'
import { PageHero } from '@/components/PageHero'
import { SiteFooter } from '@/components/SiteFooter'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteShell } from '@/components/SiteShell'
import { CONTACT_EMAILS, buildMetadata } from '@/lib/site'

export const metadata = buildMetadata({
  title: 'Contact',
  description:
    'Contact Blind Teknologis for general questions, early access discussions, or integration planning.',
  path: '/contact/',
})

export default function ContactPage() {
  const contactCards = [
    { label: 'General', value: CONTACT_EMAILS.general, icon: Mail },
    { label: 'Sales', value: CONTACT_EMAILS.sales, icon: Mail },
    { label: 'API', value: CONTACT_EMAILS.api, icon: Mail },
    { label: 'Support', value: CONTACT_EMAILS.support, icon: Mail },
    { label: 'Privacy', value: CONTACT_EMAILS.privacy, icon: Mail },
    { label: 'Location', value: 'United States', icon: MapPin },
  ] as const

  return (
    <SiteShell>
      <SiteHeader />
      <main id="main-content">
        <PageHero
          eyebrow="Contact"
          title="Talk With the Blind Teknologis Team"
          description="Whether you want to discuss early access, system fit, or where Blind Teknologis could help your operation first, this page routes the conversation to the right place."
        />

        <section className="bg-white py-18 sm:py-24">
          <div className="section-shell">
            <MotionReveal className="mb-10 max-w-2xl">
              <h2 className="section-heading">Start the Right Conversation</h2>
              <p className="section-copy mt-5">
                Use the form below to open a pre-addressed message to the right team. If you prefer
                direct email, the core addresses are also listed here.
              </p>
            </MotionReveal>

            <ContactForm />
          </div>
        </section>

        <section className="bg-surface py-18 sm:py-24">
          <div className="section-shell grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {contactCards.map((card, index) => (
              <MotionReveal key={card.label} delay={index * 0.05}>
                <article className="rounded-[18px] bg-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-red/18 bg-red-50 text-brand-red">
                    <card.icon size={18} aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-brand-red">
                    {card.label}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-copy-dark">{card.value}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </SiteShell>
  )
}
