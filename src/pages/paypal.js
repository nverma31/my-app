import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import SectionPara from "../components/sectionPara";
import SectionParaLeft from "../components/sectionParaLeft";
import Ball from "../assets/paypal/8ball.jpg";
import Space from "../assets/Nemo/space.png";
import SocialIcons from '../components/social'
import DynamicScrollToTop from "../components/dynamicScrollToTop";

import gsap from "gsap";
import ProjectTitle from "../components/projectTitle";
import ProjectIntro from "../components/projectIntro";
import FullWidthImage from "../components/fullWidthImage";
import Sticky from "../components/sticky";

import Footer from "../components/footer";
import Video from "../components/video";
import Hero from "../assets/paypal/hero.jpg";
import Web1 from "../assets/paypal/web1.jpg";
import Web2 from "../assets/paypal/web2.jpg";
import Web3 from "../assets/paypal/web3.jpg";
import Web4 from "../assets/paypal/web4.jpg";
import Web5 from "../assets/paypal/web5.jpg";
import Web6 from "../assets/paypal/web6.jpg";
import mob1 from "../assets/paypal/mob1.jpg";
import mob2 from "../assets/paypal/mobilebf2.jpg";
import mob3 from "../assets/paypal/mobilebf3.jpg";
import mob4 from "../assets/paypal/mobilebf1.jpg";
import rollout from "../assets/paypal/rollout.png";
import support from "../assets/paypal/support.png";

import activity from "../assets/paypal/activity.jpg";
import settings from "../assets/paypal/settings.png";

import Responsive from "../assets/paypal/responsive.png";


import WideImage from "../components/wideImage";
import TallImage from "../components/tallImage";

const introtitle = { title: 'PayPal', subtitle: 'Rebooting PayPal', imageurl: Hero };
const introText = { brief: 'Pivot PayPal from an engineering driven company to a  product based company that fits better in its customers lives.', intro: 'Founded in 1998, PayPal was the first online payments company. However, with the change in landscape of how people use technology, PayPal lagged behind in providing a good experience for its customers. In 2013, I was involved in the complete overhaul of the Website and the App that better serves its customers.', when: 'July 2013 - June 2014', client: 'Company', company: 'PayPal', what: 'I worked as a software engineer in the customer team which was responsbile for the overhaul of the website and the mobile app.', imageurl: Hero };
const sectioin1 = { num: '01', title: 'The website.', text: ' To try it out, we included users in the development process, reaching to them in two key stages of the project: At the beginning, through interviews, to find out about their habits and expectations. At a more advanced stage of the visual and Ux design, to confirm that the visual language and the functional focus were as expected. By listening to the real thing, we were able to confirm that we were going in the right direction, and were able to correct and modify some issues as a result of their suggestions.' };
const sectioin2 = { num: '', title: 'Focusing on Customer Engagement', text: 'The redesign offers multiple avenues to increase customer engagement and comprehension to help build long-last relationships with customers' };
const sectioin3 = { num: '', title: 'A simple acivity tracker', text: 'Simplified how users can track thier activity and be up-to-date with their account. Significant improvements include a simplified design, new merchant and customer avatars for increased scannability, enhanced filter capabilities, globally friendly design, ability to take actions on transactions, and a more robust transaction details.', imageurl:activity };
const sectioin4 = { num: '', title: 'Responsive and Mobile first.', text: 'From the small screen to the big, the new redesigned PayPal website  works and play everywhere.', imageurl: Responsive };
const sectioin5 = { num: '', title: 'An easier way to manage settings', text: ' Completely redefine how users can manage their settings. Significant improvements included a simplified profile menu and additional functionalities for modifying your profile.', imageurl:activity };
const sectioin8 = { num: '', title: 'Phased roll out', text: 'The launch of the website was planned in many phases. Starting with throttling  1% of live-traffic in some markets and then moving progressively to full traffic in all markets '};
const sectioin7 = { num: '', title: 'Monitoring and user testing', text: 'From the small screen to the big, the new redesigned PayPal website  works and play everywhere.' };
const sectioin6 = { num: '', title: 'Support and maintenance', text: 'I was involved in providing round the clock technical support for countries during the roll out. Post launch, there was continual monitoring of key services which helps identify any issues and schedule updates. We were  pushing out global updates and maintained an ongoing programme of improvements.'};
const footerpath = { title: 'next project', text: 'Nubitalk', link:'/nubitalk' };

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {
  tl.to(".overlay-top", 1, {
    height: 0,
    ease: "expo.inOut"
  })


};

