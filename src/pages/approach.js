import React, { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/banner";

import { NavLink } from "react-router-dom";

import gsap from "gsap";
import ImageReveal from "../components/imageReveal";

let tl = gsap.timeline();

const homeAnimation = completeAnimation => {

  tl.to(".overlay-top", 2.5, {
      height: 0,
      ease: "expo.inOut",
      // stagger: 0.4
    })
  
    .to(".intro-overlay", 0, {
      css: { display: "none" }
      ,
      onComplete: completeAnimation
    });
   
};

const Approach = ({ dimensions }) => {

  //beginning animation
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

  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });
  
  // // Ref for our element
  const sectionRef1 = useRef(null);
  // All the ref to be observed
  const intersection1 = useIntersection(sectionRef1, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  });
  
  // // Ref for our element
  const sectionRef2 = useRef(null);
  // All the ref to be observed
  const intersection2 = useIntersection(sectionRef2, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
  });
  

  // Animation for fading in
  const fadeIn = element => {
    gsap.to(element, 3, {
      opacity: 1,
      // y: -200,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };
  // Animation for fading out
  const fadeOut = element => {
    gsap.to(element, 3, {
      opacity: 0,
      y: -20,
      ease: "power4.out"
    });
  };

  // checking to see when the vieport is visible to the user
  intersection && intersection.intersectionRatio < 0.2
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  if (intersection1 && intersection1.intersectionRatio > 0.8) {
    fadeOut(".banner");
  }
  else 
  {
    fadeIn(".banner");
  }

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}

      <div className='sectionFirst'>
        <div className='pic'>
          <img
            src='https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png'
            alt=''
          />
        </div>
        <h3>Alara Frank</h3>
        <p>
          Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit.
          Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam sem et
          tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
          consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique.
          Egestas diam in arcu cursus euismod quis viverra nibh. Donec ac odio
          tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas
          pretium.
        </p>
      </div>
      <div className='sectionSecond'>
        <div ref={sectionRef} className='inner'>
          <h3 className='fadeIn'>The talk of what makes a champion.</h3>
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna
            sit. Auctor eu augue ut lectus arcu bibendum at varius. Nam aliquam
            sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet
            nec. Eu consequat ac felis donec et. Vivamus arcu felis bibendum ut
            tristique. Egestas diam in arcu cursus euismod quis viverra nibh.
            Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu
            turpis egestas pretium. Tortor vitae purus faucibus ornare
            suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
            diam quis enim lobortis. Enim sit amet venenatis urna cursus eget.
            Tellus id interdum velit laoreet id. Ac odio tempor orci dapibus. Et
            ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non
            arcu risus quis. Lectus sit amet est placerat in egestas erat
            imperdiet. Cum sociis natoque penatibus et magnis dis.
          </p>
          <div className='btn-row fadeIn'>
            <a href='/'>Click here bruh</a>
          </div>
        </div>
      </div>
      <div ref={sectionRef1} className="banner">
      <Banner />
      </div>
      <a href='/about-us' >
      <ImageReveal />              
        </a>
      
      <Banner />



    </>
  );
};

export default Approach;
