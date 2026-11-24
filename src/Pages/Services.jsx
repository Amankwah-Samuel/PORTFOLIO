import React from "react";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaAws,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import Reveal from "../Components/Reveal";
import "../Styles/Services.css";

const groups = [
  {
    title: "Frontend",
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaJsSquare />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiFirebase />, name: "Firebase" },
    ],
  },
  {
    title: "Cloud & Tools",
    items: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaGithub />, name: "Git & GitHub" },
    ],
  },
];

const Services = () => {
  return (
    <section className="section stack" id="stack">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Tech stack</span>
          <h2 className="section-title">
            Tools I build with. <span className="muted">Every day.</span>
          </h2>
          <p className="section-lead">
            The languages, frameworks and platforms I use to ship responsive,
            scalable and modern web applications.
          </p>
        </Reveal>

        <div className="stack-grid">
          {groups.map((g, i) => (
            <Reveal key={g.title} className="stack-card" delay={0.08 * i}>
              <span className="stack-index">0{i + 1}</span>
              <h3>{g.title}</h3>
              <ul>
                {g.items.map((t) => (
                  <li key={t.name}>
                    {t.icon}
                    {t.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="learning" delay={0.1}>
          <span className="learning-dot" />
          <p>
            <strong>Always learning.</strong> I keep sharpening my skills by
            building projects, exploring new technologies and following
            industry best practices.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
