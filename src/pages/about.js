import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay"

import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {

  tl.to(".overlay-top", 2.5, {
      height: 0,
      ease: "expo.inOut",
      // stagger: 0.4
    })
  
    .to(".intro-overlay", 0, {
      css: { display: "none" }
      ,
      onComplete: completeAnimation
    });
   
};

const About = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  useEffect(() => {
    let vh = dimensions.height * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [dimensions.width]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
    <div className='page'>
      <div className='container'>
        <div className='row'>
          <h3>This is the About page</h3>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
