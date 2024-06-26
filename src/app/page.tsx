import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import MainSection from './components/MainSection';

const Home: React.FC = () => {
  return (
    <div className="dark bg-gray-900 text-white">
      <Head>
        <title>Next.js with Dark Theme Header</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App!</h1>
        <p className="text-lg">This is the homepage content.</p>
      </main> */}

      <MainSection />

      {/* <footer className="bg-gray-800 py-4 text-center">
        Footer content
      </footer> */}
      <Footer />
    </div>
  );
};

export default Home;
