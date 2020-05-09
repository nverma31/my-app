import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/where-img00.png';
import img01 from '../img/where-img01.png';
import img02 from '../img/where-img02.png';
import img03 from '../img/where-img03.png';

class Where extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content where">
        <div className="cover">
          <ProjectNav
            logoColor="#80A9FF"
            menuColor="#80A9FF"
            logo={this.state.logoImage}
            title={["WHERE", <br/>, "Explore your destinations"]}
            domain="Web App"
            roles="UX/UI: Veronica Hvaal Stigen"
            rolesTwo="CSS, MapAPI, JQuery, React"
            date="2019.12"
            firm="Personal Project"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="content-title">Project Summary</div>
          <div className="content featured">An app to showcase different aspects of your travels.</div>
          <div className="content end">
            Where is a personal project exploring the parts of travelling that we don't usually think about.
            I wanted to display travel information in a clean, intuitive and fun way, to entice exploring the page and completing more countries.
            I heavily customized the free mapUI API to create a simple responsive backdrop for the user to select visited countries.
          </div>
        </div>

        <div className="mockups">
          <img src={img02} alt="Mockups" className="image"/>
        </div>

        <div className="challenge">
          <div className="content-title white">Design Challenge</div>
          <div className="content end white">Making travel statistics fun and beautiful.</div>
        </div>

        <div className="samples">
          <div className="samples-background">
            <div className="content-title">Memories</div>
            <div className="prototypes">
              <div className="prototype left">
                <div className="day-side pc"></div>
                <div className="details">
                  <div className="day">Reliving Moments</div>
                  <div className="title">Interactive Snapshots</div>
                  <div className="description pc">In addition to the interactive map, I wanted a way to showcase previous destinations
                  and pin them to your personal page. I added a feature where the app picks your top travel experiences and
                  displays your favourite picture along with your favourite quote or memory.</div>
                  <div className="description mobile">I wanted a beautiful, simple layout with a soothing colour scheme. I reused the palette from the accent colours and make the map clickable, with sticky tags.</div>
                </div>
                <img src={img03} alt="Map" className="image"/>
              </div>
              </div>            
        </div>
        </div>   

        <div className="bottom-navigation">
          <Link to="/memory" className="link link-inactive">Memory Multiplayer Game</Link>
          <Link to="/student-assessment" className="link link-inactive">Codaisseur Student Assesment</Link>
          <Link to="/ticketswap" className="link link-inactive">Ticketswap</Link>
          <Link to="/where" className="link link-active">Where</Link>
        </div>
      </section>
    );
  }
}

export default Where;