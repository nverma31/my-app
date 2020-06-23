import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";
import Cases from "../components/cases";
import Contact from "../components/contact";

import gsap from "gsap";

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.from(".line span", 1.5, {
    y: 100,
    ease: "power4.out",
    delay: 0.1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.25
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" }
      ,
      onComplete: completeAnimation
    });
   
};

const Home = ({ dimensions }) => {
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
      <Banner />
      <Cases />
    </>
  );
};

export default Home;
