import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, PackageOpen, ShoppingBag, Truck } from 'lucide-react';
import Button from '../ui/Button';
import Container from '../ui/Container';

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();
  const orderId = `ECO${Math.floor(100000 + Math.random() * 900000)}`;
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle size={48} className="text-green-700" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your purchase. Your order has been received and is being processed.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="text-left">
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Order ID:</span>
              <span className="font-semibold">{orderId}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-500">Date:</span>
              <span className="font-semibold">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Payment Method:</span>
              <span className="font-semibold">Credit Card</span>
            </div>
          </div>
        </div>
        
        <div className="relative mb-12">
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-1 bg-green-100"></div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <div className="bg-green-700 rounded-full p-2 z-10">
                <ShoppingBag size={20} className="text-white" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Order Placed</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-green-700 rounded-full p-2 z-10">
                <CheckCircle size={20} className="text-white" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-700">Confirmed</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-2 z-10">
                <PackageOpen size={20} className="text-gray-500" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-500">Packed</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 rounded-full p-2 z-10">
                <Truck size={20} className="text-gray-500" />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-500">Shipped</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-8">
          You will receive an email confirmation shortly with all the details of your order.
          Track your order status in the "My Orders" section.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </Button>
          <Button 
            variant="outline" 
            onClick={() => navigate('/orders')}
          >
            View My Orders
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default OrderSuccess;