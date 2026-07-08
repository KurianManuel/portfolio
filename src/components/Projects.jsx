import { Github, ExternalLink, Lock } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import { useReveal } from '../hooks/useReveal'
import BorderGlow from './BorderGlow/BorderGlow'

function ProjectCard({ project, index }) {
  const { ref, isVisible } = useReveal(0.1)

  return (
    // Outer div handles the clip-reveal animation — BorderGlow sits inside it
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 80}ms` }}
      className={isVisible ? 'animate-clip-reveal' : 'opacity-0'}
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
        <div className="group p-6 md:p-8 h-full">
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-lime-muted">
              // {project.tag}
            </span>
            {project.private && (
              <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-carbon-500">
                <Lock size={11} strokeWidth={1.75} />
                private
              </span>
            )}
          </div>

          <h3 className="font-sans font-bold text-xl md:text-2xl text-slate-primary mb-3">
            {project.title}
          </h3>

          <p className="font-sans text-sm text-slate-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-slate-muted hover:text-lime transition-colors duration-150"
              >
                <Github size={14} strokeWidth={1.75} />
                source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-xs text-slate-muted hover:text-lime transition-colors duration-150"
              >
                <ExternalLink size={14} strokeWidth={1.75} />
                live
              </a>
            )}
            {project.private && !project.demo && (
              <span className="font-mono text-xs text-carbon-500">
                available on request
              </span>
            )}
          </div>
        </div>
      </BorderGlow>
    </div>
  )
}

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
      <span className="section-label">// 01 — selected work</span>
      <h2 className="font-sans font-bold text-3xl md:text-4xl text-slate-primary mb-12 md:mb-16 max-w-xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        <div className="md:col-span-2">
          <ProjectCard project={projects[0]} index={0} />
        </div>
        {projects.slice(1).map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i + 1} />
        ))}
      </div>
    </section>
  )
}
