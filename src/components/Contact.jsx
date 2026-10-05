import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

const emptyForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!form.email.trim()) {
      next.email = "Enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) next.subject = "Enter a subject.";
    if (!form.message.trim()) next.message = "Write a short message.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // NOTE: This form is frontend-only. No email is actually sent.
      // Wire this up to a backend or a service like Formspree/EmailJS
      // to make it functional, then update this handler.
      setSubmitted(true);
      setForm(emptyForm);
    }
  }

  return (
    <section id="contact" className="contact on-ink">
      <div className="container">
        <div className="contact-info">
          <span className="kicker">Contact</span>
          <h2>Let's build something together.</h2>
          <p>
            I'm currently open to opportunities, collaborations, and
            interesting software development projects.
          </p>

          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>
              <Mail size={17} /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="field full">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(e) => update("subject", e.target.value)}
              />
              {errors.subject && <span className="error">{errors.subject}</span>}
            </div>

            <div className="field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          <p className="form-note">
            This form validates your input but doesn't send email yet — connect
            it to a backend or a service like Formspree or EmailJS to make it
            functional.
          </p>
          {submitted && (
            <p className="form-success">
              Thanks — your message looks good. (Wire up a backend to actually
              deliver it.)
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
