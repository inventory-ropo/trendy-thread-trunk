
import { Heart } from "lucide-react";
import { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden bg-gray-100 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
          <Heart size={16} />
        </button>
        {product.isNew && (
          <span className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium">
            NEW
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-medium">
            SALE
          </span>
        )}
      </div>
      
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{product.category}</p>
        <div className="flex items-center mt-2">
          <span className="text-lg font-medium text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="ml-2 text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
