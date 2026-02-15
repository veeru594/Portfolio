import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';

import { CODE_SYMBOL_PATHS, ROBOT_SYMBOL_PATHS } from '../constants/particlePaths';
import Footer from '../components/Footer';

/**
 * PREMIUM PERSONAL INTRO PAGE
 * Design: Minimal, Editorial, Architectural.
 * Rules: Light background, Left-aligned text, Split view in hero.
 */
const Intro = () => {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 8 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const stagger: Variants = {
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen text-[#273B3A] selection:bg-[#273B3A]/10 antialiased overflow-x-hidden bg-[#ffe9d4]">

            {/* 1. HERO SECTION (Split Background) */}
            <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #ffe9d4 65%, #273B3A 65%)' }}>
                {/* Left Side: Content */}
                <div className="w-full lg:w-[65%] px-8 md:px-24 lg:px-32 py-24 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-4xl space-y-16"
                    >
                        {/* Headline & Subheadline */}
                        <div className="space-y-6">
                            <motion.div variants={fadeUp} className="space-y-1">
                                <h1 className="text-sm tracking-[0.3em] font-medium text-[#273B3A]/60 uppercase">
                                    Veerendra Kumar
                                </h1>
                                <h2 className="text-[7vw] md:text-[2.8vw] lg:text-[2.6vw] font-bold tracking-tight leading-tight text-[#273B3A] whitespace-nowrap">
                                    AI SYSTEMS & AUTOMATION ENGINEER
                                </h2>
                            </motion.div>

                            <motion.p variants={fadeUp} className="body-large text-[#273B3A]/80 max-w-2xl">
                                I build AI-powered systems using agents, RAG pipelines, and API integrations to automate real business workflows and customer interactions.
                            </motion.p>
                        </div>

                        {/* Action Links */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-8 items-center">
                            <Link
                                to="/home"
                                aria-label="View my work"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#273B3A]/60 group-hover:text-[#273B3A] transition-colors">[ Work ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/10 group-hover:bg-[#273B3A] transition-all" />
                            </Link>
                            <Link
                                to="/portfolio"
                                aria-label="View my portfolio"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#273B3A]/60 group-hover:text-[#273B3A] transition-colors">[ Portfolio ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/10 group-hover:bg-[#273B3A] transition-all" />
                            </Link>
                            <Link
                                to="/skills"
                                aria-label="View my skills"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#273B3A]/60 group-hover:text-[#273B3A] transition-colors">[ Skills ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/10 group-hover:bg-[#273B3A] transition-all" />
                            </Link>
                            <Link
                                to="/contact"
                                aria-label="Contact me"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#273B3A]/60 group-hover:text-[#273B3A] transition-colors">[ Contact ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/10 group-hover:bg-[#273B3A] transition-all" />
                            </Link>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div variants={fadeUp} className="pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#273B3A] rounded-full animate-pulse shadow-[0_0_8px_rgba(39,59,58,0.4)]" />
                                <p className="text-xs tracking-[0.2em] text-[#273B3A]/60 uppercase font-medium">
                                    Available for AI engineering roles & projects.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Side: Interactive Particle Canvas */}
                <div className="hidden lg:flex w-[35%] h-full absolute right-0 top-0 items-center justify-center pointer-events-auto">
                    <div className="w-full h-full p-12">
                        <ParticleCanvas shapes={[CODE_SYMBOL_PATHS, ROBOT_SYMBOL_PATHS]} />
                    </div>
                </div>
            </section>

            {/* 2. PHILOSOPHY SECTION (Solid Background) */}
            <section className="bg-[#ffe9d4] text-[#273B3A] py-40 px-8 md:px-24 lg:px-40 min-h-[70vh] flex items-center border-t border-[#273B3A]/5 relative z-20">
                <div className="max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <h3 className="text-sm tracking-[0.3em] font-bold uppercase border-b border-[#273B3A]/10 pb-4 inline-block text-[#273B3A]">
                                Philosophy
                            </h3>
                            <p className="heading-2 text-[#273B3A]">
                                Efficiency is the only architecture that matters.
                            </p>
                        </div>
                        <div className="space-y-8 flex flex-col justify-end">
                            <p className="text-lg text-[#273B3A]/80 font-light leading-relaxed">
                                By focusing on the logic of operations, I transform complex manual processes into streamlined, autonomous systems. My work is about creating space for human creativity by removing the burden of repetitive tasks.
                            </p>
                            <Link
                                to="/home"
                                className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase group text-[#273B3A] hover:text-[#273B3A]/80 transition-colors"
                            >
                                <span>READ MORE ABOUT MY APPROACH</span>
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOOTER (Main) */}
            <Footer variant="main" theme="light" className="!bg-[#ffe9d4]" />

        </div>
    );
};

export default Intro;
