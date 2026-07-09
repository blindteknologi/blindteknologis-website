import { SEO } from '../components/SEO'
import { PRIVACY_EMAIL } from '../lib/site'

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy" path="/privacy" />
      <section className="border-b border-border pt-28 pb-16 md:pt-36">
        <div className="section-pad mx-auto max-w-2xl !py-0">
          <h1 className="font-display text-4xl font-semibold text-white">Privacy Policy</h1>
          <p className="mt-2 text-sm text-white/40">Last updated: July 9, 2026</p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
            <p>
              Blind Teknologis respects your privacy. This policy describes how we handle
              information when you visit our website or contact us.
            </p>
            <p>
              We may collect information you voluntarily provide, such as your name, email
              address, and company name. We do not sell personal information.
            </p>
            <p>
              Privacy inquiries:{' '}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-white hover:text-accent">
                {PRIVACY_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
