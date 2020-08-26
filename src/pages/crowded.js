import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Path from "../assets/crowded/hero.jpg";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Hero from "../assets/crowded/hero.jpg";
import Field from "../assets/crowded/field.png";
import Synthesis1 from "../assets/crowded/syn.png";
import Secondary from "../assets/crowded/second.png";

import FieldInsights from "../assets/crowded/fieldinsights.png";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Video from "../components/video";


let tl = gsap.timeline();


const intro = { title: 'Crowded Context Research', subtitle: 'Understanding People in Crowded Environments ', imageurl: Hero};
const introText = { what: 'I worked as an user research intern and conducted the secondary  and field research.', when: 'May 2017 - Aug 2017', company:'Vodafone',client: 'Client', brief: 'Generate insights regarding behaviour and needs of people at crowded environments that can be leveraged to build a platform for the attendees and businesses present in those environments.', intro: 'An exploratory research project to understand the attitudes, behaviour, needs of attendees and businesses at crowded environment like music festivals, conferences, sporting events etc.', imageurl: Hero};
const sectioin1 = { num: '01', title: 'Starting off with Secondary Research', text: 'I conducted secondary research to understand the events domains, stakeholders involved, market and technology trends. It also helped in learning more about the domain and context, and eventually ask the right questions during our field research.'};
const sectioin2 = { num: '02', title: 'Learning on the Field', text: 'Me and another researcher attended four week-long music festivals. We observed and interviewed  both attendees and people representing different businesses at these festivals.'};
const sectioin3 = { num: '03', title: 'Generating and Sharing Insights', text: 'We gathered tons of data during our feild visits. We consolidated and analysed all our data to identify people\'s behaviour, needs, and opportuniity areas in crowded environments.'};
const sectioin4 = { num: '04', title: 'Sharing our Insights with the client ', text: 'Following are some key-insights that we shared with our client.'};
const footerpath = { title: 'next project', text: 'Audi Models Website', link:'/nemo' };

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Crowded = ({ dimensions }) => {
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
      <ProjectTitle intro={intro} />
      <ProjectIntro introText = {introText} />
      <hr></hr>
        <SectionPara section={sectioin1} />
        <FullWidthImage  path={Secondary}  />
        <SectionParaLeft section={sectioin2}/>
        <WideImage path={Field}  />
        <div className="sectiom-with-tall-image">
        <TallImage path={Synthesis1}  />

        <SectionPara section={sectioin3} />
        </div>
        <SectionParaLeft section={sectioin4}/>

        <FullWidthImage  path={FieldInsights}  />

        <Footer path = {footerpath}/>


    </>
  );
};

export default Crowded;
