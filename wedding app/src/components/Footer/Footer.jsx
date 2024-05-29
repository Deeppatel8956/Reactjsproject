import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-section">
          <h2>LOGO</h2>
          <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="links-section">
          <div>
            <h3>Lorem ipsum</h3>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
            </ul>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <ul>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              <li><a href="#">Lorem ipsum</a></li>
              {/* <li><a href="#">Lorem ipsum</a></li> */}
            </ul>
          </div>
          <div>
            <h3>Lorem ipsum</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Site Map</a></li>
              <li><a href="#">Copyright Statement</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li><a href="mailto:info@bform.com">info@bform.com</a></li>
              <li><a href="tel:6825873025">682-587-3025</a></li>
              <li><a href="#">6116 Willa River Suite 610</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="#">Terms and conditions</a>
        <p>©2023 - Mangal Bazaar | All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
