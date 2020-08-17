import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Hero from "../assets/trickle/concept1.jpg";
import Ideate from "../assets/trickle/ideate.jpg";
import Userflow from "../assets/trickle/trickle-userflow.png";
import Concept from "../assets/trickle/concept.png";
import Making from "../assets/trickle/making.jpg";
import Installation from "../assets/trickle/installation.png";


import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Video from "../components/video";


let tl = gsap.timeline();


const intro = { title: 'Trickle', subtitle: 'Interactive Installation Rasing Privacy Awareness', imageurl: Hero};
const introText = { brief: 'Design an interactive installation that raises awareness about Privacy Issues.', intro: 'The installation raises awareness about the issue of data privacy and theft. We created a fake public Wi-Fi network that tracks online activity of a person and our installation shows them a trickling down pattern using lights and sounds, symbolising data theft.', client:'Project Info',company:"Part of the Reactive Spaces course during my Masters. ",what:"I was responsible for prototyping, coding, fabrication, and installation of the entire concept.",when:"Sep 2016",imageurl: Hero};
const sectioin1 = { num: '01', title: 'The Concept.', text: 'When someone connects to our fake public Wi-Fi network, their online activity is tracked and our installation shows a trickling down pattern using lights. The installation gets activated as it identifies when a person who has been compromised passes near the installation. The installation uses different colors of lights and sounds that relate to different apps and websites that are identified in the person\'s online activity.'};
const sectioin2 = { num: '02', title: 'Bringing it to Life', text: 'Our project had two major components: a twin wifi network so that we could track data of people connected to it and a responsive light installation that behaves based on their tracked data.'};
const sectioin3 = { num: '03', title: 'Site Installation', text: 'We wanted to position our installation in a public Wi-Fi environment and we chose a nearby Starbucks. It was rewarding to see the lighting installation work based on the stolen data of the people that connected to our fake-twin wifi.'};

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
    

        <SectionPara section={sectioin1} />
        <WideImage path={Userflow}  />

        <WideImage path={Concept}  />

      {/* <WideImage path={Dataflow}  /> */}
        <SectionParaLeft section={sectioin2}/>
        <WideImage path={Making}  />
        <SectionPara section={sectioin3}/>
        <WideImage path={Installation}  />

        <Footer />


    </>
  );
};

export default Trickle;
