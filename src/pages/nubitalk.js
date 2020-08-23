import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Footer from "../components/footer";
import Video from "../components/video";
import Hero from "../assets/nubitalk/hero.jpg";
import Interview1 from "../assets/nubitalk/Interview1.jpg";
import Synthesis from "../assets/nubitalk/Synthesis.jpg";
import Test from "../assets/nubitalk/test.png";
import Research from "../assets/nubitalk/researchprocess.png";
import ideation from "../assets/nubitalk/ideation.png";
import concept1 from "../assets/nubitalk/concept1.png";
import concept2 from "../assets/nubitalk/concept2.png";
import concept3 from "../assets/nubitalk/concept3.png";
import concept4 from "../assets/nubitalk/concept4.png";

import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";
import Sticky from "../components/sticky";

const introtitle = { title: 'Nubitalk', subtitle: 'Enabling Human-Human Interaction', imageurl: Hero};
const introText = { brief: 'Provide the best user experience for Nubitalk, a cloud based contact center management and administration tool.', intro: 'The Carnegie Mellon University Master of Human-Computer Interaction (MHCI) Capstone Project is an 8-month research, design, prototyping, and evaluation client project required for the degree. The project spans two semesters where in the first semester the focus is on user research and synthesis, while the second semester is dedicated to ideation and prototyping. For my project, I worked with a client called Collab based in Lisbon.',what:'I was responsible for user research in the first semestter. Duing the second semester, I was responsible for interaction design, prototyping, and usability tests.',when:'Jan 2017 - Dec 2017',imageurl: Hero, client:'Client',company:'Collab'};
const sectioin1 = { num: '01', title: 'Understanding our users.', text: 'At the outset of this project, we sought to understand how contact centers worked and what role technology played in enabling an effective operation. We conducted user interviews, contextual inquiries, job shadowing, fly on the wall observations to aid us in understanding the context of a contact center along with the needs of the stakeholders.'};
const sectioin2 = { num: '02', title: 'Finding the human story.', text: 'We used different modelling techniques to make sense of data from sequence flow diagramming, stakeholder mapping to affinity diagramming which lead us to the key into the human story behind contact centers. Administrators and managers want their agents to work as efficiently and effectively as possible without supporting them with the right tools and processes. A lot of the work in contact centers we visited was done by third-party tools such as skype, emails, and manual task-list etc.'};
const sectioin3 = { num: '03', title: 'Ideation', text: 'We took themes from our Affinity diagram and came up with How-Might-We\'s. We generated many concepts and were in constant touch with the users and the client to refine and iterate on our concepts. Importantly, we decided to create the \'tomorrow\' than fixing today.'};
const sectioin4 = { num: '04', title: 'Information Architecture', text: 'To simplify agents jobs, we wanted to focus on the current tasks and not overwhelm them with details.  To achieve this we developed a relatively flat architecture that gives a focuses on the current communication of the agents with the callers, while allowing them to reach out to the managers, and administrators at a single click incase of an issue.'};
const sectioin5 = { num: '05', title: 'Visual design', text: 'Users are at the centre of our work. Our main focus is their experience, so that the interaction with our digital products is enriching, satisfying and fulfilling their expectations. To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.'};
const sectioin6 = { num: '', title: 'Always in touch with the team', text: 'Agents are always in touch with the team and can see thier availability at all times. They can either transfer the call to other team members or ping them forr different queries.'};
const sectioin7 = { num: '', title: 'Live transcription and suggestions for Next-Best-Actions', text: 'Nubitalk transcribes every call and using advanced machine learnings helps agents in serving the call in best possible way.'};
const sectioin8 = { num: '', title: 'All communications in one place,', text: 'Nubitalk consolidate all the channels that Agents have to use in one viewport with a tabbed menu that shows notifications for each channel.', imageurl:concept1};
const sectioin9 = { num: '', title: 'Empowering Agents by rating the callers', text: 'Nubitalk allows Agents and customers to rate each other and the call quality.   '};

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
      height: 0,
      ease: "expo.inOut"    })

   
};

const Nubitalk = ({ dimensions }) => {
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
      <div></div>
      <ProjectIntro introText = {introText} />
      <hr/>
      {/* <FullWidthImage path={Test}  /> */}
      
      <SectionPara section={sectioin1} />
        <WideImage path={Research}  />
        <SectionParaLeft section={sectioin2}/>
        <WideImage path={Synthesis}  />
        <div className="sectiom-with-tall-image">
        <div className="sectiom-with-tall-image-firrst">
        <TallImage path={ideation}  />
        </div>
        <div className="sectiom-with-tall-image-second">
        <SectionPara section={sectioin3} />
        </div>
        </div>
    
        <div className="sectionBold">

        <div className ="sectionTitleBold" > The Concept.</div>
        <div className ="sectionTitleText" > Our design focused on empoweriing the Agents and improving the communication and collaboration within the organisation. Agents were empowered by giving them more autonomy while allowing them to have  seamless communication with other members of the team. We also simplifies Agents daily work by simplifying how they communiciate across differrent channels and advanced features such as live transcription and automated suggestions. </div>
      </div>
      <Sticky content={sectioin8} />

        <SectionParaLeft section={sectioin7}/>
        <FullWidthImage path={concept2}  />
        <SectionPara section={sectioin6} />
        <WideImage path={concept3}  />
        <SectionParaLeft section={sectioin9}/>
        <WideImage path={concept4}  />
      
       

        <Footer />



    </>
  );
};

export default Nubitalk;
