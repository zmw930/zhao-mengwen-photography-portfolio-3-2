import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="flex flex-col items-center text-center space-y-12">
        <span className="text-xs uppercase tracking-[0.6em] text-stone-400 block">Philosophy</span>
        
        <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-stone-800">
          The art of observation <br /> 
          is the art of stillness.
        </h2>

        <div className="w-16 h-px bg-stone-300"></div>

        <div className="space-y-8 text-stone-600 font-light leading-relaxed max-w-2xl text-lg">
          <p>
            I believe photography is more than just capturing an image; it's about preserving the mood, the texture, and the quiet dialogue between light and shadow. My work is heavily influenced by Scandinavian minimalism—clean lines, organic textures, and a profound respect for natural light.
          </p>
          <p className="font-serif italic text-stone-400 border-l-2 border-stone-100 pl-8 text-left">
            “我热爱摄影，因为它能捕捉物体与光影之间的安静对话。在极简的构图中，寻找最有力量的情绪表达。”
          </p>
          <p>
            Specializing in lifestyle aesthetics and fine product photography, I aim to create visual stories that feel honest, timeless, and serene.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-20 pt-8">
          <div className="text-center">
            <p className="text-3xl font-serif text-stone-900 mb-1">5+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif text-stone-900 mb-1">500+</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-stone-400">Collaborations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;