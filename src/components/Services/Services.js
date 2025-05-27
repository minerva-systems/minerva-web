import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '💰',
      title: 'Personal Finance Platform',
      description: 'Our personal finance platform that uses AI to optimize your expenses and provides detailed charts to visualize your spending patterns.',
      action: 'Try Beta →',
      onClick: () => window.open('https://2cty3cvymp.us-west-2.awsapprunner.com/', '_blank')
    },
    {
      icon: '🚀',
      title: 'Strategic Consulting',
      description: 'Expert Software architecture and technology strategy consulting to scale your business.',
      action: 'Learn More →',
      onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: '💼',
      title: 'Custom Solutions',
      description: 'Bespoke tools and enterprise software solutions built with precision.',
      action: 'Get Quote →',
      onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Our Expertise</h2>
          <p className="services-subtitle">
            Combining cutting-edge technology with industry expertise to deliver exceptional results
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button onClick={service.onClick} className="service-action">
                {service.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;