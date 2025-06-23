// src/components/ProjectCard.js
import React from 'react';



const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-600 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </div>
    </div>
  );
};

export default ProjectCard;
