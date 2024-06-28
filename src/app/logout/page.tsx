'use client'

import { useRouter } from 'next/navigation';
import LoadingButton from '../components/LoadingButton';
import Link from 'next/link';

const LogoutMessage = () => {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">You have successfully logged out</h1>
      <p className="text-lg text-gray-700 text-white dark:text-gray-300 mb-8">Thank you for visiting. Please come back again later.</p>
      <LoadingButton color="primary" as={Link} href="/">Return to Home</LoadingButton>
    </div>
  );
};

export default LogoutMessage;