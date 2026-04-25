import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'all'
                ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('security')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'security'
                ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            Security
          </button>
          <button
            onClick={() => setFilter('development')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filter === 'development'
                ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white'
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
            }`}
          >
            Development
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 hover:-translate-y-2 transition-all group"
            >
              {/* Project Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-6xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                <span className="relative z-10">{project.icon}</span>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-between text-white">
                  {project.title}
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center text-slate-400 py-12">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;