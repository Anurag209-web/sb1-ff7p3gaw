import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart, User, X } from 'lucide-react';
import Container from '../ui/Container';
import Logo from '../ui/Logo';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const { items } = useCart();
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-700 transition-colors">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-700 transition-colors">Products</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-700 transition-colors">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-700 transition-colors">Contact</Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {isAdmin && (
              <Link 
                to="/admin" 
                className="text-gray-700 hover:text-green-700 transition-colors flex items-center space-x-1"
              >
                <span className="hidden sm:inline">Admin</span>
              </Link>
            )}

            <Link 
              to="/cart" 
              className="text-gray-700 hover:text-green-700 transition-colors flex items-center"
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="ml-1 bg-green-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="relative group">
                <button className="text-gray-700 hover:text-green-700 transition-colors flex items-center">
                  <User size={20} />
                </button>
                <div className="absolute right-0 w-48 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <div className="py-1">
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Profile</Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Orders</Link>
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-green-700 transition-colors flex items-center">
                <User size={20} />
                <span className="ml-1 hidden sm:inline">Login</span>
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className="block text-gray-700 hover:text-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="block text-gray-700 hover:text-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block text-gray-700 hover:text-green-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link 
                    to="/admin" 
                    className="block text-gray-700 hover:text-green-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;