import "../styles/Projects.css";

const projects = [
  {
    name: "TechCon Website",
    description:
      "A responsive event website with speakers,schedules and registration layout.",
    link: "https://techcon-website.vercel.app/",
    tag: "HTML & CSS",
  },
  {
    name: "Student-Budget-Tracker",
    description:
      "An app design to help university students to track and review their financial spending for better financial discipline.",
    link: "https://student-budget-tracker-opal.vercel.app/",
    tag: "React",
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
                View The Project Here →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
