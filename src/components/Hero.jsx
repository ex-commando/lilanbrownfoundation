import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import hero1 from '../assets/hero_1.png'; // New first slide image
import hero2 from '../assets/education.png';
import hero3 from '../assets/mentorship.png';
import hero4 from '../assets/vocational.png';

const slides = [
  {
    image: hero1,
    title: 'Lilian Brown',
    subtitle: 'Foundation',
    tagline: 'Leading the charge for vulnerable groups through focused advocacy and direct support.',
  },
  {
    image: hero2,
    title: 'Future through',
    subtitle: 'Education',
    tagline: 'Equal access to skills training and economic opportunities for all.',
  },
  {
    image: hero3,
    title: 'Mentorship &',
    subtitle: 'Leadership',
    tagline: 'Empowering individuals—especially women and young people—through mentorship.',
  },
  {
    image: hero4,
    title: 'Sustainable',
    subtitle: 'Communities',
    tagline: 'Promoting resilience and welfare through impactful community welfare programs.',
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section 
      id="home" 
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Centralize
        background: '#000',
        padding: '0'
      }}
    >
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slides[current].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        >
          {/* Centralized Gradient Overlay */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%), linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
              zIndex: 1
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '900px', margin: '0 auto', color: 'white' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              padding: '8px 20px',
              borderRadius: '30px',
              background: 'rgba(237, 30, 121, 0.25)',
              backdropFilter: 'blur(12px)',
              color: 'var(--primary-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '600',
              marginBottom: '35px',
              border: '1px solid rgba(237, 30, 121, 0.4)'
            }}
          >
            <Heart size={18} fill="var(--primary-light)" className="floating" />
            Leading with Compassion
          </motion.div>
          <h1 style={{ fontSize: '6rem', marginBottom: '25px', lineHeight: 1.05, textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            {slides[current].title} <br/>
            <span style={{ color: 'var(--primary)' }}>{slides[current].subtitle}</span>
          </h1>
          <p style={{ fontSize: '1.6rem', color: 'rgba(255,255,255,0.95)', marginBottom: '45px', maxWidth: '700px', margin: '0 auto 45px auto', fontWeight: '400', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            {slides[current].tagline}
          </p>
          <div className="hero-btns" style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
            <a href="/about" className="btn btn-primary" style={{ padding: '18px 45px', fontSize: '1.2rem', boxShadow: '0 10px 30px rgba(237, 30, 121, 0.4)' }}>
              Explore Our Story <ArrowRight size={22} style={{ marginLeft: '12px', verticalAlign: 'middle' }} />
            </a>
            <a href="/contact" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', padding: '18px 45px', fontSize: '1.2rem', backdropFilter: 'blur(5px)' }}>
              Get Involved
            </a>
          </div>
          <p style={{ marginTop: '40px', fontSize: '1rem', color: 'rgba(255,255,255,0.7)', fontWeight: '500' }}>
            CAC: <span style={{ color: 'var(--primary-light)' }}>9197336</span> | Registered NGO
          </p>
        </motion.div>
      </div>

      {/* Slider Controls */}
      <div 
        style={{
          position: 'absolute',
          bottom: '60px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 5%',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          <button 
            onClick={prevSlide}
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ChevronLeft size={28} />
          </button>
          <button 
             onClick={nextSlide}
             style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'var(--primary)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,255,255,0.1)'}
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Indicators on the right */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {slides.map((_, i) => (
            <div 
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '40px' : '12px',
                height: '12px',
                borderRadius: '6px',
                background: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer',
                transition: 'all 0.4s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
