import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'
import { Button } from '../components/Button'
import { TEKBOX_REPO_URL } from '../lib/site'

const capabilities = [
  {
    title: 'VIN Intelligence',
    description: 'Decode vehicle identity and context to ground every service conversation in accurate vehicle data.',
  },
  {
    title: 'Maintenance Intelligence',
    description: 'Evaluate maintenance timelines and due status using structured rules and service history when available.',
  },
  {
    title: 'Capability Engine',
    description: 'Surface what is known — and unknown — about vehicle service capabilities with transparent provenance.',
  },
  {
    title: 'Evidence Engine',
    description: 'Ingest and validate capability evidence from structured sources to improve confidence over time.',
  },
  {
    title: 'Vehicle Intelligence',
    description: 'Combine decoded vehicle signals, maintenance state, and capability context into advisor-ready reports.',
  },
  {
    title: 'AI-assisted documentation',
    description: 'Support clearer customer-facing documentation while keeping deterministic vehicle intelligence at the core.',
  },
  {
    title: 'Future OEM integrations',
    description: 'Architecture prepared for authorized OEM data sources as partnerships and verified datasets expand.',
  },
]

export function ProductsPage() {
  return (
    <>
      <SEO
        title="Products"
        path="/products"
        description="TekBox — automotive intelligence platform with VIN, maintenance, capability, and evidence engines."
      />
      <PageHeader
        eyebrow="Products"
        title="TekBox"
        description="An automotive intelligence platform in active development. TekBox helps service teams understand vehicles more clearly and document service with greater consistency."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-zinc-400">
              TekBox is built for repair shops that want better vehicle context without replacing their shop management
              system. The platform emphasizes deterministic intelligence, transparent unknowns, and practical advisor workflows.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="surface-card p-7">
                <h2 className="text-lg font-medium text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Button href={TEKBOX_REPO_URL} variant="secondary">Explore TekBox repository</Button>
          </div>
        </div>
      </section>
    </>
  )
}
