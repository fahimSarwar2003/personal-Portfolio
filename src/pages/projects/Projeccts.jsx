import React from "react";
import "./project.css";

const Projects = () => {
  const projects = [
    {
      title: "Cloth Website",
      desc: "An e-commerce website with product listing, cart and checkout features.",
      img: "",
      live: "#",
      code: "#"
    },
    {
      title: "Portfolio",
      desc: "This is a responsive and animated Portfolio Website created using HTML, CSS, and JavaScript.",
      img: "/images/portfolio.PNG",
      live: "https://portfoliofaheem21.netlify.app/#",
      code: "https://github.com/fahimSarwar2003/portfolio"
    },
    {
      title: "Portfolio Website",
      desc: "A React-based portfolio  website designed to highlight my work, skills, and experience in web development.",
      img: "/images/port.PNG",
      live: "#",
      code: "#"
    },
    {
      title: "Password Generate",
      desc: "This Password Generator was built using simple HTML and CSS.",
      img: "/images/password-generate.PNG",
      live: "https://password-generate-chi-two.vercel.app/",
      code: "https://github.com/fahimSarwar2003/Password-Generate"
    },
    {
      title: "Calculator",
      desc: "A simple calculator built with HTML and JavaScript for basic operations.",
      img: "/images/calculator.PNG",
      live: "https://calculator-xi-one-97.vercel.app/",
      code: "https://github.com/fahimSarwar2003/Calculator"
    },
    {
      title: "Register Form",
      desc: "This project features a modern Registration Form built with Next JS. It provides a smooth and responsive user experience with a clean design and structured layout",
      img: "/images/registre-form.PNG",
      live: "https://register-form-beta-ten.vercel.app/",
      code: "https://github.com/fahimSarwar2003/register-form"
    },
    {
      title: "Instagram Login/Signup Page",
      desc: "A simple login/signup page built with React  for basic login or signup.",
      img: "/images/instagram.PNG",
      live: "https://instagra-login-and-signup-page.vercel.app/",
      code: "https://github.com/fahimSarwar2003/instagra-login-and-signup-page"
    },
    {
      title: "QR Code Generator",
      desc: "Generates QR codes for text or URLs using a simple UI.",
      img: "/images/QR code.PNG",
      live: "https://qr-code-generate-myzdw8hiu-faheem-sarwars-projects-fcff1990.vercel.app/",
      code: "https://github.com/fahimSarwar2003/QR-code-generate-"
    },
    {
      title: "To-Do List",
      desc: "Manage daily tasks with add, edit, and delete options.",
      img: "/images/todo-list.PNG",
      live: "https://to-do-list-ten-gamma-57.vercel.app/",
      code: "https://github.com/fahimSarwar2003/To-Do-List"
    },
    {
      title: "Popup Button",
      desc: "A popup modal triggered by a button with smooth animations.",
      img: "/images/popup.PNG",
      live: "https://pop-up-button.vercel.app/",
      code: "https://github.com/fahimSarwar2003/Pop-Up-Button"
    },
    {
      title: "Age Calculator",
      desc: "Calculate exact age in years, months, and days from date of birth.",
      img: "/images/agecalculator.PNG",
      live: "https://age-calculator-one-neon.vercel.app/",
      code: "https://github.com/fahimSarwar2003/Age-Calculator"
    },
    {
      title: "Budget App",
      desc: "This project is a simple Budget Application built using HTML, CSS, and JavaScript. It allows users to manage their income and expenses easily with a clean and responsive design.",
      img: "/images/budget.PNG",
      live: "https://budget-app-one-xi.vercel.app/",
      code: "https://github.com/fahimSarwar2003/budget_app"
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="heading">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="image-box">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="buttons">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
