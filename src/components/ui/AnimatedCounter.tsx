import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
}

/** Counts up from 0 to `value` when scrolled into view. */
export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 1400,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * value))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}
