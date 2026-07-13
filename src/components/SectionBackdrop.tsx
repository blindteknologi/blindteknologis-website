import Image from 'next/image'

type SectionBackdropProps = {
  /** Dark charcoal overlay strength for light copy on dark sections */
  tone?: 'dark' | 'light'
}

/** Reuses the homepage hero visual as a constrained section background. */
export function SectionBackdrop({ tone = 'dark' }: SectionBackdropProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Image
        src="/images/hero-visual.png"
        alt=""
        fill
        className="object-cover object-[72%_center] opacity-[0.22]"
        sizes="100vw"
      />
      {tone === 'dark' ? (
        <>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.94)_0%,rgba(20,20,20,0.88)_50%,rgba(20,20,20,0.82)_100%)]" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,39,38,0.14),transparent_32%)]" />
        </>
      ) : (
        <div className="absolute inset-0 bg-white/88" />
      )}
    </div>
  )
}
