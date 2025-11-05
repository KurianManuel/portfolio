import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          {education.title}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/50 transition-all">
            {/* Header */}
            <div className="flex items-start gap-6 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <GraduationCap size={32} className="text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {education.degree}
                </h3>
                <p className="text-xl text-slate-300 mb-3">
                  {education.university}
                </p>
                
                <div className="flex flex-wrap gap-4 text-slate-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{education.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{education.duration}</span>
                  </div>
                  {education.gpa && (
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} />
                      <span>GPA: {education.gpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Relevant Courses */}
            {education.relevantCourses && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Relevant Coursework
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {education.relevantCourses.map((course, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;