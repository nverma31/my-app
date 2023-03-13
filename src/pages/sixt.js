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
import Escooter from "../assets/sixt/scooters.png";
import Moped from "../assets/sixt/mopeds.png";
import Bikes from "../assets/sixt/bikes.png";


import Styles from "../assets/Nemo/styles.png";
import Exploration1 from "../assets/sixt/explorations1.png";
import Exploration2 from "../assets/sixt/explorations2.png";

import Research from "../assets/sixt/research.png";
import Insights from "../assets/sixt/insights.png";
import Principles from "../assets/sixt/principles.png";



import Colors from "../assets/Nemo/colors.png";
import FullPage from "../assets/Nemo/fullpage.jpg";
import Responsive from "../assets/Nemo/responsive.jpg";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Sticky from "../components/sticky";
import StickyReverse from "../components/stickyreverse";

const introtitle = { title: 'SIXT Share', subtitle: 'Adding Shared Micro-mobility to SIXT Share' , imageurl: Hero};
const introText = { brief: 'Integrate shared micro-mobility partners within SIXT share with a focus on increasing customer engagement and retention.', intro: 'SIXT share offers car sharing to its customers via the share tab in the SIXT app. Due to shortage of cars because of the semiconductor crisis after Corona, Sixt share could not meet the demands of its customers and had decling customers and revenue. It was decided that SIXT Share will now also offer share micro-mobility along with shared cars with a focus to increase it\'s customer base, market footprint, and revenue.', what:'I was the lead product designer and designed the entire flow and screens. Coordinated with Product managers, engineers, operations, marketing, research, and external partners.',when:'Dec 2021 - June 2022',imageurl: Hero, title:'Goal'};
const sectioin0 = { num: '01', title: 'Understand.', text: ' We started with understanding the micro-mobility space by conducting a competitive benchmarking. With our improved understanding, we planned field research with users of our future micro-mobility partners to better understand their attitudes and behaviour.'};
const sectioin1 = { num: '01', title: 'Understand.', text: ' We started with understanding the micro-mobility space by conducting a competitive benchmarking. With our improved understanding, we planned field research with users of our future micro-mobility partners to better understand their attitudes and behaviour.'};
const sectioin2 = { num: '02', title:'Defining Success', text: 'As we were gaining a deeper understanding of both users and the micro-mobility business, we established certain guiding principles for our product, which determined the product requirements'};
const sectioin4 = { num: '', title:'Explorations and key design decisions', text: 'Many aspects of the user journey required me to explore many possible design solutions. I always kept going to our goals, product requirements and principles we have defined earlier while finalising a design choice.'};
const sectioin5 = { num: '05', title:'Final Design', text: 'The new Model page  allows the user to make an informed decision during their buying journey and fascinates the user with immersive modules so they get the feel of the actual physical car.', imageurl:FullPage};
const sectioin6 = { num: '05', title:'Impact', text: 'We released the escooters, mopeds and bikes from TIER and future partners are being integrated as we speak. Due to condifentiality I am not disclosing the actual numbers but we saw huge jump in revenue and new customer acquisition.'};
const sectioin8 = { num: '08', title:'Map selection and Unlock', text: 'Everything we designed was responsive and we strive to acheive a consitency in feel and visual on all viewports.'};
const sectioin9 = { num: '04.01', title:'Moped Flow', text: 'Users can book a moped either via tapping the marker on the map or scanning QR. Afterwards, they quickly see a onboarding tutorial ad they unlock using the pin. During driving, they can park and resume their journey and finally end thier journey in the appropriate business area.',imageurl:Moped};
const sectioin10 = { num: '04.02', title:'E-Scooter Flow', text: 'Users can book a scooter either via tapping the marker on the map or scanning QR. Afterwards, they quickly see a onboarding tutorial ad they unlock using the pin. During driving, they can park and resume their journey and finally end thier journey in the appropriate business area.',imageurl:Escooter};
const sectioin11 = { num: '04.03', title:'Bike Flow', text: 'Users can book a bike either via tapping the marker on the map or scanning QR. Afterwards, they quickly see a onboarding tutorial ad they unlock using the pin. During driving, they can park and resume their journey and finally end thier journey in the appropriate business area.',imageurl:Bikes};

const sectioin7 = { num: '07', title:'Immersion with interaction design', text: 'In line with acheiving a feel of the actual cars, we used motion design to immerse the users in the models and get a feel of the actual car.'};
const footerpath = { title: 'next project', text: 'Audi Model Pages Website', link:'/nemo' };

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
      <SectionParaLeft section={sectioin1} />
      <TallImage path={Research}  />
      <FullWidthImage path={Insights}  />

      <SectionPara section={sectioin2} />
      <FullWidthImage path={Principles}  />
      <SectionParaLeft section={sectioin4} />
      <FullWidthImage path={Exploration1}  />
      <FullWidthImage path={Exploration2}  />
      <div className="sectionBoldSecond">
        <div className="sectionTitleNumber" > 04.</div>

        <div className="sectionTitleBold" > Final Design.</div>
      </div>
      <Sticky content={sectioin9} />

      <StickyReverse content={sectioin10} />
      <Sticky content={sectioin11} />
      {/* <SectionPara section={sectioin6} />

<hr/> */}
<hr/>
      <Footer path = {footerpath}/>
    </>
  );
};

export default Sixt;
