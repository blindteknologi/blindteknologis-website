'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { HERO_BULLETS } from '@/lib/site'

export function HomeHero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-charcoal text-white [scroll-margin-top:92px]"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: 'url(/images/hero-visual.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,20,20,0.96)_0%,rgba(20,20,20,0.9)_44%,rgba(20,20,20,0.72)_100%)]" />
        <div className="absolute inset-0 bg-black/22" />
        <div className="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.55)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,39,38,0.18),transparent_30%)]" />
      </div>

      <div className="section-shell relative py-8 sm:py-10 lg:py-12">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[36rem]"
        >
          <p className="eyebrow">Built for Shop Owners</p>
          <h1 className="font-display mt-3 text-[2.4rem] leading-[0.95] font-semibold uppercase tracking-[0.01em] sm:text-[3.1rem] lg:text-[3.55rem]">
            Stop Losing Jobs.
            <br />
            Start Maximizing
            <br />
            <span className="text-brand-red">Every Opportunity.</span>
          </h1>
          <p className="mt-4 max-w-xl text-[0.92rem] leading-7 text-white/76">
            Blind Teknologis builds TekBox — intelligence that sits on top of your shop systems to
            recover missed revenue, save advisor time, and deliver a clearer customer experience.
          </p>

          <ul className="mt-5 space-y-2.5">
            {HERO_BULLETS.map((bullet, index) => (
              <motion.li
                key={bullet}
                initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: reduceMotion ? 0 : 0.08 + index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-3 text-sm leading-6 text-white/78"
              >
                <CircleCheck size={16} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/request-early-access/"
              className="pill-button bg-brand-red text-white shadow-[0_18px_34px_rgba(226,39,38,0.2)] hover:bg-brand-red-strong"
            >
              See How It Works
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/products/"
              className="pill-button border border-white/16 bg-white/6 text-white backdrop-blur-sm hover:bg-white/10"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
