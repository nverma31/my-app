import React, { useRef, useEffect } from "react";
import Audi from "../assets/home/audi.png";
import { TimelineLite, Power2 } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const ImageReveal = () => {
  let image = useRef(null);
  let container = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".reveal-img-container:after");

  let tl = new TimelineLite();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.to(imageReveal, 1.4, { height: "0%", ease: Power2.easeInOut });

    tl.from(image, 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4
    });
  });

  return (
    <section className="reveal-main">
      <p>GSAP IMAGE REVEAL</p>
      <div className="reveal-container" ref={el => (container = el)}>
        <>
          <div className="reveal-img-container">
            <img
              ref={el => {
                image = el;
              }}
              src={Audi}
            />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageReveal;