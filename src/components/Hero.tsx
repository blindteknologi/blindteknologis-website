'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { HeroBackground } from '@/components/HeroBackground'
import { DashboardPreview } from '@/components/DashboardPreview'
import { AnimateOnMount } from '@/components/AnimateOnMount'

const bullets = [
  'Recover missed revenue from every repair order',
  'Save multiple hours per advisor every single day',
  'Reduce comebacks with smarter repair context',
  'Deliver better experiences that keep customers coming back',
]

export function Hero() {
  return (
    <section
      className="relative min-h-[760px] overflow-hidden bg-hero lg:min-h-[820px]"
      aria-label="Hero"
    >
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-8 lg:py-20 lg:pl-10 lg:pr-8">
        {/* Left: text content */}
        <AnimateOnMount className="z-10">
          <p className="text-[11px] font-bold tracking-[0.24em] text-brand-red uppercase">
            Built for Shop Owners &amp; Advisors
          </p>
          <h1 className="font-display mt-5 text-[2.1rem] leading-[1.06] font-bold tracking-tight text-white uppercase sm:text-[2.65rem] lg:text-[3rem]">
            Stop Losing Jobs.
            <br />
            Start Maximizing
            <br />
            <span className="text-brand-red">Every Opportunity.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-zinc-300">
            Blind Teknologis uses AI to transform automotive repair shops — saving time, improving
            accuracy, and turning every repair into a better customer experience and a stronger
            bottom line.
          </p>

          <ul className="mt-7 space-y-3.5" aria-label="Key benefits">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[14px] leading-snug text-zinc-300"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-red"
                  aria-hidden="true"
                >
                  <Check size={11} className="text-brand-red" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase transition-all hover:bg-brand-red-hover hover:shadow-lg hover:shadow-brand-red/25"
            >
              See How It Works
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-500 bg-white/5 px-7 py-3.5 text-[11px] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur-sm transition-all hover:border-zinc-300 hover:bg-white/10"
            >
              Explore Features
            </Link>
          </div>
        </AnimateOnMount>

        {/* Right: dashboard visual */}
        <AnimateOnMount
          delay={1}
          className="relative z-10 h-[320px] sm:h-[380px] lg:h-[480px]"
        >
          <DashboardPreview />
        </AnimateOnMount>
      </div>
    </section>
  )
}
