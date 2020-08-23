import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";

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
import web1 from "../assets/quinta/web1.jpg";
import web2 from "../assets/quinta/web2.jpg";
import Chatbot from "../assets/quinta/chatbot.jpg";
import app1 from "../assets/quinta/app1.png";
import app2 from "../assets/quinta/app2.png";


import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Video from "../components/video";

import Sticky from "../components/sticky";

let tl = gsap.timeline();


const intro = { title: 'Quinta Annual Festival', subtitle: 'Celebrate with the community', imageurl: Hero};
const introText = { brief: 'Quinta Da sa Luzia is an old Quinta(a country estate) at Maderia, which organises an annual festival for the local community with local traditional events. Here, our challenge was to create a service experience for the festival.', intro: 'A service Experience for the annual festival of a local Quinta(a country estate) in Madeira, Portugal, where the members of the local community gathers to get involve in traditional cultural events and workshops.', imageurl: Hero};
const sectioin1 = { num: '', title: 'Understanding the community.', text: 'We interviewed various stakeholders including the organisers, event performers, workshop organizers, and attendees, which enabled us to understand stakeholders roles and interactions. Importantly, we were able to attend that year’s festival and talk to some attendees there, and that service safari enabled us to outline the attendees journey map. '};
const sectioin2 = { num: '01', title: 'Organiser proposes an Event ', text: 'The  website allows the event hosts to submit their event proposals to be reviewed by Quinta Organising committee.'};
const sectioin3 = { num: '02', title: 'Attendees shows intent', text: 'Attendees can show interest to events. Afterwards, they are invited for a group chat with the host which is facilitated by the chatbot.'};
const sectioin4 = { num: '03', title: 'Co-creation chatbot faciilitate communication', text: 'The chatbot prompts both the host and attendees to have a discussion about their goals for the events and moderates the conversation.', imageurl:Chatbot};
const sectioin5 = { num: '04', title: 'Finalised festival schedule', text: 'The chatbot creates a poll for attendees to choose the time that suits all of them and subsequently, sets up calendar events and updates the website with the date and time.'};
const sectioin6 = { num: '02', title: 'A new experience based on service design principles', text: 'Our proposed service tackles the issues identified in the research, builds on the current relationship between the stakeholders. It focuses on two main things: First, facilitate co-creation between organisers and attendees, and second, improve attendees experience. We designed a new festival website, an App, and a co-creation chatbot in order to realise our vision of the festival.'};
const sectioin7 = { num: '01', title: 'Plan and attend events of your choice', text: 'The responsive website has the festival schedule and also provides more information about all events.Users can save the certain events as favorite and they get notified when those event are about to start.'};
const sectioin8 = { num: '01', title: 'Navigating within festival', text: 'The app has a local map of the quinta premises and allows users to navigate during the festival where they can see which event is being held at a particular location at any specific time.'};

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

  // useEffect(() => {
  //   let vh = dimensions.height * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }, [dimensions.width]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <ProjectTitle intro={intro} />
      <div></div>
      <ProjectIntro introText = {introText} />
      <hr />
    

        <SectionPara section={sectioin1} />
        <WideImage path={stakeholder}  />
        <SectionPara section={sectioin6} />

        <WideImage path={sb1}  />
        <WideImage path={sb2}  />
        <WideImage path={sb3}  />
        <WideImage path={sb4}  />

        <div className="sectionBold">

<div className ="sectionTitleBold" > Facilitating co-creation b/w organisers & attendees</div>
<div className ="sectionTitleText" >Being a community run festival, the events and workshop are finalised at the last moments, and with both the organisers and attendees often don’t know each others expectations. Our proposed solution poses on co-creatiion of various events by facilitation communication between organisers and attendees before the festival using the website and the chatbot. </div> 
</div>
<SectionPara section={sectioin2} />
        <WideImage path={web1}  />
        <SectionParaLeft section={sectioin3}/>
        <WideImage path={web2}  />
      <Sticky content={sectioin4} />
     
        <div className="sectionBoldSecond">

        <div className ="sectionTitleBold" > Improving attendees experience.</div>
        <div className ="sectionTitleText" >  We also designed the festival app that improves the attending experience. Now only does it informs attendees about the festival, it also helps them in planning and attending the events of their choice. Moreover, it orients people during the festival.</div>
      </div>
      <SectionPara section={sectioin7} />
        <FullWidthImage path={app1}  />
        <SectionParaLeft section={sectioin8}/>
        <FullWidthImage path={app2}  />
        <Footer />


    </>
  );
};

export default Quinta;
