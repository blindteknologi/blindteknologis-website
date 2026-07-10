import Image from 'next/image'

export function HeroCar() {
  return (
    <div
      className="pointer-events-none absolute right-[-8%] bottom-[-6%] z-0 h-[92%] w-[115%] lg:right-[-4%] lg:bottom-[-8%] lg:h-[98%] lg:w-[108%]"
      aria-hidden="true"
    >
      <Image
        src="/images/hero-car.jpg"
        alt=""
        fill
        className="object-contain object-[right_bottom]"
        sizes="(max-width: 1024px) 100vw, 720px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-hero/15 to-hero/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-hero/60 via-transparent to-transparent" />
    </div>
  )
}
