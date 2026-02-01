import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleCanvas from '../components/ParticleCanvas';

const CODE_SYMBOL_PATHS = [
    `<path d="M950 2423 c0 -5 -28 -43 -63 -84 -35 -41 -85 -101 -113 -135 -100 -123 -510 -622 -632 -769 -124 -149 -161 -205 -134 -205 5 0 17 9 27 20 10 11 21 17 26 14 4 -2 6 4 4 15 -2 13 6 28 22 41 14 11 22 20 18 20 -5 0 2 9 15 20 13 11 20 20 16 20 -5 0 9 17 30 38 20 20 48 54 62 75 13 20 29 37 34 37 5 0 6 5 3 10 -4 6 -3 9 2 8 4 -2 8 0 8 4 0 4 14 17 30 30 17 13 30 30 30 38 0 8 6 14 12 13 7 -2 12 0 11 5 -3 11 20 49 47 76 14 14 25 30 25 37 0 6 7 8 16 5 8 -3 12 -2 9 4 -3 6 -1 10 4 10 6 0 11 5 11 11 0 6 6 16 13 23 38 40 92 110 90 117 -2 5 4 6 12 3 11 -5 13 -2 8 12 -4 12 -3 15 5 10 7 -4 12 -1 12 8 0 8 9 20 21 26 11 7 18 14 16 17 -3 3 7 19 22 36 16 18 51 58 80 90 28 31 51 61 51 65 0 4 16 25 35 47 19 22 40 47 47 55 7 8 12 19 10 24 -2 4 4 6 12 3 9 -4 15 -3 13 1 -1 4 6 18 16 32 18 24 19 24 30 6 7 -10 23 -32 35 -47 13 -16 25 -35 26 -42 1 -7 12 -29 24 -48 12 -20 22 -39 22 -42 0 -3 11 -18 25 -33 14 -15 25 -32 25 -37 0 -6 8 -19 18 -30 12 -15 13 -18 2 -12 -10 6 -9 2 3 -12 23 -26 13 -48 -37 -90 -19 -15 -39 -40 -45 -56 -6 -15 -15 -27 -21 -27 -5 0 -10 -6 -10 -13 0 -7 -10 -23 -22 -34 -40 -36 -108 -113 -108 -121 0 -5 -12 -23 -27 -39 -16 -17 -44 -50 -63 -73 -19 -23 -41 -48 -47 -56 -7 -7 -13 -16 -13 -19 0 -4 -11 -16 -25 -27 -14 -11 -25 -27 -25 -35 0 -9 -3 -13 -7 -10 -6 7 -27 -23 -39 -55 -6 -18 -16 -22 -41 -19 -7 1 -13 -3 -13 -9 0 -6 5 -8 10 -5 23 14 7 -13 -35 -60 -24 -27 -53 -60 -63 -71 -10 -12 -18 -28 -16 -36 3 -20 34 -68 44 -68 4 0 10 -9 13 -21 3 -12 10 -18 16 -15 5 4 11 -4 13 -16 2 -13 9 -22 16 -21 6 2 12 -4 12 -12 0 -8 4 -15 8 -15 12 0 42 -56 35 -64 -4 -4 -1 -4 8 -1 10 4 26 -9 47 -39 44 -60 71 -93 110 -133 19 -19 30 -38 26 -44 -5 -8 -3 -9 6 -4 10 6 12 4 7 -8 -3 -9 0 -18 9 -21 10 -4 13 -1 -9 7 -4 6 0 3 9 -8 8 -11 23 -29 33 -39 12 -13 13 -16 3 -11 -15 8 31 -48 59 -72 12 -11 12 -15 0 -30 -13 -16 -12 -17 3 -5 18 15 41 7 35 -11 -2 -6 9 -23 25 -37 15 -15 28 -31 28 -36 0 -5 8 -17 18 -25 45 -41 93 -113 61 -93 -8 5 -10 2 -6 -8 3 -9 -5 -30 -19 -49 -13 -18 -24 -39 -24 -47 0 -7 -5 -10 -12 -6 -8 5 -9 2 -5 -9 3 -10 2 -17 -3 -17 -6 0 -20 -20 -32 -45 -12 -25 -26 -45 -31 -45 -4 0 -5 -5 -1 -12 5 -7 2 -9 -8 -5 -9 3 -15 0 -15 -6 1 -22 -27 -76 -42 -82 -9 -3 -13 -3 -9 0 3 3 -4 17 -16 31 -11 13 -34 40 -51 60 -16 20 -46 52 -65 72 -19 20 -28 32 -20 28 9 -4 8 -1 -2 7 -10 8 -18 18 -18 23 0 5 -16 24 -35 43 -19 18 -33 37 -30 41 3 5 0 12 -6 16 -8 5 -10 3 -4 -7 4 -8 -11 6 -33 31 -23 25 -40 51 -37 57 2 7 -1 12 -8 10 -7 -1 -11 5 -9 13 2 8 1 12 -3 8 -9 -9 -62 52 -67 77 -2 11 -11 19 -21 19 -9 -1 -19 7 -23 18 -6 21 -21 40 -86 112 -21 22 -38 49 -38 59 0 9 -4 16 -8 15 -9 -3 -54 43 -92 93 -14 18 -37 47 -52 64 -15 16 -49 57 -76 90 -26 33 -64 78 -84 99 -20 22 -34 44 -31 50 3 5 1 6 -5 2 -5 -3 -13 0 -15 6 -4 9 -6 8 -6 -2 -1 -24 16 -47 180 -246 184 -221 560 -679 673 -818 44 -54 86 -96 96 -96 24 0 35 14 147 201 l101 165 -82 100 c-44 55 -157 194 -251 309 -93 114 -209 257 -258 317 l-87 108 59 73 c53 63 456 557 577 705 l43 53 -26 42 c-15 23 -69 112 -120 197 -101 165 -103 169 -103 153z"/>`,
    `<path d="M2895 2228 c-97 -160 -115 -195 -106 -210 6 -10 111 -140 233 -290 122 -150 269 -330 326 -401 l103 -127 -18 -24 c-26 -34 -238 -295 -325 -401 -168 -204 -328 -405 -328 -410 0 -3 32 -58 71 -123 39 -64 80 -133 91 -152 37 -64 59 -90 78 -90 18 0 47 33 398 460 508 619 592 723 592 739 0 10 -102 141 -226 292 -124 151 -274 333 -333 405 -354 435 -427 523 -433 523 -3 1 -59 -86 -123 -191z m140 124 c6 -4 30 -32 55 -62 25 -30 52 -62 60 -70 9 -8 23 -26 31 -40 9 -14 37 -50 62 -79 26 -30 44 -59 40 -64 -3 -6 -2 -7 4 -4 11 7 47 -28 57 -56 3 -11 15 -21 26 -24 11 -3 20 -9 20 -14 0 -20 2 -24 16 -32 8 -4 21 -22 30 -40 10 -18 34 -49 56 -70 21 -21 36 -42 33 -48 -4 -5 -3 -9 2 -8 18 3 36 -1 30 -7 -3 -4 2 -14 11 -23 10 -9 12 -12 5 -7 -10 6 -12 4 -7 -8 3 -9 12 -16 20 -16 8 0 14 -5 14 -10 0 -6 15 -26 33 -44 51 -52 88 -96 80 -96 -4 0 11 -18 34 -39 22 -22 38 -42 36 -45 -3 -3 12 -23 33 -45 58 -58 89 -93 89 -100 0 -8 20 -32 58 -72 l28 -29 -25 -27 c-14 -15 -23 -30 -20 -35 3 -4 0 -8 -7 -8 -15 0 -59 -39 -59 -52 0 -17 -52 -77 -63 -75 -7 1 -11 -4 -9 -12 1 -7 -7 -22 -19 -32 -12 -10 -18 -19 -13 -19 5 0 -3 -8 -19 -18 -15 -10 -24 -21 -21 -25 4 -4 -7 -19 -23 -34 -43 -40 -84 -98 -75 -108 4 -5 2 -5 -4 -2 -11 7 -91 -85 -131 -152 -12 -20 -24 -34 -27 -31 -6 7 -46 -45 -46 -60 0 -6 -4 -9 -9 -5 -12 7 -42 -35 -34 -48 3 -6 2 -7 -4 -4 -5 3 -17 -7 -27 -24 -10 -16 -22 -26 -28 -23 -7 4 -8 2 -4 -4 3 -6 -8 -26 -26 -45 -43 -44 -69 -77 -62 -77 4 0 -15 -20 -41 -45 -26 -25 -45 -48 -42 -52 3 -3 -6 -16 -20 -29 -14 -13 -22 -24 -18 -24 4 0 -4 -9 -19 -21 -14 -11 -23 -25 -20 -31 4 -6 2 -8 -3 -5 -6 4 -20 -7 -31 -24 l-19 -31 -50 79 c-27 43 -60 96 -74 118 -13 22 -30 49 -36 60 -7 11 -16 28 -19 38 -3 9 -10 17 -14 17 -19 0 -19 34 0 50 11 9 17 20 13 24 -3 3 -1 6 5 6 7 0 12 6 12 14 0 8 15 26 34 41 22 18 32 33 29 43 -4 10 -2 13 5 8 7 -4 12 -1 12 9 0 8 7 18 15 21 8 4 15 13 15 22 0 8 3 13 6 9 7 -6 54 33 54 45 0 5 12 26 26 46 22 31 25 33 20 12 -5 -23 -4 -23 6 3 7 15 15 27 20 27 4 0 5 7 1 16 -4 10 1 17 15 21 12 3 24 14 27 24 4 10 21 34 38 52 45 47 82 99 79 109 -1 5 1 7 6 4 5 -3 14 6 21 20 6 14 15 23 20 20 5 -3 25 19 45 50 20 30 45 62 56 71 10 9 17 20 14 25 -3 4 -1 8 5 8 11 0 51 62 51 80 0 6 -16 27 -35 46 -20 19 -32 34 -28 34 4 0 -10 16 -30 35 -20 19 -37 39 -37 44 0 6 -6 14 -13 18 -8 4 -25 25 -39 45 -13 21 -28 35 -33 30 -5 -4 -5 -2 -1 5 4 7 -9 27 -29 47 -19 19 -35 40 -35 46 0 6 -5 8 -12 4 -7 -4 -8 -3 -4 4 8 13 -29 54 -39 44 -4 -4 -5 -2 -3 3 3 10 -39 66 -101 133 -18 20 -45 54 -59 75 -13 20 -28 37 -31 37 -8 0 -71 87 -71 98 0 5 -15 21 -34 36 -38 30 -39 39 -10 81 11 17 29 47 39 68 11 22 31 50 45 65 14 14 18 22 10 17 -12 -7 -13 -6 -4 6 6 8 27 40 47 72 37 57 44 63 62 49z m439 -518 c3 -8 2 -12 -4 -9 -6 3 -10 10 -10 16 0 14 7 11 14 -7z m-463 -1227 c-10 -9 -11 -8 -5 6 3 10 9 15 12 12 3 -3 0 -11 -7 -18z"/>`,
    `<path d="M3226 2082 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4 -9 -8z"/>`,
    `<path d="M3293 2005 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>`,
    `<path d="M2315 2402 l-221 -2 -10 -38 c-28 -99 -169 -580 -200 -682 -19 -63 -52 -176 -73 -250 -21 -74 -62 -214 -91 -310 -29 -96 -56 -188 -60 -205 -4 -16 -29 -102 -55 -190 -25 -88 -71 -243 -101 -345 -29 -102 -67 -228 -82 -280 l-28 -95 223 0 c123 0 223 1 223 2 0 1 27 93 60 205 33 112 74 250 91 308 17 58 43 148 59 200 15 52 42 145 60 205 17 61 45 155 62 210 17 55 34 114 38 130 4 17 29 102 55 190 26 88 53 183 61 210 8 28 32 111 54 185 83 278 161 552 158 553 -2 1 -102 1 -223 -1z m180 -50 c-4 -9 -9 -27 -10 -40 -2 -12 -16 -61 -31 -110 -16 -48 -29 -91 -30 -97 -1 -5 -3 -14 -4 -20 -1 -5 -2 -13 -1 -17 0 -5 -4 -8 -10 -8 -5 0 -8 -4 -4 -9 3 -5 -4 -33 -14 -63 -11 -29 -22 -70 -25 -91 -4 -21 -11 -48 -18 -60 -6 -12 -13 -29 -14 -37 -1 -8 -12 -46 -24 -85 -12 -38 -25 -86 -30 -105 -4 -19 -12 -47 -18 -61 -6 -14 -22 -72 -37 -130 -15 -57 -35 -126 -45 -154 -23 -65 -53 -172 -53 -190 0 -8 -4 -12 -9 -9 -4 3 -8 -3 -9 -13 -1 -33 -9 -67 -29 -125 -11 -31 -22 -71 -25 -90 -11 -65 -28 -109 -36 -96 -5 7 -7 0 -5 -17 2 -17 -3 -45 -10 -64 -8 -18 -14 -41 -14 -50 0 -9 -9 -34 -20 -55 -10 -22 -17 -42 -15 -47 3 -4 -4 -29 -15 -55 -11 -26 -19 -52 -17 -58 2 -6 -5 -33 -15 -61 -10 -27 -21 -66 -24 -85 -3 -19 -14 -57 -24 -85 -10 -27 -24 -69 -30 -92 l-11 -42 -193 -3 -193 -3 14 50 c8 28 16 58 17 67 1 10 5 21 9 24 4 4 7 15 7 25 0 15 27 109 71 246 5 18 12 41 14 52 2 11 8 28 14 39 6 11 8 22 4 25 -3 4 -1 13 6 21 6 8 11 18 10 22 -1 5 1 16 4 24 13 32 51 165 49 172 -1 5 3 8 9 8 5 0 8 4 4 9 -3 5 5 43 18 83 71 218 74 230 80 283 1 11 4 22 7 25 5 5 36 99 45 138 3 9 14 49 26 87 11 39 23 84 26 100 3 17 12 39 19 50 16 23 19 47 3 25 -9 -12 -10 -12 -5 3 3 10 6 23 6 28 0 6 5 7 12 3 8 -5 9 -2 5 9 -3 9 -2 19 2 22 5 2 12 25 15 50 4 25 11 45 17 45 5 0 8 10 7 23 0 12 9 51 22 87 12 36 23 72 24 80 2 8 5 22 8 30 8 18 49 159 53 180 2 8 8 29 15 45 6 17 10 30 9 30 -6 0 25 101 37 120 12 19 22 20 199 17 172 -3 186 -4 180 -20z"/>`,
    `<path d="M2906 2347 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>`,
    `<path d="M2806 2177 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>`,
    `<path d="M3250 2186 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z"/>`,
    `<path d="M1130 2015 c-7 -9 -8 -15 -2 -15 5 0 12 7 16 15 3 8 4 15 2 15 -2 0 -9 -7 -16 -15z"/>`,
    `<path d="M3573 1805 c0 -8 4 -12 9 -9 5 3 6 10 3 15 -9 13 -12 11 -12 -6z"/>`,
    `<path d="M995 1739 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 -20 -8 4z"/>`,
    `<path d="M820 1520 c-6 -11 -8 -20 -6 -20 3 0 10 9 16 20 6 11 8 20 6 20 -3 0 -10 -9 -16 -20z"/>`,
    `<path d="M690 1366 c0 -2 8 -10 18 -17 15 -13 16 -12 3 4 -13 16 -21 21 -21 13z"/>`,
    `<path d="M605 1181 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>`,
    `<path d="M3050 839 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>`,
    `<path d="M916 772 c-3 -5 1 -9 9 -9 8 0 12 4 9 9 -3 4 -7 8 -9 8 -2 0 -6 -4 -9 -8z"/>`,
    `<path d="M1010 661 c0 -6 4 -13 10 -16 6 -3 7 1 4 9 -7 18 -14 21 -14 7z"/>`
];

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
        <div className="min-h-screen text-[#0b0c10] selection:bg-[#ff8c1a]/20 antialiased overflow-x-hidden" style={{ background: 'linear-gradient(to right, #f5f5f5 65%, #9AE4CB 65%)' }}>

            {/* 1. HERO SECTION (Split Background) */}
            <section className="min-h-screen flex items-center relative overflow-hidden">
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
                                <h1 className="text-sm tracking-[0.3em] font-medium text-[#ff8c1a] uppercase">
                                    Veerendra Kumar
                                </h1>
                                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] text-[#0b0c10]">
                                    Automation Engineer
                                </h2>
                            </motion.div>

                            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-[#5a5a5a] max-w-2xl font-light leading-relaxed">
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
                                <span className="relative z-10 text-[#0b0c10]">[ Work ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0b0c10]/10 group-hover:bg-[#ff8c1a] transition-colors" />
                            </Link>
                            <Link
                                to="/portfolio"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2"
                            >
                                <span className="relative z-10 text-[#0b0c10]">[ Portfolio ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0b0c10]/10 group-hover:bg-[#ff8c1a] transition-colors" />
                            </Link>
                            <Link
                                to="/contact"
                                className="group relative overflow-hidden text-lg tracking-widest uppercase py-2"
                            >
                                <span className="relative z-10 text-[#0b0c10]">[ Contact ]</span>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0b0c10]/10 group-hover:bg-[#ff8c1a] transition-colors" />
                            </Link>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div variants={fadeUp} className="pt-8">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 bg-[#ff8c1a] rounded-full" />
                                <p className="text-xs tracking-[0.2em] text-[#9a9a9a] uppercase font-medium">
                                    Available for automation projects
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Right Side: Interactive Particle Canvas */}
                <div className="hidden lg:flex w-[35%] h-full absolute right-0 top-0 items-center justify-center pointer-events-auto">
                    <div className="w-full h-full p-12">
                        <ParticleCanvas svgPaths={CODE_SYMBOL_PATHS} />
                    </div>
                </div>
            </section>

            {/* 2. PHILOSOPHY SECTION (Seamless Light Background) */}
            <section className="bg-[#f5f5f5] text-[#0b0c10] py-40 px-8 md:px-24 lg:px-40 min-h-[70vh] flex items-center border-t border-[#0b0c10]/5 relative z-20">
                <div className="max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-12">
                            <h3 className="text-sm tracking-[0.3em] font-bold uppercase border-b border-[#0b0c10]/10 pb-4 inline-block text-[#0b0c10]">
                                Philosophy
                            </h3>
                            <p className="text-3xl md:text-4xl font-light leading-tight tracking-tight text-[#0b0c10]">
                                Efficiency is the only architecture that matters.
                            </p>
                        </div>
                        <div className="space-y-8 flex flex-col justify-end">
                            <p className="text-lg text-[#5a5a5a] font-light leading-relaxed">
                                By focusing on the logic of operations, I transform complex manual processes into streamlined, autonomous systems. My work is about creating space for human creativity by removing the burden of repetitive tasks.
                            </p>
                            <Link
                                to="/home"
                                className="inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase group text-[#0b0c10]"
                            >
                                <span>Read more about my approach</span>
                                <span className="group-hover:translate-x-2 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FOOTER (Light Backdrop) */}
            <footer className="bg-[#f5f5f5] text-[#9a9a9a] py-24 px-8 md:px-24 lg:px-40 border-t border-[#0b0c10]/5 relative z-20">
                <div className="max-w-4xl flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-2">
                        <p className="text-[#0b0c10] text-sm tracking-widest uppercase">Veerendra Kumar</p>
                        <p className="text-xs tracking-widest uppercase opacity-50">© 2024 Systemized Excellence</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-xs tracking-[0.3em] uppercase mb-4 text-[#0b0c10]">Navigation</p>
                        <div className="flex gap-8">
                            <Link to="/home" className="hover:text-[#0b0c10] transition-colors uppercase tracking-widest text-xs">Work</Link>
                            <Link to="/portfolio" className="hover:text-[#0b0c10] transition-colors uppercase tracking-widest text-xs">Portfolio</Link>
                            <Link to="/contact" className="hover:text-[#0b0c10] transition-colors uppercase tracking-widest text-xs">Contact</Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#ff8c1a] rounded-full animate-pulse" />
                            <p className="text-[10px] tracking-[0.4em] uppercase font-medium text-[#0b0c10]/60">
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
