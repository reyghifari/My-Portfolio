import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface WordsPullUpProps {
  text: string
  className?: string
  /** delay between each word, in seconds */
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p'
}

/**
 * Animates each word pulling up from below as it enters the viewport.
 * Prisma-style staggered word reveal.
 */
export default function WordsPullUp({
  text,
  className = '',
  stagger = 0.07,
  as = 'h2',
}: WordsPullUpProps) {
  const words = text.split(' ')
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' })

  const Wrapper = motion[as]

  return (
    <Wrapper className={className}>
      <span ref={ref} className="inline">
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              className="inline-block"
              initial={{ y: '100%', opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: i * stagger,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && <span>&nbsp;</span>}
          </span>
        ))}
      </span>
    </Wrapper>
  )
}
