import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom'; // ✅ Import for internal routing

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  icon: React.ReactNode;
  gradient: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tech, github, live, icon, gradient }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-8">
        {/* Icon + Title */}
        <div className="flex items-center mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${gradient} text-white mr-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {/* GitHub - always external */}
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </Button>
          </a>

          {/* Live Demo - external or internal */}
          {live?.startsWith('http') ? (
            // External Live Demo
            <a href={live} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className={`bg-gradient-to-r ${gradient} text-white border-0 hover:opacity-90`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </a>
          ) : (
            // Internal Live Demo
            <Link to={live}>
              <Button size="sm" className={`bg-gradient-to-r ${gradient} text-white border-0 hover:opacity-90`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
