import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import { products } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts products={products} />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default HomePage;