'use client'

import Head from 'next/head';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

const Login: React.FC = () => {
  return (
    <div className="dark bg-gray-900 text-white">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AuthForm isLogin={true} />

      <Footer />
    </div>
  );
};

export default Login;
