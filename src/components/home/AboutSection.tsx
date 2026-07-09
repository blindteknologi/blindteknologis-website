export function AboutSection() {
  return (
    <section id="about" className="border-b border-border">
      <div className="section-pad mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">About</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white uppercase md:text-4xl">
          Built by operators, for operators
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            Blind Teknologis is built by people who understand the shop floor—service advisors,
            technicians, and the operational realities of running a modern automotive service
            business.
          </p>
          <p>
            We know that success comes from skilled professionals, not paperwork. Every hour
            spent on repetitive administrative work is an hour not spent serving customers.
          </p>
          <p>
            Our software exists to remove those obstacles. We build enterprise workflow
            automation that lets businesses operate with greater efficiency, consistency, and
            control—so teams can focus on what they do best.
          </p>
        </div>
      </div>
    </section>
  )
}
