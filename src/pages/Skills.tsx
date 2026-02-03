import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Zap, Brain, Cpu, Terminal,
    Workflow, Database, Code2,
    Activity, Binary, Boxes,
    Layers, Settings, Lightbulb,
    ShieldCheck, RefreshCw, ArrowRight
} from 'lucide-react';
import Sidebar from '../components/Sidebar';

const Skills = () => {
    const architecturalStacks = [
        {
            id: "AI_ORCHESTRATION",
            title: "AI & Automation Orchestration",
            description: "Designing the logic tier where intelligence meets execution.",
            skills: [
                "Prompt Engineering (System/Tool/Decomp)",
                "Retrieval-Augmented Generation (RAG)",
                "LangChain & ChromaDB Systems",
                "n8n Workflow Automation",
                "Autonomous Agentic Workflows"
            ],
            icon: <Brain className="w-5 h-5 text-[#9AE4CB]" />,
            tags: ["GPT-4o", "Claude 3.5", "AutoGen"]
        },
        {
            id: "TECHNICAL_FOUNDATION",
            title: "Full-Stack & Data Architecture",
            description: "Reliable engineering for the modern intelligence stack.",
            skills: [
                "React & Tailwind CSS",
                "Django & FastAPI Systems",
                "Machine Learning (MLOps)",
                "Deep Learning Architectures",
                "Pandas & Data Visualization"
            ],
            icon: <Layers className="w-5 h-5 text-[#aae4ff]" />,
            tags: ["Next.js", "Python", "SQL", "PyTorch"]
        },
        {
            id: "SYSTEMS_OPERATIONS",
            title: "Development & Intelligence Ops",
            description: "Optimized pipelines for rapid, reliable delivery.",
            skills: [
                "AI-Native Development (Cursor/Claude)",
                "Git & GitHub Version Control",
                "Firebase & Cloud Infrastructure",
                "Unix Systems & VS Code Ops",
                "Low-Level Reliability (C Lang)"
            ],
            icon: <Settings className="w-5 h-5 text-[#ff8c1a]" />,
            tags: ["CI/CD", "Git", "DevOps", "AI Dev"]
        }
    ];

    const philosophy = [
        {
            title: "Complexity Reduction",
            description: "The goal isn't to build a complex system, but to simplify a complex process. I strip away the manual friction until only the value remains.",
            icon: <ShieldCheck className="w-6 h-6 text-[#9AE4CB]" />
        },
        {
            title: "Efficiency by Design",
            description: "Every line of code and every automation node is built with one focus: speed-to-action. If it doesn't make things faster, it doesn't belong.",
            icon: <RefreshCw className="w-6 h-6 text-[#aae4ff]" />
        },
        {
            title: "Making Things Easy",
            description: "Systems should be invisible. I design workflows that work for you, not the other way around. Intelligence should feel like magic, but run like a clock.",
            icon: <Lightbulb className="w-6 h-6 text-[#ff8c1a]" />
        }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden text-[#d1d5db] font-sans" style={{ background: 'linear-gradient(to right, #1d2433 65%, #242d3d 65%)' }}>
            <Sidebar />

            {/* Structural Elements (Background) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white"></div>
                <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white"></div>
                <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white"></div>
                <div className="text-[12vw] font-black absolute top-10 left-10 select-none">CODE</div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-24 py-32">
                {/* Editorial Header */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <div className="flex items-center gap-4 text-xs font-mono tracking-[0.5em] text-[#9AE4CB] uppercase">
                            <div className="w-12 h-[1px] bg-[#9AE4CB]"></div>
                            <span>System.Capabilities_v4.0</span>
                        </div>
                        <h1 className="heading-1 text-white">
                            BEYOND<br />THE STACK
                        </h1>
                        <p className="max-w-xl text-lg text-gray-400 font-light leading-relaxed pt-8 border-l border-gray-800 pl-8 ml-2">
                            Replacing manual friction with intelligent orchestration. My approach is centered on
                            making complex systems feel effortless through elite engineering.
                        </p>
                    </motion.div>
                </section>

                {/* Unified Architectural Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-44">
                    {architecturalStacks.map((stack, idx) => (
                        <motion.div
                            key={stack.id}
                            className="group relative"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                        >
                            <div className="bg-[#242d3d]/40 backdrop-blur-sm p-10 h-full rounded-2xl border border-gray-800 hover:border-[#9AE4CB]/30 transition-all duration-500 flex flex-col">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="p-4 bg-[#1d2433] rounded-xl border border-gray-700/50 text-[#9AE4CB]">
                                        {stack.icon}
                                    </div>
                                    <div className="text-[10px] font-mono text-gray-600 tracking-widest uppercase">
                                        ID_{stack.id}
                                    </div>
                                </div>

                                <h3 className="heading-3 text-white mb-4 group-hover:text-[#9AE4CB] transition-colors">
                                    {stack.title}
                                </h3>
                                <p className="text-sm text-gray-500 mb-8 leading-relaxed italic">
                                    "{stack.description}"
                                </p>

                                <ul className="space-y-4 mb-10 flex-grow">
                                    {stack.skills.map((skill) => (
                                        <li key={skill} className="flex items-start gap-3 group/item">
                                            <Zap className="w-3 h-3 mt-1 text-[#9AE4CB] opacity-30 group-hover/item:opacity-100 transition-opacity" />
                                            <span className="text-sm text-gray-400 group-hover/item:text-gray-200 transition-colors uppercase tracking-wide">
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 pt-8 border-t border-gray-800/50">
                                    {stack.tags.map(tag => (
                                        <span key={tag} className="text-[9px] font-mono px-3 py-1 bg-[#1d2433] text-gray-500 rounded border border-gray-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Stencil Effect */}
                            <div className="absolute -bottom-4 -right-4 text-white/5 text-4xl font-black select-none pointer-events-none group-hover:text-white/10 transition-colors">
                                {idx + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Working Philosophy Layer */}
                <section className="mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-16 flex flex-col items-center text-center"
                    >
                        <h2 className="text-xs font-mono tracking-[0.6em] text-[#9AE4CB] uppercase mb-4">
              // Working_Philosophy
                        </h2>
                        <h3 className="heading-2 text-white uppercase italic">
                            Complexity ends here.
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {philosophy.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-4">
                                    {item.icon}
                                    <h4 className="text-xl font-bold text-white tracking-wide uppercase">{item.title}</h4>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Final CTA Layer */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-6">
                        <h2 className="text-xs font-mono tracking-[0.6em] text-gray-600 uppercase">
              // contact_initiation
                        </h2>
                        <p className="text-2xl text-white font-light leading-snug">
                            Every system I build is designed
                            to <span className="text-[#9AE4CB] font-bold italic">reduce friction</span> and
                            maximize <span className="text-[#aae4ff] font-bold italic">autonomous</span> decision-making.
                        </p>
                    </div>

                    <Link to="/contact">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8 }}
                            className="bg-[#9AE4CB] p-12 rounded-3xl text-[#1d2433] space-y-8 relative overflow-hidden group cursor-pointer shadow-[0_20px_40px_-15px_rgba(154,228,203,0.3)]"
                        >
                            <Activity className="w-12 h-12 mb-4 absolute -top-4 -right-4 text-[#1d2433] opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                            <div className="relative z-10">
                                <h3 className="heading-3 mb-4 leading-tight uppercase">
                                    Ready to make<br />things easy?
                                </h3>
                                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest border-b-2 border-[#1d2433] w-fit pb-1 group-hover:gap-6 transition-all">
                                    Start System Integration <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </section>

                {/* Footer Coordinate */}
                <div className="mt-40 pt-8 border-t border-gray-800/30 flex justify-between items-center text-[10px] font-mono text-gray-700 tracking-tighter">
                    <div>LOC_LAT: 17.3850° N / LOC_LONG: 78.4867° E</div>
                    <div>PHILOSOPHY_STABLE: TRUE</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
