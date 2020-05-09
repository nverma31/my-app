import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/ticketswap-img00.png';
import img01 from '../img/ticketswap-img01.png';
import img02 from '../img/ticketswap-img02.png';

class TicketSwap extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content ticketswap">
        <div className="cover">
          <ProjectNav
            logoColor="#E0E0E0"
            menuColor="#E0E0E0"
            logo={this.state.logoImage}
            title={["TICKETSWAP Clone", <br/>, "Personal Project"]}
            domain="Web Application"
            roles="Frontend/Backend: Veronica Hvaal Stigen"
            rolesTwo="Sequelize, JSON Web Token, Risk Algorithm, Express, PostgreSQL"
            date="2019.12"
            firm="Personal Project"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="summary-container">
            <div className="summary-container-left">
              <div className="content-title white">Summary</div>
              <div className="content end white">
                In our school graduation project, we were tasked with creating a full-featured "Ticketswap" clone.
                I used JS React-Redux for the frontend, and Express/JSON/Sequelize/PostgreSQL for the backend. The purpose of the app is 
                to allow users to upload and edit events, create tickets for specific events, buy tickets, edit tickets, and assess the
                potential risk of a ticket for sale.
              </div>
            </div>
            <div className="summary-container-right">
              <div className="content-title white">Features</div>
              <div className="content end white">
                • JSON token user creation and authentication with encrypted passwords in database<br/>
                • Authenticated event creation and editing with date, pictures, details, tickets<br/>
                • Authenticated ticket creation and editing with ability to contact creator securely<br/>
                • Dymanic ricket risk calculation algorithm with 10+ parameters<br/>
                • Users can comment on tickets and events
              </div>
            </div>
          </div>
        </div>
        <div className="background">
          <div className="stage-title stage-gray">ABOUT</div>
          <div className="content-title-second">TICKETSWAP Client,<br/>A Marketplace for Tickets</div>
          <div className="content middle">Ticketswap is an open ticket marketplace where
          users can buy and sell tickets belonging to events posted by other users.
          To function correctly, it needs to be easy to use, robust, and safe for both the seller
          and the buyer of the tickets.</div>
 </div>
        <div className="target">
          <div className="stage-title stage-gray">DEVELOPMENT</div>
          <div className="content-title-second">Adding Features Without Clutter</div>
          <div className="content middle">After developing the core application with authentication
          and a React-Redux foundation, I started implementing the basic features which were event
          creation, ticket creation, and detail pages. I decided on Express-powered backend pagination to make
          the app as stable and scalable as possible and not overload the browser. I used bootstrap and
          MaterialUI-elements for a clean and user friendly look.</div>
          <img src={img02} alt="Events and Tickets" className="image end"/>
        </div>
        <div className="challenge">
          <div className="content-title white">Risk Challenge</div>
          <div className="content end white">Making the app open and dynamic without compromising the safety of the users.</div>
        </div>
        <div className="improvement">
          <div className="stage-title stage-gray">APPROACH</div>
          <div className="content-title-second">Ticket Risk Algorithm</div>
          <div className="content end">Every ticket uploaded was evaluated on the following parameters :<br/><br/>
          • Relative price compared to other tickets posted to the same event (most important)<br/>
          • User account age and ticket posting frequency of the ticket author<br/>
          • Number of comments on ticket, time of day ticket was posted (least important)<br/><br/>
          The tickets were given a minimum and maximum ticket risk value, and the values were dynamically calculated by monitoring changed in the ticket and user database or to the ticket itself.</div>
        </div>

        <div className="bottom-navigation">
        <Link to="/memory" className="link link-inactive">Memory Multiplayer Game</Link>
          <Link to="/student-assessment" className="link link-inactive">Codaisseur Student Assesment</Link>
          <Link to="/ticketswap" className="link link-active">Ticketswap</Link>
          <Link to="/where" className="link link-inactive">Where</Link>
        </div>
      </section>
    );
  }
}

export default TicketSwap;