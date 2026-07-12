'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'none'
}

/**
 * Fade-in animation triggered when the element enters the viewport.
 * Plays once. Uses Framer Motion.
 */
export function FadeIn({ children, className = '', delay = 0, direction = 'up' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  const yInitial = direction === 'up' ? 20 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yInitial }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yInitial }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
