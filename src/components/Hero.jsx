import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Hero() {
  const firstName = profile.name.split(" ")[0];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div>
          <div className="hero-eyebrow">// portfolio</div>
          <h1>
            Hi, I'm {firstName}.
            <br />
            I build things <em>for the web.</em>
          </h1>
          <div className="role">{profile.role}</div>
          <p className="desc">
            Passionate software developer focused on building responsive,
            user-friendly, and scalable web applications using modern
            technologies.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>

          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={17} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={17} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Send an email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        <div className="term-card" aria-hidden="true">
          <div className="term-bar">
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-dot" />
          </div>
          <div className="term-body">
            <span className="p">1</span> <span className="k">const</span> developer = {"{"}
            {"\n"}
            <span className="p">2</span> {"  "}name: <span className="s">"{profile.name}"</span>,{"\n"}
            <span className="p">3</span> {"  "}role: <span className="s">"Software Developer"</span>,{"\n"}
            <span className="p">4</span> {"  "}stack: [<span className="s">"React"</span>, <span className="s">"Node"</span>, <span className="s">"Java"</span>, <span className="s">"MySQL"</span>],{"\n"}
            <span className="p">5</span> {"  "}focus: <span className="s">"clean, scalable code"</span>,{"\n"}
            <span className="p">6</span> {"}"};<span className="term-cursor" />
          </div>
        </div>
      </div>
    </section>
  );
}
