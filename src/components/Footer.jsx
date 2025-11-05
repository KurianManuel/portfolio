import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        {portfolioData.footer.text}
      </div>
    </footer>
  );
};

export default Footer;