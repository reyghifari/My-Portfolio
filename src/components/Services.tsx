import { motion } from 'framer-motion'
import { services, achievements } from '../data/portfolio'
import SectionLabel from './ui/SectionLabel'
import WordsPullUpMultiStyle from './ui/WordsPullUpMultiStyle'

export default function Services() {
  return (
    <section id="services" className="relative px-5 py-28 sm:px-8 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <SectionLabel>Services</SectionLabel>

        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <WordsPullUpMultiStyle
            className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tightest text-cream sm:text-6xl"
            words={[
              { text: 'How' },
              { text: 'I' },
              { text: 'can' },
              {
                text: 'help',
                className: 'font-serif-italic font-normal text-primary',
              },
              { text: 'you' },
            ]}
          />
          <p className="max-w-sm text-gray-400">
            From a first build to scaling an existing app — end-to-end mobile
            engineering with intelligence baked in.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{
                  duration: 0.6,
                  delay: (i % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-card p-8 transition-colors duration-500 hover:border-primary/30 sm:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-700 group-hover:bg-primary/10" />

                <div className="relative flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-card-2 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} />
                  </span>
                  <span className="font-serif-italic text-4xl text-gray-300">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="relative mt-7 text-2xl font-bold text-cream">
                  {service.title}
                </h3>
                <p className="relative mt-3 max-w-md text-base leading-relaxed text-gray-400">
                  {service.description}
                </p>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {service.points.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-gray-500"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Recognition strip */}
        <div className="mt-20">
          <p className="mb-8 text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
            Recognition & Certifications
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-3xl border border-black/5 bg-card p-6"
              >
                <h4 className="text-base font-bold leading-snug text-cream">
                  {a.title}
                </h4>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-primary">
                  {a.org}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  {a.description}
                </p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-primary transition-opacity hover:opacity-70"
                  >
                    View Credential →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
