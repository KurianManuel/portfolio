import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          {portfolioData.about.title}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {portfolioData.about.paragraphs.map((para, idx) => (
            <p key={idx} className="text-lg text-slate-300 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;