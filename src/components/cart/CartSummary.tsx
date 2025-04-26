import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';

const CartSummary: React.FC = () => {
  const { items, total } = useCart();
  const navigate = useNavigate();
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const shippingFee = total >= 1000 ? 0 : 99;
  const tax = total * 0.18; // 18% GST
  const orderTotal = total + shippingFee + tax;
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({itemCount} items)</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          {shippingFee === 0 ? (
            <span className="text-green-700 font-medium">Free</span>
          ) : (
            <span>₹{shippingFee.toFixed(2)}</span>
          )}
        </div>
        
        <div className="flex justify-between text-gray-600">
          <span>GST (18%)</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        
        {shippingFee > 0 && (
          <div className="text-sm text-green-700 pt-2">
            Add ₹{(1000 - total).toFixed(2)} more to get free shipping!
          </div>
        )}
        
        <div className="border-t border-gray-200 pt-3 mt-3">
          <div className="flex justify-between font-bold text-gray-800">
            <span>Order Total</span>
            <span>₹{orderTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <Button 
        variant="primary" 
        size="lg" 
        fullWidth
        onClick={handleCheckout}
        disabled={items.length === 0}
      >
        Proceed to Checkout
      </Button>
      
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>We accept all major credit/debit cards, UPI, and net banking options.</p>
      </div>
    </div>
  );
};

export default CartSummary;