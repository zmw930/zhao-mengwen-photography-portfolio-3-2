
export type Category = 'All' | 'Life Aesthetics' | 'Food Light' | 'Fine Jewelry' | 'Fashion Style';

export interface PortfolioItem {
  id: string;
  category: Category;
  subCategory?: string;
  title: string;
  titleCn: string;
  imageUrl: string;
  description: string;
}

export interface NavItem {
  label: string;
  labelCn: string;
  href: string;
}
