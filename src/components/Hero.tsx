import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { personal } from '../data/portfolio'

const lineUp = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: 0,
    transition: {
      duration: 1,
      delay: 0.2 + i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5 + i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32"
    >
      {/* availability */}
      <motion.div
        variants={fade}
        custom={0}
        initial="hidden"
        animate="show"
        className="mb-8 flex items-center gap-2.5 text-sm text-gray-500"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        Available for work
      </motion.div>

      {/* giant type */}
      <h1 className="font-bold leading-[0.82] tracking-tightest text-cream">
        <span className="block overflow-hidden">
          <motion.span
            custom={0}
            variants={lineUp}
            initial="hidden"
            animate="show"
            className="block text-[19vw] sm:text-[16vw] lg:text-[15rem]"
          >
            Raihan
            <span className="align-top font-serif-italic text-[6vw] text-primary sm:text-[4vw] lg:text-8xl">
              *
            </span>
          </motion.span>
        </span>
      </h1>

      {/* lower row — intro + quick facts */}
      <div className="mt-12 grid gap-10 border-t border-black/10 pt-10 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
        <motion.div variants={fade} custom={1} initial="hidden" animate="show">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cream">
            {personal.name}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
            {personal.roles.join(' • ')}. Building Android apps with Kotlin,
            Jetpack Compose, AI integration & document-scanning technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-white transition-transform duration-300 hover:scale-105"
            >
              View Projects
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-4 text-sm font-bold text-cream transition-colors duration-300 hover:border-primary"
            >
              Contact Me
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>

        {/* quick facts */}
        <motion.dl
          variants={fade}
          custom={2}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 gap-x-8 gap-y-6 sm:max-w-sm lg:justify-self-end"
        >
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-gray-400">
              Experience
            </dt>
            <dd className="mt-1 font-serif-italic text-2xl text-cream">
              4+ Years
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-gray-400">
              Based in
            </dt>
            <dd className="mt-1 font-serif-italic text-2xl text-cream">
              {personal.location}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-gray-400">
              Focus
            </dt>
            <dd className="mt-1 font-serif-italic text-2xl text-cream">
              Android · AI
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-[0.15em] text-gray-400">
              Availability
            </dt>
            <dd className="mt-1 font-serif-italic text-2xl text-cream">
              Open to work
            </dd>
          </div>
        </motion.dl>
      </div>
    </section>
  )
}
