'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/site'

export function Header({ active = 'Home' }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <Link href="/" className="relative z-10 shrink-0" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={170}
            height={48}
            className="h-10 w-auto sm:h-[3rem]"
            priority
          />
        </Link>

        <nav
          className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 lg:flex"
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.label === active
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                  isActive ? 'text-brand-red' : 'text-zinc-700 hover:text-charcoal'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute right-0 -bottom-0.5 left-0 mx-auto h-0.5 w-full max-w-[24px] bg-brand-red" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/contact/"
            className="hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-[11px] font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover sm:inline-flex"
          >
            Request Early Access
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          <button
            type="button"
            className="inline-flex rounded-lg border border-zinc-200 p-2 text-charcoal lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-zinc-100 bg-white px-5 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.label === active
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-semibold tracking-wide uppercase ${
                      isActive ? 'bg-red-50 text-brand-red' : 'text-zinc-700 hover:bg-zinc-50'
                    }`}
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
        </nav>
      )}
    </header>
  )
}
