import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

// Mock user data for demo purposes
const DEMO_ADMIN_USER: User = {
  id: 'admin1',
  name: 'Admin User',
  email: 'admin@example.com',
  isAdmin: true
};

const DEMO_REGULAR_USER: User = {
  id: 'user1',
  name: 'Regular User',
  email: 'user@example.com',
  isAdmin: false
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Mock authentication for demo purposes
    // In a real application, this would make an API call to verify credentials
    
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser(DEMO_ADMIN_USER);
      localStorage.setItem('user', JSON.stringify(DEMO_ADMIN_USER));
      return true;
    } else if (email === 'user@example.com' && password === 'user123') {
      setUser(DEMO_REGULAR_USER);
      localStorage.setItem('user', JSON.stringify(DEMO_REGULAR_USER));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};