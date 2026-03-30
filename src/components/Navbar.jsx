import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Governance', href: '/governance' },
    { name: 'Transparency', href: '/transparency' },
    { name: 'Contact', href: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isScrolled ? '15px 5%' : '25px 5%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(15px)' : 'none',
    boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.08)' : 'none',
    borderBottom: isScrolled ? '1px solid rgba(237, 30, 121, 0.1)' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000
  };

  const linkColor = isScrolled ? 'var(--text-dark)' : (location.pathname === '/' ? 'white' : 'var(--text-dark)');

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
        <img src={logo} alt="Lilian Brown Foundation" style={{ 
          height: isScrolled ? '45px' : '55px', 
          transition: 'all 0.4s',
          filter: (location.pathname === '/' && !isScrolled) ? 'brightness(0) invert(1)' : 'none' 
        }} />
      </Link>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }} className="desktop-menu">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            style={{
              textDecoration: 'none',
              color: location.pathname === link.href ? 'var(--primary)' : linkColor,
              fontWeight: '600',
              fontSize: '1rem',
              transition: 'all 0.3s',
              borderBottom: location.pathname === link.href ? '2px solid var(--primary)' : '2px solid transparent',
              paddingBottom: '5px'
            }}
          >
            {link.name}
          </Link>
        ))}
        <Link 
          to="/contact" 
          className="btn btn-primary" 
          style={{ 
            padding: '12px 28px', 
            fontSize: '1rem',
            background: (location.pathname === '/' && !isScrolled) ? 'white' : 'var(--primary)',
            color: (location.pathname === '/' && !isScrolled) ? 'var(--primary)' : 'white'
          }}
        >
          Donate Now
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div 
        className="mobile-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        style={{ cursor: 'pointer', color: linkColor }}
      >
        {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'white',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '100px 5% 40px 5%',
              gap: '20px'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-dark)',
                  fontSize: '2rem',
                  fontWeight: '700',
                  padding: '15px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <p style={{ color: 'var(--accent)', marginBottom: '15px' }}>RC: 9197336</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '15px' }}>
                  Donate Now
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
