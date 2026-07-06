const outcomes = [
  {
    title: 'Sub-Second Processing',
    description:
      'Background automation executes complex workflow operations with minimal latency, keeping your platform responsive while infrastructure handles the heavy lifting behind the scenes.',
  },
  {
    title: 'Operational Consistency',
    description:
      'Reduce administrative burden across your organization. Standardized workflows improve advisor efficiency and ensure every location delivers the same premium experience.',
  },
  {
    title: 'Enterprise Integration',
    description:
      'Add new premium capabilities alongside existing shop management platforms without disrupting established workflows. Your teams keep the tools they trust.',
  },
]

export function OutcomesSection() {
  return (
    <section id="outcomes" className="border-b border-border">
      <div className="section-pad mx-auto max-w-7xl">
        <div className="mb-16 max-w-xl">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">
            Business Outcomes
          </p>
          <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Infrastructure that delivers
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {outcomes.map((item, i) => (
            <article
              key={item.title}
              className="panel group rounded-2xl p-8 transition-colors duration-300 hover:border-white/14 md:p-10"
            >
              <span className="font-display text-sm font-medium text-accent/80">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
