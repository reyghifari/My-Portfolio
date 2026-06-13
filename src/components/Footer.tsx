import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-black/5 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-gray-500 sm:flex-row">
        <p>
          © {year}{' '}
          <span className="font-bold text-cream">{personal.name}</span> — Mobile
          Engineer
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href={personal.links.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
            GitHub
          </a>
          <a href={personal.links.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
            LinkedIn
          </a>
          <a href={personal.links.upwork} target="_blank" rel="noreferrer" className="transition-colors hover:text-cream">
            Upwork
          </a>
          <a href={personal.links.email} className="transition-colors hover:text-cream">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
