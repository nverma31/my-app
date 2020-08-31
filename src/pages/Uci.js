import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/Nemo/users.png";
import IAone from "../assets/uci/ia.jpg";
import IAtwo from "../assets/Nemo/ia-two.png";
import IAthree from "../assets/Nemo/ia-three.png";
import Tease from "../assets/Nemo/teaser.gif";
import Styles from "../assets/uci/styles.jpg";
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
const sectioin1 = { num: '01', title: 'Discovery Process', text: ' We started with conducting interviews with both car owners and dealers, to find out about their car selling process, and corresponding pain-points and expectations. Later, we conducted more qualitative  studies to iterate on our concept to confirm whether it aligns with the user needs. At a more advanced stage of the visual and UX design, we conducted usability studies to confirm that the visual language and the functional focus were as expected.'};
const sectioin2 = { num: '02', title:'A reimagined car selling process', text: 'We wanted to offer a premium and simplified car selling process. Based on the insights of our interviews, we focused on alleivating the pain-points of a car selling process. Our car selling service allows users to sell in 3 simple steps — Online evaluation, publishing to Audi dealer network, and inspectioin and handover — and each one of them were user focused.'};
const sectioin4 = { num: '03', title:'Visual Design', text: 'Although built on top of an already existing design system , we began the project by giving the brand guidelines a bit of a facelift. A clean, purposeful black and white graphic style reflects the elegance an Audi Car. The bold red and green were used selectively to highlight the main actions for the users. The spacious and lightweight approach was chosen to avoid information overload.'};
const sectioin5 = { num: '', title:'The Landing Page', text: 'The landing page for our service  communicates  the simplified car selling process and the benefits for the seller. At the same time, it leads the users to get a free evaluation of thier car, which is the first step in the selling process', imageurl:FullPage};
const sectioin6 = { num: 'SELL CAR - STEP 1', title:'Easy evaluation', text: 'Users can get a rough evaluation of their car just by entering few basic details.'};
const sectioin7 = { num: 'SELL CAR - STEP 2', title:'Publish your car to Audi dealer network', text: 'Users satisfied with the evaluation could publish thier car to the Audi dealers network and receive offers from them.'};
const sectioin8 = { num: 'SELL CAR - STEP 3', title:'Hassle free inspection and handover', text: 'If the users accepts one of the offers from the dealers, the whole handover happens in one step with a quick inspection and payout at the same time.'};
const footerpath = { title: 'next project', text: 'EWE IOT Concept', link:'/ewe' };

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Uci = () => {
  const intro = { title: 'abc', subtitle: 'new' };

  console.log(intro);


  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  // useEffect(() => {
  //   let vh = dimensions.height * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }, [dimensions.width]);

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
        <div className ="sectionTitleText" > Our final solutoin, WeBuy is a highly innovative car selling process which puts the seller first, and leverages the Audi dealer network to offer a premium car selling experience.</div>
      </div>
      <Sticky content={sectioin5} />
      <SectionPara section={sectioin6} />
      <WideImage path={Show1}  />
      <SectionParaLeft section={sectioin7} />

      <FullWidthImage path={Show2}  />
      <SectionPara section={sectioin8} />
      <WideImage path={Show3}  />

      <Footer path = {footerpath}/>
    </>
  );
};

export default Uci;
