'use client'

import Link from 'next/link'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { HERO_BULLETS } from '@/lib/site'

export function HomeHero() {
  return (
    <section id="top" className="bg-white [scroll-margin-top:92px]">
      <div className="section-shell py-6 sm:py-8 lg:py-10">
        <div className="relative isolate overflow-hidden rounded-[10px] bg-charcoal text-white">
          <div className="absolute inset-0" aria-hidden="true">
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

          <div className="relative px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="max-w-[36rem]">
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
                {HERO_BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-sm leading-6 text-white/78"
                  >
                    <CircleCheck
                      size={16}
                      className="mt-1 shrink-0 text-brand-red"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
