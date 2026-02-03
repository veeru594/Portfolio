import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
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

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="heading-1 text-white mb-4">
              The DISCOVER-TO-SUPPORT Framework
            </h1>
            <p className="body-large text-gray-300">
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
            <h2 className="heading-2 text-white mb-6">Why This Framework?</h2>
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

                  <h2 className="heading-2 text-white mb-3">{phase.name}</h2>
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
            <h2 className="heading-2 text-white mb-8 text-center">Complete Project Timeline</h2>
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
              <h3 className="heading-3 text-white mb-6">❌ Without Automation</h3>
              <ul className="space-y-3">
                {['Manual data entry daily', 'Endless repetitive tasks', 'Frequent errors and delays', 'Team overwhelmed', 'Limited scalability', 'High operating costs'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <span className="text-red-400 font-bold">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-green-500/10 border border-green-500/30 rounded-2xl">
              <h3 className="heading-3 text-white mb-6">✅ With Our Automation</h3>
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

      {/* CTA - Contact Methods */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-slate-900 mb-4">
              Ready to Start Your Automation Journey?
            </h2>
            <p className="body-large text-gray-600">
              Choose your preferred way to connect
            </p>
          </motion.div>

          {/* Contact Method Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/917075392366"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white border-2 border-slate-200 rounded-2xl hover:border-green-500 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-green-600 group-hover:fill-white transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Instant Communication</p>
                <h3 className="heading-3 text-slate-900 mb-3 group-hover:text-green-600 transition-colors">WhatsApp</h3>
                <p className="text-lg font-semibold text-green-600">+91 70753 92366</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:veerandrak49@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white border-2 border-slate-200 rounded-2xl hover:border-blue-500 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-blue-600 group-hover:fill-white transition-colors">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Formal Inquiries</p>
                <h3 className="heading-3 text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Email</h3>
                <p className="text-lg font-semibold text-blue-600 break-all">veerandrak49@gmail.com</p>
              </div>
            </motion.a>

            {/* Direct Call */}
            <motion.a
              href="tel:+917075392366"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-white border-2 border-slate-200 rounded-2xl hover:border-cyan-500 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-cyan-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-cyan-600 group-hover:fill-white transition-colors">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400 mb-2 font-semibold">Voice Consultation</p>
                <h3 className="heading-3 text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">Direct Call</h3>
                <p className="text-lg font-semibold text-cyan-600">+91 70753 92366</p>
              </div>
            </motion.a>

            {/* Schedule */}
            <motion.a
              href="https://calendly.com/veerandrak49"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-2xl hover:border-indigo-500 hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-wider text-indigo-400 mb-2 font-semibold">Book a Session</p>
                <h3 className="heading-3 text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">Schedule</h3>
                <p className="text-lg font-bold text-indigo-600">Calendly Link</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
