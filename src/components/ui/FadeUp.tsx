import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeUpProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  y?: number
  once?: boolean
}

/** Simple fade + slide-up on scroll into view. */
export default function FadeUp({
  children,
  delay = 0,
  y = 28,
  once = true,
  ...props
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-10% 0px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
