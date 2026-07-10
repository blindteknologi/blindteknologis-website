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

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:py-20 lg:pl-10 lg:pr-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="text-xs font-bold tracking-[0.2em] text-brand-red uppercase">
            Built for Shop Owners
          </p>
          <h1 className="font-display mt-4 text-3xl leading-[1.08] font-bold tracking-tight text-white uppercase sm:text-4xl lg:text-[2.65rem]">
            Stop Losing Jobs.
            <br />
            Start Maximizing
            <br />
            <span className="text-brand-red">Every Opportunity.</span>
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-zinc-300 sm:text-base">
            Our intelligent software helps repair shops save time, improve accuracy, recover
            missed revenue opportunities, and create a better customer experience.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red">
                  <Check size={12} className="text-white" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-red px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover"
            >
              See How It Works
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/products/"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-500 px-6 py-3 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:border-zinc-300 hover:bg-white/5"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative lg:justify-self-end"
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
