import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
    theme?: 'light' | 'dark';
}

const Sidebar = ({ theme = 'light' }: SidebarProps) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/home', label: 'Work' },
        { path: '/skills', label: 'Skills' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed right-10 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-end" aria-label="Page navigation">
            <div className="flex flex-col gap-14 items-center">
                {navLinks
                    .filter(link => link.path !== currentPath)
                    .map((link) => (
                        <div key={link.path} className="relative group flex items-center justify-center">
                            {/* Vertical Label */}
                            <Link
                                to={link.path}
                                aria-label={`Go to ${link.label}`}
                                className={`transition-all duration-300 text-xs font-black uppercase tracking-[0.4em] whitespace-nowrap ${theme === 'light' ? 'text-[#085078]/30 hover:text-[#085078]' : 'text-white/30 hover:text-white'}`}
                                style={{
                                    writingMode: 'vertical-rl',
                                    transform: 'rotate(180deg)',
                                    display: 'inline-block'
                                }}
                            >
                                {link.label}
                            </Link>

                            {/* Hover Dot / Indicator */}
                            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#9AE4CB] transition-all duration-500 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-110" />
                        </div>
                    ))}
            </div>
        </nav>
    );
};

export default Sidebar;
