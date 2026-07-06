import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" path="/terms" />
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated: July 6, 2026" />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-8 text-sm leading-relaxed text-white/50">
          <p>
            By accessing the Blind Teknologis website, you agree to these Terms of
            Service. If you do not agree, please do not use this site.
          </p>
          <div>
            <h2 className="text-lg font-medium text-white">Website use</h2>
            <p className="mt-3">
              Content on this website is provided for general information about Blind
              Teknologis and its services. Information may be updated from time to time.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">No warranties</h2>
            <p className="mt-3">
              This website and its content are provided on an &quot;as is&quot; basis
              without warranties of any kind, express or implied.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-white">Contact</h2>
            <p className="mt-3">
              Questions about these terms:{' '}
              <a
                className="text-white/80 transition-colors hover:text-white"
                href={`mailto:${CONTACT_EMAILS.info}`}
              >
                {CONTACT_EMAILS.info}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
