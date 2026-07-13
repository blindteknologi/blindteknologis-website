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
    <section className="bg-white">
      <div className="section-shell py-6 sm:py-8 lg:py-10">
        <div className="relative isolate overflow-hidden rounded-[10px] bg-charcoal text-white">
          <div className="absolute inset-0" aria-hidden="true">
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

          <div className="relative px-6 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <MotionReveal className="max-w-3xl">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="font-display mt-4 text-[3.15rem] leading-[0.94] font-semibold uppercase tracking-[0.01em] sm:text-[4.4rem]">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">{description}</p>
            </MotionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
