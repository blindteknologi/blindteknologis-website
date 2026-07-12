'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/site'

export function Header({ active = 'Home' }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 shadow-[0_1px_3px_rgba(0,0,0,0.06)] backdrop-blur-sm">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        {/* Logo in rounded black container */}
        <Link href="/" className="relative z-10 shrink-0" onClick={() => setMenuOpen(false)}>
          <div className="rounded-2xl bg-black px-3 py-2 sm:px-4 sm:py-2.5">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={240}
              height={72}
              className="h-10 w-auto object-contain sm:h-11"
              priority
            />
          </div>
        </Link>

        {/* Centered desktop nav */}
        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.label === active
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1.5 text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors ${
                  isActive ? 'text-brand-red' : 'text-zinc-600 hover:text-charcoal'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute right-0 -bottom-0 left-0 mx-auto h-0.5 w-full max-w-[28px] rounded-full bg-brand-red" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase transition-all hover:bg-brand-red-hover hover:shadow-md hover:shadow-brand-red/25 sm:inline-flex"
          >
            Request Early Access
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="inline-flex rounded-lg border border-zinc-200 p-2 text-charcoal transition-colors hover:bg-zinc-50 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-zinc-100 bg-white lg:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1 px-5 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = link.label === active
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-semibold tracking-wide uppercase transition-colors ${
                        isActive ? 'bg-red-50 text-brand-red' : 'text-zinc-700 hover:bg-zinc-50'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-4 py-3 text-xs font-semibold tracking-wide text-white uppercase"
                  onClick={() => setMenuOpen(false)}
                >
                  Request Early Access
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
