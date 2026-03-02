// src/sections/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

import PortfolioProjectImage from '../assests/Portfolio-Website-Project.png';
import FakeNewDetProject from '../assests/FakeNewDet-Project.png';
import CybersecurityWebProject from '../assests/CyberSecurity-Web-Project.jpg';
import JwtAuthProject from '../assests/JWT-Auth_App.png'; // add image here

const projectData = [
  {
    title: "JWT Authentication App",
    description:
"Spring Boot + ReactJS application implementing secure JWT-based authentication, role-based access control, protected REST APIs, and PostgreSQL integration. Dockerized and deployment-ready.",
    image: JwtAuthProject,
    link: "https://jwt-auth-app-jade.vercel.app/",
  },
  {
    title: "Portfolio Website",
    description:
"Spring Boot-based microservices project demonstrating API security, input validation, protection against XSS and SQL Injection, and secure REST communication.",
    image: PortfolioProjectImage,
    link: "https://github.com/laxmanrao23/my-portfolio",
  },
  {
    title: "Fake News Detection Using NLP",
    description:
"Machine learning project integrating NLP models with Java backend and React frontend for fake news detection.",
    image: FakeNewDetProject,
    link: "https://github.com/laxmanrao23/Fake-news-detection-using-NLP/tree/main/Fake-News-Detection-using-NLP-main",
  },
  {
    title: "Microservices Security & API Protection",
    description:
      "Spring Boot-based project demonstrating API security, protection against XSS & SQL Injection, and vulnerability analysis using tools like Wireshark & Nmap.",
    image: CybersecurityWebProject,
    link: "https://github.com/laxmanrao23/Ecommerce.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-blue-600 mb-10"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
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