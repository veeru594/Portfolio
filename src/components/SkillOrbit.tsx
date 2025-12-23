import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  emoji: string;
  level: number;
  gradient: string;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  gradient: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '💻',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    skills: [
      { name: 'Python', emoji: '🐍', level: 90, gradient: 'from-blue-400 to-cyan-400', description: 'Advanced backend & ML' },
      { name: 'JavaScript', emoji: '⚡', level: 75, gradient: 'from-yellow-400 to-orange-400', description: 'Modern ES6+' },
      { name: 'HTML/CSS', emoji: '🎨', level: 85, gradient: 'from-orange-400 to-red-400', description: 'Responsive design' },
      { name: 'C', emoji: '©️', level: 70, gradient: 'from-gray-400 to-gray-600', description: 'System programming' },
    ],
  },
  {
    title: 'Frameworks',
    icon: '⚛️',
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    skills: [
      { name: 'React', emoji: '⚛️', level: 80, gradient: 'from-cyan-400 to-blue-400', description: 'Modern UI development' },
      { name: 'Django', emoji: '🎸', level: 75, gradient: 'from-green-400 to-emerald-400', description: 'Full-stack web apps' },
      { name: 'Streamlit', emoji: '🚀', level: 85, gradient: 'from-red-400 to-pink-400', description: 'Data apps & dashboards' },
      { name: 'TailwindCSS', emoji: '💨', level: 80, gradient: 'from-teal-400 to-cyan-400', description: 'Utility-first CSS' },
    ],
  },
  {
    title: 'Data & AI',
    icon: '🤖',
    gradient: 'from-purple-500 via-pink-500 to-rose-500',
    skills: [
      { name: 'Machine Learning', emoji: '🤖', level: 75, gradient: 'from-purple-400 to-pink-400', description: 'Predictive models' },
      { name: 'Deep Learning', emoji: '🧠', level: 60, gradient: 'from-pink-400 to-rose-400', description: 'Neural networks' },
      { name: 'Pandas', emoji: '🐼', level: 85, gradient: 'from-indigo-400 to-purple-400', description: 'Data manipulation' },
      { name: 'Power BI', emoji: '📈', level: 85, gradient: 'from-yellow-400 to-amber-400', description: 'Business intelligence' },
    ],
  },
  {
    title: 'DevOps',
    icon: '🛠️',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    skills: [
      { name: 'Git', emoji: '📦', level: 85, gradient: 'from-orange-400 to-red-400', description: 'Version control' },
      { name: 'GitHub', emoji: '🐙', level: 85, gradient: 'from-gray-400 to-slate-400', description: 'Collaboration' },
      { name: 'Firebase', emoji: '🔥', level: 75, gradient: 'from-yellow-400 to-orange-400', description: 'Cloud backend' },
      { name: 'VS Code', emoji: '💻', level: 90, gradient: 'from-blue-400 to-indigo-400', description: 'IDE mastery' },
    ],
  },
];

export default function SkillOrbit() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div className="w-full py-12 px-4 relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgb(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Title with Gradient Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
            Tech Arsenal
          </h2>
          <p className="text-gray-400 text-lg">Hover to explore each skill</p>
        </motion.div>

        {/* Skills Categories */}
        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl"
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                  <div className={`h-1 w-32 bg-gradient-to-r ${category.gradient} rounded-full mt-2`} />
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.1 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative h-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:border-transparent">
                      {/* Animated Gradient Border on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                        style={{ padding: '2px' }}
                      >
                        <div className="h-full w-full bg-slate-800 rounded-2xl" />
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon with Floating Animation */}
                        <motion.div
                          animate={{
                            y: hoveredSkill === skill.name ? [-5, 5, -5] : 0,
                          }}
                          transition={{
                            duration: 2,
                            repeat: hoveredSkill === skill.name ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                          className="text-6xl mb-4 filter drop-shadow-lg"
                        >
                          {skill.emoji}
                        </motion.div>

                        {/* Skill Name */}
                        <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.name}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-400 mb-4 h-10">
                          {skill.description}
                        </p>

                        {/* Circular Progress */}
                        <div className="relative w-24 h-24 mx-auto">
                          <svg className="transform -rotate-90 w-24 h-24">
                            {/* Background Circle */}
                            <circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="currentColor"
                              strokeWidth="8"
                              fill="none"
                              className="text-slate-700"
                            />
                            {/* Progress Circle */}
                            <motion.circle
                              cx="48"
                              cy="48"
                              r="40"
                              stroke="url(#gradient-${skill.name})"
                              strokeWidth="8"
                              fill="none"
                              strokeLinecap="round"
                              initial={{ strokeDasharray: "0 251.2" }}
                              whileInView={{
                                strokeDasharray: `${(skill.level / 100) * 251.2} 251.2`
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: skillIndex * 0.1, ease: "easeOut" }}
                            />
                            {/* Gradient Definition */}
                            <defs>
                              <linearGradient id={`gradient-${skill.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className={skill.gradient.includes('blue') ? 'text-blue-400' : 'text-indigo-400'} stopColor="currentColor" />
                                <stop offset="100%" className={skill.gradient.includes('cyan') ? 'text-cyan-400' : 'text-purple-400'} stopColor="currentColor" />
                              </linearGradient>
                            </defs>
                          </svg>
                          {/* Percentage Text */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: skillIndex * 0.1 + 0.5 }}
                              className="text-2xl font-bold text-white"
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                        </div>

                        {/* Skill Level Badge */}
                        <div className="mt-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${skill.gradient} text-white`}>
                            {skill.level >= 85 ? '🏆 Expert' : skill.level >= 70 ? '⭐ Proficient' : '📚 Learning'}
                          </span>
                        </div>
                      </div>

                      {/* Glow Effect on Hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 -z-10`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}