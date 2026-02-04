import "../styles/Skills.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Git & GitHub", level: 70 },
];

function Skills() {
  return (
    <section id="skills" className="section reveal">
      {/* Skills list with animated progress bars */}
      <div className="container">
        <div className="section-heading">
          <h2>Skills</h2>
          <p>Tools and technologies I use to build modern web experiences.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-bar"
                  style={{ "--level": `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
