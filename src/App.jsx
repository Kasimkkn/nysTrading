import React from 'react';
import Header from './components/Header.jsx';
import OurServices from './components/OurServices.jsx';
import OurProducts from './components/OurProducts.jsx';
import AboutUs from './components/AboutUs.jsx';
import Footer from './components/Footer.jsx';
import HeroSectionWithBranches from './components/HeroSection.jsx';
import OurInfo from './components/OurInfo.jsx';

const App = () => {
  return (
    <>
      <Header />
      <HeroSectionWithBranches />
      <OurInfo />
      <OurServices />
      <OurProducts />
      <AboutUs />
      <Footer />
    </>
  );
};

export default App;
