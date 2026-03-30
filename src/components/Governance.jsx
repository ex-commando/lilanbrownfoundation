import React from 'react';
import { motion } from 'framer-motion';
import { Shield, BookOpen, Clock, AlertTriangle, UserCheck } from 'lucide-react';
import mentorshipImg from '../assets/mentorship.png';

const Governance = () => {
  const trusteeCeaseConditions = [
    'Resign voluntarily',
    'Cease to be a member',
    'Are declared bankrupt or of unsound mind',
    'Are convicted of a criminal offence involving dishonesty',
    'Are removed by majority vote at a General Meeting',
    'Cease to reside in Nigeria'
  ];

  const meetingTypes = [
    'Annual General Meeting (AGM)',
    'Monthly General Meetings',
    'Special General Meetings',
    'Executive Board Meetings'
  ];

  return (
    <section id="governance">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Governance <span className="text-gradient">Structure</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '30px' }}>
              The Foundation is governed by a Board of Trustees responsible for strategic oversight and compliance.
            </p>
          </div>

          <div 
            style={{
              padding: '40px',
              background: 'var(--bg-light)',
              borderRadius: '30px',
              border: '1px solid rgba(237, 30, 121, 0.1)',
              marginBottom: '30px'
            }}
          >
            <h3 style={{ fontSize: '1.6rem', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <Shield size={28} color="var(--primary)" />
              Board of Trustees
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '20px' }}>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Composition</h4>
                  <p style={{ color: 'var(--text-light)' }}>Minimum of 2 and maximum of 15 trustees</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Election</h4>
                  <p style={{ color: 'var(--text-light)' }}>Elected by a two-thirds majority at a General Meeting</p>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>•</span>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '5px' }}>Tenure</h4>
                  <p style={{ color: 'var(--text-light)' }}>Each trustee serves a term of 5 years</p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <div className="card glass" style={{ marginBottom: '30px' }}>
             <h3 style={{ fontSize: '1.6rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '15px' }}>
               <AlertTriangle size={24} color="var(--primary)" />
               Cessation of Office
             </h3>
             <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', listStyle: 'none', padding: 0 }}>
                {trusteeCeaseConditions.map((cond, i) => (
                  <li key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--text-light)' }}>
                    <div style={{ padding: '4px', borderRadius: '50%', background: 'rgba(237, 30, 121, 0.1)', marginTop: '2px' }} />
                    {cond}
                  </li>
                ))}
             </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '20px' }}>
            <div className="card" style={{ background: 'var(--primary)', color: 'white' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <BookOpen size={20} color="white" />
                Meetings
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', opacity: 0.9 }}>
                {meetingTypes.map((m, i) => (
                  <li key={i} style={{ marginBottom: '8px' }}>• {m}</li>
                ))}
              </ul>
            </div>

            <div className="card glass">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <UserCheck size={20} color="var(--primary)" />
                Quorum
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                A minimum of <strong>two-thirds majority</strong> of members is required for General Meetings. Executive Board meetings require at least <strong>two members</strong> present.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Governance;
