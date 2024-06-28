import React from 'react';

interface Feature {
  title: string;
  colorClass: string;
  content: string;
}

const features: Feature[] = [
  {
    title: 'Personalized Question Generation',
    colorClass: 'bg-gray-800',
    content: 'Our AI algorithm analyzes your performance to generate customized practice questions that target your specific areas for improvement, ensuring efficient and effective study sessions.',
  },
  {
    title: 'Real-Time Feedback',
    colorClass: 'bg-gray-700',
    content: 'Receive instant feedback on your answers with detailed explanations and performance metrics, helping you understand your mistakes and learn more effectively.',
  },
  {
    title: 'Comprehensive Performance Analytics',
    colorClass: 'bg-gray-600',
    content: 'Track your progress with in-depth analytics that provide insights into your strengths, weaknesses, and overall readiness, helping you stay on track and achieve your goals.',
  },
  {
    title: 'Adaptive Learning Paths',
    colorClass: 'bg-gray-500',
    content: 'Experience a tailored learning journey with our adaptive system that adjusts the difficulty and focus of questions based on your ongoing performance, ensuring continuous improvement and optimal preparation.',
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Welcome to DSAT.sigma</h1>
          <p className="text-lg sm:text-xl md:text-2xl">The ultimate platform for Digital SAT testing</p>
        </div>
        {/* Fade-out overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-100 dark:from-gray-900 to-transparent pointer-events-none"></div>
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
          <p className="text-lg mb-2">Scroll down</p>
        </div> */}
      </section>

      {/* New Section - What is the SAT */}
      <section className="bg-blue py-20 flex flex-col md:flex-row items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
                <img className="w-full h-auto object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/SAT_logo_%282017%29.svg/768px-SAT_logo_%282017%29.svg.png?20230405202428" alt="Image" />
            </div>
            <div className="md:w-1/2 text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What is the SAT?</h2>
                <p className="text-lg mb-4">
                    The SAT is a standardized test widely used for college admissions in the United States.
                    It assesses a student's readiness for college and provides colleges with a common data point
                    that can be used to compare all applicants. The SAT consists of sections that test skills in
                    Reading, Writing and Language, and Mathematics, with an optional Essay section.
                </p>
                <p className="text-lg">
                    The SAT is designed to evaluate your knowledge and skills in areas that are essential for
                    success in college. Preparing for the SAT can help you identify your strengths and areas for
                    improvement, ultimately contributing to your academic and career success.
                </p>
            </div>
        </div>
      </section>
      {/* uoc j */}
      <section className="flex flex-col md:flex-row items-center justify-center py-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Left column */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DSAT.sigma</h2>
          <p className="text-lg">DSAT.sigma, the cutting-edge digital SAT testing platform that leverages artificial intelligence to create personalized practice questions tailored to your strengths and weaknesses. Our AI-driven system ensures you receive the most relevant and challenging questions to maximize your preparation. With user-friendly navigation, real-time feedback, and comprehensive performance analytics, DSAT.sigma is your ultimate partner in achieving SAT success!</p>
        </div>
        {/* Right column */}
        <div className="md:w-1/2 px-6">
          <img className="w-full h-auto object-cover" src="https://benthalltestprep.com/wp-content/uploads/2023/11/digital-sat-graphic-520x430.png" alt="Image" />
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-8 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:text-white p-6 bg-gray-200`}>
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
