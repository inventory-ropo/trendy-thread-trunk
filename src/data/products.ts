
import { Product } from "../types/Product";

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Blouse",
    price: 189,
    originalPrice: 250,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    category: "Women",
    description: "Luxurious silk blouse with elegant draping and a timeless silhouette. Perfect for both professional and casual settings.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy"],
    isNew: true,
    isSale: true
  },
  {
    id: "2",
    name: "Tailored Blazer",
    price: 329,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    category: "Women",
    description: "Impeccably tailored blazer crafted from premium wool blend. Features structured shoulders and a flattering fit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"],
    isNew: false
  },
  {
    id: "3",
    name: "Designer Handbag",
    price: 450,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    description: "Exquisite leather handbag with gold hardware and signature design elements. A statement piece for any wardrobe.",
    sizes: ["One Size"],
    colors: ["Black", "Brown", "Burgundy"],
    isNew: true
  },
  {
    id: "4",
    name: "Cashmere Sweater",
    price: 295,
    originalPrice: 395,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Women",
    description: "Ultra-soft cashmere sweater with ribbed detailing. The perfect layer for sophisticated comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Camel"],
    isSale: true
  },
  {
    id: "5",
    name: "Leather Jacket",
    price: 549,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Women",
    description: "Classic leather jacket with modern updates. Crafted from supple lambskin with asymmetrical zip closure.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    isNew: true
  },
  {
    id: "6",
    name: "Midi Dress",
    price: 225,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "Women",
    description: "Elegant midi dress with flowing silhouette and delicate print. Perfect for day-to-evening transitions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    isNew: false
  }
];
