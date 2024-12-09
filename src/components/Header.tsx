import React from 'react';
import { Bell, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import MobileMenuButton from './MobileMenuButton';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const location = useLocation();
  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Dashboard';
    return path.substring(1).charAt(0).toUpperCase() + path.slice(2);
  };

  return (
    <header className="bg-white h-16 px-4 lg:px-6 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <MobileMenuButton onClick={onMenuClick} />
        <h2 className="text-xl font-semibold text-gray-800">{getPageTitle()}</h2>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline-block text-sm font-medium text-gray-700">Shiva Lahare</span>
          <button className="p-1 rounded-full bg-gray-100">
            <User className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;