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
        <div className="min-h-screen text-[#cbd5e1] selection:bg-[#06b6d4]/20 antialiased overflow-x-hidden bg-[#1e293b]">

            {/* 1. HERO SECTION (Split Background) */}
            <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #1e293b 65%, #0f172a 65%)' }}>
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
                                <h1 className="text-sm tracking-[0.3em] font-medium text-[#e2e8f0] uppercase">
                                    Veerendra Kumar
                                </h1>
                                <h2 className="text-[7vw] md:text-[2.8vw] lg:text-[2.6vw] font-bold tracking-tight leading-tight text-[#ffffff] whitespace-nowrap">
                                    AI SYSTEMS & AUTOMATION ENGINEER
                                </h2>
                            </motion.div>

                            <motion.p variants={fadeUp} className="body-large text-[#cbd5e1]/80 max-w-2xl">
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
                                <span className="relative z-10 text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors">[ Work ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#94a3b8]/20 group-hover:bg-[#06b6d4] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all" />
                            </Link>
                            <Link
                                to="/portfolio"
                                aria-label="View my portfolio"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors">[ Portfolio ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#94a3b8]/20 group-hover:bg-[#06b6d4] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all" />
                            </Link>
                            <Link
                                to="/skills"
                                aria-label="View my skills"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors">[ Skills ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#94a3b8]/20 group-hover:bg-[#06b6d4] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all" />
                            </Link>
                            <Link
                                to="/contact"
                                aria-label="Contact me"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2 px-1 transition-all duration-300"
                            >
                                <span className="relative z-10 text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors">[ Contact ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#94a3b8]/20 group-hover:bg-[#06b6d4] group-hover:shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all" />
                            </Link>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div variants={fadeUp} className="pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                                <p className="text-xs tracking-[0.2em] text-[#06b6d4]/80 uppercase font-medium">
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
            <section className="bg-[#1e293b] text-[#cbd5e1] py-40 px-8 md:px-24 lg:px-40 min-h-[70vh] flex items-center border-t border-white/5 relative z-20">
                <div className="max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <h3 className="text-sm tracking-[0.3em] font-bold uppercase border-b border-white/10 pb-4 inline-block text-white">
                                Philosophy
                            </h3>
                            <p className="heading-2 text-white">
                                Efficiency is the only architecture that matters.
                            </p>
                        </div>
                        <div className="space-y-8 flex flex-col justify-end">
                            <p className="text-lg text-[#cbd5e1]/80 font-light leading-relaxed">
                                By focusing on the logic of operations, I transform complex manual processes into streamlined, autonomous systems. My work is about creating space for human creativity by removing the burden of repetitive tasks.
                            </p>
                            <Link
                                to="/home"
                                className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase group text-[#06b6d4] hover:text-[#06b6d4]/80 transition-colors"
                            >
                                <span>READ MORE ABOUT MY APPROACH</span>
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOOTER (Transparent) */}
            {/* 3. FOOTER (Main) */}
            <Footer variant="main" theme="dark" className="!bg-[#1e293b]" />

        </div>
    );
};

export default Intro;
