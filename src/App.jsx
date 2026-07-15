import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; 
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Home />      
        <Services />  
        <Projects/>
        <About />     
        <Contact />   

      </div>
      <Footer />
    </Router>
  );
}

export default App;
