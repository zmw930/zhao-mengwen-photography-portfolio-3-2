
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

        {/* Social links removed per request */}
        <div className="hidden md:block w-32"></div> {/* Spacer to keep layout balanced */}
      </div>
    </footer>
  );
};

export default Footer;
