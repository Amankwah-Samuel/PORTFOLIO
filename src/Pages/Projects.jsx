import React from "react";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import Reveal from "../Components/Reveal";
import "../Styles/Projects.css";

// Leave `live` or `github` as "" until the link is ready — the button will
// show as "Coming soon" automatically.
const projects = [
  {
    title: "Football Quiz App",
    category: "Mobile app",
    description:
      "An interactive football trivia quiz that tests your knowledge of players, clubs and tournaments, with instant feedback and score tracking.",
    live: "https://expo.dev/accounts/samuel-10/projects/quizapp/builds/b21346cf-ef11-43bf-85a7-1f085df4a168",
    github: "https://github.com/Amankwah-Samuel/FOOTBALL-QUIZ-APP",
  },
  {
    title: "Girlhood Fashion Store",
    category: "E-commerce",
    description:
      "An e-commerce front end with responsive product pages and a clean shopping experience for an online fashion store.",
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
            <h2 className="section-title">Things I&apos;ve built.</h2>
          </div>
          <p className="section-lead">
            Projects I&apos;ve built while learning, experimenting and solving
            real-world problems.
          </p>
        </Reveal>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <Reveal as="article" key={p.title} className="project-card" delay={0.1 * i}>
              <div className="project-top">
                <span className="project-index">0{i + 1}</span>
                <span className="project-category">{p.category}</span>
              </div>

              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="project-links">
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-link">
                    Live demo <FaArrowRight />
                  </a>
                ) : (
                  <span className="project-soon">Live demo coming soon</span>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="project-gh">
                    <FaGithub /> Source
                  </a>
                )}
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
