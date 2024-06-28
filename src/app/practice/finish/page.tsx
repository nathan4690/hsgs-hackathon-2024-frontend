'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';

const EndingScreen: React.FC = () => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/homepage'); // Replace with the actual path to the user's homepage
  };

  return (
    <div className="dark:dark flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white w-full">
      <h1 className="text-5xl font-bold mb-4 w-full text-center">Congratulations!</h1>
      <p className="text-xl mb-6 w-full text-center">You have successfully finished the practice test.</p>
      <Button
        onClick={handleRedirect}
        // className="px-6 py-3 rounded-md text-white bg-blue-500 hover:bg-blue-600"
      >
        Go to Homepage
      </Button>
    </div>
  );
};

export default EndingScreen;