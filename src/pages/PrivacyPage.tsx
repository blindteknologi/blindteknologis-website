import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" />
      <PageHeader eyebrow="Legal" title="Privacy Policy" description="Last updated: July 6, 2026" />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-white/50">
          <p>
            Blind Teknologis respects your privacy. This policy describes how we handle
            information when you visit our website or contact us.
          </p>
          <div>
            <h2 className="text-lg font-medium text-white">Information we collect</h2>
            <p className="mt-3">
              We may collect information you voluntarily provide, such as your name, email
              address, company name, and message content when you contact us. We may also
              collect standard website analytics such as browser type, pages visited, and
              referral source.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">How we use information</h2>
            <p className="mt-3">
              We use contact information to respond to inquiries and communicate about
              services you request. We do not sell personal information.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">Contact</h2>
            <p className="mt-3">
              Privacy questions:{' '}
              <a
                className="text-white/80 transition-colors hover:text-white"
                href={`mailto:${CONTACT_EMAILS.privacy}`}
              >
                {CONTACT_EMAILS.privacy}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
