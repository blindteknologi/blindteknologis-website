import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  to?: string
  variant?: Variant
}

const styles: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-hover border border-accent shadow-[0_0_32px_rgb(217_20_36/0.15)]',
  secondary:
    'bg-transparent text-white border border-border hover:border-white/25 hover:bg-white/[0.03]',
  ghost: 'bg-transparent text-muted hover:text-white border border-transparent',
}

export function Button({
  children,
  to,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-200 ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