const PayPal = ({ dimensions }) => {
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
    <div>
    <DynamicScrollToTop></DynamicScrollToTop>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <ProjectTitle intro={introtitle} />
      <ProjectIntro introText={introText} />
      <FullWidthImage path={Ball} />
      <div className="sectionBold">
        <div className="sectionTitleNumber" > 01.</div>

        <div className="sectionTitleBold" > The website.</div>
        <div className="sectionTitleText" >  The redesign focused on simplifying the customer interface, responsive web design, and incorporating mobile first methodology. Significant improvements includes responsive web pages, mobile first design, simplified user experiences, multiple added features, and a modern interface design.</div>
      </div>
      <div className="paypal-website-images">
        <div className="sectionBeforeAfter">
          Before and After
      </div>
        <div className="CaptionPayPal">
          The redesigned Summary page focused highlighted activity, balance, and linked accounts.
        </div>
        <FullWidthImage path={Web1} />
        <div className="CaptionPayPal">
        The redesigned Activity page groups transactions within pending or completed sections for easier scannability.        </div>
        <FullWidthImage path={Web2} />
        <div className="CaptionPayPal">
        The redesigned transaction details groups information in logical sections, uses clear language in a  simple layout.        </div>
        <FullWidthImage path={Web3} />
        <div className="CaptionPayPal">
        The redesigned wallet page provides a quick snapshot of their PayPal balance and linked accounts.        </div>
        <FullWidthImage path={Web4} />
      </div>
      <Sticky content={sectioin4} />

      {/* <WideImage path={Dataflow}  /> */}
      <SectionPara section={sectioin2} />
      <WideImage path={Space}  />

        <div className="CaptionPayPal">
        A module that encourages customers to complete their account setup and  gamification to increase customer engagement. </div>
        <FullWidthImage path={Web5} />
        <div className="CaptionPayPal">
       A prominent space for marketing to promote new products and educate customers. The 3 circles  frequently switch out based on various marketing campaigns and product testing.        </div>
        <FullWidthImage path={Web6} />
    
   

      <div className="sectionBoldSecond">
        <div className="sectionTitleNumber" > 02.</div>

        <div className="sectionTitleBold" > The App.</div>
        <div className="sectionTitleText" >  A new Consumer PayPal app, which launched to 4.8 million customers in February 2016. Complete overrhaul of the app experience while working in partnership with stakeholders, product, design and engineering.</div>
      </div>
      <div className="paypal-website-images">
        <div className="sectionBeforeAfter">
          Before and After
      </div>
        <div className="CaptionPayPal">
        Added ability to filter by money coming in vs. out and increased scannability and visual hierarchy with date groupings and pictures. 
        </div>
        <FullWidthImage path={mob4} />
        <div className="CaptionPayPal">
        Reduced  unnecessary redundancy and increased scannability, and visual hierarchy with logical grouping and segmentation of profile data. </div>
        <FullWidthImage path={mob2} />
        <div className="CaptionPayPal">
        Optimized layout and added ability to take action including contacting the seller, added essential transactional information such as payment breakdown.    </div>
            <FullWidthImage path={mob3} />

      </div>
           <Sticky content={sectioin3} />

      <SectionPara section={sectioin5} />
      <WideImage path={settings} />
      <div className="sectionBold">
        <div className="sectionTitleNumber" > 03.</div>

        <div className="sectionTitleBold" > Global rollout.</div>
        <div className="sectionTitleText" > The website was rolled out to 24 countries and 154 million customers in May 2014. The new App was launched to 4.8 million customers in February 2016.</div>
      </div>
      <SectionParaLeft section={sectioin8} />
      <TallImage path={rollout} />
      <div className="sectiom-with-tall-image">
      <TallImage path={support} />
      <SectionPara section={sectioin6} />

      </div>

      <Footer path = {footerpath}/>

    </div>
  );
};

export default PayPal;
