import React from 'react';
import { motion } from 'framer-motion';
import educationImg from '../assets/education.png';

const About = () => {
  return (
    <section id="about" style={{ background: 'var(--white)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <img 
            src={educationImg} 
            alt="Education Empowerment" 
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '40px',
              boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)',
              border: '6px solid white'
            }} 
          />
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: 'easeOut' }}
           viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '30px', color: 'var(--text-dark)' }}>
            About <span className="text-gradient">Lilian Brown Foundation</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '30px' }}>
            Lilian Brown Foundation is a non-profit organization dedicated to empowering women, girls, and vulnerable groups through education, advocacy, and sustainable development initiatives.
          </p>
          <div 
            className="card glass" 
            style={{ 
              padding: '30px', 
              borderLeft: '5px solid var(--primary)',
              borderRadius: '0 24px 24px 0',
              marginTop: '40px'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Our Mission</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontStyle: 'italic', lineHeight: '1.8' }}>
              "To promote equal access to opportunities, empower individuals, and foster inclusive, sustainable communities."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
