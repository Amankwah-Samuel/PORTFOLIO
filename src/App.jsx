import React from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;
