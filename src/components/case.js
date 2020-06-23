import People from "../assets/audi.webp";
import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer"
import { TimelineLite, Power2 } from "gsap";
import { NavLink } from "react-router-dom";


const caseStudies = [
  {
    id: 1,
    subtitle: "Responsive Website — 2020",
    title: "Audi Model Page Website. ",
    img: "Audi-min"
  },
  {
    id: 2,
    subtitle: "Yourspace",
    title: "Open space floor plans for you next venture",
    img: "yourspace-min"
  }
];


const Case = () => {
    let image = useRef(null);
    let tl = new TimelineLite();
    const [contentRef, inView] = useInView({
      rootMargin: "-200px", 
      triggerOnce:true
    });

    useEffect(() => {
        if (inView) {
        tl.to(image, 1.4, {clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",ease: Power2.easeInOut });
        tl.from(image, 1.4, {
            scale: 1.3,
            ease: Power2.easeInOut,
            delay: -1.4
          });
    }
    
      }, [inView]);

  return (
    <section className='case' ref={contentRef}>
        <div className="case-image">
        <a href='/about-us' exact>
           
        <img
              ref={el => {
                image = el;
              }}
              src={People}
            />
             </a>
            </div>       
              <div className='case-details'>
                <span>{caseStudies[0].subtitle}</span>
                <h2>{caseStudies[0].title}</h2>
              </div>
              
    </section>
  );
};

export default Case;