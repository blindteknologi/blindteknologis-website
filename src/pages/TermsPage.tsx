import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { CONTACT_EMAILS } from '../lib/site'

export function TermsPage() {
  return (
    <>
      <SEO title="Terms of Service" path="/terms" />
      <PageHeader eyebrow="Legal" title="Terms of Service" description="Last updated: July 4, 2026" />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-6 text-sm leading-relaxed text-zinc-400">
          <p>
            By accessing the Blind Teknologis website, you agree to these Terms of Service. If you do not agree, please do
            not use this site.
          </p>
          <h2 className="text-lg font-medium text-white">Website use</h2>
          <p>
            Content on this website is provided for general information about Blind Teknologis and its products. Product
            capabilities described here may change during development.
          </p>
          <h2 className="text-lg font-medium text-white">No warranties</h2>
          <p>
            This website and its content are provided on an &quot;as is&quot; basis without warranties of any kind, express or implied.
          </p>
          <h2 className="text-lg font-medium text-white">Contact</h2>
          <p>
            Questions about these terms: <a className="text-zinc-200 hover:text-white" href={`mailto:${CONTACT_EMAILS.info}`}>{CONTACT_EMAILS.info}</a>
          </p>
        </div>
      </section>
    </>
  )
}
