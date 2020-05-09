import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import profile from "./img/profile.png";
import resume from "./Veronica_Hvaal_Stigen_CV.pdf";
import link from "./img/link-icon.svg"

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="veronica"><Link to="/" className="active">Veronica Hvaal Stigen</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile"><Link to="/">Work</Link></div>
                <div className="updates-mobile"><Link to="/updates">Updates</Link></div>
                <div className="about-mobile"><Link to="/about" className="active">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/">Work</Link></div>
              <div className="updates"><Link to="/updates">Updates</Link></div>
              <div className="about"><Link to="/about" className="active">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Software Developer
          </div>
          <div className="speciality">
          Full-Stack / Front-End Development
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image"/>
            {window.innerWidth<=1009 ?
              <div className="about-content">
                <div>
                  Hi, my name is Veronica.<br/><br/>
                  I am a Software Developer who is passionate about technology and design.
                  In the past, I have worked in fashion and interior design, and I have
                  finally pursued my lifelong dream of learning how to code, bridging the best of both worlds.<br/><br/><br/>
                </div>
                <div data-aos="">
                <span className="about-title">Design</span><br/><br/>
                  I have worked with two startups in fashion and interior design, and made both profitable.
                  Throughout the years I have helped numerous small businesses and private customers realize their design visions.
                  I am skilled in various 3D drawing programs, and have a trained eye for proportions, texture and colour.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                <span className="about-title">Marketing</span><br/><br/>
                  Through my degree in Marketing I learned to use various tools that are invaluable in optimizing
                  CMS and CRM. I've combined this knowledge with my design experience to develop successful marketing campaigns,
                  and have an excellent understanding of holistic brand vision.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                <span className="about-title">Programming</span><br/><br/>
                  As a kid I was a math nerd, and through my whole life I have been tinkering with computers. I always felt drawn to the technical
                  aspect of design, and finally decided to follow my instincts and apply to a Full-Stack developer course.
                  I am now competent in node and Javascript with various frameworks like React and Vue. I've worked extensively with CSS, HTML, and server side technologies
                  like SQL, Express and Sequelize. I am currently following a course on Java, to really sink my teeth into some heavy duty projects.
                  You can view my work and follow my progress on <a href="https://github.com/vhs2708" target="_blank" rel="noopener noreferrer">
                    my Github<img className="link-icon" src={this.state.link} alt="Link Icon"/></a>
                  , where you can also see the source code of the projects in this portfolio.<br/><br/><br/>
                  Feel free to contact me for any inquiries about my portfolio and work opportunities!
                </div>
              </div> :
              <div className="about-content">
                <div>
                  Hi, my name is Veronica.<br/><br/>
                  I am a Software Developer who is passionate about technology and design.
                  In the past, I have worked in fashion and interior design, and I have
                  finally pursued my lifelong dream of learning how to code, bridging the best of both worlds.<br/><br/><br/>
                </div>
                <div data-aos="">
                <span className="about-title">Design</span><br/><br/>
                  I have worked with two startups in fashion and interior design, and made both profitable.
                  Throughout the years I have helped numerous small businesses and private customers realize their design visions.
                  I am skilled in various 3D drawing programs, and have a trained eye for proportions, texture and colour.<br/><br/><br/>
                </div>
                <div data-aos="">
                <span className="about-title">Marketing</span><br/><br/>
                  Through my degree in Marketing I learned to use various tools that are invaluable in optimizing
                  CMS and CRM. I've combined this knowledge with my design experience to develop successful marketing campaigns,
                  and have an excellent understanding of holistic brand vision.<br/><br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title">Programming</span><br/><br/>
                  As a kid I was a math nerd, and through my whole life I have been tinkering with computers. I always felt drawn to the technical
                  aspect of design, and finally decided to follow my instincts and apply to a Full-Stack developer course.
                  I am now competent in node and Javascript with various frameworks like React and Vue. I've worked extensively with CSS, HTML, and server side technologies
                  like SQL, Express and Sequelize. I am currently following a course on Java, to really sink my teeth into some heavy duty projects.
                  You can view my work and follow my progress on <a href="https://github.com/vhs2708" target="_blank" rel="noopener noreferrer">
                    my Github<img className="link-icon" src={this.state.link} alt="Link Icon"/></a>
                  , where you can also see the source code of the projects in this portfolio.<br/><br/><br/>
                  Feel free to contact me for any inquiries about my portfolio and work opportunities!
                </div>
              </div>
            }
        </section>
        <div className="about-resume">
          <a href={resume} download className="about-download-button">DOWNLOAD CV</a>
        </div>
      </div>
    );
  }
}

export default About;