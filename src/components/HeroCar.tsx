import Image from 'next/image'

export function HeroCar() {
  return (
    <div
      className="pointer-events-none absolute right-[-12%] bottom-[-10%] z-0 h-[80%] w-full opacity-95 lg:right-[-6%] lg:bottom-[-12%] lg:h-[85%]"
      aria-hidden="true"
    >
      <Image
        src="/images/hero-car.jpg"
        alt=""
        fill
        className="object-contain object-right-bottom"
        sizes="(max-width: 1024px) 90vw, 600px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#060606]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060606]/40 via-transparent to-transparent" />
    </div>
  )
}
