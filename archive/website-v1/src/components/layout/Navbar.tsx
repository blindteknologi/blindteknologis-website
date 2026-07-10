import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { assetUrl, SITE_NAME } from '../../lib/site'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = ['home', 'about', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-black/90 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="shrink-0">
          <img
            src={assetUrl('logo.png')}
            alt={SITE_NAME}
            className="h-[3.5rem] w-auto"
            width={200}
            height={56}
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {links.map((link) => {
            const id = link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  active === id ? 'text-accent' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-lg border border-border-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-accent hover:bg-accent/10 sm:inline-flex"
        >
          Request Early Access
          <ArrowRight size={14} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}
