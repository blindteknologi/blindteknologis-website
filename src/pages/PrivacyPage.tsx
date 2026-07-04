import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" />
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: July 4, 2026" />

      <section className="section-padding">
        <div className="prose prose-invert mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-zinc-400">
          <p>
            Blind Teknologis respects your privacy. This policy describes how we handle information when you visit our
            website or contact us about our products and services.
          </p>
          <h2 className="text-lg font-medium text-white">Information we collect</h2>
          <p>
            We may collect information you voluntarily provide, such as your name, email address, company name, and message
            content when you contact us. We may also collect standard website analytics such as browser type, pages visited,
            and referral source.
          </p>
          <h2 className="text-lg font-medium text-white">How we use information</h2>
          <p>
            We use contact information to respond to inquiries, evaluate early access requests, improve our products, and
            communicate about services you request. We do not sell personal information.
          </p>
          <h2 className="text-lg font-medium text-white">Contact</h2>
          <p>
            Privacy questions: <a className="text-zinc-200 hover:text-white" href={`mailto:${CONTACT_EMAILS.privacy}`}>{CONTACT_EMAILS.privacy}</a>
          </p>
        </div>
      </section>
    </>
  )
}
