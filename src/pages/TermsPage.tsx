import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" path="/terms" />
      <section className="section-pad mx-auto max-w-2xl">
        <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">Legal</p>
        <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-white/40">Last updated: July 6, 2026</p>
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-text-secondary">
          <p>
            By accessing the Blind Teknologis website, you agree to these Terms of Service.
          </p>
          <p>
            Content on this website is provided for general information about Blind Teknologis
            and its enterprise services. Information may be updated from time to time.
          </p>
          <p>
            This website and its content are provided on an &quot;as is&quot; basis without
            warranties of any kind.
          </p>
          <p>
            Questions:{' '}
            <a href={`mailto:${CONTACT_EMAILS.info}`} className="text-white hover:text-accent">
              {CONTACT_EMAILS.info}
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
