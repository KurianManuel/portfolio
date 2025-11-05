import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';


const Navbar = ({ activeSection, scrollToSection }) => {
  const navItems = ['home', 'about', 'projects', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-white/5 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src="/logo.png"
          alt="logo"
          className="h-16 w-auto"
          />
          
          {/* Navigation Links */}
          <div className="flex items-center gap-12">
            <ul className="hidden md:flex items-center gap-10">
              {navItems.map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-sm transition-colors ${
                      activeSection === section
                        ? 'text-blue-400'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;