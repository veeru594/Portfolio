import { motion } from 'framer-motion';
import { useState } from 'react';

const skillCategories = [
    {
        title: 'Languages',
        icon: '💻',
        gradient: 'from-indigo-500 to-purple-500',
        skills: ['Python', 'JavaScript', 'HTML/CSS', 'C'],
        color: 'indigo',
    },
    {
        title: 'Frameworks',
        icon: '⚛️',
        gradient: 'from-cyan-500 to-blue-500',
        skills: ['React', 'Django', 'Streamlit', 'TailwindCSS'],
        color: 'cyan',
    },
    {
        title: 'Data & AI',
        icon: '🤖',
        gradient: 'from-purple-500 to-pink-500',
        skills: ['Machine Learning', 'Deep Learning', 'Pandas', 'Power BI'],
        color: 'purple',
    },
    {
        title: 'DevOps',
        icon: '🛠️',
        gradient: 'from-emerald-500 to-teal-500',
        skills: ['Git', 'GitHub', 'Firebase', 'VS Code'],
        color: 'emerald',
    },
];

export default function SkillsPreview() {
    const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

    return (
        <div className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Animated Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
                    className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
                />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header with Animated Gradient */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
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
                        Skills & Technologies
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-36 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto mb-6 rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-gray-300 max-w-2xl mx-auto"
                    >
                        My technical expertise across various domains
                    </motion.p>
                </motion.div>

                {/* Skills Grid with Advanced Animations */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            onHoverStart={() => setHoveredCategory(index)}
                            onHoverEnd={() => setHoveredCategory(null)}
                            className="group relative"
                        >
                            {/* Glowing Border Effect */}
                            <motion.div
                                className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500`}
                                animate={hoveredCategory === index ? {
                                    scale: [1, 1.05, 1],
                                } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Card */}
                            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-transparent group-hover:shadow-2xl">
                                {/* Icon with Rotation Animation */}
                                <motion.div
                                    className="flex items-center gap-3 mb-4"
                                    animate={hoveredCategory === index ? {
                                        scale: [1, 1.1, 1],
                                    } : {}}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.span
                                        className="text-4xl"
                                        animate={hoveredCategory === index ? {
                                            rotate: [0, 360],
                                        } : {}}
                                        transition={{ duration: 0.6 }}
                                    >
                                        {category.icon}
                                    </motion.span>
                                    <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                                        {category.title}
                                    </h3>
                                </motion.div>

                                {/* Skills List with Stagger Animation */}
                                <div className="space-y-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ x: 5 }}
                                            className="relative"
                                        >
                                            {/* Skill Item */}
                                            <div className="flex items-center gap-2 text-sm text-gray-300 bg-slate-700/30 px-3 py-2 rounded-lg group-hover:bg-slate-700/50 transition-colors">
                                                <motion.div
                                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                                                    animate={hoveredCategory === index ? {
                                                        scale: [1, 1.5, 1],
                                                        opacity: [0.5, 1, 0.5],
                                                    } : {}}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Infinity,
                                                        delay: skillIndex * 0.1,
                                                    }}
                                                />
                                                <span>{skill}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Particle Effect on Hover */}
                                {hoveredCategory === index && (
                                    <motion.div className="absolute inset-0 pointer-events-none">
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className={`absolute w-1 h-1 bg-${category.color}-400 rounded-full`}
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    top: `${Math.random() * 100}%`,
                                                }}
                                                animate={{
                                                    y: [-20, -40],
                                                    opacity: [1, 0],
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: Infinity,
                                                    delay: i * 0.2,
                                                }}
                                            />
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Skills Button with Pulse Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                >
                    <motion.a
                        href="/skills"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all duration-300 overflow-hidden"
                    >
                        {/* Animated Background Shine */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                                x: ['-100%', '200%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        />

                        <span className="relative z-10">View Detailed Skills</span>
                        <motion.svg
                            className="relative z-10 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{
                                x: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>

                        {/* Glow Effect */}
                        <motion.div
                            className="absolute inset-0 bg-cyan-500/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
}
