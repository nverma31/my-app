import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";

const Aboutlayout = ({introText}) => {
  let tl = gsap.timeline();
  console.log(introText.title);

  return (
    <div className='some-page-wrapper'>
      <div className='row'>
        
      
        <div className='double-column'>
          
          <div className='brief-column'>
            <div className='brief-column-heading'>
              A little bit about myself
            </div>
            {introText.brief}
        </div>
        </div>
        <div className='column'>
          <div className="intro-section">
            <div className='intro-section-heading'>
              Contact
            </div>
            <div className='intro-section-description'>
              {introText.what}
            </div>
          </div>
    
        </div>


      </div>
    </div>

  );
};

export default Aboutlayout;
