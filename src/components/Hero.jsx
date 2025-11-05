import React from 'react';
import { Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Security Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 animate-fade-in">
          <Shield className="text-red-400" size={20} />
          <span className="text-red-300 text-sm font-medium">Cybersecurity Student</span>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-red-600 bg-clip-text text-transparent animate-fade-in">
          {portfolioData.name}
        </h1>
        
        <h2 className="text-3xl md:text-4xl font-light text-slate-300 mb-4">
          {portfolioData.hero.title}
        </h2>
        
        <p className="text-lg md:text-xl text-slate-400 mb-4 italic">
          {portfolioData.hero.subtitle}
        </p>
        
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.hero.description}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all hover:-translate-y-1"
          >
            {portfolioData.hero.ctaPrimary}
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-10 py-4 bg-white/10 border-2 border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all hover:-translate-y-1"
          >
            {portfolioData.hero.ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;