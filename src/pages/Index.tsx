
import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductModal from "../components/ProductModal";
import { CartProvider } from "../contexts/CartContext";
import { Product } from "../types/Product";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <FeaturedProducts onProductClick={setSelectedProduct} />
        <Newsletter />
        <Footer />
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </div>
    </CartProvider>
  );
};

export default Index;
