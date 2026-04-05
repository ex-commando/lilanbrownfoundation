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
    { name: 'PhotoBook', href: '/photo-book' },
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
    padding: isScrolled ? '12px 5%' : '20px 5%',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
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
          height: isScrolled ? '40px' : '50px', 
          transition: 'all 0.4s',
          filter: (location.pathname === '/' && !isScrolled) ? 'brightness(0) invert(1)' : 'none' 
        }} />
      </Link>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-menu">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            style={{
              textDecoration: 'none',
              color: location.pathname === link.href ? 'var(--primary)' : linkColor,
              fontWeight: '600',
              fontSize: '0.95rem',
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
            padding: '10px 22px', 
            fontSize: '0.9rem',
            background: (location.pathname === '/' && !isScrolled) ? 'white' : 'var(--primary)',
            color: (location.pathname === '/' && !isScrolled) ? 'var(--primary)' : 'white'
          }}
        >
          Donate Now
        </Link>
      </div>

      {/* Mobile Toggle Icons */}
      <div 
        className="mobile-toggle" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        style={{ cursor: 'pointer', color: linkColor, zIndex: 1001 }}
      >
        {isMobileMenuOpen ? <X size={32} style={{ color: 'var(--text-dark)' }} /> : <Menu size={32} />}
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
              padding: '100px 8% 40px 8%',
              gap: '15px'
            }}
          >
            {/* Dedicated Close Button in Menu */}
            <div 
              style={{ 
                position: 'absolute', 
                top: '25px', 
                right: '5%', 
                padding: '10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-dark)',
                fontWeight: '600'
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span style={{ fontSize: '0.9rem', textTransform: 'uppercase' }}>Close</span>
              <X size={28} />
            </div>

            <div style={{ marginBottom: '30px' }}>
              <img src={logo} alt="Lilian Brown Foundation" style={{ height: '50px' }} />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === link.href ? 'var(--primary)' : 'var(--text-dark)',
                  fontSize: '1.75rem',
                  fontWeight: '700',
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                {link.name}
              </Link>
            ))}
            
            <div style={{ marginTop: 'auto', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                   {/* Social placeholders for mobile menu */}
                   <div style={{ padding: '12px', borderRadius: '50%', background: 'var(--bg-light)', color: 'var(--primary)' }}><Heart size={20} /></div>
                   <div style={{ padding: '12px', borderRadius: '50%', background: 'var(--bg-light)', color: 'var(--primary)' }}><Heart size={20} /></div>
                   <div style={{ padding: '12px', borderRadius: '50%', background: 'var(--bg-light)', color: 'var(--primary)' }}><Heart size={20} /></div>
                </div>
                <p style={{ color: 'var(--accent)', marginBottom: '20px', fontSize: '0.9rem' }}>RC: 9197336 | Abuja, Nigeria</p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', fontSize: '1.1rem', padding: '18px' }}>
                  Donate & Support
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
