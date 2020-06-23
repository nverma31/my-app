import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const ProjectIntro = ({introText}) => {
  let tl = gsap.timeline();
  console.log(introText.title);

  return (
    <div className='some-page-wrapper'>
      <div className='row'>
        <div className='column'>
          <div className="intro-section">
            <div className='intro-section-heading'>
              What we did
            </div>
            <div className='intro-section-description'>
              I worked as a UX Designer
            </div>
          </div>
          <div className="intro-section">
            <div className='intro-section-heading'>
              Years
            </div>
            <div className='intro-section-description'>
              2016
            </div>
          </div>
          <div className="intro-section">
            <div className='intro-section-heading'>
              Company
            </div>
            <div className='intro-section-description'>
              Collab
            </div>
          </div>
        </div>
        <div className='double-column'>
          <div className='brief-column'>
            {introText.intro}
        </div>
          <div className='brief-column'>
            <div className='brief-column-heading'>
              The Brief
            </div>
            {introText.brief}
        </div>
        </div>


      </div>
    </div>

  );
};

export default ProjectIntro;
