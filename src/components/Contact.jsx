import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Custom TryHackMe icon component
const TryHackMeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27 3.273 3.273 0 0 1 3.053-3.26.625.625 0 0 0 .54-.694A3.892 3.892 0 0 1 10.705 1.25a3.892 3.892 0 0 1 3.828 3.307.626.626 0 0 0 .616.524h.343a2.712 2.712 0 0 1 2.709 2.71 2.712 2.712 0 0 1-2.71 2.709h-2.232a.625.625 0 1 0 0 1.25h2.233a3.963 3.963 0 0 0 3.959-3.959 3.963 3.963 0 0 0-3.676-3.949A5.143 5.143 0 0 0 10.705 0zm2.022 13.957a.626.626 0 0 0-.441 1.067l3.42 3.42-3.42 3.42a.626.626 0 0 0 .884.884l3.862-3.863a.626.626 0 0 0 0-.884l-3.862-3.862a.626.626 0 0 0-.443-.182z"/>
  </svg>
);

// Custom HackTheBox icon component  
const HackTheBoxIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M11.996 0a1.119 1.119 0 0 0-.057.003.915.915 0 0 0-.206.035l-9.75 3.25a1.118 1.118 0 0 0-.751 1.056v11.312a1.118 1.118 0 0 0 .75 1.056l9.75 3.25a1.116 1.116 0 0 0 .53 0l9.75-3.25a1.118 1.118 0 0 0 .75-1.056V4.344a1.118 1.118 0 0 0-.75-1.056l-9.75-3.25a1.118 1.118 0 0 0-.26-.038zm0 2.147l6.75 2.25-6.75 2.25-6.75-2.25zm-8.25 4.5l7.125 2.375v7.5l-7.125-2.375zm16.5 0v7.5l-7.125 2.375v-7.5z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
          {portfolioData.contact.title}
        </h2>
        
        <p className="text-lg text-slate-300 mb-4 leading-relaxed">
          {portfolioData.contact.description}
        </p>
        
        <p className="text-sm text-red-400 mb-12 font-medium">
          {portfolioData.contact.available}
        </p>
        
        <a
          href={`mailto:${portfolioData.contact.email}`}
          className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all hover:-translate-y-1"
        >
          <Mail size={20} />
          Send Me an Email
        </a>
        
        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:border-transparent transition-all hover:-translate-y-1"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:border-transparent transition-all hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          {portfolioData.social.twitter && (
            <a
              href={portfolioData.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:border-transparent transition-all hover:-translate-y-1"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          )}
          {portfolioData.social.tryhackme && (
            <a
              href={portfolioData.social.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:border-transparent transition-all hover:-translate-y-1"
              aria-label="TryHackMe"
            >
              <TryHackMeIcon />
            </a>
          )}
          {portfolioData.social.hackthebox && (
            <a
              href={portfolioData.social.hackthebox}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/20 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:border-transparent transition-all hover:-translate-y-1"
              aria-label="HackTheBox"
            >
              <HackTheBoxIcon />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;