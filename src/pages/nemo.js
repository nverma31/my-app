import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/Nemo/users.png";
import IAone from "../assets/Nemo/ia-one.png";
import IAtwo from "../assets/Nemo/ia-two.png";
import IAthree from "../assets/Nemo/ia-three.png";
import Tease from "../assets/Nemo/tease.gif";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Video from "../components/video";
import Hero from "../assets/Nemo/hero.png";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Sticky from "../components/sticky";

const introtitle = { title: 'Audi Model Pages Website', subtitle: 'An Immersive online experience for Audi Cars' , imageurl: Hero};
const introText = { brief: 'Design a interactive installation which raises awareness about Privacy Issues', intro: 'We’ve been working closely with Audi - on a major rebrand and on their new digital approach. As part of that, they asked us to design and roll out their new model pages website.', imageurl: Hero};
const sectioin1 = { num: '01', title: 'Learning from the users.', text: 'Users are at the centre of our work. Our main focus is their experience, so that the interaction with our digital products is enriching, satisfying and fulfilling their expectations. To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};
const sectioin2 = { num: '02', title: 'Access to the Information', text: 'Users are at the centre of our work. Our main focus is their experience, so that the interaction with our digital products is enriching, satisfying and fulfilling their expectations. To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Nemo = ({ dimensions }) => {
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
      <ProjectIntro introText = {introText} />
      <WideImage path={Tease}  />
      <div></div>
      <SectionPara section={sectioin1} />
      <WideImage path={Path}  />
      <SectionParaLeft section={sectioin2} />
      <TallImage path={Path}  />

      <WideImage path={IAone}  />
      <WideImage path={IAtwo}  />
      <WideImage path={IAthree}  />
      <Sticky />

      <SectionPara section={sectioin1} />
      <WideImage path={IAtwo}  />


    </>
  );
};

export default Nemo;
