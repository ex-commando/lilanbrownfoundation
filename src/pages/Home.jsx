import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Objectives from '../components/Objectives';
import Financials from '../components/Financials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Objectives />
      <Financials />
      <Contact />
    </>
  );
};

export default Home;
