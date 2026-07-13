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

const Services = () => {
  

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
            heading="REACT DEVELOPMENT"
            info=""
            bgColor="#7c3aed"
          />

          <Card pic={django} heading="DJANGO" info="" bgColor="#FFFFFF" />
          

          <Card pic={js} heading="JAVASCRIPT" info="" bgColor="#FFFFFF" />
        </div>

        <div className="devs-2">
          <Card
            pic={Mentorship}
            heading="MENTORSHIP"
            info=""
            bgColor="#FFFFFF"
          />

          <Card pic={Photoshop} heading="PHOTOSHOP" info="" bgColor="#FFFFFF" />
          <Card
            pic={appDev}
            heading="APP DEVELOPMENT"
            info=""
            bgColor="#FFFFFF"
          />
        </div>
      </div>

      
    </motion.div>
  );
};

export default Services;
