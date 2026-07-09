import { Link } from 'react-router-dom'
import { assetUrl, CONTACT_EMAIL, SITE_NAME } from '../../lib/site'

const links = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Service' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Link to="/">
              <img
                src={assetUrl('logo.png')}
                alt={SITE_NAME}
                className="h-10 w-auto opacity-90"
                width={180}
                height={48}
                loading="lazy"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Enterprise workflow automation for automotive service businesses.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm text-muted">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-8 text-sm text-white/30">
          © 2026 Blind Teknologis
        </p>
      </div>
    </footer>
  )
}
