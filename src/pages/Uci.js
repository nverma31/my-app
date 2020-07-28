import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/Nemo/users.png";
import IAone from "../assets/uci/ia.png";
import IAtwo from "../assets/Nemo/ia-two.png";
import IAthree from "../assets/Nemo/ia-three.png";
import Tease from "../assets/Nemo/teaser.gif";
import Styles from "../assets/uci/styles.png";
import Interviews from "../assets/uci/interviews.jpg";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Video from "../components/video";
import Hero from "../assets/uci/hero.png";
import Hero2 from "../assets/uci/hero2.jpg";

import Show1 from "../assets/uci/show1.png";
import Show2 from "../assets/uci/show2.png";
import Show3 from "../assets/uci/show3.png";

import Colors from "../assets/Nemo/colors.png";
import FullPage from "../assets/uci/lp.jpg";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Sticky from "../components/sticky";

const introtitle = { title: 'Audi Used Car Platform', subtitle: 'A Premium Cars Selling Experience' , imageurl: Hero};
const introText = { brief: 'Design a state of the art premium experience for selling used cars.', intro: 'I have been working closely with Audi on their new digital approach. One of the key initiatives was to design a used car selling platform that offers  car owners a premium experience when they are looking to change thier current mobility option.', client:'Client',company:'Audi',what:'I worked as a product designer in the project and my responsibilities included user research and user experience.',when:'June 2018 - Dec 2018',imageurl: Hero};
const sectioin1 = { num: '01', title: 'Discovery Process', text: 'Users are at the centre of everything we did.  We started with conducting interviews with both car owners and dealers, to find out about their car selling process, and corresponding pain-points and expectations. Later, we conducted more qualitative  studies to iterate on our concept to confirm whether it aligns with the user needs. At a more advanced stage of the visual and UX design, we conducted usability studies to confirm that the visual language and the functional focus were as expected.'};
const sectioin2 = { num: '02', title:'A simplified car selling process', text: 'We simplified the Information Architecture and kept it relatively flat which focused on the user\’s main needs identified during the research. We reduced the header navigation to focus on the vehicles. Moreover, as Audi has more than 60 different models we grouped them according to model types such as SUV, Sedan, etc.'};
const sectioin4 = { num: '03', title:'Visual Design', text: 'Although built on top of an already existing design system , we began the project by giving the brand guidelines a bit of a facelift. A clean, purposeful black and white graphic style reflects the elegance an Audi Car. The bold red and green were used selectively to highlight the main actions for the users. The spacious and lightweight approach was chosen to avoid information overload.'};
const sectioin5 = { num: '', title:'The Landing Page', text: 'The design reflects the premium aspect of Audi. The spacious and lightweight feel help avoid the information overload that competitor sites often suffer from. The colour also helps differentiate it. We predominately used black and white for its elegance and boldness. A clean, purposeful line-graphic style and smooth animations reflect the elegance an Audi Car. A new set of icons helps Audi users quickly understand where they are and what it’s all about.', imageurl:FullPage};
const sectioin6 = { num: 'STEP 1', title:'Easy evaluation', text: 'Fully responsive'};
const sectioin7 = { num: 'STEP 2', title:'Publish your car to Audi dealer network', text: 'Fully responsive'};
const sectioin8 = { num: 'STEP 3', title:'Hassle free inspection and handover', text: 'Fully responsive'};

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Uci = ({ dimensions }) => {
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
      <WideImage path={Hero2}  />

      <SectionPara section={sectioin1} />
      <WideImage path={Interviews}  />
      <SectionParaLeft section={sectioin2} />

      <TallImage path={IAone}  />
    
      <SectionPara section={sectioin4} />
      <WideImage path={Styles}  />
      <div className="sectionBold">
        <div className ="sectionTitleBold" > The Concept — WeBuy.</div>
        <div className ="sectionTitleText" >  The redesign focused on simplifying the customer interface, responsive web design, and incorporating mobile first methodology. Significant improvements including responsive web pages, mobile first design, simplified user experiences, multiple added features, and a modern interface design.</div>
      </div>
      <Sticky content={sectioin5} />
      <SectionPara section={sectioin6} />
      <WideImage path={Show1}  />
      <SectionParaLeft section={sectioin7} />

      <FullWidthImage path={Show2}  />
      <SectionPara section={sectioin8} />
      <WideImage path={Show3}  />


    </>
  );
};

export default Uci;
