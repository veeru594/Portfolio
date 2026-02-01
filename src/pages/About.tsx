import { GraduationCap, Code, Database, Globe, Sparkles, Rocket, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';

const About = () => {
  const expertise = [
    {
      icon: Database,
      title: 'Understand Your Needs',
      description: 'I analyze your workflow to identify what can be automated',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: Code,
      title: 'Build Custom Solutions',
      description: 'Create automation systems tailored to your business',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.1
    },
    {
      icon: Globe,
      title: 'Scale Effortlessly',
      description: 'Systems that grow with your business without extra work',
      gradient: 'from-cyan-500 to-blue-500',
      delay: 0.2
    }
  ];

  const highlights = [
    { icon: Rocket, label: '6+ Automation Projects', gradient: 'from-indigo-400 to-purple-400' },
    { icon: Target, label: 'WhatsApp, Email, Social', gradient: 'from-cyan-400 to-blue-400' },
    { icon: Sparkles, label: 'Results-Driven', gradient: 'from-green-400 to-emerald-400' }
  ];

  return (
    <div className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
      <Sidebar />
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-lg text-gray-400 font-medium">My Process</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>

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
            Why Work With Me
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-36 h-1 bg-gradient-to-r from-indigo-600 to-cyan-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl"
              >
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-7 h-7 text-indigo-400" />
                  Automation Specialist
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  I build automation systems that help businesses <span className="text-indigo-400 font-semibold">save time and scale efficiently</span>.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mb-4">
                  My focus is on creating <span className="text-cyan-400 font-semibold">reliable, cost-effective solutions</span> that integrate seamlessly with your existing tools.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether it's <span className="text-purple-400 font-semibold">WhatsApp bots, email sequences, social media posting, or custom workflows</span> — I turn manual processes into autonomous systems.
                </p>
              </motion.div>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className={`w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-lg flex items-center justify-center mx-auto mb-2`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <p className="text-xs text-gray-300 font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Expertise Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: item.delay }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative"
                >
                  {/* Glowing Border */}
                  <motion.div
                    className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition-all duration-500`}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Card */}
                  <div className="relative h-full bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center group-hover:border-transparent transition-all duration-300">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className={`text-lg font-bold mb-2 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400">
                      {item.description}
                    </p>

                    {/* Hover Glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Stats/Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">My Commitment</h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I focus on <span className="text-indigo-400 font-semibold">delivering results</span> that matter. Every automation I build is designed to <span className="text-cyan-400 font-semibold">save your team time</span> and <span className="text-purple-400 font-semibold">reduce errors</span>.
                I provide ongoing support and optimize systems based on real performance data.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
