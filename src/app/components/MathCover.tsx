import React from 'react';
import Link from 'next/link';

const MathCover: React.FC = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-8 p-6 dark:bg-gray-900 dark:text-white bg-white text-gray-900 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-300 mb-6">Rules for SAT Test</h2>
        <div className="divide-y divide-gray-800 dark:divide-gray-700">
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2">1. Bring Valid ID</h3>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna et elit
              egestas, sit amet ultrices sem pellentesque.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2">2. No Electronic Devices</h3>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna et elit
              egestas, sit amet ultrices sem pellentesque.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2">3. Follow Test Center Regulations</h3>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna et elit
              egestas, sit amet ultrices sem pellentesque.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2">4. Use Approved Calculators</h3>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna et elit
              egestas, sit amet ultrices sem pellentesque.
            </p>
          </div>
          <div className="py-4">
            <h3 className="text-xl font-semibold mb-2">5. Arrive on Time</h3>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula urna et elit
              egestas, sit amet ultrices sem pellentesque.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 dark:text-white bg-white text-gray-900">
        <h1 className="text-6xl font-bold mb-8 dark:text-gray-300">Get ready</h1>
        <Link href="/practice/questions" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-lg text-2xl">
            Start the Test
        </Link>
      </div>
    </div>
  );
};

export default MathCover;
