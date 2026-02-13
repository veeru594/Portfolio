import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Code2, Mail, FileText, Sparkles, ArrowRight, CheckCircle2, Zap, Clock, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import FloatingName from '../components/FloatingName';
import Footer from '../components/Footer';

const Home = () => {

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      name: 'RAG Chatbots',
      tag: 'AI Assistants',
      description: 'Intelligent chatbots powered by your own knowledge base. Answer customer questions, provide support, and qualify leads 24/7.',
      benefits: ['Custom Training', 'Multi-Channel', 'Context Aware']
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      name: 'WhatsApp & Messaging Bots',
      tag: 'Automation',
      description: 'Custom chatbots for WhatsApp, Telegram, and SMS. Handle customer support, appointment booking, and lead qualification.',
      benefits: ['24/7 Available', 'Instant Responses', 'CRM Integration']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      name: 'Lead Scraping & Data Extraction',
      tag: 'Lead Generation',
      description: 'Automated lead generation from LinkedIn, Google Maps, directories, and custom sources. Clean, qualified data ready for outreach.',
      benefits: ['Anti-Detection', 'Email Finding', 'Clean Data']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: 'CRM & Lead Integration',
      tag: 'Sales Automation',
      description: 'Connect your lead sources to CRM systems. Auto-enrich data, trigger workflows, and sync across platforms seamlessly.',
      benefits: ['Auto-Sync', 'Data Enrichment', 'Multi-Platform']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      name: 'Website Design & Development',
      tag: 'Web Solutions',
      description: 'Modern, responsive websites built for conversion. Landing pages, portfolios, and business sites with clean code.',
      benefits: ['Fast Loading', 'Mobile First', 'SEO Optimized']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      name: 'Email Automation',
      tag: 'Outreach',
      description: 'Cold email infrastructure, drip campaigns, and newsletter automation. High deliverability with automated follow-ups.',
      benefits: ['Inbox Rotation', 'A/B Testing', 'Reply Tracking']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      name: 'Custom Automation',
      tag: 'Workflow',
      description: 'Bespoke automation solutions for your unique business needs. Connect any tools, automate any process.',
      benefits: ['Custom Logic', 'API Integration', 'Scalable']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      name: 'System Integration',
      tag: 'Enterprise',
      description: 'Connect disparate systems and create unified workflows. Zapier, Make, or custom API integrations.',
      benefits: ['Error Handling', 'Real-time Sync', 'Monitoring']
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  } as const;

  return (
    <div className="min-h-screen bg-white text-[#085078] font-sans selection:bg-[#9AE4CB]/30 overflow-x-hidden">
      <Sidebar />

      {/* Floating Name */}
      <FloatingName />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 relative overflow-hidden bg-gradient-to-br from-white via-[#f0f7fa] to-[#e8f4f0]">
        {/* Ambient gradient orbs */}
        <motion.div
          className="absolute right-[-10%] top-[-10%] w-[60vh] h-[60vh] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(154,228,203,0.15) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute left-[-5%] bottom-[-10%] w-[50vh] h-[50vh] bg-[#085078]/5 rounded-full blur-[100px]" />

        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#085078 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Editorial watermark */}
        <div className="absolute right-[5%] top-[15%] text-[25vw] font-black text-[#085078]/[0.02] leading-none select-none pointer-events-none tracking-tighter">
          01
        </div>

        {/* Vertical accent line */}
        <motion.div
          className="absolute left-12 top-[20%] w-[1px] h-[25%] bg-gradient-to-b from-transparent via-[#9AE4CB] to-transparent hidden md:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#9AE4CB]/10 border border-[#9AE4CB]/20 rounded-full text-xs font-bold uppercase tracking-widest mb-10 text-[#085078]"
          >
            <div className="w-2 h-2 rounded-full bg-[#9AE4CB] animate-pulse" />
            Taking on Client Projects
          </motion.div>

          {/* Staggered heading with stroke contrast */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-transparent"
              style={{ WebkitTextStroke: '1.5px #085078' }}
            >
              ENGINEERING
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#9AE4CB] to-[#6BC5A0]"
            >
              EFFICIENCY.
            </motion.div>
          </div>

          {/* Typographic credibility strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#085078]/30 mb-12"
          >
            <span>AI Systems</span>
            <span className="w-4 h-[1px] bg-[#9AE4CB]" />
            <span>Workflow Automation</span>
            <span className="w-4 h-[1px] bg-[#9AE4CB]" />
            <span>Full-Stack Engineering</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-[#085078]/10 pt-12"
          >
            <p className="text-xl md:text-3xl font-light leading-snug max-w-2xl text-[#085078]/70">
              I'm an independent Automation Engineer working directly with clients. I build custom systems, bots, and solutions that act as your 24/7 digital workforce.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold uppercase tracking-widest text-[#085078]/40">Expertise</p>
              <ul className="text-lg font-medium space-y-2">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#9AE4CB]" />AI Agents</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#9AE4CB]" />Web Automation</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#9AE4CB]" />System Design</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Editorial scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#085078]/25">Scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-[#085078]/15"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.h2 {...fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter">
              CAPABILITIES.
            </motion.h2>
            <motion.div {...fadeInUp} className="text-right">
              <p className="text-xl opacity-60">Technical solutions for business problems.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {services.map((service, index) => {
              const spans = [
                'md:col-span-8', 'md:col-span-4',
                'md:col-span-4', 'md:col-span-4', 'md:col-span-4',
                'md:col-span-6', 'md:col-span-6',
                'md:col-span-12'
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${spans[index]} bg-slate-50 border border-slate-100 hover:border-[#9AE4CB]/30 hover:shadow-[0_20px_40px_-15px_rgba(8,80,120,0.05)]`}
                >
                  {/* Stencil Number Background */}
                  <div className="absolute -right-4 -bottom-4 text-[12vw] md:text-[8vw] font-black text-slate-200/40 select-none pointer-events-none transition-colors group-hover:text-[#9AE4CB]/10 leading-none">
                    0{index + 1}
                  </div>

                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#9AE4CB]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                      <div className="p-4 bg-white text-[#085078] rounded-2xl shadow-sm border border-slate-50 group-hover:scale-110 group-hover:bg-[#085078] group-hover:text-white transition-all duration-500">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#085078]/40 group-hover:text-[#9AE4CB] transition-colors">
                        {service.tag}
                      </span>
                    </div>

                    <div className="mt-auto">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight group-hover:text-[#085078] transition-colors">{service.name}</h3>
                      <p className="text-lg leading-relaxed opacity-60 group-hover:opacity-80 mb-8 max-w-md">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/50 border border-slate-100 text-xs font-bold uppercase tracking-wider text-[#085078]/60 group-hover:bg-[#085078]/5 group-hover:text-[#085078] group-hover:border-[#085078]/10 transition-all">
                            <CheckCircle2 className="w-3 h-3 text-[#9AE4CB]" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* The Freelance Advantage */}
      <section className="py-40 px-6 bg-[#085078] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
                WHY WORK<br />
                <span className="text-[#9AE4CB]">DIRECTLY?</span>
              </h2>
              <p className="text-xl md:text-2xl opacity-70 leading-relaxed max-w-xl">
                Agencies add layers of cost and complexity. When you work directly with me, you get the engineer building your system—no middlemen, no bloat, just results.
              </p>
            </motion.div>

            <div className="space-y-12">
              {[
                { title: 'Rapid Execution', desc: 'I deploy production-ready code in days, not months.', icon: Clock },
                { title: 'Total Ownership', desc: 'You own the code, the accounts, and the data. Forever.', icon: Shield },
                { title: 'Direct Communication', desc: 'You speak to me, not a project manager.', icon: MessageCircle }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-6 items-start"
                >
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[#9AE4CB]">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg opacity-60">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div className="mb-32 text-center" {...fadeInUp}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter lg:mb-4">
              HOW WE WORK.
            </h2>
            <div className="w-24 h-1 bg-[#085078] mx-auto opacity-10" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consult', desc: 'We discuss your bottlenecks and define the scope.' },
              { step: '02', title: 'Blueprint', desc: 'I design the architecture and get your approval.' },
              { step: '03', title: 'Develop', desc: 'I build the system with regular updates.' },
              { step: '04', title: 'Handover', desc: 'Deployment, documentation, and training.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
                className="relative p-8 border-l-2 border-[#085078]/10 hover:border-[#9AE4CB] transition-colors duration-300"
              >
                <span className="absolute -left-[11px] top-8 w-5 h-5 bg-white border-4 border-[#085078]/10 rounded-full" />
                <div className="text-6xl font-bold text-[#085078]/10 mb-6">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-[#085078]/5 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { value: '10+', label: 'Active Clients' },
            { value: '500+', label: 'Hours Saved' },
            { value: '100%', label: 'Success Rate' },
            { value: '24h', label: 'Response Time' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="text-5xl md:text-6xl font-bold tracking-tight text-[#085078]">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-[#9AE4CB]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp} className="space-y-12">
            <h2 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none text-[#085078]">
              READY TO<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px #085078' }}>DELEGATE?</span>
            </h2>
            <p className="text-xl md:text-3xl font-light opacity-60 max-w-2xl mx-auto">
              Stop doing the busy work. Let's build a system that does it for you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                aria-label="Book a strategy call to discuss your project"
                className="inline-flex items-center gap-6 px-12 py-8 bg-[#085078] text-white rounded-2xl text-2xl font-bold hover:bg-[#085078]/90 transition-all shadow-2xl"
              >
                Book a Call
                <ArrowRight className="w-8 h-8" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Abstract background element */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#9AE4CB]/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Footer */}
      <Footer variant="main" theme="light" />
    </div>
  );
};

export default Home;
