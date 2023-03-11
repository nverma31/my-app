import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/Nemo/users.png";
import IAone from "../assets/Nemo/ia.png";
import IAtwo from "../assets/Nemo/modularIA.png";
import Modules from "../assets/Nemo/modules.png";

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
import Hero from "../assets/sixt/hero.jpeg";
import Styles from "../assets/Nemo/styles.png";
import Colors from "../assets/Nemo/colors.png";
import FullPage from "../assets/Nemo/fullpage.jpg";
import Responsive from "../assets/Nemo/responsive.jpg";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Sticky from "../components/sticky";

const introtitle = { title: 'SIXT Share', subtitle: 'Adding Shared Micro-mobility to SIXT Share' , imageurl: Hero};
const introText = { brief: 'Integrate shared micro-mobility partners within SIXT share with a focus on increasing customer engagement and retention.', intro: 'Due to shortage of cars due to the semiconductor crisis after Corona, Sixt share couldn not meet the demands of its customers. The goal', what:'I was the lead product designer and designed the entire flow. Coordinated with Product managers, engineers, operations, marketing, research, and external partners.',when:'Dec 2021 - June 2022',imageurl: Hero, title:'Goal'};
const sectioin1 = { num: '01', title: 'Understand.', text: 'Users are at the centre of everything we are doing. Our main focus is their experience, so that their interaction  is enriching, satisfying and fulfilling their expectations. We started with the big question: what purpose does this page serves for users in their buying process? So, at the beginning, through interviews, we found out about their buying journey and expectations. We synthesised this understanding of their buying journey with existing research we have done for Audi to start working on the Information Architecture.'};
const sectioin2 = { num: '02', title:'Information Architecture', text: 'We focused on a simple Information Architecture that was based on user needs identified in research. We reimagined how the model page will fit in with whole Audi website and also how the model page itself needs to be modular depending on the different kinds of cars and people\'s expectations towards those cars. This also allowed us to give requirements to the content team and developers to start working on the system architecture.'};
const sectioin4 = { num: '04', title:'Visual Design', text: 'The design reflects the premium aspect of Audi. The spacious and lightweight feel help avoid the information overload that competitor sites often suffer from. The colour also helps differentiate it. We predominately used black and white for its elegance and boldness. A clean, purposeful line-graphic style and smooth animations reflect the elegance an Audi Car. A new set of icons helps Audi users quickly understand where they are and what it’s all about.'};
const sectioin5 = { num: '05', title:'The new Model Page', text: 'The new Model page  allows the user to make an informed decision during their buying journey and fascinates the user with immersive modules so they get the feel of the actual physical car.', imageurl:FullPage};
const sectioin6 = { num: '06', title:'Reflects every Models essense ', text: 'We created modules that are felxible and modular, which allows for creation of different compositions and feel for different models ranging for basic sedans to sports cars. '};
const sectioin8 = { num: '08', title:'Take it with you', text: 'Everything we designed was responsive and we strive to acheive a consitency in feel and visual on all viewports.'};
const sectioin9 = { num: '03', title:'Iterative development of scalable Modules', text: 'We then worked on the iterative development of different scalable modules(sections) which will be part of the different car models. The main challenges was satisfying the technical and content  constraints while providing a good editorial and end-user experience.'};

const sectioin7 = { num: '07', title:'Immersion with interaction design', text: 'In line with acheiving a feel of the actual cars, we used motion design to immerse the users in the models and get a feel of the actual car.'};
const footerpath = { title: 'next project', text: 'PayPal Website & App', link:'/paypal' };

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Sixt = () => {
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
      <hr/>

      <SectionPara section={sectioin1} />
      <WideImage path={Uselab}  />
      <SectionParaLeft section={sectioin2} />
      <WideImage path={IAone}  />
      <WideImage path={IAtwo}  />
      <SectionParaLeft section={sectioin9} />
      <FullWidthImage path={Modules}  />

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
    <SectionPara section={sectioin8} />
      <FullWidthImage path={Responsive}  />
      

      <Footer path = {footerpath}/>
    </>
  );
};

export default Sixt;
