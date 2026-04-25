import React from 'react';
import { Shield, Terminal, Code, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const icons = {
    "Security Skills": Shield,
    "Security Tools": Wrench,
    "Programming": Terminal,
    "Web Development": Code
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
          {portfolioData.skills.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.skills.categories.map((skill, idx) => {
            const Icon = icons[skill.category] || Shield;
            
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600 hover:border-blue-500/50 hover:bg-slate-700 transition-all"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;