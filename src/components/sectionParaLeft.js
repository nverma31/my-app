import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";

const SectionParaLeft = ({section}) => {
  
  return (
    <section className='leftpara-main-left'>
      <div className='leftpara-container'  >
        <div className='leftpara-row'>
          <h2>
            <div className='leftpara-line'>
              <span class= "leftpara-line-numbering">{section.num} </span>
            </div>
            <div className='leftpara-line'>
              <div>{section.title}</div>
            </div>
          </h2>
          <p className="leftdescription">
                {section.text}
              </p>
        </div>
      </div>
    </section>
  );
};

export default SectionParaLeft;
