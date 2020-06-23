import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/audi.webp";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Hero from "../assets/trickle/hero.png";
import Ideate from "../assets/trickle/ideate.jpg";


import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Video from "../components/video";


let tl = gsap.timeline();


const intro = { title: 'Trickle', subtitle: 'Interactive Installation Rasing Privacy Awareness', imageurl: Hero};
const introText = { brief: 'Design a interactive installation which raises awareness about Privacy Issues', intro: 'Every day, mobile users can easily fall victim to another new method of tracking, stalking or privacy abuse. Stolen personal information has become a valuable product on the black market. It includes not just financial or medical information, but and kind of PII that can be used as a key to your other assets.', imageurl: Hero};

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Trickle = ({ dimensions }) => {
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
      <ProjectTitle intro={intro} />
      <div></div>
      <ProjectIntro introText = {introText} />
      <Video />
      <TallImage path={Ideate}  />
        <SectionPara />
        <WideImage path={Path}  />
        <SectionParaLeft />
        <TallImage path={Path}  />
        <Footer />


    </>
  );
};

export default Trickle;
