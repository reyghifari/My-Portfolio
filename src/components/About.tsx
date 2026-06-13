import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { personal } from '../data/portfolio'
import AnimatedCounter from './ui/AnimatedCounter'

/**
 * The big centered statement. Each "segment" can be sans (default) or
 * serif-italic accent, mirroring the Prisma about block. Words brighten
 * as you scroll through, Prisma-style.
 */
interface Segment {
  text: string
  italic?: boolean
}

const segments: Segment[] = [
  { text: 'I am Raihan,' },
  { text: ' a mobile engineer.', italic: true },
  { text: ' I build Android apps that blend performance, user experience, and intelligent automation.' },
]

function StatementWord({
  word,
  italic,
  progress,
  range,
}: {
  word: string
  italic?: boolean
  progress: ReturnType<typeof useScroll>['scrollYProgress']
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.15, 1])
  return (
    <span className="mr-[0.22em] inline-block">
      <motion.span
        style={{ opacity }}
        className={
          italic ? 'font-serif-italic font-normal text-primary' : undefined
        }
      >
        {word}
      </motion.span>
    </span>
  )
}

export default function About() {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.6'],
  })

  // flatten segments into words while keeping italic flag
  const words: { text: string; italic?: boolean }[] = segments.flatMap((seg) =>
    seg.text
      .trim()
      .split(' ')
      .map((w) => ({ text: w, italic: seg.italic })),
  )

  return (
    <section id="about" className="px-3 py-12 sm:px-5 sm:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div className="rounded-[1.75rem] border border-black/5 bg-card px-6 py-16 sm:rounded-[2.5rem] sm:px-12 sm:py-28 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 text-xs font-bold uppercase tracking-[0.3em] text-gray-500"
            >
              About Me
            </motion.p>

            <p
              ref={ref}
              className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-cream sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            >
              {words.map((w, i) => {
                const start = i / words.length
                const end = start + 1 / words.length
                return (
                  <StatementWord
                    key={i}
                    word={w.text}
                    italic={w.italic}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                )
              })}
            </p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-gray-500"
            >
              {personal.intro}
            </motion.p>
          </div>

          {/* stats row */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 border-t border-black/5 pt-12 sm:grid-cols-4">
            {personal.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-center"
              >
                <div className="font-serif-italic text-4xl text-primary sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs text-gray-500 sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
