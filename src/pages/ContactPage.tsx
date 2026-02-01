import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';
import ScrollProgress from '../components/ScrollProgress';
import Sidebar from '../components/Sidebar';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Instant communication',
      value: '+91 70753 92366',
      link: 'https://wa.me/917075392366',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Formal inquiries',
      value: 'veerandrak49@gmail.com',
      link: 'mailto:veerandrak49@gmail.com',
    },
    {
      icon: Phone,
      title: 'Direct Call',
      description: 'Voice consultation',
      value: '+91 70753 92366',
      link: 'tel:+917075392366',
    },
    {
      icon: Clock,
      title: 'Schedule',
      description: 'Book a session',
      value: 'Calendly Link',
      link: 'https://calendly.com/veerandrak49',
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

      {/* Hero Section */}
      <section className="py-40 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(to right, #f8f9fa 65%, #9AE4CB 65%)' }}>
        <div className="max-w-4xl mx-auto text-left w-full pr-24 relative z-10">
          <div className="inline-block px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium mb-8" style={{ color: '#085078' }}>
            Start Conversation
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter" style={{ color: '#085078' }}>
            Let's Scale Your<br />Operations Together
          </h1>
          <p className="text-xl md:text-3xl mb-4 leading-relaxed max-w-2xl" style={{ color: '#085078', opacity: 0.8 }}>
            Have an automation idea? Let's explore the possibilities.
          </p>
        </div>
      </section>

      {/* Contact Grid - NO BOXES */}
      <section className="py-40 px-6 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto pr-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 mb-40">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#085078' }}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight" style={{ color: '#085078' }}>{method.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">{method.description}</p>
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    className="block text-2xl font-bold hover:translate-x-2 transition-transform break-words"
                    style={{ color: '#085078' }}
                  >
                    {method.value}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-40 items-start">
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter" style={{ color: '#085078' }}>The Bridge.</h2>
                <p className="text-2xl text-gray-500 leading-tight italic">
                  "I value outcome over output. Tell me where you're stuck, and I'll tell you if code is the answer."
                </p>
              </div>

              <div className="space-y-12">
                {[
                  { id: '1', text: 'Free initial strategy session' },
                  { id: '2', text: 'Clear ROI-focused proposal' },
                  { id: '3', text: 'Weekly transparency updates' }
                ].map(item => (
                  <div key={item.id} className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center text-2xl font-bold" style={{ borderColor: '#9AE4CB', color: '#085078' }}>
                      {item.id}
                    </div>
                    <span className="text-2xl font-bold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative pt-12">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ backgroundColor: '#9AE4CB' }}></div>
              <div className="relative z-10">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 bg-white border-t border-gray-100 text-center">
        <div className="max-w-6xl mx-auto pr-24">
          <p className="text-gray-400 text-xs uppercase tracking-widest font-bold">
            © 2026 Veerendra Kumar • Automation Done Right
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
