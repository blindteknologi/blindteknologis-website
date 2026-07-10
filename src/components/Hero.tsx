'use client'

import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { HeroBackground } from '@/components/HeroBackground'
import { HeroCar } from '@/components/HeroCar'
import { DashboardPreview } from '@/components/DashboardPreview'

const bullets = [
  'Identify missed opportunities and boost revenue',
  'Save multiple hours per advisor, every day',
  'Improve accuracy and reduce comebacks',
  'Deliver better customer experiences that keep customers coming back',
]

export function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-charcoal lg:min-h-[780px]">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,520px)_1fr] lg:gap-6 lg:py-16 lg:pl-10 lg:pr-6">
        <div className="z-10">
          <p className="text-[11px] font-bold tracking-[0.22em] text-brand-red uppercase">
            Built for Shop Owners
          </p>
          <h1 className="font-display mt-4 text-[2rem] leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-[2.5rem] lg:text-[2.85rem]">
            Stop Losing Jobs.
            <br />
            Start Maximizing{' '}
            <span className="text-brand-red">Every Opportunity.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-zinc-300">
            Our intelligent software helps auto repair shops save time, improve accuracy, and turn
            every repair into a better customer experience—and a stronger bottom line.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] leading-snug text-zinc-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-brand-red">
                  <Check size={11} className="text-brand-red" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              See How It Works
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-400 bg-transparent px-6 py-3 text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:border-white hover:bg-white/5"
            >
              Explore Features
            </Link>
          </div>
        </div>

        <div className="relative z-10 h-[380px] sm:h-[440px] lg:h-[540px]">
          <HeroCar />
          <div className="relative z-10 flex h-full items-center justify-end pr-0 lg:pr-2">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
