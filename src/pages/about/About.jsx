import React from "react";
import "./about.css";
import myImg from "../../assets/images/my-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-left">
          <img src={myImg} alt="Faheem" className="profile-pic" />
        </div>

        <div className="about-right">
          <h1>
            About <span>Me</span>
          </h1>
          <p>
            I’m <span className="highlight">Faheem</span>, a Web Developer
            passionate about building{" "}
            <span className="highlight">interactive</span> and
            <span className="highlight"> user-friendly</span> applications using
            React, JavaScript and modern tools.
          </p>
          <p>
            With hands-on experience in{" "}
            <span className="highlight">Frontend</span>,
            <span className="highlight"> Backend</span>, and
            <span className="highlight"> AI-powered projects</span>, I always
            aim to create impactful digital solutions.
          </p>

          <h3>Skills</h3>
          <div className="skills">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML & CSS</span>
            <span>Node.js</span>
            <span>Generative AI</span>
            <span>Next JS</span>
          </div>

          <a href="#" className="download-btn">
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
