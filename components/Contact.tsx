
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        {/* Photographer Image - Smaller, more intimate feel */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden bg-stone-100 rounded-sm">
             <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800" 
              alt="Zhao Mengwen Portrait"
              className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
          <div className="absolute -top-6 -left-6 w-24 h-24 border-l border-t border-stone-200 pointer-events-none"></div>
        </div>

        {/* Contact Info */}
        <div className="order-1 lg:order-2">
          <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 mb-6 block">Stay in touch</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-10 text-stone-900 italic font-light">
            Zhao Mengwen <br />
            <span className="not-italic text-stone-400 text-3xl md:text-4xl">赵梦雯</span>
          </h2>
          
          <div className="space-y-12">
            <div className="space-y-2">
              <p className="text-stone-500 font-light leading-relaxed mb-6">
                Based in the quiet corners of the city, focusing on lifestyle, food, and jewelry photography. Available for commercial projects and creative collaborations.
              </p>
              <p className="italic font-serif text-stone-400">
                “捕捉那些安静却有力量的瞬间。”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 border-t border-stone-100 pt-12">
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-3">Wechat / 微信</p>
                <p className="text-lg font-light text-stone-800 tracking-wide">zmw812</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-3">Redbook / 小红书</p>
                <p className="text-lg font-light text-stone-800 tracking-wide">雯子酱</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-3">Email / 邮箱</p>
                <a 
                  href="mailto:1064255257@qq.com" 
                  className="text-xl font-light text-stone-900 border-b border-stone-200 hover:border-stone-900 transition-colors inline-block"
                >
                  1064255257@qq.com
                </a>
              </div>
            </div>
            
            <div className="pt-4">
               <p className="text-[9px] uppercase tracking-[0.4em] text-stone-300">
                Studio Location: Hangzhou, China
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
