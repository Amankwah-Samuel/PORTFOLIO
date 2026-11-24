import React from "react";
import { FaCode, FaServer, FaArrowRight } from "react-icons/fa";
import Reveal from "../Components/Reveal";
import "../Styles/About.css";

const pillars = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    text: "Responsive, accessible interfaces built with React, JavaScript and modern CSS — fast to load and pleasant to use.",
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    text: "Secure REST APIs and scalable server-side apps with Node.js, Express, Django and SQL or NoSQL databases.",
  },
];

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <Reveal className="about-intro">
          <span className="eyebrow">About me</span>
          <h2 className="section-title">
            Building modern <span className="muted">digital experiences.</span>
          </h2>
        </Reveal>

        <Reveal className="about-body" delay={0.1}>
          <p className="about-lead">
            I'm <strong>Samuel Kofi Ntem Amankwah</strong>, a Computer Science
            student at the University of Ghana who loves creating scalable,
            responsive and user-friendly software.
          </p>
          <p>
            I enjoy turning ideas into real-world applications through clean
            architecture, intuitive interfaces and modern tools. Every project
            is a chance to sharpen my problem-solving and build something
            people genuinely enjoy using.
          </p>
          <a href="#contact" className="btn-link">
            Let's talk <FaArrowRight />
          </a>
        </Reveal>
      </div>

      <div className="container pillars">
        {pillars.map((p, i) => (
          <Reveal key={p.title} className="pillar" delay={0.1 * i}>
            <span className="pillar-icon">{p.icon}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default About;
