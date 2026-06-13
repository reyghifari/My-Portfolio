import { motion } from 'framer-motion'

/** Small uppercase eyebrow label with a leading rule — used above section titles. */
export default function SectionLabel({ children }: { children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-500"
    >
      <span className="h-px w-8 bg-gray-600" />
      {children}
    </motion.div>
  )
}
