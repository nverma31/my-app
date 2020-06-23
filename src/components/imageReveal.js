import React, { useRef, useEffect } from "react";
import People from "../assets/people.webp";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { useInView } from "react-intersection-observer"


const ImageReveal = () => {
  let image = useRef(null);
  let container = useRef(null);
//   let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = new TimelineLite();
  const [contentRef, inView] = useInView({
    rootMargin: "-200px", 
    triggerOnce:true
  });
  

  useEffect(() => {
    if (inView) {
    const imageReveal = CSSRulePlugin.getRule(".img-container:after");

        console.log(inView);
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 3, { height: "0%", ease: Power2.easeInOut, delay: -0.6 });
    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4
    });
        tl.to(imageReveal, { height: "100%" });

}
else {
    // tl.to(imageReveal, { height: "100%" });
    // tl.to(container, 0, { css: { visibility: "hidden" } });

}

  }, [inView]);

  return (
    <section className="image-reveal" ref={contentRef}>
      <div className="container" ref={el => (container = el)}>
        <>
          <div className="img-container">
            
            <img
              ref={el => {
                image = el;
              }}
              src={People}
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageReveal;