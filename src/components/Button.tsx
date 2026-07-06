import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

const variants = {
  primary:
    'bg-accent text-white hover:bg-[#b9151b] border border-accent/80 shadow-[0_0_32px_rgb(215_25_32/0.2)]',
  secondary:
    'bg-transparent text-white hover:bg-white/5 border border-border',
  ghost: 'bg-transparent text-white/70 hover:text-white border border-transparent',
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
