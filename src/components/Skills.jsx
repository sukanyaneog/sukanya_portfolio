import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Skills</span>
          <h2>Technologies I work with</h2>
          <p>
            Grouped by where they fit in the stack — from interfaces to the
            databases underneath them.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
