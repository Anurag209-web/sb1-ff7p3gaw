import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-green-900 to-green-800 relative overflow-hidden">
      {/* Decoration Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center py-16 md:py-24">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Organic Vermicompost for Healthier Plants
            </h1>
            <p className="text-green-100 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              Premium quality vermicompost and organic products that improve soil health, boost plant growth, and protect the environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                variant="secondary" 
                size="lg"
                as={Link} 
                to="/products"
                className="rounded-full"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                as={Link} 
                to="/about"
                className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-green-800"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/7728094/pexels-photo-7728094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Organic Vermicompost" 
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">Eco-friendly Solutions</p>
                    <p className="text-green-200 text-sm">100% Organic & Sustainable</p>
                  </div>
                  <div className="bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;