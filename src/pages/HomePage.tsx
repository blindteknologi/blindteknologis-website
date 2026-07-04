import { Brain, GitBranch, Plug } from 'lucide-react'
import { Button } from '../components/Button'
import { SEO } from '../components/SEO'
import { assetUrl, SITE_TAGLINE, TEKBOX_REPO_URL } from '../lib/site'

const features = [
  {
    icon: Brain,
    title: 'Vehicle Intelligence',
    description:
      'Decode VIN data, maintenance context, and vehicle capabilities into structured intelligence advisors can trust.',
  },
  {
    icon: GitBranch,
    title: 'Workflow Intelligence',
    description:
      'Support consistent documentation, service recommendations, and shop communication without replacing your existing systems.',
  },
  {
    icon: Plug,
    title: 'Future Ready Integrations',
    description:
      'Designed to connect with modern cloud shop management platforms through authorized APIs as partnerships mature.',
  },
]

export function HomePage() {
  return (
    <>
      <SEO />

      <section className="relative overflow-hidden border-b border-zinc-800/60">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(63,63,70,0.35),_transparent_55%)]" />
        <div className="section-padding relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">{SITE_TAGLINE}</p>
              <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-gradient md:text-6xl">
                Intelligence for Modern Automotive Service
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Blind Teknologis develops intelligent software that transforms vehicle data into actionable insights,
                helping repair shops improve efficiency, consistency, documentation, and customer communication.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-500">
                Our software is designed to integrate alongside existing shop management systems rather than replace them.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/products">Explore TekBox</Button>
                <Button to="/contact" variant="secondary">Request Early Access</Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="surface-card flex w-full max-w-md flex-col items-center px-10 py-14 text-center">
                <img src={assetUrl('logo.png')} alt="Blind Teknologis" className="h-24 w-auto" />
                <p className="mt-6 text-sm leading-relaxed text-zinc-400">
                  Premium automotive intelligence built for service advisors, technicians, and shop operators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Built for clarity in the service bay</h2>
            <p className="mt-4 text-zinc-400">
              TekBox combines deterministic vehicle intelligence with practical workflow support for everyday shop operations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article key={title} className="surface-card p-8">
                <div className="mb-5 inline-flex rounded-xl border border-zinc-700/80 bg-zinc-900 p-3 text-zinc-200">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-medium text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-zinc-800/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-800 bg-zinc-900/30 px-8 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Flagship product</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">TekBox</h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Service advisor intelligence with VIN decoding, maintenance analysis, and capability evidence — in active development.
            </p>
          </div>
          <Button href={TEKBOX_REPO_URL} variant="secondary">View on GitHub</Button>
        </div>
      </section>
    </>
  )
}
