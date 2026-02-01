import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import Sidebar from '../components/Sidebar';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Personal Assistant – JARVIS',
      category: 'AI & Automation Specialist',
      description: 'A fully functional voice-controlled AI assistant designed for desktop automation and system control.',
      features: [
        'Voice-to-text recognition with speaker authentication',
        'Direct YouTube/Browser controls & system functions',
        'Automated file management and report generation',
        'Advanced NLP for intent understanding'
      ],
      tech: ['Python', 'NLP', 'Voice Recognition', 'API Integration', 'Automation'],
      impact: 'Major Academic Project'
    },
    {
      id: 2,
      title: 'Meta Ecosystem Automation',
      category: 'Social Media Strategy',
      description: 'Production-ready automation workflow for content creators utilizing the Meta Business API for cross-platform posting.',
      features: [
        'Automated image generation based on templates',
        'Scheduled posting for Instagram and Facebook',
        'n8n orchestration for multi-step workflows',
        'Content verification and analytics sync'
      ],
      tech: ['n8n', 'Meta API', 'HTTP Request Automation', 'Python'],
      impact: 'Freelance Solution'
    },
    {
      id: 3,
      title: 'Enterprise Chatbot System',
      category: 'Conversational AI',
      description: 'Full-stack chatbot deployment for a live business environment, handling customer inquiries and gathering leads securely.',
      features: [
        'FastAPI backend with specialized logic',
        'Embedded React chatbot widget',
        'Secure VPS hosting & deployment',
        'Lead capture and email notification system'
      ],
      tech: ['FastAPI', 'React', 'VPS Hosting', 'Lead Generation'],
      impact: 'Software Solution'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#9AE4CB]/30">
      <BackToTop />
      <ScrollProgress />

      <Sidebar />

      {/* Floating Name (Top Left) */}
      <div className="fixed top-8 left-8 z-50">
        <Link to="/" className="text-xl font-bold tracking-tighter outline-none" style={{ color: '#085078' }}>
          Veerendra Kumar
        </Link>
      </div>

      {/* Hero Section - About Me Focus */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
        <div className="max-w-4xl mx-auto text-left w-full pr-24 relative z-10">
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium mb-8" style={{ color: '#085078' }}>
            Portfolio & About Me
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter" style={{ color: '#085078' }}>
            Innovator.<br />Engineer.<br />Strategist.
          </h1>
          <p className="text-xl md:text-3xl mb-4 leading-relaxed max-w-2xl" style={{ color: '#085078', opacity: 0.8 }}>
            My passion is building intelligent systems that simplify complexity and drive real business growth.
          </p>
        </div>
      </section>

      {/* About Me / Journey Section */}
      <section className="py-40 px-6 bg-white border-b border-gray-50">
        <div className="max-w-5xl mx-auto pr-24 grid md:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter" style={{ color: '#085078' }}>
              The Story
            </h2>
            <div className="space-y-8 text-2xl text-gray-600 leading-tight">
              <p>
                As a B.Tech graduate with a deep-seated interest in AI and automation, I've dedicated the last 4+ months to professionalizing my toolkit through high-impact freelance projects.
              </p>
              <p>
                I thrive at the intersection of technical engineering and business strategy, ensuring that every line of code serves a measurable objective.
              </p>
            </div>
          </div>
          <div className="space-y-12 pt-4">
            <div className="p-10 rounded-2xl border-2" style={{ borderColor: '#9AE4CB' }}>
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#085078' }}>Core Focus</h3>
              <ul className="space-y-4">
                {['B.Tech Graduate', 'AI & Automation Specialist', 'Data-Driven Problem Solver', 'Full-Stack Developer'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xl font-medium text-gray-700">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#085078' }}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-40 px-6" style={{ backgroundColor: '#f8fffe' }}>
        <div className="max-w-4xl mx-auto pr-24">
          <h2 className="text-5xl md:text-8xl font-bold mb-32 tracking-tighter" style={{ color: '#085078' }}>
            The Work
          </h2>
          <div className="space-y-60">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="grid md:grid-cols-3 gap-16 items-start">
                  <div className="md:col-span-2 space-y-8">
                    <div className="text-sm font-bold uppercase tracking-widest text-[#9AE4CB]">
                      {project.category}
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter" style={{ color: '#085078' }}>
                      {project.title}
                    </h2>
                    <p className="text-2xl text-gray-600 leading-tight">
                      {project.description}
                    </p>
                    <div className="space-y-6 pt-8">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#9AE4CB' }} />
                          <span className="text-xl text-gray-700 leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-12 pt-4 text-right">
                    <div className="p-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
                      <div className="text-sm uppercase tracking-widest text-gray-300 mb-4 font-bold">Outcome</div>
                      <div className="text-2xl font-bold" style={{ color: '#085078' }}>{project.impact}</div>
                    </div>
                    <a
                      href="https://github.com/veeru594"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 text-xl font-bold hover:translate-x-2 transition-transform"
                      style={{ color: '#085078' }}
                    >
                      Documentation
                      <ArrowRight className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Toolkit Section */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-4xl mx-auto pr-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-24 tracking-tighter" style={{ color: '#085078' }}>
            Technical Toolkit
          </h2>
          <div className="grid md:grid-cols-2 gap-24">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest" style={{ color: '#9AE4CB' }}>Stack</h3>
              <div className="flex flex-wrap gap-4">
                {['Python', 'JavaScript', 'React', 'FastAPI', 'Next.js', 'PostgreSQL', 'NLP', 'Machine Learning'].map(skill => (
                  <div key={skill} className="px-6 py-3 border-2 border-gray-100 rounded-full font-bold text-[#085078]">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-widest" style={{ color: '#9AE4CB' }}>Platforms</h3>
              <div className="flex flex-wrap gap-4">
                {['n8n', 'Zapier', 'Make.com', 'Meta API', 'WhatsApp API', 'Stripe', 'Google Workspace'].map(platform => (
                  <div key={platform} className="px-6 py-3 border-2 border-gray-100 rounded-full font-bold text-[#085078]">
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6" style={{ backgroundColor: '#085078' }}>
        <div className="max-w-4xl mx-auto text-center pr-24">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter">Let's Build.</h2>
          <p className="text-2xl text-white/50 mb-16">
            Ready to integrate intelligence into your business systems?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#9AE4CB] text-[#085078] rounded-lg text-2xl font-bold hover:opacity-90 transition-opacity"
          >
            Start Conversation
            <ArrowRight className="w-8 h-8" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white text-center">
        <div className="max-w-6xl mx-auto pr-24">
          <div className="flex justify-center gap-16 mb-8">
            <a href="https://github.com/veeru594" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#085078] transition-all">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/veerendra-kumar0618/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#085078] transition-all">
              <ExternalLink className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
            © 2026 Veerendra Kumar • Consolidating Intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
