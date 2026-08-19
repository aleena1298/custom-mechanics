import React from "react";
import "./Footer.css";

import logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content-grid">

        <div className="footer-logo-column">
          <img
            src={logo}
            alt="Custom Mechanics Logo"
            className="footer-logo"
          />

          <p className="footer-logo-contact">
            441.505.5053
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">
            Pages
          </h4>

          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Bikes Marketplace
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">
            Contact
          </h4>

          <ul className="footer-list">
            <li>441.505.5053</li>

            <li>
              contact@custommechanicsltd.com
            </li>

            <li>
              @custommechanicsstd
            </li>

            <li>
              5 Jackson’s Way, Hamilton, Bermuda
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4 className="footer-heading">
            Blogs
          </h4>

          <ul className="footer-list">
            <li>TCD Testing</li>
            <li>Brakes Repairs</li>
            <li>Engine Repairing</li>
            <li>Oil &amp; Fluid Change</li>
          </ul>
        </div>

      </div>
    </footer>
  );
}