// File: src/pages/projects/netflix-insights.tsx

import React, { useEffect } from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NetflixInsights = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Section fade/slide in
  const fadeSlideUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, filter: 'blur(4px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="min-h-screen bg-black text-white px-6 md:px-16 py-16 space-y-28"
    >
      {/* Section 1: Title + Intro */}
      <motion.section {...fadeSlideUp(0.2)} className="text-center max-w-5xl mx-auto space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
          Netflix Insights Project
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explore Netflix data through data cleaning, EDA, and dashboards — built with Python and Power BI.
        </p>
      </motion.section>

      {/* Section 2: Outputs */}
      <motion.section {...fadeSlideUp(0.4)} className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">🧠 Project Process & Outputs</h2>
        <ul className="text-gray-300 list-disc pl-6 space-y-2">
          <li>Python + Pandas used for data cleaning, formatting, and handling nulls</li>
          <li>Seaborn/Matplotlib used for visual trends: content type, release year, genre analysis</li>
          <li>Bar charts, word clouds, heatmaps added for visual storytelling</li>
        </ul>
        <img
          src="/visuals/image.png"
          alt="Netflix Dashboard"
          className="rounded-xl border border-gray-700 shadow-xl w-full"
        />
      </motion.section>

      {/* Section 3: Power BI Summary */}
      <motion.section {...fadeSlideUp(0.6)} className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-semibold">📊 Power BI Dashboard Overview</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            ["Content Type Ratio", "Pie chart of Movies vs. TV Shows available globally."],
            ["Release Year Trends", "Line graph to visualize content spikes over the years."],
            ["Genre Popularity", "Stacked bars showing top genres by frequency and rating."],
            ["Country Distribution", "Map highlighting content-rich countries like US, India, UK."]
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-gray-900 p-4 rounded-xl border border-gray-700 shadow"
            >
              <h3 className="text-white text-lg font-medium">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Section 4: GitHub CTA */}
      <motion.section {...fadeSlideUp(0.8)} className="text-center space-y-4">
        <p className="text-gray-400">Explore the full code on GitHub:</p>
        <a
          href="https://github.com/veeru594/Netflix-Insights"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" className="flex items-center gap-2 mx-auto hover:scale-105 transition">
            <Github className="w-4 h-4" />
            View Code
          </Button>
        </a>
      </motion.section>
    </motion.div>
  );
};

export default NetflixInsights;
