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
import Hero from "../assets/quinta/hero.jpg";
import sb1 from "../assets/quinta/sb1.png";
import sb2 from "../assets/quinta/sb2.png";
import sb3 from "../assets/quinta/sb3.png";
import sb4 from "../assets/quinta/sb4.png";
import stakeholder from "../assets/quinta/stakeholder.png";
import Test from "../assets/quinta/hero.jpg";


import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Video from "../components/video";


let tl = gsap.timeline();


const intro = { title: 'Quinta Annual Festival', subtitle: 'Celebrate with the community', imageurl: Hero};
const introText = { brief: 'Quinta Da sa Luzia is an old Quinta(a country estate) at Maderia, which organises an annual festival for the local community with local traditional events. Here, our challenge was to create a service experience for the festival.', intro: 'A service Experience for the annual festival of a local Quinta(a country estate) in Madeira, Portugal where the members of the local community gathers to get involve in traditional cultural events and workshops.', imageurl: Hero};
const sectioin1 = { num: '01', title: 'Understanding to the community.', text: ' To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};
const sectioin2 = { num: '01', title: 'Event creation', text: 'Users are at the centre of our work. Our main focus is their expeestions.'};
const sectioin3 = { num: '02', title: 'Showing intent', text: ' so thsfying and fulfilncluded users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};
const sectioin4 = { num: '03', title: 'Co-creation chatbot', text: 'Users are at the centre of our work. Our main focus is their expeestions.'};
const sectioin5 = { num: '04', title: 'Event finalise', text: 'Users are at the centre of our work. Our main focus is their expeestions.'};

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Quinta = ({ dimensions }) => {
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
      <div></div>
      <ProjectIntro introText = {introText} />
      <Video />
    

        <SectionPara section={sectioin1} />
        <WideImage path={stakeholder}  />

        <WideImage path={sb1}  />
        <WideImage path={sb2}  />
        <WideImage path={sb3}  />
        <WideImage path={sb4}  />

        <div className="sectionBold">

<div className ="sectionTitleBold" > Facilitating co-creation b/w organisers & attendees</div>
<div className ="sectionTitleText" >  The redesign focused on simplifying the customer interface, responsive web design, and incorporating mobile first methodology. Significant improvements including responsive web pages, mobile first design, simplified user experiences, multiple added features, and a modern interface design.</div>
</div>
<SectionPara section={sectioin2} />
        <WideImage path={Test}  />
        <SectionParaLeft section={sectioin3}/>
        <WideImage path={Test}  />
        <SectionPara section={sectioin4} />
        <WideImage path={Test}  />
        <SectionParaLeft section={sectioin5}/>
        <WideImage path={Test}  />
        <div className="sectionBoldSecond">
        <div className ="sectionTitleNumber" > 02.</div>

        <div className ="sectionTitleBold" > Improving attendees experience.</div>
        <div className ="sectionTitleText" >  Led the design of the Activity section of the new Consumer PayPal app, which launched to 4.8 million customers in February 2016. Responsible for designing and overseeing the entire Activity app experience while working in partnership with stakeholders, product, design and engineering.</div>
      </div>
      <SectionPara section={sectioin4} />
        <WideImage path={Test}  />
        <SectionParaLeft section={sectioin5}/>
        <WideImage path={Test}  />
        <Footer />


    </>
  );
};

export default Quinta;
