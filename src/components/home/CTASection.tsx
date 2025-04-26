import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

const CTASection: React.FC = () => {
  return (
    <section className="py-16">
      <Container>
        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Organic?</h2>
                <p className="text-green-100 mb-6">
                  Transform your garden with our premium vermicompost products. Order now and enjoy healthy, vibrant plants while supporting sustainable agriculture.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    as={Link}
                    to="/products"
                  >
                    Shop Products
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    as={Link}
                    to="/contact"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-green-700"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[300px]">
              <img 
                src="https://images.pexels.com/photos/6231753/pexels-photo-6231753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Organic Farming" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;