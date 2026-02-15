
import { PortfolioItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', labelCn: '首页', href: '#home' },
  { label: 'Portfolio', labelCn: '作品', href: '#portfolio' },
  { label: 'About', labelCn: '关于', href: '#about' },
  { label: 'Contact', labelCn: '联系', href: '#contact' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Life Aesthetics - 6 Items
  {
    id: 'la-1',
    category: 'Life Aesthetics',
    subCategory: 'Appliances',
    title: 'Minimalist Vessel',
    titleCn: '器物之美',
    description: 'The silent beauty of ceramic forms in morning light.',
    imageUrl: 'https://images.unsplash.com/photo-1578500484698-f321741d89d1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'la-2',
    category: 'Life Aesthetics',
    subCategory: 'Soft Decoration',
    title: 'Fabric & Shadow',
    titleCn: '织物与影',
    description: 'Natural linen textures in a Nordic setting.',
    imageUrl: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'la-3',
    category: 'Life Aesthetics',
    subCategory: 'Daily Supplies',
    title: 'Morning Ritual',
    titleCn: '晨间序曲',
    description: 'Minimalist essentials for a calm start.',
    imageUrl: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'la-4',
    category: 'Life Aesthetics',
    subCategory: 'Personal Care',
    title: 'Pure Essence',
    titleCn: '净之本质',
    description: 'Organic beauty products in soft daylight.',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'la-5',
    category: 'Life Aesthetics',
    subCategory: 'Appliances',
    title: 'Curated Objects',
    titleCn: '物之馆藏',
    description: 'A selection of Nordic design classics.',
    imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'la-6',
    category: 'Life Aesthetics',
    subCategory: 'Soft Decoration',
    title: 'Linen Harmony',
    titleCn: '麻色谐音',
    description: 'Textiles that breathe life into space.',
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800'
  },

  // Food Light - 6 Items
  {
    id: 'fl-1',
    category: 'Food Light',
    subCategory: 'Coffee',
    title: 'Slow Morning Brew',
    titleCn: '慢调手冲',
    description: 'Capturing the steam and aroma of early coffee.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fl-2',
    category: 'Food Light',
    subCategory: 'Baking',
    title: 'Artisan Sourdough',
    titleCn: '面包物语',
    description: 'The golden crust and soft light of fresh baking.',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fl-3',
    category: 'Food Light',
    subCategory: 'Tea',
    title: 'Zen Tea Moment',
    titleCn: '禅意茶事',
    description: 'A quiet afternoon with traditional tea.',
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fl-4',
    category: 'Food Light',
    subCategory: 'Snacks',
    title: 'Sweet Delights',
    titleCn: '甜点时光',
    description: 'Minimalist compositions of refined sweets.',
    imageUrl: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fl-5',
    category: 'Food Light',
    subCategory: 'Fresh Food',
    title: 'Organic Harvest',
    titleCn: '自然馈赠',
    description: 'Vibrant colors of seasonal fresh produce.',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fl-6',
    category: 'Food Light',
    subCategory: 'Coffee',
    title: 'Espresso Soul',
    titleCn: '意式之魂',
    description: 'Deep tones and rich textures of dark coffee.',
    imageUrl: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=800'
  },

  // Fine Jewelry - 6 Items
  {
    id: 'fj-1',
    category: 'Fine Jewelry',
    subCategory: 'Necklaces',
    title: 'Golden Reflections',
    titleCn: '光影颈间',
    description: 'Macro textures of fine gold against silk.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fj-2',
    category: 'Fine Jewelry',
    subCategory: 'Earrings',
    title: 'Pearl Serenity',
    titleCn: '珠光微澜',
    description: 'Soft lighting highlighting delicate pearl finishes.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fj-3',
    category: 'Fine Jewelry',
    subCategory: 'Bracelets',
    title: 'Silver Intertwine',
    titleCn: '银色交织',
    description: 'Complex patterns in minimalist silver jewelry.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fj-4',
    category: 'Fine Jewelry',
    subCategory: 'Rings',
    title: 'Eternal Bond',
    titleCn: '指间永恒',
    description: 'Classic ring designs in natural light.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3f416?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fj-5',
    category: 'Fine Jewelry',
    subCategory: 'Brooches',
    title: 'Artistic Accent',
    titleCn: '艺术点缀',
    description: 'Sculptural brooches as wearable art.',
    imageUrl: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fj-6',
    category: 'Fine Jewelry',
    subCategory: 'Accessories',
    title: 'Modern Elegance',
    titleCn: '现代优雅',
    description: 'Contemporary jewelry pieces for everyday wear.',
    imageUrl: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&q=80&w=800'
  },

  // Fashion Style - 6 Items
  {
    id: 'fs-1',
    category: 'Fashion Style',
    subCategory: 'Bags',
    title: 'Leather Textures',
    titleCn: '皮具韵律',
    description: 'Focusing on craftsmanship and organic materials.',
    imageUrl: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fs-2',
    category: 'Fashion Style',
    subCategory: 'Shoes',
    title: 'Urban Steps',
    titleCn: '行走都市',
    description: 'Minimalist footwear in clean architectural spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fs-3',
    category: 'Fashion Style',
    subCategory: 'Cloths',
    title: 'Linen Collection',
    titleCn: '麻衣系列',
    description: 'Lightweight fabrics for summer lifestyle.',
    imageUrl: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fs-4',
    category: 'Fashion Style',
    subCategory: 'Hats',
    title: 'Shadow Play',
    titleCn: '光影檐下',
    description: 'Architectural hat designs and natural shadow.',
    imageUrl: 'https://images.unsplash.com/photo-1533055640609-24b498dfd74c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fs-5',
    category: 'Fashion Style',
    subCategory: 'Accessories',
    title: 'Silk Detail',
    titleCn: '丝缕柔情',
    description: 'Soft silk scarves in gentle morning light.',
    imageUrl: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'fs-6',
    category: 'Fashion Style',
    subCategory: 'Bags',
    title: 'Classic Tote',
    titleCn: '经典托特',
    description: 'Clean lines and functional minimalist design.',
    imageUrl: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800'
  },
];
