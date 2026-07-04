import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'

export function AboutPage() {
  return (
    <>
      <SEO title="About" path="/about" description="About Blind Teknologis — automotive intelligence software for modern repair shops." />
      <PageHeader
        eyebrow="About"
        title="Software for shops that value precision"
        description="Blind Teknologis builds intelligent tools that help automotive service teams work with clearer vehicle context, better documentation, and more consistent customer communication."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-zinc-400">
          <p>
            We focus on transforming raw vehicle and service data into structured intelligence that advisors and technicians
            can use throughout the repair order workflow.
          </p>
          <p>
            Our approach is vendor-neutral and evidence-driven. When information is unknown, we preserve uncertainty rather
            than inventing confidence. That discipline keeps recommendations trustworthy in real shop environments.
          </p>
          <p>
            TekBox is our flagship platform, designed to complement existing shop management systems instead of forcing a
            rip-and-replace migration.
          </p>
        </div>
      </section>
    </>
  )
}
