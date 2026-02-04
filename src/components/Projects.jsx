import "../styles/Projects.css";

const projects = [
  {
    name: "Project Horizon",
    description:
      "A product roadmap dashboard concept for teams to align on goals and releases.",
    link: "https://github.com/yourname/project-horizon",
    tag: "React",
  },
  {
    name: "Local Market Hub",
    description:
      "A modern landing page for local vendors to showcase products and accept inquiries.",
    link: "https://github.com/yourname/local-market-hub",
    tag: "JavaScript",
  },
  {
    name: "Insight Portfolio",
    description:
      "A clean portfolio template designed for freelancers to highlight services and testimonials.",
    link: "https://github.com/yourname/insight-portfolio",
    tag: "HTML & CSS",
  },
];

function Projects() {
  return (
    <section id="projects" className="section section-alt reveal">
      {/* Project cards with hover effects */}
      <div className="container">
        <div className="section-heading">
          <h2>Projects</h2>
          <p>Samples of work that show how I solve real-world problems.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-header">
                <h3>{project.name}</h3>
                <span className="project-tag">{project.tag}</span>
              </div>
              <p>{project.description}</p>
              <a className="btn btn-link" href={project.link}>
                View GitHub Repo →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
