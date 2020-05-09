import React, { Component } from 'react';
import './App.css';
import './Responsive.css';
import github from './img/github-logo.png'
import linkedin from './img/linkedin-logo.png'
import email from './img/email-logo.png'

class Footer extends Component {
  state={
    github: github,
    linkedin: linkedin,
    email: email
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">
          Get in touch!
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://github.com/vhs2708" target="_blank" rel="noopener noreferrer">
              <img className="github" src={this.state.github} alt="Github Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/vhs2708/" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={this.state.linkedin} alt="Linkedin Logo"/>
            </a>
          </div>
          <div className="social-last">
            <a href="mailto:veronicahvaalstigen@gmail.com" target="_blank" rel="noopener noreferrer">
              <img className="email" src={this.state.email} alt="Email Logo"/>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2020, Veronica Hvaal Stigen
        </div>
      </div>
    );
  }
}

export default Footer;