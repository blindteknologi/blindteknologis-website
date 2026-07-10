import Image from 'next/image'

export function HeroCar() {
  return (
    <div
      className="pointer-events-none absolute right-[-5%] bottom-[-8%] z-0 h-[90%] w-[110%] lg:right-[-2%] lg:bottom-[-10%] lg:h-[95%] lg:w-[105%]"
      aria-hidden="true"
    >
      <Image
        src="/images/hero-car.jpg"
        alt=""
        fill
        className="object-contain object-[right_bottom]"
        sizes="(max-width: 1024px) 100vw, 700px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#050505]/20 to-[#050505]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent" />
    </div>
  )
}
