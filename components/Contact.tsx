import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      {/* Centered Single Portrait */}
      <div className="mb-16 flex justify-center">
        <div className="relative group w-full max-w-lg">
          <div className="aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm">
            <img 
              src="https://i.postimg.cc/T24nZs2P/IMG_1807.jpg" 
              alt="Zhao Mengwen Portrait"
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
          {/* Decorative Corner Accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-l border-t border-stone-200 pointer-events-none"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-r border-b border-stone-200 pointer-events-none"></div>
        </div>
      </div>

      {/* Identity Text */}
      <div className="space-y-6 mb-20">
        <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400 block">Connection</span>
        <h2 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
          Zhao Mengwen
        </h2>
        <div className="h-px w-12 bg-stone-200 mx-auto"></div>
        <p className="text-lg text-stone-400 font-light tracking-wide max-w-xl mx-auto">
          “记录日常里的安静瞬间”
        </p>
      </div>

      {/* Direct Links - Minimalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-100 pt-16">
        <div className="flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 mb-4">WECHAT / 微信</span>
          <p className="text-xl font-light text-stone-800 tracking-widest">zmw812</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 mb-4">REDBOOK / 小红书</span>
          <p className="text-xl font-light text-stone-800 tracking-widest">雯子酱</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[9px] uppercase tracking-[0.4em] text-stone-300 mb-4">EMAIL / 邮箱</span>
          <a 
            href="mailto:1064255257@qq.com" 
            className="text-xl font-light text-stone-900 border-b border-stone-200 hover:border-stone-900 transition-all duration-500"
          >
            1064255257@qq.com
          </a>
        </div>
      </div>

      <div className="mt-24">
        <p className="text-[10px] uppercase tracking-[0.5em] text-stone-300">
          BASED IN CHINA / 可预约拍摄
        </p>
      </div>
    </div>
  );
};

export default Contact;