"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="mb-10 py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/mwendwa.jpg"
              alt="Profile"
              className="rounded-full mx-auto drop-shadow-md"
              width={300}
              height={300}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed md:leading-loose md:text-justify">
              Driven by a profound passion for technology and innovation, I am a forward-thinking software developer committed to pushing the boundaries of what’s possible.
              My expertise spans software engineering—both frontend and backend development—UX research, product management, and UI/UX design. I thrive on creating solutions
              that not only address real-world challenges but also enhance user experiences and drive business success.
            </p>
            <a
              href="/images/Maureen Gatweri Mwendwa CV.pdf" 
              download
              className="inline-block mt-4 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



