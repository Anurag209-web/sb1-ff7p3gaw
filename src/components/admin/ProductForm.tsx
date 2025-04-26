import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import { Product } from '../../types';

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Partial<Product>) => void;
  onCancel: () => void;
}

const defaultProduct: Partial<Product> = {
  name: '',
  shortDescription: '',
  description: '',
  price: 0,
  stock: 0,
  imageUrl: '',
  category: 'fertilizer',
  featured: false,
  weight: '',
  benefits: [''],
};

const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Partial<Product>>(defaultProduct);
  const [benefitFields, setBenefitFields] = useState<string[]>(['']);
  
  useEffect(() => {
    if (product) {
      setFormData(product);
      setBenefitFields(product.benefits || ['']);
    }
  }, [product]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (name === 'price' || name === 'discountPrice' || name === 'stock') {
      setFormData({
        ...formData,
        [name]: value === '' ? '' : Number(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  
  const handleBenefitChange = (index: number, value: string) => {
    const updatedBenefits = [...benefitFields];
    updatedBenefits[index] = value;
    setBenefitFields(updatedBenefits);
  };
  
  const addBenefitField = () => {
    setBenefitFields([...benefitFields, '']);
  };
  
  const removeBenefitField = (index: number) => {
    const updatedBenefits = benefitFields.filter((_, i) => i !== index);
    setBenefitFields(updatedBenefits);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const benefits = benefitFields.filter(benefit => benefit.trim() !== '');
    
    // If editing an existing product, maintain its ID
    const submitData: Partial<Product> = {
      ...formData,
      benefits,
    };
    
    if (product?.id) {
      submitData.id = product.id;
    } else {
      // For new products, generate a random ID
      submitData.id = Date.now().toString();
    }
    
    onSubmit(submitData);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ''}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">
            Short Description*
          </label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            value={formData.shortDescription || ''}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Full Description*
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description || ''}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Regular Price (₹)*
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price || ''}
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="discountPrice" className="block text-sm font-medium text-gray-700 mb-1">
            Discount Price (₹)
          </label>
          <input
            type="number"
            id="discountPrice"
            name="discountPrice"
            value={formData.discountPrice || ''}
            onChange={handleInputChange}
            min="0"
            step="0.01"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
            Stock Quantity*
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={formData.stock || ''}
            onChange={handleInputChange}
            required
            min="0"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
            Weight/Size*
          </label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight || ''}
            onChange={handleInputChange}
            required
            placeholder="e.g., 5 kg, 1 liter"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category*
          </label>
          <select
            id="category"
            name="category"
            value={formData.category || ''}
            onChange={handleInputChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="fertilizer">Fertilizer</option>
            <option value="liquid">Liquid Products</option>
            <option value="specialty">Specialty Products</option>
            <option value="equipment">Equipment</option>
            <option value="soil">Soil & Growing Media</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
            Image URL*
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl || ''}
            onChange={handleInputChange}
            required
            placeholder="https://example.com/image.jpg"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            name="featured"
            checked={formData.featured || false}
            onChange={handleInputChange}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
            Featured Product
          </label>
        </div>
      </div>
      
      {/* Benefits Section */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Benefits
        </label>
        
        {benefitFields.map((benefit, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={benefit}
              onChange={(e) => handleBenefitChange(index, e.target.value)}
              placeholder="Enter a product benefit"
              className="flex-grow border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            
            {benefitFields.length > 1 && (
              <button
                type="button"
                onClick={() => removeBenefitField(index)}
                className="text-red-500 hover:text-red-700 px-2"
              >
                Remove
              </button>
            )}
          </div>
        ))}
        
        <button
          type="button"
          onClick={addBenefitField}
          className="mt-2 text-sm text-green-700 hover:text-green-800 font-medium"
        >
          + Add Another Benefit
        </button>
      </div>
      
      {/* Form Actions */}
      <div className="flex justify-end gap-4 mt-8">
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          variant="primary"
        >
          {product ? 'Update Product' : 'Add Product'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;