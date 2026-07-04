import { Link } from 'react-router-dom'
import { assetUrl, GITHUB_URL, SITE_NAME } from '../lib/site'

const footerLinks = [
  { to: '/products', label: 'Products' },
  { to: '/integrations', label: 'Integrations' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-[#09090b]">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={assetUrl('logo.png')} alt={SITE_NAME} className="h-7 w-auto opacity-90" />
              <span className="text-sm font-medium text-zinc-100">{SITE_NAME}</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
              Intelligent software for modern automotive service.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Company</p>
              <ul className="space-y-2 text-sm">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-zinc-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Connect</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={GITHUB_URL} className="text-zinc-400 transition-colors hover:text-white" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <Link to="/contact" className="text-zinc-400 transition-colors hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800/60 pt-6 text-sm text-zinc-500">
          © 2026 Blind Teknologis
        </div>
      </div>
    </footer>
  )
}
