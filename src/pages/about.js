import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Aboutlayout from "../components/aboutlayout";

import gsap from "gsap";




let tl = gsap.timeline();
const introText = { what: 'I was an User Research Intern.', when: 'May 2017 - Aug 2017', company:'Vodafone',client: 'Client', brief: 'Generate insights regarding behaviour and needs of people at crowded environments that can be leveraged to build a platform for the attendees and businesses present in those environments.', intro: 'An exploratory research project to understand the attitudes, behaviour, needs of attendees and businesses at crowded environment like music festivals, conferences, sporting events etc.'};


const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
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
      
      <Aboutlayout introText = {introText} />


    </>
  );
};

export default About;
