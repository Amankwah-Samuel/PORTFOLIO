import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "../Styles/Projects.css";

import portfolio from "../assets/portfolio.png";
import logo from "../assets/logo.jpg";

const Projects = () => {

  const projects = [

    {
      title: "Portfolio Website",

      description:
        "A modern responsive portfolio showcasing my projects, skills and experience as a software developer.",

      image: portfolio,

      technologies: [
        "React",
        "CSS",
        "Framer Motion",
      ],

      live:
        "https://samuelamankwah.netlify.app/",

      github:
        "https://github.com/Amankwah-Samuel/PORTFOLIO",
    },

    {
      title: "Girlhood Fashion Store",

      description:
        "An e-commerce frontend with responsive pages and clean UI for an online fashion store.",

      image: logo,

      technologies: [
        "React",
        "JavaScript",
        "Firebase",
      ],

      live:
        "https://girlhood.netlify.app/",

      github:
        "https://github.com/Sammy-157/Fashion-Shop",
    },

  ];

  return (

    <section
      className="projects-section"
      id="projects"
    >

      <motion.div
        className="projects-header"
        initial={{opacity:0,y:-40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:.7}}
        viewport={{once:true}}
      >

        <span className="section-tag">
          Featured Projects
        </span>

        <h2>
          Things I've
          <span> Built.</span>
        </h2>

        <p>
          Here are some of the projects I've built while learning,
          experimenting and solving real-world problems.
        </p>

      </motion.div>

      <div className="projects-grid">

        {projects.map((project,index)=>(

          <motion.div

            className="project-card"

            key={index}

            whileHover={{
              y:-10
            }}

          >

            <img
              src={project.image}
              alt={project.title}
            />

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="tech-stack">

              {project.technologies.map((tech,i)=>(

                <span key={i}>
                  {tech}
                </span>

              ))}

            </div>

            <div className="project-links">

              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );

};

export default Projects;