import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { Address } from '../../types';

const CheckoutForm: React.FC = () => {
  const { items, total, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const shippingFee = total >= 1000 ? 0 : 99;
  const tax = total * 0.18; // 18% GST
  const orderTotal = total + shippingFee + tax;
  
  const [shippingAddress, setShippingAddress] = useState<Address>({
    fullName: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    phone: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/checkout' } });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      // In a real app, you would integrate with a payment gateway here
      // For demo purposes, we'll just show a success message
      clearCart();
      navigate('/order-success');
      setIsProcessing(false);
    }, 2000);
  };
  
  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-lg text-gray-600 mb-4">Your cart is empty</p>
        <Button variant="primary" onClick={() => navigate('/products')}>
          Continue Shopping
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Shipping Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={shippingAddress.fullName}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={shippingAddress.phone}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={shippingAddress.streetAddress}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={shippingAddress.city}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={shippingAddress.state}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={shippingAddress.postalCode}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
      
      {/* Payment Method */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="radio"
              id="card"
              name="paymentMethod"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={() => handlePaymentMethodChange('card')}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
            />
            <label htmlFor="card" className="ml-2 block text-sm text-gray-700">
              Credit/Debit Card
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="upi"
              name="paymentMethod"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={() => handlePaymentMethodChange('upi')}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
            />
            <label htmlFor="upi" className="ml-2 block text-sm text-gray-700">
              UPI Payment
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="netbanking"
              name="paymentMethod"
              value="netbanking"
              checked={paymentMethod === 'netbanking'}
              onChange={() => handlePaymentMethodChange('netbanking')}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
            />
            <label htmlFor="netbanking" className="ml-2 block text-sm text-gray-700">
              Net Banking
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="radio"
              id="cod"
              name="paymentMethod"
              value="cod"
              checked={paymentMethod === 'cod'}
              onChange={() => handlePaymentMethodChange('cod')}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
            />
            <label htmlFor="cod" className="ml-2 block text-sm text-gray-700">
              Cash on Delivery
            </label>
          </div>
        </div>
        
        {paymentMethod === 'card' && (
          <div className="mt-4 p-4 border border-gray-200 rounded-md">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    placeholder="MM/YY"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="123"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        
        {paymentMethod === 'upi' && (
          <div className="mt-4 p-4 border border-gray-200 rounded-md">
            <div>
              <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                UPI ID
              </label>
              <input
                type="text"
                id="upiId"
                placeholder="name@upi"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Order Summary */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="space-y-2 mb-4">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between">
                <div className="flex-1">
                  <span className="text-gray-800">{item.product.name}</span>
                  <span className="text-gray-500 ml-2">× {item.quantity}</span>
                </div>
                <span className="text-gray-800">
                  ₹{((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-200 pt-2 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              {shippingFee === 0 ? (
                <span className="text-green-700">Free</span>
              ) : (
                <span>₹{shippingFee.toFixed(2)}</span>
              )}
            </div>
            
            <div className="flex justify-between text-gray-600">
              <span>GST (18%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between font-semibold text-gray-800 pt-2 border-t border-gray-200">
              <span>Order Total</span>
              <span>₹{orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <Button 
        type="submit" 
        variant="primary" 
        size="lg" 
        fullWidth
        isLoading={isProcessing}
      >
        {isProcessing ? 'Processing Order...' : 'Place Order'}
      </Button>
    </form>
  );
};

export default CheckoutForm;