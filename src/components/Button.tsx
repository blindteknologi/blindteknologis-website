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
    'bg-white text-zinc-950 hover:bg-zinc-200 border border-transparent',
  secondary:
    'bg-transparent text-zinc-100 hover:bg-zinc-800/60 border border-zinc-700',
  ghost: 'bg-transparent text-zinc-300 hover:text-white border border-transparent',
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return <button type="button" className={classes}>{children}</button>
}
