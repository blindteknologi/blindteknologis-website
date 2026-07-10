import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin } from 'lucide-react'
import { CONTACT_EMAIL, SITE_NAME } from '@/lib/site'

const links = [
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacy/', label: 'Privacy Policy' },
  { href: '/terms/', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={160}
                height={44}
                className="h-9 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Intelligent software for automotive service operations.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted transition-colors hover:text-charcoal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-brand-red" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-charcoal">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-red" aria-hidden="true" />
                United States
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-400">
          © 2026 Blind Teknologis
        </p>
      </div>
    </footer>
  )
}
