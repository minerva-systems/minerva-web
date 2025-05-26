import React from 'react';
import './Footer.css';

const Footer = () => {
  const MinervaLogo = () => (
    <div className="footer-logo">
      <img src="logo-transparent.png" alt="Minerva Systems" className="logo-icon" />
      <span className="footer-logo-text">MINERVA SYSTEMS</span>
    </div>
  );

  return (
    <footer className="footer">
      <div className="footer-container">
        <MinervaLogo />
        <p className="footer-text">
          &copy; 2025 Minerva Systems
        </p>
      </div>
    </footer>
  );
};

export default Footer;