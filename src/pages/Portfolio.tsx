import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, CheckCircle2, Globe, Sparkles, Zap, Target, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import Sidebar from '../components/Sidebar';
import FloatingName from '../components/FloatingName';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'JARVIS: AI Personal Assistant',
      category: 'AI & Automation Specialist',
      problem: 'Technical users often struggle with fragmented system controls and repetitive manual tasks across different platforms.',
      solution: 'A unified voice-controlled AI ecosystem that bridges the gap between natural language intent and system-level execution.',
      result: 'Automated 80% of daily desktop workflows for pilot users, reducing time spent on file management and reporting.',
      features: [
        'Voice-to-text with biometric authentication',
        'Direct YouTube/Browser & system orchestration',
        'NLP-driven report generation',
        'Intelligent intent understanding'
      ],
      tech: ['Python', 'NLP', 'TensorFlow', 'Custom OS APIs'],
      impact: 'Productivity Optimization',
      image: '/assets/projects/jarvis.png'
    },
    {
      id: 2,
      title: 'Meta Ecosystem Automation',
      category: 'Growth Strategy',
      problem: 'Content creators face scaling bottlenecks when manually managing cross-platform distribution and engagement.',
      solution: 'A production-grade n8n orchestration layer that automates the entire content lifecycle from generation to analytics.',
      result: 'Enabled a 4x increase in posting frequency while reducing manual labor by 15 hours per week.',
      features: [
        'AI-driven template generation',
        'Multi-platform scheduled posting',
        'Real-time engagement tracking',
        'Automated content verification'
      ],
      tech: ['n8n', 'Meta API', 'OpenAI', 'Python'],
      impact: 'Scalability Boost',
      image: '/assets/projects/meta_automation.png'
    },
    {
      id: 3,
      title: 'Enterprise Chatbot System',
      category: 'Conversational Intelligence',
      problem: 'Businesses lose potential leads due to delayed response times and inefficient customer query handling.',
      solution: 'A high-performance FastAPI/React chatbot widget designed for secure, instant lead capture and intelligent triage.',
      result: 'Captured 35% more qualified leads for early adopters compared to static contact forms.',
      features: [
        'FastAPI high-concurrency backend',
        'Lightweight React widget',
        'Secure lead encryption & storage',
        'Automatic email/SMS notifications'
      ],
      tech: ['FastAPI', 'React', 'PostgreSQL', 'Docker'],
      impact: 'Lead Generation Efficiency',
      image: '/assets/projects/chatbot.png'
    }
  ];

  const fadeInUp: any = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-[#085078] font-sans selection:bg-[#9AE4CB]/30 overflow-x-hidden">
      <BackToTop />
      <ScrollProgress />
      <Sidebar />

      {/* Floating Name (Top Left) */}
      <FloatingName />

      {/* Hero Section - The Identity */}
      <section className="relative min-h-[100vh] flex items-center px-6 pt-20">
        <motion.div
          className="absolute right-0 top-0 w-2/5 h-full z-0 opacity-10"
          style={{
            background: 'linear-gradient(135deg, #9AE4CB 0%, transparent 100%)',
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <span className="w-12 h-[1px] bg-[#085078]/30" />
            <span className="text-xs font-bold uppercase tracking-[0.4em]">The Human Behind the Code</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[12vw] md:text-[9vw] font-bold leading-[0.8] tracking-tighter mb-16"
          >
            STORY.<br />
            SYSTEMS.<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #085078' }}>STRATEGY.</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-3xl font-light leading-snug max-w-2xl"
          >
            B.Tech graduate turned Automation Architect. I design intelligent systems that move beyond code to create real-world leverage.
          </motion.div>
        </div>
      </section>

      {/* About Section - The Narrative */}
      <section className="py-40 px-6 border-y border-[#085078]/5 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">
          <motion.div {...fadeInUp} className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">The Journey.</h2>
            <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed opacity-80">
              <p>
                My path started with a deep fascination for how systems interact. During my B.Tech, I realized that the most powerful application of engineering wasn't just building standalone tools, but creating <span className="text-[#085078] font-normal">connected ecosystems</span>.
              </p>
              <p>
                Over the last year, I’ve specialized in bridging the gap between manual friction and autonomous flow. From WhatsApp bots to complex Meta API orchestrations, my focus is always on <span className="text-[#085078] font-normal">measurable growth</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="space-y-12 bg-white p-12 rounded-3xl shadow-sm border border-[#085078]/5"
          >
            <div className="space-y-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#9AE4CB]">Core Identity</h3>
              <div className="grid gap-6">
                {[
                  { icon: GraduationCap, label: 'B.Tech Graduate', sub: 'Engineering Foundation' },
                  { icon: Target, label: 'Automation Architect', sub: 'Systems & Logic' },
                  { icon: ShieldCheck, label: 'Data-Driven Strategist', sub: 'Business Impact' },
                  { icon: Sparkles, label: 'Freelance Innovator', sub: 'Agile Solutions' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#085078]/5 flex items-center justify-center group-hover:bg-[#9AE4CB]/20 transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{item.label}</div>
                      <div className="text-sm opacity-50 uppercase tracking-wider font-bold">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section - The Philosophy */}
      <section className="py-40 px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp} className="space-y-8 max-w-4xl mx-auto">
            <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-[#9AE4CB]">My Commitment</h2>
            <blockquote className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight italic">
              "I build intelligent systems that simplify complexity and drive real business growth."
            </blockquote>
            <p className="text-xl md:text-2xl font-light opacity-60 leading-relaxed pt-8">
              Every automation I build is designed to reclaim your team's time and reduce friction. I don't just write code; I provide ongoing support and optimize systems based on real performance data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase - The Proof */}
      <section className="py-40 px-6 bg-[#085078]/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-12">
            <motion.h2 {...fadeInUp} className="text-6xl md:text-8xl font-bold tracking-tighter">
              THE WORK.
            </motion.h2>
            <motion.p {...fadeInUp} className="text-lg md:text-xl font-light opacity-60 max-w-md">
              Selected projects that demonstrate the synergy between technical engineering and strategic automation.
            </motion.p>
          </div>

          <div className="space-y-40 md:space-y-80">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}
              >
                {/* Image Container */}
                <div className="flex-1 w-full group overflow-hidden bg-gray-50 rounded-2xl relative border border-[#085078]/5 shadow-2xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#085078]/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Content Container */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#9AE4CB]">
                      {project.category}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                      {project.title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 gap-8 py-8 border-y border-[#085078]/10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase opacity-40">
                        <Target className="w-3 h-3" /> The Challenge
                      </div>
                      <p className="text-lg opacity-80 leading-relaxed font-light">{project.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#9AE4CB]">
                        <Sparkles className="w-3 h-3" /> The Strategy
                      </div>
                      <p className="text-lg opacity-90 leading-relaxed">{project.solution}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#085078]">
                        <Zap className="w-3 h-3" /> The Outcome
                      </div>
                      <p className="text-xl font-bold">{project.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-[#085078]/5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href="https://github.com/veeru594"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest pt-6"
                  >
                    Explore Documentation
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Toolkit */}
      <section className="py-40 px-6 bg-[#085078]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl space-y-12">
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              THE<br />TOOLKIT.
            </h2>
            <div className="grid md:grid-cols-2 gap-20">
              <div className="space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#9AE4CB]">Core Engineering</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Python', 'JavaScript', 'React', 'FastAPI', 'Next.js', 'PostgreSQL', 'NLP', 'TensorFlow'].map(skill => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className="p-4 border border-white/10 rounded-xl text-white font-medium text-sm flex items-center justify-between group transition-colors"
                    >
                      {skill}
                      <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#9AE4CB] transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#9AE4CB]">System Orchestration</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['n8n', 'Zapier', 'Make.com', 'Meta API', 'WhatsApp API', 'Docker', 'Google Workspace', 'Firebase'].map(platform => (
                    <motion.div
                      key={platform}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      className="p-4 bg-white/5 border border-white/10 rounded-xl text-white font-medium text-sm flex items-center justify-between group transition-colors"
                    >
                      {platform}
                      <Zap className="w-4 h-4 opacity-0 group-hover:opacity-100 text-[#9AE4CB] transition-opacity" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-60 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div {...fadeInUp} className="space-y-12">
            <h2 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter leading-none">
              LET'S<br /><span className="text-[#9AE4CB]">BUILD.</span>
            </h2>
            <p className="text-xl md:text-3xl font-light opacity-60 max-w-2xl mx-auto">
              Ready to turn strategy into autonomous reality?
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
                Initiate Project
                <ArrowRight className="w-8 h-8" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[#9AE4CB]/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-[#085078]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 items-center">
          <div className="text-xs font-bold uppercase tracking-widest opacity-40">
            © 2026 Veerendra Kumar • Consolidating Intelligence
          </div>
          <div className="flex gap-12">
            <a href="https://github.com/veeru594" target="_blank" rel="noopener noreferrer" className="hover:text-[#9AE4CB] transition-colors">
              <Github className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/veerendra-kumar0618/" target="_blank" rel="noopener noreferrer" className="hover:text-[#9AE4CB] transition-colors">
              <ExternalLink className="w-10 h-10" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
