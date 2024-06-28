'use client'

import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';
import Header from '@/app/components/Header';

const RedirectLogin: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className='dark:dark dark:bg-gray-900 text-white'>
      <Header />
      <div className="dark:dark flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white w-full">
        <h1 className="text-5xl font-bold mb-4 w-full text-center">Access Denied</h1>
        <p className="text-xl mb-6 w-full text-center">You must log in to continue</p>
      </div>
    </div>
  );
};

export default RedirectLogin;