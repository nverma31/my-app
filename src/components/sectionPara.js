import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const SectionPara = ({section}) => {
  let tl = gsap.timeline();
  // let contentRef = useRef(null);

  const [contentRef, inView] = useInView({
    triggerOnce:true,
    rootMargin: "-200px", 

  });
  useEffect(() => {
    if (inView) {
  tl.from(".para-line span", 1, {
  y: 100,
  ease: "power4.out",
  delay: 0.1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
});
tl.from(".description", 1 , {
  y: 20,
  opacity:0,
  ease: "power4.out"
}, "-=1");
    }
 }, [inView] )
  return (
    <section className='para-main'>
      <div className='para-container' ref={contentRef} >
        <div className='para-row'>
          <h2>
            <div className='para-line'>
              <span class= "para-line-numbering">{section.num} </span>
            </div>
            <div className='para-line'>
              <span class="para-line-title">{section.title}</span>

            </div>
            <div className='para-line'>
              <span class="para-line-title">{section.title1}</span>

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
