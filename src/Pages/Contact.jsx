import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import Reveal from "../Components/Reveal";
import "../Styles/Contact.css";

const EMAIL = "samuelamankwah157@gmail.com";

const details = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+233 537 387 548",
    href: "tel:+233537387548",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Accra, Ghana",
  },
];

const socials = [
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/Amankwah-Samuel" },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/samuel-amankwah-785341323",
  },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/233537387548" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Opens the visitor's mail app with the message pre-filled.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Hello from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">
            Let's build something <span className="muted">great together.</span>
          </h2>
          <p className="section-lead">
            Have a project, an internship opportunity or a collaboration in mind
            — or just want to say hello? I'd love to hear from you.
          </p>
        </Reveal>

        <div className="contact-grid">
          <Reveal className="contact-side">
            <div className="availability">
              <span className="status-dot" />
              <div>
                <h3>Currently available</h3>
                <p>Open to internships, freelance work and collaborations.</p>
              </div>
            </div>

            <ul className="contact-details">
              {details.map((d) => (
                <li key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <small>{d.label}</small>
                    {d.href ? <a href={d.href}>{d.value}</a> : <span>{d.value}</span>}
                  </div>
                </li>
              ))}
            </ul>

            <div className="contact-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal as="form" className="contact-form" delay={0.1} onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="field">
                <span>Full name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={update}
                  required
                />
              </label>
              <label className="field">
                <span>Email address</span>
                <input
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={update}
                  required
                />
              </label>
            </div>

            <label className="field">
              <span>Subject</span>
              <input
                name="subject"
                type="text"
                placeholder="Project discussion"
                value={form.subject}
                onChange={update}
              />
            </label>

            <label className="field">
              <span>Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project…"
                value={form.message}
                onChange={update}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary send-btn">
              <FaPaperPlane /> Send message
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
