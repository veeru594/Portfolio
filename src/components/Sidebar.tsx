import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navLinks = [
        { path: '/', label: 'Intro' },
        { path: '/home', label: 'Work' },
        { path: '/skills', label: 'Skills' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/contact', label: 'Contact' },
    ];

    // Filter out the current page from the sidebar
    const activeLinks = navLinks.filter(link => link.path !== currentPath);

    return (
        <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
            <div className="flex flex-col gap-12 items-center">
                {activeLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="text-gray-400 hover:text-[#085078] transition-all text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap"
                        style={{
                            writingMode: 'vertical-rl',
                            transform: 'rotate(180deg)',
                            display: 'inline-block'
                        }}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Sidebar;
