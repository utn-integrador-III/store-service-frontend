import React from "react";
import "../../styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">BookingStore</h3>
            <p className="footer-description">
              Your premier destination for booking services and managing
              business operations. Connect with local businesses and discover
              amazing services.
            </p>
            <div className="social-links">
              <a
                href="https://facebook.com"
                className="social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                className="social-link"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="/services/booking" className="footer-link">
                  Business Booking
                </a>
              </li>
              <li>
                <a href="/services/management" className="footer-link">
                  Service Management
                </a>
              </li>
              <li>
                <a href="/support" className="footer-link">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="/analytics" className="footer-link">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="footer-link">
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className="footer-link">
                  Press
                </a>
              </li>
              <li>
                <a href="/blog" className="footer-link">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li>
                <a href="/help" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="footer-link">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 BookingStore. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="/privacy" className="footer-bottom-link">
                Privacy
              </a>
              <a href="/terms" className="footer-bottom-link">
                Terms
              </a>
              <a href="/cookies" className="footer-bottom-link">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
