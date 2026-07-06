import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

const contacts = [
  { label: 'General Inquiries', email: CONTACT_EMAILS.info },
  { label: 'Support', email: CONTACT_EMAILS.support },
  { label: 'Sales', email: CONTACT_EMAILS.sales },
  { label: 'Privacy', email: CONTACT_EMAILS.privacy },
]

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Contact Blind Teknologis for inquiries about our enterprise software for automotive service."
      />
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="We welcome conversations with automotive service businesses exploring a better way to operate."
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="glass-panel rounded-2xl p-10">
            <h2 className="text-lg font-medium text-white">Email</h2>
            <ul className="mt-8 space-y-6">
              {contacts.map((item) => (
                <li key={item.email}>
                  <p className="text-xs tracking-wide text-white/35 uppercase">
                    {item.label}
                  </p>
                  <a
                    href={`mailto:${item.email}`}
                    className="mt-1 inline-block text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-10">
            <h2 className="text-lg font-medium text-white">Location</h2>
            <p className="mt-8 text-sm text-white/60">United States</p>
            <p className="mt-10 text-sm leading-relaxed text-white/40">
              Include your company name and a brief description of your operation when
              reaching out. We respond to every inquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
