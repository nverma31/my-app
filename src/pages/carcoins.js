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

const introtitle = { title: 'Audi CarCoins ', subtitle: 'A Marketplace for Drivers data' , imageurl: Hero};
const introText = { brief: 'Design the first user-driven data marketplace, which in addition to creating transparency, awareness and trust, places value and and data control in the hands of Audi drivers, enabling beneficial relationships with third parties.', intro: 'The idea for CarCoins was born in a bar with a lot of beer. CarCoins takes customer retention to a new level and creates the first user-driven data marketplace. The drivers choose the data they want to share with a specific partner, in return they receive incentives.', client:'Client',company:'Audi',what:'I worked as a product designer in the project and my responsibilities included user research and user experience.',when:'June 2019 - March 2020',imageurl: Hero};
const sectioin1 = { num: '01', title:'Validating the concept', text: 'We started with a mixed method validation approach for the concept. We conducted stakeholders interviews with Audi employees to develop a holistic understanding of the concept from all domains within Audi. We followed it up with a Qualitative Scenario based validation testing to evaluate the willingness of drivers towards the the different aspects of the concept. We found that customer trust Audi with their data and to our surprise, Customers are very open and not concerned towards their car-data being shared as they are very used to sharing their data anyway'};
const sectioin2 = { num: '02', title:'Generating use cases with buyers', text: 'Afterwards, we worked with buyers(such as Zalando, Nike, DB, etc.) from multiple-industries to first gauge thier general willingness to be part of the system and secondly, uncover different use-cases in a co-design session that could be satisfied with CarCoins.'};
const sectioin4 = { num: '03', title:'Scoping the MVP', text: 'From gathering the insights from both buyers and sellers in the proposed marketplace, we first created a story map to define the full scope of users context and afterwards sliced it to define the MVP. Based on the MVP, we defined the functionality that the Buyers portal need to offer for the MVP.'};
const sectioin5 = { num: '', title:'The Landing Page', text: 'The landing page for our service  communicates  the simplified car selling process and the benefits for the seller. At the same time, it leads the users to get a free evaluation of thier car, which is the first step in the selling process', imageurl:FullPage};
const sectioin6 = { num: '01', title:'Onboarding the users on the platform ', text: ''};
const sectioin7 = { num: '02', title:'Choosing partners and sharing data', text: ''};
const sectioin8 = { num: '03', title:'Pausing and resuming data sharing', text: ''};
const sectioin9 = { num: '04', title:'Viewing sharing activity ', text: ''};
const sectioin10 = { num: '05', title:'Managing user settings', text: ''};
const sectioin11 = { num: '06', title:'Shopping with your earnings', text: ''};
const sectioin12 = { num: '', title:'Alpha testing the MVP', text: 'We started alpha testing the whole system with 15 partners and 40 vehicles in Munich. We also combined diary study with out participants to learn more about the users.'};
const sectioin13 = { num: '', title:'Moving to High fidelity designs', text: 'As we were running the Alpha testing, we were parallely moving on to higher fidelity design and concept.'};

const sectioin14 = { num: '', title:'Reflection', text: 'Unfortunately, the project was put on hold due to Corona, however, I learnt so much in this project.'};

const footerpath = { title: 'next project', text: 'EWE IOT Concept', link:'/ewe' };

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const CarCoins = () => {
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
      <div className="sectionTitleNumber" > 01.</div>
        <div className ="sectionTitleBold" > CarCoins — Sellers Concept.</div>
        <div className ="sectionTitleText" > Our final solutoin, WeBuy is a highly innovative car selling process which puts the seller first, and leverages the Audi dealer network to offer a premium car selling experience.</div>
      </div>
      <SectionPara section={sectioin6} />
      <WideImage path={Show1}  />
      <SectionParaLeft section={sectioin7} />

      <FullWidthImage path={Show2}  />
      <SectionPara section={sectioin8} />
      <WideImage path={Show3}  />
      <SectionParaLeft section={sectioin9} />
      <FullWidthImage path={Show2}  />
      <SectionPara section={sectioin10} />
      <WideImage path={Show3}  />
      <SectionParaLeft section={sectioin11} />
      <FullWidthImage path={Show2}  />
      <div className="sectionBoldSecond">
        <div className="sectionTitleNumber" > 02.</div>

        <div className="sectionTitleBold" > CarCoins — Sellers Concept.</div>
        <div className="sectionTitleText" >  A new Consumer PayPal app, which launched to 4.8 million customers in February 2016. Complete overrhaul of the app experience while working in partnership with stakeholders, product, design and engineering.</div>
      </div>

      <SectionParaLeft section={sectioin12} />
      <FullWidthImage path={Show2}  />
      <SectionPara section={sectioin13} />
      <WideImage path={Show3}  />
      <SectionParaLeft section={sectioin14} />
      <FullWidthImage path={Show2}  />
      <Footer path = {footerpath}/>
    </>
  );
};

export default CarCoins;
