"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaPython, FaFigma, FaJira } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiKotlin, SiTableau, SiSqlite, SiInvision, SiCircleci } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', icon: <FaJsSquare />, category: 'Frontend' },
    { name: 'React', icon: <FaReact />, category: 'Frontend' },
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'Frontend' },
    { name: 'Kotlin', icon: <SiKotlin />, category: 'Frontend' },
    { name: 'Python', icon: <FaPython />, category: 'Backend' },
    { name: 'Django', icon: <SiDjango />, category: 'Backend' },
    { name: 'SQL', icon: <SiSqlite />, category: 'Backend' },
    { name: 'CI/CD', icon: <SiCircleci />, category: 'Backend' },
    { name: 'Figma', icon: <FaFigma />, category: 'Product & Design' },
    { name: 'InVision', icon: <SiInvision />, category: 'Product & Design' },
    { name: 'Jira', icon: <FaJira />, category: 'Product & Design' },
    { name: 'Tableau', icon: <SiTableau />, category: 'Product & Design' },
  ];

  const categories = {
    'Product & Design': skills.filter(skill => skill.category === 'Product & Design'),
    'Frontend': skills.filter(skill => skill.category === 'Frontend'),
    'Backend': skills.filter(skill => skill.category === 'Backend'),
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(categories).map(([category, skills]) => (
            <motion.div
              key={category}
              className="bg-white bg-opacity-60 rounded-lg shadow-[0_4px_8px_rgba(0,0,0,0.1),0_6px_10px_rgba(0,0,255,0.2)] p-8 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 gap-6 justify-items-center"> {/* Changed grid-cols */}
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center text-center p-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_3px_5px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,255,0.2)] hover:bg-opacity-80"
                  >
                    <div className="text-4xl bg-white text-blue-400 rounded-full p-4 mb-4 shadow-[0_3px_5px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,255,0.2)] transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
