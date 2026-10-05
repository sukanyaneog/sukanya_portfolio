const milestones = [
  {
    title: "Java & DSA practice",
    detail:
      "Working through core Java and Data Structures & Algorithms to build a solid problem-solving foundation.",
  },
  {
    title: "LeetCode problem solving",
    detail:
      "Regular practice on arrays, strings, hashing, and pattern-based problems to stay sharp.",
  },
  {
    title: "Web development projects",
    detail:
      "Built ChatyApp and QRify end to end — from database design to a working, deployed-style interface.",
  },
  {
    title: "React development",
    detail:
      "Moved from static pages to component-based interfaces, learning state, hooks, and reusable UI patterns.",
  },
  {
    title: "Database projects",
    detail:
      "Designed and queried MySQL and MongoDB schemas for real project data — not just tutorials.",
  },
  {
    title: "GitHub coding practice",
    detail:
      "Keeping projects version-controlled and public, with a habit of committing consistently.",
  },
  {
    title: "100 Days of Coding",
    detail:
      "Working through a self-directed daily coding challenge to build consistency and depth.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="on-ink">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Development journey</span>
          <h2>How I got here</h2>
          <p>
            No professional roles yet — just a steady, hands-on habit of
            building, breaking, and fixing things.
          </p>
        </div>

        <div className="timeline">
          {milestones.map((m) => (
            <div className="timeline-item" key={m.title}>
              <h4>{m.title}</h4>
              <p>{m.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
