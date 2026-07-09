import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl, SITE_NAME } from '../../lib/site'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About', end: false },
  { to: '/contact', label: 'Contact', end: false },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border bg-surface/95 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <Link to="/" className="shrink-0">
          <img
            src={assetUrl('logo.png')}
            alt={SITE_NAME}
            className="h-[3.7rem] w-auto"
            width={220}
            height={59}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? 'text-accent' : 'text-muted hover:text-white'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-lg border border-accent/60 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent/10 sm:inline-flex"
        >
          Request Early Access
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </header>
  )
}
