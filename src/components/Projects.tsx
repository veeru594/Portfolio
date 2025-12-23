import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Github, Camera, MonitorSmartphone, Users } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  tech: string[];
  gradient: string;
  icon: any;
  category: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  // New Major Projects
  {
    id: 1,
    title: 'AI Personal Assistant – JARVIS',
    subtitle: 'Major Project',
    description: 'A fully functional voice-controlled AI assistant for system automation with personalized speaker authentication.',
    features: [
      'Voice recognition with speaker authentication',
      'YouTube controls & system functions',
      'Automated report generation',
      'NLP & API integration'
    ],
    tech: ['Python', 'NLP', 'Voice Recognition', 'API Integration', 'Automation'],
    gradient: 'from-purple-500 via-pink-500 to-red-500',
    icon: '🤖',
    category: 'AI & Automation',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Instagram + Facebook Automation',
    subtitle: 'Social Media Automation',
    description: 'Real-world automation workflow for creators and businesses with Meta Business integration.',
    features: [
      'Meta Business API integration',
      'HTTP-based image generation',
      'Template replacement workflows',
      'n8n automated content posting'
    ],
    tech: ['n8n', 'Meta API', 'HTTP', 'Automation', 'Workflow'],
    gradient: 'from-pink-500 via-rose-500 to-orange-500',
    icon: '📱',
    category: 'Automation',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Production Chatbot System',
    subtitle: 'Full-Stack Deployment',
    description: 'Production-ready chatbot integrated into a real company website with secure API endpoints.',
    features: [
      'FastAPI backend with conversation logic',
      'React-based chatbot widget',
      'VPS deployment with live endpoints',
      'Secure request handling & state management'
    ],
    tech: ['FastAPI', 'React', 'VPS', 'Hostinger', 'API', 'Deployment'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    icon: '💬',
    category: 'Full-Stack',
    github: '#',
    live: '#'
  },
  // Previous Projects
  {
    id: 4,
    title: 'Human Action Recognition System',
    description: 'Recognizes human actions through images and video using ML and CNN-based architecture. Built for behavior understanding and automation.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'CNN'],
    gradient: 'from-purple-500 to-pink-600',
    icon: <Camera className="w-12 h-12" />,
    category: 'Machine Learning',
    github: 'https://github.com/veeru594/Human-Action-Recognition',
    live: '#'
  },
  {
    id: 5,
    title: 'Netflix Insights',
    description: 'Performs data cleaning and visualization on Netflix data using Python and Power BI. Includes dashboard analysis and EDA.',
    tech: ['Python', 'Pandas', 'Power BI', 'Seaborn'],
    gradient: 'from-red-500 to-purple-500',
    icon: <MonitorSmartphone className="w-12 h-12" />,
    category: 'Data Analytics',
    github: 'https://github.com/veeru594/Netflix-Insights',
    live: '/projects/netflix-insights'
  },
  {
    id: 6,
    title: 'Attendance Manager',
    description: 'A tool to manage student attendance efficiently using modern web technologies. Offers streamlined tracking, reporting, and management.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-yellow-400 to-orange-500',
    icon: <Users className="w-12 h-12" />,
    category: 'Web Development',
    github: 'https://github.com/veeru594/AttendenceManager',
    live: '#'
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-[400px] h-[400px] bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-rose-400/30 to-purple-400/30 rounded-full blur-3xl"
        />

        {/* Floating Grid Pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(99, 102, 241, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(99, 102, 241, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-36 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto mb-6 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Real-world projects showcasing AI, automation, ML, and full-stack development
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative h-full"
            >
              {/* Glowing Border Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500`}
                animate={hoveredProject === project.id ? {
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative h-full bg-white dark:bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700/50 shadow-xl group-hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 overflow-hidden`}>
                  {/* Animated Pattern Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '20px 20px'],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Icon with Float Animation */}
                  <motion.div
                    className="relative z-10 text-white mb-3"
                    animate={hoveredProject === project.id ? {
                      y: [-5, 5, -5],
                      rotate: typeof project.icon === 'string' ? [-5, 5, -5] : 0,
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: hoveredProject === project.id ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                  >
                    {typeof project.icon === 'string' ? (
                      <span className="text-7xl">{project.icon}</span>
                    ) : (
                      project.icon
                    )}
                  </motion.div>

                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative z-10 inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/30"
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className={`text-sm font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-3`}>
                      {project.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Features (for major projects) */}
                  {project.features && (
                    <div className="space-y-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + idx * 0.05 }}
                          className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <motion.div
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 flex-shrink-0`}
                            animate={hoveredProject === project.id ? {
                              scale: [1, 1.5, 1],
                            } : {}}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: idx * 0.1,
                            }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-2 py-1 bg-gray-100 dark:bg-slate-700/50 text-gray-700 dark:text-gray-300 text-xs rounded-lg font-medium border border-gray-200 dark:border-slate-600"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                    {project.live && (
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold text-sm hover:bg-gray-200 dark:hover:bg-slate-600 transition-all duration-300 flex items-center justify-center"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Particle Effect */}
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [-20, -60],
                          opacity: [1, 0],
                          scale: [1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
