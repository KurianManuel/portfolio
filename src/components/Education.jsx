import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const { education } = portfolioData
  const { ref, isVisible } = useReveal(0.2)

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-carbon-700">
      <span className="section-label">// 03 — education</span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-primary mb-12 md:mb-16 max-w-xl">
        Education
      </h2>

      <div
        ref={ref}
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 transition-all duration-500 ease-premium ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        <div className="md:col-span-2">
          <h3 className="font-sans font-bold text-xl md:text-2xl text-slate-primary mb-1">
            {education.degree}
          </h3>
          <p className="font-sans text-sm text-slate-secondary mb-1">{education.field}</p>
          <p className="font-mono text-xs text-lime-muted mb-1">{education.university}</p>
          <p className="font-mono text-xs text-slate-muted mb-6">
            {education.location} · {education.duration}
          </p>

          <p className="font-mono text-[10px] uppercase tracking-widest text-carbon-500 mb-3">
            relevant coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {education.relevantCourses.map((course) => (
              <span key={course} className="pill">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
