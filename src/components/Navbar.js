import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", path: "/#about" },
    { name: "Work", path: "/#work" },
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
        >
        </Link>

        <ul className="nav-list desktop">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <div
                className={`nav-link ${location.hash === `#${item.name.toLowerCase()}`
                    ? "active"
                    : "inactive"
                  }`}
                onClick={() => handleNavClick(item.path)}
              >
                {item.name}
              </div>
            </li>
          ))}
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
              {navItems.map((item) => (
                <li key={item.name} className="mobile-nav-item">
                  <div
                    className={`mobile-nav-link ${location.hash === `#${item.name.toLowerCase()}`
                        ? "active"
                        : "inactive"
                      }`}
                    onClick={() => handleNavClick(item.path)}
                  >
                    {item.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;