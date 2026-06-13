import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Services', href: '#services' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 sm:px-7 ${
          scrolled
            ? 'border-black/10 bg-white/70 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a
          href="#hero"
          className="font-serif-italic text-xl text-primary"
          aria-label="Home"
        >
          KMRG<span className="text-cream">.</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-gray-400 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors duration-300 hover:text-cream"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-white transition-transform duration-300 hover:scale-105 md:inline-block"
        >
          Let's Talk
        </a>

        <button
          className="text-cream md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 right-4 top-20 rounded-3xl border border-black/10 bg-white/95 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-5 text-lg text-gray-600">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personal.links.email}
                  onClick={() => setOpen(false)}
                  className="inline-block rounded-full bg-primary px-5 py-2 text-base font-bold text-white"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
