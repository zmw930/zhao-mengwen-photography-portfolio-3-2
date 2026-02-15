
import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Category } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: { label: Category; labelCn: string }[] = [
    { label: 'All', labelCn: '全部' },
    { label: 'Life Aesthetics', labelCn: '生活美学' },
    { label: 'Food Light', labelCn: '舌尖光影' },
    { label: 'Fine Jewelry', labelCn: '精致饰觉' },
    { label: 'Fashion Style', labelCn: '穿搭风物' }
  ];

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400 mb-4">Curated Works</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-12">Portfolio Collections</h2>
        
        {/* Bilingual Filter */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 max-w-4xl">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setActiveCategory(cat.label)}
              className="group flex flex-col items-center"
            >
              <span className={`text-[10px] uppercase tracking-[0.3em] transition-all mb-1 ${
                activeCategory === cat.label ? 'text-stone-900' : 'text-stone-300 group-hover:text-stone-500'
              }`}>
                {cat.label}
              </span>
              <span className={`text-sm transition-all pb-1 border-b-2 ${
                activeCategory === cat.label 
                  ? 'border-stone-800 text-stone-900' 
                  : 'border-transparent text-stone-400 group-hover:text-stone-600'
              }`}>
                {cat.labelCn}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid with staggered layout feel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`group relative overflow-hidden bg-stone-100 animate-fade-in ${
              index % 3 === 0 ? 'lg:col-span-1' : ''
            }`}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
            </div>
            
            {/* Info overlay - More subtle and artistic */}
            <div className="absolute inset-0 bg-white/90 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] p-8 flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">
                <p className="text-[9px] uppercase tracking-[0.4em] text-stone-400 mb-2">
                  {item.category} / {item.subCategory}
                </p>
                <h3 className="text-xl font-serif text-stone-900 mb-1">{item.title}</h3>
                <h4 className="text-sm font-light text-stone-500 mb-4">{item.titleCn}</h4>
                <div className="w-6 h-px bg-stone-300"></div>
              </div>
            </div>
            
            {/* Simple label for non-hover states */}
            <div className="mt-4 flex justify-between items-baseline group-hover:opacity-0 transition-opacity">
              <h3 className="text-xs uppercase tracking-widest font-medium text-stone-800">{item.title}</h3>
              <span className="text-[9px] text-stone-400 tracking-tighter">0{index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
