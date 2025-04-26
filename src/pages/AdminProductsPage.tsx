import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import ProductList from '../components/admin/ProductList';
import ProductForm from '../components/admin/ProductForm';
import { Product } from '../types';
import { products as initialProducts } from '../data/products';
import { useAuth } from '../context/AuthContext';

const AdminProductsPage: React.FC = () => {
  const { isAuthenticated, isAdmin } = useAuth();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  
  // Redirect if not authenticated or not admin
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />;
  }
  
  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsAddingProduct(true);
  };
  
  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsAddingProduct(false);
  };
  
  const handleDeleteProduct = (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== productId));
    }
  };
  
  const handleProductSubmit = (productData: Partial<Product>) => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(product => 
        product.id === editingProduct.id 
          ? { ...product, ...productData } as Product
          : product
      ));
    } else {
      // Add new product
      setProducts([...products, productData as Product]);
    }
    
    setEditingProduct(null);
    setIsAddingProduct(false);
  };
  
  const handleCancel = () => {
    setEditingProduct(null);
    setIsAddingProduct(false);
  };
  
  return (
    <Layout>
      <Container className="py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {isAddingProduct || editingProduct ? (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <ProductForm 
                product={editingProduct || undefined}
                onSubmit={handleProductSubmit}
                onCancel={handleCancel}
              />
            </div>
          ) : (
            <ProductList 
              products={products}
              onAdd={handleAddProduct}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
            />
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default AdminProductsPage;