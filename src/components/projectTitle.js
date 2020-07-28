import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import arrow from '../assets/arrow-right.svg'

import People from "../assets/trickle/hero.png";


const ProjectTitle = ({intro}) => {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite();
  console.log("in" + intro);
  const passedField = 'title';

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    // const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
   
    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, 1.5, {y: 100, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.1, ease: Power3.easeOut}, .2)
    
    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children], 1, {
      y: 100,
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
                  <div className="hero-content-line-inner">{intro.title}</div>
                </div>
                <div className="hero-content-description">
                <div className="hero-content-line-inner">{intro.subtitle}</div>  
                </div>
                
              </h1>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={intro.imageurl}  />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectTitle;