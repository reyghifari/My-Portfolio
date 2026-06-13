import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export interface StyledWord {
  text: string
  /** extra classes for this word — e.g. the serif italic accent */
  className?: string
}

interface WordsPullUpMultiStyleProps {
  words: StyledWord[]
  className?: string
  stagger?: number
}

/**
 * Like WordsPullUp, but each word can carry its own styling — used for mixing
 * the Almarai sans display with Instrument Serif italic accent words.
 */
export default function WordsPullUpMultiStyle({
  words,
  className = '',
  stagger = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-12% 0px' })

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${word.className ?? ''}`}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word.text}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </h2>
  )
}
