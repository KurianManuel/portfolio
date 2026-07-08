import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const { about, location } = portfolioData
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-carbon-700">
      <span className="section-label">// 05 — about</span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-primary mb-12 md:mb-16 max-w-xl">
        About
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 transition-all duration-500 ease-premium ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="font-mono text-xs text-slate-muted">
          <p className="text-lime-muted mb-1">based in</p>
          <p>{location}</p>
        </div>
        <div className="md:col-span-2 space-y-5">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="font-sans text-base text-slate-secondary leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
