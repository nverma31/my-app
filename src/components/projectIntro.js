import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
              What I did
            </div>
            <div className='intro-section-description'>
              {introText.what}
            </div>
          </div>
          <div className="intro-section">
            <div className='intro-section-heading'>
              When
            </div>
            <div className='intro-section-description'>
            {introText.when}
            </div>
          </div>
          <div className="intro-section">
            <div className='intro-section-heading'>
            {introText.client}
            </div>
            <div className='intro-section-description'>
            {introText.company}
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
