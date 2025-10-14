import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaUser, FaMapMarkerAlt, FaBirthdayCake } from "react-icons/fa";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">

        {/* Left Side Info */}
        <div className="contact-info">
          <h3>About Me</h3>
          <p><FaUser /> Name : Faheem Sarwar</p>
          <p><FaWhatsapp/> contact Number : +92-3071027610 </p>
          <p><FaBirthdayCake /> DOB : 26 may 2003 </p>
          <p><FaMapMarkerAlt /> Address : L-499 Sector 20-B Shah Latif Town Malir Karachi</p>

          <div className="social-links">
            <a
              href="https://wa.me/923071027610?text=welcome to my whatsapp how can i help you?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=faheemsarwar635@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://github.com/fahimsarwar2003/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
