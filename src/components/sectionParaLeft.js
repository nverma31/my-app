import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const SectionParaLeft = ({section}) => {
  let tl = gsap.timeline();
  // let contentRef = useRef(null);

  const [contentRef, inView] = useInView({
    rootMargin: "-10px", 
    triggerOnce:true
  });
  useEffect(() => {
    if (inView) {
tl.from(".leftpara-line span", 1, {
  y: 100,
  ease: "power4.out",
  delay: 0.1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
});
tl.from(".leftdescription", 1 , {
  y: 20,
  opacity:0,
  ease: "power4.out"
}, "-=1");
    }
 }, [inView] )
  return (
    <section className='leftpara-main-left'>
      <div className='leftpara-container' ref={contentRef} >
        <div className='leftpara-row'>
          <h2>
            <div className='leftpara-line'>
              <span class= "leftpara-line-numbering">{section.num} </span>
            </div>
            <div className='leftpara-line'>
              <span>{section.title}</span>
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
