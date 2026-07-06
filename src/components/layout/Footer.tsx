import { Link } from 'react-router-dom'
import { assetUrl, SITE_NAME } from '../../lib/site'

const links = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <Link to="/">
            <img src={assetUrl('logo.png')} alt={SITE_NAME} className="h-8 w-auto opacity-90" />
          </Link>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-8">
              {links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-secondary transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-12 max-w-2xl text-xs leading-relaxed text-white/30">
          Initial technical documentation and architecture reviews are provided only after
          execution of a Mutual Non-Disclosure Agreement.
        </p>

        <p className="mt-8 text-sm text-white/25">© 2026 Blind Teknologis</p>
      </div>
    </footer>
  )
}
