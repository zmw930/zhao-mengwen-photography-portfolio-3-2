
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group perspective-1000">
          <div className="relative aspect-[3/4] overflow-hidden bg-stone-200">
             <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
              alt="Zhao Mengwen"
              className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-stone-300 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700"></div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-6 block">The Photographer</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">
            Capturing the essence <br /> of simple living.
          </h2>
          
          <div className="space-y-8 text-stone-600 font-light leading-relaxed">
            <p>
              I enjoy creating warm, honest visuals for brands and individuals. My work captures everyday emotions, people, and spaces, focusing on the subtle interplay of light and texture that defines our daily lives.
            </p>
            <p className="italic font-serif text-lg text-stone-800">
              “我喜欢为品牌和个人创作温暖、真实的影像。我的作品捕捉日常情感、人物和空间，寻找那些安静却有力量的瞬间。”
            </p>
            <p>
              Based in the quiet corners of the city, I believe that every object has a story and every shadow has a mood. My aesthetic is rooted in Scandinavian minimalism—clean lines, soft palettes, and purposeful composition.
            </p>
          </div>

          <div className="mt-12 flex items-center space-x-12">
            <div>
              <p className="text-2xl font-serif text-stone-900">10+</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-stone-900">500+</p>
              <p className="text-[10px] uppercase tracking-widest text-stone-400">Stories Told</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
