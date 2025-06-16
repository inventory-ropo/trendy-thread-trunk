
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
}
