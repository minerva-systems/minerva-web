import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🚀',
      title: 'Intelligence Platform',
      description: 'Our flagship financial intelligence platform powered by advanced analytics and machine learning.',
      action: 'Try Beta →',
      onClick: () => window.open('APP_RUNNER_URL', '_blank')
    },
    {
      icon: '⚡',
      title: 'Strategic Consulting',
      description: 'Expert Software architecture and technology strategy consulting to scale your business.',
      action: 'Learn More →',
      onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: '💼',
      title: 'Custom Solutions',
      description: 'Bespoke financial tools and enterprise software solutions built with precision.',
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
            Combining cutting-edge technology with financial expertise to deliver exceptional results
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