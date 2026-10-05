import { ArrowUpRight } from "lucide-react";

const education = [
  {
    year: "2023 – 2026",
    degree: "Master of Computer Applications (MCA)",
    school: "Vellore Institute of Technology Bhopal University, Madhya Pradesh",
    courses: ["DSA", "DBMS", "Java", "Web Development", "Software Engineering"],
  },
  {
    year: "2020 – 2023",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Saint Mary's College, Shillong, Meghalaya",
    courses: ["Programming Fundamentals", "Database Management Systems", "Web Development"],
  },
  {
    year: "2019",
    degree: "12th Grade (CBSE)",
    school: "Kendriya Vidyalaya Khanapara, Guwahati, Assam",
    courses: [],
  },
];

const certifications = [
  { name: "Java", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/f072aa76947e" },
  { name: "Python", issuer: "HackerRank", url: "https://www.hackerrank.com/certificates/f6d0aa8d3b58" },
  { name: "Introduction to Generative AI", issuer: "IBM", url: "https://skills.yourlearning.ibm.com/certificate/MDL-388" },
  {
    name: "Google Cloud Generative AI (Virtual Internship)",
    issuer: "SmartBridge",
    url: "https://skillwallet.smartinternz.com/certificate/virtual-internship/ce237f105cfd8a85689cc0481d9d7303",
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Education</span>
          <h2>Academic background</h2>
        </div>

        <div className="edu-list">
          {education.map((e) => (
            <div className="edu-item" key={e.degree}>
              <div className="edu-year">{e.year}</div>
              <div>
                <h3>{e.degree}</h3>
                <div className="school">{e.school}</div>
                {e.courses.length > 0 && (
                  <div className="edu-courses">
                    {e.courses.map((c) => (
                      <span key={c}>{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="certs">
          <h3>Certifications & training</h3>
          <div className="cert-list">
            {certifications.map((c) => (
              <a href={c.url} target="_blank" rel="noreferrer" key={c.name}>
                <span>
                  {c.name} <span style={{ color: "var(--text-soft)" }}>· {c.issuer}</span>
                </span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
