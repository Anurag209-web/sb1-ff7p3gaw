import React from 'react';
import { Star } from 'lucide-react';
import Container from '../ui/Container';

const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Home Gardener',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'I\'ve been using EcoWorm\'s vermicompost for my kitchen garden, and the results are amazing! My vegetables are healthier and more abundant than ever before.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Organic Farmer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'As an organic farmer, the quality of soil amendments is crucial. EcoWorm\'s products have significantly improved my soil health and crop yields while keeping everything 100% organic.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Landscape Designer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    quote: 'I recommend EcoWorm products to all my clients. The plants thrive, and my customers appreciate the sustainable approach to maintaining their landscapes.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-green-800 text-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-green-100 max-w-2xl mx-auto">
            Hear from customers who have transformed their gardens and farms with our organic vermicompost products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-green-700 p-6 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}
                  />
                ))}
              </div>
              <p className="italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-green-200 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;