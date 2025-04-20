// src/sections/About.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faCertificate,
  faBook,
  faExternalLinkAlt,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const resumeUrl = "";
  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8 animate-fade-in">
        About Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Subsection 1: Personal Info and CV*/}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personal Information</h2>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Name:</span> Savirigapu Laxman Rao</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Age:</span> 25</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Phone:</span> +91 6302951105</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Email:</span> laxmanrao.savirigapu@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Current City:</span> Hyderabad, India 🇮🇳</p>
          </div>
        </div>
        
  
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
        {/* Subsection 1.2: CV */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Download CV</h2>
          <button className='bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300' onClick={handleDownload}>
          Download CV
          </button>
        </div>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Subsection 2.1: AI/ML Skills */}

        {/* Subsection 2.2: Web Development Skills */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Web Development Skills</h2>
          <div className="flex flex-wrap gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
          </div>
        </div>

        {/* Subsection 2.3: Others */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Others</h2>
          <div className="flex flex-wrap gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Subsection 3.1: Certifications */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-blue-500 mr-2" />
              <a
                href="https://drive.google.com/file/d/1J32y8YbRWnbu_YK5HbaxSjT_IYWEAeWc/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
               Algorithmic Toolbox by Coursera
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-blue-500 mr-2" />
              <a
                href="https://drive.google.com/file/d/1UXRoARGvWtEKG3kGfkaM3zEAwAoy5FCW/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                TalentNext Course on Java J2EE
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faStar} className="text-blue-500 mr-2" />
              <a
                href="https://drive.google.com/file/d/1PACO3CNi7rd7LkvpxMzplWrsmkBdzAS0/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Full Stack Web Development by MSME Technology Centre Visakhapatnam
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
