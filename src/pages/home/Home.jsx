import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../../assets/images/img2.jpg"; // apna photo yahan rakho
import "./home.css";

const projects = [
    {
        title: "Realtime Tasks",
        desc: "Real-time collaborative task manager with WebSocket sync and offline support.",
        tech: "React, NestJS, PostgreSQL, WebSockets, Docker",
        link: "/projects"
    },
    {
        title: "AI Content Studio",
        desc: "Generative AI tool for automated blog drafts and summaries with prompt templates.",
        tech: "React, Node, OpenAI API, Redis",
        link: "/projects"
    },
    {
        title: "Portfolio CMS",
        desc: "Headless CMS + frontend to manage projects, blogs, and assets.",
        tech: "Next.js, NestJS, MongoDB, Vercel",
        link: "/projects"
    }
];

const Home = () => {
    return (
        <div className="home">
            <div className="intro">
                <h1>Hi, I’m Faheem 👋</h1>
                <h2>React • Next JS • Generative AI</h2>
                <p className="bio">
                    I design and build modern, scalable web applications. I build fast React UIs,
                    robust NestJS backends, and integrate generative AI to create intelligent features.
                </p>

                <div className="home-ctas">
                    <Link className="btn primary" to="/contact">Hire Me</Link>
                    <Link className="btn ghost" to="/projects">View Projects</Link>
                </div>

                <div className="skills-inline">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>Next JS</span>
                    <span>Generative AI</span>
                    <span>Docker</span>
                </div>
            </div>

            <div className="hero-img">
                {/* Vite project ke andar jo react.svg already hota hai use karte hain */}
                <img src={profilePic} alt="Faheem" />
            </div>

            <section id="projects" className="featured-projects">
                <h3>Featured Projects</h3>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card">
                            <h4>{p.title}</h4>
                            <p>{p.desc}</p>
                            <small>{p.tech}</small>
                            <div className="project-links">
                                <Link to={p.link} className="project-btn">View</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
