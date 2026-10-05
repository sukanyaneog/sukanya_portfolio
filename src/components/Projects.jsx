import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Projects</span>
          <h2>Things I've built</h2>
          <p>
            Academic projects that took me from a database schema to a working
            interface, end to end.
          </p>
        </div>

        {projects.map((project, i) => (
          <div
            className={`project-row${i % 2 === 1 ? " reverse" : ""}`}
            key={project.id}
          >
            <div className="project-media">
              <span className="tag">// {project.tag}</span>
              <div>{project.type}</div>
            </div>

            <div className="project-body">
              <h3>{project.name}</h3>
              <p className="desc">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              <ul className="project-features">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <Github size={15} /> Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost btn-sm"
                  >
                    <ExternalLink size={15} /> Live demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
