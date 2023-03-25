import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import DecisionPara from "../components/decisionPara";
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

import Exp1 from "../assets/sixt/exp1.png";
import Exp2 from "../assets/sixt/exp2.png";
import Exp3 from "../assets/sixt/exp3.png";
import Exp4 from "../assets/sixt/exp4.png";
import Exp5 from "../assets/sixt/exp5.png";
import Exp6 from "../assets/sixt/exp6.png";
import Exp7 from "../assets/sixt/exp7.png";

import Filler from "../assets/sixt/filler.png";



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
const sectioin2 = { num: '02', title:'Defining Success', text: 'As we were gaining a deeper understanding of both users and the micro-mobility business, we established certain guiding principles for our product, which determined the product requirements.'};
const sectioin4 = { num: '03', title:'Explorations and key design decisions', text: 'Many aspects of the user journey required me to explore many possible design solutions. I always kept going to our goals, product requirements and principles we have defined earlier while finalising a design choice. Following are some important explorations and key design decisions. '};
const sectioin5 = { num: '04', title:'Final Design', text: 'We first launched with TIER as our first partner and having all modes of micromobility— e-scooters, mopeds, and bikes —in our App. This increased our footprint from just Germany and Netherlands to all across Europe in many cities. Subsequently, we intergrated with Nextbike(shared bikes), Cooltra(shared mopeds) and MILES(shared cars) using the same design language and flow.', imageurl:FullPage};
const sectioin6 = { num: '05', title:'Impact', text: 'I am not disclosing the actual numbers but with the release of the escooters, mopeds and bikes from TIER, Nextbike, and MILES we saw positive growth across all KPIS. There is significatnt increase in the total monthly active users, monthly transactions and hence revenue. SIXT Share has also been able to increase its footprint from just Germany and Netherlands to many countries across Europe with substantial increase in vehicles per kilomter square.'};
const sectioin8 = { num: '08', title:'Map selection and Unlock', text: 'Everything we designed was responsive and we strive to acheive a consitency in feel and visual on all viewports.'};
const sectioin9 = { num: '', title:'Moped Flow', text: 'Users can book a moped either via tapping the marker on the map or scanning QR code. Afterwards, they  see a onboarding tutorial and they can unlock using the pin. During driving, they can park and resume their journey. Finally they can end thier journey in the appropriate business area.',imageurl:Moped};
const sectioin10 = { num: '', title:'E-Scooter Flow', text: 'As defined in the product requirements, we launched a e-scooter flow which works essentially the same as Mopeds. We highlight the key differences in locking, unlocking, parking, ending using in-context help with action-sheets.',imageurl:Escooter};
const sectioin11 = { num: '', title:'Bike Flow', text: 'Similarly, we created a similar flow for bikes and highlighted key differences in locking, unlocking, parking, resume, ending via in-context help with action sheets.',imageurl:Bikes};
const sectioin12 = { num: '03.01', title:'filter chips for mobility type selection.', text: 'I used filter chips that are expandable on selection and collpase on de-selection to allow user to filter the vehicles they are interested in.'};
const sectioin13 = { num: '03.02', title:'vehicle clusters and city markers at higher zoom level. ', text: 'With too many partners and having many vehicles, I designed vehicle clusters and new city markers to declutter and simplify the map experience.'};
const sectioin14 = { num: '03.03', title:'new vehicle markers.', text: 'I designed a  new visually distinct vehicle markers which highlights the particular mobility option to make it easier for users to identify the particular vehicle type.'};
const sectioin15 = { num: '03.04', title:'communicating additional zones information.', text: 'With additional types of zones offered by the partners a new color scheme along with new snackbars were added to communicate the zones better.'};
const sectioin16 = { num: '03.05', title:'redesigned floating action buttons for map actions.', text: 'We already have three FABs for key actions on the map, but with partners we need few more. Therefore, switched to a expandable FAB which expands to show all actions possible including QR scanner. '};
const sectioin17 = { num: '03.06', title:'direct user’s attention to key journey steps.', text: 'Modal bottom sheets were used to direct the user’s attention at key places in the user journey such as parking, locking, unlocking, ending as they are different for different vehicle types and partners.'};
const sectioin18 = { num: '03.07', title:'Interupting the flow in critical cases.', text: 'In order to be transparent regarding fees and penalties, modal dialogues were used to disrupt the user journey and demand user’s journey so they understand the additional fees involved.'};

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
      <FullWidthImage path={Filler}  />

      <DecisionPara section={sectioin12} />
      <TallImage path={Exp1}  />
      <DecisionPara section={sectioin13} />
      <TallImage path={Exp2}  />
      <DecisionPara section={sectioin14} />
      <TallImage path={Exp3}  />
      <DecisionPara section={sectioin15} />
      <TallImage path={Exp4}  />
      <DecisionPara section={sectioin16} />
      <TallImage path={Exp5}  />
      <DecisionPara section={sectioin17} />
      <TallImage path={Exp6}  />
      <DecisionPara section={sectioin18} />
      <TallImage path={Exp7}  />
      
      <hr/>

      <SectionPara section={sectioin5} />

      <Sticky content={sectioin9} />

      <StickyReverse content={sectioin10} />
      <Sticky content={sectioin11} />
       <SectionPara section={sectioin6} />

<hr/>
      <Footer path = {footerpath}/>
    </>
  );
};

export default Sixt;
