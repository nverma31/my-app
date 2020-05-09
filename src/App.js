import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Main from './Main.js';
import Where from './projects/Where.js';
import Ticketswap from './projects/Ticketswap.js';
import StudentAssessment from './projects/StudentAssessment.js';
import Memory from './projects/Memory.js';
import Updates from './Updates.js';
import About from './About.js';
import Footer from './Footer.js';
import AOS from 'aos';

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/aos@2.3.1/dist/aos.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    AOS.init();

    return (
      <div className="App">
        <Route
          exact path="/"
          component={Main}
        />
        <Route
          path="/ticketswap"
          component={Ticketswap}
        />
        <Route
          path="/student-assessment"
          component={StudentAssessment}
        />
        <Route
          path="/memory"
          component={Memory}
        />
        <Route
          path="/where"
          component={Where}
        />
        <Route
          path="/updates"
          component={Updates}
        />
        <Route
          path="/about"
          component={About}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;