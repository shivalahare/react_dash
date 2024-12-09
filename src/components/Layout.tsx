import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  mobileMenu: {
    isOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;
  };
}

const Layout = ({ children, mobileMenu }: LayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar isOpen={mobileMenu.isOpen} onClose={mobileMenu.closeMenu} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={mobileMenu.toggleMenu} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;