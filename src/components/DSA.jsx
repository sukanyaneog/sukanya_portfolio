import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile.js";

const topics = [
  "Arrays",
  "Strings",
  "HashMap",
  "HashSet",
  "Two Pointers",
  "Sliding Window",
  "Prefix Sum",
  "Frequency Counting",
  "Kadane's Algorithm",
];

export default function DSA() {
  const link = profile.leetcode || profile.github;

  return (
    <section id="dsa">
      <div className="container">
        <div className="section-head">
          <span className="kicker">Problem solving</span>
          <h2>Data Structures & Algorithms</h2>
          <p>
            I regularly practice Data Structures and Algorithms to strengthen
            my problem-solving and coding skills.
          </p>
        </div>

        <div className="dsa-tags">
          {topics.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <a href={link} target="_blank" rel="noreferrer" className="btn btn-ghost">
          View my practice on GitHub <ArrowUpRight size={15} />
        </a>
      </div>
    </section>
  );
}
