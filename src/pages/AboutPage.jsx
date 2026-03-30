import React from 'react';
import About from '../components/About';
import Objectives from '../components/Objectives';

const AboutPage = () => {
  return (
    <div style={{ paddingTop: '100px' }}>
      <header style={{ 
        height: '40vh', 
        background: 'linear-gradient(135deg, var(--secondary), var(--primary))', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '0 5%'
      }}>
        <div className="container" style={{ textAlign: 'center', color: 'white' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '20px' }}>Our <span style={{ color: 'rgba(255,255,255,0.8)' }}>Story</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Dedicated to empowering women, girls, and vulnerable groups.</p>
        </div>
      </header>
      <About />
      <Objectives />
    </div>
  );
};

export default AboutPage;
