import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import { assetUrl, CONTACT_EMAIL, SITE_NAME } from '../../lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Link to="/">
              <img
                src={assetUrl('logo.png')}
                alt={SITE_NAME}
                className="h-9 w-auto"
                width={160}
                height={42}
                loading="lazy"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Intelligent software for automotive service operations.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">
              Company
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted transition-colors hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-muted transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-muted uppercase">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-accent" aria-hidden="true" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-accent" aria-hidden="true" />
                United States
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-8 text-center text-sm text-white/25">
          © 2026 Blind Teknologis
        </p>
      </div>
    </footer>
  )
}
