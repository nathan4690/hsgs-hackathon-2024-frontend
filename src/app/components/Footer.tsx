import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold">Authors: John Doe & Jane Smith</p>
            <p className="text-sm">Email: example@example.com</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 2v4h3l1-4h-4V0c-1.1 0-2 .9-2 2v2H8v4h3v9h4v-9h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm5 6h-10l-5 4.5l5 4.5h10l5-4.5l-5-4.5z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10s-4.48-10-10-10zm-2 10v-2l-3-3l1-4h2l-1 4l2 2h3l3 3v2h-6z" />
              </svg>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14s2-1 5-1 5 1 5 1V9s-2-1-5-1-5 1-5 1v5zM3 14s2-1 5-1 5 1 5 1V9s-2-1-5-1-5 1-5 1v5zM21 10v2a1 1 0 0 1-1 1h-4l2.5 2.5L17 19h-2a3 3 0 0 1-3-3v-3h2l-1-1-1 1h2v3a1 1 0 0 0 1 1h1a3 3 0 0 0 3-3v-2h-2l1-1 1 1h-2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
