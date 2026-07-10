import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  to?: string
  variant?: Variant
  showArrow?: boolean
}

export function Button({
  children,
  href,
  to,
  variant = 'primary',
  showArrow = true,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-200'
  const styles = {
    primary: 'bg-accent text-white border border-accent glow-red hover:bg-accent-hover',
    outline:
      'bg-transparent text-white border border-border-accent hover:border-accent hover:bg-accent/5',
  }
  const classes = `${base} ${styles[variant]} ${className}`

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={14} aria-hidden="true" />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}

export function TextLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
    >
      {children}
      <ArrowRight size={12} aria-hidden="true" />
    </a>
  )
}
