import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <Head>
        <title>Next.js with Dark and Light Theme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <MainSection />

      <Footer />
    </div>
  );
};

export default Home;