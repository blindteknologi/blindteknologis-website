'use client'

import { useEffect, useState, type ReactNode } from 'react'

export function AnimateOnMount({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const delayClass =
    delay === 1
      ? 'animate-fade-up-delay-1'
      : delay === 2
        ? 'animate-fade-up-delay-2'
        : delay === 3
          ? 'animate-fade-up-delay-3'
          : 'animate-fade-up'

  return <div className={`${mounted ? delayClass : ''} ${className}`.trim()}>{children}</div>
}
