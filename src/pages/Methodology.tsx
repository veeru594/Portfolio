import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import Sidebar from '../components/Sidebar';

const Methodology = () => {
  const phases = [
    {
      phase: 1,
      name: 'DISCOVER',
      icon: '🔍',
      description: 'I analyze your workflows, identify pain points, and understand your goals',
      details: [
        'Detailed workflow audit',
        'Bottleneck identification',
        'Goal clarification',
        'Budget & timeline alignment'
      ],
      timeline: '2-3 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      phase: 2,
      name: 'DESIGN',
      icon: '🎨',
      description: 'Build a custom architecture for your automation that fits your business',
      details: [
        'Automation blueprint creation',
        'Integration mapping',
        'Data flow design',
        'Error handling strategy'
      ],
      timeline: '3-5 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      phase: 3,
      name: 'BUILD',
      icon: '⚙️',
      description: 'Create and test your automation with precision and quality assurance',
      details: [
        'System implementation',
        'Comprehensive testing',
        'Performance optimization',
        'Quality assurance'
      ],
      timeline: '5-10 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      phase: 4,
      name: 'LAUNCH',
      icon: '🚀',
      description: 'Deploy your automation and ensure smooth transition to production',
      details: [
        'Production deployment',
        'Team training session',
        'Go-live support',
        'Performance monitoring'
      ],
      timeline: '1-2 days',
      color: 'from-green-500 to-emerald-500'
    },
    {
      phase: 5,
      name: 'OPTIMIZE',
      icon: '📈',
      description: 'Fine-tune performance based on real-world data and feedback',
      details: [
        'Performance analytics review',
        'Bottleneck optimization',
        'Workflow refinement',
        'Efficiency improvements'
      ],
      timeline: 'Ongoing (1 month included)',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      phase: 6,
      name: 'SUPPORT',
      icon: '🛡️',
      description: 'Ongoing maintenance, updates, and optimization for your automation',
      details: [
        'Proactive monitoring',
        'Issue resolution',
        'Platform updates handling',
        'Quarterly optimization'
      ],
      timeline: 'Monthly/Quarterly plans available',
      color: 'from-cyan-500 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
      <Sidebar />
      <BackToTop />
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              The DISCOVER-TO-SUPPORT Framework
            </h1>
            <p className="text-2xl text-gray-300">
              A proven 6-phase methodology for building automation that actually works and keeps working.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20 p-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Why This Framework?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '✅', title: 'Proven Results', desc: 'Tested on 40+ projects with 100% client satisfaction' },
                { icon: '⏱️', title: 'Fast Turnaround', desc: 'Most projects launch within 2-3 weeks' },
                { icon: '🔒', title: 'Ongoing Support', desc: 'Not a one-time project—we stay involved' }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phases */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
              >
                {/* Content */}
                <div>
                  <motion.div
                    className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 font-bold mb-4"
                  >
                    Phase {phase.phase}
                  </motion.div>

                  <h2 className="text-4xl font-black text-white mb-3">{phase.name}</h2>
                  <p className="text-lg text-gray-300 mb-6">{phase.description}</p>

                  <div className="space-y-3 mb-8">
                    {phase.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>

                  <motion.div
                    className={`inline-block px-4 py-2 bg-gradient-to-r ${phase.color} rounded-lg`}
                  >
                    <p className="text-white font-bold">⏰ {phase.timeline}</p>
                  </motion.div>
                </div>

                {/* Visual */}
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className={`h-80 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center text-8xl opacity-10 border border-slate-700`}
                >
                  {phase.icon}
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Complete Timeline Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Complete Project Timeline</h2>
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4">
              {phases.map((phase, index) => (
                <div key={phase.phase} className="flex flex-col items-center flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-3xl mb-3 cursor-pointer`}
                  >
                    {phase.icon}
                  </motion.div>
                  <p className="text-white font-bold text-center text-sm">{phase.name}</p>
                  <p className="text-gray-400 text-xs text-center mt-1">{phase.timeline}</p>
                  {index < phases.length - 1 && (
                    <div className="hidden md:block absolute left-full w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-2 top-8"></div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 mt-8 text-lg font-semibold">
              Average Full Project: <span className="text-cyan-400">2-4 Weeks</span> (depending on complexity)
            </p>
          </motion.div>

          {/* Before/After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-8"
          >
            <div className="p-8 bg-red-500/10 border border-red-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">❌ Without Automation</h3>
              <ul className="space-y-3">
                {['Manual data entry daily', 'Endless repetitive tasks', 'Frequent errors and delays', 'Team overwhelmed', 'Limited scalability', 'High operating costs'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-red-400 font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">✅ With Our Automation</h3>
              <ul className="space-y-3">
                {['Fully automated workflows', 'Zero manual work required', '99.9% accuracy', 'Team freed for strategy', 'Scales instantly', 'Significant cost savings'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-green-400 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-black text-white mb-4">
              Ready to Start Your Automation Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and see which phase makes sense for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
            >
              Start with a Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
