import { profile } from "../data/profile.js";

const focusAreas = [
  "Web development",
  "Problem solving",
  "Data Structures & Algorithms",
  "Building practical applications",
  "Software development",
  "Learning new technologies",
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-copy">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <span className="kicker">About</span>
            <h2>A developer who likes finishing things.</h2>
          </div>
          <p>{profile.summary}</p>
          <p>
            I'm an MCA graduate drawn to the full stack — from designing a
            database schema to shipping the interface that sits on top of it.
            Most of what I know comes from building: real projects, real
            bugs, and a steady habit of working through Data Structures &
            Algorithms problems to keep my fundamentals sharp.
          </p>

          <ul className="about-focus">
            {focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="profile-card">
          <div className="row">
            <span>Role</span>
            <span>{profile.role}</span>
          </div>
          <div className="row">
            <span>Location</span>
            <span>{profile.location}</span>
          </div>
          <div className="row">
            <span>Email</span>
            <span>{profile.email}</span>
          </div>
          <div className="row">
            <span>Open to opportunities</span>
            <span>
              <span className="status-dot" />
              {profile.openToWork ? "Yes" : "Not currently"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
