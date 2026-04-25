import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase size={32} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-slate-300 mb-3">
                    {exp.company}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-3">
                  {exp.description.map((desc, descIdx) => (
                    <div key={descIdx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
