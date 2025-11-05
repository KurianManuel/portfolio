import React from 'react';
import { Trophy, Award, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const icons = [Trophy, Award, Target];

  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.achievements.map((achievement, idx) => {
            const Icon = icons[idx % icons.length];
            
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-500/50 hover:-translate-y-2 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-slate-400 mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
                  {achievement.date}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;