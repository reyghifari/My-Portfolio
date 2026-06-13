import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { personal } from '../data/portfolio'
import WordsPullUp from './ui/WordsPullUp'

const channels = [
  { label: 'Email', value: personal.email, href: personal.links.email, icon: Mail },
  { label: 'LinkedIn', value: 'in/raihan-ghifari', href: personal.links.linkedin, icon: Linkedin },
  { label: 'GitHub', value: '@reyghifari', href: personal.links.github, icon: Github },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-40"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card-2/60 blur-[150px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gray-500"
        >
          Contact
        </motion.p>

        <WordsPullUp
          as="h2"
          text="Let's build something"
          className="text-5xl font-bold leading-[1] tracking-tightest text-cream sm:text-7xl lg:text-8xl"
        />
        <div className="mt-2 overflow-hidden">
          <motion.p
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-italic text-5xl text-primary sm:text-7xl lg:text-8xl"
          >
            intelligent together.
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-8 max-w-xl text-lg text-gray-400"
        >
          Have an Android idea ?
          I'm open to full-time, freelance, and remote work.
        </motion.p>

        <motion.a
          href={personal.links.email}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-5 text-base font-bold text-white transition-transform duration-300 hover:scale-105"
        >
          {personal.email}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight size={18} />
          </span>
        </motion.a>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {channels.map((c, i) => {
            const Icon = c.icon
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col items-center gap-2 rounded-3xl border border-black/5 bg-card p-6 transition-colors duration-400 hover:border-primary/30 hover:bg-card-2"
              >
                <Icon
                  size={22}
                  className="text-gray-400 transition-colors group-hover:text-primary"
                />
                <span className="text-sm font-bold text-cream">{c.label}</span>
                <span className="text-xs text-gray-500">{c.value}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
