
import { useState } from "react";
import { Search, ShoppingBag, Menu, X, Heart, User } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import CartSidebar from "./CartSidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getCartCount } = useCart();

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">LUXE</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">New In</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Women</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Men</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Accessories</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 transition-colors">Sale</a>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart size={20} />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <User size={20} />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">New In</a>
                <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Women</a>
                <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Men</a>
                <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Accessories</a>
                <a href="#" className="block px-3 py-2 text-gray-900 hover:bg-gray-100 rounded-md">Sale</a>
              </div>
            </div>
          )}
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
