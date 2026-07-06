import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" />
      <section className="section-pad mx-auto max-w-2xl">
        <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">Legal</p>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/40">Last updated: July 6, 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-text-secondary">
          <p>
            Blind Teknologis respects your privacy. This policy describes how we handle
            information when you visit our website or submit an enterprise access request.
          </p>
          <p>
            We may collect information you voluntarily provide, including your name, corporate
            email address, company name, and message content. We do not sell personal
            information.
          </p>
          <p>
            Privacy inquiries:{' '}
            <a href={`mailto:${CONTACT_EMAILS.privacy}`} className="text-white hover:text-accent">
              {CONTACT_EMAILS.privacy}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
