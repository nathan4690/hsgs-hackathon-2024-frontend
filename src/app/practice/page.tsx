'use client'
// pages/index.tsx

import MathCover from '../components/MathCover';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="dark:dark bg-gray-100 dark:bg-gray-900 text-white min-h-screen flex flex-col">
        <Header />
      <MathCover />
      <Footer />
    </div>
  );
};

export default Home;
