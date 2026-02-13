import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';
import Sidebar from '../components/Sidebar';
import FloatingName from '../components/FloatingName';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white text-[#085078] font-sans selection:bg-[#9AE4CB]/30">
      <BackToTop />
      <Sidebar />
      <FloatingName />

      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-2 bg-[#9AE4CB]/15 rounded-full text-sm font-bold mb-8 text-[#085078] tracking-widest uppercase">
              Start Conversation
            </div>
            <h1 className="heading-1 mb-6 text-[#085078]">
              Let's Scale Your<br />Operations Together
            </h1>
            <p className="body-large text-[#085078]/60 max-w-2xl mx-auto mb-12">
              Choose your preferred way to connect and start building automation that works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Method Cards - Clean Horizontal Layout */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/917075392366"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact me on WhatsApp at +91 70753 92366"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-white border-2 border-[#085078]/10 rounded-2xl hover:border-[#9AE4CB] hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-green-600 group-hover:fill-white transition-colors">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#085078]/40 mb-2 font-semibold">Instant Communication</p>
              <h3 className="text-xl font-bold text-[#085078] mb-2 group-hover:text-[#085078]/70 transition-colors">WhatsApp</h3>
              <p className="text-base font-semibold text-green-600">+91 70753 92366</p>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:veerandrak49@gmail.com"
              aria-label="Send me an email at veerandrak49@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-white border-2 border-[#085078]/10 rounded-2xl hover:border-[#9AE4CB] hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-blue-600 group-hover:fill-white transition-colors">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#085078]/40 mb-2 font-semibold">Formal Inquiries</p>
              <h3 className="text-xl font-bold text-[#085078] mb-2 group-hover:text-[#085078]/70 transition-colors">Email</h3>
              <p className="text-sm font-semibold text-[#085078] break-all">veerandrak49@gmail.com</p>
            </motion.a>

            {/* Direct Call */}
            <motion.a
              href="tel:+917075392366"
              aria-label="Call me at +91 70753 92366"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-white border-2 border-[#085078]/10 rounded-2xl hover:border-[#9AE4CB] hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-500 transition-colors">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-cyan-600 group-hover:fill-white transition-colors">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#085078]/40 mb-2 font-semibold">Voice Consultation</p>
              <h3 className="text-xl font-bold text-[#085078] mb-2 group-hover:text-[#085078]/70 transition-colors">Direct Call</h3>
              <p className="text-base font-semibold text-[#085078]">+91 70753 92366</p>
            </motion.a>

            {/* Schedule */}
            <motion.a
              href="https://calendly.com/veerandrak49"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Schedule a consultation on Calendly"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-6 bg-[#9AE4CB]/10 border-2 border-[#9AE4CB]/30 rounded-2xl hover:border-[#9AE4CB] hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-[#085078] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
                </svg>
              </div>
              <p className="text-xs uppercase tracking-wider text-[#085078]/40 mb-2 font-semibold">Book a Session</p>
              <h3 className="text-xl font-bold text-[#085078] mb-2 group-hover:text-[#085078]/70 transition-colors">Schedule</h3>
              <p className="text-base font-bold text-[#085078]">Calendly Link</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* The Bridge Section */}
      <section className="py-32 px-6 bg-[#085078]/[0.02]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="heading-2 text-[#085078]">The Bridge.</h2>
              <p className="text-2xl text-[#085078]/60 leading-tight italic">
                "I value outcome over output. Tell me where you're stuck, and I'll tell you if code is the answer."
              </p>
            </div>

            <div className="space-y-8">
              {[
                { id: '1', text: 'Free initial strategy session' },
                { id: '2', text: 'Clear ROI-focused proposal' },
                { id: '3', text: 'Weekly transparency updates' }
              ].map(item => (
                <div key={item.id} className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full border-4 border-[#9AE4CB]/40 flex items-center justify-center text-xl font-bold text-[#085078]">
                    {item.id}
                  </div>
                  <span className="text-xl font-semibold text-[#085078]/80">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 bg-[#9AE4CB] pointer-events-none"></div>
            <div className="relative z-10">
              <Contact />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer variant="main" theme="light" />
    </div>
  );
};

export default ContactPage;
