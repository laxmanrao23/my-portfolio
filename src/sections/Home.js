import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assests/LaxmanDP.jpg';

const Home = () => {
  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col lg:flex-row">
      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start mb-8 lg:mb-0 lg:pr-8">
        <div className="w-full h-full lg:h-auto lg:min-h-[calc(100vh-4rem)] flex items-center justify-center rounded-lg overflow-hidden shadow-lg">
        <img
  src={profileImage}
  alt="Laxman Rao Savirigapu"
  className="w-full h-full object-cover"
/>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-2/3 flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Hi, I'm Laxman
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              1000, // Delay after typing
              'AI Enthusiast',
              1000,
              'Problem Solver',
              1000,
            ]}
            wrapper="span"
            speed={50} // Typing speed
            style={{ display: 'inline-block' }}
            repeat={Infinity} // Repeat the animation infinitely
          />
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
        I build robust, scalable web applications using ReactJS for intuitive user interfaces and .NET Core for high-performance backend systems. My passion for technology extends into AI integration, enabling smart, data-driven solutions that solve real-world problems.

Whether it's creating seamless frontend experiences, engineering efficient APIs, or embedding intelligent features, I love turning ideas into impactful digital products. Let's build something amazing!        </p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Let's Connect!
        </p>
      </div>
    </div>
  );
};

export default Home;