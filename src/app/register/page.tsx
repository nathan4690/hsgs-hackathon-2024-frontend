'use client'

import Head from 'next/head';
import Header from '../components/Header';
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';

const Register: React.FC = () => {
  return (
    <div className='dark:dark'>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <AuthForm isLogin={false} />

      <Footer />
    </div>
  );
};

export default Register;
