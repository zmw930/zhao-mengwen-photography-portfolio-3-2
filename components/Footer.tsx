
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#fdfcfb] border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-xs uppercase tracking-[0.3em] text-stone-400">
          © {new Date().getFullYear()} Zhao Mengwen. All Rights Reserved.
        </div>
        
        <div className="font-serif italic text-lg text-stone-300">
          Photography with Soul
        </div>

        <div className="flex space-x-8">
          <a href="#" className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">Instagram</a>
          <a href="#" className="text-xs uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
