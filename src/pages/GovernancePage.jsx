import React from 'react';
import Governance from '../components/Governance';

const GovernancePage = () => {
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
          <h1 style={{ fontSize: '4.5rem', marginBottom: '20px' }}>Governance</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Our structure and leadership principles.</p>
        </div>
      </header>
      <Governance />
    </div>
  );
};

export default GovernancePage;
