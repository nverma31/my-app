import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay"

import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {

  tl.to(".overlay-top", 1.3, {
      height: 0,
      ease: "expo.inOut",
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
