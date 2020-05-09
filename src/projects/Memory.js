import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/memory-img00.png';
import img01 from '../img/memory-img01.png';
import img02 from '../img/memory-img02.png';
import img03 from '../img/memory-img03.png';

class Memory extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content memory">
        <div className="cover">
          <ProjectNav
            logoColor="#BFC1C4"
            menuColor="#BFC1C4"
            logo={this.state.logoImage}
            title={["Memory", <br/>, "A multiplayer game"]}
            domain="Web app"
            roles="UX, programming: Veronica Hvaal Stigen, Hakan Çuhadar"
            rolesTwo="Javascript, CSS, React-Redux, Stream, Authentication, Express"
            date="2019.12"
            firm="School Project"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
        <div className="summary-container">
          <div className="summary-container-left">
            <div className="content-title white">Summary</div>
            <div className="content end white">
              In this project we were tasked with making a responsive Javascript React game that would work over a stream so multiple people can play at the same time.
              We designed the game algorithms from scratch in Javascript, and added authentication via JSON tokens on the backend.
            </div>
          </div>
          <div className="summary-container-right">
            <div className="content-title white">Features</div>
            <div className="content end white">
            • Score system that keeps track of both players scores<br/>
            • Secure signup and login with JSON authentication<br/>
            • A RESTful backend running on express<br/>
            • Lobby and room creation, instantly showing displayed for other logged in users
            </div>
          </div>
        </div>
        </div>
        <div className="background">
          <div className="stage-title stage-gray">ABOUT</div>
          <div className="content-title-second">Memory, a deceptively simple game</div>
          <div className="content end">
            Through complex array manipulation, conditional statements and CSS, we assembled a game with
            robust mechanics that accurately measures score. We implemented several game icon boards,
            a win-animation, as well as user specific database score tracking.
          </div>
        </div>
        <div className="redesign">
          <div className="redesign-background">
            <div className="content-title">Stream and Multiple Boards</div>
            <div className="content middle">We decided to add other randomized boards to the game for added replayability.
            Due to the game being on a stream, the two players are able to compete on the exact same board.</div>
            <img src={img02} alt="Timeline Example" className="image end"/>
          </div>
          </div>
        <div className="mobile-designs">
          <div className="content-title white middle">Multiplayer Support</div>
          <div className="content white middle">Creating a game with multiplayer functionality was fun and
          challenging. We used json-SSE with a simple event listener monitoring changes in the browser. We used
          CORS and a json body parser to connect to the front-end and convert the data to json.</div>
          <img src={img03} alt="Multiple Screens" className="image end"/>
        </div>
        <div className="bottom-navigation">
        <Link to="/memory" className="link link-active">Memory Multiplayer Game</Link>
          <Link to="/student-assessment" className="link link-inactive">Codaisseur Student Assesment</Link>
          <Link to="/ticketswap" className="link link-inactive">Ticketswap</Link>
          <Link to="/where" className="link link-inactive">Where</Link>
        </div>
      </section>
    );
  }
}

export default Memory;