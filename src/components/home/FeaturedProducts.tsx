import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import ProductGrid from '../product/ProductGrid';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="py-16">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <Link 
            to="/products" 
            className="text-green-700 hover:text-green-900 flex items-center gap-1 font-medium"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </Container>
    </section>
  );
};

export default FeaturedProducts;