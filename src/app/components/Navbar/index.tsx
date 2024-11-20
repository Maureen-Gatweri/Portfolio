"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); 
  };

  // Detect which section is currently in view
  useEffect(() => {
    const handleActiveSection = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = "";
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          if (window.scrollY >= elementTop - 50 && window.scrollY < elementTop + elementHeight - 50) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleActiveSection);
    return () => window.removeEventListener('scroll', handleActiveSection);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg dark:bg-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h2 className="text-4xl font-bold text-black bg-clip-text font-signature">
          Maureen Mwendwa
          </h2>

          <button
            className="block md:hidden p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6 text-gray-800 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>

          {/* Menu Items */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row items-center md:space-x-8 absolute md:static top-16 left-0 right-0 bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300`}
          >
            <Link
              href="#home"
              className={`px-4 py-2 text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                activeSection === 'home'
                  ? 'text-black font-bold underline'
                  : 'hover:text-black dark:hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`px-4 py-2 text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                activeSection === 'about'
                  ? 'text-black font-bold underline'
                  : 'hover:text-black dark:hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)} 
            >
              About
            </Link>
            <Link
              href="#skills"
              className={`px-4 py-2 text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                activeSection === 'skills'
                  ? 'text-black font-bold underline'
                  : 'hover:text-black dark:hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)} 
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className={`px-4 py-2 text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                activeSection === 'projects'
                  ? 'text-black font-bold underline'
                  : 'hover:text-black dark:hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)} 
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className={`px-4 py-2 text-gray-900 dark:text-gray-300 dark:hover:text-white ${
                activeSection === 'contact'
                  ? 'text-black font-bold underline'
                  : 'hover:text-black dark:hover:text-black'
              }`}
              onClick={() => setIsMenuOpen(false)} 
            >
              Contacts
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-transparent"
            >
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
