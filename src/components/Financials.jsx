import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Eye, ShieldCheck, TrendingUp, HandHelping, Banknote } from 'lucide-react';

const Financials = () => {
  const sources = [
    {
      title: 'Individual & Corporate Donations',
      text: 'Cash or in-kind donations from philanthropic individuals and organizations.'
    },
    {
      title: 'Local & International Grants',
      text: 'Support from reputable institutions to fund specific community projects.'
    },
    {
      title: 'Partner Organizations',
      text: 'Contributions through joint ventures and community-led initiatives.'
    }
  ];

  return (
    <section id="transparency" style={{ background: '#f8fafc' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Financial <span className="text-gradient">Transparency</span></h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 80px auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
          We are committed to absolute honesty and accountability in how we manage and utilize our resources.
        </p>

        <div className="grid-container" style={{ textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div style={{ padding: '40px', background: 'white', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '30px' }}><Banknote size={40} /></div>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Sources of Income</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {sources.map((s, i) => (
                  <li key={i} style={{ marginBottom: '25px' }}>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <HandHelping size={18} color="var(--primary)" />
                      {s.title}
                    </h4>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>{s.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
             <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="card"
               style={{ borderLeft: '10px solid var(--secondary)' }}
             >
                <div style={{ color: 'var(--secondary)', marginBottom: '15px' }}><TrendingUp size={30} /></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Use of Funds</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>
                  All funds are strictly applied toward achieving the Foundation’s objectives. <strong>No profits are distributed to members.</strong>
                </p>
             </motion.div>

             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card"
                style={{ borderRight: '10px solid var(--primary)' }}
             >
                <div style={{ color: 'var(--primary)', marginBottom: '15px' }}><ShieldCheck size={30} /></div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Audit & Records</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-light)' }}>
                  Independent auditors are appointed annually. Audited financial statements are presented at the AGM and reports are filed with the <strong>Corporate Affairs Commission (CAC)</strong>.
                </p>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;
