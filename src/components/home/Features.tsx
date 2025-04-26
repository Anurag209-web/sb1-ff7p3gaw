import React from 'react';
import { Leaf, Recycle, Sprout, ThumbsUp } from 'lucide-react';
import Container from '../ui/Container';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-green-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Vermicompost?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our premium vermicompost products offer numerous benefits for your plants and the environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700">
              <Sprout size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Plant Growth</h3>
            <p className="text-gray-600">
              Rich in nutrients that promote stronger roots and healthier plants with improved yields.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">100% Organic</h3>
            <p className="text-gray-600">
              Free from chemicals and synthetic additives, making it safe for organic gardening and farming.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700">
              <Recycle size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Eco-Friendly</h3>
            <p className="text-gray-600">
              Reduces waste, improves soil health, and promotes sustainable agricultural practices.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-700">
              <ThumbsUp size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Carefully processed to ensure the highest quality and effectiveness for all plant types.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;