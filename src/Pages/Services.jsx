import React from "react";
import Card from "../Components/Card";
import "../Styles/Services.css";
import Reactpic from "../assets/react.svg";
import Photoshop from "../assets/photoshop.png";
import appDev from "../assets/app-development.png";
import Mentorship from "../assets/leadership-development.png";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
import portfolio from "../assets/portfolio.png";
import js from "../assets/js.png";
import django from "../assets/django.png";
import python from "../assets/python.png";
import database from "../assets/database.png";

const Services = () => {
  const projectData = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio built with React and Tailwind CSS.",
      image: portfolio,
      liveLink: "https://samuelamankwah.netlify.app/",
      codeLink: "https://github.com/Sammy-157/MY-PORTFOLIO.git",
    },
    {
      id: 2,
      title: "E-commerce Store 1 ",
      description: "A simple online shop made using React & Firebase.",
      image: logo,
      liveLink: "https://girlhood.netlify.app/",
      codeLink: "https://github.com/Sammy-157/Fashion-Shop.git",
    },
    {
      id: 2,
      title: "Not uploaded yet ",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Not uploaded yet ",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Not uploaded yet ",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Not uploaded yet ",
      description: "A simple online shop made using React & Firebase.",
      image: "https://via.placeholder.com/300x200",
      liveLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <motion.div
      className="services-div"
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="myservices-div">
        <h1>MY SKILLS 😎</h1>
      </div>

      <div className="all-devs">
        <div className="devs-1">
          <Card
            pic={Reactpic}
            heading="REACT JS"
            info=""
            bgColor="#FFFFFF"
          />

          <Card pic={django} heading="DJANGO" info="" bgColor="#FFFFFF" />
          

          <Card pic={js} heading="JAVASCRIPT" info="" bgColor="#FFFFFF" />
        </div>

        <div className="devs-2">
          <Card
            pic={database}
            heading="DATABASE "
            info=""
            bgColor="#FFFFFF"
          />

          <Card pic={Photoshop} heading="PHOTOSHOP" info="" bgColor="#FFFFFF" />
          <Card
            pic={python}
            heading="PYTHON"
            info=""
            bgColor="#FFFFFF"
          />
        </div>
      </div>

      <div className="projects-section" id="projects">
        <h1 className="projects-title">MY PROJECTS </h1>
        <div className="projects-grid">
          {projectData.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="project-buttons">
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
