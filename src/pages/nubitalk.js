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
import Video from "../components/video";
import Hero from "../assets/paypal/hero.png";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";

const introtitle = { title: 'Nubitalk', subtitle: 'Interactive Installation Rasing Privacy Awareness', imageurl: Hero};
const introText = { brief: 'Design a interactive installation which raises awareness about Privacy Issues', intro: 'Every day, mobile users can easily fall victim to another new method of tracking, stalking or privacy abuse. Stolen personal information has become a valuable product on the black market. It includes not just financial or medical information, but and kind of PII that can be used as a key to your other assets.', imageurl: Hero};
const sectioin1 = { num: '01', title: 'Learning from the users.', text: 'Users are at the centre of our work. Our main focus is their experience, so that the interaction with our digital products is enriching, satisfying and fulfilling their expectations. To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Nubitalk = ({ dimensions }) => {
  const intro = { title: 'abc', subtitle: 'new' };

  console.log(intro);


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
      <ProjectTitle intro={introtitle} />
      <div></div>
      <ProjectIntro introText = {introText} />
      <FullWidthImage path={Path}  />
      <SectionPara section={sectioin1} />
        <WideImage path={Path}  />
        <SectionParaLeft section={sectioin1}/>
        <TallImage path={Path}  />
        <Footer />
        <Video />



    </>
  );
};

export default Nubitalk;
