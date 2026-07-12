import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Mail, MapPin } from 'lucide-react'
import { CONTACT_DEPARTMENTS, NAV_LINKS, SITE_NAME, SOCIAL_LINKS } from '@/lib/site'

const footerLinks = [
  ...NAV_LINKS,
  { href: '/privacy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
]

function SocialIcon({ label }: { label: string }) {
  if (label.includes('LinkedIn')) return <Linkedin size={18} aria-hidden="true" />
  if (label.includes('Twitter') || label.includes('X')) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Column 1: logo + description + social */}
          <div>
            <Link href="/" aria-label="Blind Teknologis — Home">
              <div className="inline-block rounded-2xl bg-black px-4 py-2.5">
                <Image
                  src="/logo.png"
                  alt={SITE_NAME}
                  width={180}
                  height={50}
                  className="h-9 w-auto"
                  loading="lazy"
                />
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-400">
              Intelligent software for automotive service operations. AI-powered tools that help
              shops save time, improve accuracy, and grow profitably.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-zinc-400 transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: navigation */}
          <nav aria-label="Footer navigation">
            <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: contact */}
          <div>
            <p className="mb-4 text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              {CONTACT_DEPARTMENTS.slice(0, 3).map((dept) => (
                <li key={dept.id} className="flex items-start gap-2">
                  <Mail size={14} className="mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                  <a href={`mailto:${dept.email}`} className="hover:text-white">
                    {dept.email}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 pt-1">
                <MapPin size={14} className="text-brand-red" aria-hidden="true" />
                United States
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-zinc-800 pt-8 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Blind Teknologis. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
