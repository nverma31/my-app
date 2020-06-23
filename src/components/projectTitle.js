import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import arrow from '../assets/arrow-right.svg'

import People from "../assets/Rectangle.png";


function ProjectTitle() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite();
  
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    // const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
   
    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, 1.5, {y: 500, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    
    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
   

  }, [tl])



  return (
    <div className="hero" ref={el => app = el}>
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Relieving the burden</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">of disease caused</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">by behaviors.</div>
                </div>
              </h1>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={People} alt="girl" />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTitle;