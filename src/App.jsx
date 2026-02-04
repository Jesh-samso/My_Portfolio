import { useEffect, useMemo, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const THEME_STORAGE_KEY = "portfolio-theme";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(THEME_STORAGE_KEY) || "dark";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const navLinks = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  return (
    <div className="app">
      {/* Sticky navigation with theme toggle */}
      <NavBar links={navLinks} theme={theme} onToggleTheme={toggleTheme} />

      <main>
        {/* Landing section */}
        <Hero />
        {/* About section */}
        <About />
        {/* Skills section */}
        <Skills />
        {/* Projects section */}
        <Projects />
        {/* Contact section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
