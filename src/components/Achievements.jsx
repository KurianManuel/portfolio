import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

function ExperienceCard({ item, index }) {
  const { ref, isVisible } = useReveal(0.15)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`border-l-2 border-carbon-700 pl-6 py-1 transition-all duration-500 ease-premium
                  ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'}`}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h3 className="font-sans font-semibold text-base text-slate-primary">{item.title}</h3>
        <span className="font-mono text-[10px] text-lime-muted">{item.duration}</span>
      </div>
      <p className="font-mono text-xs text-slate-muted mb-3">{item.org}</p>
      <ul className="space-y-1.5">
        {item.points.map((point, i) => (
          <li key={i} className="font-sans text-sm text-slate-secondary leading-relaxed flex gap-2">
            <span className="text-carbon-500 mt-1.5">·</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Achievements() {
  const { experience } = portfolioData

  if (!experience || experience.length === 0) return null

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-carbon-700">
      <span className="section-label">// 06 — experience</span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-primary mb-12 md:mb-16 max-w-xl">
        Experience & Leadership
      </h2>

      <div className="space-y-10 max-w-2xl">
        {experience.map((item, i) => (
          <ExperienceCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
