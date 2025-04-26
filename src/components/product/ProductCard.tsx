import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import Button from '../ui/Button';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.discountPrice && (
            <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded">
              {Math.floor(((product.price - product.discountPrice) / product.price) * 100)}% OFF
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-green-700 transition-colors">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.shortDescription}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {product.discountPrice ? (
                <>
                  <span className="text-lg font-bold text-gray-900">₹{product.discountPrice}</span>
                  <span className="ml-2 text-sm text-gray-500 line-through">₹{product.price}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
              )}
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ShoppingCart size={16} />
              <span className="sr-only">Add to cart</span>
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;