
import React, { useState, useEffect } from 'react';
import { PORTFOLIO_ITEMS } from '../constants';
import { Category, PortfolioItem } from '../types';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<PortfolioItem | null>(null);

  // Handle body scroll locking when modal is open
  useEffect(() => {
    if (selectedAlbum) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedAlbum]);

  const categories: { label: Category; labelCn: string }[] = [
    { label: 'All', labelCn: '全部' },
    { label: 'Life Aesthetics', labelCn: '生活美学' },
    { label: 'Food Light', labelCn: '舌尖光影' },
    { label: 'Fine Jewelry', labelCn: '精致饰觉' },
    { label: 'Fashion Style', labelCn: '穿搭风物' },
    { label: 'WHIMSICAL TOYS', labelCn: '趣玩小物' }
  ];

  const filteredItems = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12">
      <div className="flex flex-col items-center mb-24 text-center">
        <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400 mb-4">Curated Collections</span>
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

      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id} 
            onClick={() => setSelectedAlbum(item)}
            className="group relative cursor-pointer animate-fade-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 rounded-sm">
              <img 
                src={item.images[0]} // Show the first image as cover
                alt={item.title}
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-6 text-white text-center">
                <span className="text-[9px] uppercase tracking-[0.4em] mb-2">{item.subCategory}</span>
                <h3 className="text-2xl font-serif mb-1">{item.title}</h3>
                <h4 className="text-sm font-light opacity-80">{item.titleCn}</h4>
                <div className="mt-6 w-8 h-px bg-white/50"></div>
                <span className="mt-4 text-[9px] uppercase tracking-[0.2em] opacity-60">
                  Album No. {index + 1} — {item.images.length} Plates
                </span>
              </div>
            </div>
            
            {/* Label below grid for clarity */}
            <div className="mt-5 flex justify-between items-end border-b border-stone-100 pb-4">
               <div>
                  <h3 className="text-[11px] uppercase tracking-widest font-medium text-stone-900 mb-0.5">{item.title}</h3>
                  <span className="text-[10px] text-stone-400 font-light">{item.titleCn}</span>
               </div>
               <span className="text-[9px] text-stone-300 font-serif italic">No. {index + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Album Detail Modal */}
      {selectedAlbum && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-[#fdfcfb]/98 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedAlbum(null)}
          ></div>
          
          <div className="relative w-full h-full overflow-y-auto px-6 py-24 md:py-32">
            {/* Close Button */}
            <button 
              className="fixed top-10 right-10 z-[110] group flex items-center space-x-4 mix-blend-difference"
              onClick={() => setSelectedAlbum(null)}
            >
              <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 group-hover:text-stone-900 transition-colors">Close</span>
              <div className="w-8 h-[1px] bg-stone-300 group-hover:bg-stone-900 group-hover:w-12 transition-all"></div>
            </button>

            {/* Modal Content */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-24 animate-fade-up">
                <span className="text-[10px] uppercase tracking-[0.6em] text-stone-400 block mb-4">
                  {selectedAlbum.category} / {selectedAlbum.subCategory}
                </span>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-4">{selectedAlbum.title}</h2>
                <h3 className="text-xl font-serif italic text-stone-400 mb-8">{selectedAlbum.titleCn}</h3>
                <div className="h-px w-16 bg-stone-200 mx-auto mb-8"></div>
                <p className="text-lg text-stone-500 font-light max-w-xl mx-auto italic">
                  {selectedAlbum.description}
                </p>
              </div>

              {/* Images Grid/List */}
              <div className="space-y-24">
                {selectedAlbum.images.map((img, idx) => (
                  <div 
                    key={`${selectedAlbum.id}-img-${idx}`} 
                    className={`animate-fade-up group relative ${
                      idx % 2 === 0 ? 'ml-0 mr-auto max-w-4xl' : 'ml-auto mr-0 max-w-3xl'
                    }`}
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="overflow-hidden bg-stone-50 rounded-sm shadow-sm">
                      <img 
                        src={img} 
                        alt={`${selectedAlbum.title} detail ${idx + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-[2s] group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <span className="text-[9px] text-stone-300 uppercase tracking-widest font-serif">
                        Detail Plate {idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="mt-40 text-center pb-24">
                <button 
                  onClick={() => setSelectedAlbum(null)}
                  className="group inline-flex flex-col items-center"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4 group-hover:text-stone-900">Back to Collection</span>
                  <div className="w-px h-12 bg-stone-200 group-hover:h-20 transition-all duration-700"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .animate-fade-up { animation: fade-up 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
};

export default Portfolio;
