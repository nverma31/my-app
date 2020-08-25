import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";

const SectionPara = ({section}) => {
  let tl = gsap.timeline();
  // let contentRef = useRef(null);

  
  return (
    <section className='para-main'>
      <div className='para-container'  >
        <div className='para-row'>
          <h2>
            <div className='para-line'>
              <span class= "para-line-numbering">{section.num} </span>
            </div>
            <div className='para-line'>
              <span class="para-line-title">{section.title}</span>

            </div>
          
          
          </h2>
          <p className="description">
                {section.text}
              </p>
        </div>
      </div>
    </section>
  );
};

export default SectionPara;
