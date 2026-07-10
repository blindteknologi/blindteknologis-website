import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: 'url(/images/metallic-textures.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl leading-[1.1] font-bold tracking-tight text-white uppercase sm:text-4xl">
          Ready to Modernize
          <br />
          Your Shop?
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-zinc-400">
          Join the shops using Blind Teknologis to recover revenue, save time, and deliver
          experiences that keep customers coming back.
        </p>
        <Link
          href="/contact/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-[11px] font-semibold tracking-[0.14em] text-white uppercase transition-all hover:bg-brand-red-hover hover:shadow-lg hover:shadow-brand-red/30"
        >
          Request Early Access
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
