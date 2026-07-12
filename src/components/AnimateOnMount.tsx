'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimateOnMountProps {
  children: ReactNode
  className?: string
  delay?: number
}

/**
 * Animates children with a fade-up entrance on mount.
 * delay is a multiplier: 0 = 0ms, 1 = 100ms, 2 = 200ms, 3 = 300ms
 */
export function AnimateOnMount({ children, className = '', delay = 0 }: AnimateOnMountProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.65,
        delay: delay * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
