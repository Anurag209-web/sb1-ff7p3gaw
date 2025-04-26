import React from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import CheckoutForm from '../components/checkout/CheckoutForm';

const CheckoutPage: React.FC = () => {
  return (
    <Layout>
      <Container className="py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Checkout</h1>
        <CheckoutForm />
      </Container>
    </Layout>
  );
};

export default CheckoutPage;