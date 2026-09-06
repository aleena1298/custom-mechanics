import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo-wrapper">
          <a href="/" className="logo-link">
            <img
              src={logo}
              alt="Custom Mechanics Logo"
              className="logo-img"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-links nav-links-desktop">

            <a href="/" className="nav-link">
              Home
            </a>

            <a href="/marketplace" className="nav-link">
              Marketplace
            </a>

            <a href="/accessories" className="nav-link">
              Accessories
            </a>

            <div className="services-container">
              <button className="nav-link">
                Services

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
              </button>

              <div className="services-dropdown">
                <a href="/accidentrepair" className="dropdown-link">
                  Accident Repair
                </a>

                <a href="/batteryreplacement" className="dropdown-link">
                  Bike Battery Replacement
                </a>

                <a href="/brakerepair" className="dropdown-link">
                  Brake Repair
                </a>

                <a href="/carburetorandoil" className="dropdown-link">
                  Carburetor Cleaning & Oil change
                </a>

                <a href="/enginerepair" className="dropdown-link">
                  Engine Repair
                </a>

                <a href="/tcd" className="dropdown-link">
                  TCD Testing and Renewal
                </a>
              </div>
            </div>
          </div>

          <a href="/book-now" className="book-now-button">
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-menu-button-container">
          <button
            className="mobile-menu-button"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      <div
  className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}
  id="mobile-menu">
    
        <div className="mobile-menu-content">

          <div className="nav-links nav-links-mobile">
            <a href="/" className="nav-link">
              Home
            </a>

            <a href="/marketplace" className="nav-link">
              Marketplace
            </a>

            <a href="/accessories" className="nav-link">
              Accessories
            </a>

            <div className="services-container">
              <button className="nav-link">
                Services

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
              </button>

              <div className="services-dropdown">
                <a href="/accidentrepair" className="dropdown-link">
                  Accident Repair
                </a>

                <a href="/batteryreplacement" className="dropdown-link">
                  Bike Battery Replacement
                </a>

                <a href="/brakerepair" className="dropdown-link">
                  Brake Repair
                </a>

                <a href="/carburetorservice" className="dropdown-link">
                  Carburetor Cleaning & Oil change
                </a>

                <a href="/enginerepair" className="dropdown-link">
                  Engine Repair
                </a>

                <a href="/tcd" className="dropdown-link">
                  TCD Testing and Renewal
                </a>
              </div>
            </div>
          </div>

          <a
            href="/book-now"
            className="book-now-button book-now-mobile"
          >
            Book Now
          </a>

        </div>
      </div>
    </nav>
  );
}