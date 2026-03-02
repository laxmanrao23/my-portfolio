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
              'Java Backend Developer',
              1000,
              'Spring Boot Developer',
              1000,
              'Cloud & DevOps Learner',
              1000,
            ]}
            wrapper="span"
            speed={50} // Typing speed
            style={{ display: 'inline-block' }}
            repeat={Infinity} // Repeat the animation infinitely
          />
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
I am a Java Backend Developer with 2+ years of experience building secure and scalable enterprise applications. I specialize in Spring Boot, REST API development, database optimization, and clean layered architecture.

I actively build production-ready applications using Java, Spring Boot, PostgreSQL, Docker, Jenkins, and AWS. I focus on writing clean, maintainable code and deploying cloud-ready backend systems.

Currently, I am strengthening my expertise in microservices, security (JWT), caching (Redis), and CI/CD automation to build reliable and scalable systems.
</p>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Let's Connect!
        </p>
      </div>
    </div>
  );
};

export default Home;