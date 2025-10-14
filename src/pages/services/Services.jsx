import React from "react";
import "./services.css";

const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Modern and responsive websites using React, Next.js, and custom CSS."
    },
    {
      icon: "🛒",
      title: "E-Commerce Website",
      desc: "Custom online stores with product management, cart, and secure checkout."
    },
    {
      icon: "📂",
      title: "Portfolio Website",
      desc: "Personal and business portfolios with a clean, professional design."
    },
    {
  icon: "🐍",
  title: "Python Development",
  desc: "Efficient backend solutions, automation scripts, and data handling with Python."
}
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="heading">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
