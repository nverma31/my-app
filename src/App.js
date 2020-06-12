import React, { useEffect } from "react";
import gsap from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
// import Case from "./components/case";
import Cases from "./components/cases";

import IntroOverlay from "./components/introOverlay";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

function App() {

  useEffect(() => {
    //Grab inner height of window for mobile reasons when dealing with vh
    let vh = window.innerHeight * 0.01;
    //Set css varible vh
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Preventing flash from happening.
    gsap.to("body", 0, { css: { visibility: "visible" } });

    //On load timeline
    const tl = gsap.timeline();
    tl.to(".container", 0, { css: { visibility: "visible" } });
    tl.to(".case-image:after", 1.4, { width: "0%", ease: Power2.easeInOut });
     tl.from(".case-image img", 1.4, {
        scale: 1.6,
        ease: Power2.easeInOut,
        // delay: -1.4
      });
    tl.from(".line span", 1.8, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      }
    })
      .to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: {
          amount: 0.4
        }
      })
      .to(".intro-overlay", 0, { css: { display: "none" } });
     
  }, []);

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;