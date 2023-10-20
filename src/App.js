import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import HomeContent from './components/HomeContent';
import AboutContent from './components/AboutContent';
import EducBgContent from './components/EducBgContent';
import Services from './components/ServicesContent';
import ProjContent from './components/Projects.Content';
import ContactContent from './components/ContactContent';
import Footer from './components/Footer';
import GradientAnimation from './components/gradientAnimation';
import './css/style.css';

function App() {
  // Initialize ScrollReveal
  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 1800,
      delay: 100,
    });

    ScrollReveal().reveal('.home-content, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-img, .portfolio-box-img', { origin: 'right' });
    ScrollReveal().reveal('.heading', { origin: 'top' });
    ScrollReveal().reveal('.about-content, .services-container, .portfolio-container, .contact form, .educ-bg-box', { origin: 'bottom' });
  }, []);

  return (
    <main className="main">
      <GradientAnimation/>
      <Header />
      <HomeContent />
      <AboutContent />
      <EducBgContent />
      <Services />
      <ProjContent />
      <ContactContent />
      <Footer />
    </main>
  );
}

export default App;
