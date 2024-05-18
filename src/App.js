import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLightbulb,
  faFileExport,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Router basename="/portfolio">
      <div className="content">
        <header className="header">
          <nav className="nav">
            <div className="navbar">
              <div className="head">
                <h1>Portfolio</h1>
              </div>
              <div className={`menu1 ${menuOpen ? "open" : ""}`}>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faUser} />
                  <Link to="/About">About</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faLightbulb} />
                  <Link to="/Skills">Skills</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faLightbulb} />
                  <Link to="/Experience">Experience</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faFileExport} />
                  <Link to="/Projects">Projects</Link>
                </div>
                <div className="home" onClick={handleLinkClick}>
                  <FontAwesomeIcon icon={faFileExport} />
                  <Link to="/Achievements">Achievements</Link>
                </div>
              </div>
              <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Achievements" element={<Achievements />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
