import Image from 'next/image'
import { MotionReveal } from '@/components/MotionReveal'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-visual.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-[0.18]"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,39,38,0.22),transparent_34%),linear-gradient(110deg,rgba(20,20,20,0.94),rgba(20,20,20,0.82))]" />
      </div>

      <div className="section-shell relative py-18 sm:py-24">
        <MotionReveal className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display mt-4 text-[3.15rem] leading-[0.94] font-semibold uppercase tracking-[0.01em] sm:text-[4.4rem]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{description}</p>
        </MotionReveal>
      </div>
    </section>
  )
}
