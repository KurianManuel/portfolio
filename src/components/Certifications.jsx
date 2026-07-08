import { Award } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'
import BorderGlow from './BorderGlow/BorderGlow'

function CertCard({ cert, index }) {
  const { ref, isVisible } = useReveal(0.2)

  return (
    // Outer div handles the reveal animation — BorderGlow sits inside it
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`transition-all duration-500 ease-premium
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
    >
      <BorderGlow
        borderRadius={12}
        glowColor="79 100 60"
        backgroundColor="#111111"
        glowRadius={40}
        glowIntensity={1.0}
        edgeSensitivity={30}
        fillOpacity={0.08}
        colors={['#C8FF34', '#8fb320', '#5a7210']}
        className="h-full"
      >
        <div className="flex items-start gap-4 p-5 h-full">
          <Award size={18} strokeWidth={1.5} className="text-lime-muted mt-0.5 shrink-0" />
          <div>
            <h3 className="font-sans font-semibold text-sm text-slate-primary mb-0.5">{cert.name}</h3>
            <p className="font-mono text-xs text-slate-muted">{cert.issuer} · {cert.year}</p>
          </div>
        </div>
      </BorderGlow>
    </div>
  )
}

export default function Certifications() {
  const { certifications } = portfolioData

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-carbon-700">
      <span className="section-label">// 04 — training</span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-primary mb-12 md:mb-16 max-w-xl">
        Training & Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert, i) => (
          <CertCard key={cert.name} cert={cert} index={i} />
        ))}
      </div>
    </section>
  )
}
