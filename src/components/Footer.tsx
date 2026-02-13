import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';

interface FooterProps {
    variant?: 'minimal' | 'main';
    theme?: 'light' | 'dark';
    className?: string;
}

const Footer = ({ variant = 'main', theme = 'dark', className = '' }: FooterProps) => {
    const isDark = theme === 'dark';
    const subTextColor = isDark ? 'text-white/60' : 'text-[#085078]/70';
    const borderColor = isDark ? 'border-white/10' : 'border-[#085078]/10';
    const accentColor = isDark ? 'text-[#9AE4CB]' : 'text-[#085078]';
    const watermarkColor = isDark ? 'text-white/[0.05]' : 'text-[#085078]/[0.05]';
    const bgColor = isDark ? 'bg-transparent' : 'bg-gray-50/50';

    if (variant === 'minimal') {
        const minimalSubTextColor = isDark ? 'text-white/40' : 'text-[#273B3A]/50';
        const minimalAccentColor = isDark ? 'text-white' : 'text-[#273B3A]';

        return (
            <footer className={`py-14 px-8 md:px-24 lg:px-40 ${borderColor} border-t relative z-20`} aria-label="Site footer">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 font-sans">
                    {/* Left: Identity */}
                    <div className="space-y-1">
                        <p className={`${minimalAccentColor} text-[13px] font-bold tracking-[0.2em] uppercase`}>Veerendra Kumar</p>
                        <p className={`${minimalSubTextColor} text-[11px] tracking-widest uppercase`}>© 2026 Systemized Excellence</p>
                    </div>

                    {/* Center: Navigation */}
                    <div className="flex flex-col gap-3">
                        <p className={`${minimalSubTextColor} text-[11px] tracking-[0.4em] uppercase font-bold text-center md:text-left`}>Navigation</p>
                        <nav className="flex gap-8 justify-center md:justify-start" aria-label="Footer navigation">
                            <Link to="/" className={`${minimalAccentColor} hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px] font-bold`}>Home</Link>
                            <Link to="/home" className={`${minimalAccentColor} hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px] font-bold`}>Work</Link>
                            <Link to="/portfolio" className={`${minimalAccentColor} hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px] font-bold`}>Portfolio</Link>
                            <Link to="/skills" className={`${minimalAccentColor} hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px] font-bold`}>Skills</Link>
                            <Link to="/contact" className={`${minimalAccentColor} hover:opacity-60 transition-opacity uppercase tracking-widest text-[11px] font-bold`}>Contact</Link>
                        </nav>
                    </div>

                    {/* Right: Status */}
                    <div className="flex items-center gap-3 md:justify-end">
                        <div className={`w-1.5 h-1.5 ${isDark ? 'bg-white' : 'bg-[#273B3A]'} rounded-full animate-pulse`} />
                        <p className={`${minimalSubTextColor} text-[11px] tracking-[0.4em] uppercase font-bold`}>
                            System Status: Active
                        </p>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className={`py-14 relative overflow-hidden font-sans border-t ${borderColor} ${bgColor} ${className}`} aria-label="Site footer">
            {/* Background Watermark */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold ${watermarkColor} select-none pointer-events-none leading-none z-0`}>
                2026
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">

                    {/* Column 1: Profile */}
                    <div className="md:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 ${isDark ? 'bg-white/10' : 'bg-[#085078]/10'} rounded-lg flex items-center justify-center text-xl font-bold ${accentColor}`}>
                                V
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-[#085078]'}`}>Veerendra Kumar</h3>
                                <p className={`${accentColor} text-[10px] uppercase tracking-widest font-black opacity-80`}>Automation Engineer</p>
                            </div>
                        </div>

                        <p className={`${subTextColor} text-sm leading-relaxed max-w-xs font-medium`}>
                            Crafting digital excellence through innovative automation solutions and clean code.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <div className={`flex items-center gap-2 text-[11px] ${subTextColor} font-bold`}>
                                <MapPin className="w-4 h-4 opacity-70" />
                                <span>India</span>
                            </div>
                            <a href="mailto:veerandrak49@gmail.com" className={`flex items-center gap-2 text-[11px] ${subTextColor} hover:text-white transition-colors group font-bold`}>
                                <Mail className="w-4 h-4 opacity-70 group-hover:scale-110 transition-transform" />
                                <span>veerandrak49@gmail.com</span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="md:col-span-3 md:col-start-6 space-y-5">
                        <h4 className={`text-sm font-black uppercase tracking-[0.1em] ${accentColor} border-b ${borderColor} pb-2 inline-block`}>
                            Navigation
                        </h4>
                        <nav className="flex flex-col gap-2.5" aria-label="Footer navigation">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'Work', path: '/home' },
                                { name: 'Portfolio', path: '/portfolio' },
                                { name: 'Skills', path: '/skills' },
                                { name: 'Contact', path: '/contact' }
                            ].map(link => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`${subTextColor} ${isDark ? 'hover:text-white' : 'hover:text-[#085078]'} transition-colors flex items-center justify-between group text-sm font-bold border-b border-transparent hover:border-current pb-0.5`}
                                >
                                    <span>{link.name}</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Connect */}
                    <div className="md:col-span-3 md:col-start-10 space-y-5">
                        <h4 className={`text-sm font-black uppercase tracking-[0.1em] ${accentColor} border-b ${borderColor} pb-2 inline-block`}>
                            Connect
                        </h4>
                        <div className="flex flex-col gap-2.5">
                            {[
                                { name: 'GitHub', url: 'https://github.com/veeru594', icon: Github },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/veerendra-kumar-7615b2347/', icon: Linkedin },
                                { name: 'Email', url: 'mailto:veerandrak49@gmail.com', icon: Mail }
                            ].map(social => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit ${social.name} profile`}
                                    className={`${subTextColor} ${isDark ? 'hover:text-white' : 'hover:text-[#085078]'} transition-colors flex items-center justify-between group text-sm font-bold border-b border-transparent hover:border-current pb-0.5`}
                                >
                                    <span className="flex items-center gap-2.5">
                                        <social.icon className="w-4 h-4 opacity-70 group-hover:scale-110 transition-transform" />
                                        {social.name}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={`pt-4 border-t ${borderColor} flex flex-col md:flex-row justify-between items-center gap-2 text-[10px] ${subTextColor} font-black uppercase tracking-[0.2em]`}>
                    <p>© 2026 Veerendra Kumar • All rights reserved</p>
                    <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'hover:text-white' : 'hover:text-[#085078]'} transition-colors`}>Sitemap</a>
                </div>

                <div className="text-center mt-6">
                    <p className={`text-[10px] font-black uppercase tracking-[1em] ${subTextColor} opacity-20`}>Crafting Digital Excellence</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
