import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Zap, Users, Heart } from 'lucide-react';

import g2 from '../assets/gallery/gallery_2.jpg';
import g3 from '../assets/gallery/gallery_3.jpg';
import g4 from '../assets/gallery/gallery_4.jpg';
import g5 from '../assets/gallery/gallery_5.jpg';
import g6 from '../assets/gallery/gallery_6.jpg';
import g7 from '../assets/gallery/gallery_7.jpg';
import g8 from '../assets/gallery/gallery_8.jpg';
import g9 from '../assets/gallery/gallery_9.jpg';
import g10 from '../assets/gallery/gallery_10.jpg';

const galleryItems = [
  { id: 2, image: g2, title: 'Community Outreach' },
  { id: 3, image: g3, title: 'Panel discussion' },
  { id: 4, image: g4, title: 'Women Empowerment Meeting' },
  { id: 5, image: g5, title: 'Leadership session' },
  { id: 6, image: g6, title: 'Education Program' },
  { id: 7, image: g7, title: 'Support distribution' },
  { id: 8, image: g8, title: 'Engagement' },
  { id: 9, image: g9, title: 'Strategy session' },
  { id: 10, image: g10, title: 'Impact' },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: '#fafafa' }}>
      <header 
        style={{ 
          height: '40vh', 
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url(' + g4 + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <h1 style={{ fontSize: '4.5rem', marginBottom: '15px' }}>Our <span style={{ color: 'var(--primary)' }}>PhotoBook</span></h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto' }}>A visual chronicle of our commitment to change and community impact.</p>
        </motion.div>
      </header>

      <main className="container" style={{ padding: '80px 0' }}>
         {/* Stats Bar */}
         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '80px' }} className="grid-container">
            {[
              { icon: <Zap size={24} />, label: '500+', sub: 'Lives Impacted' },
              { icon: <Camera size={24} />, label: '10+', sub: 'Core Events' },
              { icon: <Users size={24} />, label: '1000+', sub: 'Volunteers' },
              { icon: <Heart size={24} />, label: 'Infinite', sub: 'Compassion' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card glass" 
                style={{ textAlign: 'center', padding: '30px', borderRadius: '20px' }}
              >
                  <div style={{ color: 'var(--primary)', marginBottom: '15px', display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
                  <h3 style={{ fontSize: '1.8rem', margin: '0' }}>{stat.label}</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{stat.sub}</p>
              </motion.div>
            ))}
         </div>

        {/* Gallery Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '30px',
            padding: '20px'
          }}
        >
          {galleryItems.map((item, index) => (
            <motion.div
              layoutId={`item-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(item)}
              style={{
                position: 'relative',
                borderRadius: '25px',
                overflow: 'hidden',
                aspectRatio: '4/3',
                cursor: 'pointer',
                boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                background: '#eee'
              }}
              whileHover={{ y: -10, boxShadow: '0 25px 50px rgba(237, 30, 121, 0.15)' }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.5s transform' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '30px 20px 20px 20px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                opacity: 0,
                transition: 'opacity 0.3s'
              }}
              className="gallery-label"
              >
                <h4 style={{ margin: 0, fontSize: '1.2rem' }}>{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.9)',
              backdropFilter: 'blur(10px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px'
            }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              layoutId={`item-${selectedImage.id}`}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '85vh',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 100px rgba(0,0,0,0.5)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  cursor: 'pointer',
                  zIndex: 2001,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000'
                }}
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </motion.button>
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                style={{ display: 'block', maxWidth: '100%', maxHeight: '85vh', objectFit: 'contain' }}
              />
              <div style={{ background: 'white', padding: '25px', textAlign: 'center' }}>
                 <h3 style={{ margin: 0, color: 'var(--text-dark)' }}>{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-grid div:hover .gallery-label {
          opacity: 1 !important;
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GalleryPage;
