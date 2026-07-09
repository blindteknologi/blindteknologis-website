import { SEO } from '../components/SEO'
import { CONTACT_EMAIL } from '../lib/site'

export function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" path="/terms" />
      <section className="border-b border-border pt-28 pb-16 md:pt-36">
        <div className="section-pad mx-auto max-w-2xl !py-0">
          <h1 className="font-display text-4xl font-semibold text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-white/40">Last updated: July 9, 2026</p>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted">
            <p>
              By accessing the Blind Teknologis website, you agree to these Terms of Service.
            </p>
            <p>
              Content on this website is provided for general information about Blind Teknologis.
              Information may be updated from time to time.
            </p>
            <p>
              This website is provided on an &quot;as is&quot; basis without warranties of any kind.
            </p>
            <p>
              Questions:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-white hover:text-accent">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
