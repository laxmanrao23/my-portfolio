// src/sections/About.js
import React from 'react';

const About = () => {

  const resumeUrl = ""; // Add your resume link here
  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8">
        About Me
      </h1>

      {/* Professional Summary */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Professional Summary
        </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Java Backend Developer with 2+ years of experience designing and developing secure, scalable enterprise applications. Strong expertise in Spring Boot, RESTful API development, database design, and implementing clean layered architecture.

            Hands-on experience in JWT-based authentication, role-based access control, performance optimization, and containerized deployments using Docker. Actively working with Jenkins and AWS to automate builds and deploy cloud-ready applications.

            Focused on writing maintainable code, improving system reliability, and continuously learning modern backend and cloud technologies.
            </p>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Details
          </h2>
          <div className="space-y-2 text-gray-600 dark:text-gray-300">
            <p><span className="font-semibold">Name:</span> Savirigapu Laxman Rao</p>
            <p><span className="font-semibold">Experience:</span> 2+ Years</p>
            <p><span className="font-semibold">Domain:</span> Insurance & Enterprise Applications</p>
            <p><span className="font-semibold">Location:</span> Hyderabad, India</p>
            <p><span className="font-semibold">Email:</span> laxmanrao.savirigapu@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +91 XXXXX XXXXX</p>
          </div>
        </div>

        {/* Resume Section */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Resume
          </h2>
          <button
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300'
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Technical Skills
        </h2>

        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
          <li><span className="font-semibold">Programming:</span> Core Java, OOPS, Collections, Multithreading</li>
          <li><span className="font-semibold">Backend:</span> Spring Boot, REST APIs, JWT Security</li>
          <li><span className="font-semibold">Database:</span> PostgreSQL, MySQL, JPA/Hibernate</li>
          <li><span className="font-semibold">Frontend:</span> ReactJS, JavaScript, HTML, CSS</li>
          <li><span className="font-semibold">DevOps & Cloud:</span> Docker, Jenkins, AWS (EC2, RDS, S3)</li>
          <li><span className="font-semibold">Architecture:</span> MVC, Microservices Basics, Layered Design</li>
          <li><span className="font-semibold">Tools:</span> Git, GitHub, Postman</li>
        </ul>
      </div>

      {/* Focus Areas */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          What I Focus On
        </h2>

        <ul className="text-gray-600 dark:text-gray-300 space-y-2">
          <li>✔ Designing scalable REST APIs using Spring Boot</li>
          <li>✔ Implementing secure authentication using JWT</li>
          <li>✔ Optimizing database queries and indexing strategies</li>
          <li>✔ Containerizing applications using Docker</li>
          <li>✔ Automating deployments with Jenkins</li>
          <li>✔ Deploying backend services on AWS</li>
        </ul>
      </div>

    </div>
  );
};

export default About;