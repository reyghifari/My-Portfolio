import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { projects, type Project } from '../data/portfolio'
import SectionLabel from './ui/SectionLabel'
import WordsPullUpMultiStyle from './ui/WordsPullUpMultiStyle'

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [active, setActive] = useState(0)
  const reversed = index % 2 === 1

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Visual */}
      <div className={reversed ? 'lg:order-2' : ''}>
        <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-black/10 bg-card-2">
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

          {project.images.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
              animate={{ opacity: active === i ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
          ))}

          <span className="absolute left-5 top-5 z-30 rounded-full border border-black/10 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cream backdrop-blur-md">
            {project.category}
          </span>

          {/* thumbnail strip */}
          <div className="absolute inset-x-5 bottom-5 z-30 flex gap-2.5">
            {project.images.map((src, i) => (
              <button
                key={src}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-label={`View screenshot ${i + 1}`}
                className={`h-14 w-11 overflow-hidden rounded-lg border transition-all duration-300 ${
                  active === i
                    ? 'border-primary opacity-100'
                    : 'border-black/20 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className={reversed ? 'lg:order-1' : ''}>
        <div className="font-serif-italic text-6xl text-gray-300 lg:text-7xl">
          {project.number}
        </div>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-cream sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-card px-4 py-1.5 text-xs font-medium text-gray-600"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            View on Play Store
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Featured Projects</SectionLabel>

        <div className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <WordsPullUpMultiStyle
            className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tightest text-cream sm:text-6xl"
            words={[
              { text: 'Selected' },
              {
                text: 'work',
                className: 'font-serif-italic font-normal text-primary',
              },
              { text: 'shipped' },
              { text: 'to' },
              { text: 'production' },
            ]}
          />
          <p className="max-w-sm text-gray-400">
            Real apps used by thousands across fintech, banking, health, and
            lifestyle.
          </p>
        </div>

        <div className="flex flex-col gap-28 lg:gap-36">
          {projects.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
