import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { CONTACT_EMAILS, NAV_ITEMS, SITE_NAME } from '@/lib/site'

function SocialMark({ label }: { label: 'LinkedIn' | 'X' | 'GitHub' }) {
  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6A2.49 2.49 0 010 3.5C0 2.12 1.11 1 2.48 1a2.5 2.5 0 012.5 2.5zM.5 8h4V23h-4V8zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.83c0-1.87-.03-4.28-2.61-4.28-2.61 0-3.01 2.04-3.01 4.15V23h-4V8z" />
      </svg>
    )
  }

  if (label === 'X') {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M18.9 2H22l-6.77 7.74L23 22h-6.3l-4.93-6.45L6.1 22H3l7.24-8.27L1 2h6.45l4.45 5.89L18.9 2zm-1.1 18h1.75L6.5 3.9H4.63L17.8 20z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.36 22.9c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.35-3.87-1.35-.53-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.35.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.48.11-3.08 0 0 .96-.31 3.14 1.17a10.9 10.9 0 015.72 0c2.17-1.48 3.13-1.17 3.13-1.17.63 1.6.24 2.79.12 3.08.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.64.41.36.78 1.08.78 2.18v3.23c0 .31.21.68.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[#191919] text-white">
      <div className="section-shell py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white px-4 py-3">
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={400}
                height={100}
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              Intelligent software for automotive service operations. Built to help shops save time,
              improve accuracy, and recover more missed revenue.
            </p>
            <div className="mt-6 flex gap-3" aria-hidden="true">
              {(['LinkedIn', 'X', 'GitHub'] as const).map((label) => (
                <div
                  key={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/55"
                >
                  <SocialMark label={label} />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.3em] text-white/35">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.pageHref} className="text-sm text-white/62 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy/" className="text-sm text-white/62 transition-colors hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="text-sm text-white/62 transition-colors hover:text-white">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.63rem] font-semibold uppercase tracking-[0.3em] text-white/35">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-white/62">
              {[
                CONTACT_EMAILS.general,
                CONTACT_EMAILS.sales,
                CONTACT_EMAILS.api,
                CONTACT_EMAILS.support,
              ].map((email) => (
                <li key={email} className="flex items-start gap-3">
                  <Mail size={14} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                  <a href={`mailto:${email}`} className="transition-colors hover:text-white">
                    {email}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-brand-red" aria-hidden="true" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/8 pt-7 text-center text-xs tracking-[0.04em] text-white/35">
          © 2026 Blind Teknologis. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
