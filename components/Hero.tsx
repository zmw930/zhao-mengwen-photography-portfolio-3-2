
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row items-center overflow-hidden bg-[#F8F7F4]">
      {/* Left Content Side */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-24 z-10">
        <div className="max-w-md animate-fade-up">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-4 block">
            Zhao Mengwen Photography
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-[0.9] text-stone-900">
            Nordic <br /> 
            <span className="italic font-light">Soul.</span>
          </h1>
          <div className="h-px w-16 bg-stone-300 mb-8"></div>
          
          <div className="space-y-4 mb-12">
            <p className="text-xl font-serif italic text-stone-600 leading-relaxed">
              "Capturing the silent poetry of objects and light."
            </p>
            <p className="text-lg text-stone-400 font-light tracking-wide">
              记录万物有灵的安静瞬间
            </p>
          </div>
          
          <a 
            href="#portfolio"
            className="group relative inline-flex items-center space-x-4 py-2 overflow-hidden"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-medium transition-all group-hover:pr-4">
              Explore Collections
            </span>
            <div className="w-8 h-px bg-stone-900 transition-all group-hover:w-16"></div>
          </a>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] hover:scale-110"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000')` 
          }}
        >
          <div className="absolute inset-0 bg-stone-900/5"></div>
        </div>
        {/* Floating Accent Text */}
        <div className="absolute bottom-12 right-12 hidden lg:block text-white/40 font-serif text-8xl pointer-events-none select-none">
          MENGWEN
        </div>
      </div>

      {/* Social Sidebar (Desktop) */}
      <div className="absolute left-8 bottom-12 hidden xl:flex flex-col items-center space-y-6">
        <div className="w-px h-24 bg-stone-200"></div>
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.5em] text-stone-300">
          Scroll to discover
        </span>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Hero;
