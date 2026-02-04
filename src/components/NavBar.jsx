import "../styles/NavBar.css";

function NavBar({ links, theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="#home">
          Samson Opondo
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <a className="btn btn-secondary" href="#contact">
            Hire Me
          </a>
          <button
            className="theme-toggle"
            type="button"
            aria-pressed={theme === "light"}
            onClick={onToggleTheme}
          >
            <span className="toggle-track">
              <span className="toggle-thumb" />
            </span>
            <span className="toggle-label">
              {theme === "dark" ? "Dark" : "Light"} Mode
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
