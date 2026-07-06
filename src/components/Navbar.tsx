import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { assetUrl, SITE_NAME } from '../lib/site'

const links = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/85 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src={assetUrl('logo.png')}
            alt={SITE_NAME}
            className="h-[2.6rem] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-white transition-colors duration-300 hover:border-white/20 hover:bg-white/5"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white/70 hover:bg-white/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${isActive ? 'text-white' : 'text-white/50'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-accent"
            >
              Get in Touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
