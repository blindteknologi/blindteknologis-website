import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Contact Blind Teknologis for enterprise partnership inquiries."
      />
      <section className="section-pad mx-auto max-w-2xl">
        <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">Contact</p>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white">
          Get in touch
        </h1>
        <p className="mt-6 text-text-secondary">
          For enterprise partnership inquiries, contact our team directly.
        </p>
        <div className="panel mt-10 rounded-2xl p-8">
          <p className="text-xs tracking-wider text-text-secondary uppercase">General Inquiries</p>
          <a
            href={`mailto:${CONTACT_EMAILS.info}`}
            className="mt-2 inline-block text-white transition-colors hover:text-accent"
          >
            {CONTACT_EMAILS.info}
          </a>
          <p className="mt-8 text-xs tracking-wider text-text-secondary uppercase">United States</p>
        </div>
      </section>
    </>
  )
}
