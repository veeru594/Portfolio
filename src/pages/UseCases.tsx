import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import Sidebar from '../components/Sidebar';

const UseCases = () => {
  const useCases = [
    {
      title: 'E-Commerce Support Automation',
      icon: '🛍️',
      industry: 'Retail & E-commerce',
      problem: 'Customer support is bottlenecking sales growth',
      solution: 'WhatsApp chatbot handling 70% of inquiries, email automation for order updates',
      result: '+35% orders, 80% faster support',
      metrics: ['200+ queries/day', '2-min response time', '95% satisfaction'],
      complexity: 'Medium'
    },
    {
      title: 'Lead Qualification Pipeline',
      icon: '📧',
      industry: 'B2B SaaS',
      problem: 'Sales team drowning in unqualified leads',
      solution: 'Email + CRM automation, scoring leads based on engagement',
      result: '3x higher conversion',
      metrics: ['45% conversion', '20hrs/week saved', '99% accuracy'],
      complexity: 'High'
    },
    {
      title: 'Appointment Booking System',
      icon: '📅',
      industry: 'Services & Consulting',
      problem: 'Back-and-forth emails to schedule appointments',
      solution: 'Website form → WhatsApp → Calendly integration',
      result: '65% booking rate, instant confirmations',
      metrics: ['5-min turnaround', 'Zero no-shows', 'Instant reminders'],
      complexity: 'Low'
    },
    {
      title: 'Social Media Content Pipeline',
      icon: '📱',
      industry: 'Content & Coaching',
      problem: 'Inconsistent posting, manual scheduling',
      solution: 'Automated cross-platform posting with optimal timing',
      result: '+150% engagement, 15hrs/week saved',
      metrics: ['12 posts/day', 'Optimal timing', 'Performance tracking'],
      complexity: 'Low'
    },
    {
      title: 'Data Entry & Reconciliation',
      icon: '📊',
      industry: 'Finance & Accounting',
      problem: 'Hours spent on manual data entry and reconciliation',
      solution: 'Google Sheets + API automation, zero manual entry',
      result: '80% time reduction, 99.9% accuracy',
      metrics: ['0 manual entries', '100% accuracy', '500+ records/day'],
      complexity: 'High'
    },
    {
      title: 'Inventory & Order Management',
      icon: '📦',
      industry: 'Manufacturing & Logistics',
      problem: 'Inventory inconsistencies across platforms',
      solution: 'Real-time sync between sales channels and inventory',
      result: 'Prevented ₹5L+ in overselling losses',
      metrics: ['Real-time sync', 'Zero oversells', 'Instant updates'],
      complexity: 'High'
    },
    {
      title: 'Customer Onboarding',
      icon: '👋',
      industry: 'SaaS & Services',
      problem: 'Slow, manual onboarding process',
      solution: 'Automated welcome sequences, document collection, setup',
      result: 'Self-serve onboarding, 5x faster',
      metrics: ['24hr setup', 'Automated docs', 'Happy customers'],
      complexity: 'Medium'
    },
    {
      title: 'Report Generation & Distribution',
      icon: '📄',
      industry: 'Analytics & Reporting',
      problem: 'Manual reports created and emailed weekly',
      solution: 'Automated data pulling, report generation, distribution',
      result: '10hrs/week saved, always on time',
      metrics: ['0 manual work', 'Consistent delivery', 'Real-time data'],
      complexity: 'Medium'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
      <Sidebar />
      <BackToTop />
      <ScrollProgress />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              What We Can Automate For You
            </h1>
            <p className="text-2xl text-gray-300">
              Real examples of automation across different industries and business functions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-800/50 border border-slate-700 rounded-2xl group hover:border-cyan-400 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-6xl">{useCase.icon}</div>
                  <motion.span
                    className={`px-3 py-1 text-xs font-bold rounded-full ${useCase.complexity === 'Low'
                      ? 'bg-green-500/20 text-green-300'
                      : useCase.complexity === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-red-500/20 text-red-300'
                      }`}
                  >
                    {useCase.complexity} Complexity
                  </motion.span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-2">{useCase.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{useCase.industry}</p>

                {/* Problem */}
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-300 font-semibold mb-1">❌ Problem:</p>
                  <p className="text-sm text-gray-300">{useCase.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-blue-300 font-semibold mb-1">⚙️ Solution:</p>
                  <p className="text-sm text-gray-300">{useCase.solution}</p>
                </div>

                {/* Result */}
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-sm text-green-300 font-semibold mb-1">✨ Result:</p>
                  <p className="text-sm text-gray-300">{useCase.result}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {useCase.metrics.map((metric) => (
                    <span key={metric} className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded">
                      {metric}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-sm"
                >
                  Explore This Use Case
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
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
              Don't see your use case?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Almost any repetitive business process can be automated. Let's discuss your specific needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
            >
              Start a Custom Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
