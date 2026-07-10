'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
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
    <section className="relative min-h-[640px] overflow-hidden bg-charcoal lg:min-h-[700px]">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-4 lg:py-14 lg:pl-10 lg:pr-4">
        <motion.div
          className="z-10 max-w-[520px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-bold tracking-[0.22em] text-brand-red uppercase">
            Built for Shop Owners
          </p>
          <h1 className="font-display mt-3 text-[1.85rem] leading-[1.06] font-bold tracking-tight text-white uppercase sm:text-4xl lg:text-[2.7rem]">
            Stop Losing Jobs.
            <br />
            Start Maximizing
            <br />
            <span className="text-brand-red">Every Opportunity.</span>
          </h1>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-zinc-300">
            Our intelligent software helps repair shops save time, improve accuracy, recover
            missed revenue opportunities, and create a better customer experience.
          </p>

          <ul className="mt-5 space-y-2.5">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[13px] leading-snug text-zinc-300">
                <span className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <Check size={10} className="text-white" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-md bg-brand-red px-5 py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              See How It Works
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-500 bg-transparent px-5 py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:border-zinc-300 hover:bg-white/5"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 h-[360px] sm:h-[420px] lg:h-[500px]"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <HeroCar />
          <div className="relative z-10 h-full pt-0 pl-2 sm:pl-6 lg:pl-10">
            <DashboardPreview />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
