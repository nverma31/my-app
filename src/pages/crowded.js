import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/crowded/hero.jpg";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Hero from "../assets/crowded/hero.jpg";
import Field from "../assets/crowded/field.png";
import Synthesis1 from "../assets/crowded/syn.png";
import Secondary from "../assets/crowded/second.png";

import FieldInsights from "../assets/crowded/fieldinsights.png";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Video from "../components/video";


let tl = gsap.timeline();


const intro = { title: 'Crowded Context Research', subtitle: 'Understanding People in Crowded Environments ', imageurl: Hero};
const introText = { what: 'worked as a UX designer', when: '2017', client: 'Vodafone', brief: 'Design a interactive installation which raises awareness about Privacy Issues', intro: 'Every day, mobile users can easily fall victim to another new method of tracking, stalking or privacy abuse. Stolen personal information has become a valuable product on the black market. It includes not just financial or medical information, but and kind of PII that can be used as a key to your other assets.', imageurl: Hero};
const sectioin1 = { num: '01', title: 'Starting off with Secondary Research', text: 'I conducted secondary research to understand the events domains, stakeholders involved, market and technology trends. It also helped in learning more about the domain and context, and eventually ask the right questions during our field research.'};
const sectioin2 = { num: '02', title: 'Learning on the Field', text: 'I conducted secondary research to understand the events domains, stakeholders involved, market and technology trends. It also helped in learning more about the domain and context, and eventually ask the right questions during our field research.'};
const sectioin3 = { num: '03', title: 'Generating and Sharing Insights', text: 'I conducted secondary research to understand the events domains, stakeholders involved, market and technology trends. It also helped in learning more about the domain and context, and eventually ask the right questions during our field research.'};

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Crowded = ({ dimensions }) => {
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
      <ProjectIntro introText = {introText} />
      <hr></hr>
        <SectionPara section={sectioin1} />
        <FullWidthImage  path={Secondary}  />
        <SectionParaLeft section={sectioin2}/>
        <WideImage path={Field}  />
        <SectionPara section={sectioin3} />
        <TallImage path={Synthesis1}  />
        <SectionParaLeft section={sectioin2}/>

        <FullWidthImage  path={FieldInsights}  />

        <Footer />


    </>
  );
};

export default Crowded;
