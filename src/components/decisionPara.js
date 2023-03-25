import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";

const DecisionPara = ({section}) => {
  
  return (
    <section className='dec-main-left'>
      <div className='dec-container'  >
        <div className='dec-row'>
          <h2>
            <div className='dec-line'>
              <span class= "dec-line-numbering">{section.num} </span>
            </div>
            <div className='dec-line'>
              <div>{section.title}</div>
            </div>
          </h2>
          <p className="decdescription">
                {section.text}
              </p>
        </div>
      </div>
    </section>
  );
};

export default DecisionPara;
