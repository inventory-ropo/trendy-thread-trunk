
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import { Product } from "../types/Product";

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
}

const FeaturedProducts = ({ onProductClick }: FeaturedProductsProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Featured Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our carefully curated selection of premium fashion pieces, designed for the modern individual.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
