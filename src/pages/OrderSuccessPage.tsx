import React from 'react';
import Layout from '../components/layout/Layout';
import OrderSuccess from '../components/checkout/OrderSuccess';

const OrderSuccessPage: React.FC = () => {
  return (
    <Layout>
      <OrderSuccess />
    </Layout>
  );
};

export default OrderSuccessPage;