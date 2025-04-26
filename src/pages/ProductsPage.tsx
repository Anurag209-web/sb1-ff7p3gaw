import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Container from '../components/ui/Container';
import ProductGrid from '../components/product/ProductGrid';
import { Filter, Search } from 'lucide-react';
import { Product } from '../types';
import { products } from '../data/products';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fertilizer', name: 'Fertilizers' },
    { id: 'liquid', name: 'Liquid Products' },
    { id: 'specialty', name: 'Specialty Products' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'soil', name: 'Soil & Media' },
  ];
  
  useEffect(() => {
    let result = products;
    
    // Apply category filter
    if (activeCategory && activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Apply search filter
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(lowercasedSearch) || 
          product.description.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchTerm]);
  
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId === 'all' ? null : categoryId);
    setIsMobileFilterOpen(false);
  };

  return (
    <Layout>
      <div className="bg-gray-50 py-6">
        <Container>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Our Products</h1>
            
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent min-w-[250px]"
                />
                <Search 
                  size={18} 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                />
              </div>
            </div>
            
            <button 
              className="md:hidden flex items-center text-gray-700"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <Filter size={20} className="mr-1" />
              <span>Filter</span>
            </button>
          </div>
          
          {/* Mobile search (visible only on small screens) */}
          <div className="block md:hidden mb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search 
                size={18} 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Category filters - Desktop */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                        (category.id === 'all' && !activeCategory) || activeCategory === category.id
                          ? 'bg-green-100 text-green-800'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Category filters (conditionally visible) */}
            {isMobileFilterOpen && (
              <div className="block md:hidden mb-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                          (category.id === 'all' && !activeCategory) || activeCategory === category.id
                            ? 'bg-green-100 text-green-800'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {/* Product grid */}
            <div className="flex-grow">
              {filteredProducts.length > 0 ? (
                <>
                  <p className="text-gray-500 mb-4">
                    Showing {filteredProducts.length} products
                    {activeCategory && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
                  </p>
                  <ProductGrid products={filteredProducts} />
                </>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center">
                  <p className="text-gray-500 mb-2">No products found.</p>
                  <p className="text-gray-600">
                    Try adjusting your search or filter to find what you're looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ProductsPage;