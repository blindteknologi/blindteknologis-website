import Image from 'next/image'

export function HeroVisual() {
  return (
    <div className="relative h-full w-full" aria-hidden="true">
      <Image
        src="/images/hero-visual.png"
        alt="Automotive AI software dashboard with wireframe vehicle diagnostics"
        fill
        className="object-contain object-center lg:object-right"
        sizes="(max-width: 1024px) 100vw, 640px"
        priority
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-hero/80 via-hero/20 to-transparent lg:from-hero/60 lg:via-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-hero/50 via-transparent to-transparent" />
    </div>
  )
}
