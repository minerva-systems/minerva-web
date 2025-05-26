import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleBetaClick = () => {
    window.open('https://2cty3cvymp.us-west-2.awsapprunner.com', '_blank');
  };

  const handleConsultingClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-logo">
            <img src={`${process.env.PUBLIC_URL}/logo-transparent.png`} alt="Minerva Systems" className="hero-logo-placeholder" />
          </div>
          
          <h1 className="hero-title">
            MINERVA SYSTEMS
          </h1>
          
          <p className="hero-subtitle">
            Professional Financial Technology & Expert Software Consulting
          </p>
          
          <p className="hero-description">
            Delivering intelligent financial solutions and strategic software guidance with precision and expertise.
          </p>
          
          <div className="hero-buttons">
            <button onClick={handleBetaClick} className="btn-primary">
              <ExternalLink size={20} />
              Access Beta Platform
            </button>
            <button onClick={handleConsultingClick} className="btn-secondary">
              Explore Consulting
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;