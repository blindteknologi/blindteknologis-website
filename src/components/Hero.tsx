'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { HeroBackground } from '@/components/HeroBackground'
import { DashboardPreview } from '@/components/DashboardPreview'

const bullets = [
  'Identify missed opportunities and boost revenue',
  'Save multiple hours per advisor, every day',
  'Improve accuracy and reduce comebacks',
  'Deliver better customer experiences that keep customers coming back',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-6 lg:py-16 lg:pl-10 lg:pr-6">
        <motion.div
          className="z-10 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-[11px] font-bold tracking-[0.22em] text-brand-red uppercase">
            Built for Shop Owners
          </p>
          <h1 className="font-display mt-3 text-[2rem] leading-[1.05] font-bold tracking-tight text-white uppercase sm:text-4xl lg:text-[2.75rem]">
            Stop Losing Jobs.
            <br />
            Start Maximizing
            <br />
            <span className="text-brand-red">Every Opportunity.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
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
          className="relative z-10 lg:-mr-6 lg:justify-self-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  )
}
