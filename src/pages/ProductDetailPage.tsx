import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, ShoppingCart, Star } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    // Reset state when product changes
    setQuantity(1);
    setShowAddedMessage(false);
  }, [id]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setShowAddedMessage(true);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 3000);
    }
  };
  
  if (!product) {
    return (
      <Layout>
        <Container className="py-12">
          <div className="text-center">
            <p className="text-lg text-gray-600">Product not found.</p>
            <Link 
              to="/products" 
              className="mt-4 inline-flex items-center text-green-700 hover:text-green-800"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to all products
            </Link>
          </div>
        </Container>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <Container className="py-8">
        <Link 
          to="/products" 
          className="inline-flex items-center text-gray-600 hover:text-green-700 mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to all products
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-2">
                <span className="text-sm text-gray-500 uppercase">{product.category}</span>
                {product.featured && (
                  <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">4.0 (16 reviews)</span>
              </div>
              
              <div className="mb-6">
                {product.discountPrice ? (
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-900">₹{product.discountPrice}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">₹{product.price}</span>
                    <span className="ml-2 bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                      {Math.floor(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">₹{product.price}</span>
                )}
                <div className="text-green-700 mt-1">
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </div>
                <div className="mt-1 text-sm text-gray-500">Size: {product.weight}</div>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits:</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Add to Cart Section */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    min="1" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    className="w-12 text-center border-0 focus:outline-none focus:ring-0"
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800"
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  variant="primary" 
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className="flex-1"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
              </div>
              
              {showAddedMessage && (
                <div className="mt-4 p-2 bg-green-100 text-green-800 rounded-md flex items-center">
                  <Check size={18} className="mr-2" />
                  Added to cart successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default ProductDetailPage;