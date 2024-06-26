import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-800 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-lg font-bold text-white dark:text-gray-200">MySite</a>
          </div>
          <nav className="md:ml-6 md:flex md:space-x-4">
            <a href="/mathematics" className="text-white dark:text-gray-200 hover:text-gray-300 px-3 py-2 text-sm font-medium">Mathematics</a>
            <a href="/english" className="text-white dark:text-gray-200 hover:text-gray-300 px-3 py-2 text-sm font-medium">English</a>
            <a href="/practice" className="text-white dark:text-gray-200 hover:text-gray-300 px-3 py-2 text-sm font-medium">Practice</a>
          </nav>
          <div className="flex items-center">
            <a href="/login" className="text-white dark:text-gray-200 hover:text-gray-300 ml-4 text-sm font-medium">Login</a>
            <a href="/register" className="text-white dark:text-gray-200 hover:text-gray-300 ml-2 text-sm font-medium">Register</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
