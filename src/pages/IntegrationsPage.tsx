import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { Button } from '../components/Button'

export function IntegrationsPage() {
  return (
    <>
      <SEO
        title="Integrations"
        path="/integrations"
        description="Blind Teknologis integration approach for modern cloud shop management systems."
      />
      <PageHeader
        eyebrow="Integrations"
        title="Built to work alongside your stack"
        description="Designed to integrate with modern cloud shop management systems using authorized APIs."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-zinc-400">
          <p>
            Blind Teknologis products are architected for interoperability. TekBox is intended to complement existing shop
            workflows by exchanging structured vehicle intelligence, maintenance context, and documentation support through
            secure, authorized interfaces.
          </p>
          <p>
            We do not claim existing production integrations with specific shop management vendors. Partnerships and
            technical connectors will be announced when they are verified and commercially available.
          </p>
          <p>
            If you operate a shop management platform or are evaluating integration options, contact our team to discuss
            API access and roadmap alignment.
          </p>
          <Button to="/contact" className="mt-4">Contact integrations team</Button>
        </div>
      </section>
    </>
  )
}
