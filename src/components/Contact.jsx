import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, User, FileText, Calendar, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '100px 5%' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px' }}>
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>Connect <span className="text-gradient">With Us</span></h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '50px' }}>
            Reach out to our leadership or visit our headquarters in Abuja to learn how you can contribute to our mission.
          </p>

          <div style={{ display: 'grid', gap: '30px' }}>
            <div className="card glass" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
               <div style={{ padding: '15px', borderRadius: '15px', background: 'var(--primary)', color: 'white' }}>
                 <MapPin size={24} />
               </div>
               <div>
                 <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Headquarters</h4>
                 <p style={{ color: 'var(--text-light)' }}>
                   SB9, Flat 4, NNPC Junior Quarters, <br/>
                   Area 11, Garki, Abuja, FCT, Nigeria
                 </p>
               </div>
            </div>

            <div className="card glass" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
               <div style={{ padding: '15px', borderRadius: '15px', background: 'var(--secondary)', color: 'white' }}>
                 <FileText size={24} />
               </div>
               <div>
                 <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Official Registration</h4>
                 <p style={{ color: 'var(--text-light)' }}>
                   RC Number: <strong style={{ color: 'var(--primary)' }}>9197336</strong> <br/>
                   Registered: January 12, 2026
                 </p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="card"
           style={{ padding: '50px', position: 'relative', overflow: 'hidden' }}
        >
           <h3 style={{ fontSize: '1.8rem', marginBottom: '40px', textAlign: 'center' }}>Leadership</h3>
           
           <div style={{ display: 'grid', gap: '40px' }}>
             <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <User size={40} />
                </div>
                <div>
                   <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>Elvis Abuyere</h4>
                   <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '10px' }}>Chairman</p>
                   <a href="tel:+2347034742049" style={{ textDecoration: 'none', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <Phone size={16} /> +234 703 474 2049
                   </a>
                </div>
             </div>

             <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(88, 89, 91, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
                  <User size={40} />
                </div>
                <div>
                   <h4 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>Sandra Odaudu</h4>
                   <p style={{ color: 'var(--secondary)', fontWeight: '600', marginBottom: '10px' }}>Secretary</p>
                   <a href="tel:+2348023144712" style={{ textDecoration: 'none', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                     <Phone size={16} /> +234 802 314 4712
                   </a>
                </div>
             </div>
           </div>

           <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(0,0,0,0.05)', textAlign: 'center' }}>
             <a href="mailto:info@lilianbrownfoundation.org" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
               <Mail size={20} style={{ marginRight: '10px', verticalAlign: 'middle' }} /> Send an Email
             </a>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
