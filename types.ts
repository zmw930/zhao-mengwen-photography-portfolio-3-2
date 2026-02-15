
export type Category = 'All' | 'Life Aesthetics' | 'Food Light' | 'Fine Jewelry' | 'Fashion Style' | 'WHIMSICAL TOYS';

export interface PortfolioItem {
  id: string;
  category: Category;
  subCategory?: string;
  title: string;
  titleCn: string;
  images: string[]; // Changed from imageUrl: string to images: string[]
  description: string;
}

export interface NavItem {
  label: string;
  labelCn: string;
  href: string;
}
