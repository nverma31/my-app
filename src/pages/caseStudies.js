import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Cases from "../components/cases";
import SocialIcons from '../components/social'

import gsap from "gsap";




let tl = gsap.timeline();


const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const CaseStudies = ({ dimensions }) => {
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
      
      <Cases/>
      <SocialIcons/>


    </>
  );
};

export default CaseStudies;
