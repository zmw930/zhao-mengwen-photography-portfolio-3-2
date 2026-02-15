
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm py-4 border-b border-stone-100' : 'bg-transparent py-10'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="group flex flex-col">
          <span className="text-xl font-serif tracking-widest uppercase text-stone-900">Zhao Mengwen</span>
          <span className={`text-[8px] uppercase tracking-[0.8em] text-stone-400 transition-all duration-700 ${scrolled ? 'opacity-0 h-0' : 'opacity-100 mt-1'}`}>
            Life & Light
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group flex flex-col items-center overflow-hidden h-10"
            >
              <span className="text-[10px] uppercase tracking-[0.4em] font-medium text-stone-800 transition-transform duration-500 group-hover:-translate-y-full">
                {item.label}
              </span>
              <span className="absolute inset-0 text-[10px] tracking-[0.4em] text-stone-400 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
                {item.labelCn}
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden group p-2 flex flex-col space-y-1.5 items-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-8 h-[1px] bg-stone-900 transition-all group-hover:w-6"></div>
          <div className="w-5 h-[1px] bg-stone-900"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-stone-50 z-[100] transition-all duration-700 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-10 right-10 text-xl font-light tracking-widest"
          onClick={() => setIsMenuOpen(false)}
        >
          CLOSE
        </button>
        <div className="h-full flex flex-col items-center justify-center space-y-12">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex flex-col items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-4xl font-serif italic mb-2 text-stone-900">{item.label}</span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400">{item.labelCn}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
