import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer on-ink">
      <div className="container">
        <div className="footer-brand">
          {profile.name}
          <span className="role">{profile.role}</span>
        </div>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <div className="footer-copy">
          © {year} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
