import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { NAV_LINKS, SITE_NAME } from '@/lib/site'

export function Header({ active = 'Home' }: { active?: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-10">
        <Link href="/" className="shrink-0">
          <div className="rounded-2xl bg-black px-4 py-2.5 sm:px-5 sm:py-3">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={200}
              height={56}
              className="h-11 w-auto sm:h-[3.25rem]"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => {
            const isActive = link.label === active
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                  isActive
                    ? 'border-b-2 border-brand-red pb-0.5 text-brand-red'
                    : 'text-zinc-600 hover:text-charcoal'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/contact/"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-red px-4 py-2.5 text-xs font-semibold tracking-wide text-white uppercase transition-colors hover:bg-brand-red-hover sm:px-5"
        >
          Request Early Access
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}
