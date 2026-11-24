import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Reveal from "../Components/Reveal";
import "../Styles/Projects.css";

import portfolio from "../assets/portfolio.png";
import logo from "../assets/logo.jpg";

const projects = [
  {
    title: "Portfolio Website",
    category: "Personal site",
    description:
      "A responsive portfolio showcasing my projects, skills and experience as a software developer.",
    image: portfolio,
    technologies: ["React", "CSS", "Framer Motion"],
    live: "https://samuelamankwah.netlify.app/",
    github: "https://github.com/Amankwah-Samuel/PORTFOLIO",
  },
  {
    title: "Girlhood Fashion Store",
    category: "E-commerce",
    description:
      "An e-commerce front end with responsive product pages and a clean shopping experience for an online fashion store.",
    image: logo,
    technologies: ["React", "JavaScript", "Firebase"],
    live: "https://girlshood.vercel.app/",
    github: "https://github.com/Amankwah-Samuel/fashionShop",
  },
];

const Projects = () => {
  return (
    <section className="section projects" id="projects">
      <div className="container">
        <Reveal className="section-head projects-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">
              Things I've built.
            </h2>
          </div>
          <p className="section-lead">
            Projects I've built while learning, experimenting and solving
            real-world problems.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.title} className="project-card" delay={0.1 * i}>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="project-media"
                aria-label={`Open ${p.title} live site`}
              >
                <img src={p.image} alt="" loading="lazy" />
              </a>

              <div className="project-body">
                <span className="project-category">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>

                <div className="project-tags">
                  {p.technologies.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-link">
                    Live demo <FaArrowRight />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-gh"
                  >
                    <FaGithub /> Source
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-more" delay={0.1}>
          <a
            href="https://github.com/Amankwah-Samuel"
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            <FaGithub /> More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
