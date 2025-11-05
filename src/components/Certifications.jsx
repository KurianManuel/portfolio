import React from 'react';
import { Award, CheckCircle, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
  const getStatusIcon = (status) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="text-green-400" size={20} />;
      case 'In Progress':
        return <Clock className="text-yellow-400" size={20} />;
      default:
        return <Award className="text-blue-400" size={20} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'border-green-400/30 bg-green-400/5';
      case 'In Progress':
        return 'border-yellow-400/30 bg-yellow-400/5';
      default:
        return 'border-blue-400/30 bg-blue-400/5';
    }
  };

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          Certifications & Training
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border transition-all hover:-translate-y-2 ${getStatusColor(cert.status)}`}
            >
              <div className="flex items-start justify-between mb-4">
                <Award className="text-red-400" size={32} />
                {getStatusIcon(cert.status)}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-white">
                {cert.name}
              </h3>
              
              <p className="text-slate-400 mb-3">
                {cert.issuer}
              </p>
              
              <span className="inline-block px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                {cert.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;