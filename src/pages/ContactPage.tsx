import { Mail, MapPin } from 'lucide-react'
import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

const contacts = [
  { label: 'General', email: CONTACT_EMAILS.info },
  { label: 'Support', email: CONTACT_EMAILS.support },
  { label: 'Sales', email: CONTACT_EMAILS.sales },
  { label: 'API', email: CONTACT_EMAILS.api },
  { label: 'Privacy', email: CONTACT_EMAILS.privacy },
]

export function ContactPage() {
  return (
    <>
      <SEO title="Contact" path="/contact" description="Contact Blind Teknologis." />
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Reach the Blind Teknologis team for product questions, early access, integrations, or privacy inquiries."
      />

      <section className="section-padding">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="surface-card p-8">
            <h2 className="text-lg font-medium text-white">Email</h2>
            <ul className="mt-6 space-y-4">
              {contacts.map((item) => (
                <li key={item.email} className="flex items-start gap-3 text-sm">
                  <Mail size={16} className="mt-0.5 text-zinc-500" />
                  <div>
                    <p className="text-zinc-500">{item.label}</p>
                    <a href={`mailto:${item.email}`} className="text-zinc-200 hover:text-white">
                      {item.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-8">
            <h2 className="text-lg font-medium text-white">Location</h2>
            <div className="mt-6 flex items-start gap-3 text-sm text-zinc-300">
              <MapPin size={16} className="mt-0.5 text-zinc-500" />
              <p>United States</p>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-zinc-500">
              For early access requests, include your shop name, management system, and the workflows you want to improve.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
