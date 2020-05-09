import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Hamburgers.css';
import Project from './Project.js';
import projectone from './img/project-tn-01.png';
import projecttwo from './img/project-tn-02.png';
import projectthree from './img/project-tn-03.png';
import projectfour from './img/project-tn-04.png';

class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
    hamburgerState: "off"
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
                <div className="work-mobile"><Link to="/" className="active">Work</Link></div>
                <div className="updates-mobile"><Link to="/updates">Updates</Link></div>
                <div className="about-mobile"><Link to="/about">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="active">Work</Link></div>
              <div className="updates"><Link to="/updates">Updates</Link></div>
              <div className="about"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Software Developer
          </div>
          <div className="speciality">
            Full-Stack / Front-End Development
          </div>
        </section>
        <section className="projects">
          {window.innerWidth<=1009 ?
            <div className="left">
              <p className="projects-intro">
                I design intuitive digital experiences<br/>in which <span className="bold">every element serves a purpose</span>.
                <br/>My aim is to bring out the <span className="bold">essence</span> of the product vision, using 
                <span className="bold"> robust, innovative and beautiful </span>solutions.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/ticketswap"
                hmwClass="hmw"
                class="project-default"
                hmw={["A Ticketswap clone", <br/>, "with a risk analysing system", <br/>, "and community features"]}
                color="rgba(11, 156, 150, 0.95)"
                title="TICKETSWAP Web Application"
                category="Web Application"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link="/memory"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={["A multiplayer web game", <br/>, "running on a live stream", <br/>, "with game logic and graphics"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Multiplayer Memory game"
                category="Web Application"
                index="1"
              />
            </div> :
            <div className="left">
             <p className="projects-intro">
                I design intuitive digital experiences<br/>in which <span className="bold">every element serves a purpose</span>.
                <br/>My aim is to bring out the <span className="bold">essence</span> of the product vision, using 
                <span className="bold"> robust, innovative and beautiful </span>solutions.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/ticketswap"
                hmwClass="hmw"
                class="project-default"
                hmw={["A Ticketswap clone", <br/>, "with a risk analysing system", <br/>, "and community features"]}
                color="rgba(11, 156, 150, 0.95)"
                title="TICKETSWAP Web Application"
                category="Web Application"
                index="0"
              />
              <Project
                aos=""
                image={this.state.projectThreeImage}
                link="/memory"
                hmwClass="hmw"
                class="project-last"
                hmw={["A multiplayer web game", <br/>, "running on a live stream", <br/>, "with game logic and graphics"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Multiplayer Memory game"
                category="Web Application"
                index="1"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Project
                aos="fade-up"
                image={this.state.projectTwoImage}
                link="/student-assessment"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["A three part entrance exam", <br/>, "for prospective", <br/>, " Codaisseur students"]}
                color="rgba(251, 192, 96, 0.95)"
                title="CODAISSEUR Student Assessment"
                category="Web Application"
                index="2"
              />
              <Project
                aos="fade-up"
                image={this.state.projectFourImage}
                link="/where"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["Explore your travel history,", <br/>, "get inspired", <br/>, "and plan future adventures"]}
                color="rgba(114, 164, 238, 0.95)"
                title="WHERE App"
                category="Web Application"
                index="3"
              />
              </div> :
            <div className="right">
              <Project
                aos=""
                image={this.state.projectTwoImage}
                link="/student-assessment"
                hmwClass="hmw"
                class="project-default"
                hmw={["A three part entrance exam", <br/>, "for prospective", <br/>, "Codaisseur students"]}
                color="rgba(251, 192, 96, 0.95)"
                title="CODAISSEUR Student Assessment"
                category="Web Application"
                index="2"
              />
              <Project
                aos=""
                image={this.state.projectFourImage}
                link="/where"
                hmwClass="hmw"
                class="project-default"
                hmw={["Explore your travel history,", <br/>, "get inspired", <br/>, "and plan future adventures"]}
                color="rgba(114, 164, 238, 0.95)"
                title="WHERE App"
                category="Web Application"
                index="3"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Main;