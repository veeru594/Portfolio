import { Link } from 'react-router-dom';
import { MessageCircle, Code2, Mail, Instagram, Youtube, FileText, Sparkles, ArrowRight } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const services = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: 'WhatsApp Chatbot',
      description: 'AI-powered conversational intelligence that handles customer inquiries, qualifies leads, and provides instant support around the clock.',
      benefits: ['90% faster response time', 'Automated lead qualification', '24/7 customer availability', 'Multilingual support']
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      name: 'Website Chatbot',
      description: 'Seamlessly integrated chat solutions that engage visitors, answer questions in real-time, and capture valuable leads.',
      benefits: ['3x increase in engagement', 'Real-time visitor support', 'Lead capture automation', 'Custom conversation flows']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: 'Lead & Email Automation',
      description: 'Automated workflows that nurture prospects, score leads intelligently, and deliver personalized email sequences at scale.',
      benefits: ['Save 20+ hours per week', 'Automated lead nurturing', 'Personalized campaigns', 'Advanced segmentation']
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram Automation',
      description: 'Streamlined content scheduling, engagement tracking, and automated responses for consistent social media presence.',
      benefits: ['Daily consistent posting', 'Automated engagement', 'Content calendar management', 'Analytics tracking']
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      name: 'AI Content Automation',
      description: 'Intelligent content generation for marketing campaigns, social media posts, and customer communications.',
      benefits: ['1 month content in 1 day', 'AI-powered generation', 'Brand-consistent output', 'Multiple content formats']
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: 'YouTube Automation',
      description: 'Automated video management, metadata optimization, and intelligent scheduling for efficient channel growth.',
      benefits: ['Manage 100+ videos', 'SEO optimization', 'Automated scheduling', 'Performance analytics']
    },
    {
      icon: <FileText className="w-6 h-6" />,
      name: 'Contact Form Automation',
      description: 'Intelligent form processing, data validation, and automated routing to ensure every inquiry reaches the right person.',
      benefits: ['Zero missed inquiries', 'Instant notifications', 'Automated routing', 'CRM integration']
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#9AE4CB]/30">

      <Sidebar />

      {/* Floating Name (Top Left) */}
      <div className="fixed top-8 left-8 z-50">
        <Link to="/" className="text-xl font-bold tracking-tighter outline-none" style={{ color: '#085078' }}>
          Veerendra Kumar
        </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
        <div className="max-w-4xl mx-auto text-left w-full pr-24 relative z-10">
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium mb-8" style={{ color: '#085078' }}>
            Automation Specialist
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter" style={{ color: '#085078' }}>
            Building Systems<br />That Work for You
          </h1>
          <p className="text-xl md:text-3xl mb-12 leading-tight max-w-2xl" style={{ color: '#085078', opacity: 0.8 }}>
            I help businesses save time and scale operations through intelligent automation solutions.
          </p>
          <a
            href="https://wa.me/917075392366"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-white rounded-lg text-xl font-bold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#085078' }}
          >
            Get Free Consultation
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 px-6 bg-white border-b border-gray-50">
        <div className="max-w-5xl mx-auto pr-24">
          <div className="grid md:grid-cols-3 gap-24 text-left">
            <div>
              <div className="text-8xl font-bold mb-4 tracking-tighter" style={{ color: '#085078' }}>10+</div>
              <div className="text-xl font-bold text-gray-900">Projects Completed</div>
              <p className="text-gray-500 mt-2">Across diverse industries and complexity levels.</p>
            </div>
            <div>
              <div className="text-8xl font-bold mb-4 tracking-tighter" style={{ color: '#085078' }}>500+</div>
              <div className="text-xl font-bold text-gray-900">Hours Saved</div>
              <p className="text-gray-500 mt-2">Reclaimed for clients every single month.</p>
            </div>
            <div>
              <div className="text-8xl font-bold mb-4 tracking-tighter" style={{ color: '#085078' }}>100%</div>
              <div className="text-xl font-bold text-gray-900">Commitment</div>
              <p className="text-gray-500 mt-2">End-to-end delivery with zero maintenance stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6" style={{ backgroundColor: '#f8fffe' }}>
        <div className="max-w-4xl mx-auto pr-24">
          <div className="mb-32">
            <h2 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter" style={{ color: '#085078' }}>
              Services I Offer
            </h2>
            <p className="text-2xl text-gray-500 leading-tight max-w-2xl">
              Eliminating manual friction and scaling your business operations through specialized code.
            </p>
          </div>

          <div className="space-y-40">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-8">
                  <div className="pt-2 text-sm font-bold opacity-30 tracking-widest" style={{ color: '#085078' }}>
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-6xl font-bold mb-8 group-hover:translate-x-2 transition-transform" style={{ color: '#085078' }}>
                      {service.name}
                    </h3>
                    <p className="text-2xl text-gray-600 leading-tight mb-12 max-w-2xl">
                      {service.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                      {service.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-4 group/item">
                          <div className="w-2 h-2 rounded-full transition-all group-hover/item:w-4" style={{ backgroundColor: '#9AE4CB' }}></div>
                          <span className="text-lg font-medium text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-40 px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto pr-24">
          <h2 className="text-5xl md:text-8xl font-bold mb-32 tracking-tighter" style={{ color: '#085078' }}>
            The Process
          </h2>

          <div className="space-y-32">
            {[
              {
                step: '01',
                title: 'Understand',
                desc: 'Identifying the high-impact bottlenecks in your current workflow.'
              },
              {
                step: '02',
                title: 'Design',
                desc: 'Mapping out a custom automation architecture tailored for scale.'
              },
              {
                step: '03',
                title: 'Build',
                desc: 'Development with regular sanity checks and transparent updates.'
              },
              {
                step: '04',
                title: 'Deliver',
                desc: 'Deployment with full documentation and transition support.'
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-12 md:items-end">
                <div className="text-7xl font-bold leading-none tracking-tighter px-4 border-l-8" style={{ borderColor: '#9AE4CB', color: '#085078' }}>
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#085078' }}>{item.title}</h3>
                  <p className="text-2xl text-gray-500 leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6" style={{ backgroundColor: '#085078' }}>
        <div className="max-w-4xl mx-auto text-center pr-24">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-12 tracking-tighter">
            Ready to Automate?
          </h2>
          <p className="text-2xl text-white/50 mb-16 max-w-2xl mx-auto">
            Let's discuss how we can remove the manual work from your schedule.
          </p>
          <a
            href="https://wa.me/917075392366"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-12 py-6 bg-[#9AE4CB] rounded-lg font-bold text-2xl hover:opacity-90 transition-opacity"
            style={{ color: '#085078' }}
          >
            Get Started
            <ArrowRight className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto pr-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <div className="text-2xl font-bold mb-2 tracking-tighter" style={{ color: '#085078' }}>
                Veerendra Kumar
              </div>
              <p className="text-gray-400">Automation Specialist • © 2026 All Rights Reserved</p>
            </div>
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-gray-400">
              <a href="https://github.com/veeru594" target="_blank" rel="noopener noreferrer" className="hover:text-[#085078] transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/veerendra-kumar0618/" target="_blank" rel="noopener noreferrer" className="hover:text-[#085078] transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
