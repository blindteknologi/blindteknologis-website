import { PageHeader } from '../components/PageHeader'
import { SEO } from '../components/SEO'

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Blind Teknologis exists to modernize automotive service — reducing administrative burden so teams can focus on customers."
      />
      <PageHeader
        eyebrow="About"
        title="Why we exist"
        description="Automotive service deserves enterprise-grade software. We build it."
      />

      <section className="section-padding">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-[1.8] text-white/50">
          <p>
            Blind Teknologis was founded on a simple observation: automotive service
            businesses run on people — skilled professionals who want to help customers,
            not manage paperwork.
          </p>
          <p>
            Yet too much of the day is spent on repetitive administrative work. Follow-ups
            get missed. Processes vary from location to location. Growth adds complexity
            faster than it adds capacity.
          </p>
          <p>
            We exist to change that. Our mission is to modernize automotive service
            through intelligent workflow software — automation, consistency, and
            business processes that work as hard as the people behind them.
          </p>
          <p>
            The result is more time with customers, fewer dropped balls, and operations
            that scale without proportional overhead. That is the standard we hold
            ourselves to.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-panel/40">
        <div className="section-padding mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                title: 'Modernize',
                text: 'Bring automotive service operations into the same standard of software excellence found in other industries.',
              },
              {
                title: 'Automate',
                text: 'Remove the repetitive work that consumes hours and drains energy from your team every day.',
              },
              {
                title: 'Elevate',
                text: 'Free your people to do what they do best — serve customers with skill, care, and consistency.',
              },
            ].map((item) => (
              <div key={item.title}>
                <div className="accent-line mb-5" />
                <h2 className="text-lg font-medium text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
