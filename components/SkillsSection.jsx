import React from "react";

const skills = [
  { name: "Next.js", percent: 90 },
  { name: "React", percent: 95 },
  { name: "TypeScript", percent: 80 },
  { name: "Tailwind CSS", percent: 85 },
  { name: "Bootstrap CSS", percent: 95 },
  { name: "JavaScript", percent: 95 },
  { name: "HTML", percent: 100 },
  { name: "CSS", percent: 100 },
  { name: "Git", percent: 80 },
  { name: "Node.js", percent: 85 },
];

export default function SkillsSection() {
  return (
    <section className="skills-section">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <h2 className="title">Skills & Technologies</h2>
      <p className="subtitle">
        The magical tools I use to bring <b>ideas to life</b>
      </p>

      <div className="skills-grid">
        {skills.map((s, i) => (
          <div className="skill-card" key={i}>
            <div className="icon">⚙️</div>

            <div className="skill-name">{s.name}</div>

            <div className="bar">
              <div
                className="fill"
                style={{ width: s.percent + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats">
        <div className="stat-box">
          <h3>12+</h3>
          <p>Technologies</p>
        </div>

        <div className="stat-box">
          <h3>15+</h3>
          <p>Projects</p>
        </div>

        <div className="stat-box">
          <h3>2+</h3>
          <p>Experience</p>
        </div>

        <div className="stat-box">
          <h3>∞</h3>
          <p>Coffee Cups</p>
        </div>
      </div>

    </section>
  );
}