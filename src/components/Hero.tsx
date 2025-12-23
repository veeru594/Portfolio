import React, { useEffect, useState } from 'react';
import { Download, Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, Terminal, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Enhanced Dynamic Gradient Background */}
      <div className="absolute inset-0">
        {/* Animated Gradient Mesh with Multiple Layers */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />

        {/* Mouse-Tracking Gradient Orbs - Enhanced */}
        <motion.div
          style={{
            x: mousePosition.x * 80,
            y: mousePosition.y * 80,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/40 to-purple-500/40 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: mousePosition.x * -50,
            y: mousePosition.y * -50,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{
            x: mousePosition.x * 60,
            y: mousePosition.y * -60,
          }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 w-[550px] h-[550px] bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />

        {/* Enhanced Grid Pattern with Animation */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(99, 102, 241, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Floating Code Symbols - Enhanced with More Variety */}
        {['<', '>', '{', '}', '(', ')', '[', ']', ';', '=', '/', '*', '+', '-'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-indigo-400/20 text-6xl font-mono font-bold"
            style={{
              left: `${(i * 7.5) % 100}%`,
              top: `${(i * 12) % 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.35, 0.1],
              rotate: [0, 15, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Glowing Particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 3 === 0 ? 'rgba(99, 102, 241, 0.6)' : i % 3 === 1 ? 'rgba(6, 182, 212, 0.6)' : 'rgba(168, 85, 247, 0.6)',
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Terminal-Style Header - Enhanced */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/60 rounded-lg shadow-lg shadow-green-500/10"
            >
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 font-mono text-sm">~/portfolio/veerendra-kumar</span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-green-400 shadow-lg shadow-green-400/50"
              />
            </motion.div>
          </motion.div>

          {/* Main Content - Centered */}
          <div className="text-center space-y-8">
            {/* Greeting - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center gap-3"
            >
              <motion.div
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
              </motion.div>
              <span className="text-2xl text-gray-300 font-medium">Hello World, I'm</span>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              </motion.div>
            </motion.div>

            {/* Giant Name - Enhanced with Glow */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl md:text-8xl lg:text-9xl font-black leading-none"
            >
              <motion.span
                className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
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
                Veerendra
              </motion.span>
              <motion.span
                className="block text-white mt-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                Kumar
              </motion.span>
            </motion.h1>

            {/* Typing Role - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-gray-300 min-h-[50px]"
            >
              <motion.div
                animate={{
                  textShadow: [
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                    '0 0 30px rgba(6, 182, 212, 0.4)',
                    '0 0 20px rgba(168, 85, 247, 0.3)',
                    '0 0 20px rgba(99, 102, 241, 0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <TypeAnimation
                  sequence={[
                    'AI & Machine Learning Developer',
                    2000,
                    'Full-Stack Engineer',
                    2000,
                    'Automation Specialist',
                    2000,
                    'Problem Solver & Innovator',
                    2000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
            </motion.div>

            {/* Subtitle - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center justify-center gap-3 text-xl text-gray-400"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Code2 className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
              </motion.div>
              <span>B.Tech Graduate | Building Intelligent Systems</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              Crafting <span className="text-purple-400 font-semibold drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">AI-powered solutions</span>,
              building <span className="text-cyan-400 font-semibold drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">scalable applications</span>,
              and automating workflows to transform ideas into reality.
            </motion.p>

            {/* Tech Stack Pills - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap justify-center gap-3 pt-4"
            >
              {['Python', 'React', 'AI/ML', 'FastAPI', 'Django', 'Firebase', 'TensorFlow'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    boxShadow: '0 10px 30px rgba(99, 102, 241, 0.4)',
                  }}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 backdrop-blur-md border border-indigo-500/40 rounded-full text-sm font-semibold text-gray-300 shadow-lg hover:border-indigo-400/60 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white px-8 py-6 text-lg font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 group overflow-hidden"
                >
                  {/* Shine Effect */}
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
                  <a
                    href="/resume/veeredra_resume.pdf"
                    download="veerendra_resume.pdf"
                    className="flex items-center gap-2 relative z-10"
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </a>
                </Button>
              </motion.div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cyan-500/50 text-white hover:bg-cyan-500/20 hover:border-cyan-400/70 px-8 py-6 text-lg font-bold backdrop-blur-md shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Let's Connect
                </Button>
              </motion.a>
            </motion.div>

            {/* Social Links - Enhanced */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex justify-center gap-4 pt-6"
            >
              {[
                { icon: Github, href: 'https://github.com/veeru594', label: 'GitHub', color: 'from-purple-500/20 to-indigo-500/20' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/veerendra-kumar0618/', label: 'LinkedIn', color: 'from-cyan-500/20 to-blue-500/20' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:${social.color} transition-all duration-300 group shadow-lg hover:shadow-xl`}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors drop-shadow-lg" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
            >
              {[
                { number: '6+', label: 'Projects Completed', gradient: 'from-purple-400 to-pink-400' },
                { number: '15+', label: 'Technologies', gradient: 'from-cyan-400 to-blue-400' },
                { number: '100%', label: 'Dedication', gradient: 'from-indigo-400 to-purple-400' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1, y: -8 }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20"
                >
                  <motion.div
                    animate={{
                      textShadow: [
                        '0 0 20px rgba(99, 102, 241, 0.5)',
                        '0 0 30px rgba(6, 182, 212, 0.6)',
                        '0 0 20px rgba(99, 102, 241, 0.5)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
