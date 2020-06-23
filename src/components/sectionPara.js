import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"

import gsap from "gsap";

const SectionPara = () => {
  let tl = gsap.timeline();
  // let contentRef = useRef(null);

  const [contentRef, inView] = useInView({
    rootMargin: "-10px"
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
              <span>Creating Unique </span>
            </div>
            <div className='para-line'>
              <span>digital experiences.</span>
            </div>
          </h2>
          <p className="description">
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </p>
        </div>
      </div>
    </section>
  );
};

export default SectionPara;
