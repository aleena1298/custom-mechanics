import "./Navbar.css";
import logo from "../../assets/images/logo.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const mainLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Marketplace",
    path: "/marketplace",
  },
  {
    label: "Accessories",
    path: "/accessories",
  },
];

const serviceLinks = [
  {
    label: "Accident Repair",
    path: "/accidentrepair",
  },
  {
    label: "Bike Battery Replacement",
    path: "/batteryreplacement",
  },
  {
    label: "Brake Repair",
    path: "/brakerepair",
  },
  {
    label: "Carburetor Cleaning & Oil change",
    path: "/carburetorandoil",
  },
  {
    label: "Engine Repair",
    path: "/enginerepair",
  },
  {
    label: "TCD Testing and Renewal",
    path: "/tcdtesting",
  },
];

function HamburgerIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="hamburger-line"
        style={{
          transform: open
            ? "rotate(45deg) translate(5px, 5px)"
            : "none",
          transformOrigin: "center",
          transition: "transform 0.3s ease",
        }}
      />

      <path
        d="M4 12H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="hamburger-line"
        style={{
          opacity: open ? 0 : 1,
          transition: "opacity 0.2s ease",
        }}
      />

      <path
        d="M4 18H20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        className="hamburger-line"
        style={{
          transform: open
            ? "rotate(-45deg) translate(5px, -5px)"
            : "none",
          transformOrigin: "center",
          transition: "transform 0.3s ease",
        }}
      />
    </svg>
  );
}

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);

    setMenuOpen(false);
    setServicesOpen(false);
  };

  const NavLinks = ({ mobile = false }) => {
    return (
      <div
        className={`nav-links ${mobile
            ? "nav-links-mobile"
            : "nav-links-desktop"
          }`}
      >
        {mainLinks.map((link) => (
          <a
            key={link.path}
            className="nav-link"
            onClick={() => goTo(link.path)}
          >
            {link.label}
          </a>
        ))}

        <div className="services-container">
          <button
            className="nav-link"
            onClick={() => {
              if (mobile) {
                setServicesOpen(
                  (previous) => !previous
                );
              }
            }}
          >
            Services

            <span
              className={`chevron-wrapper ${mobile && servicesOpen
                  ? "chevron-open"
                  : ""
                }`}
            >
              <svg
                className="chevron"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>

          <div
            className={`services-dropdown ${mobile && servicesOpen
                ? "services-dropdown-mobile-active"
                : ""
              }`}
          >
            {serviceLinks.map((link) => (
              <a
                key={link.path}
                className="dropdown-link"
                onClick={() => goTo(link.path)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LOGO */}
        <div className="logo-wrapper">
          <a
            href="#"
            className="logo-link"
            onClick={() => navigate("/")}
          >
            <img
              src={logo}
              alt="Custom Mechanics Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* DESKTOP */}
        <div className="desktop-nav">
          <NavLinks />

          <Link to="/booknow" className="book-now-button">
            Book Now
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <div className="mobile-menu-button-container">
          <button
            className="mobile-menu-button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(
                (previous) => !previous
              )
            }
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen
            ? "mobile-menu-open"
            : ""
          }`}
      >
        <div className="mobile-menu-content">
          <NavLinks mobile />
          <Link to="/booknow" className="book-now-button">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}