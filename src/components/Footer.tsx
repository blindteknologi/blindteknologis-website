import { Link } from 'react-router-dom'
import { assetUrl, SITE_NAME } from '../lib/site'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={assetUrl('logo.png')}
                alt={SITE_NAME}
                className="h-9 w-auto opacity-90"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Enterprise software for the automotive service industry.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-10 gap-y-3">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-border pt-8 text-sm text-white/30">
          © 2026 Blind Teknologis
        </div>
      </div>
    </footer>
  )
}
