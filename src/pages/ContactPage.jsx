import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
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
          <h1 style={{ fontSize: '4.5rem', marginBottom: '20px' }}>Contact <span style={{ color: 'rgba(255,255,255,0.8)' }}>Us</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Connect with our team in Abuja.</p>
        </div>
      </header>
      <Contact />
    </div>
  );
};

export default ContactPage;
