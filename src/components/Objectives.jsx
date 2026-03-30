import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, ShieldCheck, HeartPulse, Wallet, Globe, MessageSquare, Sprout, TrendingUp } from 'lucide-react';

const Objectives = () => {
  const objectiveData = [
    {
      icon: <GraduationCap size={32} />,
      title: 'Equal Access to Education',
      text: 'To promote equal access to education, skills training, and economic opportunities for women, girls, and other vulnerable groups.',
    },
    {
      icon: <Users size={32} />,
      title: 'Mentorship & Empowerment',
      text: 'To empower individuals through mentorship, leadership programmes, and community-based initiatives.',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Advocacy Against Violence',
      text: 'To advocate against gender-based violence, discrimination, and harmful cultural practices while promoting human rights and protection.',
    },
    {
      icon: <HeartPulse size={32} />,
      title: 'Psychosocial Support',
      text: 'To provide psychosocial support, counseling, and awareness campaigns that enhance emotional, mental, and physical well-being.',
    },
    {
      icon: <Wallet size={32} />,
      title: 'Entrepreneurship Support',
      text: 'To support entrepreneurship, financial literacy, and income-generating projects among women and youth.',
    },
    {
      icon: <Globe size={32} />,
      title: 'Community Collaboration',
      text: 'To collaborate with governmental and non-governmental bodies to implement community development programmes that foster social inclusion.',
    },
    {
      icon: <MessageSquare size={32} />,
      title: 'Safe Spaces for Dialogue',
      text: 'To establish safe spaces for dialogue, guidance, and personal development for women and young people.',
    },
    {
      icon: <Sprout size={32} />,
      title: 'Sustainable Development',
      text: 'To promote sustainable development through initiatives that improve economic resilience and community welfare.',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Leadership Capacity',
      text: 'To empower individuals—especially women and young people—through advocacy, mentorship, and capacity-building programmes that foster self-reliance and leadership.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="objectives" style={{ background: 'var(--bg-light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Our Core <span className="text-gradient">Objectives</span></h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
            We are committed to building a brighter future for all through our focused strategic pillars.
          </p>
        </div>

        <motion.div 
          className="grid-container" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}
        >
          {objectiveData.map((obj, i) => (
            <motion.div 
              key={i} 
              className="card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(237, 30, 121, 0.15)',
                border: '1px solid var(--primary-light)'
              }}
              style={{
                background: 'white',
                padding: '40px',
                borderRadius: '30px',
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                gap: '20px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{ 
                  background: 'rgba(237, 30, 121, 0.1)', 
                  padding: '15px', 
                  borderRadius: '20px', 
                  color: 'var(--primary)',
                  height: 'fit-content'
                }}
              >
                {obj.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-dark)' }}>{obj.title}</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)', lineHeight: '1.6' }}>{obj.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Objectives;
