import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";

import dallas from "../assets/dallas.webp";
import austin from "../assets/austin.webp";
import newyork from "../assets/newyork.webp";
import sanfrancisco from "../assets/sanfrancisco.webp";
import beijing from "../assets/beijing.webp";

const cities = [
  { name: "Linkedin", path: "https://www.linkedin.com/in/neeraj-verma-2753a519/" },
  { name: "Github", path: "https://github.com/nverma31" },
  { name: "Xing", path: "https://www.xing.com/profile/Neeraj_Verma3/" },
  { name: "Privacy Policy", image: sanfrancisco }];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/case-studies">
                      Cases
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to="/case-studies">
                      About
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to={{ pathname: "mailto:nverma31@gmail.com" }} target="_blank">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to={{ pathname: "https://drive.google.com/file/d/175BR-KYdM6q_lGjCnxNIqBzjSgiioKJ7/view?usp=sharing" }} target="_blank">
                      Resume
                    </Link>
                  </li>
                </ul>
              </nav>
              <hr/>
              <div ref={el => (info = el)} className='info'>
                {/* <h3>Our Promise</h3>
                <p>
                  The passage experienced a surge in popularity during the 1960s
                  when Letraset used it on their dry-transfer sheets, and again
                  during the 90s as desktop publishers bundled the text with
                  their software.
                </p> */}
              </div>
              <div className='locations'>
                {/* Returning the list of cities */}
                {cities.map(el => (
                  <span
                    key={el.name}>
                    
                    <Link
                      to={{ pathname: el.path }} target="_blank">
                      {el.name}
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
