import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      const sectionInView = Object.keys(sectionRefs.current).find((sectionId) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView =
            rect.top >= 0 &&
            rect.top < window.innerHeight / 2 &&
            rect.bottom > 0;
          return isInView;
        }
        return false;
      });
      setActiveSection(sectionInView || null);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Certificates", path: "/#certificates-section" }, 
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path) => {
    const sectionId = path.split("#")[1];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setToggle(false);
  };

  // Store refs for sections
  useEffect(() => {
    navItems.forEach((item) => {
      const sectionId = item.path.split("#")[1];
      sectionRefs.current[sectionId] = document.getElementById(sectionId);
    });
  }, [navItems]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : "transparent"}`}>
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setToggle(false);
          }}
        ></Link>

        <ul className="nav-list desktop">
          {navItems.map((item) => {
            const sectionId = item.path.split("#")[1];
            return (
              <li key={item.name} className="nav-item">
                <div
                  className={`nav-link ${
                    activeSection === sectionId ? "active" : "inactive"
                  }`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="menu-toggle mobile">
          <button
            aria-label={toggle ? "Close menu" : "Open menu"}
            className="menu-icon"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`mobile-menu ${toggle ? "show" : "hide"}`}>
            <ul className="mobile-nav-list">
              {navItems.map((item) => {
                const sectionId = item.path.split("#")[1];
                return (
                  <li key={item.name} className="mobile-nav-item">
                    <div
                      className={`mobile-nav-link ${
                        activeSection === sectionId ? "active" : "inactive"
                      }`}
                      onClick={() => handleNavClick(item.path)}
                    >
                      {item.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;