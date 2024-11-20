"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  demo: JSX.Element;
  subject: string;
}

const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const projects: Project[] = [
    // Frontend Projects
    { id: '1', title: 'Shawazi', description: 'This is a website I developed for land buyers and land seller to ensure there is transperency in transactions during land buying process.', image: '/images/shawazi.png', demo: <a href='https://shawazi-magezi.vercel.app/' className="text-blue-600 underline">Demo</a>, subject: 'Frontend' },
    { id: '2', title: 'Space X Launches Tracker', description: 'The project is a JavaScript-based application that fetches data from the SpaceX API to display information about upcoming and past launches. It provides details such as launch dates, rocket names, mission details, and status in a user-friendly interface.', image: '/images/spacex.png', demo: <a href='https://space-x-lauch-tracker.vercel.app/' className="text-blue-600 underline">Demo</a>, subject: 'Frontend' },
    { id: '3', title: 'BMI Calculator', description: 'This is a project created to help users easily determine their Body Mass Index (BMI) by using their weight and height. It classifies one into categories such as underweight, normal weight, overweight, or obese.', image: '/images/BMI Calculator.png', demo: <a href='https://bmi-calculator-pearl-alpha.vercel.app/' className="text-blue-600 underline">Demo</a>, subject: 'Frontend' },

    // Design Projects
    { id: '4', title: 'Brand Identity for Kipepeo', description: 'Kipepeo is a fashion platform designed to streamline seamless online shopping. The platform features a sleek website to showcase collections and engage with fashion enthusiasts', image: '/images/kipepeo1.png', demo: <a href='https://www.figma.com/design/glVCwWGOX7Bzp9PnEnoNQz/Health-app?node-id=580-7&node-type=symbol&t=ZH4IvH1GkdzXr8wo-0' className="text-blue-600 underline">Demo</a>, subject: 'Design' },
    { id: '5', title: 'Growmama', description: 'I am excited to present my Growmama website Design, a vibrant personal care brand that embraces creativity and innovation. My goal was to entice my users to embrace healthy eating by getting healthy veges at the comfort of their home', image: '/images/growmy.png', demo: <a href='https://www.figma.com/design/glVCwWGOX7Bzp9PnEnoNQz/Health-app?node-id=580-7&node-type=symbol&t=ZH4IvH1GkdzXr8wo-0' className="text-blue-600 underline">Demo</a>, subject: 'Design' },
    { id: '6', title: 'Ayra Star Album Launch', description: 'I designed an album cover and a promotional one-page website for Ayra Starr’s new album, showcasing her profile, album details, inspiration, and purchase links, using Adobe tools and UI design principles.', image: '/images/ayra.png', demo: <a href='https://www.figma.com/design/glVCwWGOX7Bzp9PnEnoNQz/Health-app?node-id=72-2&node-type=canvas&t=ZH4IvH1GkdzXr8wo-0' className="text-blue-600 underline">Demo</a>, subject: 'Design' },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">My Projects</h2>
        
        {['Frontend', 'Design'].map((subject) => (
          <div key={subject} className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-4 dark:text-white">{subject} Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.filter(project => project.subject === subject).map((project) => (
                <motion.div
                  key={project.id}
                  layoutId={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg drop-shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 flex flex-col"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <h4 className="font-bold text-xl mb-2 dark:text-white">{project.title}</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex justify-center">
                      <p className="text-lime-800 text-xl dark:text-gray-300">{project.demo}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4 dark:text-white">{projects.find(p => p.id === selectedId)?.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{projects.find(p => p.id === selectedId)?.description}</p>
                <div className="mt-4">{projects.find(p => p.id === selectedId)?.demo}</div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;






