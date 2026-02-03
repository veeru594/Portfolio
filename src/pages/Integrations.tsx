import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import Sidebar from '../components/Sidebar';

const Integrations = () => {
  const tools = [
    { name: 'Make.com', icon: '⚙️', category: 'Workflow Automation', level: 'Expert', desc: '2000+ integrations' },
    { name: 'Zapier', icon: '🔌', category: 'Automation', level: 'Expert', desc: '6000+ apps' },
    { name: 'WhatsApp Business API', icon: '💬', category: 'Messaging', level: 'Expert', desc: 'Custom bots' },
    { name: 'Google Sheets', icon: '📊', category: 'Data Management', level: 'Expert', desc: 'Real-time sync' },
    { name: 'Airtable', icon: '🗄️', category: 'Database', level: 'Advanced', desc: 'Complex workflows' },
    { name: 'Stripe', icon: '💳', category: 'Payments', level: 'Advanced', desc: 'Payment automation' },
    { name: 'OpenAI / GPT', icon: '🤖', category: 'AI', level: 'Advanced', desc: 'Smart content' },
    { name: 'Gmail / SendGrid', icon: '📧', category: 'Email', level: 'Advanced', desc: 'Email automation' },
    { name: 'Slack', icon: '💼', category: 'Communication', level: 'Advanced', desc: 'Team notifications' },
    { name: 'Google Forms', icon: '📝', category: 'Forms', level: 'Advanced', desc: 'Lead capture' },
    { name: 'Calendly', icon: '📅', category: 'Scheduling', level: 'Intermediate', desc: 'Booking automation' },
    { name: 'Instagram / Facebook', icon: '📱', category: 'Social Media', level: 'Advanced', desc: 'Content posting' },
    { name: 'YouTube', icon: '🎬', category: 'Video', level: 'Advanced', desc: 'Bulk uploads' },
    { name: 'HubSpot', icon: '🎯', category: 'CRM', level: 'Advanced', desc: 'Lead management' },
    { name: 'Shopify', icon: '🛍️', category: 'E-commerce', level: 'Advanced', desc: 'Order automation' },
    { name: 'AWS Lambda', icon: '☁️', category: 'Cloud', level: 'Intermediate', desc: 'Custom functions' },
  ];

  const stats = [
    { number: '50+', label: 'Integrated Tools', icon: '🔗' },
    { number: '2000+', label: 'Integrations Built', icon: '⚙️' },
    { number: '99.9%', label: 'Uptime', icon: '✅' },
    { number: '0', label: 'Integration Failures', icon: '🛡️' }
  ];

  const categories = [
    { name: 'Workflow Automation', count: 5, color: 'from-blue-500 to-cyan-500' },
    { name: 'Communication', count: 4, color: 'from-purple-500 to-pink-500' },
    { name: 'Data & CRM', count: 5, color: 'from-orange-500 to-red-500' },
    { name: 'Finance & Payments', count: 2, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
      <Sidebar />
      <BackToTop />
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-7xl font-black text-white mb-4">
              50+ Tools & Integrations
            </h1>
            <p className="text-2xl text-gray-300">
              I work with the tools your business already uses. No proprietary software. No lock-in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">By Category</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-6 bg-gradient-to-br ${cat.color} rounded-xl border border-slate-700`}
              >
                <h3 className="text-xl font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-white font-bold text-2xl">{cat.count}+ tools</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Complete Tool List</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -5 }}
                className="p-5 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-cyan-400 transition-all group cursor-pointer"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-xs text-gray-400 mb-2">{tool.category}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${tool.level === 'Expert'
                    ? 'bg-green-500/20 text-green-300'
                    : tool.level === 'Advanced'
                      ? 'bg-blue-500/20 text-blue-300'
                      : 'bg-gray-500/20 text-gray-300'
                    }`}>
                    {tool.level}
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-2">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              If your tool isn't on this list, we can likely build a custom integration using APIs. We've successfully connected 100+ different platforms.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-lg transition-shadow"
            >
              Ask About Your Tools
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Integration Guarantee */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              🛡️ Integration Guarantee
            </h2>
            <div className="space-y-4">
              {[
                'All integrations use official, supported APIs (no deprecated methods)',
                'We handle all authentication and security protocols',
                '30-day warranty - if it breaks, we fix it free',
                'Proactive monitoring for API changes and updates',
                'No lock-in - you own all your data and workflows',
                'Documentation provided for long-term maintenance'
              ].map((guarantee) => (
                <div key={guarantee} className="flex items-center gap-4 text-gray-300 text-lg">
                  <span className="text-cyan-400 font-bold text-2xl">✓</span>
                  {guarantee}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Integrations;
