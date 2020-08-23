import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TimelineLite, Power2 } from "gsap";
import { NavLink } from "react-router-dom";





const Case = ({titles}) => {
    let image = useRef(null);
    let tl = new TimelineLite();
    const [contentRef, inView] = useInView({
      rootMargin: "-200px", 
      triggerOnce:true
    });

    useEffect(() => {
        if (inView) {
        tl.to(image, 1.3, {clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",ease: Power2.easeInOut });
        tl.from(image, 2, {
            scale: 1.3,
            ease: "power3.inOut",
            delay: -1.4
          });
    }
    
      }, [inView]);

  return (
    <section className='case' ref={contentRef}>
        <div className="case-image" >
        <a href={titles.link} exact>
           
        <img
              ref={el => {
                image = el;
              }}
              src={titles.img}
              />
             </a>
            </div>       
              <div className='case-details'>
                <span>{titles.subtitle}</span>
                <h2>{titles.title}</h2>
              </div>
              
    </section>
  );
};

export default Case;