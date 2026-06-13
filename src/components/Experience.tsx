import { motion } from 'framer-motion'
import { experiences } from '../data/portfolio'
import SectionLabel from './ui/SectionLabel'
import WordsPullUpMultiStyle from './ui/WordsPullUpMultiStyle'

export default function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>Experience</SectionLabel>

        <WordsPullUpMultiStyle
          className="mb-20 text-4xl font-bold leading-[1.05] tracking-tightest text-cream sm:text-6xl"
          words={[
            { text: 'A' },
            { text: 'track' },
            {
              text: 'record',
              className: 'font-serif-italic font-normal text-primary',
            },
            { text: 'of' },
            { text: 'delivery' },
          ]}
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary/40 via-white/10 to-transparent sm:left-2" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative pl-10 sm:pl-14"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="absolute left-[-5px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-primary/15 sm:left-[3px]"
                />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-bold text-cream">{exp.role}</h3>
                  <span className="font-serif-italic text-sm text-gray-500">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-base font-medium text-primary">
                  {exp.company}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-gray-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
