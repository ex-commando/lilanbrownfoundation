import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroSlide1 from '../assets/hero_slide1.jpg';
import heroSlide2 from '../assets/hero_slide2.jpg';
import heroSlide3 from '../assets/hero_slide3.jpg';
import heroSlide4 from '../assets/hero_slide4.jpg';
import heroSlide5 from '../assets/hero_slide5.jpg';

const slides = [
  {
    image: heroSlide1,
    title: 'Empowering',
    subtitle: 'Women',
    tagline: 'Leading the charge for vulnerable groups through focused advocacy and direct support.',
  },
  {
    image: heroSlide2,
    title: 'Sustainable',
    subtitle: 'Impact',
    tagline: 'Equal access to skills training and economic opportunities for all.',
  },
  {
    image: heroSlide3,
    title: 'Direct',
    subtitle: 'Engagement',
    tagline: 'Empowering individuals—especially women and young people—through mentorship.',
  },
  {
    image: heroSlide4,
    title: 'Community',
    subtitle: 'Wellfare',
    tagline: 'Promoting resilience and welfare through impactful community welfare programs.',
  },
  {
    image: heroSlide5,
    title: 'Future',
    subtitle: 'Leaders',
    tagline: 'Building a stronger foundation for the next generation of change-makers.',
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
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
        justifyContent: 'center',
        background: '#0a0a0a',
        padding: '0'
      }}
    >
      {/* Dynamic Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
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
            filter: 'blur(30px) brightness(0.5)',
            zIndex: 0
          }}
        />
      </AnimatePresence>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
        
        {/* Left Side: Content */}
        <motion.div
          key={`content-${current}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ color: 'white', textAlign: 'left' }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              padding: '6px 16px',
              borderRadius: '30px',
              background: 'rgba(237, 30, 121, 0.15)',
              backdropFilter: 'blur(8px)',
              color: 'var(--primary-light)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '600',
              marginBottom: '25px',
              border: '1px solid rgba(237, 30, 121, 0.3)',
              fontSize: '0.9rem'
            }}
          >
            <Heart size={16} fill="var(--primary-light)" className="floating" />
            Lilian Brown Foundation
          </motion.div>
          
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', marginBottom: '20px', lineHeight: 1.05, fontWeight: '700' }}>
            {slides[current].title} <br/>
            <span style={{ color: 'var(--primary)' }}>{slides[current].subtitle}</span>
          </h1>
          
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '40px', maxWidth: '600px', fontWeight: '400' }}>
            {slides[current].tagline}
          </p>
          
          <div className="hero-btns" style={{ display: 'flex', gap: '20px' }}>
            <Link to="/about" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(237, 30, 121, 0.3)' }}>
              Our Story <ArrowRight size={20} style={{ marginLeft: '10px', verticalAlign: 'middle' }} />
            </Link>
            <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white', padding: '16px 36px', fontSize: '1.1rem', backdropFilter: 'blur(5px)' }}>
              Get Involved
            </Link>
          </div>
        </motion.div>

        {/* Right Side: Circular Image with Concentric Rotating Rings */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Primary Pink Ring - Anticlockwise */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              border: '2.5px dotted var(--primary)',
              borderRadius: '50%',
              opacity: 0.8,
              zIndex: 1
            }}
          />
          
          {/* Secondary White Ring - Clockwise */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '110%',
              height: '110%',
              border: '2px dotted rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              zIndex: 1
            }}
          />
          
          {/* Main Image Circle */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`image-${current}`}
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: -15 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                position: 'relative',
                width: 'min(480px, 75vw)',
                aspectRatio: '1/1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '10px solid rgba(255,255,255,0.05)',
                boxShadow: '0 0 50px rgba(0,0,0,0.3)',
                zIndex: 5
              }}
            >
              <img 
                src={slides[current].image} 
                alt="Foundation Event" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div 
        style={{
          position: 'absolute',
          bottom: '50px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          zIndex: 20
        }}
      >
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={prevSlide}
            style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
             onClick={nextSlide}
             style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s'
            }}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {slides.map((_, i) => (
            <div 
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '30px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === current ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
                transition: 'all 0.4s'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          #home .container {
            grid-template-columns: 1fr;
            text-align: center;
            padding-top: 40px;
          }
          #home .container > div:first-child {
            order: 2;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          #home .container > div:last-child {
            order: 1;
            margin-bottom: 20px;
          }
           #home .container h1 {
            font-size: 2.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
