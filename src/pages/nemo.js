import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/Nemo/users.png";
import IAone from "../assets/Nemo/ia.jpg";
import Interaction1 from "../assets/Nemo/interaction1.gif";
import Interaction2 from "../assets/Nemo/interaction2.gif";
import Space from "../assets/Nemo/space.png";
import Variations from "../assets/Nemo/variations.jpg";

import Tease from "../assets/Nemo/teaser.gif";
import Uselab from "../assets/Nemo/test.jpg";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Video from "../components/video";
import Hero from "../assets/Nemo/hero.png";
import Web1 from "../assets/paypal/weeb1.png";
import Styles from "../assets/Nemo/styles.png";
import Colors from "../assets/Nemo/colors.png";
import FullPage from "../assets/Nemo/fullpage.jpg";
import Responsive from "../assets/Nemo/responsive.jpg";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Sticky from "../components/sticky";

const introtitle = { title: 'Audi Model Pages Website', subtitle: 'An Immersive online experience of Audi Cars' , imageurl: Hero};
const introText = { brief: 'Design an immersive online experience for Audi Models.', intro: 'I have been working closely with Audi on a major rebrand and on their new digital approach. As part of that, they asked us to redesign and roll out their models website — both new and old models — following a user centered approach.', client:'Client',company:'Audi',what:'I am a product designer in the project and my responsibilities includes user research and UX.',when:'March 2020 - Ongoing',imageurl: Hero};
const sectioin1 = { num: '01', title: 'Learning from the users.', text: 'Users are at the centre of everything we did. Our main focus is their experience, so that the interaction with our digital products is enriching, satisfying and fulfilling their expectations. We included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and UX design, to confirm that the visual language and the functional focus were as expected.'};
const sectioin2 = { num: '02', title:'Access to the Information', text: 'We simplified the Information Architecture and kept it relatively flat which focused on the user\’s main needs identified during the research. We reduced the header navigation to focus on the vehicles. Moreover, as Audi has more than 60 different models we grouped them according to model types such as SUV, Sedan, etc.'};
const sectioin4 = { num: '03', title:'Visual Design', text: 'The design reflects the premium aspect of Audi. The spacious and lightweight feel help avoid the information overload that competitor sites often suffer from. The colour also helps differentiate it. We predominately used black and white for its elegance and boldness. A clean, purposeful line-graphic style and smooth animations reflect the elegance an Audi Car. A new set of icons helps Audi users quickly understand where they are and what it’s all about.'};
const sectioin5 = { num: '04', title:'The new Model Page', text: 'The design reflects the premium aspect of Audi. The spacious and lightweight feel help avoid the information overload that competitor sites often suffer from. The colour also helps differentiate it. We predominately used black and white for its elegance and boldness. A clean, purposeful line-graphic style and smooth animations reflect the elegance an Audi Car. A new set of icons helps Audi users quickly understand where they are and what it’s all about.', imageurl:FullPage};
const sectioin6 = { num: '04', title:'Take it with you', text: 'Fully responsive'};
const sectioin7 = { num: '04', title:'Immersion with interaction design', text: 'Fully responsive'};
const footerpath = { title: 'next project', text: 'Nubitalk', link:'/nubitalk' };

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Nemo = () => {
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
      <WideImage path={Tease}  />
      <div></div>
      <SectionPara section={sectioin1} />
      <WideImage path={Uselab}  />
      <SectionParaLeft section={sectioin2} />

      <WideImage path={IAone}  />
  
      <SectionPara section={sectioin4} />

      <WideImage path={Styles}  />
      <Sticky content={sectioin5} />
      <SectionPara section={sectioin6} />
      <FullWidthImage path={Variations}  />
      <SectionPara section={sectioin7} /><br/>
      <WideImage path={Space}  />
      <div class="nemo-interaction-wrapper">
		<div class="nemo-box a">
      <img src={Interaction1}></img>
    </div>
		<div class="nemo-box b">
    <img src={Interaction2}></img>
    </div>
	  </div>
    <SectionPara section={sectioin6} />
      <FullWidthImage path={Responsive}  />
      

      <Footer path = {footerpath}/>
    </>
  );
};

export default Nemo;
