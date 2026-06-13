import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionLabel from './ui/SectionLabel'
import WordsPullUpMultiStyle from './ui/WordsPullUpMultiStyle'

export default function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Skills & Expertise</SectionLabel>

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <WordsPullUpMultiStyle
            className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tightest text-cream sm:text-6xl"
            words={[
              { text: 'The' },
              { text: 'tools' },
              { text: 'behind' },
              { text: 'the' },
              {
                text: 'craft',
                className: 'font-serif-italic font-normal text-primary',
              },
            ]}
          />
          <p className="max-w-sm text-gray-400">
            A battle-tested toolkit for building production-grade Android
            applications — from architecture to on-device AI.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{
                duration: 0.55,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-card p-6 transition-colors duration-500 hover:border-primary/30 hover:bg-card-2"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
              <div className="relative flex items-start justify-between">
                <h3 className="text-xl font-bold text-cream">{skill.name}</h3>
                <span className="font-serif-italic text-sm text-gray-300 transition-colors group-hover:text-primary">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="relative mt-3 text-sm leading-relaxed text-gray-500">
                {skill.blurb}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
