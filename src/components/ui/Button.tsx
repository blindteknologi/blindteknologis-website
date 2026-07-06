import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
}

const styles: Record<Variant, string> = {
  primary:
    'bg-accent text-white hover:bg-[#c40812] border border-accent/60 shadow-[0_0_40px_rgb(229_9_20/0.18)]',
  secondary:
    'bg-transparent text-white border border-border hover:border-white/20 hover:bg-white/[0.04]',
  ghost: 'bg-transparent text-text-secondary hover:text-white border border-transparent',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-40 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
