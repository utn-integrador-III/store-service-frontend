import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <button
            onClick={() => handleNavigation("/")}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <h2 style={{ color: "var(--white)", margin: 0 }}>BookingStore</h2>
          </button>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation("/")}
                style={{ background: "none", border: "none" }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation("/negocio/1")}
                style={{ background: "none", border: "none" }}
              >
                Business #1
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => handleNavigation("/negocio/2")}
                style={{ background: "none", border: "none" }}
              >
                Business #2
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
                style={{ background: "none", border: "none" }}
              >
                About
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
                style={{ background: "none", border: "none" }}
              >
                Contact
              </button>
            </li>
          </ul>

          <div className="navbar-actions">
            <button
              className="btn-login"
              onClick={() => handleNavigation("/forms/login")}
            >
              Login
            </button>
            <button
              className="btn-signup"
              onClick={() => handleNavigation("/forms/registersusers")}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div
          className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
