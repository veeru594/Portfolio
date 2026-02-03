import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const FloatingName = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Show only when close to the top (e.g., within 50px)
            setIsVisible(window.scrollY <= 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
                    className="fixed top-8 left-8 z-50 mix-blend-difference"
                >
                    <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                        Veerendra Kumar
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FloatingName;
