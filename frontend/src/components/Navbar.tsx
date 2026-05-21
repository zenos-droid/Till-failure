import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Flame, ShieldAlert } from 'lucide-react';

const NAV_ITEMS = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/membership', label: 'MEMBERSHIP' },
  { path: '/trainers', label: 'TRAINERS' },
  { path: '/transformations', label: 'TRANSFORMATIONS' },
  { path: '/bmi', label: 'BMI CALCULATOR' },
  { path: '/schedule', label: 'SCHEDULE' },
  { path: '/contact', label: 'CONTACT' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Watch scroll dynamics
  useEffect(() => {
    const handleScroll = () => {
      // solidifies background on scroll
      setIsScrolled(window.scrollY > 30);

      // calc page progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Global Scroll Progress Bar */}
      <div 
        id="scroll-bar"
        className="fixed top-0 left-0 right-0 h-[3px] bg-red-650 z-50 transition-all duration-75 origin-left"
        style={{ 
          transform: `scaleX(${scrollProgress / 100})`,
          background: 'linear-gradient(90deg, #dc2626 0%, #ef4444 50%, #f87171 100%)',
          boxShadow: '0 0 8px rgba(220, 38, 38, 0.8)'
        }}
      />

      <nav
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-black/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/80' 
            : 'py-5 bg-gradient-to-b from-black/90 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Hardcore Gym Branding Logo */}
            <Link 
              id="nav-logo" 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="w-9 h-9 bg-red-650 flex items-center justify-center rotate-45 shadow-lg shadow-red-600/20 group-hover:bg-red-700 transition-colors"
              >
                <div className="-rotate-45 font-black text-white italic text-sm tracking-tighter">TF</div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-white uppercase italic leading-none font-display">
                  TILL <span className="text-red-650 font-black">FAILURE</span>
                </span>
                <span className="text-[9.5px] font-mono tracking-[0.2em] text-neutral-400 uppercase leading-none mt-1.5 pl-0.5">
                  EST. 2018
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  id={`nav-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-xs font-black tracking-widest uppercase transition-all duration-200 hover:text-red-500 relative ${
                      isActive ? 'text-red-500 font-extrabold' : 'text-neutral-300'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-600 shadow-[0_0_8px_#dc2626]"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Join Button */}
            <div className="hidden lg:block">
              <Link
                id="navbar-cta"
                to="/membership"
                className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-black tracking-wider text-xs uppercase text-white bg-red-600 border border-red-600 hover:border-white transition-all duration-300 rounded group shadow-lg shadow-red-600/10 focus:outline-none"
              >
                <span className="absolute inset-0 w-full h-full bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                <span className="relative group-hover:text-red-550 transition-colors duration-300">
                  JOIN THE COVENANT
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden">
              <button
                id="mobile-menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded text-neutral-400 hover:text-white hover:bg-neutral-900 focus:outline-none focus:ring-1 focus:ring-red-600 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Animated Mobile Overlay Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-neutral-950 border-b border-neutral-900 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    id={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `block px-3 py-3 rounded text-sm font-black tracking-widest uppercase transition-colors ${
                        isActive 
                          ? 'text-white bg-red-950/40 border-l-4 border-red-600' 
                          : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                <div className="pt-4 border-t border-neutral-900 mt-4">
                  <Link
                    id="mobile-menu-cta"
                    to="/membership"
                    className="w-full inline-flex items-center justify-center px-4 py-3 text-center text-sm font-black tracking-widest uppercase text-white bg-red-600 hover:bg-red-750 rounded transition-colors"
                  >
                    JOIN GENERAL COVENANT
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
