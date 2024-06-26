'use client'

import React from 'react';
import Link from 'next/link';

const AuthForm: React.FC<{ isLogin: boolean }> = ({ isLogin }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here (e.g., login/register API calls)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-md w-full p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-white">Email</label>
            <input type="email" id="email" className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-lg focus:outline-none focus:bg-gray-600" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-white">Password</label>
            <input type="password" id="password" className="w-full px-3 py-2 mt-1 text-white bg-gray-700 rounded-lg focus:outline-none focus:bg-gray-600" required />
          </div>
          <div className="flex justify-center">
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">{isLogin ? 'Login' : 'Register'}</button>
          </div>
        </form>
        <div className="mt-6 text-center text-white">
          {isLogin ? (
            <>
              <p>Don't have an account? <Link href="/register" className="text-blue-400 hover:text-blue-300">Register</Link></p>
            </>
          ) : (
            <>
              <p>Already have an account? <Link href="/login" className="text-blue-400 hover:text-blue-300">Login</Link></p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
