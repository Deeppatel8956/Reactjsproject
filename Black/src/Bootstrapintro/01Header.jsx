import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <>
            
                <header id="header" className="header fixed-top bg-primary text-light">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" className="logo d-flex align-items-center">
        <img src="src/Bootstrapintro/img/logo.png" alt=""/>
        <span>FlexStart</span>
      </a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active text-dark" href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Notes</a></li>
                  <li><a href="#">Pdf</a></li>
                  <li><a href="#">Youtube</a></li>
                </ul>
              </li>
              <li><a href="#">Instagarme link</a></li>
              <li><a href="#">Telegrame link</a></li>
              <li><a href="#">Reaple link</a></li>
            </ul>
          </li>

          <li className="dropdown megamenu"><a href="#"><span>Mega Menu</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li>
                <a href="#">X(twitter) acount link</a>
                <a href="#">Course</a>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Bootstrap 5 Course</a>
                <a href="#">AI course</a>
                <a href="#">React course</a>
              </li>
              <li>
                <a href="#">HTML</a>
                <a href="#">CSS</a>
                <a href="#">J.S</a>
              </li>
              <li>
                <a href="#">Column 4 link 1</a>
                <a href="#">Column 4 link 2</a>
                <a href="#">Column 4 link 3</a>
              </li>
            </ul>
          </li>

          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header> 
            </>
        );
    }
}
export default Header;