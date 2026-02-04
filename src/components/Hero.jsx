import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home" className="hero section reveal">
      {/* Landing section content */}
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Hello, I am</p>
          <h1>Samson Opondo</h1>
          <p className="tagline">Web Developer &amp; Software Engineer</p>
          <p className="hero-description">
            I build modern websites and web apps that help businesses grow. My
            focus is on clean UI, performance, and delivering real value for
            clients and users.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View My Work
            </a>
            <a className="btn btn-secondary" href="#contact">
              Hire Me
            </a>
          </div>
          <div className="hero-highlights">
            <div>
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Projects in progress</span>
            </div>
            <div>
              <span className="highlight-number">100%</span>
              <span className="highlight-label">Focus on client outcomes</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="photo-placeholder" aria-label="Photo placeholder">
            Photo
          </div>
          <div className="card">
            <h2>Available for freelance</h2>
            <p>
              I help startups and small businesses with strategy, UI/UX, and
              development for web products.
            </p>
            <ul>
              <li>Custom landing pages &amp; portfolios</li>
              <li>Responsive web apps &amp; dashboards</li>
              <li>Optimization and maintenance</li>
            </ul>
            <a className="btn btn-primary" href="mailto:samson.opondo@email.com">
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
