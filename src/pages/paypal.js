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

const introtitle = { title: 'PayPal', subtitle: 'Reimagining finances', imageurl: Hero};
const introText = { brief: 'Design a interactive installation which raises awareness about Privacy Issues', intro: 'Every day, mobile users can easily fall victim to another new method of tracking, stalking or privacy abuse. Stolen personal information has become a valuable product on the black market. It includes not just financial or medical information, but and kind of PII that can be used as a key to your other assets.', imageurl: Hero};
const sectioin1 = { num: '01', title: 'The Concept.', text: ' To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};
const sectioin2 = { num: '02', title: 'Bringing it to Life', text: 'Users are at the centre of our work. Our main focus is their expeestions.'};
const sectioin3 = { num: '03', title: 'Site Installation', text: ' so thsfying and fulfilncluded users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const PayPal = ({ dimensions }) => {
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
    

        <SectionPara section={sectioin1} />
        <WideImage path={Path}  />
      {/* <WideImage path={Dataflow}  /> */}
        <SectionParaLeft section={sectioin2}/>
        <WideImage path={Path}  />
        <SectionPara section={sectioin3}/>
        <WideImage path={Path}  />

        <Footer />

    </>
  );
};

export default PayPal;
