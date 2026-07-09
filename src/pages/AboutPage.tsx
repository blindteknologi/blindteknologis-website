import { SEO } from '../components/SEO'

export function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        path="/about"
        description="Blind Teknologis develops enterprise workflow automation software for automotive service businesses."
      />
      <section className="border-b border-border pt-28 pb-16 md:pt-36">
        <div className="section-pad mx-auto max-w-3xl !py-0">
          <p className="text-xs font-medium tracking-[0.25em] text-accent uppercase">About</p>
          <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Built for operators who demand more
          </h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted">
            <p>
              Blind Teknologis is an enterprise software company focused on workflow automation
              for the automotive service industry. We build infrastructure that helps businesses
              operate with greater efficiency, consistency, and control.
            </p>
            <p>
              Our work is grounded in a simple belief: skilled professionals should spend their
              time serving customers—not navigating repetitive administrative processes.
            </p>
            <p>
              We partner with a select group of organizations committed to modernizing how
              automotive service businesses run. If that describes your operation, we welcome
              the conversation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
