
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun, ChevronRight, Code } from "lucide-react"
import "./Home.css"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Toggle menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark-mode")
  }

  // Track mouse position for interactive hero
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Sample projects data
  const projects = [
    { id: 1, title: "Weather App", path: "/weather-app" },
    { id: 2, title: "Todo List", path: "/todo-list" },
    { id: 3, title: "Calculator", path: "/calculator" },
    { id: 4, title: "Image Gallery", path: "/image-gallery" },
    { id: 5, title: "Quiz App", path: "/quiz-app" },
    { id: 6, title: "Pomodoro Timer", path: "/pomodoro-timer" },
  ]

  return (
    <div className={`app-container ${isDarkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <div className="logo">
          <Code className="logo-icon" />
          <span>React Projects</span>
        </div>

        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <Sun /> : <Moon />}
          </button>

          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="menu-nav">
          <h2>Projects</h2>
          <ul className="menu-projects">
            {projects.map((project) => (
              <li key={project.id}>
                <a href={project.path} className="menu-link">
                  {project.title}
                  <ChevronRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Interactive Hero Section */}
      <section className="hero">
        <div
          className="interactive-background"
          style={{
            background: `radial-gradient(
              circle at ${mousePosition.x}px ${mousePosition.y}px,
              var(--accent-light) 0%,
              transparent 50%
            )`,
          }}
        ></div>

        <div className="hero-content">
          <h1 className="hero-title">My React Machine Code Projects Compilation</h1>
          <p className="hero-subtitle">A collection of interactive React interview projects</p>

          <div className="floating-elements">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="floating-element"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`,
                }}
              >
                {["</>", "{}", "[]", "()"][Math.floor(Math.random() * 4)]}
              </div>
            ))}
          </div>
        </div>

        <div className="projects-preview">
          <div className="preview-grid">
            {projects.map((project) => (
              <a href={project.path} key={project.id} className="preview-item">
                <span>{project.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
