import React from 'react';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const price = product.discountPrice || product.price;
  const totalPrice = price * quantity;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 py-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-0">
        <Link to={`/products/${product.id}`} className="shrink-0">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-20 h-20 object-cover rounded-md"
          />
        </Link>
        
        <div className="ml-0 sm:ml-4 mt-3 sm:mt-0 text-center sm:text-left">
          <Link 
            to={`/products/${product.id}`}
            className="text-lg font-medium text-gray-800 hover:text-green-700 transition-colors"
          >
            {product.name}
          </Link>
          <p className="text-sm text-gray-500 mt-1">{product.weight}</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-3 sm:mt-0">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button 
            onClick={handleDecreaseQuantity}
            className="flex items-center justify-center p-2 hover:text-green-700 transition-colors"
          >
            <MinusCircle size={16} />
          </button>
          
          <span className="px-4">{quantity}</span>
          
          <button 
            onClick={handleIncreaseQuantity}
            className="flex items-center justify-center p-2 hover:text-green-700 transition-colors"
          >
            <PlusCircle size={16} />
          </button>
        </div>
        
        <div className="text-right">
          <div className="text-lg font-semibold text-gray-800 min-w-[80px]">
            ₹{totalPrice.toFixed(2)}
          </div>
          {quantity > 1 && (
            <div className="text-xs text-gray-500">
              (₹{price.toFixed(2)} each)
            </div>
          )}
        </div>
        
        <button 
          onClick={handleRemove}
          className="text-gray-400 hover:text-red-500 transition-colors ml-2"
          aria-label="Remove item"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;