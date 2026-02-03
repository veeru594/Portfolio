import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Code2, Mail, Instagram, Youtube, FileText, Sparkles, ArrowRight, CheckCircle2, Zap, Clock, Shield } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import ScrollProgress from '../components/ScrollProgress';
import FloatingName from '../components/FloatingName';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      name: 'WhatsApp Automation',
      tag: 'Conversation AI',
      description: 'Custom chatbots that handle customer support, lead qualification, and appointment booking on autopilot.',
      benefits: ['24/7 Availability', 'Instant Responses', 'CRM Integration']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      name: 'Web Scrapers',
      tag: 'Data Extraction',
      description: 'High-performance scripts to extract data from any website. Price monitoring, leads generation, and market research.',
      benefits: ['Anti-Detect Logic', 'Structured Data', 'Scheduled Runs']
    },
    {
      icon: <Mail className="w-8 h-8" />,
      name: 'Email Systems',
      tag: 'Outreach',
      description: 'Cold email infrastructure and newsletter automation. Ensure high deliverability and automated follow-ups.',
      benefits: ['Inbox Rotation', 'A/B Testing', 'Reply Tracking']
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      name: 'Social Bots',
      tag: 'Growth',
      description: 'Automated content scheduling and engagement scripts for Instagram, LinkedIn, and X (Twitter).',
      benefits: ['Content Calendar', 'Auto-Engagement', 'Analytics']
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      name: 'YouTube OS',
      tag: 'Content Ops',
      description: 'End-to-end channel management assistance. Tag generation, description optimization, and upload scheduling.',
      benefits: ['SEO Optimization', 'Bulk Editing', 'Trend Analysis']
    },
    {
      icon: <FileText className="w-8 h-8" />,
      name: 'Workflow Scripts',
      tag: 'Efficiency',
      description: 'Connecting your apps (Notion, Slack, Trello) to automate internal business updates and reporting.',
      benefits: ['Error Reduction', 'Real-time Sync', 'Custom Logic']
    }
  ];

  const fadeInUp: any = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-[#085078] font-sans selection:bg-[#9AE4CB]/30 overflow-x-hidden">
      <ScrollProgress />
      <Sidebar />

      {/* Floating Name */}
      <FloatingName />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 relative overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#eef2f5]">
        {/* Abstract shapes adhering to palette */}
        <div className="absolute right-0 top-0 w-[50vh] h-[50vh] bg-[#9AE4CB]/10 rounded-full blur-[100px]" />
        <div className="absolute left-0 bottom-0 w-[60vh] h-[60vh] bg-[#085078]/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-[#085078]/5 rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-[#085078]"
          >
            <div className="w-2 h-2 rounded-full bg-[#9AE4CB] animate-pulse" />
            Available for Freelance Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-[10vw] md:text-[8vw] font-bold leading-[0.9] tracking-tighter mb-12"
          >
            ENGINEERING<br />
            <span className="text-[#9AE4CB]">EFFICIENCY.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-12 md:items-end justify-between border-t border-[#085078]/10 pt-12"
          >
            <p className="text-xl md:text-3xl font-light leading-snug max-w-2xl opacity-80">
              I am a freelance Automation Engineer. I build the scripts, bots, and systems that act as your 24/7 digital workforce.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-sm font-bold uppercase tracking-widest opacity-40">Expertise</p>
              <ul className="text-lg font-medium space-y-1">
                <li>AI Agents</li>
                <li>Web Automation</li>
                <li>System Design</li>
              </ul>
            </div>
          </motion.div>
        </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 bg-gray-50 border border-gray-100 dark:border-[#085078]/10 rounded-2xl hover:bg-[#085078] hover:text-white transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#9AE4CB]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-white text-[#085078] rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60 group-hover:text-[#9AE4CB]">
                      {service.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-lg leading-relaxed opacity-70 group-hover:opacity-90 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium opacity-60 group-hover:opacity-100">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#9AE4CB]" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Freelance Advantage */}
      <section className="py-40 px-6 bg-[#085078] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">
                WHY HIRE<br />
                <span className="text-[#9AE4CB]">FREELANCE?</span>
              </h2>
              <p className="text-xl md:text-2xl opacity-70 leading-relaxed max-w-xl">
                Agencies overcharge and under-deliver. When you work with me, you get direct access to the engineer building your system. No middlemen, no bloat.
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
      <footer className="py-20 px-6 border-t border-[#085078]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-xs font-bold uppercase tracking-widest opacity-40">
            © 2026 Veerendra Kumar • Freelance Automation Engineer
          </div>
          <div className="flex gap-12">
            <a href="https://github.com/veeru594" target="_blank" rel="noopener noreferrer" className="hover:text-[#9AE4CB] transition-colors font-bold uppercase tracking-wider text-sm">
              Github
            </a>
            <a href="https://www.linkedin.com/in/veerendra-kumar0618/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9AE4CB] transition-colors font-bold uppercase tracking-wider text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
