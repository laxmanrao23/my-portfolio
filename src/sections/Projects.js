// src/sections/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import PortfolioProjectImage from '../assests/Portfolio Website Project.png';
import FakeNewDetProject from '../assests/FakeNewDet Project.png';
import CybersecurityWebProject from '../assests/CyberSecurity Web Project.jpg';

const projectData = [
  {
    title: "Portfolio Website",
    description: " React and Tailwind CSS, .NET Core.",
    image: PortfolioProjectImage,
    link: "https://github.com/laxmanrao23/my-portfolio",
  },
  {
    title: "Fake New Detection Using NLP",
    description: "Reactjs, NLP",
    image: FakeNewDetProject,
    link: "https://github.com/laxmanrao23/Fake-news-detection-using-NLP/tree/main/Fake-News-Detection-using-NLP-main",
  },
  {
    title: "To Detect and Prevent the Vulnerabilites in Micro Services and API",
    description: "Reactjs, Springboot, CyberAttacks: XXS, SQL Injection, Wireshark, NMap",
    image: CybersecurityWebProject,
    link: "https://github.com/laxmanrao23/Ecommerce.git",
  },
];

const Projects = () => {
  return (
    
    <section id="projects" className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
