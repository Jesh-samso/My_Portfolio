import "../styles/About.css";

function About() {
  return (
    <section id="about" className="section section-alt reveal">
      {/* About section copy and highlights */}
      <div className="container about-grid">
        <div>
          <h2>About Me</h2>
          <p>
            I am a web developer who is learning, building, and shipping real
            projects. I enjoy collaborating with clients to turn ideas into
            simple, powerful digital experiences.
          </p>
          <p>
            My focus is on solving real-world problems through technology and
            delivering work that is reliable, scalable, and easy to maintain.
          </p>
        </div>
        <div className="about-card">
          <div className="photo-placeholder" aria-label="Photo placeholder">
            Photo
          </div>
          <h3>What I bring</h3>
          <ul>
            <li>Clear communication and goal alignment</li>
            <li>Strong attention to detail and usability</li>
            <li>Reliable delivery from concept to launch</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
