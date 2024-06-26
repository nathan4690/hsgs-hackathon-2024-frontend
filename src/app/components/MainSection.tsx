import React from 'react';

interface Feature {
  title: string;
  colorClass: string;
  content: string;
}

const features: Feature[] = [
  {
    title: 'Feature 1',
    colorClass: 'bg-gray-800', // Dark mode color
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Feature 2',
    colorClass: 'bg-gray-700', // Dark mode color
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Feature 3',
    colorClass: 'bg-gray-600', // Dark mode color
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Feature 4',
    colorClass: 'bg-gray-500', // Dark mode color
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

const MainSection: React.FC = () => {
  return (
    <div>
      <section className="relative h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover"
            src="https://www.thoughtco.com/thmb/at3xZ2GLy_Mj1WHdTvwAoP5kLAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-683736063-1--58a4d3dc3df78c345bb8baf7.jpg"
            alt="Background"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        </div>
        {/* Content */}
        <div className="relative z-20 text-white text-center mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to My Next.js App</h1>
          <p className="text-lg sm:text-xl md:text-2xl">Build something amazing today!</p>
        </div>
        {/* Fade-out overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent pointer-events-none"></div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-lg mb-2">Scroll down</p>
        </div> */}
      </section>
      <section className="flex flex-col md:flex-row items-center justify-center py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Left column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Left Column Title</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla ex et gravida scelerisque.</p>
        </div>
        {/* Right column */}
        <div className="md:w-1/2 px-6">
          <img className="w-full h-auto object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SAT_logo_%282017%29.svg/768px-SAT_logo_%282017%29.svg.png?20230405202428" alt="Image" />
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${feature.colorClass} text-white p-6`}>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
