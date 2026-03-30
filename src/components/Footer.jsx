import { Heart, Globe, MessageCircle, Users } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer style={{ background: '#111827', color: 'white', padding: '80px 5% 40px 5%' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '50px', marginBottom: '80px', flexWrap: 'wrap' }}>
          <div>
            <img src={logo} alt="Lilian Brown Foundation" style={{ height: '60px', marginBottom: '20px', filter: 'brightness(0) invert(1)' }} />
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '30px', maxWidth: '350px' }}>
              Empowering individuals—especially women and young people—through advocacy, mentorship, and capacity-building programmes that foster self-reliance and leadership.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <Globe size={24} style={{ cursor: 'pointer', opacity: 0.8 }} />
              <MessageCircle size={24} style={{ cursor: 'pointer', opacity: 0.8 }} />
              <Users size={24} style={{ cursor: 'pointer', opacity: 0.8 }} />
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, display: 'grid', gap: '15px' }}>
              <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>Our Mission</a></li>
              <li><a href="#objectives" style={{ color: 'white', textDecoration: 'none' }}>Strategic Objectives</a></li>
              <li><a href="#governance" style={{ color: 'white', textDecoration: 'none' }}>Governance Structure</a></li>
              <li><a href="#transparency" style={{ color: 'white', textDecoration: 'none' }}>Financial Reports</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--primary)' }}>Support Us</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, display: 'grid', gap: '15px' }}>
              <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Volunteer</a></li>
              <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Donate</a></li>
              <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Partner</a></li>
              <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Get Involved</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--primary)' }}>Legal</h4>
            <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, display: 'grid', gap: '15px' }}>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>RC: 9197336</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Terms of Use</a></li>
              <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Constitution</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>
          <p>© {new Date().getFullYear()} Lilian Brown Foundation. All rights reserved.</p>
          <p style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            Built with <Heart size={14} color="var(--primary)" fill="var(--primary)" /> for Empowerment in Abuja, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
