import { Button } from '../components/Button'
import { HeroVisualization } from '../components/HeroVisualization'
import { SEO } from '../components/SEO'
import { SITE_DESCRIPTION } from '../lib/site'

const outcomes = [
  {
    title: 'Save Hours Every Day',
    description: 'Eliminate repetitive administrative work.',
  },
  {
    title: 'Consistency At Scale',
    description:
      'Create repeatable processes that deliver the same customer experience every time.',
  },
  {
    title: 'Never Miss Opportunities',
    description:
      'Reduce missed inspections, forgotten follow-ups, and inconsistent workflows.',
  },
  {
    title: 'Built To Grow',
    description:
      'Modern software that scales with your business without increasing administrative overhead.',
  },
]

export function HomePage() {
  return (
    <>
      <SEO />

      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgb(215_25_32/0.08),transparent)]" />

        <div className="section-padding relative mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h1 className="text-5xl font-semibold tracking-tight text-gradient md:text-6xl md:leading-[1.08] lg:text-7xl">
                Automotive Service.
                <br />
                <span className="text-white">Automated.</span>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/50">
                {SITE_DESCRIPTION}
              </p>
              <div className="mt-10">
                <Button to="/contact">Get in Touch</Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <HeroVisualization />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-xl">
            <div className="accent-line mb-6" />
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Outcomes that matter
            </h2>
            <p className="mt-4 text-white/45">
              Software designed around how your business actually operates.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {outcomes.map((item, index) => (
              <article
                key={item.title}
                className="bg-panel p-10 transition-colors duration-300 hover:bg-[#141414] md:p-12"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-accent/80">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-xl font-medium tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="glass-panel rounded-2xl p-10 md:flex md:items-center md:justify-between md:p-14">
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Serious software for serious operators.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/45">
                We partner with automotive service businesses ready to modernize how they
                work.
              </p>
            </div>
            <Button to="/contact" variant="secondary" className="mt-8 shrink-0 md:mt-0">
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
