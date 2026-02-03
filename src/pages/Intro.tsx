import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';

import { CODE_SYMBOL_PATHS, ROBOT_SYMBOL_PATHS } from '../constants/particlePaths';

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
        <div className="min-h-screen text-[#273B3A] selection:bg-[#273B3A]/20 antialiased overflow-x-hidden bg-[#E6D4C7]">

            {/* 1. HERO SECTION (Split Background) */}
            <section className="min-h-screen flex items-center relative overflow-hidden" style={{ background: 'linear-gradient(to right, #E6D4C7 65%, #273B3A 65%)' }}>
                {/* Left Side: Content */}
                <div className="w-full lg:w-[65%] px-8 md:px-24 lg:px-40 py-24 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                        className="max-w-4xl space-y-16"
                    >
                        {/* Headline & Subheadline */}
                        <div className="space-y-6">
                            <motion.div variants={fadeUp} className="space-y-1">
                                <h1 className="text-sm tracking-[0.3em] font-medium text-[#273B3A] uppercase">
                                    Veerendra Kumar
                                </h1>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-[#273B3A]">
                                    Automation Engineer
                                </h2>
                            </motion.div>

                            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#273B3A]/80 max-w-2xl font-light leading-relaxed">
                                I build systems that remove manual work<br />
                                and scale operations.
                            </motion.p>
                        </div>

                        {/* Action Links */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-8 items-center">
                            <Link
                                to="/home"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2"
                            >
                                <span className="relative z-10 text-[#273B3A]">[ Work ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/20 group-hover:bg-[#273B3A] transition-colors" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2"
                            >
                                <span className="relative z-10 text-[#273B3A]">[ Portfolio ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/20 group-hover:bg-[#273B3A] transition-colors" />
                            </Link>
                            <Link
                                to="/contact"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2"
                            >
                                <span className="relative z-10 text-[#273B3A]">[ Contact ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#273B3A]/20 group-hover:bg-[#273B3A] transition-colors" />
                            </Link>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div variants={fadeUp} className="pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#273B3A] rounded-full" />
                                <p className="text-xs tracking-[0.2em] text-[#273B3A]/60 uppercase font-medium">
                                    Available for automation projects
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
            <section className="bg-[#E6D4C7] text-[#273B3A] py-40 px-8 md:px-24 lg:px-40 min-h-[70vh] flex items-center border-t border-[#273B3A]/10 relative z-20">
                <div className="max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <h3 className="text-sm tracking-[0.3em] font-bold uppercase border-b border-[#273B3A]/20 pb-4 inline-block text-[#273B3A]">
                                Philosophy
                            </h3>
                            <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#273B3A]">
                                Efficiency is the only architecture that matters.
                            </p>
                        </div>
                        <div className="space-y-8 flex flex-col justify-end">
                            <p className="text-lg text-[#273B3A]/80 font-light leading-relaxed">
                                By focusing on the logic of operations, I transform complex manual processes into streamlined, autonomous systems. My work is about creating space for human creativity by removing the burden of repetitive tasks.
                            </p>
                            <Link
                                to="/home"
                                className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase group text-[#273B3A]"
                            >
                                <span>Read more about my approach</span>
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOOTER (Transparent) */}
            <footer className="bg-transparent text-[#273B3A]/60 py-24 px-8 md:px-24 lg:px-40 border-t border-[#273B3A]/10 relative z-20">
                <div className="max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-2">
                        <p className="text-[#273B3A] text-sm tracking-widest uppercase">Veerendra Kumar</p>
                        <p className="text-xs tracking-widest uppercase opacity-50">© 2024 Systemized Excellence</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#273B3A]">Navigation</p>
                        <div className="flex gap-8">
                            <Link to="/home" className="hover:text-[#273B3A] transition-colors uppercase tracking-widest text-xs">Work</Link>
                            <Link to="/portfolio" className="hover:text-[#273B3A] transition-colors uppercase tracking-widest text-xs">Portfolio</Link>
                            <Link to="/contact" className="hover:text-[#273B3A] transition-colors uppercase tracking-widest text-xs">Contact</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#273B3A] rounded-full animate-pulse" />
                            <p className="text-[10px] tracking-[0.4em] uppercase font-medium text-[#273B3A]/60">
                                System Status: Active
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Intro;
