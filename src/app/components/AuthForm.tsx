'use client'

import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import { addAccountToDatabase, loginPasswordVerify } from '../services/auth';

import {Input,Card,CardBody} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import LoadingButton from './LoadingButton';

import { useRouter } from 'next/navigation';

const AuthForm: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
          // window.alert(`You have already logged in as ${savedUser}! Please sign out to continue.`)
          router.push("/profile");
      } 
  }, [router]);

  const handleRegister = async () => {
      const result = await addAccountToDatabase(username, password);
      if(result.Status == 0) {
        setStatus("Registered successfully");
        router.push("/");
      }else{
        setStatus("Register failed, please check your credentials!");
        setLoading(false);
      }
  };

  const handleLogin = async () => {
    const result = await loginPasswordVerify(username, password);
    console.log(result);
    if (result.Status === 0) {
        localStorage.setItem('user', JSON.stringify({ username }));
        setStatus('Login successful');
        router.push('/'); // Redirect to homepage
    } else {
        setStatus('Login failed');
        setLoading(false);
    }
};
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here (e.g., login/register API calls)
    setLoading(true);
    if(isLogin) handleLogin();
    else handleRegister();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="max-w-md w-full p-8 bg-white dark:bg-gray-800">
        <CardBody >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{isLogin ? 'Login' : 'Register'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              {/* <label htmlFor="email" className="block text-gray-900 dark:text-white">Email</label> */}
              <Input type="text" label="Username" id="username" onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                {/* <label htmlFor="password" className="block text-gray-900 dark:text-white">Password</label> */}
                <Input type="password" id="password" label="Password" onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none" isLoading={loading}>{isLogin ? 'Login' : 'Register'}</Button>
            </div>
          </form>
          <div className="mt-6 text-center text-gray-900 dark:text-white">
           {isLogin ? (
            <>
              <p>Don't have an account? <Link href="/register" className="text-blue-500 hover:text-blue-400">Register</Link></p>
            </>
          ) : (
            <>
              <p>Already have an account? <Link href="/login" className="text-blue-500 hover:text-blue-400">Login</Link></p>
            </>
          )}
        </div>
        <p>{status}</p>
        </CardBody>
      </Card>
    </div>
    // <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    //   <div className="max-w-md w-full p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    //     <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">{isLogin ? 'Login' : 'Register'}</h2>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div>
    //         <label htmlFor="email" className="block text-gray-900 dark:text-white">Email</label>
    //         <input type="email" id="email" className="w-full px-3 py-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600" required />
    //       </div>
    //       <div>
    //         <label htmlFor="password" className="block text-gray-900 dark:text-white">Password</label>
    //         <input type="password" id="password" className="w-full px-3 py-2 mt-1 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-lg focus:outline-none focus:bg-gray-200 dark:focus:bg-gray-600" required />
    //       </div>
    //       <div className="flex justify-center">
    //         <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">{isLogin ? 'Login' : 'Register'}</button>
    //       </div>
    //     </form>
    //     <div className="mt-6 text-center text-gray-900 dark:text-white">
    //       {isLogin ? (
    //         <>
    //           <p>Don't have an account? <Link href="/register" className="text-blue-500 hover:text-blue-400">Register</Link></p>
    //         </>
    //       ) : (
    //         <>
    //           <p>Already have an account? <Link href="/login" className="text-blue-500 hover:text-blue-400">Login</Link></p>
    //         </>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default AuthForm;
