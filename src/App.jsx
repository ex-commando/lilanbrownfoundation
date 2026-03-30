import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import GovernancePage from './pages/GovernancePage';
import ContactPage from './pages/ContactPage';
import './App.css';

// Simple Transparency page to complete navigation
const TransparencyPage = () => (
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
        <h1 style={{ fontSize: '4.5rem', marginBottom: '20px' }}>Financial Transparency</h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Our accountability to donors and the community.</p>
      </div>
    </header>
    <div style={{ background: '#f8fafc', padding: '100px 5%' }}>
       <div className="container">
          <div className="card" style={{ padding: '60px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
             <h2 style={{ marginBottom: '30px' }}>Coming Soon</h2>
             <p style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>
                We are currently preparing our 2026/2027 impact reports for review. Our accounts are audited annually in accordance with CAC regulations. 
             </p>
          </div>
       </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
