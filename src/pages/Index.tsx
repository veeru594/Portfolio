import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download, Mail, Phone, MapPin, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import SkillsPreview from '../components/SkillsPreview';
import Contact from '../components/Contact';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900' : 'bg-white'}`}>
      <BackToTop />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Veerendra Kumar</h1>
            <div className="flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="text-white hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="text-white hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <About />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Projects />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <SkillsPreview />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <Contact />
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/veeru594" className="hover:text-cyan-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/veerendra-kumar0618/" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:veerandrak49@gmail.com" className="hover:text-cyan-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; 2024 Veeru. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
