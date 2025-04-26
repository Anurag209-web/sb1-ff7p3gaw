import React from 'react';
import { Leaf } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="absolute -inset-1">
          <div className="w-full h-full rotate-45 bg-gradient-to-r from-green-600 to-green-800 opacity-20 blur"></div>
        </div>
        <div className="relative flex items-center justify-center w-8 h-8 transform rotate-45 bg-green-800">
          <Leaf className="w-5 h-5 text-white transform -rotate-45" />
        </div>
      </div>
      <div>
        <span className="text-green-800 font-bold text-xl sm:text-2xl">Vermi Valley</span>
        <span className="hidden sm:inline-block text-green-700 font-medium ml-1">Organics</span>
      </div>
    </div>
  );
};

export default Logo;