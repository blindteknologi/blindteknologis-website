'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Menu, X } from 'lucide-react'
import { NAV_ITEMS, SITE_NAME } from '@/lib/site'

function isActive(pathname: string, pageHref: string) {
  if (pageHref === '/') {
    return pathname === '/'
  }

  return pathname.startsWith(pageHref.replace(/\/$/, ''))
}

export function SiteHeader() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const onHome = pathname === '/'

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/92 backdrop-blur-md">
      <div className="section-shell relative flex h-[104px] items-center justify-between sm:h-[112px]">
        <Link
          href="/"
          aria-label={`${SITE_NAME} home`}
          className="relative z-10 shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt={SITE_NAME}
            width={300}
            height={90}
            priority
            className="h-[60px] w-auto sm:h-[66px] lg:h-[72px]"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-10 xl:gap-12 lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const href = onHome ? item.homeHref : item.pageHref
            const active = isActive(pathname, item.pageHref)

            return (
              <Link
                key={item.label}
                href={href}
                className={`relative pb-1 text-[0.82rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  active ? 'text-brand-red' : 'text-copy-dark hover:text-charcoal'
                }`}
              >
                {item.label}
                {active ? (
                  <span className="absolute inset-x-0 -bottom-[14px] mx-auto h-0.5 w-8 rounded-full bg-brand-red" />
                ) : null}
              </Link>
            )
          })}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/request-early-access/"
            className="pill-button hidden bg-brand-red text-white shadow-[0_12px_24px_rgba(226,39,38,0.22)] hover:bg-brand-red-strong sm:inline-flex"
          >
            Request Early Access
            <ArrowRight size={14} aria-hidden="true" />
          </Link>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-charcoal transition-colors hover:bg-surface lg:hidden"
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-black/5 bg-white lg:hidden"
        >
          <div className="section-shell flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => {
              const href = onHome ? item.homeHref : item.pageHref
              const active = isActive(pathname, item.pageHref)

              return (
                <Link
                  key={item.label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] ${
                    active ? 'bg-red-50 text-brand-red' : 'text-copy-dark hover:bg-surface'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href="/request-early-access/"
              onClick={() => setMenuOpen(false)}
              className="pill-button mt-2 justify-center bg-brand-red text-white"
            >
              Request Early Access
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
