import { Shield, Wrench, Code2, Globe } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'
import BorderGlow from './BorderGlow/BorderGlow'

const CATEGORY_ICONS = {
  'Security': Shield,
  'Tools': Wrench,
  'Programming': Code2,
  'Development': Globe,
}

function SkillCard({ group, index }) {
  const { ref, isVisible } = useReveal(0.1)
  const Icon = CATEGORY_ICONS[group.category] || Shield

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={`transition-all duration-500 ease-premium ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
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
        <div className="p-6 h-full">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <Icon size={16} strokeWidth={1.75} className="text-lime-muted" />
              <h3 className="font-sans font-bold text-base text-slate-primary">
                {group.category}
              </h3>
            </div>
            <span className="font-mono text-[10px] text-slate-muted">
              {group.items.length} skills
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="pill">
                <span className="text-lime-muted mr-1.5">•</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </BorderGlow>
    </div>
  )
}

export default function Skills() {
  const { skills } = portfolioData

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-carbon-700">
      <span className="section-label">// 02 — capabilities</span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-primary mb-12 md:mb-16 max-w-xl">
        Skills & Tools
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {skills.categories.map((group, i) => (
          <SkillCard key={group.category} group={group} index={i} />
        ))}
      </div>
    </section>
  )
}
