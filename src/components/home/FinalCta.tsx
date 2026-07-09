import { Button } from '../ui/Button'

export function FinalCta() {
  return (
    <section className="border-b border-border">
      <div className="section-pad mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Ready to Modernize Automotive Service?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted">
          Blind Teknologis is currently working with a limited number of strategic partners
          interested in modern workflow automation for automotive service operations.
        </p>
        <Button to="/contact" className="mt-10">
          Request Early Access
        </Button>
      </div>
    </section>
  )
}
