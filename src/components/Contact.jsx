import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const { contact, social } = portfolioData
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-carbon-700">
      <span className="section-label">// 07 — contact</span>

      <div
        ref={ref}
        className={`transition-all duration-500 ease-premium ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      >
        <h2 className="font-sans font-extrabold text-4xl md:text-6xl text-slate-primary mb-6 max-w-2xl leading-[1.05]">
          Let's talk{' '}
          <span className="text-lime">security</span>.
        </h2>

        <p className="font-sans text-base text-slate-secondary max-w-lg mb-10">
          {contact.description}
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="group inline-flex items-center gap-3 font-mono text-lg md:text-2xl text-slate-primary hover:text-lime transition-colors duration-200 ease-snap mb-12"
        >
          {contact.email}
          <ArrowUpRight size={22} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-snap" />
        </a>

        <p className="font-mono text-xs text-lime-muted mb-8">{contact.availability}</p>

        <div className="flex items-center gap-6">
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-slate-muted hover:text-lime transition-colors duration-150">
            <Github size={16} strokeWidth={1.75} /> github
          </a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-xs text-slate-muted hover:text-lime transition-colors duration-150">
            <Linkedin size={16} strokeWidth={1.75} /> linkedin
          </a>
        </div>
      </div>
    </section>
  )
}
